import { Level, Module } from './types.js';
import { level1Modules } from './level1.js';
import { level2Modules } from './level2.js';
import { level3Modules } from './level3.js';
import { level4Modules } from './level4.js';
import { level5Modules } from './level5.js';
import { level6Modules } from './level6.js';
import { level7Modules } from './level7.js';

export const levels: Level[] = [
  {
    level: 1,
    name: 'Absolute Beginner',
    description: 'Learn the fundamentals of chess from the ground up.',
    eloRange: { min: 0, max: 400 },
    modules: level1Modules,
  },
  {
    level: 2,
    name: 'Beginner',
    description: 'Build on the basics with essential tactics and opening principles.',
    eloRange: { min: 400, max: 800 },
    modules: level2Modules,
  },
  {
    level: 3,
    name: 'Intermediate',
    description: 'Develop your tactical vision and strategic understanding.',
    eloRange: { min: 800, max: 1200 },
    modules: level3Modules,
  },
  {
    level: 4,
    name: 'Club Player',
    description: 'Master advanced tactics and positional concepts.',
    eloRange: { min: 1200, max: 1600 },
    modules: level4Modules,
  },
  {
    level: 5,
    name: 'Advanced Club',
    description: 'Refine your technique and develop a complete repertoire.',
    eloRange: { min: 1600, max: 1900 },
    modules: level5Modules,
  },
  {
    level: 6,
    name: 'Expert',
    description: 'Deep opening theory, complex endgames, and advanced strategy.',
    eloRange: { min: 1900, max: 2100 },
    modules: level6Modules,
  },
  {
    level: 7,
    name: 'Candidate Master / Legend',
    description: 'Master-level preparation, psychology, and championship mentality.',
    eloRange: { min: 2100, max: 2400 },
    modules: level7Modules,
  },
];

export const allModules: Module[] = levels.flatMap(level => level.modules);

export function getAllModules(): Module[] {
  return levels.flatMap(level => level.modules);
}

export function getModuleById(id: string): Module | undefined {
  return getAllModules().find(m => m.id === id);
}

export function getModulesByLevel(levelNumber: number): Module[] {
  const level = levels.find(l => l.level === levelNumber);
  return level?.modules ?? [];
}

export function getLevelByNumber(levelNumber: number): Level | undefined {
  return levels.find(l => l.level === levelNumber);
}

export { Level, Module } from './types.js';
