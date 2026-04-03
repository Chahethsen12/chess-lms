export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: BadgeCondition;
  category: BadgeCategory;
}

export interface BadgeCondition {
  type: 'games_won' | 'streak' | 'puzzles_solved' | 'elo' | 'modules_complete' | 'custom';
  value: number;
  operator: '>=' | '==' | '>';
}

export type BadgeCategory = 'achievement' | 'milestone' | 'streak' | 'skill';

export interface UserBadge {
  id: string;
  userId: string;
  badgeId: string;
  earnedAt: Date;
}
