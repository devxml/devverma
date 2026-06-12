"use client";

import { Home, FolderKanban, Mail, Moon, Sun } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import { SocialIcon } from "@/components/ui/SocialIcons";
import { useTheme } from "@/components/layout/ThemeProvider";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function FloatingDock() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center pb-4 sm:pb-6">
      <nav
        className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-border bg-background px-2 py-2 shadow-lg shadow-black/5 sm:gap-1 sm:px-3"
        aria-label="Site navigation"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-surface hover:text-foreground sm:h-10 sm:w-10"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </a>
          );
        })}

        <span
          className="mx-0.5 hidden h-5 w-px bg-border sm:block"
          aria-hidden
        />

        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            aria-label={link.label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-surface hover:text-foreground sm:h-10 sm:w-10"
          >
            <SocialIcon icon={link.icon} className="h-4 w-4" />
          </a>
        ))}

        <span className="mx-0.5 h-5 w-px bg-border" aria-hidden />

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-surface hover:text-foreground sm:h-10 sm:w-10",
          )}
        >
          {theme === "light" ? (
            <Sun className="h-4 w-4" aria-hidden />
          ) : (
            <Moon className="h-4 w-4" aria-hidden />
          )}
        </button>
      </nav>
    </div>
  );
}
