"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

type InteractiveTiltProps = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  scale?: number;
  maxTilt?: number;
};

export function InteractiveTilt({
  children,
  className,
  contentClassName,
  scale = 1.02,
  maxTilt = 6,
}: InteractiveTiltProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 140,
    damping: 20,
    mass: 0.7,
  });
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 140,
    damping: 20,
    mass: 0.7,
  });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const percentX = x / bounds.width;
    const percentY = y / bounds.height;

    rotateY.set((percentX - 0.5) * maxTilt * 2);
    rotateX.set((0.5 - percentY) * maxTilt * 2);

    ref.current?.style.setProperty("--glare-x", `${percentX * 100}%`);
    ref.current?.style.setProperty("--glare-y", `${percentY * 100}%`);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);

    ref.current?.style.setProperty("--glare-x", "50%");
    ref.current?.style.setProperty("--glare-y", "50%");
  };

  return (
    <motion.div
      ref={ref}
      className={cn("interactive-tilt", className)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className={cn("interactive-tilt__content", contentClassName)}>
        {children}
      </div>
      <span className="interactive-tilt__glare" />
    </motion.div>
  );
}
