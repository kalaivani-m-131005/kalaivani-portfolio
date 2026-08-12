import React from 'react';
import { resumeData } from '../data/resumeData';
import { Globe, CheckCircle2 } from 'lucide-react';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            09. COMMUNICATIONS
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
              9. LANGUAGES
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Spoken and written language proficiencies listed in resume.
            </p>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full self-start">
            Resume Section 09
          </span>
        </div>

        {/* Languages Cards Grid (No invented proficiency levels) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          {resumeData.languages.map((lang, idx) => (
            <div
              key={lang}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-card-dark flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">
                    LANGUAGE #0{idx + 1}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white tracking-wide">
                    {lang}
                  </h3>
                </div>
              </div>

              <div className="p-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
