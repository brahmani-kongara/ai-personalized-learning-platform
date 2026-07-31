"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const adaptiveEngine_js_1 = require("../services/adaptiveEngine/adaptiveEngine.js");
const pathGenerator_js_1 = require("../services/adaptiveEngine/pathGenerator.js");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_2026';
function authenticateUser(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid token.' });
    }
}
// 1. List Subjects
router.get('/subjects', async (req, res) => {
    try {
        const subjects = await prisma.subject.findMany({
            include: {
                topics: {
                    select: { id: true, name: true, orderIndex: true },
                    orderBy: { orderIndex: 'asc' },
                },
            },
        });
        return res.json(subjects);
    }
    catch (err) {
        return res.status(500).json({ error: 'Failed to fetch subjects.' });
    }
});
// 2. Generate Learning Path for Subject
router.get('/path/:subjectId', authenticateUser, async (req, res) => {
    try {
        const userId = req.user.userId;
        const { subjectId } = req.params;
        const topics = await prisma.topic.findMany({
            where: { subjectId },
            orderBy: { orderIndex: 'asc' },
        });
        if (topics.length === 0) {
            return res.status(404).json({ error: 'Subject or topics not found.' });
        }
        const topicMasteries = await prisma.topicMastery.findMany({
            where: { userId, topicId: { in: topics.map((t) => t.id) } },
        });
        const masteryMap = {};
        topicMasteries.forEach((tm) => {
            masteryMap[tm.topicId] = tm.masteryScore;
        });
        const profile = await prisma.learnerProfile.findUnique({ where: { userId } });
        const baselineSkill = profile ? profile.overallSkill : 3;
        const formattedTopics = topics.map((t) => ({
            id: t.id,
            subjectId: t.subjectId,
            name: t.name,
            description: t.description,
            orderIndex: t.orderIndex,
            prerequisiteIds: JSON.parse(t.prerequisites || '[]'),
        }));
        const path = (0, pathGenerator_js_1.generateLearningPath)(subjectId, userId, formattedTopics, masteryMap, baselineSkill);
        return res.json(path);
    }
    catch (err) {
        console.error('Learning Path Error:', err);
        return res.status(500).json({ error: 'Failed to generate learning path.' });
    }
});
// 3. Get Next Adaptive Content Item for Topic
router.get('/topic/:topicId/next', authenticateUser, async (req, res) => {
    try {
        const userId = req.user.userId;
        const { topicId } = req.params;
        const profile = await prisma.learnerProfile.findUnique({ where: { userId } });
        const learningStyle = profile?.learningStyle || 'VISUAL';
        // Get learner's current mastery record for topic
        let mastery = await prisma.topicMastery.findUnique({
            where: { userId_topicId: { userId, topicId } },
        });
        const currentDifficulty = mastery ? mastery.currentDifficulty : profile ? profile.overallSkill : 3;
        // Get recent interactions for rolling history
        const rawInteractions = await prisma.interaction.findMany({
            where: { userId, topicId },
            orderBy: { timestamp: 'asc' },
            take: 10,
        });
        const history = rawInteractions.map((i) => ({
            id: i.id,
            userId: i.userId,
            topicId: i.topicId,
            contentItemId: i.contentItemId,
            questionId: i.questionId || undefined,
            isCorrect: i.isCorrect,
            timeSpentSec: i.timeSpentSec,
            difficulty: i.difficulty,
            format: i.format,
            timestamp: i.timestamp,
        }));
        // Run adaptive engine calculation
        const adaptiveResult = (0, adaptiveEngine_js_1.calculateNextDifficulty)(history, currentDifficulty, learningStyle);
        // Fetch candidate content items for topic
        const rawItems = await prisma.contentItem.findMany({
            where: { topicId },
            include: { questions: true },
        });
        const candidateItems = rawItems.map((item) => ({
            id: item.id,
            topicId: item.topicId,
            title: item.title,
            summary: item.summary,
            difficulty: item.difficulty,
            format: item.format,
            textContent: item.textContent || undefined,
            videoUrl: item.videoUrl || undefined,
            interactiveData: item.interactiveData ? JSON.parse(item.interactiveData) : undefined,
            tags: JSON.parse(item.tags || '[]'),
        }));
        const selectedCandidate = (0, adaptiveEngine_js_1.selectNextContentItem)(candidateItems, adaptiveResult.newDifficulty, adaptiveResult.recommendedFormat, history);
        const fullItem = rawItems.find((i) => i.id === selectedCandidate?.id) || rawItems[0];
        return res.json({
            adaptiveResult,
            contentItem: fullItem ? {
                ...fullItem,
                interactiveData: fullItem.interactiveData ? JSON.parse(fullItem.interactiveData) : null,
                tags: JSON.parse(fullItem.tags || '[]'),
                questions: fullItem.questions.map((q) => ({
                    ...q,
                    options: JSON.parse(q.options),
                })),
            } : null,
            rollingHistoryCount: history.length,
        });
    }
    catch (err) {
        console.error('Adaptive Content Selection Error:', err);
        return res.status(500).json({ error: 'Failed to retrieve adaptive content.' });
    }
});
// 4. Record Interaction & Adjust Difficulty dynamically
router.post('/interaction', authenticateUser, async (req, res) => {
    try {
        const userId = req.user.userId;
        const { topicId, contentItemId, questionId, selectedAnswer, isCorrect, timeSpentSec, currentDifficulty, format } = req.body;
        if (!topicId || !contentItemId || isCorrect === undefined) {
            return res.status(400).json({ error: 'Missing required interaction fields.' });
        }
        // Save interaction record
        const interaction = await prisma.interaction.create({
            data: {
                userId,
                topicId,
                contentItemId,
                questionId: questionId || null,
                selectedAnswer: selectedAnswer || null,
                isCorrect: Boolean(isCorrect),
                timeSpentSec: Number(timeSpentSec) || 15,
                difficulty: Number(currentDifficulty) || 3,
                format: format || 'TEXT',
            },
        });
        // Fetch updated interaction history for topic
        const rawInteractions = await prisma.interaction.findMany({
            where: { userId, topicId },
            orderBy: { timestamp: 'asc' },
        });
        const history = rawInteractions.map((i) => ({
            userId: i.userId,
            topicId: i.topicId,
            contentItemId: i.contentItemId,
            isCorrect: i.isCorrect,
            timeSpentSec: i.timeSpentSec,
            difficulty: i.difficulty,
            format: i.format,
            timestamp: i.timestamp,
        }));
        const profile = await prisma.learnerProfile.findUnique({ where: { userId } });
        const learningStyle = profile?.learningStyle || 'VISUAL';
        // Calculate next difficulty & format recommendation
        const adaptiveResult = (0, adaptiveEngine_js_1.calculateNextDifficulty)(history, Number(currentDifficulty) || 3, learningStyle);
        // Calculate new mastery score (0-100) based on ratio of correct answers weighted by difficulty
        const totalCount = history.length;
        const correctCount = history.filter((h) => h.isCorrect).length;
        const rawMastery = totalCount > 0 ? (correctCount / totalCount) * 100 : 0;
        // Update TopicMastery state
        const topicMastery = await prisma.topicMastery.upsert({
            where: { userId_topicId: { userId, topicId } },
            update: {
                masteryScore: Math.round(rawMastery),
                consecutiveCorrect: adaptiveResult.consecutiveCorrect,
                consecutiveWrong: adaptiveResult.consecutiveWrong,
                currentDifficulty: adaptiveResult.newDifficulty,
                lastAttemptAt: new Date(),
            },
            create: {
                userId,
                topicId,
                masteryScore: Math.round(rawMastery),
                consecutiveCorrect: adaptiveResult.consecutiveCorrect,
                consecutiveWrong: adaptiveResult.consecutiveWrong,
                currentDifficulty: adaptiveResult.newDifficulty,
            },
        });
        return res.json({
            message: 'Interaction recorded successfully.',
            interactionId: interaction.id,
            adaptiveResult,
            topicMastery,
        });
    }
    catch (err) {
        console.error('Interaction Record Error:', err);
        return res.status(500).json({ error: 'Failed to record interaction.' });
    }
});
exports.default = router;
