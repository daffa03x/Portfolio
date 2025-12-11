import { NavLink, Project, Skill, Experience, Education } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "HTML", level: 95 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "PHP/Laravel", level: 90 },
  { name: "Next.js/React", level: 80 },
  { name: "MySQL/PostgreSQL", level: 85 },
  { name: "Git/GitHub", level: 88 },
  { name: "Rest API", level: 85 },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "HRIS System",
    description: "Developed and maintained a comprehensive HRIS system independently. Features include employee management, attendance tracking with geolocation, and automated payroll calculations. Focused on optimizing HR processes and data accuracy.",
    tags: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "GitLab", "Docker", "Google Cloud Platform"],
    imageUrl: "/Yooka.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://github.com/daffa03x",
    category: "Web App",
  },
  {
    id: "2",
    title: "Donation Platform",
    description: "Developed a donation platform with comprehensive features, including user authentication, payment processing, and real-time analytics. Implemented a secure payment gateway integration for seamless transactions. Enhanced user experience with responsive design and intuitive interfaces. Ensured data privacy and security through secure authentication and encryption. Integrated with Google Tag Manager and Google Cloud Platform for enhanced tracking and monitoring.",
    tags: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "GitLab", "Docker", "Payment Gateway", "Meta Pixel", "TikTok Pixel", "Google Tag Manager", "Google Cloud Platform"],
    imageUrl: "/RM.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://raihmimpi.id/",
    category: "Web App",
  },
  {
    id: "3",
    title: "Ticketing System",
    description: "Built a ticketing website with secure payment gateway integration. Ensured safe, fast, and automated transaction processing for event management.",
    tags: ["Laravel", "Blade","Payment Gateway", "JavaScript", "MySQL", "Bootstrap", "GitLab", "Google Analytics"],
    imageUrl: "/ZA.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://zillenialaction.id/",
    category: "Web App",
  },
  {
    id: "4",
    title: "Admin Panel System",
    description: "Developed a comprehensive admin dashboard for managing crowdfunding campaigns, users, and transactions. Features include real-time analytics, user verification workflows, and financial reporting tools.",
    tags: ["Laravel", "Blade","jQuery", "MySQL", "Bootstrap", "GitLab", "Docker","Google Cloud Platform"],
    imageUrl: "/Stellar.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://github.com/daffa03x",
    category: "Web App",
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "1",
    company: "PT Yooka Arana Niaga",
    role: "Web Developer",
    period: "Jan 2023 – Present",
    description: [
      "Focused on developing fundraising features for an online donation system and optimizing query performance by 8%.",
      "Optimized admin dashboard queries, improving execution efficiency by 13%.",
      "Integrated Meta Pixel and TikTok Pixel to support ad conversion tracking.",
      "Developed a ticketing website with payment gateway integration for secure and automated payments.",
      "Built responsive company profile websites.",
      "Independently developed and maintained full HRIS system features, optimizing attendance and HR processes.",
    ],
    tech: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "GitLab"],
  },
  {
    id: "2",
    company: "IKIP Siliwangi",
    role: "Fullstack Developer (Intern)",
    period: "Mar 2022 – Jun 2022",
    description: [
      "Developed a room scheduling and booking information system.",
      "Handled both front-end and back-end development to increase administrative efficiency.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Laravel"],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "1",
    institution: "Universitas Jenderal Achmad Yani",
    degree: "Sarjana Teknik Informatika",
    period: "2019 – 2023",
    gpa: "3.39",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/daffa03x",
  linkedin: "https://www.linkedin.com/in/daffa-putra-permana-0a232329b/",
  email: "daffaputrapermana.developer@gmail.com",
  phone: "087737611473",
};
