import React, { useEffect, useState } from 'react';
import { fetchNextAdaptiveContent, recordInteraction } from '../services/api';
import { PlayCircle, FileText, Sliders, HelpCircle, ArrowRight, RefreshCw, CheckCircle, XCircle, Sparkles, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface ContentDeliveryViewProps {
  topicId: string;
  onBackToDashboard: () => void;
}

export const ContentDeliveryView: React.FC<ContentDeliveryViewProps> = ({ topicId, onBackToDashboard }) => {
  const [loading, setLoading] = useState(true);
  const [contentPayload, setContentPayload] = useState<any>(null);
  const [selectedFormat, setSelectedFormat] = useState<'VIDEO' | 'TEXT' | 'INTERACTIVE' | 'QUIZ'>('TEXT');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [interactiveValue, setInteractiveValue] = useState<number>(50);
  const [feedback, setFeedback] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());

  const loadContent = () => {
    setLoading(true);
    setFeedback(null);
    setSelectedAnswer('');
    setStartTime(Date.now());

    fetchNextAdaptiveContent(topicId)
      .then((data) => {
        setContentPayload(data);
        if (data?.contentItem?.format) {
          setSelectedFormat(data.contentItem.format);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching content:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (topicId) {
      loadContent();
    }
  }, [topicId]);

  const handleAnswerSubmit = async () => {
    if (!contentPayload?.contentItem) return;

    setIsSubmitting(true);
    const questions = contentPayload.contentItem.questions || [];
    const question = questions[currentQuestionIdx];
    const isCorrect = selectedAnswer === question?.correctAnswer;
    const timeSpentSec = Math.max(5, Math.round((Date.now() - startTime) / 1000));

    try {
      const res = await recordInteraction({
        topicId,
        contentItemId: contentPayload.contentItem.id,
        questionId: question?.id,
        selectedAnswer,
        isCorrect,
        timeSpentSec,
        currentDifficulty: contentPayload.contentItem.difficulty,
        format: selectedFormat,
      });

      setFeedback({
        isCorrect,
        explanation: question?.explanation,
        adaptiveResult: res.adaptiveResult,
      });
      setIsSubmitting(false);
    } catch (err) {
      console.error('Failed to submit interaction:', err);
      setIsSubmitting(false);
    }
  };

  const handleNextLesson = () => {
    loadContent();
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-400 font-medium">Selecting Optimal Adaptive Content Format...</p>
      </div>
    );
  }

  const item = contentPayload?.contentItem;
  const questions = item?.questions || [];
  const question = questions[currentQuestionIdx];
  const adaptiveInfo = contentPayload?.adaptiveResult;

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-5 rounded-2xl">
        <div>
          <button
            onClick={onBackToDashboard}
            className="text-xs text-slate-400 hover:text-white font-medium mb-1 inline-flex items-center space-x-1"
          >
            ← Back to Path Overview
          </button>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white">{item?.title || 'Adaptive Content Lesson'}</h1>
          <p className="text-xs text-slate-400 mt-0.5">{item?.summary}</p>
        </div>

        {/* Difficulty Badge */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="bg-slate-800/90 border border-slate-700 px-3.5 py-1.5 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Current Level</span>
            <span className="text-lg font-black text-blue-400">{item?.difficulty || 3} / 10</span>
          </div>

          <div className="bg-slate-800/90 border border-slate-700 px-3.5 py-1.5 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Engine Recommendation</span>
            <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1 mt-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{adaptiveInfo?.recommendedFormat || 'TEXT'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Adaptive Real-Time Banner if trigger occurred */}
      {feedback?.adaptiveResult?.difficultyChanged && (
        <div className={`p-4 rounded-2xl border flex items-center space-x-4 animate-bounce ${
          feedback.adaptiveResult.actionRequired === 'INCREASE_DIFFICULTY'
            ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
            : 'bg-amber-950/60 border-amber-500/60 text-amber-200'
        }`}>
          {feedback.adaptiveResult.actionRequired === 'INCREASE_DIFFICULTY' ? (
            <TrendingUp className="w-6 h-6 text-emerald-400 shrink-0" />
          ) : (
            <TrendingDown className="w-6 h-6 text-amber-400 shrink-0" />
          )}
          <div>
            <h4 className="text-sm font-extrabold">Adaptive Engine Adjusted Difficulty</h4>
            <p className="text-xs opacity-90">{feedback.adaptiveResult.adjustmentReason}</p>
          </div>
        </div>
      )}

      {/* Format Selection Tabs (Multi-Format Rendering) */}
      <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
        <span className="text-xs font-bold text-slate-400 px-3 hidden sm:inline">Choose Modality:</span>
        <div className="flex items-center space-x-1 w-full sm:w-auto">
          {[
            { fmt: 'TEXT', icon: FileText, label: 'Text Summary' },
            { fmt: 'VIDEO', icon: PlayCircle, label: 'Video Explainer' },
            { fmt: 'INTERACTIVE', icon: Sliders, label: 'Interactive Sandbox' },
            { fmt: 'QUIZ', icon: HelpCircle, label: 'Practice Quiz' },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = selectedFormat === tab.fmt;
            const isEngineRecommended = adaptiveInfo?.recommendedFormat === tab.fmt;

            return (
              <button
                key={tab.fmt}
                onClick={() => setSelectedFormat(tab.fmt as any)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex-1 sm:flex-initial justify-center ${
                  active
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {isEngineRecommended && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-1" title="Recommended for your style" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Render Area based on selected format */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
        
        {/* FORMAT 1: TEXT SUMMARY */}
        {selectedFormat === 'TEXT' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-400 text-sm font-bold">
              <FileText className="w-4 h-4" />
              <span>Comprehensive Text Lesson</span>
            </div>
            <div className="prose prose-invert max-w-none text-slate-200 text-sm sm:text-base leading-relaxed bg-slate-900/60 p-6 rounded-xl border border-slate-800">
              <p className="whitespace-pre-line">{item?.textContent || item?.summary}</p>
            </div>
          </div>
        )}

        {/* FORMAT 2: VIDEO EXPLAINER */}
        {selectedFormat === 'VIDEO' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-400 text-sm font-bold">
              <PlayCircle className="w-4 h-4" />
              <span>Visual & Auditory Video Explainer</span>
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
              {item?.videoUrl ? (
                <iframe
                  className="w-full h-full"
                  src={item.videoUrl}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="text-center p-8">
                  <PlayCircle className="w-16 h-16 text-blue-500 mx-auto opacity-70 mb-2 animate-pulse" />
                  <p className="text-slate-300 font-bold">Interactive Video Stream Ready</p>
                  <p className="text-xs text-slate-500 mt-1">High-definition animated visual explainer at Level {item?.difficulty}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* FORMAT 3: INTERACTIVE SANDBOX */}
        {selectedFormat === 'INTERACTIVE' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-purple-400 text-sm font-bold">
              <Sliders className="w-4 h-4" />
              <span>Kinesthetic Interactive Parameter Sandbox</span>
            </div>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-purple-500/30 space-y-6">
              <p className="text-xs text-slate-300">
                {item?.interactiveData?.instruction || 'Adjust the dynamic slider controls below to calibrate the equation parameters.'}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>Parameter Input Value:</span>
                  <span className="text-purple-400 text-base">{interactiveValue}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={interactiveValue}
                  onChange={(e) => setInteractiveValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="p-4 bg-purple-950/30 border border-purple-800/40 rounded-xl flex items-center justify-between">
                <span className="text-xs text-slate-300">Sandbox Equation Output:</span>
                <span className="text-sm font-mono font-bold text-purple-300">
                  f({interactiveValue}) = {interactiveValue * (item?.difficulty || 3)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* FORMAT 4: PRACTICE QUIZ / DIAGNOSTIC QUESTION */}
        <div className="pt-4 border-t border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <span>Adaptive Question Check (Level {item?.difficulty})</span>
            </h3>
            {feedback && (
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center space-x-1 ${
                feedback.isCorrect ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
              }`}>
                {feedback.isCorrect ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                <span>{feedback.isCorrect ? 'Correct Answer!' : 'Incorrect'}</span>
              </span>
            )}
          </div>

          {question ? (
            <div className="space-y-4 bg-slate-900/40 p-5 rounded-xl border border-slate-800">
              <p className="text-sm sm:text-base font-semibold text-slate-100">{question.prompt}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {question.options.map((opt: string) => {
                  const selected = selectedAnswer === opt;
                  return (
                    <button
                      key={opt}
                      disabled={!!feedback}
                      onClick={() => setSelectedAnswer(opt)}
                      className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                        selected
                          ? 'bg-blue-600/40 border-blue-400 text-white font-bold ring-2 ring-blue-500/50'
                          : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700/60'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {!feedback ? (
                <div className="flex justify-end pt-2">
                  <button
                    disabled={!selectedAnswer || isSubmitting}
                    onClick={handleAnswerSubmit}
                    className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-blue-600/30"
                  >
                    <span>{isSubmitting ? 'Recording...' : 'Submit Answer'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-slate-100 block">Explanation:</span>
                    <p>{feedback.explanation}</p>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNextLesson}
                      className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30"
                    >
                      <span>Fetch Next Adaptive Item</span>
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-xs text-slate-400 italic">No direct questions attached to this item. Review concept above.</p>
          )}
        </div>
      </div>
    </div>
  );
};
