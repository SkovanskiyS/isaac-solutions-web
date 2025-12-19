"use client";

import { motion, useInView } from "framer-motion";
import { type ReactNode, memo, useMemo, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

// Pre-defined direction offsets
const DIRECTIONS = {
  up: { y: 50, x: 0 },
  down: { y: -50, x: 0 },
  left: { x: 50, y: 0 },
  right: { x: -50, y: 0 },
} as const;

const ANIMATE_VISIBLE = { opacity: 1, x: 0, y: 0 };
const EASE = [0.25, 0.4, 0.25, 1] as const;
const VIEW_MARGIN = "-100px";

const ScrollReveal = memo(function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: VIEW_MARGIN });

  const initial = useMemo(
    () => ({
      opacity: 0,
      ...DIRECTIONS[direction],
    }),
    [direction],
  );

  const transition = useMemo(
    () => ({
      duration,
      delay,
      ease: EASE,
    }),
    [duration, delay],
  );

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? ANIMATE_VISIBLE : undefined}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default ScrollReveal;
