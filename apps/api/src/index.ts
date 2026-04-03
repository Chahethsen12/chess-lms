import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { rateLimit } from 'express-rate-limit';

// Import routes
import authRoutes from './routes/auth.js';
import progressRoutes from './routes/progress.js';
import modulesRoutes from './routes/modules.js';
import puzzlesRoutes from './routes/puzzles.js';
import gamesRoutes from './routes/games.js';
import aiRoutes from './routes/ai.js';
import openingsRoutes from './routes/openings.js';

// Import middleware
import { errorHandler } from './middleware/error.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/modules', modulesRoutes);
app.use('/api/puzzles', puzzlesRoutes);
app.use('/api/games', gamesRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/openings', openingsRoutes);

// Error handling
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Chess LMS API running on http://localhost:${PORT}`);
});

export default app;
