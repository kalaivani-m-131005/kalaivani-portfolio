import React from 'react';
import { resumeData } from '../data/resumeData';
import { Award, BookOpen, Sparkles, FileSpreadsheet } from 'lucide-react';

export const ProfessionalSummary: React.FC = () => {
  return (
    <section id="summary" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            01. EXECUTIVE OVERVIEW
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
          1. PROFESSIONAL SUMMARY
        </h2>

        {/* Cinematic Card */}
        <div className="relative p-8 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-card-dark overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />

          {/* Faithful Quote Text */}
          <blockquote className="relative z-10 text-gray-200 text-lg sm:text-xl leading-relaxed font-normal tracking-wide">
            "{resumeData.summary}"
          </blockquote>

          {/* Key Attributes Pills */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-white">Google Gemini</span>
                <span className="text-[11px] text-gray-400">Student Ambassador</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-white">Published Patent Author</span>
                <span className="text-[11px] text-gray-400">No. 202541025866 A</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-white">Scopus Contributor</span>
                <span className="text-[11px] text-gray-400">ICRDICCT'25 Conference</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-white">Academic Merit</span>
                <span className="text-[11px] text-gray-400">CGPA: 9.14 / 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
