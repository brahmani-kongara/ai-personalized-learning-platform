"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
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
// Student Analytics Dashboard
router.get('/student', authenticateUser, async (req, res) => {
    try {
        const userId = req.user.userId;
        const profile = await prisma.learnerProfile.findUnique({ where: { userId } });
        const masteries = await prisma.topicMastery.findMany({
            where: { userId },
            include: { topic: { include: { subject: true } } },
        });
        const interactions = await prisma.interaction.findMany({
            where: { userId },
            orderBy: { timestamp: 'desc' },
        });
        const totalTimeSec = interactions.reduce((sum, i) => sum + i.timeSpentSec, 0);
        const totalInteractions = interactions.length;
        const totalCorrect = interactions.filter((i) => i.isCorrect).length;
        const overallAccuracy = totalInteractions > 0 ? Math.round((totalCorrect / totalInteractions) * 100) : 0;
        // Calculate current study streak (consecutive days with interactions)
        const uniqueDays = new Set(interactions.map((i) => new Date(i.timestamp).toISOString().split('T')[0]));
        const studyStreakDays = uniqueDays.size;
        // Identify weak areas (topics with mastery < 50% or consecutive wrong > 0)
        const weakAreas = masteries
            .filter((m) => m.masteryScore < 50 || m.consecutiveWrong > 0)
            .map((m) => ({
            topicId: m.topicId,
            topicName: m.topic.name,
            subjectName: m.topic.subject.name,
            masteryScore: m.masteryScore,
            currentDifficulty: m.currentDifficulty,
            consecutiveWrong: m.consecutiveWrong,
        }));
        const topicMasteryList = masteries.map((m) => ({
            topicId: m.topicId,
            topicName: m.topic.name,
            subjectName: m.topic.subject.name,
            masteryScore: m.masteryScore,
            currentDifficulty: m.currentDifficulty,
            lastAttemptAt: m.lastAttemptAt,
        }));
        return res.json({
            profile: profile ? {
                learningStyle: profile.learningStyle,
                pacePreference: profile.pacePreference,
                overallSkill: profile.overallSkill,
                strengths: JSON.parse(profile.strengths),
                weaknesses: JSON.parse(profile.weaknesses),
            } : null,
            summary: {
                totalInteractions,
                totalCorrect,
                overallAccuracy,
                totalTimeMinutes: Math.round(totalTimeSec / 60),
                studyStreakDays,
            },
            topicMasteryList,
            weakAreas,
        });
    }
    catch (err) {
        console.error('Student Analytics Error:', err);
        return res.status(500).json({ error: 'Failed to retrieve student analytics.' });
    }
});
// Teacher / Admin Aggregate Class Dashboard & Stuck Student Detector
router.get('/teacher/overview', authenticateUser, async (req, res) => {
    try {
        const userRole = req.user.role;
        if (userRole !== 'TEACHER' && userRole !== 'ADMIN') {
            return res.status(403).json({ error: 'Access denied. Teacher or Admin privileges required.' });
        }
        const students = await prisma.user.findMany({
            where: { role: 'STUDENT' },
            include: {
                profile: true,
                masteries: { include: { topic: true } },
                interactions: { orderBy: { timestamp: 'desc' }, take: 10 },
            },
        });
        const studentSummaries = students.map((st) => {
            const masteries = st.masteries;
            const avgMastery = masteries.length > 0
                ? Math.round(masteries.reduce((sum, m) => sum + m.masteryScore, 0) / masteries.length)
                : 0;
            const totalInteractions = st.interactions.length;
            const correctInteractions = st.interactions.filter((i) => i.isCorrect).length;
            const accuracy = totalInteractions > 0 ? Math.round((correctInteractions / totalInteractions) * 100) : 0;
            // Identify if student is "STUCK" (consecutive wrong >= 2 or overall mastery < 40%)
            const stuckTopics = masteries.filter((m) => m.consecutiveWrong >= 2 || m.masteryScore < 40);
            const isStuck = stuckTopics.length > 0;
            return {
                id: st.id,
                name: st.name,
                email: st.email,
                learningStyle: st.profile?.learningStyle || 'VISUAL',
                pacePreference: st.profile?.pacePreference || 'MODERATE',
                overallSkill: st.profile?.overallSkill || 3,
                avgMastery,
                accuracy,
                totalInteractions,
                isStuck,
                stuckReason: isStuck
                    ? `Stuck on ${stuckTopics.length} topic(s): ${stuckTopics.map((m) => m.topic.name).join(', ')}`
                    : 'Progressing smoothly',
                stuckTopics: stuckTopics.map((m) => ({
                    topicName: m.topic.name,
                    consecutiveWrong: m.consecutiveWrong,
                    masteryScore: m.masteryScore,
                })),
            };
        });
        const totalStudents = students.length;
        const stuckStudentsCount = studentSummaries.filter((s) => s.isStuck).length;
        const aggregateClassMastery = totalStudents > 0
            ? Math.round(studentSummaries.reduce((sum, s) => sum + s.avgMastery, 0) / totalStudents)
            : 0;
        return res.json({
            aggregateMetrics: {
                totalStudents,
                stuckStudentsCount,
                aggregateClassMastery,
            },
            students: studentSummaries,
        });
    }
    catch (err) {
        console.error('Teacher Analytics Error:', err);
        return res.status(500).json({ error: 'Failed to retrieve class analytics.' });
    }
});
exports.default = router;
