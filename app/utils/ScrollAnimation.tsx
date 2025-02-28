"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function ScrollAnimation({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const directionOffset = {
    up: { y: 100 },
    down: { y: -100 },
    left: { x: 100 },
    right: { x: -100 },
  };

  const initialOffset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ ...initialOffset, opacity: 0 }}
      animate={
        isInView ? { x: 0, y: 0, opacity: 1 } : { ...initialOffset, opacity: 0 }
      }
      transition={{
        duration: 1.2,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
