import { profile } from "@/content/profile";
import GradientText from "./GradientText";
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
            03 — Selected Work
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-16">
            <GradientText>Research</GradientText>, recognition, and impact.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((p, i) => {
            const cardClass =
              "card-glow block h-full p-6 rounded-2xl bg-surface/60 border border-white/[0.06] backdrop-blur-sm";
            const content = (
              <>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-lg font-semibold leading-tight">
                    {p.title}
                  </h3>
                  {p.link ? (
                    <ArrowUpRight size={18} className="text-muted shrink-0" />
                  ) : null}
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            );
            return (
              <Reveal key={i} delay={0.05 * i}>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={cardClass}>{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
