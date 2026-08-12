import React from 'react';
import { resumeData } from '../data/resumeData';
import { X, Printer, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c12] border border-[#D4AF37]/40 rounded-3xl shadow-gold-glow-lg flex flex-col overflow-hidden my-auto">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-6 bg-[#12121c] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                KALAIVANI M. — OFFICIAL RESUME
              </h3>
              <span className="text-xs font-mono text-gray-400">
                100% Resume Content Fidelity • Printable Document View
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#E2B857] text-black font-extrabold text-xs font-mono transition-colors shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-gray-200 text-sm font-sans bg-[#0a0a0f] selection:bg-[#D4AF37] selection:text-black print:text-black print:bg-white">
          
          {/* Header Block */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <h1 className="text-3xl font-display font-extrabold text-white uppercase">
              {resumeData.hero.name}
            </h1>
            <p className="text-[#D4AF37] font-semibold text-base">
              {resumeData.hero.titles.join('  |  ')}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 pt-1">
              <span>Email: {resumeData.contact.email}</span>
              <span>Phone: +91 {resumeData.contact.phone}</span>
              <span>Location: {resumeData.contact.location}</span>
              <span className="text-emerald-400 font-bold">CGPA: {resumeData.hero.cgpa}</span>
            </div>
          </div>

          {/* 1. Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-1">
              1. PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>

          {/* 2. Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-1">
              2. TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {resumeData.skills.map((s) => (
                <div key={s.category} className="p-2 rounded bg-white/5 border border-white/5">
                  <span className="font-bold text-white block mb-0.5">{s.category}:</span>
                  <span className="text-gray-300">{s.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Internships */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-1">
              3. INTERNSHIP EXPERIENCE
            </h2>
            <div className="space-y-3">
              {resumeData.internships.map((intern) => (
                <div key={intern.id} className="p-3 rounded bg-white/5 border border-white/5 space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span>{intern.role} | {intern.company}</span>
                    <span className="text-xs font-mono text-gray-400">{intern.period}</span>
                  </div>
                  <p className="text-xs text-gray-300">{intern.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-1">
              4. PROJECTS
            </h2>
            <div className="p-3 rounded bg-white/5 border border-white/5 space-y-2">
              <div className="font-bold text-white text-base">{resumeData.project.title}</div>
              <div className="text-xs font-mono text-[#D4AF37]">Tech: {resumeData.project.technologies.join(', ')}</div>
              <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
                {resumeData.project.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5. Research & Patent */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-1">
              5. RESEARCH, PATENT & PUBLICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded bg-white/5 border border-white/5">
                <span className="font-bold text-white block">Patent Application</span>
                <p className="text-gray-300 mt-1">{resumeData.researchAndPatent.patent.title}</p>
                <span className="text-[#D4AF37] font-mono block mt-1">No: {resumeData.researchAndPatent.patent.patentNo}</span>
              </div>
              <div className="p-3 rounded bg-white/5 border border-white/5">
                <span className="font-bold text-white block">Scopus Publication</span>
                <p className="text-gray-300 mt-1">{resumeData.researchAndPatent.publication.title}</p>
                <span className="text-sky-400 font-mono block mt-1">Presented at {resumeData.researchAndPatent.publication.presentedAt}</span>
              </div>
            </div>
          </div>

          {/* 6. Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-1">
              6. LEADERSHIP & ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
              {resumeData.achievements.map((ach, i) => (
                <li key={i}>{ach.title}</li>
              ))}
            </ul>
          </div>

          {/* 7. Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-1">
              7. EDUCATION
            </h2>
            <div className="space-y-2 text-xs">
              {resumeData.education.map((edu) => (
                <div key={edu.degree} className="flex justify-between p-2 rounded bg-white/5 border border-white/5">
                  <div>
                    <span className="font-bold text-white block">{edu.degree}</span>
                    <span className="text-gray-400">{edu.institution} {edu.period ? `(${edu.period})` : ''}</span>
                  </div>
                  <span className="font-mono text-[#D4AF37] font-bold">{edu.scoreLabel}: {edu.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 8. Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-1">
              8. CERTIFICATIONS
            </h2>
            <ol className="list-decimal list-inside text-xs text-gray-300 space-y-1">
              {resumeData.certifications.map((c) => (
                <li key={c.id}>
                  <span className="text-white font-medium">{c.title}</span> – {c.issuer} {c.score ? `(${c.score})` : ''} {c.year ? `(${c.year})` : ''}
                </li>
              ))}
            </ol>
          </div>

          {/* 9. Languages */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-white/10 pb-1">
              9. LANGUAGES
            </h2>
            <p className="text-xs text-gray-300">
              {resumeData.languages.join('  •  ')}
            </p>
          </div>

          {/* 10. Contact */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase pb-1">
              10. CONTACT
            </h2>
            <p className="text-xs text-gray-400 font-mono">
              Email: {resumeData.contact.email} | Location: {resumeData.contact.location} | Phone: +91 {resumeData.contact.phone}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
