import React from 'react';
import { Brain, User, LogOut, Flame, Sparkles, LayoutDashboard, PlayCircle, Users } from 'lucide-react';

interface NavbarProps {
  user: any;
  activeTab: 'onboarding' | 'dashboard' | 'content' | 'teacher';
  setActiveTab: (tab: 'onboarding' | 'dashboard' | 'content' | 'teacher') => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, activeTab, setActiveTab, onLogout }) => {
  return (
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="font-extrabold text-lg text-white tracking-tight flex items-center gap-1.5">
              Adaptive<span className="text-blue-500">Path</span> AI
            </span>
            <span className="text-xs text-slate-400 block -mt-1 font-medium">Personalized Education Engine</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        {user && (
          <nav className="hidden md:flex items-center space-x-1 bg-slate-800/60 p-1.5 rounded-xl border border-slate-700/50">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Learner Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('content')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'content'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <PlayCircle className="w-4 h-4" />
              <span>Adaptive Player</span>
            </button>

            <button
              onClick={() => setActiveTab('onboarding')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'onboarding'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Skill Survey</span>
            </button>

            {(user.role === 'TEACHER' || user.role === 'ADMIN') && (
              <button
                onClick={() => setActiveTab('teacher')}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'teacher'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Teacher Portal</span>
              </button>
            )}
          </nav>
        )}

        {/* User Stats & Profile */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* Learning Style Tag */}
              {user.profile && (
                <div className="hidden lg:flex items-center space-x-1.5 bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs px-3 py-1 rounded-full font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>VARK: {user.profile.learningStyle}</span>
                </div>
              )}

              {/* User Dropdown / Role */}
              <div className="flex items-center space-x-3 bg-slate-800/70 border border-slate-700/60 px-3 py-1.5 rounded-xl">
                <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold text-sm">
                  {user.name[0].toUpperCase()}
                </div>
                <div className="text-left hidden sm:block">
                  <span className="text-xs font-semibold text-slate-200 block">{user.name}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block -mt-0.5">
                    {user.role}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  title="Logout"
                  className="text-slate-400 hover:text-rose-400 transition-colors p-1"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <span className="text-xs text-slate-400">Guest Mode</span>
          )}
        </div>
      </div>
    </header>
  );
};
