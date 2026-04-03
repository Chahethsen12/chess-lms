// Setup script for Prisma database
// Run with: node apps/api/setup-db.js

import { execSync } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const apiDir = __dirname;

console.log('🔧 Setting up Prisma...\n');

try {
  console.log('📦 Running: npx prisma generate');
  execSync('npx prisma generate', {
    cwd: apiDir,
    stdio: 'inherit',
    env: { ...process.env }
  });
  
  console.log('\n✅ Prisma client generated successfully!');
  console.log('\nNext steps:');
  console.log('  1. Start PostgreSQL: docker compose up -d');
  console.log('  2. Run migrations:   pnpm db:migrate');
  console.log('  3. Seed database:    pnpm db:seed');
} catch (error) {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
}
