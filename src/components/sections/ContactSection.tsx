import { MotionSection } from "../ui/MotionSection.tsx";
import { Button } from "../ui/index.ts";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, easeOut } from "../../lib/motion.tsx";

export function ContactSection() {
  const reduced = useReducedMotion();

  return (
    <MotionSection id="contact" className="section-gap">
      <motion.div
        className="container-site text-center"
        variants={fadeUp}
        initial={reduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        transition={easeOut}
      >
        <p className="label mb-4">Contact</p>
        <h2 className="headline-section mb-10">Reach out.</h2>
        <Button
          intent="cyan"
          size="lg"
          onClick={() => { window.location.href = "mailto:hello@nurturebio.com"; }}
        >
          Get in touch
        </Button>
      </motion.div>
    </MotionSection>
  );
}
