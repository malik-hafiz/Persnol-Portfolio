'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Quote } from 'lucide-react';
import Image from 'next/image';
import { Testimonial } from '@/types';

interface TestimonialModalProps {
  testimonial: Testimonial | null;
  onClose: () => void;
}

export default function TestimonialModal({ testimonial, onClose }: TestimonialModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (testimonial) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [testimonial, onClose]);

  if (!testimonial) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#0B1120] border border-[#FF7A1A]/40 rounded-3xl p-6 sm:p-8 text-[#F6F1E6] shadow-2xl z-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#141B2D] text-[#F6F1E6] hover:bg-[#FF7A1A] hover:text-white transition-colors flex items-center justify-center tap-bounce"
          aria-label="Close proof modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5 text-[#22C55E]" />
          <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#22C55E]">
            Verified Engagement Proof
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-[#141B2D] border border-[rgba(255,255,255,0.08)] mb-6">
          <Quote className="w-6 h-6 text-[#FF7A1A] mb-2" />
          <p className="text-sm italic text-[#D3C9BD] leading-relaxed">
            {testimonial.proofSnippet || testimonial.content}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#FF7A1A] bg-[#17130F] shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-black text-base text-[#F6F1E6]">{testimonial.name}</h4>
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
            </div>
            <p className="text-xs text-[#A89F91]">
              {testimonial.role} • {testimonial.company}
            </p>
            <p className="text-[10px] font-mono text-[#FF7A1A] mt-0.5">
              Project: {testimonial.project}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
