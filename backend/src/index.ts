import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authController from './auth/authController.js';
import learnerProfileController from './learnerProfile/learnerProfileController.js';
import contentDeliveryController from './contentDelivery/contentDeliveryController.js';
import analyticsController from './analytics/analyticsController.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authController);
app.use('/api/learner-profile', learnerProfileController);
app.use('/api/content', contentDeliveryController);
app.use('/api/analytics', analyticsController);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'AI Personalized Learning Platform Backend',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Adaptive Learning Backend running on http://localhost:${PORT}`);
});
