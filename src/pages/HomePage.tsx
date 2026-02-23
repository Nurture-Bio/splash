import { HeroSection }    from "../components/sections/HeroSection.tsx";
import { FaqSection }      from "../components/sections/FaqSection.tsx";
import { ContactSection }  from "../components/sections/ContactSection.tsx";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="band">
        <FaqSection />
      </div>
      <ContactSection />
    </>
  );
}
