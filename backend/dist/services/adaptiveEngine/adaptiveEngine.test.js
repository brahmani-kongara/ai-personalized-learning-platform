"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const adaptiveEngine_js_1 = require("./adaptiveEngine.js");
const pathGenerator_js_1 = require("./pathGenerator.js");
(0, vitest_1.describe)('Adaptive Content Engine - Difficulty & Remedial Logic', () => {
    (0, vitest_1.it)('increases difficulty by 1 when learner achieves 3 correct answers in a row', () => {
        const history = [
            { userId: 'u1', topicId: 't1', contentItemId: 'c1', isCorrect: true, timeSpentSec: 25, difficulty: 5, format: 'TEXT', timestamp: new Date() },
            { userId: 'u1', topicId: 't1', contentItemId: 'c2', isCorrect: true, timeSpentSec: 20, difficulty: 5, format: 'TEXT', timestamp: new Date() },
            { userId: 'u1', topicId: 't1', contentItemId: 'c3', isCorrect: true, timeSpentSec: 18, difficulty: 5, format: 'TEXT', timestamp: new Date() },
        ];
        const result = (0, adaptiveEngine_js_1.calculateNextDifficulty)(history, 5, 'READING');
        (0, vitest_1.expect)(result.newDifficulty).toBe(6);
        (0, vitest_1.expect)(result.difficultyChanged).toBe(true);
        (0, vitest_1.expect)(result.actionRequired).toBe('INCREASE_DIFFICULTY');
        (0, vitest_1.expect)(result.consecutiveCorrect).toBe(3);
        (0, vitest_1.expect)(result.consecutiveWrong).toBe(0);
        (0, vitest_1.expect)(result.adjustmentReason).toContain('Mastery demonstrated');
    });
    (0, vitest_1.it)('decreases difficulty by 1 AND triggers remedial alternate format when learner answers 2 wrong in a row', () => {
        const history = [
            { userId: 'u1', topicId: 't1', contentItemId: 'c1', isCorrect: true, timeSpentSec: 30, difficulty: 5, format: 'TEXT', timestamp: new Date() },
            { userId: 'u1', topicId: 't1', contentItemId: 'c2', isCorrect: false, timeSpentSec: 45, difficulty: 5, format: 'TEXT', timestamp: new Date() },
            { userId: 'u1', topicId: 't1', contentItemId: 'c3', isCorrect: false, timeSpentSec: 50, difficulty: 5, format: 'TEXT', timestamp: new Date() },
        ];
        const result = (0, adaptiveEngine_js_1.calculateNextDifficulty)(history, 5, 'READING');
        (0, vitest_1.expect)(result.newDifficulty).toBe(4);
        (0, vitest_1.expect)(result.difficultyChanged).toBe(true);
        (0, vitest_1.expect)(result.actionRequired).toBe('REMEDIAL_ALTERNATE_FORMAT');
        (0, vitest_1.expect)(result.consecutiveCorrect).toBe(0);
        (0, vitest_1.expect)(result.consecutiveWrong).toBe(2);
        // Since last format was TEXT, recommended alternate format should be INTERACTIVE or VIDEO
        (0, vitest_1.expect)(result.recommendedFormat).not.toBe('TEXT');
    });
    (0, vitest_1.it)('clamps difficulty to maximum 10 when achieving streaks at level 10', () => {
        const history = [
            { userId: 'u1', topicId: 't1', contentItemId: 'c1', isCorrect: true, timeSpentSec: 15, difficulty: 10, format: 'VIDEO', timestamp: new Date() },
            { userId: 'u1', topicId: 't1', contentItemId: 'c2', isCorrect: true, timeSpentSec: 12, difficulty: 10, format: 'VIDEO', timestamp: new Date() },
            { userId: 'u1', topicId: 't1', contentItemId: 'c3', isCorrect: true, timeSpentSec: 10, difficulty: 10, format: 'VIDEO', timestamp: new Date() },
        ];
        const result = (0, adaptiveEngine_js_1.calculateNextDifficulty)(history, 10, 'VISUAL');
        (0, vitest_1.expect)(result.newDifficulty).toBe(10); // Clamped at 10
        (0, vitest_1.expect)(result.difficultyChanged).toBe(false);
        (0, vitest_1.expect)(result.actionRequired).toBe('MAINTAIN');
    });
    (0, vitest_1.it)('clamps difficulty to minimum 1 when failing repeatedly at level 1', () => {
        const history = [
            { userId: 'u1', topicId: 't1', contentItemId: 'c1', isCorrect: false, timeSpentSec: 60, difficulty: 1, format: 'VIDEO', timestamp: new Date() },
            { userId: 'u1', topicId: 't1', contentItemId: 'c2', isCorrect: false, timeSpentSec: 70, difficulty: 1, format: 'VIDEO', timestamp: new Date() },
        ];
        const result = (0, adaptiveEngine_js_1.calculateNextDifficulty)(history, 1, 'VISUAL');
        (0, vitest_1.expect)(result.newDifficulty).toBe(1); // Clamped at 1
        (0, vitest_1.expect)(result.actionRequired).toBe('REMEDIAL_ALTERNATE_FORMAT');
    });
    (0, vitest_1.it)('selects content item matching target difficulty and recommended delivery format', () => {
        const items = [
            { id: 'item1', topicId: 't1', title: 'Intro Video', summary: '', difficulty: 3, format: 'VIDEO', tags: [] },
            { id: 'item2', topicId: 't1', title: 'Deep Text', summary: '', difficulty: 6, format: 'TEXT', tags: [] },
            { id: 'item3', topicId: 't1', title: 'Target Interactive', summary: '', difficulty: 4, format: 'INTERACTIVE', tags: [] },
        ];
        const selected = (0, adaptiveEngine_js_1.selectNextContentItem)(items, 4, 'INTERACTIVE', []);
        (0, vitest_1.expect)(selected?.id).toBe('item3');
    });
});
(0, vitest_1.describe)('Learning Path Generator - Topological Sorting & Prerequisites', () => {
    const mockTopics = [
        { id: 'topic-algebra', subjectId: 'math', name: 'Basic Algebra', description: '', orderIndex: 1, prerequisiteIds: [] },
        { id: 'topic-functions', subjectId: 'math', name: 'Functions & Graphs', description: '', orderIndex: 2, prerequisiteIds: ['topic-algebra'] },
        { id: 'topic-calculus', subjectId: 'math', name: 'Differential Calculus', description: '', orderIndex: 3, prerequisiteIds: ['topic-functions'] },
    ];
    (0, vitest_1.it)('orders topics according to prerequisite DAG dependencies', () => {
        // Pass topics out of order
        const unsorted = [mockTopics[2], mockTopics[0], mockTopics[1]];
        const result = (0, pathGenerator_js_1.generateLearningPath)('math', 'user1', unsorted, {}, 3);
        (0, vitest_1.expect)(result.path.map((node) => node.topicId)).toEqual(['topic-algebra', 'topic-functions', 'topic-calculus']);
    });
    (0, vitest_1.it)('locks dependent topics until prerequisite topics reach mastery threshold (70%)', () => {
        // Algebra has 80% (mastered), Functions has 30% (in progress), Calculus has 0%
        const masteryMap = {
            'topic-algebra': 80,
            'topic-functions': 30,
            'topic-calculus': 0,
        };
        const result = (0, pathGenerator_js_1.generateLearningPath)('math', 'user1', mockTopics, masteryMap, 3);
        (0, vitest_1.expect)(result.path[0].status).toBe('COMPLETED');
        (0, vitest_1.expect)(result.path[1].status).toBe('IN_PROGRESS');
        (0, vitest_1.expect)(result.path[2].status).toBe('LOCKED'); // Blocked because Functions is not yet >= 70%
        (0, vitest_1.expect)(result.currentTopicId).toBe('topic-functions');
    });
    (0, vitest_1.it)('unlocks dependent topic once prerequisite reaches 70%+ mastery', () => {
        const masteryMap = {
            'topic-algebra': 100,
            'topic-functions': 75,
            'topic-calculus': 0,
        };
        const result = (0, pathGenerator_js_1.generateLearningPath)('math', 'user1', mockTopics, masteryMap, 3);
        (0, vitest_1.expect)(result.path[0].status).toBe('COMPLETED');
        (0, vitest_1.expect)(result.path[1].status).toBe('COMPLETED');
        (0, vitest_1.expect)(result.path[2].status).toBe('AVAILABLE'); // Unlocked!
        (0, vitest_1.expect)(result.currentTopicId).toBe('topic-calculus');
    });
});
