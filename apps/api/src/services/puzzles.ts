import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface PuzzleFetchOptions {
  rating?: number;
  count?: number;
  theme?: string;
}

interface LichessPuzzle {
  puzzle: {
    id: string;
    rating: number;
    solution: string[];
    themes: string[];
  };
  game: {
    fen: string;
    pgn: string;
  };
}

const LICHESS_PUZZLE_API = 'https://lichess.org/api/puzzle/next';
const MIN_CACHED_PUZZLES = 50;

export class PuzzleService {
  // Fetch puzzles from Lichess API
  async fetchFromLichess(rating: number): Promise<LichessPuzzle | null> {
    try {
      const response = await fetch(`${LICHESS_PUZZLE_API}?difficulty=${this.getDifficulty(rating)}`, {
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (!response.ok) {
        console.error('Lichess API error:', response.status);
        return null;
      }
      
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch from Lichess:', error);
      return null;
    }
  }

  // Map user rating to Lichess difficulty
  private getDifficulty(rating: number): string {
    if (rating < 1000) return 'easiest';
    if (rating < 1400) return 'easier';
    if (rating < 1800) return 'normal';
    if (rating < 2200) return 'harder';
    return 'hardest';
  }

  // Get puzzles for a user (from cache or Lichess)
  async getPuzzles(options: PuzzleFetchOptions = {}): Promise<any[]> {
    const { rating = 1200, count = 1, theme } = options;
    const ratingRange = 200;

    // Try to get from cache first
    const cachedPuzzles = await prisma.cachedPuzzle.findMany({
      where: {
        rating: {
          gte: rating - ratingRange,
          lte: rating + ratingRange,
        },
        ...(theme && { themes: { has: theme } }),
      },
      take: count,
    });

    // Check if we need to refetch
    const cacheCount = await prisma.cachedPuzzle.count({
      where: {
        rating: {
          gte: rating - ratingRange,
          lte: rating + ratingRange,
        },
      },
    });

    if (cacheCount < MIN_CACHED_PUZZLES) {
      // Background refetch
      this.refetchPuzzles(rating).catch(console.error);
    }

    if (cachedPuzzles.length >= count) {
      return cachedPuzzles;
    }

    // Fetch from Lichess if cache insufficient
    const puzzles: any[] = [...cachedPuzzles];
    const remaining = count - puzzles.length;

    for (let i = 0; i < remaining; i++) {
      const lichessPuzzle = await this.fetchFromLichess(rating);
      if (lichessPuzzle) {
        const puzzle = await this.cachePuzzle(lichessPuzzle);
        puzzles.push(puzzle);
      }
      // Rate limit
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    return puzzles;
  }

  // Cache a puzzle from Lichess
  private async cachePuzzle(lichessPuzzle: LichessPuzzle) {
    const { puzzle, game } = lichessPuzzle;

    return await prisma.cachedPuzzle.upsert({
      where: { lichessId: puzzle.id },
      create: {
        lichessId: puzzle.id,
        fen: game.fen,
        solution: puzzle.solution,
        rating: puzzle.rating,
        themes: puzzle.themes,
      },
      update: {},
    });
  }

  // Refetch puzzles to maintain cache
  async refetchPuzzles(rating: number, count: number = 20): Promise<void> {
    console.log(`Refetching ${count} puzzles for rating ${rating}`);
    
    for (let i = 0; i < count; i++) {
      const lichessPuzzle = await this.fetchFromLichess(rating);
      if (lichessPuzzle) {
        await this.cachePuzzle(lichessPuzzle);
      }
      // Rate limit to avoid hitting Lichess API limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // Record a puzzle attempt
  async recordAttempt(
    userId: string,
    puzzleId: string,
    correct: boolean,
    hintsUsed: number,
    timeMs: number
  ) {
    const puzzle = await prisma.cachedPuzzle.findUnique({
      where: { id: puzzleId },
    });

    return await prisma.puzzleAttempt.create({
      data: {
        userId,
        puzzleId,
        correct,
        hintsUsed,
        timeMs,
        rating: puzzle?.rating || 0,
        theme: puzzle?.themes?.[0] || 'unknown',
      },
    });
  }
}

export const puzzleService = new PuzzleService();
