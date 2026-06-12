import { ExternalLink } from "lucide-react";
import { GitHubBrandIcon } from "@/components/ui/SocialIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-block-wide"
      aria-labelledby="projects-heading"
    >
      <SectionHeader
        badge="My Projects"
        title="Check Out My Latest Work"
        description="I've worked on a range of impactful projects—from building production-grade full-stack applications to engineering AI systems powered by vector databases, agent workflows, and cloud-native architectures."
        centered
      />

      <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
        {projects.map((project, index) => (
          <article key={project.id} className="flex flex-col">
            <ProjectImage
              src={project.image}
              alt={`${project.name} project screenshot`}
              priority={index === 0}
            />

            <div className="mt-4 flex flex-1 flex-col">
              <h3
                id={index === 0 ? "projects-heading" : undefined}
                className="text-base font-bold tracking-tight text-foreground"
              >
                {project.name}
              </h3>

              <p className="mt-2 text-[14px] leading-6 text-muted">
                {project.description}
              </p>

              <ul className="mt-3 space-y-1.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[14px] leading-6 text-muted"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md bg-surface px-2 py-0.5 text-xs text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-chip px-3 py-1.5 text-xs font-medium text-chip-text transition-opacity hover:opacity-80"
                >
                  <GitHubBrandIcon className="h-3.5 w-3.5" aria-hidden />
                  Source
                  <ExternalLink className="h-3 w-3 opacity-60" aria-hidden />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
