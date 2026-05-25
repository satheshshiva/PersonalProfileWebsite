import { profile } from "@/content/profile";
import GradientText from "./GradientText";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
            02 — Experience
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-16">
            A <GradientText>17-year</GradientText> career trajectory.
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan/50 via-violet/30 to-transparent"
          />

          <div className="space-y-12">
            {profile.experience.map((job, i) => (
              <Reveal key={i} delay={0.05 * i} direction="up">
                <div className="relative pl-12 sm:pl-16">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan to-violet shadow-[0_0_18px_rgba(34,211,238,0.6)]" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {job.role}
                      {job.client ? (
                        <span className="text-muted font-normal text-base">
                          {" "}— Client: {job.client}
                        </span>
                      ) : null}
                    </h3>
                    <span className="text-sm text-muted font-mono shrink-0">
                      {job.start} — {job.end}
                    </span>
                  </div>
                  <div className="text-sm text-muted mb-4">
                    <span className="text-foreground/70">{job.company}</span>
                    <span className="mx-2">·</span>
                    {job.location}
                  </div>
                  <ul className="space-y-2 text-foreground/75">
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:w-2 before:h-px before:bg-muted/60"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
