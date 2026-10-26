'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  PenTool,
  Code2,
  Cpu,
  Rocket,
  Check,
  RotateCcw,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Workflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { workflow } = portfolioData;

  // Auto-cycle through steps every 3.2s unless hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % workflow.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, workflow.length]);

  const currentStep = workflow[activeStepIndex];

  const getStepIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'search':
        return <Search className={className} />;
      case 'pen-tool':
        return <PenTool className={className} />;
      case 'code-2':
        return <Code2 className={className} />;
      case 'cpu':
        return <Cpu className={className} />;
      case 'rocket':
        return <Rocket className={className} />;
      default:
        return <Code2 className={className} />;
    }
  };

  // Node coordinates for 5 orbit stations on a 300x300 SVG (r = 105, cx = 150, cy = 150)
  const nodeCoords = [
    { x: 150, y: 45 },
    { x: 250, y: 118 },
    { x: 212, y: 235 },
    { x: 88, y: 235 },
    { x: 50, y: 118 },
  ];

  return (
    <section id="workflow" className="w-full py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
            <span className="text-[11px] font-extrabold tracking-widest text-[#FF7A1A] uppercase font-mono">
              MY WORKFLOW LOOP
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#17130F] dark:text-[#F6F1E6]">
            <span className="text-[#FF7A1A]">Live</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#6E6656] dark:text-[#A89F91]">
            From initial requirements to zero-downtime deployment, every stage is audited for precision.
          </p>
        </div>

        {/* Workflow 2-Column Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column: Visual Orbit Circle */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
              {/* SVG Orbit Track */}
              <svg
                viewBox="0 0 300 300"
                className="w-full h-full transform -rotate-90 select-none pointer-events-none"
              >
                {/* Orbit Path Base */}
                <circle
                  cx="150"
                  cy="150"
                  r="105"
                  fill="none"
                  stroke="currentColor"
                  className="text-[rgba(23,19,15,0.08)] dark:text-[rgba(255,255,255,0.08)]"
                  strokeWidth="2"
                />

                {/* Animated Line Tracing Overlay */}
                <circle
                  cx="150"
                  cy="150"
                  r="105"
                  fill="none"
                  stroke="#FF7A1A"
                  strokeWidth="2.5"
                  strokeDasharray="20 40"
                  className="opacity-70"
                />
              </svg>

              {/* 5 Interactive Orbit Station Nodes */}
              {workflow.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                const coord = nodeCoords[idx];

                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStepIndex(idx)}
                    style={{ left: `${(coord.x / 300) * 100}%`, top: `${(coord.y / 300) * 100}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 tap-bounce z-20 ${isActive
                        ? 'bg-[#FF7A1A] text-white shadow-glow-orange scale-110 ring-4 ring-[#FF7A1A]/20'
                        : 'bg-[#FFFFFF] dark:bg-[#17130F] text-[#6E6656] dark:text-[#A89F91] border border-[rgba(23,19,15,0.12)] dark:border-[rgba(255,255,255,0.12)] hover:border-[#FF7A1A]'
                      }`}
                    aria-label={`Step ${step.step}: ${step.title}`}
                  >
                    <span className="font-mono text-xs font-black">{step.step}</span>
                  </button>
                );
              })}

              {/* Center Pulsing Badge */}
              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#17130F] dark:bg-[#231D16] border-2 border-[#FF7A1A] flex flex-col items-center justify-center text-center p-2 shadow-xl z-10 animate-floatY">
                <div className="text-[#FF7A1A] mb-1">
                  {getStepIcon(currentStep.iconName, 'w-6 h-6')}
                </div>
                <span className="text-[9px] font-mono font-black uppercase text-[#F6F1E6]">
                  STEP 0{currentStep.step}
                </span>
                <span className="text-[8px] font-mono text-[#A89F91] uppercase leading-tight">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Auto-cycle indicator status */}
            <div className="mt-4 flex items-center gap-2 text-[10.5px] font-mono text-[#6E6656] dark:text-[#A89F91]">
              <RotateCcw className={`w-3 h-3 text-[#FF7A1A] ${isPaused ? '' : 'animate-spin'}`} />
              <span>{isPaused ? 'Paused on hover' : 'Continuous cycle'}</span>
            </div>
          </div>

          {/* Right Column: Step Detail Card & Selectors */}
          <div className="flex flex-col">
            {/* Detail Card */}
            <div className="bg-[#FFFFFF] dark:bg-[#17130F] border border-[#FF7A1A]/30 rounded-3xl p-6 sm:p-8 shadow-md min-h-[300px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/20">
                    STAGE 0{currentStep.step} OF 05
                  </span>
                  <div className="text-[#FF7A1A]">
                    {getStepIcon(currentStep.iconName, 'w-5 h-5')}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#17130F] dark:text-[#F6F1E6] tracking-tight">
                  {currentStep.title}
                </h3>
                <p className="text-xs font-medium text-[#FF7A1A] mt-1 mb-4">
                  {currentStep.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#6E6656] dark:text-[#D3C9BD] leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-6 pt-5 border-t border-[rgba(23,19,15,0.06)] dark:border-[rgba(255,255,255,0.06)]">
                <h4 className="text-[10.5px] font-mono font-black uppercase text-[#6E6656] dark:text-[#A89F91] tracking-wider mb-2.5">
                  Phase Artifacts & Deliverables
                </h4>
                <div className="space-y-2">
                  {currentStep.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                      <span className="text-[#17130F] dark:text-[#F6F1E6] font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5 Step Selector Buttons */}
            <div className="grid grid-cols-5 gap-2 mt-4">
              {workflow.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`app-pill-btn py-2 rounded-xl text-xs font-mono font-bold transition-all tap-bounce ${isActive
                        ? 'bg-[#17130F] dark:bg-[#FF7A1A] text-white dark:text-[#17130F] shadow-xs'
                        : 'bg-[#FFFFFF] dark:bg-[#17130F] text-[#6E6656] dark:text-[#A89F91] hover:text-[#17130F] dark:hover:text-white border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)]'
                      }`}
                  >
                    0{step.step}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
