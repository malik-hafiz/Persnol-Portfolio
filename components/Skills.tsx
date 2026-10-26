'use client';

import React, { useState } from 'react';
import {
  Code2,
  CheckCircle2,
  Flame,
  Terminal,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Server,
  Globe,
  Shield,
  Wrench,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { skills, skillCategories } = portfolioData;

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'typescript':
      case 'javascript':
        return <Code2 className="w-4 h-4 text-[#FF7A1A]" />;
      case 'python':
      case 'fastapi':
        return <Terminal className="w-4 h-4 text-[#FF7A1A]" />;
      case 'nextjs':
      case 'react':
        return <Globe className="w-4 h-4 text-[#FF7A1A]" />;
      case 'tailwind':
      case 'css':
        return <Layers className="w-4 h-4 text-[#FF7A1A]" />;
      case 'nodejs':
      case 'api':
        return <Server className="w-4 h-4 text-[#FF7A1A]" />;
      case 'bot':
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#FF7A1A]" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-[#FF7A1A]" />;
      case 'postgresql':
      case 'database':
      case 'redis':
      case 'drizzle':
        return <Database className="w-4 h-4 text-[#FF7A1A]" />;
      case 'shield':
        return <Shield className="w-4 h-4 text-[#FF7A1A]" />;
      case 'docker':
      case 'vercel':
      case 'github':
      case 'mail':
        return <Wrench className="w-4 h-4 text-[#FF7A1A]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#FF7A1A]" />;
    }
  };

  return (
    <section id="skills" className="w-full py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
              <span className="text-[11px] font-extrabold tracking-widest text-[#FF7A1A] uppercase font-mono">
                TECHNICAL EXPERTISE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#17130F] dark:text-[#F6F1E6]">
              Mastery Across the <span className="text-[#FF7A1A]">Modern Stack</span>.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6E6656] dark:text-[#A89F91] max-w-sm">
            Battle-tested frameworks, strict typing, and high-performance distributed systems.
          </p>
        </div>

        {/* Category Filter Pills (Scrollable horizontally on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-8">
          {skillCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`app-pill-btn shrink-0 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all tap-bounce ${isSelected
                    ? 'bg-[#17130F] text-[#F6F1E6] dark:bg-[#FF7A1A] dark:text-[#17130F] shadow-xs'
                    : 'bg-[#FFFFFF] dark:bg-[#17130F] text-[#6E6656] dark:text-[#A89F91] hover:text-[#17130F] dark:hover:text-white border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)]'
                  }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[#FF7A1A]/40 dark:hover:border-[#FF7A1A]/40 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative overflow-hidden"
            >
              {/* Subtle orange accent glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7A1A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#F6F1E6] dark:bg-[#231D16] flex items-center justify-center shrink-0 border border-[rgba(23,19,15,0.06)] dark:border-[rgba(255,255,255,0.06)]">
                  {getSkillIcon(skill.icon)}
                </div>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-[#EFE8D8] dark:bg-[#231D16] text-[#6E6656] dark:text-[#FF7A1A]">
                  {skill.level}
                </span>
              </div>

              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="font-extrabold text-sm text-[#17130F] dark:text-[#F6F1E6] tracking-tight group-hover:text-[#FF7A1A] transition-colors">
                  {skill.name}
                </h3>
                {skill.verified && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                )}
              </div>

              <p className="text-[11px] text-[#6E6656] dark:text-[#A89F91] leading-relaxed line-clamp-2">
                {skill.description}
              </p>

              <div className="mt-3 pt-2 border-t border-[rgba(23,19,15,0.04)] dark:border-[rgba(255,255,255,0.04)] flex items-center justify-between text-[9px] font-mono uppercase text-[#6E6656] dark:text-[#A89F91]">
                <span>{skill.category}</span>
                <span className="text-[#22C55E] font-bold">● Production-Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary Bar */}
        <div className="mt-8 sm:mt-10 p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-xs">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#FF7A1A]" />
            <span className="font-bold text-[#17130F] dark:text-[#F6F1E6]">
              {skills.length} Documented Skills
            </span>
            <span className="text-[#6E6656] dark:text-[#A89F91] hidden sm:inline">•</span>
            <span className="text-[#6E6656] dark:text-[#A89F91]">
              Continuously evolved for modern frontier systems
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-[#22C55E] font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
            </span>
            <span>100% VERIFIED TEST COVERAGE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
