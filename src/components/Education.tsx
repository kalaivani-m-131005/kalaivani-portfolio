import React from 'react';
import { resumeData } from '../data/resumeData';
import { GraduationCap, School, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            07. ACADEMICS
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
              7. EDUCATION
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Academic qualifications presented in exact resume hierarchy (B.E. preceding HSC).
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full self-start">
            B.E. CSE (CGPA: 9.14)
          </span>
        </div>

        {/* Education Items Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.education.map((edu, index) => (
            <div
              key={edu.degree}
              className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-card-dark relative flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {index === 0 ? (
                      <GraduationCap className="w-6 h-6 text-[#D4AF37]" />
                    ) : (
                      <School className="w-6 h-6 text-sky-400" />
                    )}
                  </div>
                  {edu.period && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {edu.period}
                    </span>
                  )}
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#D4AF37] tracking-wider uppercase font-bold block mb-1">
                    DEGREE RECORD #0{index + 1}
                  </span>
                  <h3 className="text-2xl font-display font-extrabold text-white tracking-wide">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium mt-1">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Score Metric Card */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 uppercase">
                  {edu.scoreLabel}
                </span>
                <span className="text-xl font-mono font-bold text-[#D4AF37]">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
