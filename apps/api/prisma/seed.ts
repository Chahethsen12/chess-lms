import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { badges } from '../src/data/badges.js';
import { allModules } from '../src/data/curriculum/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed badges
  console.log('Creating badges...');
  for (const badge of badges) {
    await prisma.badge.upsert({
      where: { id: badge.id },
      update: {},
      create: {
        id: badge.id,
        name: badge.name,
        description: badge.description,
        icon: badge.icon,
        condition: JSON.stringify(badge.condition),
      },
    });
  }
  console.log(`✅ Created ${badges.length} badges`);

  // Seed modules
  console.log('Creating modules...');
  for (const module of allModules) {
    await prisma.module.upsert({
      where: { id: module.id },
      update: {},
      create: {
        id: module.id,
        level: module.level,
        title: module.title,
        description: module.description,
        content: module as any,
        order: module.order,
        xpReward: module.xpReward,
        prerequisites: module.prerequisites,
      },
    });
  }
  console.log(`✅ Created ${allModules.length} modules`);

  // Create demo user
  console.log('Creating demo user...');
  const passwordHash = await bcrypt.hash('demo1234', 10);
  await prisma.user.upsert({
    where: { email: 'demo@chesslms.com' },
    update: {},
    create: {
      email: 'demo@chesslms.com',
      name: 'Demo Player',
      passwordHash,
      eloRating: 1200,
      currentLevel: 2,
      streak: 5,
      totalXp: 1500,
      lastStudied: new Date(),
    },
  });
  console.log('✅ Created demo user (demo@chesslms.com / demo1234)');

  // Give demo user some badges
  const demoUser = await prisma.user.findUnique({ where: { email: 'demo@chesslms.com' } });
  if (demoUser) {
    const starterBadges = ['first_move', 'first_checkmate', 'streak_3'];
    for (const badgeId of starterBadges) {
      await prisma.userBadge.upsert({
        where: { userId_badgeId: { userId: demoUser.id, badgeId } },
        update: {},
        create: { userId: demoUser.id, badgeId },
      });
    }
    console.log('✅ Assigned starter badges to demo user');
  }

  console.log('🎉 Seeding complete!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
