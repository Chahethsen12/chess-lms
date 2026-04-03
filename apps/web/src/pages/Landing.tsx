import { Link } from 'react-router-dom';
import { Brain, Puzzle, Swords, TrendingUp, Award, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

const features = [
  { icon: Brain, title: 'AI-Powered Coaching', description: 'Get personalized advice from our multi-model AI coach' },
  { icon: Puzzle, title: 'Adaptive Puzzles', description: 'Puzzles that match your skill level and grow with you' },
  { icon: Swords, title: 'Play vs AI', description: 'Challenge Stockfish at any level from beginner to master' },
  { icon: TrendingUp, title: 'Track Progress', description: 'Watch your ELO rise with detailed analytics' },
  { icon: Award, title: 'Earn Badges', description: 'Unlock achievements as you master new skills' },
  { icon: MessageCircle, title: 'Learn Openings', description: 'Build your opening repertoire with expert guidance' },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-bg-dark">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Master Chess with <span className="text-primary">AI</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              From absolute beginner to candidate master. Personalized lessons, 
              adaptive puzzles, and an AI coach that knows your game.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/auth?mode=register">
                <Button size="lg" className="text-lg px-8">
                  Start Learning Free
                </Button>
              </Link>
              <Link to="/auth?mode=login">
                <Button variant="ghost" size="lg" className="text-lg px-8">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Animated chessboard preview */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-80 h-80 bg-surface rounded-lg shadow-2xl overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {Array.from({ length: 64 }).map((_, i) => {
                  const row = Math.floor(i / 8);
                  const col = i % 8;
                  const isLight = (row + col) % 2 === 0;
                  return (
                    <div
                      key={i}
                      className={isLight ? 'bg-board-light' : 'bg-board-dark'}
                    />
                  );
                })}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl animate-pulse">♔</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need to Improve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-bg-dark rounded-lg p-6">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Structured Learning Path
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            43 modules across 7 levels, from learning how the pieces move to candidate master preparation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['Beginner', 'Intermediate', 'Club Player', 'Advanced', 'Expert', 'Master'].map((level, i) => (
              <div
                key={level}
                className="px-4 py-2 rounded-full bg-surface border border-primary/30"
                style={{ opacity: 1 - i * 0.1 }}
              >
                {level}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-gold/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Improve Your Chess?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of players on their journey to chess mastery.
          </p>
          <Link to="/auth?mode=register">
            <Button size="lg" variant="gold" className="text-lg px-8">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Chess Mastery LMS. Built with ♔
        </div>
      </footer>
    </div>
  );
}
