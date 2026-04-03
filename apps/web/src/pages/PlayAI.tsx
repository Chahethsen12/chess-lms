import { useState, useCallback, useEffect } from 'react';
import { Play, RotateCcw, Flag, Clock, Settings2 } from 'lucide-react';
import { Chess } from 'chess.js';
import { useAuthStore, useChessStore } from '../store';
import { InteractiveBoard } from '../components/board/InteractiveBoard';
import { EvalBar } from '../components/board/EvalBar';
import { MoveList } from '../components/board/MoveList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import { Modal } from '../components/ui/Modal';
import { useStockfish } from '../hooks/useStockfish';
import { api } from '../lib/api';

type GameState = 'setup' | 'playing' | 'ended';
type GameResult = 'win' | 'loss' | 'draw' | null;

const DIFFICULTY_OPTIONS = [
  { value: '400', label: 'Beginner (400)' },
  { value: '800', label: 'Casual (800)' },
  { value: '1200', label: 'Intermediate (1200)' },
  { value: '1600', label: 'Club (1600)' },
  { value: '2000', label: 'Expert (2000)' },
  { value: '2400', label: 'Master (2400)' },
  { value: 'adaptive', label: 'Adaptive (Match my ELO)' },
];

const TIME_CONTROLS = [
  { value: '0', label: 'No clock' },
  { value: '180', label: '3 minutes' },
  { value: '300', label: '5 minutes' },
  { value: '600', label: '10 minutes' },
  { value: '900', label: '15 minutes' },
];

export function PlayAI() {
  const { user } = useAuthStore();
  const { position, moves, setPosition, addMove, resetGame } = useChessStore();
  const { evaluate, isReady, getBestMove } = useStockfish();
  
  const [game] = useState(() => new Chess());
  const [gameState, setGameState] = useState<GameState>('setup');
  const [result, setResult] = useState<GameResult>(null);
  const [playerColor, setPlayerColor] = useState<'white' | 'black'>('white');
  const [difficulty, setDifficulty] = useState('adaptive');
  const [timeControl, setTimeControl] = useState('300');
  const [evaluation, setEvaluation] = useState(0);
  const [showSetup, setShowSetup] = useState(true);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1);

  // Get effective AI level
  const getAILevel = useCallback(() => {
    if (difficulty === 'adaptive') {
      return user?.eloRating || 800;
    }
    return parseInt(difficulty);
  }, [difficulty, user?.eloRating]);

  // Start game
  const startGame = useCallback(() => {
    game.reset();
    resetGame();
    setGameState('playing');
    setResult(null);
    setShowSetup(false);
    setCurrentMoveIndex(-1);
    
    // If player is black, make AI move first
    if (playerColor === 'black') {
      makeAIMove();
    }
  }, [game, resetGame, playerColor]);

  // Make AI move
  const makeAIMove = useCallback(async () => {
    if (!isReady || game.isGameOver()) return;

    const aiElo = getAILevel();
    const skillLevel = Math.round((aiElo - 200) / 155); // Map to 1-20
    
    const bestMove = await getBestMove(game.fen(), Math.max(1, Math.min(20, skillLevel)));
    
    if (bestMove) {
      game.move(bestMove);
      setPosition(game.fen());
      addMove({ san: bestMove, annotation: undefined });
      setCurrentMoveIndex(moves.length);

      // Check for game end
      if (game.isGameOver()) {
        handleGameEnd();
      }
    }
  }, [isReady, game, getAILevel, getBestMove, setPosition, addMove, moves.length]);

  // Handle player move
  const handleMove = useCallback(async (fen: string, move: { san: string }) => {
    if (gameState !== 'playing') return;
    
    setPosition(fen);
    addMove({ san: move.san, annotation: undefined });
    setCurrentMoveIndex(moves.length);

    // Check for game end
    if (game.isGameOver()) {
      handleGameEnd();
      return;
    }

    // AI responds
    setTimeout(makeAIMove, 500);
  }, [gameState, setPosition, addMove, moves.length, game, makeAIMove]);

  // Update evaluation
  useEffect(() => {
    if (gameState === 'playing' && isReady) {
      evaluate(game.fen()).then(setEvaluation);
    }
  }, [position, gameState, isReady, evaluate, game]);

  // Handle game end
  const handleGameEnd = useCallback(async () => {
    setGameState('ended');
    
    let gameResult: GameResult = 'draw';
    if (game.isCheckmate()) {
      const loserColor = game.turn();
      gameResult = loserColor === playerColor[0] ? 'loss' : 'win';
    }
    setResult(gameResult);

    // Save game
    try {
      await api.games.save({
        pgn: game.pgn(),
        fen: game.fen(),
        result: gameResult,
        color: playerColor,
        opponentType: 'ai',
        aiLevel: getAILevel(),
      });
    } catch (error) {
      console.error('Failed to save game:', error);
    }
  }, [game, playerColor, getAILevel]);

  // Resign
  const handleResign = () => {
    setResult('loss');
    setGameState('ended');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl font-bold">Play vs AI</h1>
          <p className="text-gray-400">Challenge Stockfish at your level</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Board */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <EvalBar score={evaluation} orientation={playerColor} height={480} />
                <InteractiveBoard
                  fen={position}
                  orientation={playerColor}
                  onMove={handleMove}
                  disabled={gameState !== 'playing' || game.turn() !== playerColor[0]}
                  boardWidth={480}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Game controls */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Game</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {gameState === 'setup' || gameState === 'ended' ? (
                <Button onClick={() => setShowSetup(true)} className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  {gameState === 'ended' ? 'New Game' : 'Start Game'}
                </Button>
              ) : (
                <>
                  <Button variant="danger" onClick={handleResign} className="w-full">
                    <Flag className="w-4 h-4 mr-2" />
                    Resign
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Move list */}
          <Card className="max-h-80">
            <CardHeader>
              <CardTitle className="text-lg">Moves</CardTitle>
            </CardHeader>
            <CardContent>
              <MoveList
                moves={moves}
                currentMoveIndex={currentMoveIndex}
                onMoveClick={setCurrentMoveIndex}
                className="max-h-48"
              />
            </CardContent>
          </Card>

          {/* Result */}
          {result && (
            <Card className={result === 'win' ? 'border-green-500' : result === 'loss' ? 'border-red-500' : ''}>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">
                  {result === 'win' && '🎉 You Won!'}
                  {result === 'loss' && '😔 You Lost'}
                  {result === 'draw' && '🤝 Draw'}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Setup modal */}
      <Modal isOpen={showSetup} onClose={() => gameState !== 'setup' && setShowSetup(false)} title="Game Setup">
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Play as</label>
            <div className="flex gap-2">
              <Button
                variant={playerColor === 'white' ? 'primary' : 'secondary'}
                onClick={() => setPlayerColor('white')}
                className="flex-1"
              >
                ♔ White
              </Button>
              <Button
                variant={playerColor === 'black' ? 'primary' : 'secondary'}
                onClick={() => setPlayerColor('black')}
                className="flex-1"
              >
                ♚ Black
              </Button>
            </div>
          </div>
          <Select
            label="Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            options={DIFFICULTY_OPTIONS}
          />
          <Select
            label="Time Control"
            value={timeControl}
            onChange={(e) => setTimeControl(e.target.value)}
            options={TIME_CONTROLS}
          />
          <Button onClick={startGame} className="w-full" disabled={!isReady}>
            <Play className="w-4 h-4 mr-2" />
            Start Game
          </Button>
        </div>
      </Modal>
    </div>
  );
}
