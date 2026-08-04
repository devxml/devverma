import React, { useContext } from "react";
import { FaGithubSquare } from "react-icons/fa";
import codepilot from "../../assets/codepilot.png";
import automationbot from "../../assets/automationbot.png";
import modelforge from "../../assets/modelforge.png";
import telentra from "../../assets/telentra.png";
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
      name: "Job Alert Automation Bot",
      about:
        "Automated job aggregation platform that polls direct ATS provider APIs and job aggregators, filters postings against configurable keyword, location, and seniority rules, and sends real-time alerts to a Telegram bot.",
      link: "https://github.com/devxml/Job-Alert-Automation-Bot",
      image: automationbot,
      tech: [
        { name: "Node.js" },
        { name: "PostgreSQL" },
        { name: "Redis" },
        { name: "Axios" },
        { name: "node-cron" },
        { name: "Telegram Bot API" },
      ],
    },
    {
      name: "ModelForge",
      about:
        "AI-powered platform that generates consistent character/model images across different scenes, outfits, moods, and environments, using multi-view reference uploads and a character consistency pipeline.",
      link: "https://github.com/devxml/modelforge",
      image: modelforge,
      tech: [
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "Google Gemini" },
        { name: "Cloudflare AI" },
        { name: "Cloudinary" },
      ],
    },
     {
      name: "Telentra",
      about:
        "Resume-ranking and candidate-job matching platform that lets you upload and manage candidate resumes, create job postings, and generate AI-driven matching insights reviewed through a dashboard.",
      link: "https://github.com/devxml/telentra",
      image: telentra,
      tech: [
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "FastAPI" },
        { name: "LangGraph" },
        { name: "Gemini" },
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
    <div id="projects" className="mt-10">
      <h1 className="text-[20px] flex items-center gap-5 text-center mb-4">
        Projects{" "}
        <span>
          <a target="_blank" href="https://github.com/devxml">
            <FaGithubSquare size={30} />
          </a>
        </span>
      </h1>
      <div className="flex justify-center gap-5 mb-0 flex-wrap w-full">
        {projects.map((e, i) => (
          <a
            target="_blank"
            key={i}
            href={e.link}
            className={`${
              mode === "light" ? "" : " shadow-slate-700"
            } shadow-lg rounded-lg w-full sm:w-[48%] pb-2 max-w-[421px]`}
          >
            <Image
              src={e.image}
              className="w-full object-cover lg:object-top rounded-lg"
              alt="projects"
            />
            <div className="flex flex-col gap-3 w-full p-3">
              <h1 className="relative">{e.name}</h1>
              <p className="font-light">{e.about}</p>
              <div className="flex gap-2 flex-wrap">
                {e.tech.map((e, i) => (
                  <div
                    key={i}
                    className={` text-sm font-extralight rounded-lg px-2  ${
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
    </div>
  );
};

export default Projects;