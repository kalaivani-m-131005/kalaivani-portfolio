import React from 'react';
import { resumeData } from '../data/resumeData';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Wrench,
  BrainCircuit,
  Layers,
} from 'lucide-react';

type SkillStyle = {
  icon: React.ReactNode;
  accent: string;
  bg: string;
  border: string;
  glow: string;
};

const skillStyles: Record<string, SkillStyle> = {
  Languages: {
    icon: <Code2 className="w-5 h-5" />,
    accent: 'text-[#D4AF37]',
    bg: 'bg-[#D4AF37]/10',
    border: 'border-[#D4AF37]/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]',
  },
  Frontend: {
    icon: <Layout className="w-5 h-5" />,
    accent: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(56,189,248,0.08)]',
  },
  Backend: {
    icon: <Server className="w-5 h-5" />,
    accent: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(52,211,153,0.08)]',
  },
  Databases: {
    icon: <Database className="w-5 h-5" />,
    accent: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(192,132,252,0.08)]',
  },
  'Core CS': {
    icon: <Cpu className="w-5 h-5" />,
    accent: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(251,146,60,0.08)]',
  },
  Tools: {
    icon: <Wrench className="w-5 h-5" />,
    accent: 'text-rose-400',
    bg: 'bg-rose-400/10',
    border: 'border-rose-400/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(251,113,133,0.08)]',
  },
  'AI & Analytics': {
    icon: <BrainCircuit className="w-5 h-5" />,
    accent: 'text-teal-400',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(45,212,191,0.08)]',
  },
};

export const TechnicalSkills: React.FC = () => {
  const totalSkills = resumeData.skills.reduce(
    (total, category) => total + category.items.length,
    0
  );

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden py-20 sm:py-24 px-4"
    >
      {/* Ambient cinematic glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[140px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase whitespace-nowrap">
            02. Capabilities
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div className="max-w-3xl">
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase"
            >
              Technical Skills
            </h2>

            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
              A structured technology stack spanning software development,
              full-stack engineering, computer science fundamentals, and
              artificial intelligence.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-[#D4AF37]" />
                <span className="font-mono text-xs font-bold text-white">
                  {resumeData.skills.length}
                </span>
              </div>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.14em] text-gray-600">
                Domains
              </span>
            </div>

            <div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] px-4 py-2.5">
              <div className="font-mono text-xs font-bold text-[#D4AF37]">
                {totalSkills}
              </div>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.14em] text-gray-600">
                Technologies
              </span>
            </div>
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumeData.skills.map((skillGroup, index) => {
            const style = skillStyles[skillGroup.category] ?? skillStyles.Languages;

            return (
              <article
                key={skillGroup.category}
                className={`group relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045] ${style.glow}`}
              >
                {/* Hover accent line */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b ${style.accent.replace(
                    'text-',
                    'from-'
                  )} via-transparent to-transparent transition-transform duration-500 group-hover:scale-y-100`}
                />

                {/* Background number */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 font-mono text-5xl font-bold text-white/[0.025]"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Header */}
                <div className="relative flex items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${style.border} ${style.bg} ${style.accent} transition-transform duration-300 group-hover:scale-105`}
                    >
                      {style.icon}
                    </div>

                    <div>
                      <h3 className="font-display text-base font-bold text-white">
                        {skillGroup.category}
                      </h3>

                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gray-600">
                        {skillGroup.items.length} Skills
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill pills */}
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border border-white/[0.08] bg-black/[0.18] px-3 py-1.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className={`font-mono text-[8px] uppercase tracking-[0.16em] ${style.accent}`}>
                    Technology Stack
                  </span>

                  <span className={`h-1.5 w-1.5 rounded-full ${style.bg}`} />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom strip */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs sm:text-sm text-gray-500">
            Focused on building scalable applications with strong software
            engineering fundamentals.
          </p>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D4AF37]/70">
            Continuous Learning
          </span>
        </div>
      </div>
    </section>
  );
};