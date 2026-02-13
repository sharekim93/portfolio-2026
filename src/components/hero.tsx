import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Reveal } from "./reveal";
import { DownloadResumeButton } from "./download-resume-button";
import { CodeAnimation } from "./code-animation";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block bg-blue-500/10 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                  Frontend
                </span>
                <span className="inline-block bg-green-500/10 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                  Backend
                </span>
                <span className="inline-block bg-purple-500/10 text-purple-600 text-sm font-medium px-3 py-1 rounded-full">
                  Prompt Engineering
                </span>
              </div>
            </Reveal>
            <Reveal>
              <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-primary mb-6">
                더 나은
                <br />
                <span className="text-accent">비즈니스 경험</span>을
                <br />
                만듭니다
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-lg sm:text-xl text-secondary leading-relaxed max-w-lg mb-8">
                IT 영업부터 서비스 운영, 글로벌 프린터 기업, 상품화 플랫폼까지
                — 고객 경험을 아는 개발자가 만족할 서비스를 만듭니다.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-accent transition-colors duration-200"
                >
                  프로젝트 보기
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-primary font-medium px-6 py-3 rounded-xl border border-gray-200 hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  연락하기
                </a>
                <DownloadResumeButton />
              </div>
            </Reveal>
          </div>

          <Reveal className="hidden lg:block">
            <CodeAnimation />
          </Reveal>
        </div>

        <Reveal className="mt-16 flex justify-center">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-secondary/50 hover:text-accent transition-colors duration-200"
            aria-label="프로젝트로 스크롤"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll
            </span>
            <ChevronDown size={20} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
