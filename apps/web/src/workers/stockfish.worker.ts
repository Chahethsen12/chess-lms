/// <reference lib="webworker" />

// Stockfish WASM Web Worker
// Handles chess engine evaluation in a separate thread

let stockfish: Worker | null = null;
let isReady = false;
let pendingResolve: ((value: string) => void) | null = null;
let outputBuffer: string[] = [];

// Initialize Stockfish from CDN
async function initStockfish() {
  try {
    // Load stockfish.js from CDN
    const stockfishUrl = 'https://cdn.jsdelivr.net/npm/stockfish@16/src/stockfish-nnue-16.js';
    
    stockfish = new Worker(stockfishUrl);
    
    stockfish.onmessage = (e: MessageEvent) => {
      const line = e.data;
      outputBuffer.push(line);
      
      if (line === 'uciok') {
        isReady = true;
        self.postMessage({ type: 'ready' });
      }
      
      if (line.startsWith('bestmove')) {
        if (pendingResolve) {
          pendingResolve(outputBuffer.join('\n'));
          pendingResolve = null;
          outputBuffer = [];
        }
      }
      
      // Forward info lines for real-time updates
      if (line.startsWith('info depth')) {
        self.postMessage({ type: 'info', data: parseInfoLine(line) });
      }
    };

    stockfish.onerror = (e) => {
      self.postMessage({ type: 'error', data: e.message });
    };

    // Initialize UCI protocol
    stockfish.postMessage('uci');
  } catch (error) {
    self.postMessage({ type: 'error', data: (error as Error).message });
  }
}

function parseInfoLine(line: string): EngineInfo {
  const info: EngineInfo = {
    depth: 0,
    score: 0,
    mate: undefined,
    pv: [],
  };

  const parts = line.split(' ');
  
  for (let i = 0; i < parts.length; i++) {
    switch (parts[i]) {
      case 'depth':
        info.depth = parseInt(parts[i + 1]);
        break;
      case 'score':
        if (parts[i + 1] === 'cp') {
          info.score = parseInt(parts[i + 2]);
        } else if (parts[i + 1] === 'mate') {
          info.mate = parseInt(parts[i + 2]);
          info.score = info.mate > 0 ? 10000 : -10000;
        }
        break;
      case 'pv':
        info.pv = parts.slice(i + 1);
        break;
    }
  }

  return info;
}

interface EngineInfo {
  depth: number;
  score: number;
  mate?: number;
  pv: string[];
}

interface EvaluateRequest {
  fen: string;
  depth: number;
}

interface SetSkillRequest {
  level: number; // 1-20
}

// Message handler
self.onmessage = async (e: MessageEvent) => {
  const { type, data } = e.data;

  switch (type) {
    case 'init':
      await initStockfish();
      break;

    case 'evaluate':
      if (!stockfish || !isReady) {
        self.postMessage({ type: 'error', data: 'Engine not ready' });
        return;
      }
      
      const evalReq = data as EvaluateRequest;
      outputBuffer = [];
      
      const promise = new Promise<string>((resolve) => {
        pendingResolve = resolve;
      });

      stockfish.postMessage('ucinewgame');
      stockfish.postMessage(`position fen ${evalReq.fen}`);
      stockfish.postMessage(`go depth ${evalReq.depth}`);
      
      const output = await promise;
      const bestMove = parseBestMove(output);
      const lastInfo = parseLastInfo(output);
      
      self.postMessage({
        type: 'evaluation',
        data: {
          bestMove,
          score: lastInfo.score,
          mate: lastInfo.mate,
          depth: lastInfo.depth,
          pv: lastInfo.pv,
        },
      });
      break;

    case 'setSkill':
      if (!stockfish || !isReady) {
        self.postMessage({ type: 'error', data: 'Engine not ready' });
        return;
      }
      
      const skillReq = data as SetSkillRequest;
      // Stockfish skill level (0-20)
      stockfish.postMessage(`setoption name Skill Level value ${skillReq.level}`);
      self.postMessage({ type: 'skillSet', data: skillReq.level });
      break;

    case 'stop':
      if (stockfish) {
        stockfish.postMessage('stop');
      }
      break;

    case 'quit':
      if (stockfish) {
        stockfish.postMessage('quit');
        stockfish.terminate();
        stockfish = null;
        isReady = false;
      }
      break;
  }
};

function parseBestMove(output: string): string {
  const lines = output.split('\n');
  for (const line of lines) {
    if (line.startsWith('bestmove')) {
      const parts = line.split(' ');
      return parts[1] || '';
    }
  }
  return '';
}

function parseLastInfo(output: string): EngineInfo {
  const lines = output.split('\n');
  let lastInfo: EngineInfo = { depth: 0, score: 0, pv: [] };
  
  for (const line of lines) {
    if (line.startsWith('info depth') && line.includes(' pv ')) {
      lastInfo = parseInfoLine(line);
    }
  }
  
  return lastInfo;
}

export {};
