import React, { useEffect, useState } from 'react';
import { fetchTeacherOverview } from '../services/api';
import { Users, AlertOctagon, CheckCircle2, ShieldAlert, Award, Search, Sparkles } from 'lucide-react';

export const TeacherView: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTeacherOverview()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load teacher overview:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-400 font-medium">Loading Teacher Class Analytics & Flagged Alerts...</p>
      </div>
    );
  }

  const metrics = data?.aggregateMetrics;
  const students = data?.students || [];

  const filteredStudents = students.filter((s: any) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-6 rounded-2xl border-l-4 border-purple-500">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-purple-950/80 border border-purple-800/50 rounded-full text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" />
            <span>Teacher & Educator Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Classroom Aggregate Analytics</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time monitoring of student learning paths, VARK distribution, and automatic flagging for struggling students.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search student by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Aggregate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="glass-card rounded-2xl p-5 border-l-4 border-blue-500 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{metrics?.totalStudents || 0}</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Total Enrolled Students</div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border-l-4 border-rose-500 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
            <AlertOctagon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-rose-400">{metrics?.stuckStudentsCount || 0}</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Flagged Stuck Students</div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border-l-4 border-emerald-500 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{metrics?.aggregateClassMastery || 0}%</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Average Class Mastery</div>
          </div>
        </div>
      </div>

      {/* Roster Table */}
      <div className="glass-card rounded-2xl overflow-hidden border border-slate-800">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <Users className="w-4 h-4 text-purple-400" />
            <span>Student Performance Roster</span>
          </h3>
          <span className="text-xs text-slate-400">{filteredStudents.length} Students</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/90 text-slate-400 uppercase font-bold tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3.5 px-4">Student Name</th>
                <th className="py-3.5 px-4">VARK Style</th>
                <th className="py-3.5 px-4">Avg Mastery</th>
                <th className="py-3.5 px-4">Accuracy</th>
                <th className="py-3.5 px-4">Interactions</th>
                <th className="py-3.5 px-4">Adaptive Intervention Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300 font-medium">
              {filteredStudents.map((st: any) => (
                <tr key={st.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-white">
                    {st.name}
                    <span className="block text-[10px] text-slate-500 font-normal">{st.email}</span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-800/50 text-purple-300 text-[10px] font-extrabold flex items-center space-x-1 w-max">
                      <Sparkles className="w-3 h-3" />
                      <span>{st.learningStyle}</span>
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-slate-900 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-blue-500 h-1.5 rounded-full"
                          style={{ width: `${Math.max(5, st.avgMastery)}%` }}
                        />
                      </div>
                      <span className="font-bold">{st.avgMastery}%</span>
                    </div>
                  </td>

                  <td className="py-4 px-4 font-bold">{st.accuracy}%</td>
                  <td className="py-4 px-4">{st.totalInteractions} attempts</td>

                  <td className="py-4 px-4">
                    {st.isStuck ? (
                      <div className="flex items-center space-x-2 text-rose-400 bg-rose-950/60 border border-rose-800/60 px-3 py-1.5 rounded-xl w-max">
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        <span className="font-bold text-[11px]">{st.stuckReason}</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-xl w-max">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span className="font-bold text-[11px]">On Track</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
