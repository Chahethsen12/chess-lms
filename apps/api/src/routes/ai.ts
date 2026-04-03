import { Router } from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { authenticate, AuthRequest } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { AppError } from '../middleware/error.js';

const router = Router();
const prisma = new PrismaClient();

// Supported AI providers
const AI_PROVIDERS = ['gemini', 'claude', 'gpt4o', 'grok'] as const;
type AIProvider = typeof AI_PROVIDERS[number];

// Helper to call AI APIs (placeholder - would integrate with actual APIs)
async function callAI(provider: AIProvider, prompt: string, _context?: string): Promise<string> {
  // In production, this would call the actual AI APIs
  // For now, return a placeholder that indicates which provider would be used
  const providerNames: Record<AIProvider, string> = {
    gemini: 'Google Gemini',
    claude: 'Anthropic Claude',
    gpt4o: 'OpenAI GPT-4o',
    grok: 'xAI Grok',
  };
  
  // This is where you'd integrate with actual AI providers
  // Example structure for each provider:
  // if (provider === 'gemini') { ... call Gemini API ... }
  // if (provider === 'claude') { ... call Claude API ... }
  
  return `[${providerNames[provider]} response would go here for prompt: "${prompt.substring(0, 50)}..."]`;
}

// POST /api/ai/chat - Main chat endpoint
const chatSchema = z.object({
  message: z.string().min(1).max(4000),
  conversationId: z.string().optional(),
  provider: z.enum(AI_PROVIDERS).default('gemini'),
  fen: z.string().optional(), // Current board position
});

router.post('/chat', authenticate, validate(chatSchema), async (req: AuthRequest, res, next) => {
  try {
    const { message, conversationId, provider, fen } = req.body;
    const userId = req.user!.id;

    // Get or create conversation
    let conversation;
    if (conversationId) {
      conversation = await prisma.conversation.findFirst({
        where: { id: conversationId, userId },
        include: { messages: { orderBy: { createdAt: 'asc' }, take: 20 } },
      });
      if (!conversation) {
        throw new AppError('Conversation not found', 404, 'CONVERSATION_NOT_FOUND');
      }
    } else {
      // Create new conversation
      const title = message.length > 50 ? message.substring(0, 47) + '...' : message;
      conversation = await prisma.conversation.create({
        data: { userId, title },
        include: { messages: true },
      });
    }

    // Build context from previous messages
    const context = conversation.messages
      .map(m => `${m.role}: ${m.content}`)
      .join('\n');

    // Save user message
    await prisma.message.create({
      data: {
        conversationId: conversation.id,
        role: 'user',
        content: message,
        fen,
      },
    });

    // Build chess-specific prompt
    const chessContext = fen 
      ? `Current board position (FEN): ${fen}\n\n` 
      : '';
    const fullPrompt = `${chessContext}${message}`;

    // Call AI
    const response = await callAI(provider, fullPrompt, context);

    // Save assistant message
    const assistantMessage = await prisma.message.create({
      data: {
        conversationId: conversation.id,
        role: 'assistant',
        content: response,
        provider,
        fen,
      },
    });

    // Update conversation timestamp
    await prisma.conversation.update({
      where: { id: conversation.id },
      data: { updatedAt: new Date() },
    });

    res.json({
      conversationId: conversation.id,
      message: assistantMessage,
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/ai/conversations - List user's conversations
router.get('/conversations', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const limit = parseInt(req.query.limit as string) || 20;
    const offset = parseInt(req.query.offset as string) || 0;

    const [conversations, total] = await Promise.all([
      prisma.conversation.findMany({
        where: { userId },
        orderBy: { updatedAt: 'desc' },
        take: limit,
        skip: offset,
        include: {
          messages: {
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
        },
      }),
      prisma.conversation.count({ where: { userId } }),
    ]);

    res.json({
      conversations: conversations.map(c => ({
        id: c.id,
        title: c.title,
        lastMessage: c.messages[0] || null,
        updatedAt: c.updatedAt,
      })),
      total,
      limit,
      offset,
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/ai/conversations/:id - Get conversation with messages
router.get('/conversations/:id', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;

    const conversation = await prisma.conversation.findFirst({
      where: { id: req.params.id, userId },
      include: {
        messages: { orderBy: { createdAt: 'asc' } },
      },
    });

    if (!conversation) {
      throw new AppError('Conversation not found', 404, 'CONVERSATION_NOT_FOUND');
    }

    res.json(conversation);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/ai/conversations/:id - Delete conversation
router.delete('/conversations/:id', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;

    const conversation = await prisma.conversation.findFirst({
      where: { id: req.params.id, userId },
    });

    if (!conversation) {
      throw new AppError('Conversation not found', 404, 'CONVERSATION_NOT_FOUND');
    }

    await prisma.conversation.delete({ where: { id: conversation.id } });

    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

// POST /api/ai/analyze-position - Analyze a chess position
const analyzePositionSchema = z.object({
  fen: z.string().min(1),
  provider: z.enum(AI_PROVIDERS).default('gemini'),
  depth: z.enum(['quick', 'detailed']).default('quick'),
});

router.post('/analyze-position', authenticate, validate(analyzePositionSchema), async (req: AuthRequest, res, next) => {
  try {
    const { fen, provider, depth } = req.body;

    const prompt = depth === 'detailed'
      ? `Analyze this chess position in detail. Provide: 1) Assessment of who is better and why, 2) Key tactical and strategic elements, 3) Best moves for both sides, 4) Common plans and ideas. Position (FEN): ${fen}`
      : `Briefly analyze this chess position. Who is better and what are the key features? Position (FEN): ${fen}`;

    const analysis = await callAI(provider, prompt);

    res.json({
      fen,
      analysis,
      provider,
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/ai/explain-move - Explain a chess move
const explainMoveSchema = z.object({
  fen: z.string().min(1),
  move: z.string().min(2),
  provider: z.enum(AI_PROVIDERS).default('gemini'),
});

router.post('/explain-move', authenticate, validate(explainMoveSchema), async (req: AuthRequest, res, next) => {
  try {
    const { fen, move, provider } = req.body;

    const prompt = `Explain the chess move ${move} in this position. Why is it good or bad? What does it accomplish? What are the alternatives? Position (FEN): ${fen}`;

    const explanation = await callAI(provider, prompt);

    res.json({
      fen,
      move,
      explanation,
      provider,
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/ai/suggest-study - Get personalized study suggestions
router.post('/suggest-study', authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user!.id;
    const provider = (req.body.provider as AIProvider) || 'gemini';

    // Gather user stats
    const [user, puzzleStats, gameStats, lessonStats] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.puzzleAttempt.groupBy({
        by: ['theme'],
        where: { userId },
        _count: true,
        _avg: { rating: true },
      }),
      prisma.game.groupBy({
        by: ['result', 'color'],
        where: { userId },
        _count: true,
      }),
      prisma.lessonProgress.findMany({
        where: { userId },
        include: { module: true },
      }),
    ]);

    // Calculate weak areas
    const puzzleThemeAccuracy = await Promise.all(
      puzzleStats.map(async (theme) => {
        const correct = await prisma.puzzleAttempt.count({
          where: { userId, theme: theme.theme, correct: true },
        });
        return {
          theme: theme.theme,
          total: theme._count,
          accuracy: Math.round((correct / theme._count) * 100),
        };
      })
    );

    const weakThemes = puzzleThemeAccuracy
      .filter(t => t.total >= 3 && t.accuracy < 60)
      .sort((a, b) => a.accuracy - b.accuracy);

    // Build context for AI
    const context = `
User stats:
- ELO Rating: ${user?.eloRating || 800}
- Level: ${user?.currentLevel || 1}
- Total XP: ${user?.totalXp || 0}
- Streak: ${user?.streak || 0} days

Puzzle performance by theme:
${puzzleThemeAccuracy.map(t => `- ${t.theme}: ${t.accuracy}% accuracy (${t.total} puzzles)`).join('\n')}

Completed lessons: ${lessonStats.filter(l => l.completed).length}

Games played: ${gameStats.reduce((sum, g) => sum + g._count, 0)}
`;

    const prompt = `Based on this chess learner's stats, suggest a personalized study plan. Focus on their weak areas and provide specific, actionable recommendations. Be encouraging but honest.\n\n${context}`;

    const suggestions = await callAI(provider, prompt);

    res.json({
      suggestions,
      weakAreas: weakThemes.slice(0, 5),
      currentLevel: user?.currentLevel || 1,
      eloRating: user?.eloRating || 800,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
