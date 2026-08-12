import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Code2, Terminal, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = resumeData;
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [placeholderNotice, setPlaceholderNotice] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSocialClick = (platform: string) => {
    setPlaceholderNotice(`Placeholder link for ${platform}. Please update the URL in src/data/resumeData.ts when ready.`);
    setTimeout(() => setPlaceholderNotice(null), 4000);
  };

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return (
          <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        );
      case 'LinkedIn':
        return (
          <svg className="w-4 h-4 fill-current text-sky-400" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
          </svg>
        );
      case 'LeetCode':
        return <Code2 className="w-4 h-4 text-amber-400" />;
      case 'HackerRank':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      default:
        return <ExternalLink className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            10. CONNECT
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
              10. CONTACT INFORMATION
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Direct email, phone, location, and official professional profile channels.
            </p>
          </div>
          <span className="text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full self-start">
            Coimbatore, Tamil Nadu
          </span>
        </div>

        {/* Placeholder Toast Notification */}
        {placeholderNotice && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center justify-between animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{placeholderNotice}</span>
            </div>
            <button onClick={() => setPlaceholderNotice(null)} className="underline text-gray-400 ml-2">Dismiss</button>
          </div>
        )}

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email Card */}
          <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-card-dark space-y-4">
            <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] w-fit">
              <Mail className="w-5 h-5" />
            </div>

            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase block">EMAIL ADDRESS</span>
              <a
                href={`mailto:${contact.email}`}
                className="text-base font-display font-bold text-white hover:text-[#D4AF37] transition-colors break-all"
              >
                {contact.email}
              </a>
            </div>

            <button
              onClick={() => handleCopy(contact.email, 'email')}
              className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-300 flex items-center justify-center gap-1.5 transition-colors"
            >
              {copiedField === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-card-dark space-y-4">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 w-fit">
              <MapPin className="w-5 h-5" />
            </div>

            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase block">PRIMARY LOCATION</span>
              <p className="text-base font-display font-bold text-white">
                {contact.location}
              </p>
            </div>

            <div className="py-2 text-xs font-mono text-gray-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for relocation & remote work</span>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-card-dark space-y-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
              <Phone className="w-5 h-5" />
            </div>

            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase block">CONTACT NUMBER</span>
              <a
                href={`tel:${contact.phone}`}
                className="text-base font-display font-bold text-white hover:text-emerald-400 transition-colors"
              >
                +91 {contact.phone}
              </a>
            </div>

            <button
              onClick={() => handleCopy(contact.phone, 'phone')}
              className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-300 flex items-center justify-center gap-1.5 transition-colors"
            >
              {copiedField === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY PHONE NUMBER</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Social / Professional Profiles (Explicit Placeholders) */}
        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-display font-bold text-white">
                PROFESSIONAL & CODING PLATFORM PROFILES
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Explicit placeholder handles ready for custom URL integration.
              </p>
            </div>
            <span className="text-xs font-mono text-[#D4AF37]">
              No Fake URLs Created
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {contact.socials.map((social) => (
              <button
                key={social.platform}
                onClick={() => handleSocialClick(social.platform)}
                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/50 text-left transition-all duration-200 group flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center">
                    {renderPlatformIcon(social.platform)}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {social.platform}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">
                      [Insert URL]
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#D4AF37] transition-colors" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
