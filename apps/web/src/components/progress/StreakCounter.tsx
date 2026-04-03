import { clsx } from 'clsx';
import { Flame } from 'lucide-react';

interface StreakCounterProps {
  streak: number;
  className?: string;
}

export function StreakCounter({ streak, className }: StreakCounterProps) {
  const getStreakColor = () => {
    if (streak >= 30) return 'text-red-500';
    if (streak >= 14) return 'text-orange-400';
    if (streak >= 7) return 'text-yellow-400';
    return 'text-gray-400';
  };

  const getFlameCount = () => {
    if (streak >= 100) return 5;
    if (streak >= 30) return 4;
    if (streak >= 14) return 3;
    if (streak >= 7) return 2;
    if (streak >= 1) return 1;
    return 0;
  };

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <div className="flex">
        {Array.from({ length: getFlameCount() }).map((_, i) => (
          <Flame
            key={i}
            className={clsx('w-6 h-6 -ml-1 first:ml-0', getStreakColor())}
            fill="currentColor"
          />
        ))}
        {streak === 0 && <Flame className="w-6 h-6 text-gray-600" />}
      </div>
      <div>
        <span className={clsx('text-2xl font-bold', getStreakColor())}>{streak}</span>
        <span className="text-sm text-gray-400 ml-1">day{streak !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
}
