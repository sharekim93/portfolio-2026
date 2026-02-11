import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { projects } from "@/lib/data";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest">
            경력 프로젝트
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-primary mt-2">
            주요 프로젝트
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {featured && (
            <Reveal className="md:col-span-2">
              <div className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div
                    className={`bg-gradient-to-br ${featured.gradient} p-8 sm:p-12 flex items-center justify-center min-h-[280px]`}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <span className="font-heading font-black text-3xl text-accent">
                          {featured.company[0]}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-secondary/70">
                        {featured.company}
                      </p>
                      <p className="text-xs text-secondary/50 mt-1">
                        {featured.period}
                      </p>
                    </div>
                  </div>
                  <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <span className="text-accent text-xs font-medium uppercase tracking-widest mb-3">
                      {featured.label}
                    </span>
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-primary mb-3">
                      {featured.title}
                    </h3>
                    <p className="text-secondary leading-relaxed mb-4">
                      {featured.description}
                    </p>
                    <ul className="space-y-1.5 mb-6">
                      {featured.achievements.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-secondary flex gap-2"
                        >
                          <span className="text-accent mt-1 flex-shrink-0">
                            &bull;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium bg-gray-100 text-secondary px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <div className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full">
                <div
                  className={`bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center min-h-[180px]`}
                >
                  <div className="text-center">
                    <div className="w-14 h-14 bg-white/80 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <span className="font-heading font-black text-xl text-primary/70">
                        {project.company[0]}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-secondary/60">
                      {project.company}
                    </p>
                    <p className="text-xs text-secondary/40 mt-0.5">
                      {project.period}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {project.achievements.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-secondary flex gap-1.5"
                      >
                        <span className="text-accent mt-0.5 flex-shrink-0">
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-gray-100 text-secondary px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
