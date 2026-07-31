const API_BASE = '/api';

function getHeaders() {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Login failed');
  }
  return res.json();
}

export async function registerUser(email: string, password: string, name: string, role: string) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name, role }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Registration failed');
  }
  return res.json();
}

export async function fetchCurrentProfile() {
  const res = await fetch(`${API_BASE}/learner-profile/profile`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error('Failed to load profile');
  return res.json();
}

export async function fetchOnboardingQuestions() {
  const res = await fetch(`${API_BASE}/learner-profile/questions`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error('Failed to load onboarding questions');
  return res.json();
}

export async function submitOnboarding(data: { varkAnswers: string[]; paceAnswer: string; diagnosticAnswers: any[] }) {
  const res = await fetch(`${API_BASE}/learner-profile/onboarding`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to submit onboarding answers');
  return res.json();
}

export async function fetchSubjects() {
  const res = await fetch(`${API_BASE}/content/subjects`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error('Failed to fetch subjects');
  return res.json();
}

export async function fetchLearningPath(subjectId: string) {
  const res = await fetch(`${API_BASE}/content/path/${subjectId}`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error('Failed to fetch learning path');
  return res.json();
}

export async function fetchNextAdaptiveContent(topicId: string) {
  const res = await fetch(`${API_BASE}/content/topic/${topicId}/next`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error('Failed to fetch next content');
  return res.json();
}

export async function recordInteraction(payload: {
  topicId: string;
  contentItemId: string;
  questionId?: string;
  selectedAnswer?: string;
  isCorrect: boolean;
  timeSpentSec: number;
  currentDifficulty: number;
  format: string;
}) {
  const res = await fetch(`${API_BASE}/content/interaction`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to record interaction');
  return res.json();
}

export async function fetchStudentAnalytics() {
  const res = await fetch(`${API_BASE}/analytics/student`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error('Failed to fetch student analytics');
  return res.json();
}

export async function fetchTeacherOverview() {
  const res = await fetch(`${API_BASE}/analytics/teacher/overview`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error('Failed to fetch teacher overview');
  return res.json();
}
