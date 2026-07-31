"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = seedDatabase;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
async function seedDatabase() {
    console.log('🌱 Seeding database with realistic adaptive content...');
    // Clean existing tables
    await prisma.interaction.deleteMany({});
    await prisma.topicMastery.deleteMany({});
    await prisma.question.deleteMany({});
    await prisma.contentItem.deleteMany({});
    await prisma.topic.deleteMany({});
    await prisma.subject.deleteMany({});
    await prisma.learnerProfile.deleteMany({});
    await prisma.user.deleteMany({});
    const passwordHash = await bcryptjs_1.default.hash('password123', 10);
    // 1. Seed Users (Student, Teacher, Admin)
    const student = await prisma.user.create({
        data: {
            email: 'student@example.com',
            passwordHash,
            name: 'Alex Rivera',
            role: 'STUDENT',
            profile: {
                create: {
                    learningStyle: 'VISUAL',
                    pacePreference: 'MODERATE',
                    overallSkill: 4,
                    strengths: JSON.stringify(['Algebra', 'Pattern Recognition']),
                    weaknesses: JSON.stringify(['Complex Integration', 'Graph Theory']),
                },
            },
        },
    });
    const teacher = await prisma.user.create({
        data: {
            email: 'teacher@example.com',
            passwordHash,
            name: 'Dr. Sarah Vance',
            role: 'TEACHER',
        },
    });
    console.log(`✅ Created test users: Student (${student.email}), Teacher (${teacher.email})`);
    // 2. Subject 1: Mathematics & Calculus
    const mathSubject = await prisma.subject.create({
        data: {
            name: 'Mathematics & Calculus',
            description: 'Foundational algebra, functions, differential calculus, and integrals.',
            category: 'STEM',
        },
    });
    const topicAlgebra = await prisma.topic.create({
        data: {
            subjectId: mathSubject.id,
            name: 'Algebraic Expressions & Equations',
            description: 'Solving linear & quadratic equations, factoring, and polynomial arithmetic.',
            orderIndex: 1,
            prerequisites: JSON.stringify([]),
        },
    });
    const topicFunctions = await prisma.topic.create({
        data: {
            subjectId: mathSubject.id,
            name: 'Functions & Limits',
            description: 'Understanding function domain, range, rate of change, and continuous limits.',
            orderIndex: 2,
            prerequisites: JSON.stringify([topicAlgebra.id]),
        },
    });
    const topicDerivatives = await prisma.topic.create({
        data: {
            subjectId: mathSubject.id,
            name: 'Differential Calculus & Derivatives',
            description: 'Power rule, product/quotient rule, chain rule, and optimization problems.',
            orderIndex: 3,
            prerequisites: JSON.stringify([topicFunctions.id]),
        },
    });
    // 3. Subject 2: Computer Science & Algorithms
    const csSubject = await prisma.subject.create({
        data: {
            name: 'Computer Science & Algorithms',
            description: 'Data structures, algorithm complexity, recursive logic, and dynamic programming.',
            category: 'Computer Science',
        },
    });
    const topicDS = await prisma.topic.create({
        data: {
            subjectId: csSubject.id,
            name: 'Arrays, HashMaps & Linked Lists',
            description: 'Basic memory allocation, linear search, and key-value indexing.',
            orderIndex: 1,
            prerequisites: JSON.stringify([]),
        },
    });
    const topicTrees = await prisma.topic.create({
        data: {
            subjectId: csSubject.id,
            name: 'Binary Trees & Graph Traversals',
            description: 'BFS, DFS, binary search trees, and adjacency matrices.',
            orderIndex: 2,
            prerequisites: JSON.stringify([topicDS.id]),
        },
    });
    // 4. Subject 3: Data Science & Machine Learning
    const dsSubject = await prisma.subject.create({
        data: {
            name: 'Data Science & AI',
            description: 'Statistical distributions, regression, neural networks, and model evaluation.',
            category: 'Artificial Intelligence',
        },
    });
    const topicStats = await prisma.topic.create({
        data: {
            subjectId: dsSubject.id,
            name: 'Probability & Descriptive Statistics',
            description: 'Mean, variance, normal distributions, and Bayes Theorem.',
            orderIndex: 1,
            prerequisites: JSON.stringify([]),
        },
    });
    const topicML = await prisma.topic.create({
        data: {
            subjectId: dsSubject.id,
            name: 'Supervised Learning & Regression',
            description: 'Linear & logistic regression, gradient descent, and loss functions.',
            orderIndex: 2,
            prerequisites: JSON.stringify([topicStats.id]),
        },
    });
    console.log('✅ Created 3 Subjects and 7 Topics with prerequisite DAG relationships.');
    // Helper function to seed content items across difficulty levels 1 through 5
    async function seedContentForTopic(topicId, topicName) {
        const difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const formats = ['VIDEO', 'TEXT', 'INTERACTIVE', 'QUIZ'];
        for (const diff of [1, 3, 5, 7, 9]) {
            for (const fmt of formats) {
                const item = await prisma.contentItem.create({
                    data: {
                        topicId,
                        title: `${topicName}: ${fmt} Module (Difficulty Level ${diff})`,
                        summary: `Adaptive ${fmt.toLowerCase()} lesson covering core principles of ${topicName} at difficulty level ${diff}.`,
                        difficulty: diff,
                        format: fmt,
                        textContent: fmt === 'TEXT' ? `### Core Concept Breakdown\n\nThis lesson explores ${topicName} at level ${diff}.\n\n- Key Formula/Rule: $f(x) = ax^2 + bx + c$\n- Practice Tip: Break down complex problems into step-by-step subproblems.` : undefined,
                        videoUrl: fmt === 'VIDEO' ? 'https://www.youtube.com/embed/dQw4w9WgXcQ' : undefined,
                        interactiveData: fmt === 'INTERACTIVE' ? JSON.stringify({
                            type: 'slider_puzzle',
                            targetValue: diff * 10,
                            initialValue: 0,
                            instruction: `Adjust the slider parameter to balance the equation output to ${diff * 10}.`,
                        }) : undefined,
                        tags: JSON.stringify([topicName, `Difficulty-${diff}`, fmt]),
                    },
                });
                // Add 2 questions for each content item
                await prisma.question.create({
                    data: {
                        contentItemId: item.id,
                        prompt: `[Level ${diff}] What is the primary objective of ${topicName} under scenario ${diff}?`,
                        options: JSON.stringify([
                            `Option A: Maximize accuracy at difficulty ${diff}`,
                            `Option B: Linear decomposition without scaling`,
                            `Option C: Constant rate of convergence`,
                            `Option D: Quadratic growth factor`,
                        ]),
                        correctAnswer: `Option A: Maximize accuracy at difficulty ${diff}`,
                        explanation: `Option A directly aligns with difficulty level ${diff} principles.`,
                        difficulty: diff,
                    },
                });
            }
        }
    }
    await seedContentForTopic(topicAlgebra.id, 'Algebraic Expressions');
    await seedContentForTopic(topicFunctions.id, 'Functions & Limits');
    await seedContentForTopic(topicDerivatives.id, 'Derivatives');
    await seedContentForTopic(topicDS.id, 'Arrays & HashMaps');
    await seedContentForTopic(topicTrees.id, 'Binary Trees & Graphs');
    await seedContentForTopic(topicStats.id, 'Probability & Stats');
    await seedContentForTopic(topicML.id, 'Supervised Machine Learning');
    console.log('✅ Seeded content items and diagnostic questions across 5 difficulty levels and 4 delivery formats.');
}
if (process.argv[1].includes('seedData')) {
    seedDatabase()
        .then(() => {
        console.log('🎉 Seeding completed successfully!');
        process.exit(0);
    })
        .catch((err) => {
        console.error('❌ Seeding error:', err);
        process.exit(1);
    });
}
