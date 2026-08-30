
import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import {
  Layers,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Terminal,
  Code2,
  ExternalLink,
  ShieldCheck,
  Database,
  BrainCircuit,
  Monitor,
} from 'lucide-react';

type ProjectTab =
  | 'overview'
  | 'features'
  | 'architecture'
  | 'contribution';

export const Projects: React.FC = () => {
  const { project } = resumeData;

  const [activeTab, setActiveTab] =
    useState<ProjectTab>('overview');

  const tabs = [
    {
      id: 'overview' as ProjectTab,
      label: 'Overview',
      icon: Layers,
    },
    {
      id: 'features' as ProjectTab,
      label: 'Features',
      icon: Cpu,
    },
    {
      id: 'architecture' as ProjectTab,
      label: 'Architecture',
      icon: Terminal,
    },
    {
      id: 'contribution' as ProjectTab,
      label: 'My Contribution',
      icon: Code2,
    },
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden py-20 sm:py-24 px-4"
    >
      {/* Cinematic ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-[#D4AF37]/[0.035] blur-[130px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase whitespace-nowrap">
            04. Featured Work
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
        </div>

        {/* Section heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div className="max-w-3xl">
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase"
            >
              Featured Project
            </h2>

            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
              An AI-powered full-stack platform combining career tools,
              intelligent feedback, authentication, and real-time communication.
            </p>
          </div>

          <div className="inline-flex items-center self-start lg:self-auto gap-2.5 px-4 py-2 rounded-full bg-[#D4AF37]/[0.06] border border-[#D4AF37]/20">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]" />

            <span className="font-mono text-[10px] sm:text-xs tracking-wider text-[#D4AF37] uppercase">
              Main Resume Project
            </span>
          </div>
        </div>

        {/* Main project container */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-md shadow-[0_25px_90px_rgba(0,0,0,0.35)]">

          {/* Top gold accent */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent"
          />

          {/* Project Hero */}
          <div className="relative p-6 sm:p-8 lg:p-10 border-b border-white/10 bg-gradient-to-br from-[#14141d] via-[#101016] to-[#0b0b0e]">

            {/* Decorative grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative">
              {/* Project status */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] font-mono font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  AI-Powered
                </span>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-mono uppercase tracking-wider">
                  Full-Stack
                </span>
              </div>

              {/* Project title */}
              <h3 className="max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                {project.title}
              </h3>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.045] border border-white/10 text-[11px] font-mono text-gray-300 transition-colors duration-300 hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tab navigation */}
          <div
            role="tablist"
            aria-label="Project information"
            className="flex overflow-x-auto border-b border-white/10 bg-black/30 scrollbar-hide"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative flex shrink-0 items-center gap-2
                    px-5 sm:px-6 py-4
                    text-[10px] sm:text-xs
                    font-mono font-semibold uppercase tracking-wider
                    transition-all duration-300
                    ${isActive
                      ? 'text-[#D4AF37] bg-white/[0.035]'
                      : 'text-gray-500 hover:text-gray-200 hover:bg-white/[0.02]'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>

                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.7)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="p-5 sm:p-7 lg:p-8">

            {/* OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-5 w-1 rounded-full bg-[#D4AF37]" />

                    <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
                      Project Scope
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {project.points.map((point, index) => (
                      <div
                        key={index}
                        className="group flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.025] hover:bg-white/[0.045] hover:border-[#D4AF37]/20 transition-all duration-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />

                        <p className="text-sm leading-6 text-gray-300">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Problem / Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="p-5 rounded-2xl border border-rose-500/15 bg-rose-500/[0.035]">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-4 h-4 text-rose-400" />

                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-rose-400">
                        Problem
                      </h4>
                    </div>

                    <p className="text-sm leading-6 text-gray-400">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.035]">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-emerald-400" />

                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-emerald-400">
                        Solution
                      </h4>
                    </div>

                    <p className="text-sm leading-6 text-gray-400">
                      {project.solution}
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* FEATURES */}
            {activeTab === 'features' && (
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-5 w-1 rounded-full bg-[#D4AF37]" />

                  <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
                    Core Capabilities
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="group flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.025] hover:border-[#D4AF37]/25 hover:bg-white/[0.045] transition-all duration-300"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10 font-mono text-[10px] font-bold text-[#D4AF37]">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="text-sm leading-6 text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ARCHITECTURE */}
            {activeTab === 'architecture' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-1 rounded-full bg-[#D4AF37]" />

                    <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
                      System Architecture
                    </h4>
                  </div>

                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">
                    MERN + Gemini
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  <ArchitectureCard
                    icon={<Monitor className="w-4 h-4" />}
                    title="Frontend Layer"
                    description="React.js with TypeScript for structured, component-based user interfaces and state management."
                  />

                  <ArchitectureCard
                    icon={<Terminal className="w-4 h-4" />}
                    title="Backend & API"
                    description="Node.js and Express.js powering RESTful APIs and server-side application logic."
                  />

                  <ArchitectureCard
                    icon={<BrainCircuit className="w-4 h-4" />}
                    title="AI Intelligence"
                    description="Gemini API integration for intelligent resume feedback and interactive mock interview experiences."
                  />

                  <ArchitectureCard
                    icon={<Database className="w-4 h-4" />}
                    title="Data Layer"
                    description="MongoDB Atlas for scalable data storage with structured schemas and application persistence."
                  />

                  <ArchitectureCard
                    icon={<ShieldCheck className="w-4 h-4" />}
                    title="Security & Access"
                    description="JWT authentication with role-based access control for protected application resources."
                  />

                  <ArchitectureCard
                    icon={<Code2 className="w-4 h-4" />}
                    title="Real-Time Layer"
                    description="Socket.io enabling bidirectional real-time communication and instant messaging."
                  />

                </div>
              </div>
            )}

            {/* CONTRIBUTION */}
            {activeTab === 'contribution' && (
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-5 w-1 rounded-full bg-[#D4AF37]" />

                  <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
                    Technical Responsibilities
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {project.contribution.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.025] hover:border-[#D4AF37]/20 transition-all duration-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37] shadow-[0_0_7px_rgba(212,175,55,0.7)]" />

                      <div className="flex-1">
                        <span className="mr-2 font-mono text-[10px] text-gray-600">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span className="text-sm leading-6 text-gray-300">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Repository CTA */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                    Source Code
                  </span>

                  <p className="mt-1 text-sm text-gray-400">
                    Explore the implementation and project architecture.
                  </p>
                </div>

                <a
                  href="https://github.com/kalaivani-m-131005/ai-interview-preparation-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View project source code on GitHub"
                  className="group inline-flex w-fit items-center gap-2.5 rounded-xl border border-[#D4AF37]/35 bg-[#D4AF37]/[0.07] px-5 py-3 text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <Code2 className="h-4 w-4" />

                  <span className="font-mono text-[11px] font-bold tracking-wider">
                    VIEW GITHUB
                  </span>

                  <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable architecture card */
interface ArchitectureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ArchitectureCard: React.FC<ArchitectureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="group p-4 rounded-xl border border-white/10 bg-white/[0.025] hover:border-[#D4AF37]/25 hover:bg-white/[0.045] transition-all duration-300">
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]">
          {icon}
        </span>

        <h5 className="text-sm font-semibold text-white">
          {title}
        </h5>
      </div>

      <p className="text-xs leading-5 text-gray-500">
        {description}
      </p>
    </div>
  );
};