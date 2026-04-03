export interface BadgeDefinition {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  category: 'achievement' | 'milestone' | 'streak' | 'skill';
  condition: {
    type: 'games_won' | 'streak' | 'puzzles_solved' | 'elo' | 'modules_complete' | 'puzzles_accuracy' | 'games_played' | 'ai_chats' | 'study_time' | 'custom';
    value: number;
    operator: '>=' | '==' | '>';
  };
  xpBonus: number; // XP awarded when badge is earned
}

export const badges: BadgeDefinition[] = [
  // === ACHIEVEMENT BADGES ===
  {
    id: 'first_checkmate',
    name: 'First Blood',
    description: 'Win your first game',
    icon: 'Sword',
    category: 'achievement',
    condition: { type: 'games_won', value: 1, operator: '>=' },
    xpBonus: 50,
  },
  {
    id: 'first_puzzle',
    name: 'Puzzle Starter',
    description: 'Solve your first puzzle',
    icon: 'Puzzle',
    category: 'achievement',
    condition: { type: 'puzzles_solved', value: 1, operator: '>=' },
    xpBonus: 25,
  },
  {
    id: 'first_lesson',
    name: 'Eager Learner',
    description: 'Complete your first lesson',
    icon: 'BookOpen',
    category: 'achievement',
    condition: { type: 'modules_complete', value: 1, operator: '>=' },
    xpBonus: 50,
  },
  {
    id: 'ai_conversation',
    name: 'Seeking Wisdom',
    description: 'Have your first chat with the AI coach',
    icon: 'MessageCircle',
    category: 'achievement',
    condition: { type: 'ai_chats', value: 1, operator: '>=' },
    xpBonus: 25,
  },

  // === MILESTONE BADGES ===
  {
    id: 'puzzles_100',
    name: 'Tactician',
    description: 'Solve 100 puzzles',
    icon: 'Target',
    category: 'milestone',
    condition: { type: 'puzzles_solved', value: 100, operator: '>=' },
    xpBonus: 200,
  },
  {
    id: 'puzzles_500',
    name: 'Tactical Warrior',
    description: 'Solve 500 puzzles',
    icon: 'Crosshair',
    category: 'milestone',
    condition: { type: 'puzzles_solved', value: 500, operator: '>=' },
    xpBonus: 500,
  },
  {
    id: 'puzzles_1000',
    name: 'Pattern Master',
    description: 'Solve 1000 puzzles',
    icon: 'Sparkles',
    category: 'milestone',
    condition: { type: 'puzzles_solved', value: 1000, operator: '>=' },
    xpBonus: 1000,
  },
  {
    id: 'games_10',
    name: 'Getting Started',
    description: 'Play 10 games',
    icon: 'Play',
    category: 'milestone',
    condition: { type: 'games_played', value: 10, operator: '>=' },
    xpBonus: 100,
  },
  {
    id: 'games_50',
    name: 'Regular Player',
    description: 'Play 50 games',
    icon: 'Gamepad2',
    category: 'milestone',
    condition: { type: 'games_played', value: 50, operator: '>=' },
    xpBonus: 300,
  },
  {
    id: 'games_100',
    name: 'Century Player',
    description: 'Play 100 games',
    icon: 'Trophy',
    category: 'milestone',
    condition: { type: 'games_played', value: 100, operator: '>=' },
    xpBonus: 500,
  },
  {
    id: 'wins_10',
    name: 'Rising Champion',
    description: 'Win 10 games',
    icon: 'Medal',
    category: 'milestone',
    condition: { type: 'games_won', value: 10, operator: '>=' },
    xpBonus: 200,
  },
  {
    id: 'wins_50',
    name: 'Seasoned Victor',
    description: 'Win 50 games',
    icon: 'Award',
    category: 'milestone',
    condition: { type: 'games_won', value: 50, operator: '>=' },
    xpBonus: 500,
  },

  // === STREAK BADGES ===
  {
    id: 'streak_3',
    name: 'Hat Trick',
    description: 'Maintain a 3-day study streak',
    icon: 'Flame',
    category: 'streak',
    condition: { type: 'streak', value: 3, operator: '>=' },
    xpBonus: 50,
  },
  {
    id: 'streak_7',
    name: 'On a Roll',
    description: 'Maintain a 7-day study streak',
    icon: 'Flame',
    category: 'streak',
    condition: { type: 'streak', value: 7, operator: '>=' },
    xpBonus: 150,
  },
  {
    id: 'streak_14',
    name: 'Dedicated Student',
    description: 'Maintain a 14-day study streak',
    icon: 'Flame',
    category: 'streak',
    condition: { type: 'streak', value: 14, operator: '>=' },
    xpBonus: 300,
  },
  {
    id: 'streak_30',
    name: 'Chess Addict',
    description: 'Maintain a 30-day study streak',
    icon: 'Flame',
    category: 'streak',
    condition: { type: 'streak', value: 30, operator: '>=' },
    xpBonus: 750,
  },
  {
    id: 'streak_100',
    name: 'Legendary Dedication',
    description: 'Maintain a 100-day study streak',
    icon: 'Crown',
    category: 'streak',
    condition: { type: 'streak', value: 100, operator: '>=' },
    xpBonus: 2500,
  },

  // === SKILL / ELO BADGES ===
  {
    id: 'elo_400',
    name: 'First Steps',
    description: 'Reach 400 ELO',
    icon: 'TrendingUp',
    category: 'skill',
    condition: { type: 'elo', value: 400, operator: '>=' },
    xpBonus: 100,
  },
  {
    id: 'elo_800',
    name: 'Apprentice',
    description: 'Reach 800 ELO - Beginner level',
    icon: 'GraduationCap',
    category: 'skill',
    condition: { type: 'elo', value: 800, operator: '>=' },
    xpBonus: 250,
  },
  {
    id: 'elo_1200',
    name: 'Club Player',
    description: 'Reach 1200 ELO - Intermediate level',
    icon: 'Users',
    category: 'skill',
    condition: { type: 'elo', value: 1200, operator: '>=' },
    xpBonus: 500,
  },
  {
    id: 'elo_1600',
    name: 'Tournament Ready',
    description: 'Reach 1600 ELO - Club player level',
    icon: 'Swords',
    category: 'skill',
    condition: { type: 'elo', value: 1600, operator: '>=' },
    xpBonus: 1000,
  },
  {
    id: 'elo_1800',
    name: 'Expert',
    description: 'Reach 1800 ELO - Expert level',
    icon: 'Star',
    category: 'skill',
    condition: { type: 'elo', value: 1800, operator: '>=' },
    xpBonus: 1500,
  },
  {
    id: 'elo_2000',
    name: 'Candidate Master',
    description: 'Reach 2000 ELO - Candidate Master level',
    icon: 'Crown',
    category: 'skill',
    condition: { type: 'elo', value: 2000, operator: '>=' },
    xpBonus: 2500,
  },

  // === CURRICULUM BADGES ===
  {
    id: 'level_1_complete',
    name: 'Foundation Built',
    description: 'Complete all Level 1 lessons',
    icon: 'CheckCircle',
    category: 'milestone',
    condition: { type: 'custom', value: 1, operator: '==' },
    xpBonus: 500,
  },
  {
    id: 'level_2_complete',
    name: 'Beginner Graduate',
    description: 'Complete all Level 2 lessons',
    icon: 'CheckCircle',
    category: 'milestone',
    condition: { type: 'custom', value: 2, operator: '==' },
    xpBonus: 750,
  },
  {
    id: 'level_3_complete',
    name: 'Intermediate Scholar',
    description: 'Complete all Level 3 lessons',
    icon: 'CheckCircle',
    category: 'milestone',
    condition: { type: 'custom', value: 3, operator: '==' },
    xpBonus: 1000,
  },
  {
    id: 'all_modules',
    name: 'Grand Scholar',
    description: 'Complete all curriculum modules',
    icon: 'GraduationCap',
    category: 'milestone',
    condition: { type: 'modules_complete', value: 43, operator: '>=' },
    xpBonus: 5000,
  },

  // === SPECIAL BADGES ===
  {
    id: 'perfect_puzzle_5',
    name: 'Sharp Eye',
    description: 'Solve 5 puzzles in a row without hints',
    icon: 'Eye',
    category: 'achievement',
    condition: { type: 'custom', value: 5, operator: '==' },
    xpBonus: 100,
  },
  {
    id: 'perfect_puzzle_10',
    name: 'Tactical Precision',
    description: 'Solve 10 puzzles in a row without hints',
    icon: 'Zap',
    category: 'achievement',
    condition: { type: 'custom', value: 10, operator: '==' },
    xpBonus: 250,
  },
  {
    id: 'comeback_king',
    name: 'Comeback King',
    description: 'Win a game after being down significant material',
    icon: 'RotateCcw',
    category: 'achievement',
    condition: { type: 'custom', value: 1, operator: '==' },
    xpBonus: 200,
  },
  {
    id: 'speed_demon',
    name: 'Speed Demon',
    description: 'Win 10 bullet games (1 minute)',
    icon: 'Zap',
    category: 'achievement',
    condition: { type: 'custom', value: 10, operator: '==' },
    xpBonus: 200,
  },
  {
    id: 'opening_explorer',
    name: 'Opening Explorer',
    description: 'Add 10 openings to your repertoire',
    icon: 'BookMarked',
    category: 'achievement',
    condition: { type: 'custom', value: 10, operator: '==' },
    xpBonus: 150,
  },
  {
    id: 'endgame_specialist',
    name: 'Endgame Specialist',
    description: 'Complete all endgame training modules',
    icon: 'Crown',
    category: 'skill',
    condition: { type: 'custom', value: 1, operator: '==' },
    xpBonus: 500,
  },
];

// Helper function to get badge by ID
export function getBadgeById(id: string): BadgeDefinition | undefined {
  return badges.find(b => b.id === id);
}

// Helper function to get badges by category
export function getBadgesByCategory(category: BadgeDefinition['category']): BadgeDefinition[] {
  return badges.filter(b => b.category === category);
}

// Export badge count for validation
export const TOTAL_BADGES = badges.length;
