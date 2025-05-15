export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portfolio Pro",
  description:
    "Create and showcase your professional portfolio and resume with Portfolio Pro.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Personal Info",
      href: "/personal-info",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: "Resume Improver",
      href: "/resume-improver",
    },
    {
      title: "Contact Me",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/your-github", // Replace with actual link
    linkedin: "https://linkedin.com/in/your-linkedin", // Replace with actual link
  },
};
