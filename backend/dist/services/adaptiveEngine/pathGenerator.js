"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLearningPath = generateLearningPath;
/**
 * REASONING BEHIND THE LEARNING PATH GENERATOR ALGORITHM:
 *
 * Curriculum structure represents a Directed Acyclic Graph (DAG) of concepts where higher-level concepts
 * strictly rely on foundational concepts (e.g. Differentiation relies on Algebra and Limits).
 *
 * 1. Topological Sorting (Kahn's Algorithm):
 *    - Resolves node ordering such that for every directed edge U -> V (U is prerequisite of V),
 *      U appears before V in the linear learning sequence.
 *
 * 2. Prerequisite State Assessment:
 *    - A topic node is marked 'AVAILABLE' if and only if all topics listed in its `prerequisiteIds` array
 *      have reached a mastery score >= 70%.
 *    - If any prerequisite topic is < 70%, the topic remains 'LOCKED' to prevent premature failure.
 *
 * 3. Dynamic Initial Difficulty Calibration:
 *    - Initial recommended difficulty for an available topic is scaled based on the learner's baseline
 *      overall skill level (1-10) combined with topic position in the sequence.
 */
function generateLearningPath(subjectId, learnerId, topics, topicMasteryMap = {}, // topicId -> masteryScore (0 - 100)
learnerBaselineSkill = 3) {
    if (!topics || topics.length === 0) {
        return {
            subjectId,
            learnerId,
            currentTopicId: null,
            path: [],
            estimatedTotalHours: 0,
        };
    }
    // 1. Build Adjacency Matrix & In-Degree Map for Topological Sort
    const inDegree = {};
    const adjList = {};
    const topicById = new Map();
    topics.forEach((topic) => {
        topicById.set(topic.id, topic);
        inDegree[topic.id] = topic.prerequisiteIds.length;
        adjList[topic.id] = [];
    });
    topics.forEach((topic) => {
        topic.prerequisiteIds.forEach((prereqId) => {
            if (adjList[prereqId]) {
                adjList[prereqId].push(topic.id);
            }
        });
    });
    // 2. Kahn's Topological Sort Queue
    const queue = [];
    topics.forEach((topic) => {
        if (inDegree[topic.id] === 0) {
            queue.push(topic.id);
        }
    });
    // Sort initial queue by orderIndex for deterministic baseline sequence
    queue.sort((a, b) => (topicById.get(a)?.orderIndex || 0) - (topicById.get(b)?.orderIndex || 0));
    const sortedTopicIds = [];
    while (queue.length > 0) {
        const currId = queue.shift();
        sortedTopicIds.push(currId);
        const neighbors = adjList[currId] || [];
        for (const neighborId of neighbors) {
            inDegree[neighborId]--;
            if (inDegree[neighborId] === 0) {
                queue.push(neighborId);
            }
        }
    }
    // Append any cyclic or unreachable nodes at the end as fallback
    topics.forEach((t) => {
        if (!sortedTopicIds.includes(t.id)) {
            sortedTopicIds.push(t.id);
        }
    });
    // 3. Build Path Nodes with Dependency Validation & Status Assignment
    let currentTopicId = null;
    const MASTERY_THRESHOLD = 70; // 70% threshold to unlock dependent topics
    const pathNodes = sortedTopicIds.map((topicId, index) => {
        const topic = topicById.get(topicId);
        const masteryScore = Math.min(100, Math.max(0, topicMasteryMap[topicId] || 0));
        // Check if all prerequisites meet threshold
        const prerequisitesCompleted = topic.prerequisiteIds.every((prereqId) => (topicMasteryMap[prereqId] || 0) >= MASTERY_THRESHOLD);
        let status = 'LOCKED';
        if (masteryScore >= MASTERY_THRESHOLD) {
            status = 'COMPLETED';
        }
        else if (masteryScore > 0 && prerequisitesCompleted) {
            status = 'IN_PROGRESS';
        }
        else if (prerequisitesCompleted) {
            status = 'AVAILABLE';
        }
        else {
            status = 'LOCKED';
        }
        // Identify the first non-completed available topic as the current focused topic
        if (!currentTopicId && (status === 'IN_PROGRESS' || status === 'AVAILABLE')) {
            currentTopicId = topicId;
        }
        // Recommended difficulty: baseline skill adjusted by relative topic index
        const recommendedDifficulty = Math.max(1, Math.min(10, Math.round(learnerBaselineSkill + index * 0.5)));
        return {
            topicId: topic.id,
            topicName: topic.name,
            orderIndex: index + 1,
            status,
            masteryScore,
            recommendedDifficulty,
            prerequisiteTopicsCompleted: prerequisitesCompleted,
        };
    });
    // If all completed or none unlocked, default currentTopicId to first node
    if (!currentTopicId && pathNodes.length > 0) {
        currentTopicId = pathNodes[0].topicId;
    }
    const estimatedTotalHours = pathNodes.length * 1.5;
    return {
        subjectId,
        learnerId,
        currentTopicId,
        path: pathNodes,
        estimatedTotalHours,
    };
}
