import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AuthGuard } from './components/auth/AuthGuard';
import {
  Landing,
  Auth,
  Dashboard,
  Roadmap,
  Lesson,
  Puzzles,
  PlayAI,
  Openings,
  Endgames,
  AICoach,
  Progress,
  Settings,
} from './pages';

function ProtectedRoute() {
  return (
    <AuthGuard>
      <Layout>
        <Outlet />
      </Layout>
    </AuthGuard>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/learn/roadmap', element: <Roadmap /> },
      { path: '/learn/:moduleId', element: <Lesson /> },
      { path: '/puzzles', element: <Puzzles /> },
      { path: '/play/vs-ai', element: <PlayAI /> },
      { path: '/openings', element: <Openings /> },
      { path: '/endgames', element: <Endgames /> },
      { path: '/ai-coach', element: <AICoach /> },
      { path: '/progress', element: <Progress /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
