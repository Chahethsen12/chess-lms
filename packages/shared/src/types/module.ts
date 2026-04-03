export interface Module {
  id: string;
  level: number;
  title: string;
  description: string;
  content: ModuleContent;
  order: number;
  xpReward: number;
  prerequisites: string[];
}

export interface ModuleContent {
  sections: ContentSection[];
  keyConceptBoards: KeyConceptBoard[];
  quizQuestions: QuizQuestion[];
}

export interface ContentSection {
  title: string;
  content: string; // Markdown
  fen?: string; // Optional board position
  arrows?: Array<{ from: string; to: string }>;
}

export interface KeyConceptBoard {
  title: string;
  fen: string;
  description: string;
  arrows?: Array<{ from: string; to: string }>;
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

export interface LessonProgress {
  id: string;
  userId: string;
  moduleId: string;
  completed: boolean;
  quizScore: number | null;
  completedAt: Date | null;
  timeSpent: number;
}

export type LessonStatus = 'locked' | 'available' | 'in_progress' | 'completed';
