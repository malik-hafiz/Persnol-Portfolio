
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Home,
  Code2,
  Wrench,
  FolderGit2,
  Mail,
  Sun,
  Moon,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Detect saved theme or system preference.
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const shouldUseDark =
      savedTheme === 'dark' ||
      (savedTheme === null && prefersDark);

    // Synchronize the document with the selected theme.
    document.documentElement.classList.toggle(
      'dark',
      shouldUseDark
    );

    // Avoid synchronous setState inside the effect body.
    const frameId = requestAnimationFrame(() => {
      setIsDark(shouldUseDark);
      setIsScrolled(window.scrollY > 20);
    });

    // Keep scroll state synchronized with the window.
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    // Read the actual document theme to avoid React state getting out of sync.
    const nextIsDark =
      !document.documentElement.classList.contains('dark');

    document.documentElement.classList.toggle('dark', nextIsDark);
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
    setIsDark(nextIsDark);
  };

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'WORKFLOW', href: '#workflow', id: 'workflow' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const mobileTabs = [
    { label: 'HOME', href: '#home', id: 'home', icon: Home },
    { label: 'SKILLS', href: '#skills', id: 'skills', icon: Code2 },
    { label: 'SERVICES', href: '#services', id: 'services', icon: Wrench },
    { label: 'WORK', href: '#projects', id: 'projects', icon: FolderGit2 },
    { label: 'CONTACT', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Sticky Navbar */}
      <header className="sticky top-0 z-40 w-full pt-3 sm:pt-4 px-3 sm:px-6 transition-all duration-300">
        <div
          className={`max-w-6xl mx-auto rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 flex items-center justify-between border ${
            isScrolled
              ? 'bg-[#FFFFFF]/90 dark:bg-[#17130F]/90 shadow-md border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.1)] glass-nav'
              : 'bg-[#FFFFFF]/80 dark:bg-[#17130F]/80 border-[rgba(23,19,15,0.06)] dark:border-[rgba(255,255,255,0.08)] glass-nav'
          }`}
        >
          {/* Brand Logo & Avatar */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group tap-bounce"
            aria-label={`${portfolioData.personal.name} Home`}
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#FF7A1A] p-0.5 bg-[#17130F] shrink-0">
              <Image
                src={portfolioData.personal.avatarUrl}
                alt={portfolioData.personal.name}
                width={32}
                height={32}
                className="w-full h-full rounded-full"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-[#17130F] dark:text-[#F6F1E6] group-hover:text-[#FF7A1A] transition-colors leading-none">
                {portfolioData.personal.name}
              </span>

              <span className="text-[10px] text-[#6E6656] dark:text-[#A89F91] font-mono leading-tight hidden sm:block" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative px-2.5 py-1.5 text-[11px] font-bold tracking-wider uppercase transition-colors duration-200 tap-bounce ${
                    isActive
                      ? 'text-[#FF7A1A]'
                      : 'text-[#17130F]/80 dark:text-[#F6F1E6]/80 hover:text-[#FF7A1A] dark:hover:text-[#FF7A1A]'
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#FF7A1A] rounded-full animate-fadeIn" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full border border-[rgba(133,117,101,0.12)] dark:border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[#17130F] dark:text-[#F6F1E6] hover:border-[#FF7A1A] hover:text-[#FF7A1A] dark:hover:text-[#FF7A1A] transition-all tap-bounce"
              aria-label={
                isDark
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              aria-pressed={isDark}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#17130F] dark:text-[#F6F1E6]" />
              )}
            </button>

            {/* Call to Action */}
            <a
              href="#contact"
              className="app-pill-btn hidden sm:inline-flex items-center gap-1.5 bg-[#17130F] dark:bg-[#FF7A1A] text-[#F6F1E6] dark:text-[#17130F] hover:bg-[#FF7A1A] dark:hover:bg-[#E0670F] hover:text-white border border-[#FF7A1A]/40 rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wider uppercase shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-[56px] bg-[#FFFFFF]/95 dark:bg-[#17130F]/95 border-t border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.1)] glass-nav shadow-lg"
        aria-label="Mobile Navigation"
      >
        <div className="grid grid-cols-5 h-full max-w-md mx-auto">
          {mobileTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;

            return (
              <a
                key={tab.id}
                href={tab.href}
                aria-label={tab.label}
                aria-current={isActive ? 'location' : undefined}
                className={`relative flex flex-col items-center justify-center tap-bounce ${
                  isActive
                    ? 'text-[#FF7A1A]'
                    : 'text-[#6E6656] dark:text-[#A89F91] hover:text-[#FF7A1A]'
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-4 right-4 h-[2px] bg-[#FF7A1A] rounded-full" />
                )}

                <Icon
                  className={`w-[18px] h-[18px] ${
                    isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'
                  }`}
                />

                <span className="text-[8.5px] font-bold tracking-tight uppercase mt-1">
                  {tab.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
