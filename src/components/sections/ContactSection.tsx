import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MotionSection } from "../ui/MotionSection.tsx";
import { fadeUp, easeOut } from "../../lib/motion.tsx";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const EMPTY: FormData = { name: "", email: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [sent, setSent] = useState(false);
  const reduced = useReducedMotion();

  const set =
    (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: replace with Resend API
    setSent(true);
  };

  return (
    <MotionSection id="contact" className="section-gap">
      <div className="container-site max-w-lg mx-auto">
        <p className="label mb-4 text-center">Contact</p>
        <h2 className="headline-section text-center mb-12">Reach out.</h2>

        <div className="card">
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                onSubmit={submit}
                variants={fadeUp}
                initial={reduced ? "visible" : "hidden"}
                animate="visible"
                exit={reduced ? undefined : { opacity: 0, y: -12 }}
                transition={easeOut}
              >
                <div className="flex flex-col gap-8">
                  <div>
                    <label htmlFor="c-name" className="input-label">Name</label>
                    <input id="c-name" type="text" required autoComplete="name"
                      placeholder="Jane Smith" className="input"
                      value={form.name} onChange={set("name")} />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="input-label">Email</label>
                    <input id="c-email" type="email" required autoComplete="email"
                      placeholder="jane@example.com" className="input"
                      value={form.email} onChange={set("email")} />
                  </div>
                  <div>
                    <label htmlFor="c-msg" className="input-label">Message</label>
                    <textarea id="c-msg" rows={3} placeholder="What brings you here?"
                      className="input resize-none"
                      value={form.message} onChange={set("message")} />
                  </div>
                  <button type="submit" className="btn-base btn-cyan btn-lg w-full mt-2">
                    Send
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="text-center py-12"
                variants={fadeUp}
                initial={reduced ? "visible" : "hidden"}
                animate="visible"
                exit={reduced ? undefined : { opacity: 0, y: -12 }}
                transition={easeOut}
              >
                <p className="headline-section">Sent.</p>
                <p className="body-dim mt-3">We'll be in touch.</p>
                <button onClick={() => { setForm(EMPTY); setSent(false); }}
                  className="mt-6 link-subtle">
                  Send another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionSection>
  );
}
