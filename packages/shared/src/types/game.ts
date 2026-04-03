import type { AnnotatedMove, Evaluation } from './chess.js';

export interface Game {
  id: string;
  userId: string;
  pgn: string;
  fen: string | null;
  result: GameResult;
  color: 'white' | 'black';
  opponentType: 'ai' | 'human';
  aiLevel: number | null;
  eloChange: number | null;
  analysis: GameAnalysis | null;
  playedAt: Date;
}

export type GameResult = 'win' | 'loss' | 'draw';

export interface GameAnalysis {
  moves: AnnotatedMove[];
  blunders: number;
  mistakes: number;
  inaccuracies: number;
  averageCpl: number;
  accuracy: number;
  criticalMoments: CriticalMoment[];
}

export interface CriticalMoment {
  moveNumber: number;
  fen: string;
  bestMove: string;
  playedMove: string;
  evaluation: Evaluation;
  type: 'blunder' | 'mistake' | 'missed_win';
  explanation?: string;
}

export interface TimeControl {
  initial: number; // seconds
  increment: number; // seconds
}

export type TimeControlPreset = 'bullet' | 'blitz' | 'rapid' | 'classical';
