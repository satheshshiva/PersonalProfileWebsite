import { profile } from "@/content/profile";
import GradientText from "./GradientText";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { Mail, FileText } from "lucide-react";
import { LinkedInIcon } from "./BrandIcons";

const iconMap = {
  mail: Mail,
  linkedin: LinkedInIcon,
  file: FileText,
  github: Mail,
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
            05 — Contact
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s build something
            <br />
            <GradientText>worth securing.</GradientText>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-muted mb-12 max-w-xl mx-auto">
            Open to senior cybersecurity, staff engineering, and technical leadership
            conversations. Reach out — I&apos;ll respond personally.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-violet text-black font-semibold shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:shadow-[0_0_70px_rgba(34,211,238,0.55)] transition-shadow"
          >
            <Mail size={18} />
            {profile.email}
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-3">
            {profile.socials.map((s) => {
              const Icon = iconMap[s.icon] ?? Mail;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-12 h-12 inline-flex items-center justify-center rounded-full border border-white/10 text-muted hover:text-foreground hover:border-cyan/50 hover:bg-cyan/5 transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
