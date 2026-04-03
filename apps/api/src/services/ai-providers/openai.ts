import OpenAI from 'openai';
import { AIMessage, AIContext } from './types.js';
import { buildSystemPrompt } from './system-prompt.js';

export async function callOpenAI(messages: AIMessage[], context: AIContext): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY not configured');
  }

  const openai = new OpenAI({ apiKey });
  const systemPrompt = buildSystemPrompt(context);

  // Build messages array with system prompt
  const openaiMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: systemPrompt },
    ...messages.map(msg => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    })),
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: openaiMessages,
    temperature: 0.7,
    max_tokens: 2048,
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error('No response from OpenAI');
  }

  return content;
}
