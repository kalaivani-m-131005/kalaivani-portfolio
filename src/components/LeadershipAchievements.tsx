import React from 'react';
import { resumeData } from '../data/resumeData';
import {
  Sparkles,
  Presentation,
  Users,
  FileText,
  Monitor,
  Trophy,
  ArrowUpRight,
} from 'lucide-react';

const iconMap: Record<
  string,
  { icon: React.ReactNode; accent: string; bg: string; border: string }
> = {
  gemini: {
    icon: <Sparkles className="w-5 h-5" />,
    accent: 'text-[#D4AF37]',
    bg: 'bg-[#D4AF37]/10',
    border: 'border-[#D4AF37]/25',
  },
  presentation: {
    icon: <Presentation className="w-5 h-5" />,
    accent: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/25',
  },
  leadership: {
    icon: <Users className="w-5 h-5" />,
    accent: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/25',
  },
  paper: {
    icon: <FileText className="w-5 h-5" />,
    accent: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/25',
  },
  project: {
    icon: <Monitor className="w-5 h-5" />,
    accent: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/25',
  },
  award: {
    icon: <Trophy className="w-5 h-5" />,
    accent: 'text-rose-400',
    bg: 'bg-rose-400/10',
    border: 'border-rose-400/25',
  },
};

export const LeadershipAchievements: React.FC = () => {
  const achievements = resumeData.achievements;

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative overflow-hidden py-20 sm:py-24 px-4"
    >
      {/* Cinematic ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-[#D4AF37]/[0.03] blur-[130px]"
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase whitespace-nowrap">
            06. Honors & Recognition
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div className="max-w-3xl">
            <h2
              id="achievements-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase"
            >
              Leadership & Achievements
            </h2>

            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
              Recognition, leadership, research presentations, and academic
              achievements earned throughout my academic journey.
            </p>
          </div>

          {/* Dynamic count */}
          <div className="inline-flex items-center self-start lg:self-auto gap-2.5 px-4 py-2 rounded-full bg-white/[0.035] border border-white/10">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.7)]" />

            <span className="font-mono text-[10px] sm:text-xs tracking-wider text-gray-300 uppercase">
              {achievements.length} Recognitions
            </span>
          </div>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

          {achievements.map((item, index) => {
            const style =
              iconMap[item.iconType] ?? iconMap.award;

            return (
              <article
                key={`${item.title}-${index}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045] hover:shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              >
                {/* Hover accent */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-current via-current/30 to-transparent ${style.accent} transition-transform duration-500 group-hover:scale-y-100`}
                />

                <div className="p-5 sm:p-6">

                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">

                    {/* Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${style.border} ${style.bg} ${style.accent} transition-transform duration-300 group-hover:scale-105`}
                    >
                      {style.icon}
                    </div>

                    {/* Entry number */}
                    <span className="font-mono text-[9px] tracking-[0.2em] text-gray-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6">

                    {/* Category */}
                    <span
                      className={`font-mono text-[9px] uppercase tracking-[0.18em] ${style.accent} opacity-80`}
                    >
                      {getCategory(item.iconType)}
                    </span>

                    {/* Title */}
                    <h3 className="mt-2 text-base sm:text-lg font-display font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                      {item.title}
                    </h3>

                    {/* Detail */}
                    {item.detail && (
                      <p className="mt-2.5 text-xs sm:text-sm leading-6 text-gray-500">
                        {item.detail}
                      </p>
                    )}
                  </div>

                  {/* Bottom */}
                  <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-white/[0.07]">

                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gray-700">
                      Academic & Professional Milestone
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      className={`h-4 w-4 text-gray-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${style.accent}`}
                    />
                  </div>

                </div>
              </article>
            );
          })}

        </div>

        {/* Bottom credibility strip */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">

          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10">
              <Trophy className="h-4 w-4 text-[#D4AF37]" />
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-300">
                Continuous learning & leadership
              </p>

              <p className="mt-0.5 text-[10px] font-mono text-gray-600">
                Recognition · Research · Leadership · Innovation
              </p>
            </div>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-600">
            Beyond Academics
          </span>

        </div>

      </div>
    </section>
  );
};

/* Achievement category label */
const getCategory = (type: string): string => {
  switch (type) {
    case 'gemini':
      return 'Technology Recognition';

    case 'presentation':
      return 'Research Presentation';

    case 'leadership':
      return 'Leadership';

    case 'paper':
      return 'Technical Presentation';

    case 'project':
      return 'Project Showcase';

    case 'award':
      return 'Academic Recognition';

    default:
      return 'Achievement';
  }
};