export const siteConfig = {
  name: "Dev Verma",
  title: "Dev Verma | Software Engineer",
  description:
    "Software Engineer building scalable systems, AI-powered products, and cloud-native applications. Full-Stack, AI Systems, Cloud Infrastructure & DevOps.",
  url: "https://devverma.com",
  email: "devverma2031@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/devxml",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devxml/",
    icon: "linkedin" as const,
  },
  {
    label: "X",
    href: "https://x.com/devcodebyte",
    icon: "twitter" as const,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/devxml/",
    icon: "leetcode" as const,
  },
  {
    label: "Email",
    href: "mailto:devverma2031@gmail.com",
    icon: "mail" as const,
  },
];

export const stats = [
  { value: "5+", label: "Major Projects" },
  { value: "20+", label: "Technologies" },
  { value: "AI & Full Stack", label: "Focus" },
  { value: "Cloud & DevOps", label: "Enthusiast" },
];

export const interests = [
  "Full-Stack Development",
  "Artificial Intelligence",
  "Agentic Systems",
  "Cloud Computing",
  "DevOps",
  "Microservices",
  "System Design",
];

export const skillCategories = {
  Frontend: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "FastAPI", "Prisma", "GraphQL"],
  Databases: ["PostgreSQL", "MongoDB", "Redis"],
  "AI & LLM Engineering": [
    "LangChain",
    "LangGraph",
    "AI Agents",
    "Ollama",
    "GPT Models",
    "ChromaDB",
    "Pinecone",
    "RAG Systems",
  ],
  "Cloud & DevOps": [
    "Docker",
    "AWS",
    "GCP",
    "GitHub Actions",
    "CI/CD",
    "Serverless",
  ],
  Architecture: ["Microservices", "System Design", "Cloud Computing"],
};

export const projects = [
  {
    id: "codepilot",
    name: "CodePilot",
    description:
      "An AI-powered code intelligence platform that ingests repositories and enables semantic code search, multi-agent analysis, and security vulnerability detection through streaming AI responses.",
    image: "/assets/projects/codepilot.png",
    github: "https://github.com/devxml/codepilot",
    tech: [
      "Next.js",
      "FastAPI",
      "LangGraph",
      "Pinecone",
      "PostgreSQL",
      "Groq",
      "Docker",
    ],
    features: [
      "Repository ingestion via GitHub URL or ZIP upload",
      "Pinecone semantic code search",
      "Multi-agent LangGraph workflow",
      "Security vulnerability analysis",
      "Streaming AI responses via SSE",
      "PostgreSQL chat memory",
      "FastAPI backend",
      "Next.js frontend",
      "Dockerized architecture",
    ],
  },
  {
    id: "modelforge",
    name: "ModelForge",
    description:
      "A character-consistent AI image generation platform with multi-angle references, Gemini-powered prompt enhancement, and cloud-native storage architecture.",
    image: "/assets/projects/modelforge.png",
    github: "https://github.com/devxml/modelforge",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "Gemini Flash",
      "Cloudflare AI",
      "MongoDB",
    ],
    features: [
      "Character consistency system",
      "Multi-angle image references",
      "Gemini-powered prompt enhancement",
      "Cloudflare AI image generation",
      "Cloudinary storage",
      "JWT authentication",
      "MongoDB persistence",
    ],
  },
  {
    id: "wellnessai",
    name: "WellnessAI",
    description:
      "An India-first wellness platform offering personalized diet, skincare, and haircare planners powered by RAG pipelines and multi-provider LLM support.",
    image: "/assets/projects/wellnessai.png",
    github: "https://github.com/devxml/wellnessai",
    tech: [
      "FastAPI",
      "LangGraph",
      "ChromaDB",
      "RAG",
      "Next.js",
      "MongoDB Atlas",
    ],
    features: [
      "India-first wellness platform",
      "Diet planner",
      "Skincare planner",
      "Haircare planner",
      "ChromaDB RAG pipelines",
      "LangGraph workflows",
      "Multi-provider LLM support",
      "MongoDB Atlas storage",
    ],
  },
  {
    id: "telentra",
    name: "Telentra",
    description:
      "An AI recruitment platform with resume-job matching, microservice architecture, and LangGraph-powered candidate analysis workflows.",
    image: "/assets/projects/telentra.png",
    github: "https://github.com/devxml/telentra",
    tech: ["Next.js", "FastAPI", "LangGraph", "Gemini API", "MongoDB"],
    features: [
      "AI recruitment platform",
      "Resume-job matching",
      "Microservice architecture",
      "API Gateway",
      "Independent AI service",
      "LangGraph analysis workflows",
      "MongoDB persistence",
    ],
  },
  {
    id: "mockmate",
    name: "MockMate",
    description:
      "An interview preparation platform with resume analysis, skill-gap detection, learning roadmap generation, and PDF export capabilities.",
    image: "/assets/projects/mockmate.png",
    github: "https://github.com/devxml/mockmate",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Puppeteer"],
    features: [
      "Resume analysis",
      "Interview preparation",
      "Skill-gap detection",
      "Learning roadmap generation",
      "Resume optimization",
      "PDF export",
      "History dashboard",
    ],
  },
];

export const certifications = [
  {
    id: "microsoft-genai",
    title: "Generative AI",
    issuer: "Microsoft",
    description:
      "Completed hands-on training in Generative AI concepts, prompt engineering, and AI-powered applications. Gained practical understanding of large language models (LLMs) and their real-world use cases.",
    image: "/assets/certificates/microsoft-genai.svg",
  },
  {
    id: "nptel-dsa",
    title: "Data Structures & Algorithms, Python",
    issuer: "NPTEL (IIT)",
    description:
      "Learned core data structures, algorithms, and problem-solving techniques using Python. Developed strong foundations in algorithm design, complexity analysis, and efficient coding practices.",
    image: "/assets/certificates/nptel-dsa.svg",
  },
];

export const experience = [
  {
    id: "ai-ml-lead",
    role: "AI/ML Lead",
    company: "Technical Club, Sanskriti University",
    type: "Volunteer",
    period: "Feb 2025 – May 2026",
    highlights: [
      "Led AI/ML initiatives",
      "Conducted workshops on LLMs, RAG Systems, Vector Databases, and Modern AI Applications",
    ],
    workshopTopics: ["LLMs", "RAG Systems", "Vector Databases", "Modern AI Applications"],
  },
  {
    id: "codesoft-intern",
    role: "Software Development Intern",
    company: "CodeSoft",
    type: null,
    period: "Dec 2024",
    highlights: [
      "Built IPO tracking platform using React, TypeScript, and Vite",
      "Integrated NSE India RapidAPI",
      "Designed reusable architecture",
      "Implemented filtering and search capabilities",
      "Ensured high UI reliability",
    ],
    workshopTopics: null,
  },
];
