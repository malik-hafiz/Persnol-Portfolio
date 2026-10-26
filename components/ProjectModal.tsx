'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.1)] dark:border-[#FF7A1A]/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F6F1E6] dark:bg-[#231D16] text-[#17130F] dark:text-[#F6F1E6] hover:bg-[#FF7A1A] hover:text-white transition-colors flex items-center justify-center tap-bounce"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Status & Category */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              project.status === 'live'
                ? 'bg-[#22C55E]/15 text-[#22C55E]'
                : 'bg-[#FF7A1A]/15 text-[#FF7A1A]'
            }`}
          >
            {project.status === 'live' && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            )}
            {project.statusLabel}
          </span>
          <span className="text-[11px] font-mono text-[#6E6656] dark:text-[#A89F91]">
            • {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-[#17130F] dark:text-[#F6F1E6] tracking-tight mb-4">
          {project.title}
        </h3>

        {/* Detailed Description */}
        <div className="text-xs sm:text-sm text-[#6E6656] dark:text-[#D3C9BD] leading-relaxed space-y-3 mb-6">
          <p>{project.detailedDescription}</p>
        </div>

        {/* Metrics Highlight */}
        {project.metrics && (
          <div className="p-3.5 rounded-2xl bg-[#F6F1E6] dark:bg-[#231D16] border border-[rgba(23,19,15,0.06)] dark:border-[rgba(255,255,255,0.06)] mb-6 flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-[#FF7A1A] shrink-0" />
            <span className="text-xs font-mono font-bold text-[#17130F] dark:text-[#F6F1E6]">
              {project.metrics}
            </span>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <h4 className="text-[11px] font-mono font-extrabold uppercase text-[#6E6656] dark:text-[#A89F91] tracking-wider mb-2.5">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-3 py-1 rounded-full bg-[#EFE8D8] dark:bg-[#231D16] text-[#17130F] dark:text-[#F6F1E6] border border-[rgba(23,19,15,0.06)] dark:border-[rgba(255,255,255,0.08)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="app-pill-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF7A1A] hover:bg-[#E0670F] text-white text-xs font-bold tracking-wide shadow-glow-orange"
            >
              <span>Visit Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="app-pill-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#17130F] dark:bg-[#231D16] text-[#F6F1E6] hover:text-[#FF7A1A] border border-[rgba(255,255,255,0.1)] text-xs font-bold tracking-wide"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Explore Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
