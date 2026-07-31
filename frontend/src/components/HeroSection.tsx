import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, ArrowRight, Flame, ShieldCheck, Zap, Layers } from 'lucide-react';
import { CosmicOrb } from './CosmicOrb';

interface HeroSectionProps {
  onStartLearning: () => void;
  onExplorePath: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLearning,
  onExplorePath,
}) => {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & CTA */}
        <motion.div
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-950/80 to-purple-950/80 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-300 shadow-inner"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Powered by Zone of Proximal Development Engine</span>
            <span className="bg-blue-600/40 text-blue-200 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold">v2.4</span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Master Any Skill with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Cosmic Precision
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience an intelligent learning universe that dynamically tailors content, balances cognitive load, and transforms complex concepts into visual mastery.
            </p>
          </div>

          {/* Key Value Pill Tags */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300 font-medium">
            <div className="flex items-center space-x-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl">
              <Brain className="w-4 h-4 text-purple-400" />
              <span>VARK Modality Tuning</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Real-Time ZPD Scaling</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Adaptive Mastery Graph</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onStartLearning}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm rounded-2xl shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center space-x-2 group hover:scale-[1.02]"
            >
              <span>Launch Adaptive Practice</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExplorePath}
              className="w-full sm:w-auto px-7 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-bold text-sm rounded-2xl transition-all flex items-center justify-center space-x-2"
            >
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Explore Knowledge Graph</span>
            </button>
          </div>

          {/* Live Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-900 max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white">99.2%</div>
              <div className="text-[11px] text-slate-400 font-medium">Concept Retention</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-cyan-400">3.4x</div>
              <div className="text-[11px] text-slate-400 font-medium">Faster Mastery</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-purple-400">Real-time</div>
              <div className="text-[11px] text-slate-400 font-medium">Difficulty Adjust</div>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Cosmic Orb Container with Floating Stats */}
        <motion.div
          className="lg:col-span-5 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Cosmic Orb Component */}
          <div className="w-full max-w-[480px] aspect-square relative">
            <CosmicOrb interactive={true} />

            {/* Floating Glass Cards around Orb */}
            <motion.div
              className="absolute -top-2 -left-4 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 p-3 rounded-2xl shadow-xl flex items-center space-x-3 hidden sm:flex pointer-events-none"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Visual & Kinesthetic</div>
                <div className="text-[10px] text-slate-400">Adaptive Format Active</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-6 -right-4 bg-slate-900/80 backdrop-blur-md border border-purple-500/30 p-3 rounded-2xl shadow-xl flex items-center space-x-3 hidden sm:flex pointer-events-none"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Optimal ZPD Flow</div>
                <div className="text-[10px] text-slate-400">Difficulty: 7.2 / 10</div>
              </div>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </div>
  );
};
