'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Workflow from '@/components/Workflow';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'services',
      'projects',
      'workflow',
      'testimonials',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#F6F1E6] dark:bg-[#120E0A] text-[#17130F] dark:text-[#F6F1E6] transition-colors duration-300">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <Hero />

      {/* Marquee Ticker */}
      <Marquee />

      {/* About Section */}
      <About />

      {/* Skills Showcase */}
      <Skills />

      {/* Services Accordion */}
      <Services />

      {/* Flagship Projects */}
      <Projects />

      {/* Interactive Workflow Loop */}
      <Workflow />

      {/* Client & Leader Testimonials */}
      <Testimonials />

      {/* Contact Section with Resend Form */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
