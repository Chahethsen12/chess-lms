export type AIProvider = 'gemini' | 'claude' | 'gpt4o' | 'grok' | 'local';

export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AIResponse {
  content: string;
  provider: AIProvider;
}

export interface AIContext {
  elo: number;
  currentModule?: string;
  recentGames?: string[];
  weakAreas?: string[];
  fen?: string;
}

export interface Conversation {
  id: string;
  userId: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant';
  content: string;
  provider?: AIProvider;
  fen?: string;
  createdAt: Date;
}
