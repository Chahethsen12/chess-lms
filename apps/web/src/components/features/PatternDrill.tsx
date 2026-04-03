import { useState, useEffect, useCallback, useRef } from 'react';
import { Chess } from 'chess.js';
import { Button, Card } from '../ui';
import { InteractiveBoard } from '../board';
import { Eye, EyeOff, Timer, Trophy, RotateCcw } from 'lucide-react';

interface PatternDrillProps {
  positions?: { fen: string; bestMove: string; theme: string }[];
}

const defaultPositions = [
  { 
    fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4',
    bestMove: 'Qxf7#',
    theme: 'Scholar\'s Mate'
  },
  {
    fen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
    bestMove: 'Ng5',
    theme: 'Italian Game Attack'
  },
  {
    fen: 'r1b1k2r/ppppqppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 6 5',
    bestMove: 'd3',
    theme: 'Quiet Italian'
  },
];

export function PatternDrill({ positions = defaultPositions }: PatternDrillProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'memorize' | 'recall' | 'result'>('memorize');
  const [userMove, setUserMove] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3);
  const timerRef = useRef<NodeJS.Timeout>();

  const currentPosition = positions[currentIndex];

  useEffect(() => {
    if (phase === 'memorize' && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (phase === 'memorize' && timeLeft === 0) {
      setPhase('recall');
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, timeLeft]);

  const startNewRound = useCallback(() => {
    setPhase('memorize');
    setTimeLeft(3);
    setUserMove('');
  }, []);

  const handleSubmit = useCallback(() => {
    const isCorrect = userMove.toLowerCase().replace(/[^a-z0-9#+=]/g, '') === 
                     currentPosition.bestMove.toLowerCase().replace(/[^a-z0-9#+=]/g, '');
    
    if (isCorrect) {
      setScore(score + 1);
    }
    setPhase('result');
  }, [userMove, currentPosition, score]);

  const nextPosition = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % positions.length);
    startNewRound();
  }, [currentIndex, positions.length, startNewRound]);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-display font-bold flex items-center gap-2">
          <Eye size={20} /> Pattern Flash Drill
        </h3>
        <div className="flex items-center gap-2 text-gold">
          <Trophy size={18} />
          <span className="font-bold">{score}</span>
        </div>
      </div>

      <div className="space-y-4">
        {phase === 'memorize' && (
          <>
            <div className="text-center mb-2">
              <span className="text-sm text-gray-400">Memorize the position!</span>
              <div className="flex items-center justify-center gap-2 mt-1">
                <Timer size={16} className="text-primary" />
                <span className="text-2xl font-bold text-primary">{timeLeft}s</span>
              </div>
            </div>
            <InteractiveBoard fen={currentPosition.fen} />
            <p className="text-center text-sm text-gray-400">
              Theme: {currentPosition.theme}
            </p>
          </>
        )}

        {phase === 'recall' && (
          <>
            <div className="text-center mb-2">
              <EyeOff size={40} className="mx-auto text-gray-500 mb-2" />
              <span className="text-lg">What was the best move?</span>
            </div>
            <input
              type="text"
              value={userMove}
              onChange={(e) => setUserMove(e.target.value)}
              placeholder="Enter move (e.g., Qxf7#)"
              className="w-full bg-surface border border-white/10 rounded-lg p-3 text-center font-mono text-lg focus:outline-none focus:border-primary"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <Button className="w-full" onClick={handleSubmit}>
              Submit Answer
            </Button>
          </>
        )}

        {phase === 'result' && (
          <>
            <InteractiveBoard fen={currentPosition.fen} />
            <div className={`text-center p-4 rounded-lg ${
              userMove.toLowerCase().replace(/[^a-z0-9#+=]/g, '') === 
              currentPosition.bestMove.toLowerCase().replace(/[^a-z0-9#+=]/g, '')
                ? 'bg-green-500/20 text-green-400'
                : 'bg-red-500/20 text-red-400'
            }`}>
              <p className="font-bold">
                {userMove.toLowerCase().replace(/[^a-z0-9#+=]/g, '') === 
                 currentPosition.bestMove.toLowerCase().replace(/[^a-z0-9#+=]/g, '')
                  ? '✓ Correct!'
                  : '✗ Incorrect'}
              </p>
              <p className="text-sm mt-1">
                Best move: <span className="font-mono font-bold">{currentPosition.bestMove}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={startNewRound}>
                <RotateCcw size={16} className="mr-2" /> Retry
              </Button>
              <Button className="flex-1" onClick={nextPosition}>
                Next Position
              </Button>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
