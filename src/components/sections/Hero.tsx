import { ProfileImage } from "@/components/ui/ProfileImage";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-block"
      aria-labelledby="hero-heading"
    >
      <div className="flex items-start justify-between gap-6 sm:gap-8">
        <div className="min-w-0 flex-1">
          <h1
            id="hero-heading"
            className="text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Hi, I&apos;m Dev{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-muted">
            Software Engineer on a quest to build cool stuff and chase dopamine
            hits with every commit . . . .
          </p>
        </div>

        <div className="hidden shrink-0 sm:block">
          <ProfileImage />
        </div>
      </div>

      <div className="mt-8 flex justify-center sm:hidden">
        <ProfileImage />
      </div>
    </section>
  );
}
