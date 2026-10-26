'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Marquee() {
  const { marqueeItems } = portfolioData;
  // Duplicate array to ensure seamless infinite looping ticker
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full bg-[#17130F] border-y-[1.5px] border-[#FF7A1A] overflow-hidden py-3 sm:py-3.5 select-none shadow-md">
      <div className="animate-marquee flex items-center">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 shrink-0"
          >
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F6F1E6] uppercase font-mono">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A1A] fill-[#FF7A1A] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
