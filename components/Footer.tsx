'use client';

import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ArrowUp,
  Mail,
  Home,
  User,
  Code2,
  Wrench,
  FolderGit2,
  GitBranch,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from './BrandIcons';
import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Skills', href: '#skills', icon: Code2 },
    { label: 'Services', href: '#services', icon: Wrench },
    { label: 'Projects', href: '#projects', icon: FolderGit2 },
    { label: 'Workflow', href: '#workflow', icon: GitBranch },
    { label: 'Endorsements', href: '#testimonials', icon: MessageSquare },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  const socialIconMap = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <GithubIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'twitter / x':
      case 'twitter':
        return <TwitterIcon className="w-4 h-4" />;
      case 'youtube':
        return <YoutubeIcon className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="w-full bg-[#0A0F1D] text-[#F6F1E6] relative overflow-hidden pb-16 md:pb-0">
      {/* Top Accent Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Column 1 (5 cols): Brand Information */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF7A1A] p-0.5 bg-[#17130F]">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-black text-base tracking-tight text-[#F6F1E6]">
                  {personal.name}
                </h3>
                <p className="text-[11px] font-mono text-[#FF7A1A]">
                  AI Agent & Full-Stack Developer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89F91] leading-relaxed max-w-sm mb-6">
              {personal.tagline}
            </p>

            {/* Availability Status Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141B2D] border border-[rgba(255,255,255,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase text-[#F6F1E6]">
                {personal.availability}
              </span>
            </div>
          </div>

          {/* Column 2 (4 cols): Navigation Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#FF7A1A] mb-4">
              SITE MAP & SECTIONS
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-xs text-[#A89F91] hover:text-[#FF7A1A] transition-colors py-1 tap-bounce"
                  >
                    <Icon className="w-3.5 h-3.5 stroke-[1.8]" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 3 (3 cols): Contact & Socials */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#FF7A1A] mb-4">
                GET IN TOUCH
              </h4>
              <p className="text-xs text-[#A89F91] mb-3">
                Direct inquiries and consulting requests welcome.
              </p>
              <a
                href="#contact"
                className="app-pill-btn w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FF7A1A] hover:bg-[#E0670F] text-white font-bold text-xs tracking-wide shadow-glow-orange mb-5 tap-bounce"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Work With Me</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div>
              <div className="text-[10px] font-mono text-[#6E6656] uppercase mb-2">
                External Profiles
              </div>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-[#141B2D] border border-[rgba(255,255,255,0.08)] text-[#F6F1E6] hover:bg-[#FF7A1A] hover:border-[#FF7A1A] hover:text-white transition-all flex items-center justify-center tap-bounce"
                    aria-label={s.platform}
                  >
                    {socialIconMap(s.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89F91]">
          <p>
            © 2026 {personal.name}. Built with Next.js 16, React 19, Tailwind CSS & Resend.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-[#22C55E]">
              ● SYSTEM STATUS: ALL GREEN
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141B2D] text-[#F6F1E6] hover:text-[#FF7A1A] transition-colors border border-[rgba(255,255,255,0.08)] tap-bounce"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
