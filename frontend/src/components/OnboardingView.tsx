import React, { useState, useEffect } from 'react';
import { fetchOnboardingQuestions, submitOnboarding } from '../services/api';
import { Brain, CheckCircle2, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

interface OnboardingViewProps {
  onComplete: (profile: any) => void;
}

export const OnboardingView: React.FC<OnboardingViewProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [questionsData, setQuestionsData] = useState<any>(null);

  // Form State
  const [varkAnswers, setVarkAnswers] = useState<Record<string, string>>({});
  const [paceAnswer, setPaceAnswer] = useState<string>('MODERATE');
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: VARK, 2: Pace & Skill, 3: Completed

  useEffect(() => {
    fetchOnboardingQuestions()
      .then((data) => {
        setQuestionsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching questions:', err);
        setLoading(false);
      });
  }, []);

  const handleVarkSelect = (qId: string, style: string) => {
    setVarkAnswers((prev) => ({ ...prev, [qId]: style }));
  };

  const handleDiagSelect = (qId: string, selectedOption: string) => {
    setDiagnosticAnswers((prev) => ({ ...prev, [qId]: selectedOption }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const formattedVark = Object.values(varkAnswers);
      const formattedDiag = questionsData.diagnosticQuiz.map((q: any) => ({
        id: q.id,
        topicTag: q.topicTag,
        isCorrect: diagnosticAnswers[q.id] === q.correct,
      }));

      const res = await submitOnboarding({
        varkAnswers: formattedVark,
        paceAnswer,
        diagnosticAnswers: formattedDiag,
      });

      setIsSubmitting(false);
      setStep(3);
      setTimeout(() => {
        onComplete(res.profile);
      }, 1800);
    } catch (err) {
      console.error('Failed to submit onboarding:', err);
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-400 font-medium">Loading Diagnostic Assessment...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-950/80 border border-blue-800/50 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-4 h-4" />
          <span>Learner Diagnostic & VARK Profiler</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Build Your Personalized AI Learning Path
        </h1>
        <p className="mt-2 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Answer a quick 2-minute questionnaire to calibrate your unique sensory learning style, baseline skill level, and study pace preference.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8 bg-slate-800 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-600 to-indigo-500 h-2.5 transition-all duration-500"
          style={{ width: step === 1 ? '35%' : step === 2 ? '75%' : '100%' }}
        />
      </div>

      {step === 1 && (
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-8">
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <Brain className="w-5 h-5 text-blue-400" />
            <span>Step 1: Learning Style Preference (VARK)</span>
          </h2>

          {questionsData?.varkQuestions.map((q: any, idx: number) => (
            <div key={q.id} className="space-y-4">
              <p className="text-slate-200 font-semibold text-base sm:text-lg">
                {idx + 1}. {q.question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt: any) => {
                  const selected = varkAnswers[q.id] === opt.style;
                  return (
                    <button
                      key={opt.style + opt.text}
                      type="button"
                      onClick={() => handleVarkSelect(q.id, opt.style)}
                      className={`text-left p-4 rounded-xl border text-sm font-medium transition-all ${
                        selected
                          ? 'bg-blue-600/30 border-blue-500 text-white ring-2 ring-blue-500/50'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span>{opt.text}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900/80 text-blue-400 ml-2">
                          {opt.style}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="flex justify-end pt-4">
            <button
              disabled={Object.keys(varkAnswers).length < questionsData?.varkQuestions.length}
              onClick={() => setStep(2)}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/30"
            >
              <span>Next: Diagnostic Skill Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-8">
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <span>Step 2: Diagnostic Baseline Quiz & Pace Preference</span>
          </h2>

          {/* Pace Selection */}
          <div className="space-y-3">
            <label className="text-slate-200 font-semibold text-sm">Preferred Learning & Practice Pace:</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { key: 'SLOW', label: 'Slow & Deliberate', desc: 'Focus on deep conceptual clarity' },
                { key: 'MODERATE', label: 'Moderate & Steady', desc: 'Balanced theory and exercises' },
                { key: 'FAST', label: 'Fast & Intensive', desc: 'Quick iterations and hard challenges' },
              ].map((p) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setPaceAnswer(p.key)}
                  className={`p-3.5 text-left rounded-xl border transition-all ${
                    paceAnswer === p.key
                      ? 'bg-blue-600/30 border-blue-500 text-white ring-2 ring-blue-500/50'
                      : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="font-bold text-sm">{p.label}</div>
                  <div className="text-xs text-slate-400 mt-1">{p.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Diagnostic Quiz Questions */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-slate-200">Diagnostic Knowledge Check:</h3>
            {questionsData?.diagnosticQuiz.map((dq: any, idx: number) => (
              <div key={dq.id} className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-xl space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-blue-400 uppercase tracking-wider">{dq.subject}</span>
                  <span className="text-slate-400">Tag: {dq.topicTag}</span>
                </div>
                <p className="text-slate-100 font-semibold text-sm sm:text-base">{idx + 1}. {dq.question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dq.options.map((opt: string) => {
                    const selected = diagnosticAnswers[dq.id] === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleDiagSelect(dq.id, opt)}
                        className={`text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                          selected
                            ? 'bg-indigo-600/40 border-indigo-400 text-white font-semibold'
                            : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-700/40'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 text-slate-400 hover:text-white text-sm font-medium"
            >
              Back
            </button>

            <button
              disabled={isSubmitting || Object.keys(diagnosticAnswers).length < questionsData?.diagnosticQuiz.length}
              onClick={handleSubmit}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/30"
            >
              {isSubmitting ? (
                <span>Generating Adaptive Profile...</span>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Generate Adaptive Profile</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="glass-card rounded-2xl p-12 text-center space-y-6 max-w-xl mx-auto">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">Learner Profile Calibrated!</h2>
          <p className="text-slate-300 text-sm">
            Your VARK sensory learning style, pace preference, and initial subject skill scores have been recorded.
            Redirecting to your adaptive learning path...
          </p>
        </div>
      )}
    </div>
  );
};
