import { socialLinks, siteConfig } from "@/data/portfolio";
import { SocialLink } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="page-shell flex flex-col items-center gap-4 py-8">
        <div className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
        <p className="text-xs text-muted">
          {siteConfig.name} &copy; {year}
        </p>
      </div>
    </footer>
  );
}
