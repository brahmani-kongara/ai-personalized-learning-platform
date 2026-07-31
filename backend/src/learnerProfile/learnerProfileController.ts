import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { LearningStyle, PacePreference } from '../services/adaptiveEngine/types.js';

const prisma = new PrismaClient();
const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_2026';

// Middleware to extract auth user
function authenticateUser(req: Request, res: Response, next: Function) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token.' });
  }
}

// Onboarding Diagnostic Questionnaire Data
router.get('/questions', (req: Request, res: Response) => {
  return res.json({
    varkQuestions: [
      {
        id: 'vark1',
        question: 'When learning a complex new technical subject, how do you prefer information presented?',
        options: [
          { text: 'Flowcharts, diagrams, and video animations', style: 'VISUAL' },
          { text: 'Interactive code sandboxes and hands-on exercises', style: 'KINESTHETIC' },
          { text: 'Comprehensive text articles, documentation, and book notes', style: 'READING' },
          { text: 'Audio lectures, podcasts, and video explainers with voiceover', style: 'AUDITORY' },
        ],
      },
      {
        id: 'vark2',
        question: 'When you are stuck on a difficult math or coding problem, what helps you most?',
        options: [
          { text: 'Step-by-step written tutorials with code blocks', style: 'READING' },
          { text: 'Visual diagrams breaking down graph/tree nodes or equations', style: 'VISUAL' },
          { text: 'Building a simple working prototype and tweaking parameters', style: 'KINESTHETIC' },
          { text: 'Listening to an instructor explain the intuition step-by-step', style: 'AUDITORY' },
        ],
      },
    ],
    paceQuestions: [
      {
        id: 'pace1',
        question: 'What is your preferred studying and practice pace?',
        options: [
          { text: 'Thorough and deliberate (Slow, deep understanding)', pace: 'SLOW' },
          { text: 'Balanced and steady (Moderate speed)', pace: 'MODERATE' },
          { text: 'Fast-paced intensive challenges (Quick iterations)', pace: 'FAST' },
        ],
      },
    ],
    diagnosticQuiz: [
      {
        id: 'diag1',
        subject: 'Mathematics',
        question: 'Solve for x: 3x - 7 = 14',
        options: ['x = 7', 'x = 21', 'x = 5', 'x = 3'],
        correct: 'x = 7',
        topicTag: 'Algebra',
      },
      {
        id: 'diag2',
        subject: 'Computer Science',
        question: 'What is the average time complexity of searching in a HashMap?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        correct: 'O(1)',
        topicTag: 'Data Structures',
      },
      {
        id: 'diag3',
        subject: 'Calculus',
        question: 'What is the derivative of f(x) = x^3?',
        options: ['3x^2', '3x^3', 'x^2', '3x'],
        correct: '3x^2',
        topicTag: 'Calculus',
      },
    ],
  });
});

// Save Onboarding Questionnaire & Diagnostic Results
router.post('/onboarding', authenticateUser, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { varkAnswers, paceAnswer, diagnosticAnswers } = req.body;

    // 1. Calculate VARK Learning Style
    const styleCounts: Record<string, number> = { VISUAL: 0, AUDITORY: 0, READING: 0, KINESTHETIC: 0 };
    if (Array.isArray(varkAnswers)) {
      varkAnswers.forEach((style: string) => {
        if (styleCounts[style] !== undefined) {
          styleCounts[style]++;
        }
      });
    }

    let winningStyle: LearningStyle = 'VISUAL';
    let maxCount = -1;
    Object.entries(styleCounts).forEach(([style, count]) => {
      if (count > maxCount) {
        maxCount = count;
        winningStyle = style as LearningStyle;
      }
    });

    // 2. Pace Preference
    const pace: PacePreference = ['SLOW', 'MODERATE', 'FAST'].includes(paceAnswer) ? paceAnswer : 'MODERATE';

    // 3. Evaluate Diagnostic Performance
    let correctCount = 0;
    const strengths: string[] = [];
    const weaknesses: string[] = [];

    if (Array.isArray(diagnosticAnswers)) {
      diagnosticAnswers.forEach((ans: { topicTag: string; isCorrect: boolean }) => {
        if (ans.isCorrect) {
          correctCount++;
          if (ans.topicTag && !strengths.includes(ans.topicTag)) {
            strengths.push(ans.topicTag);
          }
        } else {
          if (ans.topicTag && !weaknesses.includes(ans.topicTag)) {
            weaknesses.push(ans.topicTag);
          }
        }
      });
    }

    // Scale initial skill level 1 to 10 based on diagnostic quiz
    const totalDiagnostic = Array.isArray(diagnosticAnswers) && diagnosticAnswers.length > 0 ? diagnosticAnswers.length : 3;
    const overallSkill = Math.max(1, Math.min(10, Math.round((correctCount / totalDiagnostic) * 8 + 2)));

    // Upsert LearnerProfile
    const profile = await prisma.learnerProfile.upsert({
      where: { userId },
      update: {
        learningStyle: winningStyle,
        pacePreference: pace,
        overallSkill,
        strengths: JSON.stringify(strengths),
        weaknesses: JSON.stringify(weaknesses),
      },
      create: {
        userId,
        learningStyle: winningStyle,
        pacePreference: pace,
        overallSkill,
        strengths: JSON.stringify(strengths),
        weaknesses: JSON.stringify(weaknesses),
      },
    });

    return res.json({
      message: 'Onboarding completed successfully!',
      profile: {
        ...profile,
        strengths: JSON.parse(profile.strengths),
        weaknesses: JSON.parse(profile.weaknesses),
      },
    });
  } catch (err: any) {
    console.error('Onboarding Error:', err);
    return res.status(500).json({ error: 'Failed to process onboarding survey.' });
  }
});

// Fetch Profile
router.get('/profile', authenticateUser, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const profile = await prisma.learnerProfile.findUnique({
      where: { userId },
      include: { user: { select: { name: true, email: true, role: true } } },
    });

    if (!profile) {
      return res.status(404).json({ error: 'Learner profile not found.' });
    }

    return res.json({
      ...profile,
      strengths: JSON.parse(profile.strengths),
      weaknesses: JSON.parse(profile.weaknesses),
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Failed to retrieve profile.' });
  }
});

export default router;
