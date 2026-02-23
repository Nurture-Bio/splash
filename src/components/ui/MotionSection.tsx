import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, easeOut } from "../../lib/motion.tsx";
import type { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function MotionSection({
  children,
  id,
  className,
}: MotionSectionProps) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeUp}
      initial={reduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={easeOut}
    >
      {children}
    </motion.section>
  );
}
