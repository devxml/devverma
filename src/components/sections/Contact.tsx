import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-block-wide pb-8"
      aria-labelledby="contact-heading"
    >
      <SectionHeader
        badge="Contact"
        title="Get In Touch"
        description="Want to discuss projects, opportunities, AI systems, software engineering, or just connect? Feel free to reach out."
        centered
      />
    </section>
  );
}
