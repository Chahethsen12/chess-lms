import { Router } from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { authenticate, AuthRequest } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { AppError } from '../middleware/error.js';

const router = Router();
const prisma = new PrismaClient();

interface ResultStat {
  result: string;
  _count: number;
}

interface ColorResultStat {
  color: string;
  result: string;
  _count: number;
}

interface RecentGame {
  result: string;
  eloChange: number | null;
  playedAt: Date;
}

// GET /api/games - List user's games
router.get('/', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const { result, opponentType, limit = '20', offset = '0' } = req.query;

    const where: Record<string, unknown> = { userId };
    if (result) where.result = result;
    if (opponentType) where.opponentType = opponentType;

    const [games, total] = await Promise.all([
      prisma.game.findMany({
        where,
        orderBy: { playedAt: 'desc' },
        take: parseInt(limit as string),
        skip: parseInt(offset as string),
      }),
      prisma.game.count({ where }),
    ]);

    res.json({
      games,
      total,
      limit: parseInt(limit as string),
      offset: parseInt(offset as string),
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/games/stats - Get game statistics
router.get('/stats', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;

    const [resultStats, colorStats, recentGames] = await Promise.all([
      prisma.game.groupBy({
        by: ['result'],
        where: { userId },
        _count: true,
      }),
      prisma.game.groupBy({
        by: ['color', 'result'],
        where: { userId },
        _count: true,
      }),
      prisma.game.findMany({
        where: { userId },
        orderBy: { playedAt: 'desc' },
        take: 10,
        select: { result: true, eloChange: true, playedAt: true },
      }),
    ]);

    const typedResultStats = resultStats as ResultStat[];
    const typedColorStats = colorStats as ColorResultStat[];
    const typedRecentGames = recentGames as RecentGame[];

    const totalGames = typedResultStats.reduce((sum: number, r: ResultStat) => sum + r._count, 0);
    const wins = typedResultStats.find((r: ResultStat) => r.result === 'win')?._count || 0;
    const losses = typedResultStats.find((r: ResultStat) => r.result === 'loss')?._count || 0;
    const draws = typedResultStats.find((r: ResultStat) => r.result === 'draw')?._count || 0;

    // Calculate stats by color
    const whiteStats = typedColorStats.filter((s: ColorResultStat) => s.color === 'white');
    const blackStats = typedColorStats.filter((s: ColorResultStat) => s.color === 'black');

    const whiteWins = whiteStats.find((s: ColorResultStat) => s.result === 'win')?._count || 0;
    const whiteTotal = whiteStats.reduce((sum: number, s: ColorResultStat) => sum + s._count, 0);
    const blackWins = blackStats.find((s: ColorResultStat) => s.result === 'win')?._count || 0;
    const blackTotal = blackStats.reduce((sum: number, s: ColorResultStat) => sum + s._count, 0);

    res.json({
      totalGames,
      wins,
      losses,
      draws,
      winRate: totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0,
      whiteWinRate: whiteTotal > 0 ? Math.round((whiteWins / whiteTotal) * 100) : 0,
      blackWinRate: blackTotal > 0 ? Math.round((blackWins / blackTotal) * 100) : 0,
      recentForm: typedRecentGames.map((g: RecentGame) => ({
        result: g.result,
        eloChange: g.eloChange,
        date: g.playedAt,
      })),
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/games/:id - Get specific game
router.get('/:id', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const game = await prisma.game.findFirst({
      where: { id: req.params.id, userId },
    });

    if (!game) {
      throw new AppError('Game not found', 404, 'GAME_NOT_FOUND');
    }

    res.json(game);
  } catch (error) {
    next(error);
  }
});

// POST /api/games - Save a new game
const createGameSchema = z.object({
  pgn: z.string().min(1),
  fen: z.string().optional(),
  result: z.enum(['win', 'loss', 'draw']),
  color: z.enum(['white', 'black']),
  opponentType: z.enum(['ai', 'human']),
  aiLevel: z.number().min(1).max(20).optional(),
});

router.post('/', authenticate, validate(createGameSchema), async (req: AuthRequest, res, next) => {
  try {
    const { pgn, fen, result, color, opponentType, aiLevel } = req.body;
    const userId = req.user!.id;

    // Calculate ELO change (simplified algorithm)
    let eloChange = 0;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    
    if (user) {
      const kFactor = user.eloRating < 1200 ? 40 : user.eloRating < 1600 ? 30 : 20;
      
      // Estimate opponent rating based on AI level or assume similar rating
      const opponentRating = opponentType === 'ai' && aiLevel 
        ? 600 + (aiLevel * 100) 
        : user.eloRating;
      
      const expectedScore = 1 / (1 + Math.pow(10, (opponentRating - user.eloRating) / 400));
      const actualScore = result === 'win' ? 1 : result === 'draw' ? 0.5 : 0;
      
      eloChange = Math.round(kFactor * (actualScore - expectedScore));
    }

    // Create game record
    const game = await prisma.game.create({
      data: {
        userId,
        pgn,
        fen,
        result,
        color,
        opponentType,
        aiLevel,
        eloChange,
      },
    });

    // Update user ELO
    await prisma.user.update({
      where: { id: userId },
      data: { eloRating: { increment: eloChange } },
    });

    // Update daily stats
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await prisma.dailyStats.upsert({
      where: { userId_date: { userId, date: today } },
      create: {
        userId,
        date: today,
        gamesPlayed: 1,
        gamesWon: result === 'win' ? 1 : 0,
      },
      update: {
        gamesPlayed: { increment: 1 },
        gamesWon: { increment: result === 'win' ? 1 : 0 },
      },
    });

    // Check for badges
    const earnedBadges: Array<{ id: string; name: string }> = [];
    
    const totalGames = await prisma.game.count({ where: { userId } });
    
    if (totalGames === 1) {
      const badge = await prisma.badge.findUnique({ where: { id: 'first_game' } });
      if (badge) {
        await prisma.userBadge.upsert({
          where: { userId_badgeId: { userId, badgeId: 'first_game' } },
          create: { userId, badgeId: 'first_game' },
          update: {},
        });
        earnedBadges.push({ id: badge.id, name: badge.name });
      }
    }

    res.status(201).json({
      game,
      eloChange,
      newElo: (user?.eloRating || 800) + eloChange,
      badgesEarned: earnedBadges,
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/games/:id/analyze - Analyze a game (stores analysis result)
const analyzeSchema = z.object({
  analysis: z.object({
    moves: z.array(z.object({
      move: z.string(),
      evaluation: z.number().optional(),
      bestMove: z.string().optional(),
      comment: z.string().optional(),
    })),
    summary: z.string().optional(),
    accuracy: z.number().optional(),
    mistakes: z.number().optional(),
    blunders: z.number().optional(),
  }),
});

router.post('/:id/analyze', authenticate, validate(analyzeSchema), async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const { analysis } = req.body;

    const game = await prisma.game.findFirst({
      where: { id: req.params.id, userId },
    });

    if (!game) {
      throw new AppError('Game not found', 404, 'GAME_NOT_FOUND');
    }

    const updatedGame = await prisma.game.update({
      where: { id: game.id },
      data: { analysis },
    });

    res.json(updatedGame);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/games/:id - Delete a game
router.delete('/:id', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;

    const game = await prisma.game.findFirst({
      where: { id: req.params.id, userId },
    });

    if (!game) {
      throw new AppError('Game not found', 404, 'GAME_NOT_FOUND');
    }

    await prisma.game.delete({ where: { id: game.id } });

    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

export default router;
