# AI Personalized Learning Platform

An adaptive, full-stack learning platform that creates personalized education paths based on a learner's sensory style (VARK), pace preference, and baseline strengths, and continuously adjusts content difficulty and delivery method as the learner progresses.

---

## 📐 Architecture Overview & Learner Interaction Flow

```
+-----------------------------------------------------------------------------------+
|                                  USER INTERACTION                                 |
|   Learner submits question answer & time spent in ContentDeliveryView (React UI)  |
+------------------------------------------+----------------------------------------+
                                           |
                                           v
+-----------------------------------------------------------------------------------+
|                                   EXPRESS ROUTER                                  |
|                 POST /api/content/interaction (contentDeliveryController)        |
+------------------------------------------+----------------------------------------+
                                           |
                                           v
+-----------------------------------------------------------------------------------+
|                        STANDALONE ADAPTIVE ENGINE SERVICE                         |
|                    calculateNextDifficulty(history, currentDifficulty)           |
|                                                                                   |
|  - Evaluates rolling interaction history (last N attempts).                      |
|  - IF 3 consecutive correct answers -> Increase difficulty +1 (max 10).           |
|  - IF 2 consecutive wrong answers   -> Decrease difficulty -1 (min 1) AND        |
|                                        recommend remedial alternate format.      |
+------------------------------------------+----------------------------------------+
                                           |
                                           v
+-----------------------------------------------------------------------------------+
|                         DATABASE STATE & PATH UPDATE                              |
|           Prisma updates TopicMastery (score, consecutive streak, next level)     |
|           pathGenerator re-orders topic DAG based on prerequisite mastery (>= 70%) |
+------------------------------------------+----------------------------------------+
                                           |
                                           v
+-----------------------------------------------------------------------------------+
|                                 DYNAMIC UI RE-RENDER                              |
|   Content Player immediately serves next content item in target difficulty level  |
|   and recommended sensory format (Video / Text / Interactive / Quiz).             |
+-----------------------------------------------------------------------------------+
```

---

## ⚡ Tech Stack & Modular Structure

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons.
- **Backend**: Node.js, Express, TypeScript, Prisma ORM.
- **Database**: SQLite (default zero-config local execution) / PostgreSQL (production compatible).
- **Testing**: Vitest unit test suite for adaptive pure functions & end-to-end integration tests.

### Directory Layout

```
AI-Personalized-Learning-Platform/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma              # User, Profile, Subject, Topic, ContentItem, Interaction
│   ├── src/
│   │   ├── auth/                      # JWT login, signup, role support (STUDENT, TEACHER, ADMIN)
│   │   ├── learnerProfile/            # VARK survey, diagnostic quiz, skill profiler
│   │   ├── services/adaptiveEngine/   # PURE FUNCTIONS: difficulty auto-adjustment & DAG path generator
│   │   │   ├── adaptiveEngine.ts
│   │   │   ├── pathGenerator.ts
│   │   │   └── adaptiveEngine.test.ts # Unit tests for difficulty & remedial triggers
│   │   ├── contentDelivery/           # Multi-format content catalog & interaction handler
│   │   ├── analytics/                 # Student mastery dashboard & teacher stuck student detector
│   │   ├── seed/                      # Seed script for 3 subjects & 5 difficulty levels
│   │   ├── index.ts                   # Express app server entry point
│   │   └── integration.test.ts        # End-to-end database feedback loop test
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/                # Navbar, OnboardingView, DashboardView, ContentDeliveryView, TeacherView
│   │   ├── services/                  # Type-safe API client (api.ts)
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

---

## 🚩 Flagged Assumptions

1. **Remedial Format Strategy**: When a student encounters 2 consecutive wrong answers, the adaptive engine reduces difficulty level by 1 **and** automatically rotates away from the failing delivery format to a complementary format (e.g. from dense text to an interactive parameter sandbox or video explainer).
2. **Prerequisite Mastery Threshold**: Topic nodes in a subject's learning path unlock once all direct prerequisite topics achieve a mastery score $\ge 70\%$.
3. **Rolling Window Size**: Rolling streak detection uses immediate consecutive right/wrong thresholds (3 right $\rightarrow$ $+1$, 2 wrong $\rightarrow$ $-1$) combined with rolling overall accuracy over the last 10 interactions.

---

## 🛠️ Quick Start Instructions

### 1. Backend Setup & Test Execution

```bash
cd backend
npm install

# Initialize Database Schema & Seed Realistic Data
npx prisma db push
npx tsx src/seed/seedData.ts

# Run Vitest Unit & Integration Tests (100% Pass Rate)
npm test

# Start Development Server (runs on http://localhost:5000)
npm run dev
```

### 2. Frontend Setup

```bash
cd frontend
npm install

# Start Vite Development Server (runs on http://localhost:3000)
npm run dev
```

---

## 🔑 Quick Demo Login Credentials

- **Demo Student**: `student@example.com` / `password123`
- **Demo Teacher**: `teacher@example.com` / `password123`
