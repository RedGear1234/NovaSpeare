
import React from 'react';
import { Service, Project, TeamMember, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Experiences',
    description: 'Bespoke web applications built with performance and scalability at their core.',
    icon: 'fa-code',
    color: 'from-blue-500 to-cyan-400',
    longDescription: 'We build high-performance, accessible, and scalable web applications using the latest modern frameworks. Our focus is on delivering seamless user experiences that drive conversion.',
    features: ['React & Next.js Expertise', 'Cloud Native Architecture', 'Headless CMS Integration', 'Performance Optimization']
  },
  {
    id: 'ai-solutions',
    title: 'AI Integration',
    description: 'Transforming businesses with custom LLM implementations and generative AI workflows.',
    icon: 'fa-microchip',
    color: 'from-purple-500 to-pink-400',
    longDescription: 'Leverage the power of Generative AI to automate workflows, enhance customer support, and gain predictive insights. We integrate LLMs safely and effectively into your existing ecosystem.',
    features: ['Custom LLM Fine-tuning', 'RAG (Retrieval Augmented Generation)', 'AI Agents & Automation', 'Prompt Engineering']
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    description: 'Visual storytelling that resonates with your audience and builds lasting loyalty.',
    icon: 'fa-pen-nib',
    color: 'from-orange-500 to-yellow-400',
    longDescription: 'We define the visual and verbal soul of your brand. From logo design to comprehensive brand guidelines, we ensure your identity is consistent and compelling across all touchpoints.',
    features: ['Visual Identity Systems', 'Brand Voice & Strategy', 'UI/UX Design Systems', 'Motion Branding']
  },
  {
    id: 'marketing',
    title: 'Growth Marketing',
    description: 'Data-driven strategies designed to scale your reach and maximize ROI.',
    icon: 'fa-chart-line',
    color: 'from-emerald-500 to-teal-400',
    longDescription: 'Scale your business with measurable results. We combine SEO, performance marketing, and content strategy to put your brand in front of the right people at the right time.',
    features: ['SEO & SEM Mastery', 'Performance Marketing', 'Conversion Rate Optimization', 'Social Growth Strategy']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Lumina Dashboard',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/lumina/800/600'
  },
  {
    id: 2,
    title: 'Vanguard AI Assistant',
    category: 'AI Integration',
    image: 'https://picsum.photos/seed/vanguard/800/600'
  },
  {
    id: 3,
    title: 'Nexus Platform',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/nexus/800/600'
  },
  {
    id: 4,
    title: 'EcoSphere Smart Engine',
    category: 'AI Integration',
    image: 'https://picsum.photos/seed/eco/800/600'
  }
];

export const TEAM: TeamMember[] = [
  { 
    name: 'Alex Rivera', 
    role: 'Founder & CEO', 
    img: 'https://picsum.photos/seed/alexr/600/800',
    bio: 'Former tech lead at major Silicon Valley firms, Alex founded NovaSphere to bridge the gap between aesthetics and raw computational power.',
    socials: { twitter: '#', linkedin: '#' }
  },
  { 
    name: 'Sarah Chen', 
    role: 'Head of AI Strategy', 
    img: 'https://picsum.photos/seed/sarahc/600/800',
    bio: 'A PhD in Machine Learning with a passion for creative applications of LLMs and generative art systems.',
    socials: { linkedin: '#', github: '#' }
  },
  { 
    name: 'Marcus Thorne', 
    role: 'Creative Director', 
    img: 'https://picsum.photos/seed/marcust/600/800',
    bio: 'Award-winning designer focused on minimal, high-impact digital experiences that resonate emotionally with users.',
    socials: { twitter: '#', linkedin: '#' }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Marketing Director",
    company: "TechFlow Systems",
    companyUrl: "https://example.com/techflow",
    projectLink: "#portfolio",
    content: "NovaSphere didn't just rebuild our platform; they reimagined our entire digital footprint. Their AI integration saved our support team 40 hours a week.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO",
    company: "FinVertex",
    companyUrl: "https://example.com/finvertex",
    projectLink: "#portfolio",
    content: "The level of technical depth combined with aesthetic precision is something you rarely find. Our conversion rates jumped 24% after the redesign.",
    avatar: "https://i.pravatar.cc/150?u=david",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Aura E-commerce",
    companyUrl: "https://example.com/aura",
    projectLink: "#portfolio",
    content: "The Strategy Lab provided insights we hadn't considered in years of operations. They are truly partners in growth, not just another agency.",
    avatar: "https://i.pravatar.cc/150?u=elena",
    rating: 5
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Deep dive into your business goals, target audience, and current challenges.'
  },
  {
    step: '02',
    title: 'Strategy',
    desc: 'Crafting a bespoke roadmap integrating design, technology, and AI.'
  },
  {
    step: '03',
    title: 'Execution',
    desc: 'Agile development and design iterations with transparent communication.'
  },
  {
    step: '04',
    title: 'Growth',
    desc: 'Continuous monitoring, optimization, and scaling based on real-world data.'
  }
];
