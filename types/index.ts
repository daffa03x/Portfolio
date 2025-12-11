export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: 'Web App' | 'Mobile App' | 'Design' | 'Other';
  demoUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
}

export interface NavLink {
  name: string;
  href: string;
}
