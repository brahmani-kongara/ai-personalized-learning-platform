import React, { useState } from 'react';
import { loginUser, registerUser } from '../services/api';
import { Brain, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';

interface AuthModalProps {
  onSuccess: (data: { token: string; user: any }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'STUDENT' | 'TEACHER'>('STUDENT');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const res = await loginUser(email, password);
        onSuccess(res);
      } else {
        const res = await registerUser(email, password, name, role);
        onSuccess(res);
      }
    } catch (err: any) {
      setError(err.message || 'Authentication error');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (demoEmail: string) => {
    setError('');
    setLoading(true);
    try {
      const res = await loginUser(demoEmail, 'password123');
      onSuccess(res);
    } catch (err: any) {
      setError(err.message || 'Demo login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
      <div className="glass-card w-full max-w-md rounded-3xl p-8 space-y-6 shadow-2xl border border-slate-700/80">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-black text-white">
            {isLogin ? 'Welcome Back' : 'Create Adaptive Account'}
          </h2>
          <p className="text-xs text-slate-400">
            {isLogin ? 'Log in to continue your personalized learning path' : 'Sign up to start your adaptive learning journey'}
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs font-semibold text-center">
            {error}
          </div>
        )}

        {/* Demo Login Quick Buttons & Credentials Info */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <span>Built-in Demo Credentials:</span>
            <span className="text-[10px] text-blue-400 font-normal lowercase">Password: password123</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setEmail('student@example.com');
                setPassword('password123');
                handleDemoLogin('student@example.com');
              }}
              className="py-2.5 px-3 bg-blue-950/80 hover:bg-blue-900 border border-blue-800/80 text-blue-300 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center space-y-0.5 group shadow-sm"
            >
              <div className="flex items-center space-x-1.5">
                <UserCheck className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Demo Student</span>
              </div>
              <span className="text-[10px] font-normal text-slate-400">student@example.com</span>
            </button>
            
            <button
              type="button"
              onClick={() => {
                setEmail('teacher@example.com');
                setPassword('password123');
                handleDemoLogin('teacher@example.com');
              }}
              className="py-2.5 px-3 bg-purple-950/80 hover:bg-purple-900 border border-purple-800/80 text-purple-300 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center space-y-0.5 group shadow-sm"
            >
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>Demo Teacher</span>
              </div>
              <span className="text-[10px] font-normal text-slate-400">teacher@example.com</span>
            </button>
          </div>
        </div>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-slate-800"></div>
          <span className="flex-shrink mx-3 text-[10px] uppercase font-bold text-slate-500">Or use email</span>
          <div className="flex-grow border-t border-slate-800"></div>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Rivera"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@example.com"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Account Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="STUDENT">Student</option>
                <option value="TEACHER">Teacher / Admin</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm"
          >
            {loading ? 'Authenticating...' : isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs text-slate-400 hover:text-blue-400 font-semibold"
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already registered? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};
