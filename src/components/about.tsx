import { Reveal } from "./reveal";
import { skills, experience } from "@/lib/data";

const skillCategories = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks", items: skills.frameworks },
  { label: "View", items: skills.view },
  { label: "Deploy", items: skills.deploy },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <span className="text-accent text-sm font-medium uppercase tracking-widest">
                소개
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl mt-2 mb-6">
                고객 경험을 아는 개발자
              </h2>
            </Reveal>
            <Reveal>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  IT HW 영업과 대기업 서비스 운영을 거치며 고객이 진짜 원하는
                  것이 무엇인지 몸으로 배웠습니다. 이 경험은 개발자로
                  전환한 뒤에도 사용자 관점에서 서비스를 바라보는
                  가장 큰 자산이 되었습니다.
                </p>
                <p>
                  빅솔론(글로벌 프린터 기업)에서 TypeScript·React·Spring으로
                  라벨 디자인 에디터와 MDM 시스템을 만들었고,
                  체카(상품화 서비스 플랫폼)에서는 프론트엔드 개발자로
                  경매 사이트 포팅과 딜러·파트너 웹앱을 개발했습니다.
                </p>
                <p>
                  웹 개발이 주 경력이지만 C++, 하이브리드 앱, 백엔드까지
                  다양한 분야에 관심을 두고 있습니다.
                  고객이 만족할 서비스를 만드는 것이 저의 목표입니다.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal>
              <h3 className="font-heading font-bold text-lg mb-4">
                기술 스택
              </h3>
              <div className="space-y-4">
                {skillCategories.map((category) => (
                  <div key={category.label}>
                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                      {category.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <div
                          key={skill}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h3 className="font-heading font-bold text-lg mb-4">
                경력
              </h3>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.period} className="flex gap-4">
                    <div
                      className={`w-1 rounded-full flex-shrink-0 ${
                        exp.current ? "bg-accent" : "bg-white/20"
                      }`}
                    />
                    <div>
                      <p className="font-medium text-white">{exp.title}</p>
                      <p className="text-sm text-zinc-400">
                        {exp.company} — {exp.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
