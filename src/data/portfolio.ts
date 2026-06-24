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
      "Repo ingestion via GitHub URL or ZIP upload",
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
      "An AI-powered identity generation platform that learns your appearance from reference photos and creates consistent, high-quality images across any outfit, location, or creative style.",
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
      "Upload 4 reference views to train identity",
      "Gemini-powered prompt optimization",
      "SDXL-based high quality image synthesis",
      "Parallel inference for fast generation",
      "Identity consistency across varied scenes",
      "Cloudinary CDN for instant asset delivery",
      "Role-based access control",
      "JWT-secured REST APIs",
      "MongoDB-backed user management",
      
    ],
  },
  {
    id: "wellnessai",
    name: "WellnessAI",
    description:
      "An AI-powered wellness platform that analyzes your health profile and delivers fully personalized diet, skincare, and haircare plans through domain-specific intelligent agents.",
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
      "15+ health input analysis",
      "Nutrition planning agent",
      "Skincare recommendation agent",
      "Haircare guidance agent",
      "RAG knowledge base retrieval",
      "Persistent plan history",
      "Multi-step consultation flow",
      "Indian product recommendations",
      "MongoDB Atlas storage",
    ],
  },
  {
    id: "telentra",
    name: "Telentra",
    description:
      "An AI-powered recruitment platform that autonomously extracts, evaluates, and ranks candidates against job requirements and handles end-to-end communication without human intervention.",
    image: "/assets/projects/telentra.png",
    github: "https://github.com/devxml/telentra",
    tech: ["Next.js", "FastAPI", "LangGraph", "Gemini API", "MongoDB"],
    features: [
      "AI recruitment platform",
      "Resume-job matching",
      "PDF resume extraction",
      "API Gateway",
      "Independent AI service",
      "Prompt engineering pipeline",
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
    id: "trackon-intern",
    role: "Software Development Intern",
    company: "Trackon Couriers Bharatpur",
    type: null,
    period: "Feb 2026 – May 2026",
    highlights: [
      "Developed an internal dashboard using  React, Node.js,  Express.js,  and  MongoDB  to manage shipment details  and delivery status updates.",
      "Built  REST APIs  for adding, updating, and searching  shipment records and customer information.",
      "Designed a MongoDB database to store and manage  500+  shipment records  , enabling faster search and filtering.",
      "  Reduced average shipment lookup time from  3–5 minutes  to under 1 minute  by replacing manual spreadsheet-based tracking.",
    ],
    workshopTopics: null,
  },
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
    workshopTopics: [
      ]
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
