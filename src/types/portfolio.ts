export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'web3' | 'api' | 'tool';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'web3' | 'other';
  proficiency: 1 | 2 | 3 | 4 | 5; // 1-5 scale
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string; // undefined means current
  description: string;
  technologies: string[];
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
  website?: string;
  behance?: string;
  phone?: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  nickname: string;
  title: string;
  bio: string;
  avatar?: string;
  resume?: string;
}