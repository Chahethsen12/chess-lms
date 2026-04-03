/**
 * Starting FEN position
 */
export const STARTING_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

/**
 * Validate a FEN string format (basic validation)
 */
export function isValidFen(fen: string): boolean {
  const parts = fen.split(' ');
  if (parts.length !== 6) return false;
  
  const ranks = parts[0].split('/');
  if (ranks.length !== 8) return false;
  
  return true;
}

/**
 * Parse algebraic notation to get square coordinates
 */
export function parseSquare(square: string): { file: number; rank: number } | null {
  if (square.length !== 2) return null;
  
  const file = square.charCodeAt(0) - 'a'.charCodeAt(0);
  const rank = parseInt(square[1]) - 1;
  
  if (file < 0 || file > 7 || rank < 0 || rank > 7) return null;
  
  return { file, rank };
}

/**
 * Format centipawn score to display string
 */
export function formatEvaluation(cp: number, mate?: number): string {
  if (mate !== undefined) {
    return mate > 0 ? `M${mate}` : `-M${Math.abs(mate)}`;
  }
  
  const pawns = cp / 100;
  const sign = pawns >= 0 ? '+' : '';
  return `${sign}${pawns.toFixed(1)}`;
}

/**
 * Get annotation symbol for a move
 */
export function getAnnotationSymbol(annotation: string): string {
  switch (annotation) {
    case 'brilliant': return '!!';
    case 'good': return '!';
    case 'inaccuracy': return '?!';
    case 'mistake': return '?';
    case 'blunder': return '??';
    default: return '';
  }
}
