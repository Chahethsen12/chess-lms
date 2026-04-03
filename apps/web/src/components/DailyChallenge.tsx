import { useState, useEffect } from 'react';
import { Card, Button } from '../components/ui';
import { PuzzleBoard } from '../components/board';
import { Trophy, Flame, Clock, Gift } from 'lucide-react';
import { useProgressStore } from '../store';
import { useLevelUp } from '../hooks/useLevelUp';

interface DailyChallenge {
  id: string;
  fen: string;
  solution: string[];
  rating: number;
  theme: string;
  xpBonus: number;
}

// Mock daily challenge - in production, this would come from API
const getDailyChallenge = (): DailyChallenge => {
  const today = new Date().toDateString();
  // Use date to seed a "random" puzzle selection
  const seed = today.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  
  const challenges: DailyChallenge[] = [
    {
      id: 'daily-1',
      fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4',
      solution: ['Qxf7'],
      rating: 800,
      theme: 'Checkmate in 1',
      xpBonus: 50,
    },
    {
      id: 'daily-2',
      fen: 'r1b1k2r/ppppqppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 6 5',
      solution: ['Bxf7', 'Qxf7', 'Ng5'],
      rating: 1200,
      theme: 'Fork',
      xpBonus: 75,
    },
    {
      id: 'daily-3',
      fen: '6k1/pp3ppp/2p5/8/2Pr4/8/PP3PPP/R5K1 b - - 0 1',
      solution: ['Rd1', 'Rxd1'],
      rating: 1000,
      theme: 'Back Rank',
      xpBonus: 60,
    },
  ];
  
  return challenges[seed % challenges.length];
};

export function DailyChallenge() {
  const [challenge] = useState(getDailyChallenge);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string>('');
  const { triggerBadgeEarned } = useLevelUp();
  const { stats } = useProgressStore();

  // Calculate time until next daily challenge
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft(`${hours}h ${minutes}m`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSolve = () => {
    setCompleted(true);
    triggerBadgeEarned();
    // In production: API call to record completion and award XP
  };

  // Check if already completed today (would use API in production)
  const alreadyCompleted = localStorage.getItem('dailyChallenge') === new Date().toDateString();

  if (alreadyCompleted || completed) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold flex items-center gap-2">
            <Gift className="text-gold" size={20} /> Daily Challenge
          </h3>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <Clock size={14} />
            Next in {timeLeft}
          </div>
        </div>
        
        <div className="text-center py-8">
          <Trophy className="mx-auto text-gold mb-3" size={48} />
          <p className="text-lg font-bold text-gold">Challenge Complete!</p>
          <p className="text-sm text-gray-400 mt-1">
            +{challenge.xpBonus} XP (2× bonus applied)
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-bold flex items-center gap-2">
          <Gift className="text-gold" size={20} /> Daily Challenge
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded">
            2× XP
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <Clock size={14} />
            {timeLeft}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Theme: {challenge.theme}</span>
          <span className="text-gray-400">Rating: ~{challenge.rating}</span>
        </div>

        <PuzzleBoard
          fen={challenge.fen}
          solution={challenge.solution}
          onSolved={handleSolve}
        />

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-gold">
            <Flame size={16} />
            <span>Streak: {stats?.currentStreak || 0} days</span>
          </div>
          <span className="text-gray-400">
            Reward: +{challenge.xpBonus} XP
          </span>
        </div>
      </div>
    </Card>
  );
}
