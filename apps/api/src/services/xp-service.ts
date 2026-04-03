import { PrismaClient } from '@prisma/client';
import { badgeChecker } from './badge-checker';

const prisma = new PrismaClient();

// XP rewards by action
const XP_REWARDS = {
  lesson_complete: 100,
  puzzle_correct: 10,
  puzzle_incorrect: 2,
  game_win: 30,
  game_draw: 15,
  game_loss: 10,
  daily_login: 25,
  streak_bonus_multiplier: 0.1, // 10% bonus per day of streak, max 100%
};

interface XPResult {
  xpAwarded: number;
  newTotalXp: number;
  levelUp: boolean;
  newLevel: number;
  badgesEarned: any[];
}

export class XPService {
  // Award XP for an action
  async awardXP(
    userId: string,
    action: keyof typeof XP_REWARDS,
    context?: any
  ): Promise<XPResult> {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    // Calculate base XP
    let baseXP = typeof XP_REWARDS[action] === 'number' 
      ? XP_REWARDS[action] 
      : 0;

    // Apply streak bonus
    const streakBonus = Math.min(user.streak * XP_REWARDS.streak_bonus_multiplier, 1);
    const xpAwarded = Math.round(baseXP * (1 + streakBonus));

    // Update user XP
    const newTotalXp = user.totalXp + xpAwarded;
    const oldLevel = user.currentLevel;
    const newLevel = this.calculateLevel(newTotalXp);
    const levelUp = newLevel > oldLevel;

    await prisma.user.update({
      where: { id: userId },
      data: { totalXp: newTotalXp, currentLevel: newLevel },
    });

    // Check for badges
    const badgesEarned = await badgeChecker.checkBadges({
      userId,
      action: action as any,
      data: context,
    });

    return {
      xpAwarded,
      newTotalXp,
      levelUp,
      newLevel,
      badgesEarned,
    };
  }

  // Calculate level from total XP
  private calculateLevel(totalXp: number): number {
    const levelThresholds = [0, 500, 1200, 2200, 3500, 5200, 7500, 10000];
    
    for (let i = levelThresholds.length - 1; i >= 0; i--) {
      if (totalXp >= levelThresholds[i]) {
        return i + 1;
      }
    }
    return 1;
  }

  // Get XP progress for current level
  getXPProgress(totalXp: number, level: number) {
    const levelThresholds = [0, 500, 1200, 2200, 3500, 5200, 7500, 10000];
    const currentLevelXp = levelThresholds[level - 1] || 0;
    const nextLevelXp = levelThresholds[level] || levelThresholds[levelThresholds.length - 1];
    
    return {
      xpInLevel: totalXp - currentLevelXp,
      xpNeeded: nextLevelXp - currentLevelXp,
      progress: (totalXp - currentLevelXp) / (nextLevelXp - currentLevelXp),
    };
  }
}

export const xpService = new XPService();
