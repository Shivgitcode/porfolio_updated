import type { ExperienceItemData } from "./types";

export const navItems = [
  { label: "// work", href: "#work", tab: "work" },
  { label: "// education", href: "#education", tab: "education" },
  { label: "// skills", href: "#skills", tab: "skills" },
  { label: "// contact", href: "#contact", tab: "contact" },
];

export const tabs = ["work", "education", "skills", "contact"];

export const projects = [
  {
    id: "gimi",
    title: "Gimi",
    description: "AI-powered commit message generating cli tool",
    highlights: [
      "AI agent auto-fills EMRs from doctor–patient conversations",
      "80% reduction in manual data entry",
      "40–50% API latency improvement",
      "Serving 10,000+ active users",
    ],
    tech: ["Go", "Cli", "OpenAI", "Gemini", "LLM", "GenAI"],
    tag: "AI/Data",
    role: "Backend Engineer",
    status: "Production",
    index: 0,
    links: {
      live: "/",
      code: "https://github.com/shivgitcode/gimi",
    },
  },
  {
    id: "buynest",
    title: "BuyNest",
    index: 1,
    description:
      "Scalable full-stack e-commerce platform with secure payments.",
    highlights: [
      "Cashfree payment integration",
      "40% fewer API calls using React Query",
      "Handles 500+ concurrent users",
      "AWS S3 media storage",
    ],
    tag: "FullStack",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "AWS"],
    role: "Full-stack Developer",
    status: "Live",
    links: {
      live: "/",
      code: "https://github.com/shivgitcode/buynest",
    },
  },
  {
    id: "astrocode",
    title: "AstroCode",
    index: 2,
    description: "Online code playground with live preview and authentication.",
    tag: "FullStack",
    highlights: [
      "CodeMirror-based editor",
      "JWT auth with 2FA",
      "90% Lighthouse score",
      "Modular, scalable architecture",
    ],
    tech: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    role: "Full-stack Developer",
    status: "Live",
    links: {
      live: "/",
      code: "https://github.com/shivgitcode/astrocode",
    },
  },
  {
    id: "stubble-mart",
    title: "Stubble Mart",
    index: 3,
    description: "Agricultural marketplace connecting farmers with buyers.",
    tag: "FullStack",
    highlights: [
      "3rd place at HackWars 2024",
      "20,000+ INR prize",
      "2,000+ participants",
    ],
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    role: "Frontend Engineer",
    status: "Hackathon Winner",
    links: {
      live: "/",
      code: "/",
    },
  },
];

export const experienceData: ExperienceItemData[] = [
  {
    company: "Vetic",
    role: "Software Developer Intern - Backend",
    type: "Internship",
    location: "Gurgaon, Haryana",
    startDate: "Jul 2025",
    endDate: "Present",
    isOngoing: true,
    description:
      "Worked on scaling the Vetic App and Veterinary Management System (VMS) into a full SaaS platform, handling e-commerce, bookings, EMRs, and clinic operations for thousands of active users.",
    responsibilities: [
      "Developed and scaled the Vetic App and Veterinary Management System (VMS) into a SaaS platform",
      "Built an AI agent to auto-fill EMRs from doctor–patient conversations and add prescribed items to the billing cart",
      "Architected and migrated legacy infrastructure to AWS with VPCs, NAT Gateways, Bastion Hosts, EC2, and RDS",
      "Optimized cloud infrastructure using Graviton migration, instance rightsizing, and RDS tuning to reduce costs",
      "Built high-performance FastAPI backend services for bookings, alerts, and e-commerce",
      "Improved API performance using asyncio, reducing latency by 40–50%",
      "Automated vaccination recording and EMR summarization using GenAI",
      "Integrated third-party vendor APIs like MakeMyRadio and TrueIn",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "AWS",
      "Terraform",
      "EC2",
      "RDS",
      "VPC",
      "Redis",
      "PostgreSQL",
      "AsyncIO",
      "GenAI",
    ],
    companyUrl: "https://vetic.in",
  },
];

export const skills = [
  {
    type: "Programming languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Go",
      "Java",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    type: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TanStack Query", "Shadcn UI"],
  },
  {
    type: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "Hono.js", "tRPC"],
  },
  {
    type: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Amazon RDS"],
  },
  { type: "Orms", skills: ["Prisma", "Drizzle ORM", "Sequelize"] },
  {
    type: "Cloud/Devops",
    skills: [
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "AWS VPC",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  { type: "Tools", skills: ["Git", "Linux", "Postman", "Nginx", "PM2"] },
  {
    type: "Architecture",
    skills: [
      "REST APIs",
      "Microservices",
      "Serverless Architecture",
      "Async Programming",
    ],
  },
];

export const contactLinks = [];
