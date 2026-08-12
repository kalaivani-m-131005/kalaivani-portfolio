import React from 'react';
import { resumeData } from '../data/resumeData';
import { Code, Layout, Server, Database, Cpu, Wrench, BrainCircuit } from 'lucide-react';

export const TechnicalSkills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages': return <Code className="w-4 h-4 text-[#D4AF37]" />;
      case 'Frontend': return <Layout className="w-4 h-4 text-sky-400" />;
      case 'Backend': return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Databases': return <Database className="w-4 h-4 text-purple-400" />;
      case 'Core CS': return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'Tools': return <Wrench className="w-4 h-4 text-rose-400" />;
      case 'AI & Analytics': return <BrainCircuit className="w-4 h-4 text-teal-400" />;
      default: return <Code className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            02. CAPABILITIES
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
              2. TECHNICAL SKILLS
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Core technological competencies, frameworks, databases, and foundational CS domains.
            </p>
          </div>
          <span className="text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full self-start">
            Factual Resume Matrix
          </span>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumeData.skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-card-dark flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(skillGroup.category)}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg tracking-wide">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skill Pills (Clean tag cloud without bars or percentage levels) */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/40 text-gray-200 hover:text-white text-xs font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
