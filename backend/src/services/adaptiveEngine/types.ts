export type LearningStyle = 'VISUAL' | 'AUDITORY' | 'READING' | 'KINESTHETIC';
export type PacePreference = 'SLOW' | 'MODERATE' | 'FAST';
export type DeliveryFormat = 'VIDEO' | 'TEXT' | 'INTERACTIVE' | 'QUIZ';

export interface LearnerProfileData {
  userId: string;
  learningStyle: LearningStyle;
  pacePreference: PacePreference;
  overallSkillLevel: number; // 1 - 10
  strengths: string[];
  weaknesses: string[];
}

export interface InteractionRecord {
  id?: string;
  userId: string;
  topicId: string;
  contentItemId: string;
  questionId?: string;
  isCorrect: boolean;
  timeSpentSec: number;
  difficulty: number;
  format: DeliveryFormat;
  timestamp: Date | string;
}

export interface DifficultyAdjustmentResult {
  newDifficulty: number;
  difficultyChanged: boolean;
  adjustmentReason: string;
  actionRequired: 'INCREASE_DIFFICULTY' | 'DECREASE_DIFFICULTY' | 'MAINTAIN' | 'REMEDIAL_ALTERNATE_FORMAT';
  recommendedFormat: DeliveryFormat;
  consecutiveCorrect: number;
  consecutiveWrong: number;
}

export interface ContentItemData {
  id: string;
  topicId: string;
  title: string;
  summary: string;
  difficulty: number; // 1-10
  format: DeliveryFormat;
  textContent?: string;
  videoUrl?: string;
  interactiveData?: Record<string, any>;
  tags: string[];
}

export interface TopicData {
  id: string;
  subjectId: string;
  name: string;
  description: string;
  orderIndex: number;
  prerequisiteIds: string[];
}

export interface PathNode {
  topicId: string;
  topicName: string;
  orderIndex: number;
  status: 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED';
  masteryScore: number; // 0 - 100
  recommendedDifficulty: number; // 1 - 10
  prerequisiteTopicsCompleted: boolean;
}

export interface SequencedLearningPath {
  subjectId: string;
  learnerId: string;
  currentTopicId: string | null;
  path: PathNode[];
  estimatedTotalHours: number;
}
