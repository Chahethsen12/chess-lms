/**
 * Map ELO rating to Stockfish skill level (1-20)
 */
export function eloToSkillLevel(elo: number): number {
  // ELO 200-3200 maps to skill 1-20
  const clampedElo = Math.max(200, Math.min(3200, elo));
  return Math.max(1, Math.min(20, Math.round((clampedElo - 200) / 155)));
}

/**
 * Map Stockfish skill level to approximate ELO
 */
export function skillLevelToElo(level: number): number {
  // Skill 1-20 maps to ELO 200-3200
  const clampedLevel = Math.max(1, Math.min(20, level));
  return Math.round(200 + (clampedLevel * 155));
}

/**
 * Calculate new ELO after a game
 */
export function calculateNewElo(
  playerElo: number,
  opponentElo: number,
  result: 'win' | 'loss' | 'draw',
  kFactor: number = 32
): number {
  const expectedScore = 1 / (1 + Math.pow(10, (opponentElo - playerElo) / 400));
  
  let actualScore: number;
  switch (result) {
    case 'win': actualScore = 1; break;
    case 'loss': actualScore = 0; break;
    case 'draw': actualScore = 0.5; break;
  }
  
  return Math.round(playerElo + kFactor * (actualScore - expectedScore));
}

/**
 * Get level name from ELO rating
 */
export function getLevelName(elo: number): string {
  if (elo < 400) return 'Absolute Beginner';
  if (elo < 800) return 'Beginner';
  if (elo < 1200) return 'Intermediate';
  if (elo < 1600) return 'Club Player';
  if (elo < 1800) return 'Advanced Club';
  if (elo < 2000) return 'Expert';
  return 'Candidate Master';
}

/**
 * Get level number from ELO rating (1-7)
 */
export function getLevelNumber(elo: number): number {
  if (elo < 400) return 1;
  if (elo < 800) return 2;
  if (elo < 1200) return 3;
  if (elo < 1600) return 4;
  if (elo < 1800) return 5;
  if (elo < 2000) return 6;
  return 7;
}
