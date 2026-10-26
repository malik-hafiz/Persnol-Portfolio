'use client';

import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle2,
  Terminal,
  Cpu,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from './BrandIcons';
import { portfolioData } from '@/data/portfolioData';

export default function Hero() {
  const { personal, socials, stats } = portfolioData;

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
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="home"
      className="relative w-full pt-8 sm:pt-14 pb-12 sm:pb-20 overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#FF7A1A]/10 dark:bg-[#FF7A1A]/8 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            Top Availability Badge
            ========================================================================= */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.12)] shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-[#17130F] dark:text-[#F6F1E6] uppercase">
              {personal.availability}
            </span>
            <span className="text-[#FF7A1A]">✦</span>
          </div>
        </div>

        {/* =========================================================================
            Main Headline
            ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-[#17130F] dark:text-[#F6F1E6] leading-[1.12]">
            Im{' '}
            <span className="text-[#FF7A1A]">
              Muhammad Hafiz
            </span>{' '}

          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#6E6656] dark:text-[#C5BBAF] max-w-2xl mx-auto leading-relaxed font-medium">
            {personal.tagline}
          </p>
        </div>

        {/* =========================================================================
            3-Column Desktop Grid Layout / Stacked Mobile Layout
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 sm:gap-10 lg:gap-14 my-6 sm:my-10">
          {/* Left Column: Social Buttons & Shipped Stat */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-5 order-2 md:order-1">
            {/* Social Icons Pill Container */}
            <div className="flex items-center gap-2.5 bg-[#FFFFFF] dark:bg-[#17130F] p-2 rounded-2xl border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] shadow-xs">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#F6F1E6] dark:bg-[#231D16] text-[#17130F] dark:text-[#F6F1E6] hover:bg-[#FF7A1A] hover:text-white dark:hover:bg-[#FF7A1A] transition-all flex items-center justify-center tap-bounce"
                  aria-label={social.platform}
                >
                  {socialIconMap(social.platform)}
                </a>
              ))}
            </div>

            {/* Stat Card 1 */}
            <div className="bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-2xl p-4 sm:p-5 shadow-xs max-w-xs w-full">
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col text-left">
                  <span className="text-2xl sm:text-3xl font-black text-[#17130F] dark:text-[#F6F1E6]">
                    {stats[0].value}
                  </span>
                  <span className="text-xs font-bold text-[#6E6656] dark:text-[#A89F91]">
                    {stats[0].label}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#FF7A1A]/10 text-[#FF7A1A] flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>
              <p className="mt-2 text-[11px] text-[#6E6656] dark:text-[#A89F91] text-left">
                {stats[0].sublabel}
              </p>
            </div>
          </div>

          {/* Center Column: Animated Hero Avatar with Thick Orange Frame */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative group">
              {/* Outer Pulsing Accent Ring */}
              <div className="absolute inset-0 rounded-full bg-[#FF7A1A]/20 blur-md group-hover:blur-xl transition-all animate-pulseRing" />

              {/* Avatar Frame Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-4 border-[#FF7A1A] p-1.5 bg-[#17130F] shadow-glow-orange animate-floatY">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  width={288}
                  height={288}
                  className="w-full h-full rounded-full"
                  priority
                />
              </div>

              {/* Verified Badge Tag */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#17130F] dark:bg-[#231D16] text-[#F6F1E6] border border-[#FF7A1A]/40 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="text-[10px] font-bold tracking-wider uppercase">
                  Verified Architect
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Card & Architecture Quote */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5 order-3">
            {/* Focus Card */}
            <div className="bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-2xl p-4 sm:p-5 shadow-xs max-w-xs w-full text-left">
              <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#17130F] dark:text-[#F6F1E6]">
                {personal.satisfactionRate}
              </div>
              <p className="text-[11px] font-bold text-[#6E6656] dark:text-[#A89F91]">
                Client Satisfaction & Review Score
              </p>
              <div className="mt-2.5 pt-2 border-t border-[rgba(23,19,15,0.06)] dark:border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[10px] font-mono text-[#FF7A1A]">
                <span>LATENCY: &lt;100ms</span>
                <span>UPTIME: 99.99%</span>
              </div>
            </div>

            {/* Architecture Quote */}
            <div className="max-w-xs text-xs italic text-[#6E6656] dark:text-[#A89F91] border-l-2 border-[#FF7A1A] pl-3 py-1 text-left hidden sm:block">
              &ldquo;Software should not merely function; it should feel effortless, remarkably fast, and visually inspiring.&rdquo;
            </div>
          </div>
        </div>

        {/* =========================================================================
            Call to Action Buttons
            ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mt-8 sm:mt-12">
          {/* Primary CTA */}
          <a
            href="#projects"
            className="app-pill-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF7A1A] text-white hover:bg-[#E0670F] font-bold text-sm tracking-wide shadow-glow-orange tap-bounce"
          >
            <span>See My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="app-pill-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FFFFFF] dark:bg-[#17130F] text-[#17130F] dark:text-[#F6F1E6] hover:border-[#FF7A1A] border border-[rgba(23,19,15,0.15)] dark:border-[rgba(255,255,255,0.15)] font-bold text-sm tracking-wide shadow-xs tap-bounce"
          >
            <Sparkles className="w-4 h-4 text-[#FF7A1A]" />
            <span>Start a Project</span>
          </a>
        </div>
      </div>
    </section>
  );
}
