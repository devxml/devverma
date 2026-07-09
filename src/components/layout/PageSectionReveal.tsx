"use client";

import { Children, type ReactNode } from "react";
import { BlurFade } from "@/components/ui/BlurFade";

interface PageSectionRevealProps {
  children: ReactNode;
}

export function PageSectionReveal({ children }: PageSectionRevealProps) {
  return (
    <>
      {Children.map(children, (child, index) => (
        <BlurFade
          delay={index * 0.07}
          duration={0.42}
          yOffset={12}
          blur="5px"
          inView={index > 1}
          inViewMargin="-64px"
        >
          {child}
        </BlurFade>
      ))}
    </>
  );
}
