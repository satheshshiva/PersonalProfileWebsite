import { profile } from "@/content/profile";
import GradientText from "./GradientText";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
            04 — Toolkit
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-16">
            The <GradientText>tech stack</GradientText> behind the work.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.skills.map((group, i) => (
            <Reveal key={group.name} delay={0.04 * i}>
              <div className="card-glow p-6 rounded-2xl bg-surface/60 border border-white/[0.06] h-full">
                <h3 className="font-display text-sm uppercase tracking-wider text-muted mb-4">
                  {group.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-foreground/85 hover:border-cyan/40 hover:text-cyan transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications + Education */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <Reveal>
            <div className="p-6 rounded-2xl bg-surface/40 border border-white/[0.06]">
              <h3 className="font-display text-sm uppercase tracking-wider text-muted mb-4">
                Certifications & Recognition
              </h3>
              <ul className="space-y-2 text-foreground/85">
                {profile.certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan to-violet shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-surface/40 border border-white/[0.06]">
              <h3 className="font-display text-sm uppercase tracking-wider text-muted mb-4">
                Education
              </h3>
              {profile.education.map((e) => (
                <div key={e.school} className="text-foreground/85">
                  <div className="font-medium">{e.school}</div>
                  <div className="text-sm text-muted mt-1">{e.degree}</div>
                  <div className="text-xs text-muted font-mono mt-1">{e.years}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
