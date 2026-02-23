import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 48;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav-bar ${scrolled ? "nav-bar--scrolled" : ""}`}>
      <div className="container-site flex items-center justify-between h-16">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="wordmark"
          aria-label="Nurture Bio home"
        >
          nurture bio
        </a>

      </div>
    </nav>
  );
}
