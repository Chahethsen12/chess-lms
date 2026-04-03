import { useState, useCallback, useEffect } from 'react';
import { Chess } from 'chess.js';
import { InteractiveBoard } from './InteractiveBoard';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import { clsx } from 'clsx';

interface PuzzleBoardProps {
  fen: string;
  solution: string[]; // UCI format moves
  orientation?: 'white' | 'black';
  onSolved?: () => void;
  onFailed?: () => void;
  onHintUsed?: () => void;
  className?: string;
}

type PuzzleStatus = 'playing' | 'correct' | 'incorrect';

export function PuzzleBoard({
  fen,
  solution,
  orientation,
  onSolved,
  onFailed,
  onHintUsed,
  className,
}: PuzzleBoardProps) {
  const [game] = useState(() => new Chess(fen));
  const [currentFen, setCurrentFen] = useState(fen);
  const [solutionIndex, setSolutionIndex] = useState(0);
  const [status, setStatus] = useState<PuzzleStatus>('playing');
  const [hintSquare, setHintSquare] = useState<string | null>(null);
  const [highlights, setHighlights] = useState<Record<string, string>>({});

  // Determine board orientation based on who moves first
  const boardOrientation = orientation || (game.turn() === 'w' ? 'white' : 'black');

  // Reset when puzzle changes
  useEffect(() => {
    game.load(fen);
    setCurrentFen(fen);
    setSolutionIndex(0);
    setStatus('playing');
    setHintSquare(null);
    setHighlights({});
  }, [fen, game]);

  // Get valid moves (only the correct solution move)
  const validMoves = status === 'playing' && solutionIndex < solution.length
    ? [solution[solutionIndex]]
    : [];

  const handleMove = useCallback((newFen: string, move: { from: string; to: string }) => {
    const expectedMove = solution[solutionIndex];
    const playedMove = `${move.from}${move.to}`;

    if (playedMove === expectedMove.slice(0, 4)) {
      // Correct move!
      setHighlights({
        [move.from]: 'rgba(0, 255, 0, 0.3)',
        [move.to]: 'rgba(0, 255, 0, 0.3)',
      });

      const nextIndex = solutionIndex + 1;
      
      if (nextIndex >= solution.length) {
        // Puzzle solved!
        setStatus('correct');
        onSolved?.();
      } else {
        // Make opponent's response
        setTimeout(() => {
          const opponentMove = solution[nextIndex];
          game.move({
            from: opponentMove.slice(0, 2),
            to: opponentMove.slice(2, 4),
            promotion: opponentMove[4] as 'q' | 'r' | 'b' | 'n' | undefined,
          });
          setCurrentFen(game.fen());
          setSolutionIndex(nextIndex + 1);
          setHighlights({});
        }, 500);
      }
    } else {
      // Wrong move!
      setHighlights({
        [move.from]: 'rgba(255, 0, 0, 0.3)',
        [move.to]: 'rgba(255, 0, 0, 0.3)',
      });
      setStatus('incorrect');
      onFailed?.();
      
      // Undo the move after a delay
      setTimeout(() => {
        game.undo();
        setCurrentFen(game.fen());
        setHighlights({});
        setStatus('playing');
      }, 1000);
    }
  }, [solution, solutionIndex, game, onSolved, onFailed]);

  const showHint = useCallback(() => {
    if (solutionIndex < solution.length) {
      const hintMove = solution[solutionIndex];
      setHintSquare(hintMove.slice(0, 2));
      onHintUsed?.();
    }
  }, [solution, solutionIndex, onHintUsed]);

  return (
    <div className={clsx('flex flex-col items-center gap-4', className)}>
      <div className="relative">
        <InteractiveBoard
          fen={currentFen}
          orientation={boardOrientation}
          onMove={handleMove}
          validMoves={validMoves}
          highlights={{
            ...highlights,
            ...(hintSquare ? { [hintSquare]: 'rgba(232, 175, 52, 0.5)' } : {}),
          }}
          disabled={status !== 'playing'}
        />
        
        {/* Status overlay */}
        {status !== 'playing' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
            {status === 'correct' ? (
              <div className="flex flex-col items-center gap-2 text-green-400">
                <CheckCircle className="w-16 h-16" />
                <span className="text-xl font-bold">Correct!</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 text-red-400">
                <XCircle className="w-16 h-16" />
                <span className="text-xl font-bold">Try Again</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      {status === 'playing' && (
        <button
          onClick={showHint}
          className="flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 transition-colors"
        >
          <Lightbulb className="w-4 h-4" />
          Hint
        </button>
      )}
    </div>
  );
}
