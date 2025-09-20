import About from "@/sections/about";
import {BenefitsP1, BenefitsP2} from "@/sections/benefits";
import Hero from "@/sections/hero";

export default function HomePage() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="showcase">
        <h1 className="text-4xl font-bold">Showcase Section</h1>
      </section>
      <section id="benefits">
        <BenefitsP1 />
        <BenefitsP2 />
      </section>
      <section id="contact">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>
      <section id="email">
        <h1 className="text-4xl font-bold">Email Section</h1>
      </section>
    </div>
  );
}
