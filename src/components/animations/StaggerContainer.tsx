"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, memo, useMemo } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

// Pre-defined animation variants
const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const StaggerContainer = memo(function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {
  const variants = useMemo<Variants>(() => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }), [staggerDelay]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default StaggerContainer;

export const StaggerItem = memo(function StaggerItem({
  children,
  className = "",
}: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={ITEM_VARIANTS} className={className}>
      {children}
    </motion.div>
  );
});
