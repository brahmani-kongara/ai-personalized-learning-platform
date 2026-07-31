"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const authController_js_1 = __importDefault(require("./auth/authController.js"));
const learnerProfileController_js_1 = __importDefault(require("./learnerProfile/learnerProfileController.js"));
const contentDeliveryController_js_1 = __importDefault(require("./contentDelivery/contentDeliveryController.js"));
const analyticsController_js_1 = __importDefault(require("./analytics/analyticsController.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// API Routes
app.use('/api/auth', authController_js_1.default);
app.use('/api/learner-profile', learnerProfileController_js_1.default);
app.use('/api/content', contentDeliveryController_js_1.default);
app.use('/api/analytics', analyticsController_js_1.default);
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
