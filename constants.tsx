import { Service, Project, TeamMember, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Rank everywhere customers search – Google + AI platforms. We optimize for all.',
    icon: 'fa-magnifying-glass-chart',
    color: 'from-blue-600 to-indigo-500',
    longDescription: 'Go beyond basic keywords. We provide complete SEO and AEO (Answer Engine Optimization) strategies to dominate standard search and emerging AI search platforms like ChatGPT and Perplexity.',
    features: [
      'On-Page + AI Optimization (Schema, E-E-A-T, Core Web Vitals)',
      'Smart Keyword Strategy (GEO, AEO, Semantic Clusters)',
      'Authority Backlinks & Digital PR',
      'Local GEO Domination (Google Maps 3-pack)',
      'Multi-Platform AEO (ChatGPT, Perplexity, Gemini)',
      'Monthly ROI & Traffic Reports'
    ],
    resultsSummary: 'Page 1 Google | ChatGPT/Perplexity authority | Gemini citations | 24/7 qualified leads | Multi-platform discovery',
    proInsight: 'Rank everywhere customers search – Google + AI platforms. We optimize for all.'
  },
  {
    id: 'ppc',
    title: 'Performance Marketing (PPC)',
    description: 'Run profitable paid campaigns on Google and Meta Ads for immediate growth.',
    icon: 'fa-chart-area',
    color: 'from-emerald-500 to-teal-400',
    longDescription: 'Capture high-intent customers with data-backed paid strategies. We use AI-powered optimization to ensure every Rupee spent contributes to your bottom line.',
    features: [
      'Google Search Ads (High-intent capture)',
      'Google Shopping & Performance Max Campaigns',
      'Meta/Facebook Advanced Audience Targeting',
      'AI-Powered Automated Bidding & Scaling',
      'Continuous A/B Testing of Creatives & Copy',
      'Cross-Platform Scaling (YouTube, TikTok, emerging channels)',
      'Monthly ROAS & CPA Tracking Reports'
    ],
    resultsSummary: 'Leads in 7-14 days | 3x+ ROAS | 50% lower CPA | Scalable campaigns | Predictable revenue',
    proInsight: 'AI bidding + full-funnel social commerce = exponential growth. We optimize everything.'
  },
  {
    id: 'smm',
    title: 'Social Media Marketing (SMM)',
    description: 'Build brand presence and turn discovery into direct sales across all social platforms.',
    icon: 'fa-hashtag',
    color: 'from-purple-500 to-pink-400',
    longDescription: 'Social platforms are the new search engines. We build community and drive native commerce through high-impact content and strategic management.',
    features: [
      'Custom Content Strategy (Instagram, TikTok, LinkedIn, YouTube)',
      'Short-form Video Creation (Reels, Shorts, UGC)',
      'Real-time Community Management & Engagement',
      'Social Commerce Ads (Shopify/Meta Integration)',
      'Micro-influencer & Creator Partnerships',
      'In-depth Performance & Growth Analytics'
    ],
    resultsSummary: '3x engagement growth | Social commerce revenue | Loyal community | 30% lower CAC | Brand authority',
    proInsight: 'Social platforms = search engines. We turn discovery into direct sales.'
  },
  {
    id: 'cro',
    title: 'Landing Page & Conversion Optimization',
    description: 'Turn website visitors into paying customers with conversion-first design.',
    icon: 'fa-laptop-code',
    color: 'from-orange-500 to-amber-400',
    longDescription: 'A click is only valuable if it converts. We engineer frictionless user journeys using conversion psychology and rigorous A/B testing.',
    features: [
      'Mobile-First High-Converting Layouts',
      'Benefit-Driven Persuasive Copywriting',
      'Scientific A/B Testing (Headlines, Forms, CTAs)',
      'Conversion Psychology & Urgency Triggers',
      'Seamless CRM & Email Automation Integration',
      'Heatmaps & Session Recording Analysis'
    ],
    resultsSummary: '2-5x conversion rates | 50% lower cost per lead | Higher customer LTV | Scalable revenue growth',
    proInsight: 'Landing pages = your #1 revenue driver. We make every click count.'
  },
  {
    id: 'content',
    title: 'Content Marketing & Copywriting',
    description: 'Attract and convince your ideal customers with authority-building content.',
    icon: 'fa-pen-nib',
    color: 'from-cyan-500 to-blue-400',
    longDescription: 'Content is the fuel for trust and SEO. We create assets that rank high, build deep authority, and convince prospects to become customers.',
    features: [
      'SEO Blog Posts & Pillar Content',
      'High-Converting Sales Funnel Copy',
      'Automated Email Nurture Sequences',
      'Lead Magnets (Guides, Checklists, Templates)',
      'B2B Thought Leadership & Whitepapers',
      'Strategic Content Repurposing Across 7 Channels'
    ],
    resultsSummary: 'Authority positioning | Consistent organic traffic | Email list growth | Higher conversions | Industry leadership',
    proInsight: 'Content = trust + SEO + lead gen. One asset works across 7 channels.'
  },
  {
    id: 'email',
    title: 'Email Marketing & Automation',
    description: 'Stay connected and drive repeat sales with hands-free ROI-focused automation.',
    icon: 'fa-envelope-open-text',
    color: 'from-rose-500 to-pink-400',
    longDescription: 'Email delivers the highest ROI in digital marketing. We automate the customer lifecycle to drive repeat purchases and increase lifetime value.',
    features: [
      'List Building & Lead Magnet Flows',
      'Automated Lifecycle Sequences (Welcome, Cart, Upsell)',
      'Value-Driven Newsletter Campaigns',
      'Behavioral Trigger & Purchase Personalization',
      'Advanced Customer Journey Segmentation',
      'Shopify/HubSpot/ActiveCampaign CRM Sync'
    ],
    resultsSummary: '30-50% higher LTV | 20%+ repeat purchase rate | 40% open rates | Automated revenue | Lower churn',
    proInsight: 'Email delivers 40x ROI. Automation makes it hands-free.'
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
    title: 'TechHub Solutions',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
];

export const TEAM: TeamMember[] = [
  { 
    name: 'Kunal Gaikwad', 
    role: 'Founder & CEO', 
    img: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=800&q=80',
    bio: 'Founder of I Web Optimizer, Kunal specializes in data-driven growth strategies that bridge the gap between high-end design and raw technical performance.',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    name: 'Kaustubh Chaure',
    role: 'Social Media Head',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'A social media visionary, Kaustubh leads our engagement strategies, ensuring our clients\' brand authority is established across all digital platforms through data-backed content.',
    socials: { linkedin: 'https://www.linkedin.com/in/kaustubh-chaure-583143291/' }
  },
  {
    name: 'Neeraj Waghmare',
    role: 'Salesforce / Cloud Services Expert',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    bio: 'Neeraj focuses on high-performance cloud solutions and Salesforce architectures, ensuring enterprise-grade scalability and seamless integration for complex business ecosystems.',
    socials: { linkedin: 'https://www.linkedin.com/in/neeraj-waghmare-054324239/' }
  },
  {
    name: 'Shubham Chavan',
    role: 'Web Services',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'A technical powerhouse, Shubham manages our Web Services division, focusing on high-velocity performance, secure infrastructure, and pixel-perfect deployment.',
    socials: { github: 'https://github.com/RedGear1234' }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Marketing Director",
    company: "TechFlow Systems",
    companyUrl: "#",
    projectLink: "#",
    content: "NovaSphere transformed our lead generation. Their SEO and PPC strategy alone doubled our organic pipeline in under 4 months. The transparency in their reporting is refreshing.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "Founder",
    company: "Vibe Retail Pune",
    companyUrl: "#",
    projectLink: "#",
    content: "We were struggling with low ROAS on Meta ads until we partnered with Kunal's team. They restructured our entire funnel and achieved a 4.5x return within the first quarter.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Anita Desai",
    role: "Director",
    company: "Aura Health Group",
    companyUrl: "#",
    projectLink: "#",
    content: "The AI Strategy Lab provided us with insights we hadn't considered for our healthcare marketing. Their technical SEO for medical keywords is world-class.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Product Lead",
    company: "Skyline SaaS",
    companyUrl: "#",
    projectLink: "#",
    content: "Their approach to Answer Engine Optimization (AEO) put us ahead of the curve. We're now ranking in ChatGPT and Perplexity citations, driving massive high-intent traffic.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
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
    desc: 'Crafting a bespoke roadmap integrating SEO, PPC, and content flows.'
  },
  {
    step: '03',
    title: 'Execution',
    desc: 'Agile campaign launches and content production with transparent reporting.'
  },
  {
    step: '04',
    title: 'Growth',
    desc: 'Continuous monitoring, testing, and optimization based on ROI metrics.'
  }
];