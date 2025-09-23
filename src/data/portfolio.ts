import { PersonalInfo, ContactInfo, Skill, Project, Experience, Education } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Oreofe Daniel Oladepo",
  nickname: "BlaccDante (Blacc Inferno)",
  title: "Multidisciplinary Creative Developer | Animator | Web3 Artist",
  bio: "Self-taught 2D/3D artist, animator, and full-stack developer creating surreal digital art and innovative Web3 experiences. Inspiration drawn from cyberpunk aesthetics, music, anime, and the nuanced beauties of the world. Successfully sold NFTs and built creative technologies that bridge art and code.",
  resume: "/assets/BlaccdanteCv.pdf"
};

export const contactInfo: ContactInfo = {
  email: "dannysoawesome@gmail.com",
  phone: "0704 112 0734",
  github: "https://github.com/blaccdante",
  linkedin: "http://linkedin.com/in/oreofe-oladepo-623595233",
  website: "linktr.ee/blaccinferno",
  behance: "https://www.behance.net/50b26f29",
  location: "Babcock University, Ilishan Remo, Ogun State, Nigeria"
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", proficiency: 5 },
  { name: "Next.js", category: "frontend", proficiency: 5 },
  { name: "TypeScript", category: "frontend", proficiency: 4 },
  { name: "JavaScript", category: "frontend", proficiency: 5 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 5 },
  { name: "HTML5", category: "frontend", proficiency: 5 },
  { name: "CSS3", category: "frontend", proficiency: 5 },
  
  // Backend
  { name: "Node.js", category: "backend", proficiency: 4 },
  { name: "Python", category: "backend", proficiency: 4 },
  { name: "Express.js", category: "backend", proficiency: 4 },
  { name: "REST APIs", category: "backend", proficiency: 4 },
  { name: "GraphQL", category: "backend", proficiency: 3 },
  
  // Database
  { name: "MongoDB", category: "database", proficiency: 4 },
  { name: "PostgreSQL", category: "database", proficiency: 3 },
  { name: "Redis", category: "database", proficiency: 3 },
  
  // Web3
  { name: "Solidity", category: "web3", proficiency: 3 },
  { name: "Web3.js", category: "web3", proficiency: 3 },
  { name: "Ethers.js", category: "web3", proficiency: 3 },
  { name: "NFT Development", category: "web3", proficiency: 4 },
  
  // Creative & Animation
  { name: "2D Animation", category: "other", proficiency: 5 },
  { name: "3D Modeling", category: "other", proficiency: 4 },
  { name: "Digital Art", category: "other", proficiency: 5 },
  { name: "Concept Art", category: "other", proficiency: 4 },
  { name: "Adobe After Effects", category: "other", proficiency: 4 },
  { name: "Blender", category: "other", proficiency: 3 },
  
  // DevOps
  { name: "Git", category: "devops", proficiency: 4 },
  { name: "Docker", category: "devops", proficiency: 3 },
  { name: "AWS", category: "devops", proficiency: 3 },
  { name: "Vercel", category: "devops", proficiency: 4 },
];

export const projects: Project[] = [
  {
    id: "chainbridge-pro",
    name: "ChainBridge Pro",
    description: "Advanced blockchain bridge protocol for seamless cross-chain transactions",
    longDescription: "A comprehensive blockchain bridge solution that enables secure and efficient cross-chain asset transfers. Built with modern Web3 technologies and smart contract integration.",
    technologies: ["React", "TypeScript", "Web3.js", "Solidity", "Node.js"],
    githubUrl: "https://github.com/blaccdante/chainbridge-pro",
    featured: true,
    category: "web3"
  },
  {
    id: "portfolio-webapp",
    name: "Portfolio WebApp",
    description: "Modern portfolio website built with Next.js and creative animations",
    longDescription: "A responsive portfolio website showcasing projects, skills, and experience with smooth animations and modern design principles.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/blaccdante/portfolio-webapp",
    liveUrl: "https://blaccdante.dev",
    featured: true,
    category: "web"
  },
  {
    id: "task-manager-api",
    name: "Task Manager API",
    description: "RESTful API for task management with authentication and real-time updates",
    longDescription: "A scalable task management API with user authentication, real-time notifications, and comprehensive project management features.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
    githubUrl: "https://github.com/blaccdante/task-manager-api",
    featured: false,
    category: "api"
  }
];

export const experience: Experience[] = [
  {
    id: "freelance-dev",
    company: "Freelance",
    position: "Full Stack Developer",
    startDate: "2022-01",
    description: "Developed custom web applications for various clients, specializing in modern React applications, API integrations, and Web3 solutions. Successfully delivered 15+ projects with focus on performance and user experience.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Web3", "Tailwind CSS"],
    location: "Remote"
  }
];

export const education: Education[] = [
  {
    id: "university",
    institution: "University",
    degree: "Bachelor's",
    field: "Computer Science",
    startDate: "2018-09",
    endDate: "2022-06"
  }
];