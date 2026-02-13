import { Github } from "lucide-react";
import Image from "next/image";
import { socialLinks } from "@/lib/data";

const iconMap = {
  github: Github,
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
            return (
              <a
                key={link.label}
                href={link.href}
                className="text-secondary hover:text-accent transition-colors duration-200"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Icon ? (
                  <Icon size={18} />
                ) : link.icon === "tistory" ? (
                  <Image
                    src="/icons/tistory.svg"
                    alt="Tistory"
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px]"
                  />
                ) : null}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
