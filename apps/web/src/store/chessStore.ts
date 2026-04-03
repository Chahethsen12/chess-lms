import { create } from 'zustand';
import { Chess, Move } from 'chess.js';

interface ChessState {
  game: Chess;
  fen: string;
  history: Move[];
  currentMoveIndex: number;
  orientation: 'white' | 'black';
  isGameOver: boolean;
  result: 'white' | 'black' | 'draw' | null;
  
  // Board customization
  arrows: Array<{ from: string; to: string; color?: string }>;
  highlights: Record<string, string>;
  
  // Actions
  newGame: (fen?: string) => void;
  makeMove: (move: { from: string; to: string; promotion?: string }) => Move | null;
  undoMove: () => void;
  goToMove: (index: number) => void;
  goToStart: () => void;
  goToEnd: () => void;
  loadPgn: (pgn: string) => boolean;
  setOrientation: (orientation: 'white' | 'black') => void;
  flipBoard: () => void;
  setArrows: (arrows: Array<{ from: string; to: string; color?: string }>) => void;
  addArrow: (from: string, to: string, color?: string) => void;
  clearArrows: () => void;
  setHighlights: (highlights: Record<string, string>) => void;
  addHighlight: (square: string, color: string) => void;
  clearHighlights: () => void;
  reset: () => void;
}

export const useChessStore = create<ChessState>((set, get) => ({
  game: new Chess(),
  fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  history: [],
  currentMoveIndex: -1,
  orientation: 'white',
  isGameOver: false,
  result: null,
  arrows: [],
  highlights: {},

  newGame: (fen) => {
    const game = new Chess(fen);
    set({
      game,
      fen: game.fen(),
      history: [],
      currentMoveIndex: -1,
      isGameOver: false,
      result: null,
      arrows: [],
      highlights: {},
    });
  },

  makeMove: (move) => {
    const { game } = get();
    try {
      const result = game.move(move);
      if (result) {
        const history = game.history({ verbose: true });
        const isGameOver = game.isGameOver();
        let gameResult: 'white' | 'black' | 'draw' | null = null;
        
        if (isGameOver) {
          if (game.isCheckmate()) {
            gameResult = game.turn() === 'w' ? 'black' : 'white';
          } else {
            gameResult = 'draw';
          }
        }
        
        set({
          fen: game.fen(),
          history,
          currentMoveIndex: history.length - 1,
          isGameOver,
          result: gameResult,
          arrows: [],
          highlights: {},
        });
        return result;
      }
      return null;
    } catch {
      return null;
    }
  },

  undoMove: () => {
    const { game, history, currentMoveIndex } = get();
    if (currentMoveIndex >= 0) {
      game.undo();
      set({
        fen: game.fen(),
        currentMoveIndex: currentMoveIndex - 1,
        isGameOver: false,
        result: null,
      });
    }
  },

  goToMove: (index) => {
    const { history } = get();
    if (index < -1 || index >= history.length) return;
    
    const game = new Chess();
    for (let i = 0; i <= index; i++) {
      game.move(history[i]);
    }
    
    set({
      game,
      fen: game.fen(),
      currentMoveIndex: index,
      isGameOver: index === history.length - 1 && game.isGameOver(),
    });
  },

  goToStart: () => get().goToMove(-1),
  
  goToEnd: () => {
    const { history } = get();
    get().goToMove(history.length - 1);
  },

  loadPgn: (pgn) => {
    const game = new Chess();
    try {
      game.loadPgn(pgn);
      const history = game.history({ verbose: true });
      set({
        game,
        fen: game.fen(),
        history,
        currentMoveIndex: history.length - 1,
        isGameOver: game.isGameOver(),
        arrows: [],
        highlights: {},
      });
      return true;
    } catch {
      return false;
    }
  },

  setOrientation: (orientation) => set({ orientation }),
  
  flipBoard: () => set((state) => ({
    orientation: state.orientation === 'white' ? 'black' : 'white',
  })),

  setArrows: (arrows) => set({ arrows }),
  
  addArrow: (from, to, color = 'rgba(79, 152, 163, 0.8)') => {
    set((state) => ({
      arrows: [...state.arrows, { from, to, color }],
    }));
  },
  
  clearArrows: () => set({ arrows: [] }),

  setHighlights: (highlights) => set({ highlights }),
  
  addHighlight: (square, color) => {
    set((state) => ({
      highlights: { ...state.highlights, [square]: color },
    }));
  },
  
  clearHighlights: () => set({ highlights: {} }),

  reset: () => {
    set({
      game: new Chess(),
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      history: [],
      currentMoveIndex: -1,
      orientation: 'white',
      isGameOver: false,
      result: null,
      arrows: [],
      highlights: {},
    });
  },
}));
