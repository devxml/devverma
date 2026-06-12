interface SectionBadgeProps {
  children: React.ReactNode;
}

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="mb-3 inline-block rounded-full bg-chip px-3 py-1 text-xs font-medium text-chip-text">
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
      className={`mb-8 ${centered ? "text-center" : ""} ${className}`}
    >
      {badge && <SectionBadge>{badge}</SectionBadge>}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-[15px] leading-7 text-muted ${centered ? "mx-auto max-w-lg" : "max-w-2xl"}`}
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
    <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground">
      {children}
    </h2>
  );
}
