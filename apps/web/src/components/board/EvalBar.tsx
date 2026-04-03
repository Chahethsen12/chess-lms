import { useMemo } from 'react';
import { clsx } from 'clsx';

interface EvalBarProps {
  score: number; // In centipawns
  mate?: number; // Moves to mate
  orientation?: 'white' | 'black';
  height?: number;
  className?: string;
}

export function EvalBar({
  score,
  mate,
  orientation = 'white',
  height = 400,
  className,
}: EvalBarProps) {
  // Calculate the white portion percentage
  const whitePercent = useMemo(() => {
    if (mate !== undefined) {
      // Mate: 100% for winning side
      return mate > 0 ? 100 : 0;
    }
    
    // Clamp score to -1000 to 1000 centipawns for display
    const clampedScore = Math.max(-1000, Math.min(1000, score));
    
    // Convert to percentage (50% is equal)
    // Use sigmoid-like function for smoother transitions
    const percent = 50 + (clampedScore / 1000) * 50;
    return Math.max(0, Math.min(100, percent));
  }, [score, mate]);

  // Format the evaluation text
  const evalText = useMemo(() => {
    if (mate !== undefined) {
      return mate > 0 ? `M${mate}` : `M${Math.abs(mate)}`;
    }
    
    const pawns = score / 100;
    if (Math.abs(pawns) < 0.1) return '0.0';
    return pawns > 0 ? `+${pawns.toFixed(1)}` : pawns.toFixed(1);
  }, [score, mate]);

  // Determine which side is winning for text color
  const isWhiteWinning = mate !== undefined ? mate > 0 : score > 0;

  return (
    <div
      className={clsx('relative rounded overflow-hidden', className)}
      style={{ width: 24, height }}
    >
      {/* Background (black portion) */}
      <div className="absolute inset-0 bg-gray-800" />
      
      {/* White portion */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gray-100 transition-all duration-300"
        style={{ 
          height: orientation === 'white' 
            ? `${whitePercent}%` 
            : `${100 - whitePercent}%` 
        }}
      />
      
      {/* Center line */}
      <div className="absolute left-0 right-0 h-px bg-gray-500" style={{ top: '50%' }} />
      
      {/* Evaluation text */}
      <div
        className={clsx(
          'absolute left-1/2 -translate-x-1/2 text-xs font-bold px-1 rounded',
          isWhiteWinning ? 'bg-gray-100 text-gray-900' : 'bg-gray-800 text-gray-100'
        )}
        style={{ 
          [orientation === 'white' 
            ? (isWhiteWinning ? 'bottom' : 'top') 
            : (isWhiteWinning ? 'top' : 'bottom')
          ]: 4 
        }}
      >
        {evalText}
      </div>
    </div>
  );
}
