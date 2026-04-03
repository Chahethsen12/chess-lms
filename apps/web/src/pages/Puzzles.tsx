import { useState, useEffect, useCallback } from 'react';
import { Timer, Target, Flame, Filter, RefreshCw } from 'lucide-react';
import { useProgressStore } from '../store';
import { api } from '../lib/api';
import { PuzzleBoard } from '../components/board/PuzzleBoard';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import { StreakCounter } from '../components/progress/StreakCounter';

const THEMES = [
  { value: 'mixed', label: 'Mixed' },
  { value: 'fork', label: 'Fork' },
  { value: 'pin', label: 'Pin' },
  { value: 'skewer', label: 'Skewer' },
  { value: 'discoveredAttack', label: 'Discovered Attack' },
  { value: 'mateIn1', label: 'Mate in 1' },
  { value: 'mateIn2', label: 'Mate in 2' },
  { value: 'mateIn3', label: 'Mate in 3' },
  { value: 'endgame', label: 'Endgame' },
  { value: 'opening', label: 'Opening' },
];

interface Puzzle {
  id: string;
  fen: string;
  solution: string[];
  rating: number;
  theme: string;
}

export function Puzzles() {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [theme, setTheme] = useState('mixed');
  const [isLoading, setIsLoading] = useState(true);
  const [streak, setStreak] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [stats, setStats] = useState({ solved: 0, accuracy: 0 });
  const { fetchStats } = useProgressStore();

  const fetchPuzzle = useCallback(async () => {
    setIsLoading(true);
    setHintsUsed(0);
    try {
      const data = await api.puzzles.fetch({ theme: theme === 'mixed' ? undefined : theme });
      setPuzzle(data);
      setStartTime(Date.now());
    } catch (error) {
      console.error('Failed to fetch puzzle:', error);
    } finally {
      setIsLoading(false);
    }
  }, [theme]);

  useEffect(() => {
    fetchPuzzle();
  }, [fetchPuzzle]);

  const handleSolved = async () => {
    if (!puzzle) return;
    
    const timeMs = Date.now() - startTime;
    setStreak(s => s + 1);
    setStats(s => ({ 
      solved: s.solved + 1, 
      accuracy: Math.round(((s.solved + 1) / (s.solved + 1)) * 100) 
    }));

    try {
      await api.puzzles.attempt({
        puzzleId: puzzle.id,
        correct: true,
        hintsUsed,
        timeMs,
      });
      fetchStats();
    } catch (error) {
      console.error('Failed to record attempt:', error);
    }

    // Load next puzzle after delay
    setTimeout(fetchPuzzle, 1500);
  };

  const handleFailed = async () => {
    if (!puzzle) return;
    
    const timeMs = Date.now() - startTime;
    setStreak(0);

    try {
      await api.puzzles.attempt({
        puzzleId: puzzle.id,
        correct: false,
        hintsUsed,
        timeMs,
      });
      fetchStats();
    } catch (error) {
      console.error('Failed to record attempt:', error);
    }
  };

  const handleHintUsed = () => {
    setHintsUsed(h => h + 1);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl font-bold">Puzzle Trainer</h1>
          <p className="text-gray-400">Sharpen your tactics</p>
        </div>
        <StreakCounter streak={streak} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main puzzle area */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              {isLoading ? (
                <div className="aspect-square bg-surface animate-pulse rounded-lg" />
              ) : puzzle ? (
                <div className="flex flex-col items-center">
                  <PuzzleBoard
                    fen={puzzle.fen}
                    solution={puzzle.solution}
                    onSolved={handleSolved}
                    onFailed={handleFailed}
                    onHintUsed={handleHintUsed}
                  />
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      Rating: {puzzle.rating}
                    </span>
                    <span className="capitalize">{puzzle.theme}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  Failed to load puzzle
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Theme filter */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Filter className="w-4 h-4" />
                Theme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                options={THEMES}
              />
              <Button 
                variant="secondary" 
                className="w-full mt-3"
                onClick={fetchPuzzle}
                disabled={isLoading}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                New Puzzle
              </Button>
            </CardContent>
          </Card>

          {/* Session stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Session Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Solved</span>
                <span className="font-bold">{stats.solved}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Streak</span>
                <span className="font-bold text-gold">{streak}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Hints Used</span>
                <span className="font-bold">{hintsUsed}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
