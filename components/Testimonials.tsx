'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Eye,
  UserCheck,
  Quote,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { Testimonial } from '@/types';
import TestimonialModal from './TestimonialModal';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProof, setSelectedProof] = useState<Testimonial | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { testimonials } = portfolioData;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="w-full py-16 sm:py-24 relative overflow-hidden">
      {/* Background Dark Canvas Accent */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
            <span className="text-[11px] font-extrabold tracking-widest text-[#FF7A1A] uppercase font-mono">
              COLLABORATION & FEEDBACK
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#17130F] dark:text-[#F6F1E6]">
            Endorsed by <span className="text-[#FF7A1A]">Engineering Leaders</span>.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#6E6656] dark:text-[#A89F91]">
            Direct feedback from product executives, founders, and engineering teams.
          </p>
        </div>

        {/* Ambient Orange Glow Orb behind card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#FF7A1A]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Main Testimonial Card (Dark Navy Glass Card #0B1120) */}
        <div
          className="relative max-w-4xl mx-auto bg-[#0B1120] text-[#F6F1E6] border border-[#FF7A1A]/30 rounded-3xl p-7 sm:p-12 shadow-2xl backdrop-blur-md"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top Row: Stars Rating & Decorative Quote Watermark */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1.5">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-mono font-bold text-amber-400">
                5.0 / 5.0
              </span>
            </div>

            <Quote className="w-9 h-9 text-[#FF7A1A]/30" />
          </div>

          {/* Testimonial Quote */}
          <p className="text-base sm:text-xl lg:text-2xl font-medium leading-relaxed text-[#F6F1E6] mb-8">
            &ldquo;{current.content}&rdquo;
          </p>

          {/* Screenshot Proof Card / Quick Snippet */}
          {current.proofSnippet && (
            <div
              onClick={() => setSelectedProof(current)}
              className="group mb-8 p-3 sm:p-4 rounded-2xl bg-[#141B2D] border border-[rgba(255,255,255,0.08)] hover:border-[#FF7A1A]/40 transition-all cursor-pointer flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FF7A1A]/20 text-[#FF7A1A]">
                  AUDIT PROOF
                </span>
                <span className="text-xs text-[#D3C9BD] italic line-clamp-1">
                  {current.proofSnippet}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#FF7A1A] group-hover:underline shrink-0">
                <Eye className="w-3.5 h-3.5" />
                <span>Verify</span>
              </div>
            </div>
          )}

          {/* Author Profile Row & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[rgba(255,255,255,0.08)]">
            {/* Author Profile */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#FF7A1A] bg-[#17130F] shrink-0">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-base text-[#F6F1E6] tracking-tight">
                    {current.name}
                  </h3>
                  <UserCheck className="w-4 h-4 text-[#22C55E]" />
                </div>
                <p className="text-xs text-[#A89F91]">
                  {current.role} • {current.company}
                </p>
                <p className="text-[11px] font-mono text-[#FF7A1A]">
                  Delivered: {current.project}
                </p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#141B2D] border border-[rgba(255,255,255,0.1)] hover:bg-[#FF7A1A] hover:text-white transition-all flex items-center justify-center tap-bounce"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5 px-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === i
                        ? 'w-6 bg-[#FF7A1A]'
                        : 'w-2 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)]'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#141B2D] border border-[rgba(255,255,255,0.1)] hover:bg-[#FF7A1A] hover:text-white transition-all flex items-center justify-center tap-bounce"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <TestimonialModal
        testimonial={selectedProof}
        onClose={() => setSelectedProof(null)}
      />
    </section>
  );
}
