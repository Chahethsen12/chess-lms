export interface Puzzle {
  id: string;
  fen: string;
  moves: string[]; // Solution moves in UCI format
  rating: number;
  themes: string[];
  gameUrl?: string;
}

export interface PuzzleAttempt {
  id: string;
  puzzleId: string;
  userId: string;
  correct: boolean;
  hintsUsed: number;
  timeMs: number;
  attemptedAt: Date;
}

export type PuzzleTheme =
  | 'fork'
  | 'pin'
  | 'skewer'
  | 'discoveredAttack'
  | 'doubleCheck'
  | 'sacrifice'
  | 'deflection'
  | 'decoy'
  | 'interference'
  | 'overloading'
  | 'mate'
  | 'mateIn1'
  | 'mateIn2'
  | 'mateIn3'
  | 'endgame'
  | 'opening';
