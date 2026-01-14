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
    img: 'data:image/jpeg;base64,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',
    bio: 'Founder of I Web Optimizer, Kunal specializes in data-driven growth strategies that bridge the gap between high-end design and raw technical performance.',
    socials: { twitter: 'https://x.com', linkedin: 'https://www.linkedin.com/in/kunal-gaikwad-211b47186/' }
  },
  {
    name: 'Kaustubh Chaure',
    role: 'Social Media Head',
    img: 'assets/kaustubh_DP',
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