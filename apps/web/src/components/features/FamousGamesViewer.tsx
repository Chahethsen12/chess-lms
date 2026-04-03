import { useState } from 'react';
import { Chess } from 'chess.js';
import { Button, Card, Select } from '../ui';
import { InteractiveBoard, MoveList } from '../board';
import { Crown, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { famousGames } from '../../data/famous-games';

interface FamousGamesViewerProps {
  onAnalyzeWithAI?: (pgn: string, position: string) => void;
}

export function FamousGamesViewer({ onAnalyzeWithAI }: FamousGamesViewerProps) {
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);
  const [moveIndex, setMoveIndex] = useState(0);

  const game = famousGames[selectedGameIndex];
  const chess = new Chess();
  
  try {
    chess.loadPgn(game.pgn);
  } catch (e) {
    console.error('Failed to load PGN:', e);
  }

  const history = chess.history({ verbose: true });
  
  const getCurrentFen = () => {
    if (moveIndex === 0) return 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    const tempGame = new Chess();
    for (let i = 0; i < moveIndex; i++) {
      tempGame.move(history[i]);
    }
    return tempGame.fen();
  };

  const goToMove = (index: number) => {
    setMoveIndex(Math.max(0, Math.min(index, history.length)));
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-display font-bold flex items-center gap-2">
          <Crown size={20} className="text-gold" /> Famous Games
        </h3>
      </div>

      <div className="space-y-4">
        <Select
          value={selectedGameIndex.toString()}
          onChange={(value) => {
            setSelectedGameIndex(parseInt(value));
            setMoveIndex(0);
          }}
          options={famousGames.map((g, i) => ({
            value: i.toString(),
            label: `${g.white} vs ${g.black} (${g.year})`
          }))}
        />

        <div className="bg-surface/50 rounded-lg p-3">
          <h4 className="font-bold text-primary">{game.title}</h4>
          <p className="text-sm text-gray-400 mt-1">
            {game.white} vs {game.black}, {game.event} ({game.year})
          </p>
          <p className="text-sm mt-2">{game.description}</p>
        </div>

        <InteractiveBoard fen={getCurrentFen()} />

        <div className="flex items-center justify-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => goToMove(0)}>
            ⏮
          </Button>
          <Button variant="ghost" size="sm" onClick={() => goToMove(moveIndex - 1)}>
            <ChevronLeft size={16} />
          </Button>
          <span className="text-sm text-gray-400 min-w-[80px] text-center">
            {moveIndex} / {history.length}
          </span>
          <Button variant="ghost" size="sm" onClick={() => goToMove(moveIndex + 1)}>
            <ChevronRight size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => goToMove(history.length)}>
            ⏭
          </Button>
        </div>

        <MoveList 
          moves={history.map((m, i) => ({ 
            san: m.san, 
            fen: '', 
            annotation: game.annotations?.[i] 
          }))}
          currentMoveIndex={moveIndex - 1}
          onMoveClick={(i) => goToMove(i + 1)}
        />

        {onAnalyzeWithAI && (
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => onAnalyzeWithAI(game.pgn, getCurrentFen())}
          >
            <MessageCircle size={16} className="mr-2" />
            Analyze Position with AI Coach
          </Button>
        )}
      </div>
    </Card>
  );
}
