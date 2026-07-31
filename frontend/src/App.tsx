import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { OnboardingView } from './components/OnboardingView';
import { DashboardView } from './components/DashboardView';
import { ContentDeliveryView } from './components/ContentDeliveryView';
import { TeacherView } from './components/TeacherView';
import { AuthModal } from './components/AuthModal';
import { fetchCurrentProfile } from './services/api';

export function App() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTabState] = useState<'onboarding' | 'dashboard' | 'content' | 'teacher'>(() => {
    const savedTab = localStorage.getItem('activeTab');
    return (savedTab as any) || 'dashboard';
  });
  const [selectedTopicId, setSelectedTopicId] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const setActiveTab = (tab: 'onboarding' | 'dashboard' | 'content' | 'teacher') => {
    localStorage.setItem('activeTab', tab);
    setActiveTabState(tab);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchCurrentProfile()
        .then((profileData) => {
          const storedUser = localStorage.getItem('user');
          const userData = storedUser ? JSON.parse(storedUser) : { name: 'Learner', role: 'STUDENT' };
          const fullUser = { ...userData, profile: profileData };
          setUser(fullUser);
          
          const savedTab = localStorage.getItem('activeTab');
          if (!savedTab) {
            if (fullUser.role === 'TEACHER') {
              setActiveTab('teacher');
            } else if (fullUser.role === 'STUDENT' && !fullUser.profile) {
              setActiveTab('onboarding');
            } else {
              setActiveTab('dashboard');
            }
          }
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          localStorage.removeItem('activeTab');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const handleAuthSuccess = (data: { token: string; user: any }) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    setUser(data.user);

    // If student has no profile yet, route to onboarding, otherwise direct to dashboard/teacher
    if (data.user.role === 'STUDENT' && !data.user.profile) {
      setActiveTab('onboarding');
    } else if (data.user.role === 'TEACHER') {
      setActiveTab('teacher');
    } else {
      setActiveTab('dashboard');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('activeTab');
    setUser(null);
  };

  const handleSelectTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    setActiveTab('content');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <AuthModal onSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={handleLogout}
      />

      <main className="flex-1 pb-12">
        {activeTab === 'onboarding' && (
          <OnboardingView
            onComplete={(updatedProfile) => {
              setUser((prev: any) => ({ ...prev, profile: updatedProfile }));
              setActiveTab('dashboard');
            }}
          />
        )}

        {activeTab === 'dashboard' && (
          <DashboardView
            user={user}
            onSelectTopic={handleSelectTopic}
          />
        )}

        {activeTab === 'content' && (
          <ContentDeliveryView
            topicId={selectedTopicId}
            onBackToDashboard={() => setActiveTab('dashboard')}
          />
        )}

        {activeTab === 'teacher' && <TeacherView />}
      </main>

      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        AI Adaptive Learning Platform &copy; 2026 — Dynamic ZPD Difficulty Adjustment Engine
      </footer>
    </div>
  );
}
