interface SectionBadgeProps {
  children: React.ReactNode;
}

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="mb-2 inline-block rounded-full bg-chip px-3 py-1 text-sm font-medium text-chip-text">
      {children}
    </span>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-6 ${centered ? "text-center" : ""} ${className}`}
    >
      {badge && <SectionBadge>{badge}</SectionBadge>}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-2 text-lg leading-6 text-muted ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

interface SimpleSectionTitleProps {
  children: React.ReactNode;
}

export function SimpleSectionTitle({ children }: SimpleSectionTitleProps) {
  return (
    <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
      {children}
    </h2>
  );
}
