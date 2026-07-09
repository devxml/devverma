import { SimpleSectionTitle } from "@/components/ui/SectionHeader";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-block-wide"
      aria-labelledby="experience-heading"
    >
      <SimpleSectionTitle>
        <span id="experience-heading">Work Experience</span>
      </SimpleSectionTitle>

      <div className="space-y-6">
        {experience.map((item) => (
          <div key={item.id} className="space-y-2">
            <div className="flex flex-row items-start justify-between gap-2">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-[11px] font-bold text-muted">
                  {item.company
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toLowerCase()}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.company}
                  </h3>
                  <p className="text-base text-muted">
                    {item.role}
                    {item.type && (
                      <span className="text-muted"> | {item.type}</span>
                    )}
                  </p>
                </div>
              </div>
              <time className="shrink-0 text-base text-muted sm:text-right">
                {item.period}
              </time>
            </div>

            <ul className="space-y-1 pl-12">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-base leading-6 text-muted"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                  {highlight}
                </li>
              ))}
            </ul>

            {item.workshopTopics && (
              <div className="pl-12">
                <div className="flex flex-wrap gap-1.5">
                  {item.workshopTopics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center rounded-md bg-surface px-2 py-0.5 text-xs text-muted"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
