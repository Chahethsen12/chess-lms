import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Puzzle, BookOpen, MessageCircle, TrendingUp, Award } from 'lucide-react';
import { useAuthStore, useProgressStore } from '../store';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ProgressChart } from '../components/progress/ProgressChart';
import { StreakCounter } from '../components/progress/StreakCounter';
import { XPProgress } from '../components/progress/XPProgress';
import { Skeleton } from '../components/ui/Skeleton';

export function Dashboard() {
  const { user } = useAuthStore();
  const { stats, eloHistory, badges, isLoading, fetchStats, fetchEloHistory, fetchBadges } = useProgressStore();

  useEffect(() => {
    fetchStats();
    fetchEloHistory();
    fetchBadges();
  }, [fetchStats, fetchEloHistory, fetchBadges]);

  if (!user) return null;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Welcome header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold">
            Welcome back, {user.name || 'Player'}!
          </h1>
          <p className="text-gray-400">Ready to improve your chess?</p>
        </div>
        <StreakCounter streak={user.streak} />
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-primary">{user.eloRating}</div>
            <div className="text-sm text-gray-400">ELO Rating</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-gold">{user.totalXp}</div>
            <div className="text-sm text-gray-400">Total XP</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold">{stats?.totalPuzzlesSolved || 0}</div>
            <div className="text-sm text-gray-400">Puzzles Solved</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold">{stats?.totalGamesPlayed || 0}</div>
            <div className="text-sm text-gray-400">Games Played</div>
          </CardContent>
        </Card>
      </div>

      {/* XP Progress */}
      <Card>
        <CardContent className="p-4">
          <XPProgress currentXP={user.totalXp} level={user.currentLevel} />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* ELO Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Rating Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-64" />
            ) : (
              <ProgressChart data={eloHistory} />
            )}
          </CardContent>
        </Card>

        {/* Quick actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Link to="/puzzles">
              <Button variant="secondary" className="w-full h-20 flex-col gap-2">
                <Puzzle className="w-6 h-6" />
                Daily Puzzle
              </Button>
            </Link>
            <Link to="/play/vs-ai">
              <Button variant="secondary" className="w-full h-20 flex-col gap-2">
                <Play className="w-6 h-6" />
                Play vs AI
              </Button>
            </Link>
            <Link to="/learn/roadmap">
              <Button variant="secondary" className="w-full h-20 flex-col gap-2">
                <BookOpen className="w-6 h-6" />
                Continue Lesson
              </Button>
            </Link>
            <Link to="/ai-coach">
              <Button variant="secondary" className="w-full h-20 flex-col gap-2">
                <MessageCircle className="w-6 h-6" />
                AI Coach
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent badges */}
      {badges.length > 0 && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Recent Achievements
            </CardTitle>
            <Link to="/progress" className="text-sm text-primary hover:underline">
              View all
            </Link>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {badges.slice(0, 5).map((badge) => (
                <div key={badge.id} className="flex flex-col items-center min-w-[80px]">
                  <span className="text-3xl">{badge.icon}</span>
                  <span className="text-xs text-center mt-1">{badge.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
