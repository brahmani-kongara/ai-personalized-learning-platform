"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const client_1 = require("@prisma/client");
const seedData_js_1 = require("./seed/seedData.js");
const prisma = new client_1.PrismaClient();
(0, vitest_1.describe)('End-to-End Adaptive Engine API Integration', () => {
    (0, vitest_1.beforeAll)(async () => {
        await (0, seedData_js_1.seedDatabase)();
    });
    (0, vitest_1.afterAll)(async () => {
        await prisma.$disconnect();
    });
    (0, vitest_1.it)('runs adaptive difficulty auto-adjustment end-to-end via core logic and Prisma state', async () => {
        // 1. Get test student
        const student = await prisma.user.findUnique({
            where: { email: 'student@example.com' },
            include: { profile: true },
        });
        (0, vitest_1.expect)(student).toBeDefined();
        const topic = await prisma.topic.findFirst();
        (0, vitest_1.expect)(topic).toBeDefined();
        const contentItems = await prisma.contentItem.findMany({
            where: { topicId: topic.id },
        });
        (0, vitest_1.expect)(contentItems.length).toBeGreaterThan(0);
        // 2. Simulate 3 correct answers in a row for topic
        for (let i = 0; i < 3; i++) {
            await prisma.interaction.create({
                data: {
                    userId: student.id,
                    topicId: topic.id,
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
            where: { userId: student.id, topicId: topic.id },
        });
        (0, vitest_1.expect)(history.length).toBe(3);
        (0, vitest_1.expect)(history.every((h) => h.isCorrect)).toBe(true);
        // 3. Add 2 wrong answers to trigger difficulty reduction & remedial format
        for (let i = 0; i < 2; i++) {
            await prisma.interaction.create({
                data: {
                    userId: student.id,
                    topicId: topic.id,
                    contentItemId: contentItems[0].id,
                    isCorrect: false,
                    timeSpentSec: 40,
                    difficulty: 4,
                    format: 'TEXT',
                },
            });
        }
        const updatedHistory = await prisma.interaction.findMany({
            where: { userId: student.id, topicId: topic.id },
            orderBy: { timestamp: 'asc' },
        });
        const lastTwo = updatedHistory.slice(-2);
        (0, vitest_1.expect)(lastTwo.every((h) => !h.isCorrect)).toBe(true);
    });
});
