import { Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="section-block-wide"
      aria-labelledby="certifications-heading"
    >
      <SectionHeader
        badge="Course Certificates"
        title="Obsessed With Staying Current"
        centered
      />

      <div className="relative">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5"
          >
            {index < certifications.length - 1 && (
              <span
                className="absolute left-[19px] top-10 h-[calc(100%-2rem)] w-px bg-border"
                aria-hidden
              />
            )}

            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground">
              <Award className="h-4 w-4" aria-hidden />
            </div>

            <div className="min-w-0 flex-1 border-b border-border pb-8 last:border-b-0 last:pb-0">
              <h3
                id={index === 0 ? "certifications-heading" : undefined}
                className="text-base font-bold text-foreground"
              >
                {cert.title}
              </h3>
              <p className="mt-0.5 text-sm text-muted">{cert.issuer}</p>
              <p className="mt-2 text-[14px] leading-6 text-muted">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
