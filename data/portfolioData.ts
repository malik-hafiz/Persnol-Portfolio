import { PortfolioData } from '@/types';
export const portfolioData: PortfolioData = {
  personal: {
    name: 'Muhammad Hafiz',
    firstName: 'Muhammad Hafiz',
    lastName: 'Rashid',
    title: 'AI Agent & Full-Stack Developer',
    subtitle: 'Im Muhammad Hafiz Rashid',
    tagline: 'Building intelligent AI agents, full-stack products & creating tech content, based in Pakistan',
    bio: 'I am a creative full-stack engineer and AI systems architect with 7+ years of experience designing high-scale web platforms, autonomous LLM workflows, and delightful user interfaces. I specialize in Next.js, TypeScript, distributed backends, and responsive design systems that turn complex challenges into elegant solutions.',
    aboutDeep: {
      philosophy:
        'Software should not merely function; it should feel effortless, remarkably fast, and visually inspiring. I believe that thoughtful engineering combined with meticulous aesthetic polish creates unforgettable digital experiences.',
      pillars: [
        {
          title: 'Architectural Rigor',
          desc: 'Type-safe contracts, modular component boundaries, and observable microservices built for zero downtime.',
        },
        {
          title: 'AI Native Workflows',
          desc: 'Bridging modern frontier models with production apps through streaming protocols, tool-calling agents, and semantic vectors.',
        },
        {
          title: 'Design-Driven Precision',
          desc: 'Fluid micro-interactions, responsive 60fps animations, accessible DOM structures, and sub-second load times.',
        },
      ],
    },
    location: 'karachi ,pakistan',
    availability: 'AI Agent & Full-Stack Developer',
    avatarUrl: '/profile.png',
    yearsOfExperience: '4+',
    projectsCompleted: '5+',
    communityReach: '24K+',
    satisfactionRate: '99.4%',
    email: 'muhammadhafizpakistan7@gmail.com',
    resumeUrl: '#contact',
  },

  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/malik-hafiz',
      icon: 'github',
      handle: '@malik-hafiz',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammad-hafiz-210b152a9/?isSelfProfile=true',
      icon: 'linkedin',
      handle: 'Muhammad Hafiz',
    },
    {
      platform: 'X',
      url: 'https://x.com/HafizMalik887',
      icon: 'x',
      handle: '@HafizMalik887',
    },
    {
      platform: 'Youtube',
      url: 'https://www.youtube.com/channel/UC2jI1z0R4F2B7N4H1I7J4XQ',
      icon: 'youtube',
      handle: 'Muhammad Hafiz',
    },
  ],

  stats: [
    { value: '5+', label: 'Projects Shipped', sublabel: 'Across Web, SaaS & AI' },
    { value: '4+', label: 'Years Experience', sublabel: 'Enterprise & Startups' },
    { value: '99.4%', label: 'Client Satisfaction', sublabel: '5-Star Reviews' },
    { value: '<100ms', label: 'Average Latency', sublabel: 'Performance Obsessed' },
  ],

  marqueeItems: [
    'FULL-STACK ARCHITECTURE',
    'NEXT.JS 16 & REACT 19',
    'AUTONOMOUS AI AGENTS',
    'TYPE-SAFE TYPESCRIPT',
    'TAILWIND CSS & DESIGN SYSTEMS',
    'DISTRIBUTED CLOUD APIS',
    'VECTOR DATABASES & RAG',
    '60FPS MICRO-INTERACTIONS',
  ],

  skillCategories: [
    { id: 'all', name: 'All Technologies' },
    { id: 'Core Languages', name: 'Core Languages' },
    { id: 'Frontend', name: 'Frontend' },
    { id: 'Backend', name: 'Backend' },
    { id: 'AI & Agents', name: 'AI & Agents' },
    { id: 'Database', name: 'Database' },
    { id: 'DevOps & Tools', name: 'DevOps & Tools' },
  ],

  skills: [
    // Core Languages
    {
      name: 'TypeScript',
      category: 'Core Languages',
      level: 'Advanced',
      description: 'Strict type systems, generics, full-stack schema validation & inferencing.',
      icon: 'typescript',
      verified: true,
    },
    {
      name: 'JavaScript (ESNext)',
      category: 'Core Languages',
      level: 'Master',
      description: 'Modern asynchronous runtimes, DOM micro-optimizations, Web APIs.',
      icon: 'javascript',
      verified: true,
    },
    {
      name: 'Python',
      category: 'Core Languages',
      level: 'Advanced',
      description: 'FastAPI, LangChain, PyTorch embeddings, automated scraping & tooling.',
      icon: 'python',
      verified: true,
    },
    {
      name: 'SQL & PL/pgSQL',
      category: 'Core Languages',
      level: 'Advanced',
      description: 'Complex joins, query tuning, indexing, and window functions.',
      icon: 'database',
      verified: true,
    },

    // Frontend
    {
      name: 'Next.js 16 (App Router)',
      category: 'Frontend',
      level: 'Master',
      description: 'Server Components, Turbopack, Server Actions, streaming SSR.',
      icon: 'nextjs',
      verified: true,
    },
    {
      name: 'React 19',
      category: 'Frontend',
      level: 'Master',
      description: 'Hooks, concurrent features, optimistic UI updates, custom state stores.',
      icon: 'react',
      verified: true,
    },
    {
      name: 'Tailwind CSS v4',
      category: 'Frontend',
      level: 'Master',
      description: 'Design token architectures, CSS variables, high-DPI responsive design.',
      icon: 'tailwind',
      verified: true,
    },
    {
      name: 'CSS3 & Keyframes Motion',
      category: 'Frontend',
      level: 'Advanced',
      description: 'Hardware-accelerated CSS animations, SVG tracing, glassmorphism filters.',
      icon: 'css',
      verified: true,
    },

    // Backend
    {
      name: 'Node.js & Bun',
      category: 'Backend',
      level: 'Advanced',
      description: 'High-throughput event loops, worker threads, and streaming APIs.',
      icon: 'nodejs',
      verified: true,
    },
    {
      name: 'FastAPI / Python',
      category: 'Backend',
      level: 'Advanced',
      description: 'Pydantic data models, asynchronous endpoints, auto-documented OpenAPI.',
      icon: 'fastapi',
      verified: true,
    },
    {
      name: 'REST & GraphQL APIs',
      category: 'Backend',
      level: 'Advanced',
      description: 'Cache-controlled schema federation, rate limiting, and webhook dispatchers.',
      icon: 'api',
      verified: true,
    },
    {
      name: 'Authentication (OAuth/JWT)',
      category: 'Backend',
      level: 'Advanced',
      description: 'NextAuth/Auth.js, session management, multi-tenant RBAC permissions.',
      icon: 'shield',
      verified: true,
    },

    // AI & Agents
    {
      name: 'Autonomous AI Agents',
      category: 'AI & Agents',
      level: 'Advanced',
      description: 'Multi-turn tool-use, structured JSON schemas, agentic reasoning loops.',
      icon: 'bot',
      verified: true,
    },
    {
      name: 'LLM Integration & Prompting',
      category: 'AI & Agents',
      level: 'Master',
      description: 'Gemini 2.5/3, Claude 3.5, OpenAI GPT-4o, function calling, structured output.',
      icon: 'sparkles',
      verified: true,
    },
    {
      name: 'RAG & Vector Embeddings',
      category: 'AI & Agents',
      level: 'Advanced',
      description: 'Chunking pipelines, hybrid keyword/vector search, cosine similarity.',
      icon: 'cpu',
      verified: true,
    },
    {
      name: 'LangChain & LlamaIndex',
      category: 'AI & Agents',
      level: 'Intermediate',
      description: 'Chained pipelines, document retrieval, synthetic memory management.',
      icon: 'layers',
      verified: true,
    },

    // Database
    {
      name: 'PostgreSQL & Supabase',
      category: 'Database',
      level: 'Advanced',
      description: 'Row-level security (RLS), triggers, pgvector, JSONB queries.',
      icon: 'postgresql',
      verified: true,
    },
    {
      name: 'Prisma & Drizzle ORM',
      category: 'Database',
      level: 'Advanced',
      description: 'Type-safe database migrations, relational schema modeling, connection pools.',
      icon: 'drizzle',
      verified: true,
    },
    {
      name: 'Redis',
      category: 'Database',
      level: 'Advanced',
      description: 'Sub-millisecond in-memory caching, pub/sub queues, rate limit counters.',
      icon: 'redis',
      verified: true,
    },
    {
      name: 'Pinecone / pgvector',
      category: 'Database',
      level: 'Advanced',
      description: 'High-dimensional semantic search indices, filtered metadata querying.',
      icon: 'database',
      verified: true,
    },

    // DevOps & Tools
    {
      name: 'Docker & Containers',
      category: 'DevOps & Tools',
      level: 'Advanced',
      description: 'Multi-stage production builds, compose orchestration, lightweight images.',
      icon: 'docker',
      verified: true,
    },
    {
      name: 'Vercel & Cloudflare',
      category: 'DevOps & Tools',
      level: 'Master',
      description: 'Edge workers, Global CDN caching, automated preview deployments.',
      icon: 'vercel',
      verified: true,
    },
    {
      name: 'Git & GitHub Actions',
      category: 'DevOps & Tools',
      level: 'Master',
      description: 'CI/CD automated testing, linting pipelines, semantic releases.',
      icon: 'github',
      verified: true,
    },
    {
      name: 'Resend & Email APIs',
      category: 'DevOps & Tools',
      level: 'Master',
      description: 'DKIM/SPF deliverability, React Email templating, transactional webhooks.',
      icon: 'mail',
      verified: true,
    },
  ],

  services: [
    {
      id: 'ai-development',
      number: '01',
      title: 'Autonomous AI Agents & Intelligent SaaS',
      subtitle: 'Smart systems that think, decide, and execute workflows autonomously.',
      description:
        'Transform your product with custom AI agent architectures, streaming LLM chat interfaces, and intelligent document retrieval (RAG). Built with type-safe function calling and robust fallbacks.',
      tags: ['Autonomous Agents', 'RAG Pipelines', 'Tool-Calling LLMs', 'Vector Databases'],
      deliverables: [
        'Custom multi-agent workflows with tool-calling capabilities',
        'Sub-second streaming UI responses with fallback redundancy',
        'Semantic vector indexing & enterprise knowledge ingestion',
        'Cost-optimized token caching & structured JSON output validation',
      ],
    },
    {
      id: 'fullstack-web',
      number: '02',
      title: 'Full-Stack Next.js & Web Applications',
      subtitle: 'Bespoke, blazingly fast web applications engineered for massive scale.',
      description:
        'End-to-end development utilizing Next.js App Router, React 19, TypeScript, and modern relational databases. Focused on clean architecture, lightning-fast Core Web Vitals, and intuitive UX.',
      tags: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Server Actions'],
      deliverables: [
        'Production-grade App Router architecture with SSR & Server Actions',
        'Secure multi-tenant authentication, RBAC, and subscription billing',
        'Tailwind CSS design system with light/dark adaptive theming',
        'Lighthouse 95+ scores for Performance, Accessibility & SEO',
      ],
    },
    {
      id: 'design-systems',
      number: '03',
      title: 'Design Systems & Interactive UI Engineering',
      subtitle: 'Pixel-perfect typography, fluid motion, and reusable component libraries.',
      description:
        'I build premium, custom-crafted frontend interfaces that captivate users. From subtle micro-interactions to complex data dashboards, every element is refined for tactile feedback and aesthetic joy.',
      tags: ['Design Tokens', 'Micro-Interactions', 'Motion Choreography', 'WCAG A11y'],
      deliverables: [
        'Modular, reusable React component systems with strict TypeScript interfaces',
        'Hardware-accelerated CSS animations, tap-bounce states, and smooth keyframes',
        'Full keyboard navigation, screen-reader compliance, and contrast checks',
        'Interactive data visualizations and dynamic status indicators',
      ],
    },
    {
      id: 'cloud-devops',
      number: '04',
      title: 'Cloud Infrastructure, APIs & Performance Tuning',
      subtitle: 'Rock-solid backend infrastructure that scales effortlessly under load.',
      description:
        'Designing resilient REST and GraphQL APIs, deploying containerized services, configuring edge caching, and optimizing database bottlenecks to guarantee maximum uptime and snappy performance.',
      tags: ['Docker', 'Vercel / AWS', 'Redis Caching', 'CI/CD Pipelines'],
      deliverables: [
        'Zero-downtime automated deployment pipelines (GitHub Actions)',
        'Redis caching layers reducing database load by up to 80%',
        'Comprehensive error tracking, health check endpoints, and telemetry',
        'Strict security audits, rate-limiting, and sanitized inputs',
      ],
    },
  ],

  projects: [
    {
      id: 'nexus-ai',
      title: 'Nexus Intelligence: Autonomous Agent Studio',
      category: 'AI Systems',
      description:
        'An enterprise orchestration canvas allowing teams to build, test, and deploy multi-agent collaborative workflows with live streaming telemetry.',
      detailedDescription:
        'Nexus Intelligence empowers enterprises to assemble complex workflows where specialized LLM agents collaborate on research, data synthesis, and code generation. Engineered with Next.js 16 App Router, WebSockets for sub-50ms token streaming, and pgvector for semantic grounding.',
      status: 'live',
      statusLabel: 'Live App',
      tags: ['Next.js 16', 'TypeScript', 'Python FastAPI', 'pgvector', 'Tailwind CSS'],

      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      iconName: 'bot',
    },
    {
      id: 'strata-cloud',
      title: 'Strata Cloud: Real-Time Observability Engine',
      category: 'Full-Stack SaaS',
      description:
        'Next-generation serverless telemetry platform processing millions of system events with real-time anomaly detection and instant alerts.',
      detailedDescription:
        'A comprehensive cloud monitoring suite featuring dynamic chart dashboards, custom alert rules, and automated incident triage. Built with React 19 concurrent features, ClickHouse for high-velocity logs, and Redis cluster pub/sub.',
      status: 'live',
      statusLabel: 'Live App',
      tags: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],

      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      iconName: 'server',
    },
    {
      id: 'aurora-pay',
      title: 'Aurora Pay: Global Multi-Currency Gateway',
      category: 'Full-Stack SaaS',
      description:
        'Fintech payments infrastructure supporting instant cross-border settlement, localized invoicing, and automated tax calculations.',
      detailedDescription:
        'Aurora Pay simplifies international commerce by providing unified checkout components, recurring subscription billing, and real-time currency hedging. Compliant with PCI-DSS standards with end-to-end cryptographic signatures.',
      status: 'shipped',
      statusLabel: 'Shipped',
      tags: ['Next.js', 'TypeScript', 'Stripe API', 'Drizzle ORM', 'Tailwind CSS'],

      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      iconName: 'globe',
    },
    {
      id: 'vortex-mobile',
      title: 'Vortex: Spatial Audio & Sound Studio',
      category: 'Mobile & Web',
      description:
        'Browser-based 3D spatial audio synthesizer and stem separation DAW featuring WebAudio API and interactive acoustic room simulation.',
      detailedDescription:
        'A high-performance creative workstation running entirely in the browser. Employs WebAssembly (Rust) for DSP audio processing, WebGL shaders for real-time acoustic visualizers, and seamless cloud project synchronization.',
      status: 'live',
      statusLabel: 'Live App',
      tags: ['TypeScript', 'WebAssembly', 'WebAudio API', 'Tailwind CSS', 'Vercel'],

      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      iconName: 'sparkles',
    },
    {
      id: 'synapse-docs',
      title: 'Synapse RAG: Vector Knowledge Base',
      category: 'AI Systems',
      description:
        'Enterprise document intelligence system that ingests multimodal documents, extracts semantic relations, and answers queries with citations.',
      detailedDescription:
        'Solves hallucinations in technical documentation by implementing hierarchical text chunking, hybrid BM25 + dense embedding re-ranking, and strict source attribution. Includes single-click integrations with Slack, Notion, and Google Drive.',
      status: 'live',
      statusLabel: 'Live App',
      tags: ['Python', 'FastAPI', 'LangChain', 'Next.js', 'Pinecone', 'Docker'],

      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      iconName: 'database',
    },
    {
      id: 'hyperion-api',
      title: 'Hyperion: Distributed Rate Limiter & Edge Proxy',
      category: 'Cloud & API',
      description:
        'High-velocity edge gateway providing token-bucket throttling, JWT signature verification, and dynamic traffic routing at the edge.',
      detailedDescription:
        'Engineered for extreme throughput and sub-5ms routing overhead. Hyperion operates across 300+ edge locations using Cloudflare Workers, Redis token buckets, and automated DDOS mitigation triggers.',
      status: 'shipped',
      statusLabel: 'Shipped',
      tags: ['TypeScript', 'Cloudflare Workers', 'Redis', 'GraphQL', 'REST'],

      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      iconName: 'shield',
    },
  ],

  workflow: [
    {
      step: 1,
      title: 'Discovery & Strategic Scoping',
      subtitle: 'Uncovering core requirements & architecture planning',
      description:
        'We begin by defining clear project goals, identifying technical constraints, scoping the target audience, and creating a concrete architectural blueprint with measurable KPIs.',
      iconName: 'search',
      deliverables: ['System Architecture Diagram', 'Technical Spec & Scope', 'Milestone Schedule'],
    },
    {
      step: 2,
      title: 'UX Design & Design Tokens',
      subtitle: 'Crafting the aesthetic foundation and tactile micro-interactions',
      description:
        'Developing the visual hierarchy, color palette, responsive layout grids, and interactive states. Ensuring high contrast, accessibility (WCAG), and smooth motion choreography.',
      iconName: 'pen-tool',
      deliverables: ['Interactive Prototypes', 'Tailwind Design Tokens', 'Component Library Specs'],
    },
    {
      step: 3,
      title: 'Full-Stack Engineering & AI',
      subtitle: 'Iterative, type-safe development with continuous deployment previews',
      description:
        'Writing production-ready Next.js, React 19, and TypeScript code. Implementing robust database schemas, secure authentication, API routes, and streaming AI agent workflows.',
      iconName: 'code-2',
      deliverables: ['Type-Safe Codebase', 'Preview Deployments', 'Unit & Integration Tests'],
    },
    {
      step: 4,
      title: 'Rigorous Testing & Performance Audit',
      subtitle: 'Optimizing Core Web Vitals, security, and edge caching',
      description:
        'Benchmarking sub-100ms response times, eliminating render blocking resources, auditing mobile responsiveness across real devices, and conducting end-to-end security reviews.',
      iconName: 'cpu',
      deliverables: ['Lighthouse 95+ Audit', 'Cross-Device QA Report', 'Security Sanitization'],
    },
    {
      step: 5,
      title: 'Launch, Telemetry & Evolution',
      subtitle: 'Seamless production release with real-time error tracking',
      description:
        'Deploying to global edge networks with custom domains, setting up automated CI/CD releases, configuring Resend email flows, and providing thorough handover documentation.',
      iconName: 'rocket',
      deliverables: ['Production Edge Deploy', 'Error Telemetry Dashboard', 'Handover Docs & Support'],
    },
  ],

  testimonials: [
    {
      id: 't-1',
      name: 'Elena Rostova',
      role: 'VP of Product',
      company: 'Aether Systems',
      avatar: '/avatar-client-1.svg',
      rating: 5,
      content:
        'Julian is in a league of his own. He transformed our complex AI workflow concept into a gorgeous, blisteringly fast web application in just 6 weeks. His attention to detail—from smooth micro-animations to rock-solid TypeScript architecture—made our product an instant hit with enterprise clients.',
      project: 'Nexus AI Studio',
      proofSnippet: '“Delivered 2 weeks ahead of schedule with 99.8% test coverage.”',
      verified: true,
    },
    {
      id: 't-2',
      name: 'Marcus Sterling',
      role: 'Founder & CEO',
      company: 'Strata Cloud Labs',
      avatar: '/avatar-client-2.svg',
      rating: 5,
      content:
        'Working with Julian was the smoothest engineering collaboration I have experienced. He not only brought senior-level architectural insight to our real-time telemetry pipeline, but his aesthetic sense turned what could have been a dry analytics tool into an inspiring, award-worthy interface.',
      project: 'Strata Observability Platform',
      proofSnippet: '“Indexed 10M daily events with zero latency regressions.”',
      verified: true,
    },
    {
      id: 't-3',
      name: 'Sofia Lin',
      role: 'Head of Engineering',
      company: 'Verve Technologies',
      avatar: '/avatar-client-3.svg',
      rating: 5,
      content:
        'The design system and component architecture Julian engineered for our platform set a whole new standard across our engineering team. Clean, self-documenting code, accessible components, and a work ethic that never compromises on quality. Highly recommended!',
      project: 'Global Design System & SaaS',
      proofSnippet: '“100% lighthouse accessibility score achieved on all views.”',
      verified: true,
    },
  ],
};
