"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import modelforge from "../../assets/modelforge.png";

interface Achievement {
  value: string;
  label: string;
}

interface Project {
  name: string;
  subtitle: string;
  about: string;
  link: string;
  video?: string;
  image?: StaticImageData;
  achievements: Achievement[];
  tech: string[];
}

const projects: Project[] = [
  {
    name: "CodePilot",
    subtitle: "Talk to your codebase.",
    about:
      "AI-powered developer productivity platform that turns a GitHub repository or ZIP archive into a searchable, conversational workspace. It retrieves relevant code context and generates architecture, implementation, and security analysis.",
    video: "/videos/codepilot.mp4",
    link: "https://github.com/devxml/codepilot",

    achievements: [
      {
        value: "500K+",
        label: "Lines of code supported",
      },
      {
        value: "5",
        label: "AI agents orchestrated",
      },
      {
        value: "<50ms",
        label: "Retrieval p95 latency",
      },
    ],

    tech: [
      "Next.js",
      "TypeScript",
      "Express",
      "FastAPI",
      "LangGraph",
      "Pinecone",
      "PostgreSQL",
      "Docker",
    ],
  },

  {
    name: "Job Hunters",
    subtitle: "Automated job discovery.",
    about:
      "Full-stack job discovery platform that aggregates listings from ATS platforms and job aggregators, filters and scores relevant opportunities, and delivers real-time job alerts through Socket.io.",

    video: "/videos/jobdiscovery.mp4",
    link: "https://github.com/devxml/Job-Alert-Automation-Bot",

    achievements: [
      {
        value: "7+",
        label: "ATS platforms integrated",
      },
      {
        value: "30K+",
        label: "Postings per scan",
      },
      {
        value: "95%+",
        label: "Irrelevant matches filtered",
      },
    ],

    tech: [
      "React.js",
      "Express.js",
      "PostgreSQL",
      "Socket.io",
      "Node.js",
      "node-cron",
    ],
  },

  {
    name: "ModelForge",
    subtitle: "Consistent characters, generated anywhere.",
    about:
      "AI-powered character consistency platform that generates consistent scenes from four reference views using a two-stage Gemini and Cloudflare AI generation pipeline.",

    image: modelforge,
    link: "https://github.com/devxml/modelforge",

    achievements: [
      {
        value: "4",
        label: "Reference views",
      },
      {
        value: "2-stage",
        label: "AI generation pipeline",
      },
      {
        value: "AWS S3",
        label: "Image storage",
      },
    ],

    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Google Gemini",
      "Cloudflare AI",
      "AWS S3",
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  /*
   * Detect the project currently occupying the viewport.
   */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projectRefs.current.forEach((project, index) => {
      if (!project) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveProject(index);
          }
        },
        {
          threshold: [0.5],
        }
      );

      observer.observe(project);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  /*
   * Only play a video when its project becomes active.
   * ModelForge has no video, so nothing happens for it.
   */
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeProject) {
        video.currentTime = 0;

        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeProject]);

  return (
    <section id="projects" className="relative mt-24">
      {/* =====================================================
          PROJECTS HEADER
      ====================================================== */}

      <div className="mb-12 flex items-end justify-between gap-6">
        <div>

          <h2 className="text-3xl font-light tracking-[-0.04em] sm:text-5xl">
          Projects          </h2>
        </div>

        <a
          href="https://github.com/devxml"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            items-center
            gap-2
            text-sm
            text-gray-500
            transition-colors
            hover:text-black
            dark:text-gray-400
            dark:hover:text-white
            sm:inline-flex
          "
        >
          View GitHub
          <FaGithubSquare size={21} />
        </a>
      </div>

      {/* =====================================================
          PROJECT STACK
      ====================================================== */}

      <div className="relative">
        {projects.map((project, index) => {
          const isActive = activeProject === index;
          const isLastProject = index === projects.length - 1;

          return (
            <div
              key={project.name}
              ref={(element) => {
                projectRefs.current[index] = element;
              }}
              className="relative"
              style={{
                /*
                 * Creates the vertical scroll distance required
                 * for the next project to overlap the current one.
                 */
                height: isLastProject ? "110vh" : "125vh",

                /*
                 * Every next project appears above the previous one.
                 */
                zIndex: index + 1,
              }}
            >
              {/* =================================================
                  STICKY PROJECT CARD
              ================================================== */}

              <div className="sticky top-0 flex min-h-screen items-center py-8 sm:py-10">
                <article
                  className={`
                    relative
                    grid
                    w-full
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-black/10
                    bg-white
                    dark:border-white/10
                    dark:bg-[#0c0c0c]

                    transition-all
                    duration-[900ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    lg:grid-cols-[1.65fr_1fr]

                    ${
                      isActive
                        ? "translate-y-0 scale-100 opacity-100 shadow-[0_30px_100px_rgba(0,0,0,0.13)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
                        : "translate-y-8 scale-[0.965] opacity-80 shadow-[0_15px_50px_rgba(0,0,0,0.08)]"
                    }
                  `}
                >
                  {/* =================================================
                      PROJECT VISUAL
                  ================================================== */}

                  <div
                    className="
                      relative
                      flex
                      min-h-[380px]
                      items-center
                      justify-center
                      overflow-hidden
                      bg-[#080808]

                      sm:min-h-[500px]

                      lg:min-h-[calc(100vh-5rem)]
                    "
                  >
                    {project.video ? (
                      <>
                        <video
                          ref={(element) => {
                            videoRefs.current[index] = element;
                          }}
                          src={project.video}
                          muted
                          playsInline
                          loop
                          preload="metadata"
                          className={`
                            h-full
                            w-full
                            object-contain

                            transition-transform
                            duration-[1200ms]
                            ease-out

                            ${
                              isActive
                                ? "scale-100"
                                : "scale-[1.025]"
                            }
                          `}
                        />

                        {/* Video overlay */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-black/10
                            via-transparent
                            to-black/20
                          "
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-x-0
                            bottom-0
                            h-28
                            bg-gradient-to-t
                            from-black/30
                            to-transparent
                          "
                        />
                      </>
                    ) : project.image ? (
                      <div className="relative h-full min-h-[380px] w-full sm:min-h-[500px] lg:min-h-[calc(100vh-5rem)]">
                        <Image
                          src={project.image}
                          alt={`${project.name} project preview`}
                          fill
                          priority
                          className={`
                            object-cover
                            object-top

                            transition-transform
                            duration-[1200ms]
                            ease-out

                            ${
                              isActive
                                ? "scale-100"
                                : "scale-[1.025]"
                            }
                          `}
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-black/5
                            via-transparent
                            to-black/20
                          "
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* =================================================
                      PROJECT INFORMATION
                  ================================================== */}

                  <div
                    className="
                      flex
                      min-h-[440px]
                      flex-col
                      justify-between
                      p-7

                      sm:p-10

                      lg:min-h-[calc(100vh-5rem)]
                      lg:p-12
                    "
                  >
                    <div>
                      {/* PROJECT NAME */}

                      <h3
                        className="
                          max-w-lg
                          text-4xl
                          font-light
                          leading-[0.95]
                          tracking-[-0.045em]

                          sm:text-5xl

                          lg:text-6xl
                        "
                      >
                        {project.name}
                      </h3>

                      {/* SUBTITLE */}

                      <p
                        className="
                          mt-6
                          text-xl
                          font-light
                          text-gray-500
                          dark:text-gray-400
                        "
                      >
                        {project.subtitle}
                      </p>

                      {/* DIVIDER */}

                      <div
                        className="
                          my-8
                          h-px
                          w-full
                          bg-black/10
                          dark:bg-white/10
                        "
                      />

                      {/* DESCRIPTION */}

                      <p
                        className="
                          max-w-xl
                          text-base
                          font-light
                          leading-7
                          text-gray-600
                          dark:text-gray-300
                        "
                      >
                        {project.about}
                      </p>

                      {/* =================================================
                          ACHIEVEMENTS
                      ================================================== */}

                      <div className="mt-9">
                        <p
                          className="
                            mb-4
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.18em]
                            text-gray-400
                          "
                        >
                          Highlights
                        </p>

                        <div className="grid grid-cols-3 gap-3">
                          {project.achievements.map((achievement) => (
                            <div
                              key={achievement.label}
                              className="
                                border
                                border-black/10
                                px-3
                                py-4
                                dark:border-white/10
                              "
                            >
                              <p
                                className="
                                  text-xl
                                  font-medium
                                  tracking-[-0.03em]

                                  sm:text-2xl
                                "
                              >
                                {achievement.value}
                              </p>

                              <p
                                className="
                                  mt-1
                                  text-[11px]
                                  font-light
                                  leading-4
                                  text-gray-500
                                  dark:text-gray-400
                                "
                              >
                                {achievement.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* =================================================
                          TECHNOLOGIES
                      ================================================== */}

                      <div
                        className="
                          mt-8
                          flex
                          max-w-xl
                          flex-wrap
                          gap-2
                        "
                      >
                        {project.tech.map((technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-full
                              border
                              border-black/10
                              px-3
                              py-1.5
                              text-xs
                              font-light
                              text-gray-600
                              dark:border-white/10
                              dark:text-gray-300
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* =================================================
                        GITHUB / PROJECT LINK
                    ================================================== */}

                    <div className="mt-10">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group
                          inline-flex
                          items-center
                          gap-2
                          border-b
                          border-black
                          pb-1
                          text-sm
                          font-medium
                          dark:border-white
                        "
                      >
                        View project

                        <MdArrowOutward
                          size={18}
                          className="
                            transition-transform
                            duration-300
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                          "
                        />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          SPACE BEFORE SKILLS
      ====================================================== */}

      <div className="h-24 sm:h-32" />
    </section>
  );
};

export default Projects;