# Chess Mastery LMS — Product Requirements Document (PRD)
> **Purpose:** This PRD is written for use with GitHub Copilot CLI / AI-assisted development tools. It defines every screen, feature, data model, AI integration, and implementation detail needed to build the Chess Mastery LMS from scratch.

---

## 1. Product Vision

**Chess Mastery LMS** is a full-stack, AI-powered chess learning platform that takes a complete beginner from zero knowledge to legendary-level play. It covers every chess concept progressively — from piece movement to grandmaster-level strategy — with an embedded multi-provider AI guide (Gemini, Claude, ChatGPT, Grok, fallback chain) that acts as a personal coach 24/7.

**Target user:** Anyone from total beginner to advanced club player seeking structured, gamified, AI-assisted chess improvement.

---

## 2. Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| **Frontend** | React 18 + Vite | TypeScript, component-based |
| **UI Library** | Tailwind CSS v4 | Custom Nexus design tokens |
| **Chess Engine** | chess.js + Stockfish WASM | Move validation + AI opponent |
| **Chess Board UI** | react-chessboard | Drag-and-drop interactive board |
| **Backend** | Node.js + Express | REST API + WebSocket |
| **Database** | PostgreSQL + Prisma ORM | User data, progress, games |
| **Auth** | NextAuth.js or Clerk | OAuth + email/password |
| **AI Guide** | Multi-provider (see §8) | Gemini → Claude → GPT-4o → Grok fallback |
| **Deployment** | Vercel (frontend) + Railway (backend) | Or Docker monorepo |
| **State Management** | Zustand | Lightweight, fast |
| **Charts** | Recharts | Progress and ELO tracking |

---

## 3. Information Architecture

```
App
├── / (Landing Page — marketing)
├── /auth (Login / Register)
├── /dashboard (Home — after login)
├── /learn
│   ├── /learn/roadmap (Full curriculum map)
│   ├── /learn/[moduleId] (Lesson page)
│   └── /learn/[moduleId]/practice (Interactive board practice)
├── /puzzles (Tactics trainer)
├── /play
│   ├── /play/vs-ai (Play against Stockfish)
│   └── /play/analysis (Game analysis)
├── /openings (Opening explorer)
├── /endgames (Endgame trainer)
├── /ai-coach (AI Chat Guide — multi-provider)
├── /progress (ELO chart + stats + heatmap)
└── /settings (Profile, preferences, API keys)
```

---

## 4. Curriculum — Full Technique Coverage (Beginner → Legend)

### Level 1 — Absolute Beginner (ELO 0–400)
- **M1.1** How the board is set up (coordinates, ranks, files)
- **M1.2** How each piece moves (pawn, knight, bishop, rook, queen, king)
- **M1.3** Special rules (castling, en passant, pawn promotion)
- **M1.4** Check, checkmate, stalemate
- **M1.5** Basic checkmate patterns: back-rank, ladder mate, two-rook mate
- **M1.6** Scholar's mate and how to avoid it
- **M1.7** Basic rules of good play (control center, develop pieces)

### Level 2 — Beginner (ELO 400–800)
- **M2.1** Opening principles: center control, piece development, king safety
- **M2.2** Tactics: fork, pin, skewer (introduction)
- **M2.3** Basic trades: when to capture, piece values
- **M2.4** Checkmate patterns: smothered mate, Anastasia's mate, Legal's mate
- **M2.5** Pawn structure basics: isolated, doubled, passed pawns
- **M2.6** Simple endgame: King + Queen vs King, King + Rook vs King

### Level 3 — Intermediate (ELO 800–1200)
- **M3.1** Tactics: discovered attack, double check, zwischenzug
- **M3.2** Tactical combinations: two-move, three-move patterns
- **M3.3** Opening theory: e4 e5 (Italian/Spanish), d4 d5 (Queen's Gambit) basics
- **M3.4** Positional concepts: open files, outposts, weak squares
- **M3.5** Endgame: King + pawn endings, opposition, triangulation
- **M3.6** Piece coordination: bishop pair, knight vs bishop

### Level 4 — Club Player (ELO 1200–1600)
- **M4.1** Middlegame strategy: pawn breaks, pawn majorities
- **M4.2** Attack patterns: king side attacks, opposite-side castling attacks
- **M4.3** Advanced tactics: deflection, decoy, interference, overloading
- **M4.4** Opening repertoire building: 1.e4 vs 1.d4, responses to both
- **M4.5** Rook endings: Lucena, Philidor, active vs passive rook
- **M4.6** Game analysis methodology: identifying critical moments

### Level 5 — Advanced Club (ELO 1600–1800)
- **M5.1** Dynamic vs static advantages
- **M5.2** Prophylaxis and preventive thinking
- **M5.3** Complex endgames: bishop vs knight, queen endings
- **M5.4** Positional sacrifices: exchange sacrifice, pawn sacrifice for initiative
- **M5.5** Opening preparation and transpositions
- **M5.6** Time management and tournament psychology

### Level 6 — Expert (ELO 1800–2000)
- **M6.1** Deep opening theory (choose 2–3 openings to master)
- **M6.2** Complex positional play: weak color complexes, good/bad bishop
- **M6.3** Long-term planning across all phases
- **M6.4** Advanced endgame technique: Zugzwang, rook vs bishop/knight
- **M6.5** Calculation training: candidate moves, evaluation
- **M6.6** Studying GM games: Morphy, Fischer, Kasparov, Carlsen

### Level 7 — Candidate Master / Legend (ELO 2000–2200+)
- **M7.1** Advanced preparation systems for tournament play
- **M7.2** Novelties in opening theory
- **M7.3** Endgame mastery: all piece combinations
- **M7.4** Psychology in competition
- **M7.5** Building your own opening book
- **M7.6** Pattern databases: 1000+ tactical and positional patterns

Each module includes: **Lesson text → Animated board example → Practice puzzles (10–20) → Quiz → AI coach feedback → Unlock next module**

---

## 5. Screen Specifications

### 5.1 Landing Page (`/`)
- **Hero:** Bold headline: "From Zero to Chess Legend — The AI-Powered Chess School"
- Full-screen chessboard animation in background
- CTA: "Start Learning Free" → /auth/register
- **Sections:** Feature highlights, curriculum preview (level roadmap), AI coach demo, testimonials, FAQ
- Dark mode by default, light mode toggle

### 5.2 Dashboard (`/dashboard`)
**Layout:** Sidebar nav (persistent) + main content area

**Widgets on main:**
- 🟡 Daily Puzzle (embedded mini board)
- 📈 ELO Progress Chart (last 30 days)
- 🏆 Current Module + next lesson button
- 🔥 Streak counter (days studied)
- 📊 Stats bar: Total puzzles solved | Win rate vs AI | Hours studied
- 💬 Quick AI Coach message box (shortcuts to /ai-coach)
- 🗓 Weekly study plan (what to do today)

### 5.3 Learn — Roadmap (`/learn/roadmap`)
- Visual skill tree / road map showing all 7 levels and modules
- Each node: locked/unlocked/completed state with progress ring
- Click a node → navigate to that lesson
- Color-coded by level (greens → yellows → oranges → reds for difficulty)
- Sidebar shows ELO target for each level

### 5.4 Lesson Page (`/learn/[moduleId]`)
**Layout:**
- Left: Lesson content (text + diagrams + embedded interactive board)
- Right: Table of contents + AI coach assistant chat panel (collapsible)

**Features:**
- Animated piece movements to demonstrate concepts (auto-play)
- "Try it yourself" mode: board becomes interactive
- Key concept callout boxes
- "Ask AI Coach" button: auto-fills the current topic into the chat
- End-of-lesson quiz (5 questions, multiple choice + board position select)
- XP reward on completion
- Confetti animation on module completion 🎉

### 5.5 Tactics Trainer (`/puzzles`)
**Features:**
- Puzzle fetch from Lichess puzzle API (50,000+ puzzles, filtered by difficulty)
- Puzzle rating matches user's current rating band
- Timer mode (optional)
- Hint system: 3 hints per puzzle (deduct points)
- Explain mode: After solving, AI coach explains WHY the move works
- Streak counter (consecutive correct puzzles)
- Daily 10-puzzle challenge with XP bonus
- Filters: Theme (fork, pin, skewer, etc.), Difficulty, Time control
- Puzzle history with accuracy graph

### 5.6 Play vs AI (`/play/vs-ai`)
**Features:**
- Stockfish WASM engine (levels 1–20 mapped to ELO 200–3200)
- "Adaptive AI" mode: Stockfish adjusts to match user's level ±100 ELO
- Clock options: Bullet (1 min), Blitz (5 min), Rapid (15 min), Classical (30 min)
- **Post-game auto-analysis:**
  - Blunders, mistakes, inaccuracies highlighted on move list
  - Critical position navigator
  - AI coach summary: "You missed a fork on move 18 — here's how to spot it next time"
  - Alternative best moves shown
- Save game to PGN / share game link
- Evaluation bar on side

### 5.7 Opening Explorer (`/openings`)
- Searchable opening database (all major openings)
- Interactive board: click to step through moves
- Opening tree visualization
- For each opening:
  - Name, ECO code, variation list
  - Key ideas and strategic goals
  - Famous games in this opening (GM examples)
  - Practice exercises
  - Win rate statistics (% white wins / draws / black wins)
- "Add to my repertoire" → personal opening book builder

### 5.8 Endgame Trainer (`/endgames`)
- Categorized endgame library (Pawn, Rook, Bishop, Knight, Queen, Complex)
- Each endgame type: theory lesson + interactive challenge
- Timer-based: solve in under X moves challenge
- Difficulty progression within each category
- Stockfish verification: only accepts optimal or near-optimal solutions

### 5.9 AI Coach (`/ai-coach`)
> **This is the crown feature.**

**UI:**
- Full-page chat interface (like ChatGPT UI)
- Persistent conversation history (per user, stored in DB)
- Side panel: attach current board position (FEN string)
- "Context" chips: [Current Lesson] [Last Game] [Tactics Streak] [ELO Rating]

**Features:**
- Ask anything chess-related: "Why did I lose?" / "Explain the Sicilian Defense" / "What should I study next?"
- **Board-aware analysis:** Paste a FEN or PGN → AI explains the position
- **Voice input** (Web Speech API)
- **Markdown + chess notation rendering** (highlight moves like `Nf3`, `e4`)
- **Suggested questions** based on current lesson context
- Conversation export to PDF
- Session memory: AI remembers recent games and weak areas

**Multi-provider AI fallback chain (see §8)**

### 5.10 Progress Page (`/progress`)
- ELO over time (line chart)
- Puzzle accuracy by theme (radar chart)
- Study time heatmap (like GitHub contribution graph)
- Win/Loss/Draw breakdown (pie chart)
- Streak calendar
- Milestone badges earned
- Estimated time to next level
- Weekly comparison vs last week

---

## 6. Data Models (Prisma Schema)

```prisma
model User {
  id              String   @id @default(cuid())
  email           String   @unique
  name            String?
  avatar          String?
  passwordHash    String?
  eloRating       Int      @default(800)
  currentLevel    Int      @default(1)
  streak          Int      @default(0)
  lastStudied     DateTime?
  totalXp         Int      @default(0)
  createdAt       DateTime @default(now())

  lessons         LessonProgress[]
  puzzles         PuzzleAttempt[]
  games           Game[]
  conversations   Conversation[]
  badges          UserBadge[]
  openingBook     OpeningBookEntry[]
}

model Module {
  id          String   @id
  level       Int
  title       String
  description String
  content     Json     // rich text + board positions
  order       Int
  xpReward    Int      @default(100)
  prerequisites String[]

  progress    LessonProgress[]
}

model LessonProgress {
  id          String   @id @default(cuid())
  userId      String
  moduleId    String
  completed   Boolean  @default(false)
  quizScore   Int?
  completedAt DateTime?
  timeSpent   Int      @default(0) // seconds
  
  user        User     @relation(fields: [userId], references: [id])
  module      Module   @relation(fields: [moduleId], references: [id])
}

model PuzzleAttempt {
  id          String   @id @default(cuid())
  userId      String
  puzzleId    String   // Lichess puzzle ID
  correct     Boolean
  hintsUsed   Int      @default(0)
  timeMs      Int
  theme       String
  rating      Int
  attemptedAt DateTime @default(now())
  
  user        User     @relation(fields: [userId], references: [id])
}

model Game {
  id          String   @id @default(cuid())
  userId      String
  pgn         String
  fen         String?  // final position
  result      String   // win/loss/draw
  color       String   // white/black
  opponentType String  // ai/human
  aiLevel     Int?
  eloChange   Int?
  analysis    Json?    // AI analysis result
  playedAt    DateTime @default(now())
  
  user        User     @relation(fields: [userId], references: [id])
}

model Conversation {
  id        String    @id @default(cuid())
  userId    String
  title     String    @default("New Chat")
  messages  Message[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  
  user      User      @relation(fields: [userId], references: [id])
}

model Message {
  id              String       @id @default(cuid())
  conversationId  String
  role            String       // user/assistant
  content         String
  provider        String?      // gemini/claude/gpt4o/grok
  fen             String?      // attached board position
  createdAt       DateTime     @default(now())
  
  conversation    Conversation @relation(fields: [conversationId], references: [id])
}

model Badge {
  id          String      @id
  name        String
  description String
  icon        String
  condition   String      // JSON condition

  users       UserBadge[]
}

model UserBadge {
  id        String   @id @default(cuid())
  userId    String
  badgeId   String
  earnedAt  DateTime @default(now())
  
  user      User     @relation(fields: [userId], references: [id])
  badge     Badge    @relation(fields: [badgeId], references: [id])
}

model OpeningBookEntry {
  id        String   @id @default(cuid())
  userId    String
  eco       String
  name      String
  pgn       String
  notes     String?
  addedAt   DateTime @default(now())
  
  user      User     @relation(fields: [userId], references: [id])
}
```

---

## 7. API Endpoints

### Auth
- `POST /api/auth/register` — email + password signup
- `POST /api/auth/login` — returns JWT
- `GET  /api/auth/me` — current user profile

### Progress
- `GET  /api/progress` — full stats for current user
- `GET  /api/progress/elo-history` — ELO over time (last 90 days)
- `POST /api/progress/update-elo` — update after game

### Modules / Lessons
- `GET  /api/modules` — all modules with user progress
- `GET  /api/modules/:id` — single module content
- `POST /api/modules/:id/complete` — mark complete + award XP

### Puzzles
- `GET  /api/puzzles?rating=1200&theme=fork` — fetch puzzles from Lichess + cache
- `POST /api/puzzles/attempt` — log attempt result

### Games
- `POST /api/games` — save completed game
- `GET  /api/games` — list user's games
- `POST /api/games/:id/analyze` — trigger AI analysis

### AI Coach
- `POST /api/ai/chat` — send message, returns AI response (with fallback)
- `GET  /api/ai/conversations` — list conversations
- `GET  /api/ai/conversations/:id` — get full conversation
- `DELETE /api/ai/conversations/:id` — delete conversation
- `POST /api/ai/analyze-position` — analyze a FEN position

### Openings
- `GET  /api/openings` — search openings database
- `GET  /api/openings/:eco` — get opening by ECO code
- `POST /api/openings/repertoire` — add to personal opening book

---

## 8. AI Coach — Multi-Provider Implementation

### Provider Priority & Fallback Chain

```
Request
  │
  ▼
[1] Google Gemini 1.5 Pro     ← primary (generous free tier)
  │ if error / rate limit
  ▼
[2] Anthropic Claude 3.5 Sonnet ← secondary
  │ if error / rate limit
  ▼
[3] OpenAI GPT-4o              ← tertiary
  │ if error / rate limit
  ▼
[4] xAI Grok 2                 ← quaternary
  │ if all fail
  ▼
[5] Stockfish + local heuristics ← offline fallback (no API needed)
    Returns a position evaluation as plain text
```

### Implementation (Node.js)

```javascript
// ai-provider-chain.js
const providers = [
  { name: 'gemini',  fn: callGemini  },
  { name: 'claude',  fn: callClaude  },
  { name: 'gpt4o',   fn: callGPT4o   },
  { name: 'grok',    fn: callGrok    },
  { name: 'local',   fn: callLocal   },  // Stockfish fallback
];

async function callAICoach(messages, context) {
  for (const provider of providers) {
    try {
      const result = await provider.fn(messages, context);
      return { ...result, provider: provider.name };
    } catch (err) {
      console.warn(`Provider ${provider.name} failed:`, err.message);
      continue;
    }
  }
  throw new Error('All AI providers failed');
}
```

### System Prompt for AI Coach

```
You are ChessMaster AI, an expert chess coach embedded in the Chess Mastery LMS.
You teach chess from absolute beginner to grandmaster level.
User context:
  - Current ELO: {elo}
  - Current lesson module: {module}
  - Recent games: {recentGames}
  - Weak areas: {weakAreas}

Your coaching style:
- Explain concepts clearly at the user's level
- Reference specific moves in algebraic notation (e.g., 1.e4 e5 2.Nf3)
- When given a board position (FEN), analyze it concisely
- Suggest what to study based on current weaknesses
- Be encouraging, direct, and precise
- Celebrate improvements but honestly point out mistakes
- When asked about openings, explain the key ideas, not just moves
```

### Context Injection
When user is on a lesson page → prepend lesson content summary to system prompt.
When user shares a game → attach PGN to context.
When user shares FEN → include Stockfish evaluation in context before sending to AI.

### API Key Management
- Keys stored in environment variables (`.env`)
- User can optionally provide their own keys in /settings (stored encrypted in DB)
- If user provides keys → use those; else use platform keys

---

## 9. Chess Engine Integration

### Stockfish WASM Setup

```javascript
// stockfish-worker.js — runs in Web Worker
import Stockfish from 'stockfish.wasm';

const stockfish = await Stockfish();

export async function evaluatePosition(fen, depth = 15) {
  return new Promise((resolve) => {
    stockfish.addMessageListener((msg) => {
      if (msg.startsWith('bestmove')) {
        resolve(parseBestMove(msg));
      }
    });
    stockfish.postMessage(`position fen ${fen}`);
    stockfish.postMessage(`go depth ${depth}`);
  });
}

export function eloToSkillLevel(elo) {
  // Map ELO 200–3200 to Stockfish skill 1–20
  return Math.max(1, Math.min(20, Math.round((elo - 200) / 155)));
}
```

### Post-Game Analysis Engine

```javascript
async function analyzeGame(pgn) {
  const chess = new Chess();
  chess.loadPgn(pgn);
  const moves = chess.history({ verbose: true });
  const annotations = [];

  for (let i = 0; i < moves.length; i++) {
    const fen = chess.fen();
    const eval_before = await evaluatePosition(fen, 18);
    chess.move(moves[i]);
    const eval_after = await evaluatePosition(chess.fen(), 18);
    const cpl = Math.abs(eval_before.score - eval_after.score); // centipawn loss

    if (cpl > 200) annotations.push({ move: i, type: 'blunder', cpl });
    else if (cpl > 100) annotations.push({ move: i, type: 'mistake', cpl });
    else if (cpl > 50)  annotations.push({ move: i, type: 'inaccuracy', cpl });
  }

  return annotations;
}
```

---

## 10. Puzzle Integration (Lichess API)

```javascript
// puzzles-service.js
const LICHESS_PUZZLE_API = 'https://lichess.org/api/puzzle';

async function fetchPuzzles({ rating = 1200, count = 20, theme = 'all' }) {
  const res = await fetch(
    `${LICHESS_PUZZLE_API}/batch?nb=${count}&rating=${rating}&themes=${theme}`,
    { headers: { 'Accept': 'application/json' } }
  );
  return res.json();
}

// Cache fetched puzzles in DB to avoid rate limits
// Fetch new batch when remaining cached puzzles < 50
```

---

## 11. Gamification System

| Element | Description |
|---|---|
| **XP** | Earned for lessons (100 XP), puzzles (10 XP), games (20 XP) |
| **ELO** | Tracked separately; updates after each game vs AI |
| **Streak** | Daily login + study streak, shown with fire emoji 🔥 |
| **Levels** | LMS level (1–7) based on XP, separate from chess ELO |
| **Badges** | 30+ achievement badges (First Checkmate, 7-Day Streak, etc.) |
| **Leaderboard** | Weekly XP leaderboard (opt-in) |
| **Daily Challenge** | 1 special puzzle per day with 2× XP bonus |
| **Level-up animation** | Full-screen confetti + sound effect on level completion |

### Badge Definitions (sample)

```json
[
  { "id": "first_checkmate",    "name": "First Blood",       "condition": "games_won >= 1" },
  { "id": "streak_7",           "name": "On a Roll",         "condition": "streak >= 7" },
  { "id": "streak_30",          "name": "Chess Addict",      "condition": "streak >= 30" },
  { "id": "puzzles_100",        "name": "Tactician",         "condition": "puzzles_solved >= 100" },
  { "id": "puzzles_1000",       "name": "Pattern Master",    "condition": "puzzles_solved >= 1000" },
  { "id": "elo_1200",           "name": "Club Player",       "condition": "elo >= 1200" },
  { "id": "elo_1800",           "name": "Expert",            "condition": "elo >= 1800" },
  { "id": "elo_2000",           "name": "Candidate Master",  "condition": "elo >= 2000" },
  { "id": "all_modules",        "name": "Grand Scholar",     "condition": "all_modules_complete" }
]
```

---

## 12. Key UI Components

### ChessBoard Component (React)

```jsx
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

function InteractiveBoard({ fen, onMove, orientation = 'white', arrows = [], highlights = [] }) {
  const [game] = useState(new Chess(fen));

  function onDrop(sourceSquare, targetSquare) {
    const move = game.move({ from: sourceSquare, to: targetSquare, promotion: 'q' });
    if (!move) return false;
    onMove?.(game.fen(), move);
    return true;
  }

  return (
    <Chessboard
      position={fen}
      onPieceDrop={onDrop}
      boardOrientation={orientation}
      customArrows={arrows}
      customSquareStyles={highlights}
      animationDuration={200}
    />
  );
}
```

### AI Coach Chat Component

```jsx
function AICoachChat({ context }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState('');

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, userMsg], context })
    });

    const data = await res.json();
    setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
    setProvider(data.provider);
    setLoading(false);
  }

  return (
    <div className="chat-container">
      <div className="messages-list">
        {messages.map((m, i) => (
          <ChatMessage key={i} role={m.role} content={m.content} />
        ))}
        {loading && <TypingIndicator provider={provider} />}
      </div>
      <div className="chat-input-bar">
        <textarea value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
          placeholder="Ask your chess coach anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      {provider && <span className="provider-badge">Powered by {provider}</span>}
    </div>
  );
}
```

---

## 13. Design System

**Color Theme:** Dark-first chess aesthetic (dark wood tones, deep greens, gold accents)
- Primary accent: `#4f98a3` (teal) — interactive elements
- Gold accent: `#e8af34` — rewards, XP, achievements
- Background dark: `#0f1117` — main app background
- Surface: `#1c1b19` — cards and panels
- Chess board light square: `#f0d9b5`
- Chess board dark square: `#b58863`

**Typography:**
- Display: `Playfair Display` (headings, logo)
- Body: `Inter` or `Satoshi` (UI copy)

**Motion:** Smooth 200ms transitions on all interactive states. Board piece moves animated at 200ms. Level-up: confetti (canvas-confetti library). Puzzle solve: checkmark burst.

**Icons:** Lucide React

---

## 14. Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."

# Auth
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"

# AI Providers (platform keys — users can override in settings)
GEMINI_API_KEY="..."
ANTHROPIC_API_KEY="..."
OPENAI_API_KEY="..."
XAI_API_KEY="..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

---

## 15. Project Folder Structure

```
chess-lms/
├── apps/
│   ├── web/                         ← React frontend (Vite)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── board/           ← ChessBoard, EvalBar, MoveList
│   │   │   │   ├── ai-coach/        ← Chat UI components
│   │   │   │   ├── puzzles/         ← PuzzleBoard, PuzzleTimer
│   │   │   │   ├── progress/        ← Charts, Badges, Heatmap
│   │   │   │   └── ui/              ← Button, Card, Modal, etc.
│   │   │   ├── pages/               ← Route-level components
│   │   │   ├── store/               ← Zustand stores
│   │   │   ├── hooks/               ← useChess, useAI, usePuzzle
│   │   │   └── lib/                 ← chess.js utils, API client
│   │   └── public/
│   └── api/                         ← Express backend
│       ├── src/
│       │   ├── routes/              ← auth, modules, puzzles, ai, games
│       │   ├── services/
│       │   │   ├── ai-chain.js      ← Multi-provider AI fallback
│       │   │   ├── stockfish.js     ← Engine integration
│       │   │   └── puzzles.js       ← Lichess puzzle cache
│       │   ├── middleware/          ← auth, rate-limit, error
│       │   └── prisma/              ← schema.prisma, migrations
│       └── .env
├── packages/
│   └── shared/                      ← shared types, chess utilities
├── package.json                     ← monorepo root (pnpm workspaces)
└── turbo.json                       ← Turborepo config (optional)
```

---

## 16. Additional Features (Bonus)

| Feature | Description |
|---|---|
| **PGN Import** | Paste any PGN → board replays the game, AI analyzes |
| **FEN Share** | Share a board position via URL |
| **Opening Flashcards** | Spaced repetition for opening moves |
| **Blind Chess Mode** | Practice visualizing the board without seeing it |
| **Voice Coach** | AI coach speaks feedback aloud (Web Speech API) |
| **Tournament Simulator** | 4-round simulated tournament vs AI at your level |
| **Pattern Recognition Drill** | Flash a position for 3s → recall best move |
| **Famous Games Replay** | Step through 100 GM masterpieces with annotations |
| **Coaching Notes** | Personal notebook attached to each game/lesson |
| **Study Groups** | Multi-user rooms for synchronized learning (WebSocket) |
| **Mobile PWA** | Installable on Android/iOS via PWA manifest |

---

## 17. Development Phases

### Phase 1 — MVP (4–6 weeks)
- Auth + user profile
- Dashboard (basic widgets)
- 20 core lessons (Levels 1–3)
- Interactive board + Stockfish vs AI (levels 1–10)
- Basic puzzle trainer (100 puzzles)
- AI Coach (Gemini primary only)
- Progress page (ELO + streak)

### Phase 2 — Full Content (6–8 weeks)
- Complete all 7 levels of curriculum
- All puzzle themes + Lichess integration
- Post-game analysis pipeline
- Opening explorer
- Endgame trainer
- Full AI fallback chain

### Phase 3 — Polish & Social (4 weeks)
- Gamification: badges, XP, leaderboard
- Famous games library
- PGN/FEN import/export
- PWA mobile support
- Performance optimization
- User onboarding tour

---

## 18. Copilot CLI Usage Tips

When using this PRD with GitHub Copilot CLI or similar tools:

```bash
# Generate a specific component
copilot "Build the AICoachChat component from §12 of the PRD"

# Generate the API route
copilot "Implement POST /api/ai/chat with the fallback chain from §8"

# Generate the Prisma schema
copilot "Create the Prisma schema from §6 of the PRD and run prisma migrate"

# Generate a full page
copilot "Build the /puzzles page from §5.5 using react-chessboard and the Lichess API from §10"

# Reference specific sections
copilot "Implement the gamification badge system from §11"
```

The PRD is structured so that each section (§5.x, §8, §10, etc.) can be passed as a standalone prompt to Copilot CLI for targeted code generation.

---

*PRD Version 1.0 — Chess Mastery LMS — Generated April 2026*
