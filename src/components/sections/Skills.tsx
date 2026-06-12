import { SimpleSectionTitle } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/portfolio";

const skills = Object.values(skillCategories).flat();

export function Skills() {
  return (
    <section
      id="skills"
      className="section-block"
      aria-labelledby="skills-heading"
    >
      <SimpleSectionTitle>
        <span id="skills-heading">Skills</span>
      </SimpleSectionTitle>

      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full bg-chip px-3 py-1 text-[13px] font-medium text-chip-text"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
