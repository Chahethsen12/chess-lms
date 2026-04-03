export type AIProvider = 'gemini' | 'claude' | 'gpt4o' | 'grok' | 'local';

export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AIContext {
  elo: number;
  currentModule?: string;
  recentGames?: string[];
  weakAreas?: string[];
  fen?: string;
}

export interface AIResponse {
  content: string;
  provider: AIProvider;
}

export interface ProviderConfig {
  name: AIProvider;
  apiKey?: string;
  fn: (messages: AIMessage[], context: AIContext) => Promise<string>;
}
