import { Router } from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { authenticate, AuthRequest } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { AppError } from '../middleware/error.js';

const router = Router();
const prisma = new PrismaClient();

// Common opening database (in production, this would be in a database or external API)
const OPENINGS_DB: Array<{
  eco: string;
  name: string;
  moves: string;
  fen: string;
  description: string;
  variations: Array<{ name: string; moves: string; fen: string }>;
}> = [
  {
    eco: 'B00',
    name: "King's Pawn Opening",
    moves: '1. e4',
    fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
    description: 'The most popular first move, controlling the center and opening lines for the queen and bishop.',
    variations: [
      { name: 'Sicilian Defense', moves: '1. e4 c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2' },
      { name: 'French Defense', moves: '1. e4 e6', fen: 'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2' },
      { name: 'Caro-Kann Defense', moves: '1. e4 c6', fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2' },
    ],
  },
  {
    eco: 'D00',
    name: "Queen's Pawn Opening",
    moves: '1. d4',
    fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1',
    description: 'A solid first move, controlling the center and preparing to develop pieces.',
    variations: [
      { name: "Queen's Gambit", moves: '1. d4 d5 2. c4', fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2' },
      { name: "King's Indian Defense", moves: '1. d4 Nf6 2. c4 g6', fen: 'rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3' },
      { name: 'Nimzo-Indian Defense', moves: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4', fen: 'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4' },
    ],
  },
  {
    eco: 'A00',
    name: 'English Opening',
    moves: '1. c4',
    fen: 'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq c3 0 1',
    description: 'A flexible opening that can transpose into many other systems.',
    variations: [
      { name: 'Symmetrical Variation', moves: '1. c4 c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq c6 0 2' },
      { name: 'Reversed Sicilian', moves: '1. c4 e5', fen: 'rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq e6 0 2' },
    ],
  },
  {
    eco: 'B20',
    name: 'Sicilian Defense',
    moves: '1. e4 c5',
    fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2',
    description: 'The most popular response to 1.e4, leading to asymmetrical positions with winning chances for both sides.',
    variations: [
      { name: 'Open Sicilian', moves: '1. e4 c5 2. Nf3 d6 3. d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3' },
      { name: 'Najdorf Variation', moves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6', fen: 'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6' },
      { name: 'Dragon Variation', moves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6', fen: 'rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6' },
    ],
  },
  {
    eco: 'C50',
    name: 'Italian Game',
    moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4',
    fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
    description: 'One of the oldest openings, focusing on rapid development and attacking the f7 square.',
    variations: [
      { name: 'Giuoco Piano', moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5', fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4' },
      { name: 'Two Knights Defense', moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6', fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4' },
    ],
  },
];

// GET /api/openings - List all openings with optional filters
router.get('/', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const { eco, search } = req.query;

    let openings = [...OPENINGS_DB];

    if (eco) {
      openings = openings.filter(o => o.eco.startsWith(eco as string));
    }

    if (search) {
      const searchLower = (search as string).toLowerCase();
      openings = openings.filter(o => 
        o.name.toLowerCase().includes(searchLower) ||
        o.eco.toLowerCase().includes(searchLower)
      );
    }

    res.json(openings.map(o => ({
      eco: o.eco,
      name: o.name,
      moves: o.moves,
      fen: o.fen,
      description: o.description,
      variationCount: o.variations.length,
    })));
  } catch (error) {
    next(error);
  }
});

// GET /api/openings/book - Get user's opening book entries
router.get('/book', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;

    const entries = await prisma.openingBookEntry.findMany({
      where: { userId },
      orderBy: { addedAt: 'desc' },
    });

    res.json(entries);
  } catch (error) {
    next(error);
  }
});

// GET /api/openings/:eco - Get opening by ECO code
router.get('/:eco', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const opening = OPENINGS_DB.find(o => o.eco === req.params.eco.toUpperCase());

    if (!opening) {
      throw new AppError('Opening not found', 404, 'OPENING_NOT_FOUND');
    }

    res.json(opening);
  } catch (error) {
    next(error);
  }
});

// GET /api/openings/:eco/variations - Get opening variations
router.get('/:eco/variations', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const opening = OPENINGS_DB.find(o => o.eco === req.params.eco.toUpperCase());

    if (!opening) {
      throw new AppError('Opening not found', 404, 'OPENING_NOT_FOUND');
    }

    res.json({
      eco: opening.eco,
      name: opening.name,
      variations: opening.variations,
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/openings/identify - Identify opening from moves
const identifySchema = z.object({
  moves: z.string().min(1), // PGN format moves
  fen: z.string().optional(),
});

router.post('/identify', authenticate, validate(identifySchema), async (req: AuthRequest, res, next) => {
  try {
    const { moves } = req.body;
    const movesLower = moves.toLowerCase().replace(/\s+/g, ' ').trim();

    // Try to match against known openings (simplified matching)
    let bestMatch = null;
    let bestMatchLength = 0;

    for (const opening of OPENINGS_DB) {
      const openingMoves = opening.moves.toLowerCase().replace(/\s+/g, ' ').trim();
      
      if (movesLower.startsWith(openingMoves) && openingMoves.length > bestMatchLength) {
        bestMatch = opening;
        bestMatchLength = openingMoves.length;
      }

      // Check variations
      for (const variation of opening.variations) {
        const varMoves = variation.moves.toLowerCase().replace(/\s+/g, ' ').trim();
        if (movesLower.startsWith(varMoves) && varMoves.length > bestMatchLength) {
          bestMatch = {
            ...opening,
            matchedVariation: variation,
          };
          bestMatchLength = varMoves.length;
        }
      }
    }

    if (!bestMatch) {
      res.json({
        identified: false,
        message: 'Opening not recognized in database',
      });
      return;
    }

    res.json({
      identified: true,
      opening: {
        eco: bestMatch.eco,
        name: bestMatch.name,
        description: bestMatch.description,
        variation: (bestMatch as { matchedVariation?: { name: string; moves: string; fen: string } }).matchedVariation || null,
      },
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/openings/book - Add opening to user's book
const addToBookSchema = z.object({
  eco: z.string().min(1).max(10),
  name: z.string().min(1).max(200),
  pgn: z.string().min(1),
  notes: z.string().optional(),
});

router.post('/book', authenticate, validate(addToBookSchema), async (req: AuthRequest, res, next) => {
  try {
    const { eco, name, pgn, notes } = req.body;
    const userId = req.user!.id;

    const entry = await prisma.openingBookEntry.create({
      data: {
        userId,
        eco,
        name,
        pgn,
        notes,
      },
    });

    res.status(201).json(entry);
  } catch (error) {
    next(error);
  }
});

// PUT /api/openings/book/:id - Update opening book entry
const updateBookSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  pgn: z.string().min(1).optional(),
  notes: z.string().optional(),
});

router.put('/book/:id', authenticate, validate(updateBookSchema), async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const { name, pgn, notes } = req.body;

    const entry = await prisma.openingBookEntry.findFirst({
      where: { id: req.params.id, userId },
    });

    if (!entry) {
      throw new AppError('Opening book entry not found', 404, 'ENTRY_NOT_FOUND');
    }

    const updated = await prisma.openingBookEntry.update({
      where: { id: entry.id },
      data: {
        ...(name && { name }),
        ...(pgn && { pgn }),
        ...(notes !== undefined && { notes }),
      },
    });

    res.json(updated);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/openings/book/:id - Remove from user's book
router.delete('/book/:id', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;

    const entry = await prisma.openingBookEntry.findFirst({
      where: { id: req.params.id, userId },
    });

    if (!entry) {
      throw new AppError('Opening book entry not found', 404, 'ENTRY_NOT_FOUND');
    }

    await prisma.openingBookEntry.delete({ where: { id: entry.id } });

    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

export default router;
