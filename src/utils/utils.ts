export const navItems = [
  { label: "// work", href: "#work", tab: "work" },
  { label: "// education", href: "#education", tab: "education" },
  { label: "// skills", href: "#skills", tab: "skills" },
  { label: "// contact", href: "#contact", tab: "contact" },
];

export const tabs = ["work", "education", "skills", "contact"];

export const projects = [
  {
    id: "syncverse",
    title: "SyncVerse",
    description:
      "AI-powered veterinary SaaS platform streamlining EMRs, bookings, and billing.",
    highlights: [
      "AI agent auto-fills EMRs from doctor–patient conversations",
      "80% reduction in manual data entry",
      "40–50% API latency improvement",
      "Serving 10,000+ active users",
    ],
    tech: ["Python", "FastAPI", "AWS", "PostgreSQL", "Terraform", "GenAI"],
    tag: "AI/Data",
    role: "Backend Engineer",
    status: "Production",
    index: 0,
    links: {
      live: "/",
      code: "/",
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

export const educationData = [
  {
    id: 1,
    school: "Stanford University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    year: "2018 - 2022",
    achievements: [
      "GPA: 3.9/4.0",
      "Dean's List all semesters",
      "President of AI/ML Club",
    ],
    index: 0,
  },
  {
    id: 2,
    school: "MIT Online",
    degree: "Professional Certificate",
    field: "Full Stack Development & Web3",
    year: "2023",
    achievements: [
      "Completed with distinction",
      "Specialized in blockchain architecture",
      "Capstone: DeFi Protocol Design",
    ],
    index: 1,
  },
  {
    id: 3,
    school: "Coursera & Udacity",
    degree: "Specialization Certificates",
    field: "AI/ML, Cloud Architecture & DevOps",
    year: "2022 - 2024",
    achievements: [
      "TensorFlow Advanced Course",
      "AWS Solutions Architect",
      "Kubernetes & Docker Mastery",
    ],
    index: 2,
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
