'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  // Sparkles,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Terminal,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { personal, stats } = portfolioData;

  return (
    <section
      id="about"
      className="w-full bg-[#17130F] text-[#F6F1E6] py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Decorative Background Orb */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF7A1A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
          <span className="text-[11px] font-extrabold tracking-widest text-[#FF7A1A] uppercase font-mono">
            ABOUT ME
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 sm:gap-14 items-start mt-6">
          {/* Avatar Portrait with Bold Orange Outer Frame */}
          <div className="flex flex-col items-center sm:items-start shrink-0">
            <div className="relative rounded-3xl bg-[#FF7A1A] p-2.5 sm:p-3 shadow-glow-orange-lg">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-[#231D16] border-2 border-[#17130F]">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  width={256}
                  height={256}
                  className="w-full h-full "
                />
              </div>

              {/* Status Ribbon Tag */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#17130F] border border-[#FF7A1A]/40 rounded-full px-4 py-1 flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F6F1E6] whitespace-nowrap">
                  {personal.yearsOfExperience} Industry Experience
                </span>
              </div>
            </div>

            {/* Quick Stat Pills below avatar */}
            <div className="mt-8 grid grid-cols-2 gap-2.5 w-full max-w-[270px]">
              <div className="bg-[#231D16] border border-[rgba(255,255,255,0.08)] rounded-xl p-3 text-center">
                <div className="text-lg font-black text-[#FF7A1A]">{stats[1].value}</div>
                <div className="text-[10px] text-[#A89F91] font-medium leading-tight">
                  Years Building
                </div>
              </div>
              <div className="bg-[#231D16] border border-[rgba(255,255,255,0.08)] rounded-xl p-3 text-center">
                <div className="text-lg font-black text-[#F6F1E6]">{personal.communityReach}</div>
                <div className="text-[10px] text-[#A89F91] font-medium leading-tight">
                  Reach & Reads
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Deep Details */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#F6F1E6]">
              Who is{' '}
              <span className="text-[#FF7A1A]">Muhammad Hafiz</span>?
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#D3C9BD] leading-relaxed">
              {personal.bio}
            </p>

            {/* Core Values Quick Row */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#231D16]/80 border border-[rgba(255,255,255,0.06)]">
                <ShieldCheck className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                <span className="text-xs font-bold text-[#F6F1E6]">Type-Safe Rigor</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#231D16]/80 border border-[rgba(255,255,255,0.06)]">
                <Zap className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                <span className="text-xs font-bold text-[#F6F1E6]">Sub-100ms Latency</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#231D16]/80 border border-[rgba(255,255,255,0.06)]">
                <Layers className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                <span className="text-xs font-bold text-[#F6F1E6]">Modular Systems</span>
              </div>
            </div>

            {/* Expandable Deep Details Container */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] mt-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="p-5 sm:p-6 rounded-2xl bg-[#231D16] border border-[#FF7A1A]/30 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-[#FF7A1A]" />
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#FF7A1A]">
                    Architecture Pillars & Core Philosophy
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#D3C9BD] italic mb-5 leading-relaxed">
                  &ldquo;{personal.aboutDeep.philosophy}&rdquo;
                </p>

                <div className="space-y-3.5">
                  {personal.aboutDeep.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#17130F] border border-[rgba(255,255,255,0.05)]"
                    >
                      <h5 className="text-xs font-bold text-[#FF7A1A] mb-1">
                        {idx + 1}. {pillar.title}
                      </h5>
                      <p className="text-[12px] text-[#A89F91] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="app-pill-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF7A1A] hover:bg-[#E0670F] text-white text-xs font-bold tracking-wide shadow-glow-orange tap-bounce"
              >
                <span>{isExpanded ? 'Show Less' : 'Read Deep Philosophy'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7A1A] hover:text-white transition-colors underline decoration-[#FF7A1A]/40 underline-offset-4"
              >
                <span>Have a project in mind? Let&apos;s talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
