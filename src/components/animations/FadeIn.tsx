"use client";

import { motion } from "framer-motion";
import { type ReactNode, memo, useMemo } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// Pre-defined animation values
const INITIAL_STATE = { opacity: 0, y: 20 };
const ANIMATE_STATE = { opacity: 1, y: 0 };
const EASE = [0.25, 0.4, 0.25, 1] as const;

const FadeIn = memo(function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: FadeInProps) {
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
      initial={INITIAL_STATE}
      animate={ANIMATE_STATE}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default FadeIn;
