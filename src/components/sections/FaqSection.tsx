import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, easeOut } from "../../lib/motion.tsx";

const ITEMS = [
  {
    id: "what",
    q: "What does Nurture Bio do?",
    a: "We're under NDA. Reach out and we'll share what we can.",
  },
  {
    id: "invest",
    q: "How can I learn more?",
    a: "Use the form below. We respond to every serious inquiry.",
  },
  {
    id: "hiring",
    q: "Are you hiring?",
    a: "Yes. The best. Message us.",
  },
] as const;

/** ResizeObserver ratchet — tracks max height, never shrinks. */
function useHeightRatchet<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const max = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      const h = entry.borderBoxSize[0].blockSize;
      if (h > max.current) {
        max.current = h;
        el.style.minHeight = `${h}px`;
      }
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return ref;
}

export function FaqSection() {
  const reduced = useReducedMotion();
  const ratchetRef = useHeightRatchet<HTMLDivElement>();

  return (
    <section id="faq" className="section-gap">
      <motion.div
        className="container-site"
        variants={staggerContainer}
        initial={reduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.p className="label mb-10" variants={fadeUp} transition={easeOut}>
          Questions
        </motion.p>

        <div ref={ratchetRef}>
          <Accordion.Root type="single" collapsible>
            {ITEMS.map((item) => (
              <motion.div key={item.id} variants={fadeUp} transition={easeOut}>
                <Accordion.Item value={item.id} className="faq-item">
                  <Accordion.Header>
                    <Accordion.Trigger className="faq-trigger">
                      {item.q}
                      <ChevronDown size={16} className="faq-chevron" aria-hidden="true" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="faq-content">
                    <p className="faq-answer">{item.a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </motion.div>
    </section>
  );
}
