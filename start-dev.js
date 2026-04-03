// Start development servers
// Run with: node start-dev.js

import { spawn } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('🚀 Starting Chess LMS development servers...\n');

const isWindows = process.platform === 'win32';
const cmd = isWindows ? 'pnpm.cmd' : 'pnpm';

// Start web dev server (Vite - port 3000)
const web = spawn(cmd, ['--filter', 'web', 'dev'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, FORCE_COLOR: '1' }
});

// Start api dev server (Express - port 3001)
const api = spawn(cmd, ['--filter', 'api', 'dev'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, FORCE_COLOR: '1' }
});

// Handle process exit
const cleanup = () => {
  web.kill();
  api.kill();
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

web.on('error', (err) => console.error('Web error:', err));
api.on('error', (err) => console.error('API error:', err));

console.log('📱 Frontend: http://localhost:3000');
console.log('🔧 Backend:  http://localhost:3001');
console.log('\nPress Ctrl+C to stop.\n');
