import { useState, useCallback, useMemo } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess, Square } from 'chess.js';
import { clsx } from 'clsx';

interface Arrow {
  from: string;
  to: string;
  color?: string;
}

interface InteractiveBoardProps {
  fen?: string;
  orientation?: 'white' | 'black';
  onMove?: (fen: string, move: { from: string; to: string; san: string }) => void;
  arrows?: Arrow[];
  highlights?: Record<string, string>;
  disabled?: boolean;
  showCoordinates?: boolean;
  boardWidth?: number;
  animationDuration?: number;
  allowMoves?: boolean;
  validMoves?: string[]; // UCI format moves allowed
  className?: string;
}

export function InteractiveBoard({
  fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  orientation = 'white',
  onMove,
  arrows = [],
  highlights = {},
  disabled = false,
  showCoordinates = true,
  boardWidth = 480,
  animationDuration = 200,
  allowMoves = true,
  validMoves,
  className,
}: InteractiveBoardProps) {
  const [game] = useState(() => new Chess(fen));
  const [position, setPosition] = useState(fen);
  const [moveFrom, setMoveFrom] = useState<Square | null>(null);
  const [optionSquares, setOptionSquares] = useState<Record<string, React.CSSProperties>>({});

  // Update game when fen prop changes
  useMemo(() => {
    try {
      game.load(fen);
      setPosition(fen);
    } catch {
      // Invalid FEN, ignore
    }
  }, [fen, game]);

  // Convert arrows to react-chessboard format
  const customArrows = useMemo(() => {
    return arrows.map(({ from, to, color }) => [
      from as Square,
      to as Square,
      color || 'rgba(79, 152, 163, 0.8)',
    ] as [Square, Square, string]);
  }, [arrows]);

  // Combine highlights with option squares
  const customSquareStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = {};
    
    // Add highlights
    Object.entries(highlights).forEach(([square, color]) => {
      styles[square] = { backgroundColor: color };
    });
    
    // Add option squares
    Object.entries(optionSquares).forEach(([square, style]) => {
      styles[square] = { ...styles[square], ...style };
    });
    
    return styles;
  }, [highlights, optionSquares]);

  // Get valid moves for a square
  const getMoveOptions = useCallback((square: Square) => {
    const moves = game.moves({ square, verbose: true });
    
    // Filter by validMoves if provided
    const filteredMoves = validMoves
      ? moves.filter((m) => validMoves.includes(`${m.from}${m.to}`))
      : moves;

    if (filteredMoves.length === 0) {
      setOptionSquares({});
      return false;
    }

    const newSquares: Record<string, React.CSSProperties> = {};
    
    filteredMoves.forEach((move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to as Square) && game.get(move.to as Square)!.color !== game.get(square)?.color
            ? 'radial-gradient(circle, rgba(255,0,0,.1) 85%, transparent 85%)'
            : 'radial-gradient(circle, rgba(79, 152, 163,.2) 25%, transparent 25%)',
        borderRadius: '50%',
      };
    });
    
    newSquares[square] = {
      backgroundColor: 'rgba(79, 152, 163, 0.4)',
    };
    
    setOptionSquares(newSquares);
    return true;
  }, [game, validMoves]);

  // Handle square click
  const onSquareClick = useCallback((square: Square) => {
    if (disabled || !allowMoves) return;

    // If clicking on the same square, deselect
    if (moveFrom === square) {
      setMoveFrom(null);
      setOptionSquares({});
      return;
    }

    // If we have a piece selected and clicking a valid destination
    if (moveFrom) {
      try {
        const move = game.move({
          from: moveFrom,
          to: square,
          promotion: 'q', // Always promote to queen
        });

        if (move) {
          setPosition(game.fen());
          onMove?.(game.fen(), { from: moveFrom, to: square, san: move.san });
        }
      } catch {
        // Invalid move, check if clicking new piece
        if (getMoveOptions(square)) {
          setMoveFrom(square);
        }
      }
      setMoveFrom(null);
      setOptionSquares({});
      return;
    }

    // Clicking a new piece
    if (getMoveOptions(square)) {
      setMoveFrom(square);
    }
  }, [disabled, allowMoves, moveFrom, game, getMoveOptions, onMove]);

  // Handle drag and drop
  const onDrop = useCallback((sourceSquare: Square, targetSquare: Square) => {
    if (disabled || !allowMoves) return false;

    // Check if move is in validMoves
    if (validMoves && !validMoves.includes(`${sourceSquare}${targetSquare}`)) {
      return false;
    }

    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });

      if (move) {
        setPosition(game.fen());
        setMoveFrom(null);
        setOptionSquares({});
        onMove?.(game.fen(), { from: sourceSquare, to: targetSquare, san: move.san });
        return true;
      }
    } catch {
      // Invalid move
    }
    return false;
  }, [disabled, allowMoves, validMoves, game, onMove]);

  return (
    <div className={clsx('relative', className)}>
      <Chessboard
        position={position}
        onSquareClick={onSquareClick}
        onPieceDrop={onDrop}
        boardOrientation={orientation}
        customArrows={customArrows}
        customSquareStyles={customSquareStyles}
        boardWidth={boardWidth}
        animationDuration={animationDuration}
        showBoardNotation={showCoordinates}
        arePiecesDraggable={allowMoves && !disabled}
        customDarkSquareStyle={{ backgroundColor: '#b58863' }}
        customLightSquareStyle={{ backgroundColor: '#f0d9b5' }}
      />
    </div>
  );
}
