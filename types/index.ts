export interface Project {
  id: string;
  title: string;
  category: 'All' | 'AI Systems' | 'Full-Stack SaaS' | 'Mobile & Web' | 'Cloud & API';
  description: string;
  detailedDescription: string;
  status: 'live' | 'shipped';
  statusLabel: string;
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  iconName: 'bot' | 'sparkles' | 'server' | 'database' | 'globe' | 'shield' | 'layers' | 'cpu';
}

export interface SkillCategory {
  id: string;
  name: string;
}

export interface Skill {
  name: string;
  category: 'Core Languages' | 'Frontend' | 'Backend' | 'AI & Agents' | 'Database' | 'DevOps & Tools';
  level: string;
  description: string;
  icon: string;
  verified: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  deliverables: string[];
}

export interface WorkflowStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'search' | 'pen-tool' | 'code-2' | 'cpu' | 'rocket';
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  project: string;
  proofSnippet?: string;
  verified: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  handle: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    subtitle: string;
    tagline: string;
    bio: string;
    aboutDeep: {
      philosophy: string;
      pillars: { title: string; desc: string }[];
    };
    location: string;
    availability: string;
    avatarUrl: string;
    yearsOfExperience: string;
    projectsCompleted: string;
    communityReach: string;
    satisfactionRate: string;
    email: string;
    resumeUrl: string;
  };
  socials: SocialLink[];
  stats: StatItem[];
  marqueeItems: string[];
  skills: Skill[];
  skillCategories: SkillCategory[];
  services: Service[];
  projects: Project[];
  workflow: WorkflowStep[];
  testimonials: Testimonial[];
}
