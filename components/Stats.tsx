import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { STATS_DATA } from '../constants';
import { Award, ThumbsUp, Users } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <div className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Anos de Experiência', value: '10+', icon: <Award className="text-amber-500" size={32} /> },
              { label: 'Projetos Entregues', value: '2k+', icon: <Users className="text-primary-500" size={32} /> },
              { label: 'Satisfação', value: '98%', icon: <ThumbsUp className="text-green-500" size={32} /> },
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Projetos Recentes</h3>
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={STATS_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                  />
                  <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;