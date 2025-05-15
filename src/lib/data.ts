import type { PersonalInfo, Project, WorkExperience, Education } from '@/lib/types';

export const personalInfoData: PersonalInfo = {
  name: "Your Name",
  title: "Aspiring Full Stack Developer",
  imageUrl: "https://placehold.co/200x200.png",
  imageHint: "profile person",
  bio: "Passionate and driven individual seeking opportunities to leverage skills in web development to create innovative solutions. Eager to learn and contribute to impactful projects.",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername",
  skills: ["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Problem Solving"],
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
    jobTitle: "Software Engineer Intern",
    company: "Tech Solutions Inc.",
    startDate: "June 2023",
    endDate: "August 2023",
    responsibilities: [
      "Developed and maintained features for a client-facing web application using React and Node.js.",
      "Collaborated with a team of 5 engineers in an agile development environment.",
      "Contributed to bug fixing and performance optimization efforts.",
      "Participated in code reviews and provided constructive feedback.",
    ],
  },
  {
    id: "2",
    jobTitle: "Freelance Web Developer",
    company: "Self-Employed",
    startDate: "January 2022",
    endDate: "May 2023",
    responsibilities: [
      "Designed and developed responsive websites for small businesses using WordPress and custom themes.",
      "Managed client communication, project timelines, and deliverables.",
      "Implemented SEO best practices to improve website visibility.",
    ],
  },
];

export const educationData: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    startDate: "September 2020",
    endDate: "May 2024",
    details: [
      "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management.",
      "Dean's List: Fall 2022, Spring 2023.",
      "Senior Project: Developed a machine learning model for predicting stock prices.",
    ],
  },
  {
    id: "2",
    degree: "Web Development Bootcamp",
    institution: "Coding Academy",
    startDate: "June 2021",
    endDate: "December 2021",
    details: ["Intensive full-stack web development program focusing on MERN stack.", "Completed multiple hands-on projects."],
  },
];
