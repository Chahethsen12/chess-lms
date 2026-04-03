import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Puzzle,
  Play,
  BookMarked,
  Trophy,
  MessageCircle,
  ChartLine,
  Settings,
  Menu,
  X,
  LogOut,
  Moon,
  Sun,
} from 'lucide-react';
import { useAuthStore, useUIStore } from '../../store';
import { clsx } from 'clsx';

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/learn/roadmap', icon: BookOpen, label: 'Learn' },
  { path: '/puzzles', icon: Puzzle, label: 'Puzzles' },
  { path: '/play/vs-ai', icon: Play, label: 'Play' },
  { path: '/openings', icon: BookMarked, label: 'Openings' },
  { path: '/endgames', icon: Trophy, label: 'Endgames' },
  { path: '/ai-coach', icon: MessageCircle, label: 'AI Coach' },
  { path: '/progress', icon: ChartLine, label: 'Progress' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme, sidebarCollapsed, toggleSidebar } = useUIStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-dark flex">
      {/* Sidebar - Desktop */}
      <aside
        className={clsx(
          'hidden lg:flex flex-col bg-surface border-r border-white/10 transition-all duration-300',
          sidebarCollapsed ? 'w-16' : 'w-64'
        )}
      >
        <div className="p-4 border-b border-white/10">
          <Link to="/dashboard" className="flex items-center gap-2">
            <span className="text-2xl">♔</span>
            {!sidebarCollapsed && (
              <span className="font-display font-bold text-lg">Chess LMS</span>
            )}
          </Link>
        </div>

        <nav className="flex-1 p-2">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors',
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:bg-surface-hover hover:text-white'
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          {!sidebarCollapsed && user && (
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                {user.name?.[0] || user.email[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{user.name || 'Player'}</div>
                <div className="text-xs text-gray-400">ELO {user.eloRating}</div>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-surface-hover"
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-surface-hover"
              title="Toggle sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={logout}
              className="p-2 rounded-lg hover:bg-surface-hover text-red-400"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-surface border-b border-white/10 flex items-center justify-between px-4 z-40">
        <Link to="/dashboard" className="flex items-center gap-2">
          <span className="text-xl">♔</span>
          <span className="font-display font-bold">Chess LMS</span>
        </Link>
        <button onClick={() => setMobileMenuOpen(true)} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-64 bg-surface p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg mb-1 hover:bg-surface-hover"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 lg:pt-0 pt-14 overflow-auto">{children}</main>
    </div>
  );
}
