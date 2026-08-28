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
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { project } = resumeData;

  const [activeTab, setActiveTab] = useState<
    'overview' | 'features' | 'architecture' | 'contribution'
  >('overview');

  return (
    <section
      id="projects"
      className="py-16 px-4 max-w-5xl mx-auto"
    >
      <div className="space-y-8">

        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            04. FEATURED PROJECT
          </span>

          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
              4. PROJECTS
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              Primary full-stack AI platform developed for career acceleration.
            </p>
          </div>

          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full self-start">
            Main Resume Project
          </span>
        </div>

        {/* Main Project Card */}
        <div className="rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl">

          {/* Project Header Banner */}
          <div className="p-8 bg-gradient-to-r from-[#12121c] via-[#1a1a28] to-[#12121c] border-b border-white/10 relative">

            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                AI-Powered System
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight max-w-3xl leading-tight">
              {project.title}
            </h3>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mt-4 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-xs font-mono text-gray-200 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 bg-black/40 overflow-x-auto">

            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3.5 text-xs font-mono font-semibold transition-colors flex items-center gap-2 border-b-2 ${activeTab === 'overview'
                  ? 'border-[#D4AF37] text-[#D4AF37] bg-white/5'
                  : 'border-transparent text-gray-400 hover:text-white'
                }`}
            >
              <Layers className="w-4 h-4" />
              OVERVIEW & DETAILS
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3.5 text-xs font-mono font-semibold transition-colors flex items-center gap-2 border-b-2 ${activeTab === 'features'
                  ? 'border-[#D4AF37] text-[#D4AF37] bg-white/5'
                  : 'border-transparent text-gray-400 hover:text-white'
                }`}
            >
              <Cpu className="w-4 h-4" />
              FEATURES
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-6 py-3.5 text-xs font-mono font-semibold transition-colors flex items-center gap-2 border-b-2 ${activeTab === 'architecture'
                  ? 'border-[#D4AF37] text-[#D4AF37] bg-white/5'
                  : 'border-transparent text-gray-400 hover:text-white'
                }`}
            >
              <Terminal className="w-4 h-4" />
              ARCHITECTURE
            </button>

            <button
              onClick={() => setActiveTab('contribution')}
              className={`px-6 py-3.5 text-xs font-mono font-semibold transition-colors flex items-center gap-2 border-b-2 ${activeTab === 'contribution'
                  ? 'border-[#D4AF37] text-[#D4AF37] bg-white/5'
                  : 'border-transparent text-gray-400 hover:text-white'
                }`}
            >
              <Code2 className="w-4 h-4" />
              MY CONTRIBUTION
            </button>
          </div>

          {/* Tab Contents */}
          <div className="p-8 space-y-6">

            {/* OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-bold">
                    Project Scope & Description
                  </h4>

                  <ul className="space-y-2.5">
                    {project.points.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problem vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                      <AlertCircle className="w-4 h-4" />
                      <span>Problem Statement</span>
                    </div>

                    <p className="text-gray-300 text-xs leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                      <Sparkles className="w-4 h-4" />
                      <span>Platform Solution</span>
                    </div>

                    <p className="text-gray-300 text-xs leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* FEATURES */}
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      0{i + 1}
                    </div>

                    <span className="text-gray-200 text-sm font-medium">
                      {feat}
                    </span>
                  </div>
                ))}

              </div>
            )}

            {/* ARCHITECTURE */}
            {activeTab === 'architecture' && (
              <div className="space-y-4">

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs text-gray-300">

                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-[#D4AF37] font-bold">
                      SYSTEM ARCHITECTURE COMPONENT MATRIX
                    </span>

                    <span className="text-gray-500">
                      MERN + Gemini Stack
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">

                    <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                      <span className="block font-bold text-white mb-1">
                        Frontend Layer
                      </span>

                      <span className="text-gray-400 text-[11px]">
                        React.js with TypeScript for strictly typed component UI state.
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                      <span className="block font-bold text-white mb-1">
                        Backend & API Layer
                      </span>

                      <span className="text-gray-400 text-[11px]">
                        Node.js / Express.js scalable RESTful endpoints.
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                      <span className="block font-bold text-white mb-1">
                        AI Intelligence
                      </span>

                      <span className="text-gray-400 text-[11px]">
                        Google Gemini API integration for resume feedback & mock interviews.
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                      <span className="block font-bold text-white mb-1">
                        Database & Auth
                      </span>

                      <span className="text-gray-400 text-[11px]">
                        MongoDB Atlas schemas with JWT role-based access.
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* CONTRIBUTION */}
            {activeTab === 'contribution' && (
              <div className="space-y-3">

                <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-bold">
                  Technical Responsibilities & Deliverables
                </h4>

                <div className="grid grid-cols-1 gap-2.5">

                  {project.contribution.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm text-gray-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      <span>{item}</span>
                    </div>
                  ))}

                </div>
              </div>
            )}

            {/* GitHub Repository */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

              <div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  Project Repository
                </span>

                <p className="text-sm text-gray-300 mt-1">
                  Explore the source code and implementation.
                </p>
              </div>

              <a
                href="https://github.com/kalaivani-m-131005/ai-interview-preparation-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-mono text-xs font-bold"
              >
                <Code2 className="w-4 h-4" />
                VIEW GITHUB
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};