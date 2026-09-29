export const profile = {
  name: 'Aniket Kumar',
  email: 'patelaniket861@gmail.com',
  github: 'https://github.com/Aniketpk',
  linkedin: 'https://www.linkedin.com/in/aniket-patel-11957a279/',
  resume: '',
}

// Project facts and links are centralized here; keep URLs verified and visuals labeled.
export const projects = [
  {
    id: 'ekart',
    title: 'eKart',
    eyebrow: 'Full Stack E-Commerce Application',
    description: 'A full-stack electronics store with product browsing, account access, shopping cart, and order flows backed by a dedicated API.',
    technologies: ['React', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    featured: true,
    deployed: true,
    deployedOn: 'Vercel',
    liveUrl: 'https://ekart-5jas.vercel.app',
    githubUrl: 'https://github.com/Aniketpk/Ekart',
    visual: 'ekart',
  },
  {
    id: 'ai-tool-hub',
    title: 'AI Tool Hub',
    eyebrow: 'MCA · Final project',
    description: 'A centralized AI platform bringing together text summarization, translation, code assistance, debugging, and note management.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'REST APIs'],
    featured: true,
    deployed: true,
    deployedOn: 'Vercel',
    liveUrl: 'https://ai-hub-tools-seven.vercel.app',
    githubUrl: 'https://github.com/Aniketpk/Ai-hub-tools',
    visual: 'hub',
  },
  {
    id: 'placement-management',
    title: 'Placement Management System',
    eyebrow: 'Management application',
    description: 'A placement management system organizing student candidate profiles, recruitment drive workflows, and application records.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: '',
    githubUrl: '',
    visual: 'placement',
  },
  {
    id: 'smart-room-manager',
    title: 'Smart Room Manager',
    eyebrow: 'Smart room application',
    description: 'A smart room management project with connected controls for lighting, device states, and ambient sensor monitoring.',
    technologies: ['React.js', 'JavaScript', 'Node.js', 'REST APIs'],
    liveUrl: '',
    githubUrl: '',
    visual: 'room',
  },
]

export const skills = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Redux Toolkit', 'Vite'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'] },
  { title: 'Data', items: ['MongoDB', 'PostgreSQL', 'Supabase', 'Firebase', 'SQL'] },
  { title: 'Languages & AI', items: ['JavaScript', 'Python', 'Java', 'C/C++', 'Kotlin', 'AI API integration'] },
  { title: 'Tools & Workflow', items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman'] },
]

export const services = [
  {
    number: '01',
    title: 'Business Websites',
    description: 'Clear, modern, and responsive websites crafted for businesses, personal brands, and independent teams.',
    icon: 'Globe',
  },
  {
    number: '02',
    title: 'React Applications',
    description: 'Interactive single-page applications with clean component architecture, scalable state, and smooth UI transitions.',
    icon: 'Layers',
  },
  {
    number: '03',
    title: 'Full Stack Applications',
    description: 'Complete web apps connecting dynamic user interfaces to robust Node.js/Express backends and databases.',
    icon: 'Terminal',
  },
  {
    number: '04',
    title: 'REST APIs',
    description: 'Clean, structured API endpoints with secure data handling, input validation, and database integration.',
    icon: 'Server',
  },
  {
    number: '05',
    title: 'Website Bug Fixes',
    description: 'Practical debugging, UI layout corrections, mobile responsiveness fixes, and JavaScript troubleshooting.',
    icon: 'Bug',
  },
  {
    number: '06',
    title: 'Deployment & Hosting',
    description: 'Taking completed projects from local build to production hosting on Vercel with verified domains and SSL.',
    icon: 'Cloud',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    tagline: 'Scope & Architecture',
    description: 'Analyze project goals, target users, and technical constraints before designing the system.',
  },
  {
    number: '02',
    title: 'Build',
    tagline: 'Clean & Modular Code',
    description: 'Develop responsive React components and reliable backend logic using modern full-stack standards.',
  },
  {
    number: '03',
    title: 'Test',
    tagline: 'Cross-Device & QA',
    description: 'Verify responsiveness, optimize loading speed, and resolve edge cases across browsers and screen sizes.',
  },
  {
    number: '04',
    title: 'Deploy',
    tagline: 'Production Launch',
    description: 'Deploy to cloud hosting such as Vercel, verify live performance, and hand over clean documentation.',
  },
]

export const stats = [
  {
    label: 'Real Projects',
    value: '4+',
    detail: 'Full-stack & web apps',
  },
  {
    label: 'Live Deployments',
    value: '2 LIVE',
    detail: 'eKart & AI Tool Hub',
  },
  {
    label: 'Full Stack',
    value: 'MERN',
    detail: 'React, Node, DBs',
  },
  {
    label: 'Open to Work',
    value: 'Ready',
    detail: 'Freelance & Full-time',
  },
]

export const marqueeItems = [
  'REACT', 'JAVASCRIPT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'POSTGRESQL', 'REST API', 'GIT', 'GITHUB', 'TAILWIND CSS', 'VITE', 'REDUX TOOLKIT'
]

export const heroTechBadges = [
  { name: 'React', pos: 'top-left' },
  { name: 'Node.js', pos: 'top-right' },
  { name: 'JavaScript', pos: 'mid-left' },
  { name: 'MongoDB', pos: 'mid-right' },
  { name: 'Express', pos: 'bottom-left' },
  { name: 'PostgreSQL', pos: 'bottom-right' },
  { name: 'REST API', pos: 'bottom-center' },
]
