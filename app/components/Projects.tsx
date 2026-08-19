import React, { useContext } from "react";
import { FaGithubSquare } from "react-icons/fa";
import codepilot from "../../assets/codepilot.png";
import automationbot from "../../assets/automationbot.png";
import modelforge from "../../assets/modelforge.png";
import wellnessai from "../../assets/wellnessai.png";
import mockmate from "../../assets/mockmate.png";
import Image, { StaticImageData } from "next/image";
import Contextfirst from "../Theme";

const Projects = () => {
  const { mode } = useContext(Contextfirst)!;
  interface Projects {
    name: string;
    about: string;
    link: string;
    image: StaticImageData;
    tech: { name: string }[];
  }

  const projects: Projects[] = [
    {
      name: "CodePilot",
      about:
        "AI-powered developer productivity platform that turns a GitHub repository or ZIP archive into a searchable, conversational workspace, retrieving relevant code context and generating architecture, implementation, and security analysis.",
      link: "https://github.com/devxml/codepilot",
      image: codepilot,
      tech: [
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Express" },
        { name: "FastAPI" },
        { name: "LangGraph" },
        { name: "Pinecone" },
        { name: "PostgreSQL" },
        { name: "Docker" },
      ],
    },
    {
  name: "Job Discovery Automation Assistant",
  about:
    "Full-stack job discovery platform that aggregates listings from ATS platforms and job aggregators, filters and scores relevant opportunities, and delivers real-time job alerts through Socket.io.",
  link: "https://github.com/devxml/Job-Alert-Automation-Bot",
  image: automationbot,
  tech: [
    { name: "React.js" },
    { name: "Express.js" },
    { name: "PostgreSQL" },
    { name: "Socket.io" },
    { name: "node-cron" },
  ],
},
   {
  name: "ModelForge",
  about:
    "AI-powered character consistency platform that generates consistent scenes from four reference views using a two-stage Gemini and Cloudflare AI generation pipeline.",
  link: "https://github.com/devxml/modelforge",
  image: modelforge,
  tech: [
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "Google Gemini" },
    { name: "Cloudflare AI" },
    { name: "AWS S3" },
  ],
},
    {
  name: "WellnessAI",
  about:
    "AI-powered wellness platform that generates personalised Indian diet, skincare, and haircare plans using LangGraph agents, RAG, and India-specific knowledge bases.",
  link: "https://github.com/devxml/wellnessai",
  image: wellnessai,
  tech: [
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "FastAPI" },
    { name: "LangGraph" },
    { name: "LangChain" },
    { name: "Gemini" },
    { name: "ChromaDB" },
    { name: "MongoDB" },
  ],
},
    {
      name: "MockMate",
      about:
        "AI-powered interview preparation platform that analyzes your resume and a job description to generate a match score, skill gap analysis, technical and behavioral practice questions, and a personalized learning roadmap.",
      link: "https://github.com/devxml/mockmate",
      image: mockmate,
      tech: [
        { name: "React" },
        { name: "Vite" },
        { name: "Tailwind CSS" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "Google Gemini" },
      ],
    },
  ];

  return (
    <section id="projects" className="mt-20">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="section-label mb-2">Selected work</p>
          <h2 className="text-3xl font-light tracking-[-0.03em] sm:text-4xl">Projects</h2>
        </div>
        <a target="_blank" href="https://github.com/devxml" className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white">
          View GitHub <FaGithubSquare size={22} />
        </a>
      </div>
      <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((e, i) => (
          <a
            target="_blank"
            key={i}
            href={e.link}
            className={`lift-on-hover flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/70 pb-0 shadow-sm dark:border-gray-700 dark:bg-white/[0.03]`}
          >
            <Image
              src={e.image}
              className="aspect-[16/10] w-full object-cover object-top"
              alt={`${e.name} project preview`}
            />
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-xl font-medium tracking-[-0.02em]">{e.name}</h3>
              <p className="flex-1 text-sm font-light leading-6 text-gray-600 dark:text-gray-300">{e.about}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {e.tech.map((e, i) => (
                  <div
                    key={i}
                    className={`text-xs font-medium rounded-full px-2.5 py-1 ${
                      mode != "dark" ? "bg-gray-200" : "bg-gray-700"
                    }`}
                  >
                    {e.name}
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;