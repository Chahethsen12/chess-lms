import { PrismaClient } from '@prisma/client';
import { badgeChecker } from './badge-checker';

const prisma = new PrismaClient();

export class StreakTracker {
  // Check and update streak on login
  async checkStreak(userId: string): Promise<{
    streak: number;
    isNewDay: boolean;
    streakBroken: boolean;
  }> {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    let streak = user.streak;
    let isNewDay = false;
    let streakBroken = false;

    if (user.lastStudied) {
      const lastStudied = new Date(user.lastStudied);
      const lastStudiedDay = new Date(
        lastStudied.getFullYear(),
        lastStudied.getMonth(),
        lastStudied.getDate()
      );

      const daysDiff = Math.floor(
        (today.getTime() - lastStudiedDay.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (daysDiff === 0) {
        // Same day, no change
        isNewDay = false;
      } else if (daysDiff === 1) {
        // Consecutive day, increment streak
        streak = user.streak + 1;
        isNewDay = true;
      } else {
        // Streak broken
        streak = 1;
        isNewDay = true;
        streakBroken = true;
      }
    } else {
      // First activity
      streak = 1;
      isNewDay = true;
    }

    // Update user
    if (isNewDay) {
      await prisma.user.update({
        where: { id: userId },
        data: { streak, lastStudied: now },
      });

      // Check for streak badges
      await badgeChecker.checkBadges({
        userId,
        action: 'login',
      });
    }

    return { streak, isNewDay, streakBroken };
  }

  // Get streak leaderboard
  async getLeaderboard(limit: number = 10) {
    return await prisma.user.findMany({
      where: { streak: { gt: 0 } },
      orderBy: { streak: 'desc' },
      take: limit,
      select: {
        id: true,
        name: true,
        avatar: true,
        streak: true,
      },
    });
  }
}

export const streakTracker = new StreakTracker();
