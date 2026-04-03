import { clsx } from 'clsx';
import { Lock } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt?: Date;
}

interface BadgeGridProps {
  badges: Badge[];
  earnedBadgeIds: string[];
  className?: string;
}

export function BadgeGrid({ badges, earnedBadgeIds, className }: BadgeGridProps) {
  const earnedSet = new Set(earnedBadgeIds);

  return (
    <div className={clsx('grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4', className)}>
      {badges.map((badge) => {
        const isEarned = earnedSet.has(badge.id);
        
        return (
          <div
            key={badge.id}
            className={clsx(
              'flex flex-col items-center p-3 rounded-lg transition-all',
              isEarned
                ? 'bg-gold/10 border border-gold/30'
                : 'bg-surface opacity-50 grayscale'
            )}
            title={`${badge.name}: ${badge.description}`}
          >
            <div className="relative">
              <span className="text-3xl">{badge.icon}</span>
              {!isEarned && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>
              )}
            </div>
            <span className="text-xs text-center mt-2 line-clamp-2">{badge.name}</span>
          </div>
        );
      })}
    </div>
  );
}
