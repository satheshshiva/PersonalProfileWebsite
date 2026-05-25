"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = (dir: Direction) => {
  switch (dir) {
    case "up": return { y: 24, x: 0 };
    case "down": return { y: -24, x: 0 };
    case "left": return { x: 24, y: 0 };
    case "right": return { x: -24, y: 0 };
    default: return { x: 0, y: 0 };
  }
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  const { x, y } = offset(direction);
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
