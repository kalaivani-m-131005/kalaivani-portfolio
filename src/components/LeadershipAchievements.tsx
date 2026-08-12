import React from 'react';
import { resumeData } from '../data/resumeData';
import { Sparkles, Presentation, Users, FileText, Monitor, Trophy } from 'lucide-react';

export const LeadershipAchievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'gemini': return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'presentation': return <Presentation className="w-5 h-5 text-sky-400" />;
      case 'leadership': return <Users className="w-5 h-5 text-purple-400" />;
      case 'paper': return <FileText className="w-5 h-5 text-emerald-400" />;
      case 'project': return <Monitor className="w-5 h-5 text-amber-400" />;
      case 'award': return <Trophy className="w-5 h-5 text-rose-400" />;
      default: return <Trophy className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="achievements" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            06. HONORS & RECOGNITION
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
              6. LEADERSHIP & ACHIEVEMENTS
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Ambassadorships, event management leadership, paper presentations, and institutional honors.
            </p>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full self-start">
            6 Locked Items
          </span>
        </div>

        {/* 6 Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resumeData.achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-card-dark flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform shrink-0">
                {getIcon(item.iconType)}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#D4AF37] tracking-wider uppercase font-bold">
                    ITEM #0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                {item.detail && (
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {item.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
