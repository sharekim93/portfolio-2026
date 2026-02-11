"use client";

import { useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";

const navItems = [
  { label: "프로젝트", href: "#projects" },
  { label: "소개", href: "#about" },
  { label: "연락처", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          나눔<span className="text-accent">.</span>dev
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

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-accent transition-colors duration-200"
        >
          연락하기
          <ArrowUp size={16} />
        </a>

        <button
          className="md:hidden p-2"
          aria-label="메뉴 열기/닫기"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl px-4 py-4 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
