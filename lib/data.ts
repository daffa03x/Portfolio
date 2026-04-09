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
    imageUrl: "/hris_yooka.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://github.com/daffa03x",
    category: "Web App",
  },
  {
    id: "2",
    title: "Donation Platform",
    description: "Developed a donation platform with comprehensive features, including user authentication, payment processing, and real-time analytics. Implemented a secure payment gateway integration for seamless transactions. Enhanced user experience with responsive design and intuitive interfaces. Ensured data privacy and security through secure authentication and encryption. Integrated with Google Tag Manager and Google Cloud Platform for enhanced tracking and monitoring.",
    tags: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "GitLab", "Docker", "Payment Gateway", "Meta Pixel", "TikTok Pixel", "Google Tag Manager", "Google Cloud Platform"],
    imageUrl: "/cf_rm.png",
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
    imageUrl: "/dashboard_stellar.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://github.com/daffa03x",
    category: "Web App",
  },
  {
    id: "5",
    title: "Diferensia Company Profile",
    description: "Developed a responsive company profile website for Diferensia with a custom admin workflow for content management and streamlined deployment.",
    tags: ["Laravel", "Filament", "MySQL", "GitLab", "cPanel", "AJAX"],
    imageUrl: "/df_cp.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://diferensia.id",
    category: "Web App",
  },
  {
    id: "6",
    title: "Donasi Produktif Raihmimpi",
    description: "Built a donation platform focused on productive giving flows with Laravel, AJAX interactions, and API integration to support a smoother donor experience.",
    tags: ["Laravel", "AJAX", "API"],
    imageUrl: "/dp_rm.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://donasiproduktif.raihmimpi.org",
    category: "Web App",
  },
  {
    id: "7",
    title: "Pixel Forge",
    description: "Developed an image editing web app with background removal, compression, cropping, and canvas-based manipulation features for fast browser-side workflows.",
    tags: ["Next.js", "React", "Fabric.js", "IMG.LY Background Removal", "react-image-crop", "heic2any", "browser-image-compression", "lucide-react"],
    imageUrl: "/pixel_forge.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://pixel-forge-idn.vercel.app",
    category: "Web App",
  },
  {
    id: "8",
    title: "Super Kits",
    description: "Built a fast marketing website using Astro, Preact, and Tailwind CSS with a lightweight architecture optimized for performance and SEO.",
    tags: ["Astro", "Preact", "Tailwind CSS", "@astrojs/sitemap", "@astrojs/preact", "@tailwindcss/vite"],
    imageUrl: "/super_kits.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://super-kits.vercel.app",
    category: "Web App",
  },
  {
    id: "9",
    title: "FMTR",
    description: "Created a formatting and code utility app with support for structured output transformation, syntax highlighting, SQL formatting, and generated type workflows.",
    tags: ["Next.js", "React", "quicktype-core", "react-syntax-highlighter", "sql-formatter", "uuid"],
    imageUrl: "/fmtr.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://fmtr-zeta.vercel.app",
    category: "Web App",
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "1",
    company: "PT Yooka Arana Niaga",
    role: "Web Developer",
    period: "Oct 2023 – Present",
    description: [
      "Developed a full-featured HRIS system, including organizational hierarchy management, RFID-based attendance tracking, and an internal announcement notification system to streamline HR operations.",
      "Implemented RFID attendance integration to automate employee check-in/out, reducing manual attendance errors and improving data accuracy.",
      "Designed and built an organizational hierarchy structure to support role-based approval workflows and reporting lines.",
      "Built an internal announcement and notification module to distribute company updates and improve employee communication.",
      "Optimized complex database queries, improving dashboard execution efficiency by 13% and fundraising module performance by 8%.",
      "Integrated Meta Pixel and TikTok Pixel for marketing conversion tracking.",
      "Developed responsive company profile websites and ticketing systems with secure payment gateway integration.",
    ],
    tech: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "Payment Gateway", "REST API", "Docker", "GitLab", "Google Cloud", "Digital Ocean"],
  },
  {
    id: "2",
    company: "IKIP Siliwangi",
    role: "Fullstack Developer (Intern)",
    period: "Jun 2022 – Sep 2022",
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
