import { NavLink, Project, Skill, Experience, Education } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "Laravel / PHP", level: 90 },
  { name: "Next.js / React", level: 85 },
  { name: "TypeScript", level: 82 },
  { name: "JavaScript", level: 85 },
  { name: "MySQL", level: 88 },
  { name: "REST API", level: 88 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Docker", level: 78 },
  { name: "Redis", level: 75 },
  { name: "Cloudflare R2", level: 75 },
  { name: "Payment Gateway", level: 80 },
  { name: "Git / GitLab", level: 88 },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "HRIS System",
    description:
      "Developed and maintained a web-based HRIS system for managing employee data, attendance, leave requests, asset management, organizational hierarchy, internal announcements, and HR operational workflows. Focused on improving administrative efficiency, data accuracy, and internal business processes.",
    tags: [
      "Laravel",
      "Next.js",
      "TypeScript",
      "MySQL",
      "Tailwind CSS",
      "Docker",
      "Cloudflare R2",
      "GitLab",
    ],
    imageUrl: "/hris_yooka.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://github.com/daffa03x",
    category: "Web App",
  },
  {
    id: "2",
    title: "Donation Platform",
    description:
      "Developed a production-grade donation platform with campaign management, donor transactions, payment gateway integration, analytics dashboard, and marketing conversion tracking. Integrated Meta Pixel, TikTok Pixel, and Google Tag Manager to support campaign performance monitoring.",
    tags: [
      "Laravel",
      "Next.js",
      "MySQL",
      "Tailwind CSS",
      "Payment Gateway",
      "Meta Pixel",
      "TikTok Pixel",
      "Google Tag Manager",
      "Docker",
      "GitLab",
    ],
    imageUrl: "/cf_rm.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://raihmimpi.id/",
    category: "Web App",
  },
  {
    id: "3",
    title: "Daily Journal AI",
    description:
      "Developed an AI-powered journaling application that helps users write, organize, and reflect on daily journal entries using Google Gemini API. Built with authentication, database persistence, journal management, and AI-generated insights to support personal reflection workflows.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Google Gemini API",
      "Tailwind CSS",
      "Vercel",
    ],
    imageUrl: "/daily_journal_ai.png",
    repoUrl: "https://github.com/daffa03x/daily-journal-ai",
    demoUrl: "https://daffa-daily-journal.vercel.app",
    category: "AI Web App",
  },
  {
    id: "4",
    title: "Budget Tracking AI Assistant",
    description:
      "Built an AI-powered personal finance tracking application integrated with Google Gemini API and Telegram Bot. Features include transaction tracking, balance calculation, Telegram command support, and AI-generated financial insights to help users monitor spending behavior.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Google Gemini API",
      "Telegram Bot API",
      "Tailwind CSS",
      "Vercel",
    ],
    imageUrl: "/budget_tracking_ai.png",
    repoUrl: "https://github.com/daffa03x/budget-tracking",
    demoUrl: "https://budget-tracking-llm.vercel.app",
    category: "AI Web App",
  },
  {
    id: "5",
    title: "Ticketing System",
    description:
      "Built an event ticketing system with ticket management, secure payment gateway integration, transaction processing, and automated event registration workflows. Designed to support fast and reliable ticket purchases for public events.",
    tags: [
      "Laravel",
      "Blade",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "Payment Gateway",
      "GitLab",
      "Google Analytics",
    ],
    imageUrl: "/ZA.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://zillenialaction.id/",
    category: "Web App",
  },
  {
    id: "6",
    title: "Admin Panel System",
    description:
      "Developed an internal admin dashboard for managing crowdfunding campaigns, users, transactions, verification workflows, analytics, and financial reports. Built to help internal teams monitor operations and manage business data more efficiently.",
    tags: [
      "Laravel",
      "Blade",
      "jQuery",
      "MySQL",
      "Bootstrap",
      "Docker",
      "GitLab",
      "Google Cloud Platform",
    ],
    imageUrl: "/dashboard_stellar.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://github.com/daffa03x",
    category: "Web App",
  },
  {
    id: "7",
    title: "Pixel Forge",
    description:
      "Developed a browser-based image editing web app with background removal, image compression, cropping, HEIC conversion, and canvas-based manipulation features. Built to support fast and practical image processing workflows directly from the browser.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Fabric.js",
      "IMG.LY Background Removal",
      "react-image-crop",
      "heic2any",
      "browser-image-compression",
    ],
    imageUrl: "/pixel_forge.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://pixel-forge-idn.vercel.app",
    category: "Web App",
  },
  {
    id: "8",
    title: "FMTR",
    description:
      "Created a developer utility app for formatting and transforming structured data, including syntax highlighting, SQL formatting, and generated type workflows. Built to simplify common development tasks and improve productivity.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "quicktype-core",
      "react-syntax-highlighter",
      "sql-formatter",
      "uuid",
    ],
    imageUrl: "/fmtr.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://fmtr-zeta.vercel.app",
    category: "Web App",
  },
  {
    id: "9",
    title: "Diferensia Company Profile",
    description:
      "Developed a responsive company profile website for Diferensia with content management workflows, dynamic pages, and streamlined deployment. Built to help the organization present company information and services professionally.",
    tags: [
      "Laravel",
      "Filament",
      "MySQL",
      "AJAX",
      "GitLab",
      "cPanel",
    ],
    imageUrl: "/df_cp.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://diferensia.id",
    category: "Web App",
  },
  {
    id: "10",
    title: "Donasi Produktif Raihmimpi",
    description:
      "Built a donation microsite focused on productive giving flows with responsive pages, AJAX interactions, and API integration. Developed to improve donor experience and support campaign-specific fundraising activities.",
    tags: [
      "Laravel",
      "AJAX",
      "API Integration",
      "MySQL",
      "Responsive Design",
    ],
    imageUrl: "/dp_rm.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://donasiproduktif.raihmimpi.org",
    category: "Web App",
  },
  {
    id: "11",
    title: "Super Kits",
    description:
      "Built a lightweight marketing website using Astro, Preact, and Tailwind CSS with a performance-focused architecture. Optimized for fast loading, SEO readiness, and clean content presentation.",
    tags: [
      "Astro",
      "Preact",
      "Tailwind CSS",
      "@astrojs/sitemap",
      "@astrojs/preact",
      "@tailwindcss/vite",
    ],
    imageUrl: "/super_kits.png",
    repoUrl: "https://github.com/daffa03x",
    demoUrl: "https://super-kits.vercel.app",
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
      "Developed and maintained production-grade web applications for HRIS, donation platforms, ticketing systems, and internal business operations.",
      "Built HRIS modules including RFID-based attendance, leave requests, employee management, asset management, organization hierarchy, and internal announcements.",
      "Integrated payment gateway, Meta Pixel, and TikTok Pixel to support transaction flows and marketing conversion tracking.",
      "Improved dashboard data processing and reporting workflows to support faster operational decision-making.",
      "Built responsive and maintainable fullstack applications using Laravel, Next.js, TypeScript, MySQL, Redis, Tailwind CSS, Docker, and Cloudflare R2.",
    ],
    tech: [
      "Laravel",
      "Next.js",
      "TypeScript",
      "MySQL",
      "Redis",
      "Tailwind CSS",
      "Docker",
      "Cloudflare R2",
      "Payment Gateway",
      "REST API",
      "GitLab",
    ],
  },
  {
    id: "2",
    company: "IKIP Siliwangi",
    role: "Fullstack Developer Intern",
    period: "Jun 2022 – Sep 2022",
    description: [
    "Developed a web-based room scheduling and booking information system to support campus administrative operations.",
    "Built front-end interfaces and back-end logic for managing room availability, booking records, and scheduling data.",
    "Implemented CRUD functionality, database structure, and form validation to improve data management accuracy.",
    "Collaborated with internal users to understand scheduling workflows and translate requirements into system features.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  }
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
