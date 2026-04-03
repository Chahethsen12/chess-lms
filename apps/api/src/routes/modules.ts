import { Router } from 'express';
import { z } from 'zod';
import { PrismaClient, LessonProgress, Module } from '@prisma/client';
import { authenticate, AuthRequest } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { AppError } from '../middleware/error.js';

const router = Router();
const prisma = new PrismaClient();

// GET /api/modules - List all modules with progress
router.get('/', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;

    const [modules, progress] = await Promise.all([
      prisma.module.findMany({ orderBy: [{ level: 'asc' }, { order: 'asc' }] }),
      prisma.lessonProgress.findMany({ where: { userId } }),
    ]);

    const progressMap = new Map(progress.map((p: LessonProgress) => [p.moduleId, p]));

    const result = modules.map((m: Module) => ({
      ...m,
      progress: progressMap.get(m.id) || null,
    }));

    res.json(result);
  } catch (error) {
    next(error);
  }
});

// GET /api/modules/:id
router.get('/:id', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const module = await prisma.module.findUnique({
      where: { id: req.params.id },
    });

    if (!module) {
      throw new AppError('Module not found', 404, 'MODULE_NOT_FOUND');
    }

    const progress = await prisma.lessonProgress.findUnique({
      where: { userId_moduleId: { userId: req.user!.id, moduleId: module.id } },
    });

    res.json({ ...module, progress });
  } catch (error) {
    next(error);
  }
});

// GET /api/modules/level/:level - Get modules by level
router.get('/level/:level', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const level = parseInt(req.params.level);
    const userId = req.user!.id;

    const modules = await prisma.module.findMany({
      where: { level },
      orderBy: { order: 'asc' },
    });

    const progress = await prisma.lessonProgress.findMany({
      where: { 
        userId,
        moduleId: { in: modules.map((m: Module) => m.id) },
      },
    });

    const progressMap = new Map(progress.map((p: LessonProgress) => [p.moduleId, p]));

    const result = modules.map((m: Module) => ({
      ...m,
      progress: progressMap.get(m.id) || null,
    }));

    res.json(result);
  } catch (error) {
    next(error);
  }
});

// POST /api/modules/:id/complete
const completeSchema = z.object({
  quizScore: z.number().min(0).max(100),
  timeSpent: z.number().optional(),
});

router.post('/:id/complete', authenticate, validate(completeSchema), async (req: AuthRequest, res, next) => {
  try {
    const { quizScore, timeSpent } = req.body;
    const userId = req.user!.id;
    const moduleId = req.params.id;

    const module = await prisma.module.findUnique({ where: { id: moduleId } });
    if (!module) {
      throw new AppError('Module not found', 404, 'MODULE_NOT_FOUND');
    }

    // Upsert lesson progress
    await prisma.lessonProgress.upsert({
      where: { userId_moduleId: { userId, moduleId } },
      create: {
        userId,
        moduleId,
        completed: true,
        quizScore,
        completedAt: new Date(),
        timeSpent: timeSpent || 0,
      },
      update: {
        completed: true,
        quizScore,
        completedAt: new Date(),
        timeSpent: { increment: timeSpent || 0 },
      },
    });

    // Award XP
    const user = await prisma.user.update({
      where: { id: userId },
      data: { totalXp: { increment: module.xpReward } },
    });

    // Check for badges (simplified - would need badge checker service)
    const completedCount = await prisma.lessonProgress.count({
      where: { userId, completed: true },
    });

    const earnedBadges: Array<{ id: string; name: string }> = [];

    if (completedCount === 1) {
      // First lesson badge
      const badge = await prisma.badge.findUnique({ where: { id: 'first_lesson' } });
      if (badge) {
        await prisma.userBadge.upsert({
          where: { userId_badgeId: { userId, badgeId: 'first_lesson' } },
          create: { userId, badgeId: 'first_lesson' },
          update: {},
        });
        earnedBadges.push({ id: badge.id, name: badge.name });
      }
    }

    // Update daily stats
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await prisma.dailyStats.upsert({
      where: { userId_date: { userId, date: today } },
      create: {
        userId,
        date: today,
        lessonsCompleted: 1,
        xpEarned: module.xpReward,
        studyTimeMinutes: Math.floor((timeSpent || 0) / 60),
      },
      update: {
        lessonsCompleted: { increment: 1 },
        xpEarned: { increment: module.xpReward },
        studyTimeMinutes: { increment: Math.floor((timeSpent || 0) / 60) },
      },
    });

    res.json({
      xpAwarded: module.xpReward,
      totalXp: user.totalXp,
      badgesEarned: earnedBadges,
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/modules/:id/start - Track module start
router.post('/:id/start', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const moduleId = req.params.id;

    const module = await prisma.module.findUnique({ where: { id: moduleId } });
    if (!module) {
      throw new AppError('Module not found', 404, 'MODULE_NOT_FOUND');
    }

    // Create progress entry if doesn't exist
    await prisma.lessonProgress.upsert({
      where: { userId_moduleId: { userId, moduleId } },
      create: {
        userId,
        moduleId,
        completed: false,
      },
      update: {},
    });

    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

export default router;
