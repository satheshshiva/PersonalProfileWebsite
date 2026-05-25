"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, FileText, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import GradientText from "./GradientText";
import MagneticButton from "./MagneticButton";
import Starfield from "./Starfield";
import { LinkedInIcon } from "./BrandIcons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <Starfield density={140} />

      {/* Floating accent orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-cyan/10 blur-3xl pulse-glow" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-violet/10 blur-3xl pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-white/10 bg-white/[0.02] text-xs text-muted backdrop-blur-sm"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
          </span>
          Available for select opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.95]"
        >
          <GradientText>{profile.name}</GradientText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-xl sm:text-2xl font-medium text-foreground/90"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted"
        >
          <MapPin size={14} />
          {profile.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan to-violet text-black font-semibold shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] transition-shadow"
          >
            <Mail size={16} />
            Get in touch
          </MagneticButton>

          <MagneticButton
            href="https://www.linkedin.com/in/sathesh-sivashanmugam-929a0526/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-foreground hover:border-white/40 hover:bg-white/[0.03] transition-colors"
            {...{ target: "_blank", rel: "noopener noreferrer" }}
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </MagneticButton>

          <MagneticButton
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-foreground hover:border-white/40 hover:bg-white/[0.03] transition-colors"
            {...{ target: "_blank", rel: "noopener noreferrer" }}
          >
            <FileText size={16} />
            Resume
          </MagneticButton>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {profile.highlights.map((h) => (
            <div key={h.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                {h.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted">{h.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
