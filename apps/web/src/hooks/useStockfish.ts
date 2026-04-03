import { useState, useEffect, useCallback, useRef } from 'react';
import { getEngine, Evaluation, EngineInfo } from '@/lib/stockfish';

interface UseStockfishOptions {
  autoInit?: boolean;
  depth?: number;
}

interface UseStockfishReturn {
  isReady: boolean;
  isEvaluating: boolean;
  evaluation: Evaluation | null;
  currentInfo: EngineInfo | null;
  error: string | null;
  init: () => Promise<void>;
  evaluate: (fen: string, depth?: number) => Promise<Evaluation>;
  setSkillLevel: (level: number) => void;
  stop: () => void;
}

export function useStockfish(options: UseStockfishOptions = {}): UseStockfishReturn {
  const { autoInit = false, depth: defaultDepth = 15 } = options;
  
  const [isReady, setIsReady] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [currentInfo, setCurrentInfo] = useState<EngineInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const engineRef = useRef(getEngine());

  const init = useCallback(async () => {
    try {
      setError(null);
      const engine = engineRef.current;
      
      if (!engine.ready) {
        await engine.init();
      }
      
      setIsReady(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize engine');
      throw err;
    }
  }, []);

  const evaluate = useCallback(async (fen: string, depth?: number): Promise<Evaluation> => {
    const engine = engineRef.current;
    
    if (!engine.ready) {
      throw new Error('Engine not initialized');
    }

    setIsEvaluating(true);
    setError(null);
    
    try {
      const result = await engine.evaluate(fen, depth ?? defaultDepth);
      setEvaluation(result);
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Evaluation failed';
      setError(message);
      throw err;
    } finally {
      setIsEvaluating(false);
    }
  }, [defaultDepth]);

  const setSkillLevel = useCallback((level: number) => {
    const engine = engineRef.current;
    if (engine.ready) {
      engine.setSkillLevel(level);
    }
  }, []);

  const stop = useCallback(() => {
    const engine = engineRef.current;
    engine.stop();
    setIsEvaluating(false);
  }, []);

  // Handle info updates
  useEffect(() => {
    const engine = engineRef.current;
    
    const handleInfo = (info: unknown) => {
      setCurrentInfo(info as EngineInfo);
    };

    engine.on('info', handleInfo);
    
    return () => {
      engine.off('info', handleInfo);
    };
  }, []);

  // Auto-init if requested
  useEffect(() => {
    if (autoInit && !isReady) {
      init().catch(console.error);
    }
  }, [autoInit, isReady, init]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Don't quit the engine on unmount as it's a singleton
      // Just stop any ongoing evaluation
      const engine = engineRef.current;
      engine.stop();
    };
  }, []);

  return {
    isReady,
    isEvaluating,
    evaluation,
    currentInfo,
    error,
    init,
    evaluate,
    setSkillLevel,
    stop,
  };
}

export default useStockfish;
