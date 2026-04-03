# Chess LMS - Copilot Instructions

## Commands

```bash
# Development
pnpm dev                    # Start all services (frontend :3000, backend :3001)
pnpm build                  # Build all packages

# Database (PostgreSQL via Docker)
docker compose up -d        # Start database
pnpm db:migrate             # Run migrations
pnpm db:seed                # Seed badges, modules, demo user
pnpm db:studio              # Open Prisma Studio

# Per-package
pnpm --filter api dev       # API only
pnpm --filter web dev       # Frontend only
pnpm --filter api lint      # Lint API
```

## Architecture

### Monorepo Structure
- **apps/api** - Express backend (port 3001)
- **apps/web** - React + Vite frontend (port 3000)
- **packages/shared** - Shared TypeScript types and utilities

### AI Coach Fallback Chain
The AI coach tries providers in order until one succeeds:
1. Google Gemini (`GEMINI_API_KEY`)
2. Anthropic Claude (`ANTHROPIC_API_KEY`)
3. OpenAI GPT-4o (`OPENAI_API_KEY`)
4. xAI Grok (`XAI_API_KEY`)
5. Local fallback (no API key needed)

Implementation: `apps/api/src/services/ai-chain.ts`

### Chess Engine
Stockfish runs in a Web Worker (`apps/web/src/workers/stockfish.worker.ts`) loaded from CDN. The `useStockfish` hook provides the React interface.

Move annotation thresholds (centipawn loss):
- Blunder: >200
- Mistake: >100
- Inaccuracy: >50

### Curriculum Structure
43 modules across 7 levels (M1.1 through M7.6). Stored in `apps/api/src/data/curriculum/`. Each module has:
- `content.sections[]` with FEN positions
- `keyConceptBoards[]` for key positions
- `quizQuestions[]` (5 per module)

## Conventions

### API Routes
All routes use Zod validation via `validate` middleware. Pattern:
```typescript
router.post('/endpoint', validate(schema), authenticate, async (req, res, next) => {
  try { /* ... */ } catch (error) { next(error); }
});
```

### State Management
Frontend uses Zustand stores in `apps/web/src/store/`:
- `authStore` - User session, JWT in localStorage
- `chessStore` - Board position, move history, PGN
- `progressStore` - Stats, badges, ELO history
- `uiStore` - Theme, sidebar state (persisted)

### Component Organization
- `components/ui/` - Generic UI (Button, Card, Modal)
- `components/board/` - Chess board components (InteractiveBoard, EvalBar, MoveList)
- `components/progress/` - Stats visualization (ProgressChart, StudyHeatmap, BadgeGrid)

### Design Tokens
Primary: `#4f98a3`, Gold: `#e8af34`, Background: `#0f1117`, Surface: `#1c1b19`
Board squares: light `#f0d9b5`, dark `#b58863`

### Gamification
- XP awards: lesson (100), puzzle correct (10), game finish (20)
- Streak bonus: +10% per day (max 100%)
- Badges checked after every action via `badge-checker.ts`
