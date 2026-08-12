import React from 'react';
import { resumeData } from '../data/resumeData';
import { ArrowDown, FileText, Sparkles, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { hero } = resumeData;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Lights & Subtle Effects */}
      <div className="glow-ambient w-[500px] h-[500px] bg-[#D4AF37]/10 -top-40 left-1/2 -translate-x-1/2" />
      <div className="glow-ambient w-[350px] h-[350px] bg-[#9333EA]/10 bottom-10 -right-20" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono tracking-wide shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Google Gemini Student Ambassador (2026)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>CGPA: {hero.cgpa}</span>
          </div>
        </div>

        {/* Main Name Header */}
        <div className="space-y-3">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white uppercase">
            {hero.name}
          </h1>
          <p className="text-lg sm:text-2xl font-medium gold-gradient-text max-w-3xl mx-auto leading-relaxed">
            {hero.titles.join('  •  ')}
          </p>
        </div>

        {/* Subtitle & Academic Status */}
        <div className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg font-light leading-relaxed">
          <p>{hero.subtitle}</p>
          <p className="text-xs sm:text-sm font-mono text-gray-400 mt-1">
            V.S.B. College of Engineering Technical Campus, Coimbatore (2023 – 2027)
          </p>
        </div>

        {/* Key Resume Highlights Bar */}
        <div className="pt-2 pb-4">
          <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3 rounded-2xl glass-panel max-w-3xl mx-auto">
            <div className="px-3 py-2 text-center border-r border-white/5 last:border-0">
              <span className="block text-xl font-bold text-white font-mono">9.14</span>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">CGPA / 10</span>
            </div>
            <div className="px-3 py-2 text-center border-r border-white/5 last:border-0">
              <span className="block text-xl font-bold text-[#D4AF37] font-mono">2025410...</span>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">Patent Author</span>
            </div>
            <div className="px-3 py-2 text-center border-r border-white/5 last:border-0">
              <span className="block text-xl font-bold text-white font-mono">Scopus</span>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">ICRDICCT'25</span>
            </div>
            <div className="px-3 py-2 text-center">
              <span className="block text-xl font-bold text-[#D4AF37] font-mono">4</span>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">Internships</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89428] hover:from-[#E2B857] hover:to-[#D4AF37] text-black font-extrabold text-sm tracking-wider uppercase shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>{hero.primaryCtaText}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white font-bold text-sm tracking-wider uppercase border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#D4AF37]" />
            <span>{hero.secondaryCtaText}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
