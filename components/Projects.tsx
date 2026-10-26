'use client';

import React, { useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  Sparkles,
  Server,
  Database,
  Globe,
  Shield,
  Layers,
  Cpu,
  FolderGit2,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '@/data/portfolioData';
import { Project } from '@/types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'AI Systems',
    'Full-Stack SaaS',
    'Mobile & Web',
    'Cloud & API',
  ];

  const { projects } = portfolioData;

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'bot':
        return <Bot className="w-5 h-5 text-[#FF7A1A]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#FF7A1A]" />;
      case 'server':
        return <Server className="w-5 h-5 text-[#FF7A1A]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#FF7A1A]" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-[#FF7A1A]" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-[#FF7A1A]" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-[#FF7A1A]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#FF7A1A]" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-[#FF7A1A]" />;
    }
  };

  return (
    <section id="projects" className="w-full py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
              <span className="text-[11px] font-extrabold tracking-widest text-[#FF7A1A] uppercase font-mono">
                FEATURED PROJECTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#17130F] dark:text-[#F6F1E6]">
              <span className="text-[#FF7A1A]">Projects</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6E6656] dark:text-[#A89F91] max-w-sm">
            Production systems built with modern scalability, AI integration, and crisp interactions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-8 sm:mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`app-pill-btn shrink-0 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all tap-bounce ${isSelected
                  ? 'bg-[#17130F] text-[#F6F1E6] dark:bg-[#FF7A1A] dark:text-[#17130F] shadow-xs'
                  : 'bg-[#FFFFFF] dark:bg-[#17130F] text-[#6E6656] dark:text-[#A89F91] hover:text-[#17130F] dark:hover:text-white border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)]'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[#FF7A1A]/40 dark:hover:border-[#FF7A1A]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Card Top Row: Dark Icon Box & Status Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#17130F] flex items-center justify-center border border-[rgba(255,255,255,0.1)] group-hover:border-[#FF7A1A]/50 transition-colors">
                    {getProjectIcon(project.iconName)}
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${project.status === 'live'
                      ? 'bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20'
                      : 'bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/20'
                      }`}
                  >
                    {project.status === 'live' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    )}
                    {project.statusLabel}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-base sm:text-lg font-black tracking-tight text-[#17130F] dark:text-[#F6F1E6] group-hover:text-[#FF7A1A] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#6E6656] dark:text-[#A89F91] leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Metric Snippet if available */}
                {project.metrics && (
                  <div className="mb-4 py-1.5 px-2.5 rounded-xl bg-[#F6F1E6] dark:bg-[#231D16] text-[10px] font-mono text-[#17130F] dark:text-[#FF7A1A] font-bold line-clamp-1 border border-[rgba(23,19,15,0.04)] dark:border-[rgba(255,255,255,0.04)]">
                    ⚡ {project.metrics}
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-[#EFE8D8] dark:bg-[#231D16] text-[#6E6656] dark:text-[#C5BBAF]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-lg bg-[#EFE8D8] dark:bg-[#231D16] text-[#6E6656] dark:text-[#C5BBAF]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-[rgba(23,19,15,0.06)] dark:border-[rgba(255,255,255,0.06)] flex items-center justify-between gap-2">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6E6656] dark:text-[#A89F91] hover:text-[#17130F] dark:hover:text-white transition-colors tap-bounce"
                    aria-label={`View code for ${project.title}`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Code</span>
                  </a>
                ) : (
                  <span />
                )}

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="app-pill-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#17130F] dark:bg-[#FF7A1A] text-[#F6F1E6] dark:text-[#17130F] hover:bg-[#FF7A1A] dark:hover:bg-[#E0670F] hover:text-white text-xs font-bold tracking-wide transition-all shadow-xs"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
