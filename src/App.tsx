import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfessionalSummary } from './components/ProfessionalSummary';
import { TechnicalSkills } from './components/TechnicalSkills';
import { InternshipExperience } from './components/InternshipExperience';
import { Projects } from './components/Projects';
import { ResearchPatent } from './components/ResearchPatent';
import { LeadershipAchievements } from './components/LeadershipAchievements';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08080a] text-[#F3F4F6] relative selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Hero Visual Summary Header */}
      <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* LOCKED RESUME CONTENT ORDER (1 - 10) */}
      <main className="relative z-10 space-y-12 pb-24">
        {/* 1. PROFESSIONAL SUMMARY */}
        <ProfessionalSummary />

        {/* 2. TECHNICAL SKILLS */}
        <TechnicalSkills />

        {/* 3. INTERNSHIP EXPERIENCE */}
        <InternshipExperience />

        {/* 4. PROJECTS */}
        <Projects />

        {/* 5. RESEARCH, PATENT & PUBLICATIONS */}
        <ResearchPatent />

        {/* 6. LEADERSHIP & ACHIEVEMENTS */}
        <LeadershipAchievements />

        {/* 7. EDUCATION */}
        <Education />

        {/* 8. CERTIFICATIONS */}
        <Certifications />

        {/* 9. LANGUAGES */}
        <Languages />

        {/* 10. CONTACT */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume Printable Document Overlay Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
