<div align="center">

# ♟️ Chess Mastery LMS

### AI-Powered Chess Learning Management System

*Master chess from beginner to expert with adaptive AI coaching and comprehensive curriculum*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[Features](#-features) • [Quick Start](#-quick-start) • [Tech Stack](#-tech-stack) • [Architecture](#-architecture) • [Contributing](#-contributing)

</div>

---

## 🎯 Overview

Chess Mastery LMS is a **full-stack web application** designed to take players from absolute beginner (0 ELO) to candidate master level (2400+ ELO). The platform combines structured curriculum, interactive lessons, tactical puzzles, AI-powered coaching, and gamification to create an engaging learning experience.

### Why This Project?

- 🧠 **Adaptive Learning**: Multi-provider AI coach (Gemini/Claude/GPT-4o/Grok) adapts to your skill level
- 📚 **Comprehensive Curriculum**: 43 modules across 7 difficulty levels (200+ hours of content)
- ♟️ **Real Chess Engine**: Stockfish WASM for analysis and adaptive AI opponents
- 📊 **Data-Driven Progress**: Track ELO, puzzle accuracy, time studied, and weak areas
- 🎮 **Gamified Experience**: XP, badges, streaks, and achievements keep you motivated

---

## ✨ Features

### 🎓 Learning System
- **43 Structured Modules** - From basic piece movement to advanced endgames
- **Interactive Lessons** - Animated chessboards with key positions
- **AI Coach Integration** - Ask questions, analyze positions, get personalized hints
- **End-of-Module Quizzes** - Test comprehension with 5 questions per module

### 🧩 Practice Tools
- **Puzzle Trainer** - 10,000+ tactics from Lichess (rated 400-2800)
- **Play vs AI** - Adaptive Stockfish opponent matching your ELO
- **Opening Explorer** - Searchable database with ECO codes and statistics
- **Endgame Drills** - Master theoretical endgames (K+Q vs K, Lucena, etc.)
- **Pattern Flash Drill** - Memorize positions in 3 seconds
- **Famous Games Viewer** - Study 10 GM masterpieces with annotations

### 📈 Progress Tracking
- **ELO Rating System** - Track improvement over time
- **Study Heatmap** - GitHub-style contribution graph
- **Puzzle Accuracy Charts** - Identify weak tactical themes
- **Streak Counter** - Maintain daily study consistency
- **33 Achievement Badges** - Unlock rewards for milestones

### 🤖 AI Coach (Multi-Provider Fallback)
1. **Google Gemini 1.5 Pro** (primary)
2. **Anthropic Claude 3.5 Sonnet** (secondary)
3. **OpenAI GPT-4o** (tertiary)
4. **xAI Grok 2** (quaternary)
5. **Stockfish Local** (offline fallback)

### 🚀 Additional Features
- **PGN Import** - Analyze your own games
- **FEN Sharing** - Share positions via URL
- **Voice Coach** - Web Speech API reads explanations aloud
- **PWA Support** - Installable on mobile/desktop
- **Dark Mode** - Eye-friendly interface

---

## 🛠 Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178c6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwindcss)

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Zustand** - State management (auth, chess, UI, progress)
- **Tailwind CSS v4** - Styling with custom design tokens
- **react-chessboard** - Interactive chess UI
- **chess.js** - Chess logic and validation
- **Stockfish WASM** - Web Worker-based engine
- **Recharts** - Data visualization
- **Lucide React** - Icon system

### Backend
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.19-000000?style=flat&logo=express)
![Prisma](https://img.shields.io/badge/Prisma-5.14-2d3748?style=flat&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169e1?style=flat&logo=postgresql)

- **Express.js** - REST API server
- **Prisma ORM** - Type-safe database client
- **PostgreSQL** - Relational database
- **JWT** - Authentication
- **Zod** - Runtime validation
- **bcrypt** - Password hashing

### AI Providers
- **@google/generative-ai** - Gemini 1.5 Pro
- **@anthropic-ai/sdk** - Claude 3.5 Sonnet
- **openai** - GPT-4o
- **xAI API** - Grok 2

### DevOps & Tools
- **pnpm** - Package manager (monorepo)
- **Turbo** - Build system
- **Docker Compose** - PostgreSQL containerization
- **Vercel** - Frontend deployment
- **Railway** - Backend deployment

---

## 📁 Architecture

```
chess-lms/
├── apps/
│   ├── web/                    # React + Vite frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── board/      # InteractiveBoard, EvalBar, MoveList
│   │   │   │   ├── ai/         # AICoachChat, ChessNotation
│   │   │   │   ├── progress/   # Charts, heatmaps, badges
│   │   │   │   ├── features/   # PGNImport, FENShare, VoiceCoach
│   │   │   │   └── ui/         # Reusable UI components
│   │   │   ├── pages/          # 12 route pages
│   │   │   ├── store/          # Zustand stores
│   │   │   ├── lib/            # API client, Stockfish wrapper
│   │   │   └── workers/        # Stockfish Web Worker
│   │   └── public/             # PWA manifest, service worker
│   │
│   └── api/                    # Express backend
│       ├── src/
│       │   ├── routes/         # 7 API route files
│       │   ├── services/
│       │   │   ├── ai-providers/   # Gemini, Claude, GPT-4o, Grok
│       │   │   ├── ai-chain.ts     # Fallback orchestrator
│       │   │   ├── puzzles.ts      # Lichess integration
│       │   │   ├── badge-checker.ts
│       │   │   └── xp-service.ts
│       │   ├── middleware/     # Auth, validation, error handling
│       │   └── data/           # Curriculum, badges, famous games
│       └── prisma/
│           ├── schema.prisma   # 12 models
│           ├── migrations/
│           └── seed.ts
│
├── packages/
│   └── shared/                 # Shared TypeScript types
│
├── docker-compose.yml          # PostgreSQL + pgAdmin
├── vercel.json                 # Frontend deployment config
├── railway.toml                # Backend deployment config
└── turbo.json                  # Monorepo build pipeline
```

### Database Schema (12 Models)
- **User** - Auth, ELO, streak, level
- **Module** - Curriculum content (43 modules)
- **LessonProgress** - User completion tracking
- **PuzzleAttempt** - Tactical training history
- **Game** - Saved games with analysis
- **Conversation / Message** - AI chat history
- **Badge / UserBadge** - Achievement system
- **OpeningBookEntry** - Personal repertoire
- **CachedPuzzle** - Lichess puzzle cache
- **DailyStats** - Analytics aggregation

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 20+ ([Download](https://nodejs.org/))
- **pnpm** 9+ (`npm install -g pnpm`)
- **Docker Desktop** ([Download](https://www.docker.com/products/docker-desktop))

### Installation

```bash
# 1. Clone repository
git clone https://github.com/Chahethsen12/chess-lms.git
cd chess-lms

# 2. Install dependencies
node install.js

# 3. Set up environment variables
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env and add API keys (at least one AI provider)

# 4. Start PostgreSQL
docker compose up -d

# 5. Run database migrations and seed
node migrate-and-seed.js

# 6. Start development servers
node start-dev.js
```

**Access the app:**
- 🖥️ Frontend: http://localhost:3000
- 🔧 API: http://localhost:3001
- 🗄️ Database: localhost:5433 (user: `postgres`, pass: `postgres`)

**Demo Account:**
- Email: `demo@chesslms.com`
- Password: `demo1234`

---

## 🔧 Development

### Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all dev servers (Turbo) |
| `pnpm build` | Build all packages |
| `pnpm lint` | Run linters |
| `pnpm db:generate` | Generate Prisma Client |
| `pnpm db:migrate` | Run Prisma migrations |
| `pnpm db:seed` | Seed database with demo data |
| `pnpm db:studio` | Open Prisma Studio (GUI) |

### Environment Variables

Required in `apps/api/.env`:

```bash
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/chess_lms?schema=public"

# Auth
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_EXPIRES_IN="7d"

# AI Providers (at least one required)
GEMINI_API_KEY=""
ANTHROPIC_API_KEY=""
OPENAI_API_KEY=""
XAI_API_KEY=""

# Server
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

**Get API Keys:**
- Gemini: https://makersuite.google.com/app/apikey
- Anthropic: https://console.anthropic.com/
- OpenAI: https://platform.openai.com/api-keys
- xAI: https://x.ai/api

---

## 🚢 Deployment

### Frontend (Vercel)
```bash
vercel --prod
```
Set environment variable:
- `VITE_API_URL` = Your Railway API URL

### Backend (Railway)
1. Connect GitHub repo
2. Set environment variables (same as `.env`)
3. Deploy from `apps/api`

### Alternative: Docker
```bash
docker compose -f docker-compose.prod.yml up -d
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript strict mode
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add JSDoc comments for complex functions
- Test locally before submitting PR

---

## 📊 Project Status

- ✅ **Core Features**: Complete (43 modules, AI coach, puzzles, games)
- ✅ **Database**: Prisma schema with 12 models
- ✅ **API**: 18 endpoints with JWT auth
- ✅ **Frontend**: 12 pages, 40+ components
- ✅ **PWA**: Manifest and service worker
- ✅ **Deployment**: Vercel + Railway configs
- 🔄 **Chess Icons**: Need 192x192 and 512x512 PNG assets
- 🔄 **Testing**: Unit/integration tests (future)

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Lichess** - Puzzle database
- **Stockfish** - Open-source chess engine
- **Google Gemini / Anthropic Claude / OpenAI GPT-4o / xAI Grok** - AI providers
- **chess.js** - Chess logic library
- **react-chessboard** - Interactive board component

---

<div align="center">

**Built with ❤️ by [Chaheth Senevirathne](https://github.com/Chahethsen12)**

⭐ Star this repo if you find it helpful!

</div>
