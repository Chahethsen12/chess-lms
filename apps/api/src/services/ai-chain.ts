import { AIMessage, AIContext, AIResponse, AIProvider } from './ai-providers/types.js';
import { callGemini } from './ai-providers/gemini.js';
import { callClaude } from './ai-providers/claude.js';
import { callOpenAI } from './ai-providers/openai.js';
import { callGrok } from './ai-providers/grok.js';
import { callLocal } from './ai-providers/local.js';

interface Provider {
  name: AIProvider;
  fn: (messages: AIMessage[], context: AIContext) => Promise<string>;
  requiresKey: string | null;
}

const providers: Provider[] = [
  { name: 'gemini', fn: callGemini, requiresKey: 'GEMINI_API_KEY' },
  { name: 'claude', fn: callClaude, requiresKey: 'ANTHROPIC_API_KEY' },
  { name: 'gpt4o', fn: callOpenAI, requiresKey: 'OPENAI_API_KEY' },
  { name: 'grok', fn: callGrok, requiresKey: 'XAI_API_KEY' },
  { name: 'local', fn: callLocal, requiresKey: null },
];

/**
 * Call the AI Coach with automatic fallback chain.
 * Tries providers in order: Gemini → Claude → GPT-4o → Grok → Local
 */
export async function callAICoach(
  messages: AIMessage[],
  context: AIContext
): Promise<AIResponse> {
  const errors: string[] = [];

  for (const provider of providers) {
    // Skip providers without configured API keys (except local)
    if (provider.requiresKey && !process.env[provider.requiresKey]) {
      console.log(`Skipping ${provider.name}: API key not configured`);
      continue;
    }

    try {
      console.log(`Trying provider: ${provider.name}`);
      const content = await provider.fn(messages, context);
      
      return {
        content,
        provider: provider.name,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.warn(`Provider ${provider.name} failed:`, errorMessage);
      errors.push(`${provider.name}: ${errorMessage}`);
      continue;
    }
  }

  // If all providers fail (including local, which shouldn't happen)
  throw new Error(`All AI providers failed. Errors: ${errors.join('; ')}`);
}

/**
 * Get list of available providers (those with configured API keys)
 */
export function getAvailableProviders(): AIProvider[] {
  return providers
    .filter(p => !p.requiresKey || process.env[p.requiresKey])
    .map(p => p.name);
}

export type { AIMessage, AIContext, AIResponse, AIProvider };
