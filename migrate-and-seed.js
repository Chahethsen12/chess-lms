// Run Prisma migrations and seed database
// Run with: node migrate-and-seed.js
// Requires: PostgreSQL running (docker compose up -d)

import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const apiDir = join(__dirname, 'apps', 'api');

console.log('🗄️  Running database migrations and seeding...\n');

try {
  // Step 1: Run migrations
  console.log('📦 Running: npx prisma migrate dev --name init\n');
  execSync('npx prisma migrate dev --name init', {
    cwd: apiDir,
    stdio: 'inherit',
    env: { ...process.env }
  });
  
  console.log('\n✅ Migrations complete!\n');
  
  // Step 2: Seed database
  console.log('🌱 Running: npx prisma db seed\n');
  execSync('npx prisma db seed', {
    cwd: apiDir,
    stdio: 'inherit',
    env: { ...process.env }
  });
  
  console.log('\n✅ Database seeded successfully!');
  console.log('\n🎉 Database is ready! You can now run: node start-dev.js');
  
} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.error('\nMake sure PostgreSQL is running: docker compose up -d');
  process.exit(1);
}
