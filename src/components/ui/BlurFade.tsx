"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  duration = 0.38,
  delay = 0,
  yOffset = 10,
  inView = false,
  inViewMargin = "-48px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin as "-48px",
  });
  const shouldShow = !inView || inViewResult;

  const variants: Variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldShow ? "visible" : "hidden"}
      variants={variants}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
