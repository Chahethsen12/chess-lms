import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, CheckCircle, Circle, ChevronRight, Trophy } from 'lucide-react';
import { useAuthStore } from '../store';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: number;
  xpReward: number;
  status: 'locked' | 'available' | 'in_progress' | 'completed';
  progress?: number;
}

interface Level {
  id: number;
  name: string;
  eloRange: string;
  color: string;
  modules: Module[];
}

const curriculum: Level[] = [
  {
    id: 1,
    name: 'Absolute Beginner',
    eloRange: '0-400',
    color: 'from-green-500 to-green-600',
    modules: [
      { id: 'pieces', title: 'How Pieces Move', description: 'Learn the movement of all chess pieces', lessons: 6, xpReward: 100, status: 'completed', progress: 100 },
      { id: 'check', title: 'Check & Checkmate', description: 'Understand the goal of the game', lessons: 4, xpReward: 100, status: 'completed', progress: 100 },
      { id: 'special', title: 'Special Moves', description: 'Castling, en passant, and promotion', lessons: 3, xpReward: 100, status: 'in_progress', progress: 66 },
      { id: 'notation', title: 'Chess Notation', description: 'Read and write chess moves', lessons: 2, xpReward: 50, status: 'available' },
    ],
  },
  {
    id: 2,
    name: 'Beginner',
    eloRange: '400-800',
    color: 'from-blue-500 to-blue-600',
    modules: [
      { id: 'basic-tactics', title: 'Basic Tactics', description: 'Forks, pins, and skewers', lessons: 8, xpReward: 150, status: 'locked' },
      { id: 'development', title: 'Opening Principles', description: 'How to start a game properly', lessons: 5, xpReward: 150, status: 'locked' },
      { id: 'basic-mates', title: 'Basic Checkmates', description: 'Queen, rook, and two-bishop mates', lessons: 6, xpReward: 150, status: 'locked' },
      { id: 'piece-value', title: 'Piece Values', description: 'When to trade and when to keep', lessons: 3, xpReward: 100, status: 'locked' },
    ],
  },
  {
    id: 3,
    name: 'Intermediate',
    eloRange: '800-1200',
    color: 'from-purple-500 to-purple-600',
    modules: [
      { id: 'tactics-2', title: 'Intermediate Tactics', description: 'Discovered attacks, deflection, decoy', lessons: 10, xpReward: 200, status: 'locked' },
      { id: 'pawn-structure', title: 'Pawn Structure', description: 'Doubled, isolated, and passed pawns', lessons: 6, xpReward: 200, status: 'locked' },
      { id: 'opening-rep', title: 'Opening Repertoire', description: 'Build your first opening system', lessons: 12, xpReward: 300, status: 'locked' },
      { id: 'basic-endgames', title: 'Essential Endgames', description: 'King+pawn vs King fundamentals', lessons: 8, xpReward: 250, status: 'locked' },
    ],
  },
  {
    id: 4,
    name: 'Club Player',
    eloRange: '1200-1600',
    color: 'from-orange-500 to-orange-600',
    modules: [
      { id: 'advanced-tactics', title: 'Advanced Tactics', description: 'Combinations and sacrifices', lessons: 12, xpReward: 300, status: 'locked' },
      { id: 'middlegame', title: 'Middlegame Strategy', description: 'Plans, prophylaxis, and piece activity', lessons: 10, xpReward: 300, status: 'locked' },
      { id: 'rook-endgames', title: 'Rook Endgames', description: 'Lucena, Philidor, and beyond', lessons: 8, xpReward: 250, status: 'locked' },
      { id: 'attack-king', title: 'Attacking the King', description: 'Systematic attacking play', lessons: 8, xpReward: 300, status: 'locked' },
    ],
  },
  {
    id: 5,
    name: 'Advanced',
    eloRange: '1600-1900',
    color: 'from-red-500 to-red-600',
    modules: [
      { id: 'positional', title: 'Positional Play', description: 'Weak squares, outposts, and piece coordination', lessons: 10, xpReward: 350, status: 'locked' },
      { id: 'complex-endgames', title: 'Complex Endgames', description: 'Bishop vs knight, opposite bishops', lessons: 10, xpReward: 350, status: 'locked' },
      { id: 'opening-deep', title: 'Opening Theory', description: 'Deep dive into your repertoire', lessons: 15, xpReward: 400, status: 'locked' },
      { id: 'calculation', title: 'Calculation Training', description: 'Visualize longer variations', lessons: 8, xpReward: 350, status: 'locked' },
    ],
  },
  {
    id: 6,
    name: 'Expert',
    eloRange: '1900-2100',
    color: 'from-pink-500 to-pink-600',
    modules: [
      { id: 'dynamics', title: 'Dynamic Play', description: 'Initiative, compensation, and imbalances', lessons: 10, xpReward: 400, status: 'locked' },
      { id: 'defense', title: 'The Art of Defense', description: 'Hold difficult positions', lessons: 8, xpReward: 400, status: 'locked' },
      { id: 'practical', title: 'Practical Decisions', description: 'Time management and practical choices', lessons: 6, xpReward: 350, status: 'locked' },
    ],
  },
  {
    id: 7,
    name: 'Master Prep',
    eloRange: '2100+',
    color: 'from-gold to-yellow-600',
    modules: [
      { id: 'master-tactics', title: 'Master-Level Tactics', description: 'Complex combinations and quiet moves', lessons: 12, xpReward: 500, status: 'locked' },
      { id: 'strategic-mastery', title: 'Strategic Mastery', description: 'Long-term planning and prophylaxis', lessons: 10, xpReward: 500, status: 'locked' },
      { id: 'endgame-mastery', title: 'Endgame Mastery', description: 'Tablebase endings and precision', lessons: 10, xpReward: 500, status: 'locked' },
    ],
  },
];

function ModuleCard({ module, levelColor }: { module: Module; levelColor: string }) {
  const statusStyles = {
    locked: 'opacity-50 cursor-not-allowed',
    available: 'hover:border-primary cursor-pointer',
    in_progress: 'border-primary cursor-pointer',
    completed: 'border-green-500 cursor-pointer',
  };

  const StatusIcon = {
    locked: Lock,
    available: Circle,
    in_progress: Circle,
    completed: CheckCircle,
  }[module.status];

  return (
    <Link
      to={module.status !== 'locked' ? `/learn/module/${module.id}` : '#'}
      className={cn(
        'block transition-all duration-200',
        module.status === 'locked' && 'pointer-events-none'
      )}
    >
      <Card className={cn('h-full transition-all', statusStyles[module.status])}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <StatusIcon
              className={cn(
                'w-5 h-5',
                module.status === 'completed' && 'text-green-500',
                module.status === 'in_progress' && 'text-primary',
                module.status === 'available' && 'text-gray-400',
                module.status === 'locked' && 'text-gray-600'
              )}
            />
            <span className="text-xs text-gray-400">{module.lessons} lessons</span>
          </div>
          <h4 className="font-semibold mb-1">{module.title}</h4>
          <p className="text-sm text-gray-400 mb-3">{module.description}</p>
          
          {module.status === 'in_progress' && module.progress !== undefined && (
            <div className="mb-2">
              <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={cn('h-full rounded-full bg-gradient-to-r', levelColor)}
                  style={{ width: `${module.progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-400">{module.progress}% complete</span>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gold">+{module.xpReward} XP</span>
            {module.status !== 'locked' && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function LevelSection({ level, isExpanded, onToggle }: { level: Level; isExpanded: boolean; onToggle: () => void }) {
  const completedModules = level.modules.filter(m => m.status === 'completed').length;
  const totalModules = level.modules.length;
  const progress = Math.round((completedModules / totalModules) * 100);
  const isLocked = level.modules.every(m => m.status === 'locked');

  return (
    <div className={cn('mb-6', isLocked && 'opacity-60')}>
      <button
        onClick={onToggle}
        className="w-full text-left"
        disabled={isLocked}
      >
        <div className={cn(
          'flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r',
          level.color,
          'mb-4'
        )}>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{level.name}</h3>
              {isLocked && <Lock className="w-4 h-4" />}
            </div>
            <p className="text-sm opacity-80">ELO {level.eloRange}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{completedModules}/{totalModules}</div>
            <p className="text-sm opacity-80">modules</p>
          </div>
          {!isLocked && (
            <ChevronRight className={cn(
              'w-6 h-6 transition-transform',
              isExpanded && 'rotate-90'
            )} />
          )}
        </div>
      </button>

      {isExpanded && !isLocked && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pl-4">
          {level.modules.map((module) => (
            <ModuleCard key={module.id} module={module} levelColor={level.color} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Roadmap() {
  const { user } = useAuthStore();
  const [expandedLevels, setExpandedLevels] = useState<number[]>([1]);

  const toggleLevel = (levelId: number) => {
    setExpandedLevels(prev =>
      prev.includes(levelId)
        ? prev.filter(id => id !== levelId)
        : [...prev, levelId]
    );
  };

  const totalProgress = Math.round(
    (curriculum.flatMap(l => l.modules).filter(m => m.status === 'completed').length /
      curriculum.flatMap(l => l.modules).length) * 100
  );

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-display text-3xl font-bold">Learning Roadmap</h1>
            <p className="text-gray-400">Your path from beginner to master</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Overall Progress</div>
            <div className="text-2xl font-bold text-primary">{totalProgress}%</div>
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="h-3 bg-surface rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 via-blue-500 via-purple-500 to-gold rounded-full transition-all duration-500"
            style={{ width: `${totalProgress}%` }}
          />
        </div>
      </div>

      {/* Skill tree visualization */}
      <div className="mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between overflow-x-auto pb-4">
              {curriculum.map((level, i) => {
                const isCompleted = level.modules.every(m => m.status === 'completed');
                const isActive = level.modules.some(m => m.status === 'in_progress' || m.status === 'available');
                const isLocked = level.modules.every(m => m.status === 'locked');
                
                return (
                  <div key={level.id} className="flex items-center">
                    <button
                      onClick={() => !isLocked && toggleLevel(level.id)}
                      className={cn(
                        'flex flex-col items-center min-w-[80px] transition-all',
                        isLocked && 'opacity-40 cursor-not-allowed',
                        !isLocked && 'hover:scale-110'
                      )}
                    >
                      <div className={cn(
                        'w-12 h-12 rounded-full flex items-center justify-center mb-2',
                        isCompleted && 'bg-green-500',
                        isActive && 'bg-primary animate-pulse',
                        isLocked && 'bg-gray-700',
                        !isCompleted && !isActive && !isLocked && 'bg-gray-600'
                      )}>
                        {isCompleted ? (
                          <Trophy className="w-6 h-6" />
                        ) : isLocked ? (
                          <Lock className="w-5 h-5" />
                        ) : (
                          <span className="font-bold">{level.id}</span>
                        )}
                      </div>
                      <span className="text-xs text-center whitespace-nowrap">{level.name}</span>
                    </button>
                    {i < curriculum.length - 1 && (
                      <div className={cn(
                        'h-0.5 w-8 mx-2',
                        isCompleted ? 'bg-green-500' : 'bg-gray-700'
                      )} />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Level sections */}
      <div>
        {curriculum.map((level) => (
          <LevelSection
            key={level.id}
            level={level}
            isExpanded={expandedLevels.includes(level.id)}
            onToggle={() => toggleLevel(level.id)}
          />
        ))}
      </div>

      {/* Continue learning CTA */}
      <Card className="mt-8 bg-gradient-to-r from-primary/20 to-gold/20">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">Continue Learning</h3>
            <p className="text-gray-400">Pick up where you left off</p>
          </div>
          <Link to="/learn/module/special">
            <Button>
              Continue: Special Moves
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
