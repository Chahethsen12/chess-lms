import { clsx } from 'clsx';

interface XPProgressProps {
  currentXP: number;
  level: number;
  className?: string;
}

// XP required for each level (cumulative)
const LEVEL_XP = [0, 500, 1200, 2200, 3500, 5200, 7500, 10000];

export function XPProgress({ currentXP, level, className }: XPProgressProps) {
  const currentLevelXP = LEVEL_XP[level - 1] || 0;
  const nextLevelXP = LEVEL_XP[level] || LEVEL_XP[LEVEL_XP.length - 1];
  const xpInLevel = currentXP - currentLevelXP;
  const xpNeeded = nextLevelXP - currentLevelXP;
  const progress = Math.min((xpInLevel / xpNeeded) * 100, 100);

  return (
    <div className={clsx('', className)}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm">
          Level <span className="font-bold text-gold">{level}</span>
        </span>
        <span className="text-xs text-gray-400">
          {xpInLevel.toLocaleString()} / {xpNeeded.toLocaleString()} XP
        </span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gold/80 to-gold transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
