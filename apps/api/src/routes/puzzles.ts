import { Router } from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { authenticate, AuthRequest } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { AppError } from '../middleware/error.js';

const router = Router();
const prisma = new PrismaClient();

// GET /api/puzzles - List puzzles with filters
router.get('/', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const { theme, minRating, maxRating, limit = '20' } = req.query;

    const where: Record<string, unknown> = {};
    
    if (theme) {
      where.themes = { has: theme as string };
    }
    
    if (minRating || maxRating) {
      where.rating = {};
      if (minRating) (where.rating as Record<string, number>).gte = parseInt(minRating as string);
      if (maxRating) (where.rating as Record<string, number>).lte = parseInt(maxRating as string);
    }

    const puzzles = await prisma.cachedPuzzle.findMany({
      where,
      take: Math.min(parseInt(limit as string), 100),
      orderBy: { rating: 'asc' },
    });

    res.json(puzzles);
  } catch (error) {
    next(error);
  }
});

// GET /api/puzzles/daily - Get daily puzzle based on user level
router.get('/daily', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    
    if (!user) {
      throw new AppError('User not found', 404, 'USER_NOT_FOUND');
    }

    // Use date as seed for consistent daily puzzle
    const today = new Date().toISOString().split('T')[0];
    const seed = today.split('-').join('');

    // Find puzzle around user's ELO rating
    const targetRating = user.eloRating;
    const ratingRange = 200;

    const puzzles = await prisma.cachedPuzzle.findMany({
      where: {
        rating: {
          gte: targetRating - ratingRange,
          lte: targetRating + ratingRange,
        },
      },
      take: 100,
    });

    if (puzzles.length === 0) {
      // Fallback to any puzzle
      const fallback = await prisma.cachedPuzzle.findFirst();
      if (!fallback) {
        throw new AppError('No puzzles available', 404, 'NO_PUZZLES');
      }
      res.json(fallback);
      return;
    }

    // Deterministic selection based on date
    const index = parseInt(seed) % puzzles.length;
    res.json(puzzles[index]);
  } catch (error) {
    next(error);
  }
});

// GET /api/puzzles/recommended - Get puzzles based on user's weak areas
router.get('/recommended', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const limit = parseInt(req.query.limit as string) || 10;

    // Get user's puzzle history to find weak themes
    const attempts = await prisma.puzzleAttempt.findMany({
      where: { userId },
      select: { theme: true, correct: true },
    });

    // Calculate accuracy by theme
    const themeStats: Record<string, { total: number; correct: number }> = {};
    for (const attempt of attempts) {
      if (!themeStats[attempt.theme]) {
        themeStats[attempt.theme] = { total: 0, correct: 0 };
      }
      themeStats[attempt.theme].total++;
      if (attempt.correct) {
        themeStats[attempt.theme].correct++;
      }
    }

    // Find weakest themes (lowest accuracy with at least 3 attempts)
    const weakThemes = Object.entries(themeStats)
      .filter(([, stats]) => stats.total >= 3)
      .map(([theme, stats]) => ({
        theme,
        accuracy: stats.correct / stats.total,
      }))
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 3)
      .map(t => t.theme);

    const user = await prisma.user.findUnique({ where: { id: userId } });
    const targetRating = user?.eloRating || 800;

    // Get puzzles from weak themes around user's rating
    let puzzles = await prisma.cachedPuzzle.findMany({
      where: {
        themes: weakThemes.length > 0 ? { hasSome: weakThemes } : undefined,
        rating: {
          gte: targetRating - 150,
          lte: targetRating + 150,
        },
      },
      take: limit,
    });

    // Fallback if no puzzles found
    if (puzzles.length === 0) {
      puzzles = await prisma.cachedPuzzle.findMany({
        where: {
          rating: {
            gte: targetRating - 300,
            lte: targetRating + 300,
          },
        },
        take: limit,
      });
    }

    res.json({
      puzzles,
      weakThemes,
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/puzzles/:id - Get specific puzzle
router.get('/:id', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const puzzle = await prisma.cachedPuzzle.findUnique({
      where: { id: req.params.id },
    });

    if (!puzzle) {
      throw new AppError('Puzzle not found', 404, 'PUZZLE_NOT_FOUND');
    }

    res.json(puzzle);
  } catch (error) {
    next(error);
  }
});

// POST /api/puzzles/:id/solve - Submit puzzle solution
const solveSchema = z.object({
  correct: z.boolean(),
  timeMs: z.number().min(0),
  hintsUsed: z.number().min(0).default(0),
});

router.post('/:id/solve', authenticate, validate(solveSchema), async (req: AuthRequest, res, next) => {
  try {
    const { correct, timeMs, hintsUsed } = req.body;
    const userId = req.user!.id;
    const puzzleId = req.params.id;

    const puzzle = await prisma.cachedPuzzle.findUnique({
      where: { id: puzzleId },
    });

    if (!puzzle) {
      throw new AppError('Puzzle not found', 404, 'PUZZLE_NOT_FOUND');
    }

    // Record the attempt
    await prisma.puzzleAttempt.create({
      data: {
        userId,
        puzzleId,
        correct,
        timeMs,
        hintsUsed,
        theme: puzzle.themes[0] || 'general',
        rating: puzzle.rating,
      },
    });

    // Calculate XP reward
    let xpAwarded = 0;
    if (correct) {
      xpAwarded = Math.floor(10 + (puzzle.rating / 100));
      if (hintsUsed === 0) xpAwarded += 5; // Bonus for no hints
      if (timeMs < 30000) xpAwarded += 3; // Speed bonus
    }

    // Update user XP
    const user = await prisma.user.update({
      where: { id: userId },
      data: { totalXp: { increment: xpAwarded } },
    });

    // Update daily stats
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await prisma.dailyStats.upsert({
      where: { userId_date: { userId, date: today } },
      create: {
        userId,
        date: today,
        puzzlesSolved: 1,
        puzzlesCorrect: correct ? 1 : 0,
        xpEarned: xpAwarded,
      },
      update: {
        puzzlesSolved: { increment: 1 },
        puzzlesCorrect: { increment: correct ? 1 : 0 },
        xpEarned: { increment: xpAwarded },
      },
    });

    // Check for badges
    const earnedBadges: Array<{ id: string; name: string }> = [];
    
    const totalPuzzles = await prisma.puzzleAttempt.count({ where: { userId } });
    
    // First puzzle badge
    if (totalPuzzles === 1) {
      const badge = await prisma.badge.findUnique({ where: { id: 'first_puzzle' } });
      if (badge) {
        await prisma.userBadge.upsert({
          where: { userId_badgeId: { userId, badgeId: 'first_puzzle' } },
          create: { userId, badgeId: 'first_puzzle' },
          update: {},
        });
        earnedBadges.push({ id: badge.id, name: badge.name });
      }
    }

    // 100 puzzles badge
    if (totalPuzzles === 100) {
      const badge = await prisma.badge.findUnique({ where: { id: 'puzzle_100' } });
      if (badge) {
        await prisma.userBadge.upsert({
          where: { userId_badgeId: { userId, badgeId: 'puzzle_100' } },
          create: { userId, badgeId: 'puzzle_100' },
          update: {},
        });
        earnedBadges.push({ id: badge.id, name: badge.name });
      }
    }

    res.json({
      correct,
      xpAwarded,
      totalXp: user.totalXp,
      badgesEarned: earnedBadges,
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/puzzles/history - Get user's puzzle history
router.get('/user/history', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const limit = parseInt(req.query.limit as string) || 50;
    const offset = parseInt(req.query.offset as string) || 0;

    const [attempts, total] = await Promise.all([
      prisma.puzzleAttempt.findMany({
        where: { userId },
        orderBy: { attemptedAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.puzzleAttempt.count({ where: { userId } }),
    ]);

    res.json({
      attempts,
      total,
      limit,
      offset,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
