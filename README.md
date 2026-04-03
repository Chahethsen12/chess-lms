# Chess Mastery LMS

An AI-powered chess learning platform that takes you from beginner to master.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- pnpm 9+
- Docker (for PostgreSQL)

### Setup

1. **Clone and install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the database:**
   ```bash
   docker compose up -d
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   # Edit .env and add your API keys
   ```

4. **Initialize the database:**
   ```bash
   pnpm db:migrate
   pnpm db:seed
   ```

5. **Start development servers:**
   ```bash
   pnpm dev
   ```

   - Frontend: http://localhost:3000
   - Backend: http://localhost:4000
   - Database: localhost:5432

## 📁 Project Structure

```
chess-lms/
├── apps/
│   ├── web/          # React frontend (Vite)
│   └── api/          # Express backend
├── packages/
│   └── shared/       # Shared types and utilities
├── docker-compose.yml
└── turbo.json
```

## 🛠 Development

### Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all dev servers |
| `pnpm build` | Build all packages |
| `pnpm db:migrate` | Run database migrations |
| `pnpm db:seed` | Seed the database |
| `pnpm db:studio` | Open Prisma Studio |

### Tech Stack

- **Frontend:** React 18 + Vite + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express + Prisma
- **Database:** PostgreSQL
- **AI:** Gemini / Claude / GPT-4o / Grok (fallback chain)
- **Chess:** chess.js + Stockfish WASM + react-chessboard

## 🎯 Features

- 📚 43 structured lessons from beginner to master
- 🤖 AI Chess Coach (multi-provider)
- ♟️ Play against Stockfish AI
- 🧩 Puzzle trainer (Lichess integration)
- 📈 Progress tracking and analytics
- 🏆 Gamification (XP, badges, streaks)
- 📖 Opening explorer
- 🎯 Endgame trainer

## 📄 License

MIT
