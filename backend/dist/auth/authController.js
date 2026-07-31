"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_2026';
// Register Endpoint
router.post('/register', async (req, res) => {
    try {
        const { email, password, name, role } = req.body;
        if (!email || !password || !name) {
            return res.status(400).json({ error: 'Email, password, and name are required.' });
        }
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists.' });
        }
        const passwordHash = await bcryptjs_1.default.hash(password, 10);
        const userRole = role === 'TEACHER' || role === 'ADMIN' ? role : 'STUDENT';
        const newUser = await prisma.user.create({
            data: {
                email,
                passwordHash,
                name,
                role: userRole,
                profile: userRole === 'STUDENT' ? {
                    create: {
                        learningStyle: 'VISUAL',
                        pacePreference: 'MODERATE',
                        overallSkill: 3,
                        strengths: JSON.stringify([]),
                        weaknesses: JSON.stringify([]),
                    }
                } : undefined,
            },
            include: { profile: true },
        });
        const token = jsonwebtoken_1.default.sign({ userId: newUser.id, email: newUser.email, role: newUser.role }, JWT_SECRET, { expiresIn: '7d' });
        return res.status(201).json({
            token,
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
                role: newUser.role,
                profile: newUser.profile,
            },
        });
    }
    catch (error) {
        console.error('Registration Error:', error);
        return res.status(500).json({ error: 'Failed to register user.' });
    }
});
// Login Endpoint
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }
        const user = await prisma.user.findUnique({
            where: { email },
            include: { profile: true },
        });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }
        const isMatch = await bcryptjs_1.default.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                profile: user.profile,
            },
        });
    }
    catch (error) {
        console.error('Login Error:', error);
        return res.status(500).json({ error: 'Failed to log in.' });
    }
});
// Current User Profile Info
router.get('/me', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized. No token provided.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            include: { profile: true },
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        return res.json({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            profile: user.profile,
        });
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid token.' });
    }
});
exports.default = router;
