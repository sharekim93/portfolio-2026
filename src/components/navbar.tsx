"use client";

import { ArrowUp, Phone } from "lucide-react";

const navItems = [
  { label: "프로젝트", href: "#projects" },
  { label: "소개", href: "#about" },
  { label: "연락처", href: "#contact" },
];

export function Navbar() {

  return (
    <nav
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl"
      role="navigation"
      aria-label="메인 내비게이션"
    >
      <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm">
        <a
          href="#hero"
          className="font-heading font-extrabold text-lg tracking-tight text-primary"
        >
          Developer <span className="text-accent">Share Kim</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:010-9887-6284"
            className="inline-flex items-center justify-center w-9 h-9 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-200"
            aria-label="전화 걸기"
          >
            <Phone size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-accent transition-colors duration-200"
          >
            연락하기
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
