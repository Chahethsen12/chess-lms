import { Router } from 'express';
import { z } from 'zod';
import { PrismaClient, UserBadge, Badge } from '@prisma/client';
import { authenticate, AuthRequest } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';

const router = Router();
const prisma = new PrismaClient();

interface GameStatResult {
  result: string;
  _count: number;
}

// GET /api/progress - Get full user stats
router.get('/', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;

    const [user, puzzleStats, gameStats, lessonStats, badges] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.puzzleAttempt.aggregate({
        where: { userId },
        _count: true,
        _avg: { timeMs: true },
      }),
      prisma.game.groupBy({
        by: ['result'],
        where: { userId },
        _count: true,
      }),
      prisma.lessonProgress.count({
        where: { userId, completed: true },
      }),
      prisma.userBadge.findMany({
        where: { userId },
        include: { badge: true },
      }),
    ]);

    const correctPuzzles = await prisma.puzzleAttempt.count({
      where: { userId, correct: true },
    });

    const totalGames = (gameStats as GameStatResult[]).reduce((sum: number, g: GameStatResult) => sum + g._count, 0);
    const gamesWon = (gameStats as GameStatResult[]).find((g: GameStatResult) => g.result === 'win')?._count || 0;

    res.json({
      totalPuzzlesSolved: puzzleStats._count,
      puzzleAccuracy: puzzleStats._count > 0 ? Math.round((correctPuzzles / puzzleStats._count) * 100) : 0,
      totalGamesPlayed: totalGames,
      gamesWon,
      winRate: totalGames > 0 ? Math.round((gamesWon / totalGames) * 100) : 0,
      totalLessonsCompleted: lessonStats,
      currentStreak: user?.streak || 0,
      totalXp: user?.totalXp || 0,
      eloRating: user?.eloRating || 800,
      badges: badges.map((ub: UserBadge & { badge: Badge }) => ({
        ...ub.badge,
        earnedAt: ub.earnedAt,
      })),
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/progress/elo-history
router.get('/elo-history', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const days = parseInt(req.query.days as string) || 90;
    const userId = req.user!.id;

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const games = await prisma.game.findMany({
      where: {
        userId,
        playedAt: { gte: startDate },
        eloChange: { not: null },
      },
      orderBy: { playedAt: 'asc' },
      select: { playedAt: true, eloChange: true },
    });

    const user = await prisma.user.findUnique({ where: { id: userId } });
    let currentElo = user?.eloRating || 800;

    // Work backwards to get starting ELO
    for (let i = games.length - 1; i >= 0; i--) {
      currentElo -= games[i].eloChange || 0;
    }

    // Build history
    const history = games.map((game: { playedAt: Date; eloChange: number | null }) => {
      currentElo += game.eloChange || 0;
      return {
        date: game.playedAt.toISOString().split('T')[0],
        elo: currentElo,
      };
    });

    res.json(history);
  } catch (error) {
    next(error);
  }
});

// POST /api/progress/update-elo
const updateEloSchema = z.object({
  change: z.number(),
});

router.post('/update-elo', authenticate, validate(updateEloSchema), async (req: AuthRequest, res, next) => {
  try {
    const { change } = req.body;
    const userId = req.user!.id;

    const user = await prisma.user.update({
      where: { id: userId },
      data: { eloRating: { increment: change } },
    });

    res.json({ newElo: user.eloRating });
  } catch (error) {
    next(error);
  }
});

// GET /api/progress/daily - Get daily stats
router.get('/daily', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const days = parseInt(req.query.days as string) || 30;

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    startDate.setHours(0, 0, 0, 0);

    const dailyStats = await prisma.dailyStats.findMany({
      where: {
        userId,
        date: { gte: startDate },
      },
      orderBy: { date: 'asc' },
    });

    res.json(dailyStats);
  } catch (error) {
    next(error);
  }
});

export default router;
