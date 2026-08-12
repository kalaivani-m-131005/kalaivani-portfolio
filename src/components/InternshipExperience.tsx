import React from 'react';
import { resumeData } from '../data/resumeData';
import { Calendar, Sparkles, Building2 } from 'lucide-react';

export const InternshipExperience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            03. CAREER HISTORY
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
              3. INTERNSHIP EXPERIENCE
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Industrial and technical internship experience in chronological order.
            </p>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full self-start">
            4 Internships Recorded
          </span>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
          {resumeData.internships.map((internship, index) => (
            <div key={internship.id} className="relative group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#08080a] border-2 border-[#D4AF37] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#D4AF37] transition-all">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] group-hover:bg-black transition-colors" />
              </div>

              {/* Internship Card */}
              <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-card-dark space-y-4">
                
                {/* Header: Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-display font-bold text-white tracking-wide">
                        {internship.role}
                      </h3>
                      {internship.selectedTag && (
                        <span className="px-2.5 py-0.5 rounded-md bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Selected
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm font-medium mt-1">
                      <Building2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>{internship.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{internship.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {internship.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Sequence #{index + 1} from Resume</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
