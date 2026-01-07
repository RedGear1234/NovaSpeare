export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  longDescription: string;
  features: string[];
  resultsSummary: string;
  proInsight: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  url?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyUrl: string;
  projectLink: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface StrategyResult {
  overview: string;
  tactics: string[];
  metrics: string[];
}