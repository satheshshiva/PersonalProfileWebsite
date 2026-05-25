"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, MouseEvent, ComponentPropsWithoutRef } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick" | "ref">;

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 18,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 14, mass: 0.4 });
  const y = useSpring(my, { stiffness: 180, damping: 14, mass: 0.4 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const relX = e.clientX - (r.left + r.width / 2);
    const relY = e.clientY - (r.top + r.height / 2);
    mx.set((relX / r.width) * strength);
    my.set((relY / r.height) * strength);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} {...rest} className="inline-block">
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="inline-block bg-transparent border-0 p-0">
      {inner}
    </button>
  );
}
