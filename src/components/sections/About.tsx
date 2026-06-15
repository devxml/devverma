import { SimpleSectionTitle } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="section-block" aria-labelledby="about-heading">
      <SimpleSectionTitle>
        <span id="about-heading">About</span>
      </SimpleSectionTitle>

      <p className="text-[15px] leading-7 text-muted">
        I&apos;m a Software Engineer with a solid foundation and enough
        hands-on experience to have broken (and fixed) things across the entire
        stack. Powered by caffeine, curiosity, and the occasional Stack Overflow
        thread, I love diving headfirst into new technologies just to see what I
        can build (or break). Fast learner. Currently juggling
        Full-Stack Development, AI wizardry, DevOps spells, Cloud sorcery, and
        Microservice magic — all while pretending I know what I&apos;m doing (I
        usually do).
      </p>
    </section>
  );
}
