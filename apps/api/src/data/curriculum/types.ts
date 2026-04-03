export interface Module {
  id: string;
  level: number;
  title: string;
  description: string;
  order: number;
  xpReward: number;
  prerequisites: string[];
  content: ModuleContent;
}

export interface ModuleContent {
  overview: string;
  sections: ContentSection[];
  keyConceptBoards: KeyConceptBoard[];
  quizQuestions: QuizQuestion[];
}

export interface ContentSection {
  title: string;
  content: string; // Markdown content
  fen?: string;
  arrows?: Array<{ from: string; to: string; color?: string }>;
  highlights?: Array<{ square: string; color: string }>;
}

export interface KeyConceptBoard {
  title: string;
  fen: string;
  description: string;
  arrows?: Array<{ from: string; to: string; color?: string }>;
  highlights?: Array<{ square: string; color: string }>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple_choice' | 'board_select' | 'move_input';
  options?: string[];
  correctAnswer: string;
  explanation: string;
  fen?: string;
}

export interface Level {
  level: number;
  name: string;
  description: string;
  eloRange: { min: number; max: number };
  modules: Module[];
}
