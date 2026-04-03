/**
 * Type-safe API client for Chess LMS
 */

const API_URL = import.meta.env.VITE_API_URL || '/api';

interface ApiError {
  message: string;
  code: string;
  details?: unknown;
}

interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
}

class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setToken(token: string | null) {
    this.token = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      const error = data.error || { message: 'Request failed', code: 'UNKNOWN' };
      throw new ApiError(error.message, error.code, response.status);
    }

    return data;
  }

  // Auth
  async login(email: string, password: string) {
    return this.request<{ token: string; user: User }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(email: string, password: string, name?: string) {
    return this.request<{ token: string; user: User }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  }

  async getMe() {
    return this.request<User>('/auth/me');
  }

  // Progress
  async getProgress() {
    return this.request<UserProgress>('/progress');
  }

  async getEloHistory(days: number = 90) {
    return this.request<EloHistory[]>(`/progress/elo-history?days=${days}`);
  }

  async updateElo(change: number) {
    return this.request<{ newElo: number }>('/progress/update-elo', {
      method: 'POST',
      body: JSON.stringify({ change }),
    });
  }

  // Modules
  async getModules() {
    return this.request<Module[]>('/modules');
  }

  async getModule(id: string) {
    return this.request<Module>(`/modules/${id}`);
  }

  async completeModule(id: string, quizScore: number) {
    return this.request<{ xpAwarded: number; badgesEarned: Badge[] }>(
      `/modules/${id}/complete`,
      {
        method: 'POST',
        body: JSON.stringify({ quizScore }),
      }
    );
  }

  // Puzzles
  async getPuzzles(params: { rating?: number; theme?: string; count?: number }) {
    const query = new URLSearchParams();
    if (params.rating) query.set('rating', String(params.rating));
    if (params.theme) query.set('theme', params.theme);
    if (params.count) query.set('count', String(params.count));
    
    return this.request<Puzzle[]>(`/puzzles?${query}`);
  }

  async submitPuzzleAttempt(attempt: PuzzleAttemptInput) {
    return this.request<{ correct: boolean; xpAwarded: number }>(
      '/puzzles/attempt',
      {
        method: 'POST',
        body: JSON.stringify(attempt),
      }
    );
  }

  // Games
  async getGames(page: number = 1, pageSize: number = 20) {
    return this.request<PaginatedResponse<Game>>(
      `/games?page=${page}&pageSize=${pageSize}`
    );
  }

  async saveGame(game: GameInput) {
    return this.request<Game>('/games', {
      method: 'POST',
      body: JSON.stringify(game),
    });
  }

  async analyzeGame(id: string) {
    return this.request<GameAnalysis>(`/games/${id}/analyze`, {
      method: 'POST',
    });
  }

  // AI Chat
  async chat(messages: ChatMessage[], context?: AIContext) {
    return this.request<{ content: string; provider: string }>('/ai/chat', {
      method: 'POST',
      body: JSON.stringify({ messages, context }),
    });
  }

  async getConversations() {
    return this.request<Conversation[]>('/ai/conversations');
  }

  async getConversation(id: string) {
    return this.request<Conversation>(`/ai/conversations/${id}`);
  }

  async deleteConversation(id: string) {
    return this.request<void>(`/ai/conversations/${id}`, {
      method: 'DELETE',
    });
  }

  async analyzePosition(fen: string) {
    return this.request<PositionAnalysis>('/ai/analyze-position', {
      method: 'POST',
      body: JSON.stringify({ fen }),
    });
  }

  // Openings
  async searchOpenings(query: string) {
    return this.request<Opening[]>(`/openings?q=${encodeURIComponent(query)}`);
  }

  async getOpening(eco: string) {
    return this.request<Opening>(`/openings/${eco}`);
  }

  async addToRepertoire(opening: RepertoireEntry) {
    return this.request<void>('/openings/repertoire', {
      method: 'POST',
      body: JSON.stringify(opening),
    });
  }
}

// Custom error class
export class ApiError extends Error {
  constructor(
    message: string,
    public code: string,
    public status: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Types
interface User {
  id: string;
  email: string;
  name: string | null;
  avatar: string | null;
  eloRating: number;
  currentLevel: number;
  streak: number;
  totalXp: number;
}

interface UserProgress {
  totalPuzzlesSolved: number;
  puzzleAccuracy: number;
  totalGamesPlayed: number;
  winRate: number;
  totalLessonsCompleted: number;
  currentStreak: number;
  totalXp: number;
}

interface EloHistory {
  date: string;
  elo: number;
}

interface Module {
  id: string;
  level: number;
  title: string;
  description: string;
  content: unknown;
  xpReward: number;
  prerequisites: string[];
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface Puzzle {
  id: string;
  fen: string;
  moves: string[];
  rating: number;
  themes: string[];
}

interface PuzzleAttemptInput {
  puzzleId: string;
  correct: boolean;
  hintsUsed: number;
  timeMs: number;
  theme: string;
  rating: number;
}

interface Game {
  id: string;
  pgn: string;
  fen: string | null;
  result: string;
  color: string;
  opponentType: string;
  aiLevel: number | null;
  eloChange: number | null;
  playedAt: string;
}

interface GameInput {
  pgn: string;
  result: 'win' | 'loss' | 'draw';
  color: 'white' | 'black';
  opponentType: 'ai' | 'human';
  aiLevel?: number;
}

interface GameAnalysis {
  moves: unknown[];
  blunders: number;
  mistakes: number;
  inaccuracies: number;
  accuracy: number;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AIContext {
  elo?: number;
  currentModule?: string;
  fen?: string;
}

interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
}

interface PositionAnalysis {
  evaluation: number;
  bestMove: string;
  explanation: string;
}

interface Opening {
  eco: string;
  name: string;
  pgn: string;
  description: string;
  winRate: { white: number; draw: number; black: number };
}

interface RepertoireEntry {
  eco: string;
  name: string;
  pgn: string;
  notes?: string;
}

interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// Singleton instance
export const api = new ApiClient(API_URL);

// Hook for using API with auth token
import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

export function useApi() {
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    api.setToken(token);
  }, [token]);

  return api;
}

export type {
  User,
  UserProgress,
  EloHistory,
  Module,
  Badge,
  Puzzle,
  PuzzleAttemptInput,
  Game,
  GameInput,
  GameAnalysis,
  ChatMessage,
  AIContext,
  Conversation,
  PositionAnalysis,
  Opening,
  RepertoireEntry,
  PaginatedResponse,
};
