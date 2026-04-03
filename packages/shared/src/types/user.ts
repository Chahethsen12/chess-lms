export interface User {
  id: string;
  email: string;
  name: string | null;
  avatar: string | null;
  eloRating: number;
  currentLevel: number;
  streak: number;
  lastStudied: Date | null;
  totalXp: number;
  createdAt: Date;
}

export interface UserStats {
  totalPuzzlesSolved: number;
  puzzleAccuracy: number;
  totalGamesPlayed: number;
  winRate: number;
  totalLessonsCompleted: number;
  totalStudyTimeMinutes: number;
  longestStreak: number;
}
