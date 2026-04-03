import { PrismaClient } from '@prisma/client';
import { BADGES, Badge } from '../data/badges';

const prisma = new PrismaClient();

interface BadgeCheckContext {
  userId: string;
  action: 'puzzle_complete' | 'game_complete' | 'lesson_complete' | 'login' | 'ai_chat';
  data?: any;
}

export class BadgeChecker {
  // Check all badge conditions after an action
  async checkBadges(context: BadgeCheckContext): Promise<Badge[]> {
    const { userId } = context;
    const earnedBadges: Badge[] = [];

    // Get user's current badges
    const existingBadges = await prisma.userBadge.findMany({
      where: { userId },
      select: { badgeId: true },
    });
    const existingBadgeIds = new Set(existingBadges.map(b => b.badgeId));

    // Get user stats for badge evaluation
    const stats = await this.getUserStats(userId);

    // Check each badge
    for (const badge of BADGES) {
      if (existingBadgeIds.has(badge.id)) continue;

      const earned = await this.checkBadgeCondition(badge, stats, context);
      if (earned) {
        await prisma.userBadge.create({
          data: { userId, badgeId: badge.id },
        });
        earnedBadges.push(badge);
      }
    }

    return earnedBadges;
  }

  // Get user stats for badge evaluation
  private async getUserStats(userId: string) {
    const [user, puzzleStats, gameStats, lessonStats, aiChats] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.puzzleAttempt.aggregate({
        where: { userId },
        _count: true,
      }),
      prisma.game.aggregate({
        where: { userId },
        _count: true,
      }),
      prisma.lessonProgress.count({
        where: { userId, completed: true },
      }),
      prisma.message.count({
        where: { conversation: { userId }, role: 'user' },
      }),
    ]);

    const correctPuzzles = await prisma.puzzleAttempt.count({
      where: { userId, correct: true },
    });

    const gamesWon = await prisma.game.count({
      where: { userId, result: 'win' },
    });

    const perfectPuzzleStreak = await this.getPerfectPuzzleStreak(userId);

    return {
      eloRating: user?.eloRating || 800,
      totalXp: user?.totalXp || 0,
      streak: user?.streak || 0,
      totalPuzzles: puzzleStats._count,
      correctPuzzles,
      totalGames: gameStats._count,
      gamesWon,
      lessonsCompleted: lessonStats,
      aiChats,
      perfectPuzzleStreak,
    };
  }

  // Get current perfect puzzle streak
  private async getPerfectPuzzleStreak(userId: string): Promise<number> {
    const recentAttempts = await prisma.puzzleAttempt.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });

    let streak = 0;
    for (const attempt of recentAttempts) {
      if (attempt.correct && attempt.hintsUsed === 0) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }

  // Check a specific badge condition
  private async checkBadgeCondition(
    badge: Badge,
    stats: any,
    context: BadgeCheckContext
  ): Promise<boolean> {
    switch (badge.id) {
      // Achievement badges
      case 'first_checkmate':
        return context.action === 'game_complete' && context.data?.result === 'win';
      case 'first_puzzle':
        return context.action === 'puzzle_complete' && stats.totalPuzzles === 1;
      case 'first_lesson':
        return context.action === 'lesson_complete' && stats.lessonsCompleted === 1;
      case 'first_ai_chat':
        return context.action === 'ai_chat' && stats.aiChats === 1;

      // Milestone badges - Puzzles
      case 'puzzles_100':
        return stats.correctPuzzles >= 100;
      case 'puzzles_500':
        return stats.correctPuzzles >= 500;
      case 'puzzles_1000':
        return stats.correctPuzzles >= 1000;

      // Milestone badges - Games
      case 'games_10':
        return stats.totalGames >= 10;
      case 'games_100':
        return stats.totalGames >= 100;
      case 'wins_50':
        return stats.gamesWon >= 50;

      // Streak badges
      case 'streak_3':
        return stats.streak >= 3;
      case 'streak_7':
        return stats.streak >= 7;
      case 'streak_14':
        return stats.streak >= 14;
      case 'streak_30':
        return stats.streak >= 30;
      case 'streak_100':
        return stats.streak >= 100;

      // ELO badges
      case 'elo_1000':
        return stats.eloRating >= 1000;
      case 'elo_1200':
        return stats.eloRating >= 1200;
      case 'elo_1400':
        return stats.eloRating >= 1400;
      case 'elo_1600':
        return stats.eloRating >= 1600;
      case 'elo_1800':
        return stats.eloRating >= 1800;
      case 'elo_2000':
        return stats.eloRating >= 2000;

      // Special badges
      case 'perfect_puzzle_10':
        return stats.perfectPuzzleStreak >= 10;
      case 'curriculum_complete':
        return stats.lessonsCompleted >= 43; // Total modules
      case 'ai_conversations_100':
        return stats.aiChats >= 100;

      default:
        return false;
    }
  }
}

export const badgeChecker = new BadgeChecker();
