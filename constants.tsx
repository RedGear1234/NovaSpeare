
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
    title: 'GrowFastShareMarket',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    url: 'https://growfastsharemarket.com/'
  },
  {
    id: 2,
    title: 'Vanguard AI Assistant',
    category: 'AI Integration',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Nexus Platform',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'EcoSphere Smart Engine',
    category: 'AI Integration',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Velocity CRM',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Synapse Search',
    category: 'AI Integration',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  }
];

export const TEAM: TeamMember[] = [
  { 
    name: 'Kunal Gaikwad', 
    role: 'Founder & CEO', 
    img: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=800&q=80',
    bio: 'Former tech lead at major Silicon Valley firms, Kunal founded NovaSphere to bridge the gap between aesthetics and raw computational power.',
    socials: { twitter: '#', linkedin: '#' }
  },
  { 
    name: 'Kaustubh Chaure', 
    role: 'Head of AI Strategy', 
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    bio: 'A PhD in Machine Learning with a passion for creative applications of LLMs and generative art systems.',
    socials: { linkedin: '#', github: '#' }
  },
  { 
    name: 'Shubham Chavan', 
    role: 'Creative Director', 
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    bio: 'Award-winning designer focused on minimal, high-impact digital experiences that resonate emotionally with users.',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    name: 'Neeraj Waghmare',
    role: 'Head of Digital Experience',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'Expert in crafting intuitive user journeys and high-conversion interfaces. Neeraj brings over a decade of experience in UX research and interaction design.',
    socials: { linkedin: '#', twitter: '#' }
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
