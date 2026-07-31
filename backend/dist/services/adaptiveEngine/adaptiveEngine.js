"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALTERNATE_FORMAT_MAP = exports.DEFAULT_STYLE_FORMAT_MAP = void 0;
exports.calculateNextDifficulty = calculateNextDifficulty;
exports.selectNextContentItem = selectNextContentItem;
/**
  Map primary VARK learning styles to default delivery formats.
 */
exports.DEFAULT_STYLE_FORMAT_MAP = {
    VISUAL: 'VIDEO',
    AUDITORY: 'VIDEO',
    READING: 'TEXT',
    KINESTHETIC: 'INTERACTIVE',
};
/**
  Alternate format fallback list when a student gets stuck on a specific format.
  Provides cognitive multi-modal reinforcement.
 */
exports.ALTERNATE_FORMAT_MAP = {
    TEXT: ['INTERACTIVE', 'VIDEO', 'QUIZ'],
    VIDEO: ['INTERACTIVE', 'TEXT', 'QUIZ'],
    INTERACTIVE: ['VIDEO', 'TEXT', 'QUIZ'],
    QUIZ: ['TEXT', 'INTERACTIVE', 'VIDEO'],
};
/**
 * REASONING BEHIND THE ADAPTIVE DIFFICULTY ALGORITHM:
 *
 * Traditional static curricula force all students through identical difficulty curves regardless of aptitude.
 * The core goal of Zone of Proximal Development (ZPD) learning theory is to keep the learner in a state of
 * optimal challenge ("flow state") — neither bored by overly easy content nor frustrated by overly difficult content.
 *
 * 1. Immediate Sensitivity (Short-Term Streak Detection):
 *    - 3 Consecutive Correct Answers: Demonstrates confidence and mastery at the current cognitive load level.
 *      The algorithm elevates the target difficulty (+1, clamped to max 10) to challenge the student further.
 *
 * 2. Immediate Failure Intervention (Remedial Trigger):
 *    - 2 Consecutive Wrong Answers: Indicates cognitive overload or conceptual blockage.
 *      The algorithm immediately reduces difficulty (-1, clamped to min 1) AND switches the presentation format
 *      (e.g., from dense text to an interactive sandbox or visual video explainer) to present the same underlying
 *      concept through a different sensory learning style modality.
 *
 * 3. Pure Function Guarantee:
 *    - Given identical interaction history arrays, this function deterministically yields identical output.
 *    - It has no external dependencies, side-effects, or database locks, making it 100% unit-testable and modular.
 */
function calculateNextDifficulty(history, currentDifficulty, preferredStyle = 'VISUAL') {
    const boundedDifficulty = Math.max(1, Math.min(10, Math.round(currentDifficulty)));
    const defaultFormat = exports.DEFAULT_STYLE_FORMAT_MAP[preferredStyle] || 'VIDEO';
    if (!history || history.length === 0) {
        return {
            newDifficulty: boundedDifficulty,
            difficultyChanged: false,
            adjustmentReason: 'No prior interaction history available. Maintaining current difficulty level.',
            actionRequired: 'MAINTAIN',
            recommendedFormat: defaultFormat,
            consecutiveCorrect: 0,
            consecutiveWrong: 0,
        };
    }
    // Calculate streak from the most recent interactions in reverse chronological order
    let consecutiveCorrect = 0;
    let consecutiveWrong = 0;
    for (let i = history.length - 1; i >= 0; i--) {
        const record = history[i];
        if (record.isCorrect) {
            if (consecutiveWrong > 0)
                break; // Break streak on state change
            consecutiveCorrect++;
        }
        else {
            if (consecutiveCorrect > 0)
                break; // Break streak on state change
            consecutiveWrong++;
        }
    }
    const lastAttempt = history[history.length - 1];
    // RULE 1: 3 Correct in a row -> Increase difficulty
    if (consecutiveCorrect >= 3) {
        const nextDiff = Math.min(10, boundedDifficulty + 1);
        const changed = nextDiff !== boundedDifficulty;
        return {
            newDifficulty: nextDiff,
            difficultyChanged: changed,
            adjustmentReason: `Mastery demonstrated with ${consecutiveCorrect} consecutive correct answers. Increasing difficulty level from ${boundedDifficulty} to ${nextDiff}.`,
            actionRequired: changed ? 'INCREASE_DIFFICULTY' : 'MAINTAIN',
            recommendedFormat: defaultFormat,
            consecutiveCorrect,
            consecutiveWrong: 0,
        };
    }
    // RULE 2: 2 Wrong in a row -> Decrease difficulty + Remedial Alternate Format
    if (consecutiveWrong >= 2) {
        const nextDiff = Math.max(1, boundedDifficulty - 1);
        const changed = nextDiff !== boundedDifficulty;
        // Pick an alternate format to break conceptual deadlock
        const alternateOptions = exports.ALTERNATE_FORMAT_MAP[lastAttempt.format] || ['INTERACTIVE', 'VIDEO'];
        // Filter out the failed format, prefer matching learner style if possible, else pick next alternative
        const remedialFormat = alternateOptions.find((fmt) => fmt !== lastAttempt.format) || 'VIDEO';
        return {
            newDifficulty: nextDiff,
            difficultyChanged: changed,
            adjustmentReason: `Learner encountered frustration with ${consecutiveWrong} consecutive incorrect answers. Decreasing difficulty from ${boundedDifficulty} to ${nextDiff} and recommending remedial content in alternate format (${remedialFormat}).`,
            actionRequired: 'REMEDIAL_ALTERNATE_FORMAT',
            recommendedFormat: remedialFormat,
            consecutiveCorrect: 0,
            consecutiveWrong,
        };
    }
    // DEFAULT: Maintain difficulty state
    return {
        newDifficulty: boundedDifficulty,
        difficultyChanged: false,
        adjustmentReason: `Maintaining current difficulty level ${boundedDifficulty}. Current streak: ${consecutiveCorrect} correct, ${consecutiveWrong} wrong.`,
        actionRequired: 'MAINTAIN',
        recommendedFormat: defaultFormat,
        consecutiveCorrect,
        consecutiveWrong,
    };
}
/**
 * REASONING BEHIND CONTENT SELECTION & RANKING HEURISTIC:
 *
 * Given a pool of potential content items for a topic, we score each item based on a 3-part utility score:
 * 1. Difficulty Match Score: Heavy penalty for items whose difficulty deviates from target difficulty.
 * 2. Format Match Score: Bonus for items matching the recommended target format (e.g. video, text, interactive).
 * 3. Novelty Score: Penalty for items the student has already seen/attempted recently to prevent redundant loops.
 *
 * Highest scoring candidate item is selected.
 */
function selectNextContentItem(availableItems, targetDifficulty, recommendedFormat, recentHistory = []) {
    if (!availableItems || availableItems.length === 0)
        return null;
    const recentItemIds = new Set(recentHistory.slice(-5).map((h) => h.contentItemId));
    let bestItem = null;
    let highestScore = -Infinity;
    for (const item of availableItems) {
        // 1. Difficulty delta penalty (0 if exact match, -20 per level delta)
        const diffDelta = Math.abs(item.difficulty - targetDifficulty);
        const diffScore = -20 * diffDelta;
        // 2. Format match bonus (+50 points if exact match to recommended format)
        const formatScore = item.format === recommendedFormat ? 50 : 0;
        // 3. Novelty bonus (+30 points if not recently attempted)
        const noveltyScore = recentItemIds.has(item.id) ? -40 : 30;
        const totalScore = diffScore + formatScore + noveltyScore;
        if (totalScore > highestScore) {
            highestScore = totalScore;
            bestItem = item;
        }
    }
    return bestItem;
}
