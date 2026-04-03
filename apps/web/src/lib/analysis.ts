/**
 * Game Analysis Utilities
 * Analyzes chess games for blunders, mistakes, and inaccuracies
 */

import { Chess } from 'chess.js';
import { getEngine, Evaluation } from './stockfish';

export type MoveAnnotation = 'blunder' | 'mistake' | 'inaccuracy' | 'good' | 'brilliant';

export interface AnalyzedMove {
  san: string;
  uci: string;
  fen: string;
  moveNumber: number;
  color: 'w' | 'b';
  evaluation: Evaluation;
  cpl: number; // Centipawn loss
  annotation?: MoveAnnotation;
  bestMove?: string;
  bestMoveSan?: string;
}

export interface GameAnalysis {
  moves: AnalyzedMove[];
  blunders: number;
  mistakes: number;
  inaccuracies: number;
  averageCpl: number;
  accuracy: number;
  whiteCpl: number;
  blackCpl: number;
}

// Thresholds for move classification (in centipawns)
const THRESHOLDS = {
  BLUNDER: 200,
  MISTAKE: 100,
  INACCURACY: 50,
};

/**
 * Analyze a complete game from PGN
 */
export async function analyzeGame(
  pgn: string,
  depth: number = 18,
  onProgress?: (progress: number, move: number, total: number) => void
): Promise<GameAnalysis> {
  const chess = new Chess();
  chess.loadPgn(pgn);
  
  const history = chess.history({ verbose: true });
  const analysis: GameAnalysis = {
    moves: [],
    blunders: 0,
    mistakes: 0,
    inaccuracies: 0,
    averageCpl: 0,
    accuracy: 0,
    whiteCpl: 0,
    blackCpl: 0,
  };

  if (history.length === 0) {
    return analysis;
  }

  const engine = getEngine();
  if (!engine.ready) {
    await engine.init();
  }

  // Reset to starting position
  const analysisChess = new Chess();
  let previousEval: Evaluation | null = null;
  let totalCpl = 0;
  let whiteCplTotal = 0;
  let blackCplTotal = 0;
  let whiteMoves = 0;
  let blackMoves = 0;

  for (let i = 0; i < history.length; i++) {
    const move = history[i];
    const fenBefore = analysisChess.fen();
    
    // Get evaluation before the move
    const evalBefore = previousEval || await engine.evaluate(fenBefore, depth);
    
    // Make the move
    analysisChess.move(move);
    const fenAfter = analysisChess.fen();
    
    // Get evaluation after the move
    const evalAfter = await engine.evaluate(fenAfter, depth);
    
    // Calculate centipawn loss
    // For white moves, we compare white's perspective
    // For black moves, we compare black's perspective
    const isWhite = move.color === 'w';
    const scoreBefore = isWhite ? evalBefore.score : -evalBefore.score;
    const scoreAfter = isWhite ? -evalAfter.score : evalAfter.score;
    const cpl = Math.max(0, scoreBefore - scoreAfter);
    
    // Determine annotation
    let annotation: MoveAnnotation | undefined;
    if (cpl >= THRESHOLDS.BLUNDER) {
      annotation = 'blunder';
      analysis.blunders++;
    } else if (cpl >= THRESHOLDS.MISTAKE) {
      annotation = 'mistake';
      analysis.mistakes++;
    } else if (cpl >= THRESHOLDS.INACCURACY) {
      annotation = 'inaccuracy';
      analysis.inaccuracies++;
    } else if (cpl === 0 && evalBefore.bestMove === `${move.from}${move.to}`) {
      annotation = 'good';
    }

    // Track CPL by color
    if (isWhite) {
      whiteCplTotal += cpl;
      whiteMoves++;
    } else {
      blackCplTotal += cpl;
      blackMoves++;
    }
    totalCpl += cpl;

    // Convert best move to SAN if available
    let bestMoveSan: string | undefined;
    if (evalBefore.bestMove) {
      const tempChess = new Chess(fenBefore);
      try {
        const bestMoveObj = tempChess.move({
          from: evalBefore.bestMove.slice(0, 2),
          to: evalBefore.bestMove.slice(2, 4),
          promotion: evalBefore.bestMove[4] as 'q' | 'r' | 'b' | 'n' | undefined,
        });
        bestMoveSan = bestMoveObj?.san;
      } catch {
        // Invalid move, skip
      }
    }

    analysis.moves.push({
      san: move.san,
      uci: `${move.from}${move.to}${move.promotion || ''}`,
      fen: fenAfter,
      moveNumber: Math.floor(i / 2) + 1,
      color: move.color,
      evaluation: evalAfter,
      cpl,
      annotation,
      bestMove: evalBefore.bestMove,
      bestMoveSan,
    });

    previousEval = evalAfter;

    // Report progress
    if (onProgress) {
      onProgress((i + 1) / history.length * 100, i + 1, history.length);
    }
  }

  // Calculate averages
  analysis.averageCpl = totalCpl / history.length;
  analysis.whiteCpl = whiteMoves > 0 ? whiteCplTotal / whiteMoves : 0;
  analysis.blackCpl = blackMoves > 0 ? blackCplTotal / blackMoves : 0;
  
  // Calculate accuracy (using a formula similar to chess.com)
  // Accuracy = 103.1668 * exp(-0.04354 * ACPL) - 3.1669
  analysis.accuracy = Math.max(0, Math.min(100, 
    103.1668 * Math.exp(-0.04354 * analysis.averageCpl) - 3.1669
  ));

  return analysis;
}

/**
 * Get annotation symbol for display
 */
export function getAnnotationSymbol(annotation?: MoveAnnotation): string {
  switch (annotation) {
    case 'brilliant': return '!!';
    case 'good': return '!';
    case 'inaccuracy': return '?!';
    case 'mistake': return '?';
    case 'blunder': return '??';
    default: return '';
  }
}

/**
 * Get annotation color for display
 */
export function getAnnotationColor(annotation?: MoveAnnotation): string {
  switch (annotation) {
    case 'brilliant': return '#26C485'; // Teal/green
    case 'good': return '#96BC4B'; // Green
    case 'inaccuracy': return '#F7C631'; // Yellow
    case 'mistake': return '#FFA459'; // Orange
    case 'blunder': return '#CA3431'; // Red
    default: return 'inherit';
  }
}

/**
 * Format evaluation score for display
 */
export function formatEvaluation(score: number, mate?: number): string {
  if (mate !== undefined) {
    return mate > 0 ? `M${mate}` : `-M${Math.abs(mate)}`;
  }
  
  const pawns = score / 100;
  const sign = pawns >= 0 ? '+' : '';
  return `${sign}${pawns.toFixed(1)}`;
}
