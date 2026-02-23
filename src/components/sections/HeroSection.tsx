import { motion, useReducedMotion } from "framer-motion";
import { DataMesh } from "../DataMesh.tsx";
import { fadeUp, staggerContainer, easeOut } from "../../lib/motion.tsx";

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden">
      <DataMesh />

      <motion.div
        className="container-site relative z-10 text-center py-32"
        variants={staggerContainer}
        initial={reduced ? "visible" : "hidden"}
        animate="visible"
      >
        <motion.h1
          className="display-hero mt-8"
          variants={fadeUp}
          transition={easeOut}
        >
          Nurture Bio
        </motion.h1>

        <motion.p
          className="body-dim mt-6 prose-narrow"
          variants={fadeUp}
          transition={easeOut}
        >
          We're building something at the edge of biology. The details stay quiet for now.
        </motion.p>

        <motion.div className="mt-10" variants={fadeUp} transition={easeOut}>
          <a href="mailto:chuck@nurture.bio" className="btn-base btn-cyan btn-lg">
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 container-site flex justify-between pb-6 z-10">
        <span className="label">&copy; {new Date().getFullYear()} Nurture Bio</span>
        <span className="label">Confidential</span>
      </div>
    </section>
  );
}
