import { Github, Linkedin } from "lucide-react";
import { socialLinks } from "@/lib/data";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-secondary">
          &copy; {new Date().getFullYear()} 김나눔.
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            if (!Icon) return null;
            return (
              <a
                key={link.label}
                href={link.href}
                className="text-secondary hover:text-accent transition-colors duration-200"
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
