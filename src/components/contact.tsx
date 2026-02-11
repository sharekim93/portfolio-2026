"use client";

import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Reveal } from "./reveal";
import { contactLinks } from "@/lib/data";

const iconMap = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
} as const;

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "문제가 발생했습니다.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("메시지 전송에 실패했습니다. 다시 시도해 주세요.");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <span className="text-accent text-sm font-medium uppercase tracking-widest">
                연락처
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-primary mt-2 mb-6">
                함께 일해요
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-lg text-secondary leading-relaxed mb-8">
                프로젝트 제안이나 협업 기회가 있으시면 편하게 연락 주세요.
                24시간 이내에 답변 드리겠습니다.
              </p>
            </Reveal>
            <Reveal>
              <div className="space-y-4">
                {contactLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 text-secondary hover:text-accent transition-colors duration-200"
                    >
                      <Icon size={20} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="홍길동"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="프로젝트에 대해 알려주세요..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}
              {status === "success" && (
                <p className="text-sm text-green-600">
                  메시지가 성공적으로 전송되었습니다!
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary text-white font-medium py-3 px-6 rounded-xl hover:bg-accent transition-colors duration-200 disabled:opacity-50"
              >
                {status === "submitting" ? "전송 중..." : "메시지 보내기"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
