// Install dependencies script
// Run with: node install.js

import { execSync } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('📦 Installing dependencies with pnpm...\n');

try {
  execSync('pnpm install', {
    cwd: __dirname,
    stdio: 'inherit',
    env: { ...process.env }
  });
  
  console.log('\n✅ Dependencies installed successfully!');
} catch (error) {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
}
