/**
 * Stockfish Engine Interface
 * Provides a clean API for interacting with the Stockfish Web Worker
 */

export interface Evaluation {
  score: number; // In centipawns
  mate?: number; // Moves to mate (positive = white wins, negative = black wins)
  bestMove: string;
  pv: string[]; // Principal variation
  depth: number;
}

export interface EngineInfo {
  depth: number;
  score: number;
  mate?: number;
  pv: string[];
}

type MessageHandler = (data: unknown) => void;

class StockfishEngine {
  private worker: Worker | null = null;
  private isReady = false;
  private messageHandlers: Map<string, MessageHandler[]> = new Map();
  private evalResolve: ((eval_: Evaluation) => void) | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.worker = new Worker(
          new URL('../workers/stockfish.worker.ts', import.meta.url),
          { type: 'module' }
        );

        this.worker.onmessage = (e) => {
          const { type, data } = e.data;
          
          switch (type) {
            case 'ready':
              this.isReady = true;
              resolve();
              break;
            case 'error':
              reject(new Error(data));
              break;
            case 'evaluation':
              if (this.evalResolve) {
                this.evalResolve(data as Evaluation);
                this.evalResolve = null;
              }
              break;
            case 'info':
              this.emit('info', data);
              break;
          }
        };

        this.worker.onerror = (e) => {
          reject(new Error(e.message));
        };

        this.worker.postMessage({ type: 'init' });
      } catch (error) {
        reject(error);
      }
    });
  }

  async evaluate(fen: string, depth: number = 15): Promise<Evaluation> {
    if (!this.worker || !this.isReady) {
      throw new Error('Engine not initialized');
    }

    return new Promise((resolve) => {
      this.evalResolve = resolve;
      this.worker!.postMessage({
        type: 'evaluate',
        data: { fen, depth },
      });
    });
  }

  setSkillLevel(level: number): void {
    if (!this.worker || !this.isReady) {
      throw new Error('Engine not initialized');
    }

    const clampedLevel = Math.max(0, Math.min(20, level));
    this.worker.postMessage({
      type: 'setSkill',
      data: { level: clampedLevel },
    });
  }

  stop(): void {
    if (this.worker) {
      this.worker.postMessage({ type: 'stop' });
    }
  }

  quit(): void {
    if (this.worker) {
      this.worker.postMessage({ type: 'quit' });
      this.worker = null;
      this.isReady = false;
    }
  }

  on(event: string, handler: MessageHandler): void {
    if (!this.messageHandlers.has(event)) {
      this.messageHandlers.set(event, []);
    }
    this.messageHandlers.get(event)!.push(handler);
  }

  off(event: string, handler: MessageHandler): void {
    const handlers = this.messageHandlers.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }

  private emit(event: string, data: unknown): void {
    const handlers = this.messageHandlers.get(event);
    if (handlers) {
      handlers.forEach((handler) => handler(data));
    }
  }

  get ready(): boolean {
    return this.isReady;
  }
}

// Singleton instance
let engineInstance: StockfishEngine | null = null;

export function getEngine(): StockfishEngine {
  if (!engineInstance) {
    engineInstance = new StockfishEngine();
  }
  return engineInstance;
}

export async function initEngine(): Promise<StockfishEngine> {
  const engine = getEngine();
  if (!engine.ready) {
    await engine.init();
  }
  return engine;
}

/**
 * Map ELO rating to Stockfish skill level (0-20)
 * ELO 200-3200 → Skill 0-20
 */
export function eloToSkillLevel(elo: number): number {
  const clampedElo = Math.max(200, Math.min(3200, elo));
  return Math.round((clampedElo - 200) / 150);
}

/**
 * Map Stockfish skill level to approximate ELO
 */
export function skillLevelToElo(level: number): number {
  const clampedLevel = Math.max(0, Math.min(20, level));
  return 200 + clampedLevel * 150;
}

export default StockfishEngine;
