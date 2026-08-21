import React from "react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "Prisma",
      ],
    },
    {
      title: "AI / ML",
      skills: [
        "LLMs",
        "LangGraph",
        "RAG",
        "AI Agents",
        "Machine Learning",
        "NLP",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Git/GitHub",
        "AWS",
        "Docker",
        "Vercel",
        "Postman",
      ],
    },
  ];

  return (
    <section id="skills" className="mt-12 mb-8">
      {/* Heading */}
      <div className="mb-7">
        <h2 className="text-3xl sm:text-5xl">Skills</h2>
      </div>

      {/* Skills */}
      <div className="border-y border-black/10 dark:border-white/10">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-5 border-b border-black/10 py-7 last:border-b-0 dark:border-white/10 sm:grid-cols-[180px_1fr] sm:gap-10"
          >
            {/* Category */}
            <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
              {group.title}
            </h3>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-black/15 px-3 py-1.5 text-sm font-light text-gray-700 transition-colors duration-200 hover:border-black hover:text-black dark:border-white/15 dark:text-gray-300 dark:hover:border-white dark:hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;