import { profile } from "@/content/profile";
import GradientText from "./GradientText";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
            01 — About
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-10">
            Engineering at the <GradientText>intersection</GradientText> of
            <br className="hidden sm:block" />
            security and scale.
          </h2>
        </Reveal>
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          {profile.bio.map((para, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <p>{para}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
