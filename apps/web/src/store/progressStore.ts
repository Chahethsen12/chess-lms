import { create } from 'zustand';

interface DailyStats {
  date: string;
  puzzlesSolved: number;
  puzzlesCorrect: number;
  gamesPlayed: number;
  gamesWon: number;
  lessonsCompleted: number;
  studyTimeMinutes: number;
  xpEarned: number;
}

interface EloHistory {
  date: string;
  elo: number;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
}

interface ModuleProgress {
  moduleId: string;
  completed: boolean;
  quizScore: number | null;
  completedAt: string | null;
}

interface ProgressState {
  // Stats
  totalPuzzlesSolved: number;
  puzzleAccuracy: number;
  totalGamesPlayed: number;
  gamesWon: number;
  winRate: number;
  totalLessonsCompleted: number;
  currentStreak: number;
  longestStreak: number;
  totalXp: number;
  totalStudyTimeMinutes: number;
  
  // Historical data
  eloHistory: EloHistory[];
  dailyStats: DailyStats[];
  
  // Badges and modules
  badges: Badge[];
  moduleProgress: ModuleProgress[];
  
  // Loading state
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchProgress: (token: string) => Promise<void>;
  updateStats: (stats: Partial<ProgressState>) => void;
  addBadge: (badge: Badge) => void;
  updateModuleProgress: (moduleId: string, progress: Partial<ModuleProgress>) => void;
  incrementPuzzlesSolved: (correct: boolean) => void;
  incrementGamesPlayed: (won: boolean) => void;
  addXp: (amount: number) => void;
  addStudyTime: (minutes: number) => void;
}

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const useProgressStore = create<ProgressState>((set, get) => ({
  totalPuzzlesSolved: 0,
  puzzleAccuracy: 0,
  totalGamesPlayed: 0,
  gamesWon: 0,
  winRate: 0,
  totalLessonsCompleted: 0,
  currentStreak: 0,
  longestStreak: 0,
  totalXp: 0,
  totalStudyTimeMinutes: 0,
  eloHistory: [],
  dailyStats: [],
  badges: [],
  moduleProgress: [],
  isLoading: false,
  error: null,

  fetchProgress: async (token) => {
    set({ isLoading: true, error: null });
    try {
      const res = await fetch(`${API_URL}/progress`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!res.ok) throw new Error('Failed to fetch progress');
      
      const data = await res.json();
      set({
        ...data,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch progress',
        isLoading: false,
      });
    }
  },

  updateStats: (stats) => set(stats),

  addBadge: (badge) => {
    set((state) => ({
      badges: [...state.badges, badge],
    }));
  },

  updateModuleProgress: (moduleId, progress) => {
    set((state) => {
      const existing = state.moduleProgress.find((m) => m.moduleId === moduleId);
      if (existing) {
        return {
          moduleProgress: state.moduleProgress.map((m) =>
            m.moduleId === moduleId ? { ...m, ...progress } : m
          ),
        };
      }
      return {
        moduleProgress: [
          ...state.moduleProgress,
          { moduleId, completed: false, quizScore: null, completedAt: null, ...progress },
        ],
      };
    });
  },

  incrementPuzzlesSolved: (correct) => {
    set((state) => {
      const newTotal = state.totalPuzzlesSolved + 1;
      const correctCount = Math.round(state.puzzleAccuracy * state.totalPuzzlesSolved / 100) + (correct ? 1 : 0);
      return {
        totalPuzzlesSolved: newTotal,
        puzzleAccuracy: Math.round((correctCount / newTotal) * 100),
      };
    });
  },

  incrementGamesPlayed: (won) => {
    set((state) => {
      const newTotal = state.totalGamesPlayed + 1;
      const newWins = state.gamesWon + (won ? 1 : 0);
      return {
        totalGamesPlayed: newTotal,
        gamesWon: newWins,
        winRate: Math.round((newWins / newTotal) * 100),
      };
    });
  },

  addXp: (amount) => {
    set((state) => ({
      totalXp: state.totalXp + amount,
    }));
  },

  addStudyTime: (minutes) => {
    set((state) => ({
      totalStudyTimeMinutes: state.totalStudyTimeMinutes + minutes,
    }));
  },
}));
