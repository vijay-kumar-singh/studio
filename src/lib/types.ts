export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  liveLink?: string;
  repoLink?: string;
  tags: string[];
}

export interface WorkExperience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  id:string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  details?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  imageUrl: string;
  imageHint?: string;
  bio: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  skills: string[];
}
