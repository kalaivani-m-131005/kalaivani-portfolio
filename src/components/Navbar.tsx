import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Summary', href: '#summary' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research & Patent', href: '#research' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlight calculation
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8C6D1F] flex items-center justify-center font-bold text-black shadow-md group-hover:scale-105 transition-transform">
            KM
          </div>
          <div>
            <span className="font-display font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors">
              KALAIVANI M.
            </span>
            <span className="block text-[10px] text-gray-400 font-mono tracking-wider uppercase">
              CGPA: 9.14 • CSE '27
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-1 bg-black/40 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all shadow-sm group"
          >
            <FileText className="w-4 h-4 text-[#D4AF37]" />
            <span>VIEW RESUME</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30"
          >
            <FileText className="w-3.5 h-3.5" />
            RESUME
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0a0e]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-5 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 flex items-center justify-between border border-white/5"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3 h-3 text-gray-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full py-2.5 rounded-xl bg-[#D4AF37] text-black font-semibold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <FileText className="w-4 h-4" />
              VIEW RESUME DOCUMENT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
