'use client';

import React, { useState } from 'react';
import { Plus, Check, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Services() {
  // First service expanded by default
  const [expandedId, setExpandedId] = useState<string>('ai-development');
  const { services } = portfolioData;

  const toggleService = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="services" className="w-full py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
              <span className="text-[11px] font-extrabold tracking-widest text-[#FF7A1A] uppercase font-mono">
                SOLUTIONS & EXPERTISE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#17130F] dark:text-[#F6F1E6]">
              Engineered for <span className="text-[#FF7A1A]">Impact</span> & Scale.
            </h2>
          </div>

          <a
            href="#contact"
            className="app-pill-btn self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#17130F] dark:bg-[#FF7A1A] text-[#F6F1E6] dark:text-[#17130F] hover:bg-[#FF7A1A] dark:hover:bg-[#E0670F] hover:text-white text-xs font-bold tracking-wide shadow-xs tap-bounce"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Project</span>
          </a>
        </div>

        {/* Services Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isExpanded
                    ? 'bg-[#17130F] text-[#F6F1E6] border-[#FF7A1A]/40 shadow-xl'
                    : 'bg-[#FFFFFF] dark:bg-[#17130F]/90 text-[#17130F] dark:text-[#F6F1E6] border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[#FF7A1A]/30'
                }`}
              >
                {/* Header Row */}
                <div className="p-5 sm:p-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span
                      className={`text-sm sm:text-base font-mono font-bold ${
                        isExpanded ? 'text-[#FF7A1A]' : 'text-[#6E6656] dark:text-[#A89F91]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-xl font-black tracking-tight">
                        {service.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm mt-0.5 line-clamp-1 ${
                          isExpanded
                            ? 'text-[#C5BBAF]'
                            : 'text-[#6E6656] dark:text-[#A89F91]'
                        }`}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Plus Icon with 225deg rotation on expand */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isExpanded
                        ? 'bg-[#FF7A1A] text-white rotate-[225deg]'
                        : 'bg-[#F6F1E6] dark:bg-[#231D16] text-[#17130F] dark:text-[#F6F1E6]'
                    }`}
                  >
                    <Plus className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Smooth Expandable Body (CSS Grid Rows Animation) */}
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-7 pb-6 sm:pb-8 pt-2 border-t border-[rgba(255,255,255,0.08)]">
                      <p className="text-xs sm:text-sm text-[#D3C9BD] leading-relaxed max-w-3xl">
                        {service.description}
                      </p>

                      {/* Tag Pills */}
                      <div className="flex flex-wrap items-center gap-2 mt-4">
                        {service.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10.5px] font-mono font-bold px-3 py-1 rounded-full bg-[#231D16] text-[#FF7A1A] border border-[#FF7A1A]/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="mt-5 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                        <h4 className="text-[11px] font-mono font-extrabold text-[#FF7A1A] uppercase tracking-wider mb-2.5">
                          Standard Key Deliverables
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                              <span className="text-xs text-[#EFE8D8] leading-tight">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Direct CTA Link */}
                      <div className="mt-6 flex justify-end">
                        <a
                          href="#contact"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7A1A] hover:text-white transition-colors"
                        >
                          <span>Request this service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
