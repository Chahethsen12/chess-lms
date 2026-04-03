export type PieceType = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
export type PieceColor = 'w' | 'b';
export type Square = string; // e.g., 'e4', 'a1'

export interface ChessMove {
  from: Square;
  to: Square;
  promotion?: PieceType;
  san?: string;
}

export interface Position {
  fen: string;
  turn: PieceColor;
  moveNumber: number;
}

export interface Arrow {
  from: Square;
  to: Square;
  color?: string;
}

export interface SquareHighlight {
  square: Square;
  color: string;
}

export interface Evaluation {
  score: number; // In centipawns, positive = white advantage
  mate?: number; // Moves to mate if applicable
  bestMove: string;
  pv: string[]; // Principal variation
  depth: number;
}

export type MoveAnnotation = 'blunder' | 'mistake' | 'inaccuracy' | 'good' | 'brilliant';

export interface AnnotatedMove {
  san: string;
  moveNumber: number;
  color: PieceColor;
  evaluation?: Evaluation;
  annotation?: MoveAnnotation;
  cpl?: number; // Centipawn loss
}
