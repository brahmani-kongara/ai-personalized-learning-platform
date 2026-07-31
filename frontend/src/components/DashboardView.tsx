import React, { useEffect, useState } from 'react';
import { fetchSubjects, fetchLearningPath, fetchStudentAnalytics } from '../services/api';
import { Brain, Flame, Clock, Award, AlertTriangle, Lock, Play, CheckCircle2, BookOpen, Layers } from 'lucide-react';
import { HeroSection } from './HeroSection';

interface DashboardViewProps {
  user: any;
  onSelectTopic: (topicId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ user, onSelectTopic }) => {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [learningPath, setLearningPath] = useState<any>(null);
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchSubjects(), fetchStudentAnalytics()])
      .then(([subList, analyticsData]) => {
        setSubjects(subList);
        setAnalytics(analyticsData);
        if (subList.length > 0) {
          setSelectedSubjectId(subList[0].id);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching dashboard data:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedSubjectId) {
      fetchLearningPath(selectedSubjectId)
        .then((pathData) => setLearningPath(pathData))
        .catch((err) => console.error('Error loading path:', err));
    }
  }, [selectedSubjectId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-400 font-medium">Loading Learner Analytics & Adaptive Path...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Cosmic Hero Section */}
      <HeroSection
        onStartLearning={() => {
          if (learningPath?.currentTopicId) {
            onSelectTopic(learningPath.currentTopicId);
          } else if (subjects.length > 0) {
            setSelectedSubjectId(subjects[0].id);
          }
        }}
        onExplorePath={() => {
          const el = document.getElementById('learning-path-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 space-y-8">

      
      {/* Top Banner Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Streak */}
        <div className="glass-card rounded-2xl p-5 flex items-center space-x-4 border-l-4 border-amber-500">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{analytics?.summary?.studyStreakDays || 1} Days</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Active Learning Streak</div>
          </div>
        </div>

        {/* Accuracy */}
        <div className="glass-card rounded-2xl p-5 flex items-center space-x-4 border-l-4 border-emerald-500">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{analytics?.summary?.overallAccuracy || 0}%</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Overall Accuracy</div>
          </div>
        </div>

        {/* Time Spent */}
        <div className="glass-card rounded-2xl p-5 flex items-center space-x-4 border-l-4 border-blue-500">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{analytics?.summary?.totalTimeMinutes || 0} mins</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Time Spent Practicing</div>
          </div>
        </div>

        {/* VARK Style & Skill */}
        <div className="glass-card rounded-2xl p-5 flex items-center space-x-4 border-l-4 border-purple-500">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <div className="text-base font-extrabold text-white">
              {analytics?.profile?.learningStyle || 'VISUAL'} Style
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Skill Level: {analytics?.profile?.overallSkill || 3} / 10
            </div>
          </div>
        </div>
      </div>

      {/* Weak Areas Alert Banner if any */}
      {analytics?.weakAreas && analytics.weakAreas.length > 0 && (
        <div className="bg-rose-950/40 border border-rose-800/60 rounded-2xl p-4 sm:p-5 flex items-start space-x-4">
          <AlertTriangle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-rose-200">Adaptive Alert: Attention Recommended</h4>
            <p className="text-xs text-slate-300">
              The engine detected conceptual difficulties in <span className="font-semibold text-rose-300">{analytics.weakAreas.map((w: any) => w.topicName).join(', ')}</span>.
              Remedial alternate format exercises have been inserted into your path.
            </p>
          </div>
        </div>
      )}

      {/* Subject Tabs */}
      <div id="learning-path-section" className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <Layers className="w-5 h-5 text-blue-400" />
              <span>Sequenced Learning Path</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Topologically ordered topic graph based on prerequisite dependencies and your rolling mastery score.
            </p>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
            {subjects.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubjectId(sub.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedSubjectId === sub.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>

        {/* Path Graph Nodes */}
        {learningPath?.path ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPath.path.map((node: any) => {
              const isLocked = node.status === 'LOCKED';
              const isCompleted = node.status === 'COMPLETED';
              const isCurrent = learningPath.currentTopicId === node.topicId;

              return (
                <div
                  key={node.topicId}
                  className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/40 shadow-lg shadow-blue-500/10'
                      : isCompleted
                      ? 'bg-emerald-950/20 border-emerald-800/40'
                      : isLocked
                      ? 'bg-slate-900/40 border-slate-800 opacity-60'
                      : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-600'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md">
                        Step {node.orderIndex}
                      </span>

                      {isCompleted && (
                        <span className="flex items-center space-x-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Mastered ({node.masteryScore}%)</span>
                        </span>
                      )}

                      {isCurrent && !isCompleted && (
                        <span className="flex items-center space-x-1 text-xs font-bold text-blue-400 bg-blue-950/80 border border-blue-800/60 px-2.5 py-0.5 rounded-full animate-pulse">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Active Challenge</span>
                        </span>
                      )}

                      {isLocked && (
                        <span className="flex items-center space-x-1 text-xs font-bold text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded-full">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Prerequisites Locked</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white leading-snug">{node.topicName}</h3>
                    
                    {/* Mastery Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                        <span>Mastery Progress</span>
                        <span>{node.masteryScore}%</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            isCompleted
                              ? 'bg-emerald-500'
                              : node.masteryScore > 0
                              ? 'bg-blue-500'
                              : 'bg-slate-700'
                          }`}
                          style={{ width: `${Math.max(5, node.masteryScore)}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 flex items-center justify-between pt-1">
                      <span>Target Level: {node.recommendedDifficulty}/10</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      disabled={isLocked}
                      onClick={() => onSelectTopic(node.topicId)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all ${
                        isCurrent
                          ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30'
                          : isCompleted
                          ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-800/40'
                          : isLocked
                          ? 'bg-slate-900 text-slate-500 cursor-not-allowed border border-slate-800'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isCompleted ? 'Review Topic' : isLocked ? 'Locked' : 'Start Adaptive Lesson'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400">Loading topic nodes...</div>
        )}
      </div>
    </div>
  </div>
  );
};
