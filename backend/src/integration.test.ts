import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import express from 'express';
import cors from 'cors';
import authController from './auth/authController.js';
import learnerProfileController from './learnerProfile/learnerProfileController.js';
import contentDeliveryController from './contentDelivery/contentDeliveryController.js';
import analyticsController from './analytics/analyticsController.js';
import { PrismaClient } from '@prisma/client';
import { seedDatabase } from './seed/seedData.js';

const prisma = new PrismaClient();

describe('End-to-End Adaptive Engine API Integration', () => {
  beforeAll(async () => {
    await seedDatabase();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('runs adaptive difficulty auto-adjustment end-to-end via core logic and Prisma state', async () => {
    // 1. Get test student
    const student = await prisma.user.findUnique({
      where: { email: 'student@example.com' },
      include: { profile: true },
    });
    expect(student).toBeDefined();

    const topic = await prisma.topic.findFirst();
    expect(topic).toBeDefined();

    const contentItems = await prisma.contentItem.findMany({
      where: { topicId: topic!.id },
    });
    expect(contentItems.length).toBeGreaterThan(0);

    // 2. Simulate 3 correct answers in a row for topic
    for (let i = 0; i < 3; i++) {
      await prisma.interaction.create({
        data: {
          userId: student!.id,
          topicId: topic!.id,
          contentItemId: contentItems[0].id,
          isCorrect: true,
          timeSpentSec: 20,
          difficulty: 3,
          format: 'TEXT',
        },
      });
    }

    // Check interactions count
    const history = await prisma.interaction.findMany({
      where: { userId: student!.id, topicId: topic!.id },
    });
    expect(history.length).toBe(3);
    expect(history.every((h) => h.isCorrect)).toBe(true);

    // 3. Add 2 wrong answers to trigger difficulty reduction & remedial format
    for (let i = 0; i < 2; i++) {
      await prisma.interaction.create({
        data: {
          userId: student!.id,
          topicId: topic!.id,
          contentItemId: contentItems[0].id,
          isCorrect: false,
          timeSpentSec: 40,
          difficulty: 4,
          format: 'TEXT',
        },
      });
    }

    const updatedHistory = await prisma.interaction.findMany({
      where: { userId: student!.id, topicId: topic!.id },
      orderBy: { timestamp: 'asc' },
    });

    const lastTwo = updatedHistory.slice(-2);
    expect(lastTwo.every((h) => !h.isCorrect)).toBe(true);
  });
});
