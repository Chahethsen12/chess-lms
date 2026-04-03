import { useState, useCallback } from 'react';
import { Chess } from 'chess.js';
import { Button, Card, Input } from '../ui';
import { InteractiveBoard } from '../board';
import { Upload, Play, Pause, SkipBack, SkipForward, FastForward } from 'lucide-react';

interface PGNImportProps {
  onAnalyze?: (pgn: string) => void;
}

export function PGNImport({ onAnalyze }: PGNImportProps) {
  const [pgn, setPgn] = useState('');
  const [game, setGame] = useState<Chess | null>(null);
  const [moveIndex, setMoveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parsePGN = useCallback(() => {
    try {
      const chess = new Chess();
      chess.loadPgn(pgn);
      setGame(chess);
      setMoveIndex(0);
      setError(null);
    } catch (e) {
      setError('Invalid PGN format');
    }
  }, [pgn]);

  const history = game?.history({ verbose: true }) || [];
  
  const getCurrentFen = () => {
    if (!game || moveIndex === 0) return 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
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
      <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
        <Upload size={20} /> Import PGN
      </h3>
      
      {!game ? (
        <div className="space-y-4">
          <textarea
            value={pgn}
            onChange={(e) => setPgn(e.target.value)}
            placeholder="Paste your PGN here..."
            className="w-full h-40 bg-surface border border-white/10 rounded-lg p-3 text-sm font-mono resize-none focus:outline-none focus:border-primary"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <div className="flex gap-2">
            <Button onClick={parsePGN} disabled={!pgn.trim()}>
              Load Game
            </Button>
            {onAnalyze && (
              <Button variant="outline" onClick={() => onAnalyze(pgn)} disabled={!pgn.trim()}>
                Analyze with AI
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <InteractiveBoard fen={getCurrentFen()} />
          
          <div className="flex items-center justify-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => goToMove(0)}>
              <SkipBack size={16} />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => goToMove(moveIndex - 1)}>
              <FastForward size={16} className="rotate-180" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => goToMove(moveIndex + 1)}>
              <FastForward size={16} />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => goToMove(history.length)}>
              <SkipForward size={16} />
            </Button>
          </div>
          
          <div className="text-center text-sm text-gray-400">
            Move {moveIndex} / {history.length}
          </div>
          
          <Button variant="outline" className="w-full" onClick={() => setGame(null)}>
            Load Different PGN
          </Button>
        </div>
      )}
    </Card>
  );
}
