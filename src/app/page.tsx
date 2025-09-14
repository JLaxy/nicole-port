import { CSection } from "@/components/section-layout";
import About from "@/sections/about";
import Hero from "@/sections/hero";

export default function HomePage() {
  return (
    <div>
      <CSection id="home">
        <Hero />
      </CSection>
      <CSection id="about">
        <About />
      </CSection>
      <CSection id="showcase">
        <h1 className="text-4xl font-bold">Showcase Section</h1>
      </CSection>
      <CSection id="benefits">
        <h1 className="text-4xl font-bold">Benefits Section</h1>
      </CSection>
      <CSection id="contact">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </CSection>
      <CSection id="email">
        <h1 className="text-4xl font-bold">Email Section</h1>
      </CSection>
    </div>
  );
}
