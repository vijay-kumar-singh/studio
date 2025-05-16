import type { PersonalInfo, Project, WorkExperience, Education, Skill } from '@/lib/types';

export const personalInfoData: PersonalInfo = {
  name: "Vijay Singh",
  title: "Frontend Technical Lead",
  imageUrl: "https://placehold.co/200x200.png",
  imageHint: "profile person",
  bio: "Passionate and driven individual seeking opportunities to leverage skills in web development to create innovative solutions. Eager to learn and contribute to impactful projects.",
  email: "vijaykumarsingh@outlook.com",
  phone: "+45 53838038",
  linkedin: "https://www.linkedin.com/in/vijay-kumar-singh/",
  github: "https://github.com/vijay-kumar-singh",
  skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "DevSecOps"],
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and user authentication. Built with Next.js and Stripe integration.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "ecommerce online store",
    liveLink: "#",
    repoLink: "#",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application allowing users to create, assign, and track tasks. Features real-time updates.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task list productivity",
    liveLink: "#",
    repoLink: "#",
    tags: ["React", "Firebase", "Material UI"],
  },
  {
    id: "3",
    title: "Personal Blog",
    description: "A dynamic personal blog built with a headless CMS and static site generation for optimal performance and SEO.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "blog writing article",
    liveLink: "#",
    tags: ["Gatsby", "GraphQL", "Contentful"],
  },
];

export const workExperienceData: WorkExperience[] = [
  {
    id: "1",
    jobTitle: "Technical Lead - Frontend & DevOps",
    company: "Tata Consultancy Services",
    startDate: "September 2013",
    endDate: "Current",
    responsibilities: [
      "Designed and developed Micro Frontend Architecture-based Risk Advisory Portal using React, Next.js, TypeScript, and Web Components.",
      "Collaborated with a team of 10 engineers in an agile development environment.",
      "Contributed to bug fixing and performance optimization efforts.",
      "Participated in code reviews and provided constructive feedback.",
    ],
  },
  {
    id: "2",
    jobTitle: "Rich Internet Application Consultant",
    company: "Capgemini",
    startDate: "July 2011",
    endDate: "September 2013",
    responsibilities: [
      "Worked as a RIA Consultant and developing Banking and Financial based Web application using Adobe Flex, Java, ActionScript, HTML5, Javascript, EXTJS and Sencha Touch technology.",
      "Managed client communication, project timelines, and deliverables.",
    ],
  },
];
export const skillsData: Skill[] = [
  {
    id: "1",
    name: "HTML5",
    level: 95,
  },
  {
    id: "2",
    name: "React",
    level: 90,
  },
  {
    id: "3",
    name: "TypeScript",
    level: 90,
  },
  {
    id: "4",
    name: "Next.js",
    level: 80,
  },
  {
    id: "5",
    name: "Devops",
    level: 80,
  },
  {
    id: "6",
    name: "Kubernetes",
    level: 70,
  },

];
export const educationData: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    institution: "Anna University",
    startDate: "June 2002",
    endDate: "June 2006",
    details: [
      "First class with distinction",
    ],
  },
];
