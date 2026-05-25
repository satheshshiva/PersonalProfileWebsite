"use client";

import { useEffect, useRef } from "react";

export default function SpotlightBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: `
          radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%),
            rgba(34, 211, 238, 0.10),
            transparent 40%),
          radial-gradient(900px circle at calc(var(--mx, 50%) + 200px) calc(var(--my, 30%) + 100px),
            rgba(168, 85, 247, 0.08),
            transparent 50%)
        `,
      }}
    />
  );
}
