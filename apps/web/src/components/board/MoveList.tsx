import { useRef, useEffect } from 'react';
import { clsx } from 'clsx';

type Annotation = 'blunder' | 'mistake' | 'inaccuracy' | 'good' | 'brilliant';

interface Move {
  san: string;
  annotation?: Annotation;
}

interface MoveListProps {
  moves: Move[];
  currentMoveIndex: number;
  onMoveClick?: (index: number) => void;
  className?: string;
}

const annotationStyles: Record<Annotation, { symbol: string; color: string }> = {
  brilliant: { symbol: '!!', color: 'text-teal-400' },
  good: { symbol: '!', color: 'text-green-400' },
  inaccuracy: { symbol: '?!', color: 'text-yellow-400' },
  mistake: { symbol: '?', color: 'text-orange-400' },
  blunder: { symbol: '??', color: 'text-red-400' },
};

export function MoveList({
  moves,
  currentMoveIndex,
  onMoveClick,
  className,
}: MoveListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll to current move
  useEffect(() => {
    if (activeRef.current && listRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [currentMoveIndex]);

  // Group moves into pairs (white + black)
  const movePairs: Array<{ number: number; white?: Move; black?: Move }> = [];
  for (let i = 0; i < moves.length; i += 2) {
    movePairs.push({
      number: Math.floor(i / 2) + 1,
      white: moves[i],
      black: moves[i + 1],
    });
  }

  return (
    <div
      ref={listRef}
      className={clsx(
        'overflow-y-auto font-mono text-sm',
        className
      )}
    >
      {movePairs.map((pair, pairIndex) => (
        <div key={pair.number} className="flex items-center gap-1 py-0.5">
          {/* Move number */}
          <span className="w-8 text-gray-500 text-right pr-1">
            {pair.number}.
          </span>
          
          {/* White move */}
          {pair.white && (
            <button
              ref={pairIndex * 2 === currentMoveIndex ? activeRef : null}
              onClick={() => onMoveClick?.(pairIndex * 2)}
              className={clsx(
                'min-w-[60px] px-2 py-0.5 rounded text-left transition-colors',
                pairIndex * 2 === currentMoveIndex
                  ? 'bg-primary text-white'
                  : 'hover:bg-surface-hover'
              )}
            >
              {pair.white.san}
              {pair.white.annotation && (
                <span className={clsx('ml-0.5', annotationStyles[pair.white.annotation].color)}>
                  {annotationStyles[pair.white.annotation].symbol}
                </span>
              )}
            </button>
          )}
          
          {/* Black move */}
          {pair.black && (
            <button
              ref={pairIndex * 2 + 1 === currentMoveIndex ? activeRef : null}
              onClick={() => onMoveClick?.(pairIndex * 2 + 1)}
              className={clsx(
                'min-w-[60px] px-2 py-0.5 rounded text-left transition-colors',
                pairIndex * 2 + 1 === currentMoveIndex
                  ? 'bg-primary text-white'
                  : 'hover:bg-surface-hover'
              )}
            >
              {pair.black.san}
              {pair.black.annotation && (
                <span className={clsx('ml-0.5', annotationStyles[pair.black.annotation].color)}>
                  {annotationStyles[pair.black.annotation].symbol}
                </span>
              )}
            </button>
          )}
        </div>
      ))}
      
      {moves.length === 0 && (
        <div className="text-gray-500 text-center py-4">
          No moves yet
        </div>
      )}
    </div>
  );
}
