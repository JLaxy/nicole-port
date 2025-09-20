import About from "@/sections/about";
import {BenefitsP1, BenefitsP2} from "@/sections/benefits";
import Contact from "@/sections/contact";
import Email from "@/sections/email";
import Hero from "@/sections/hero";
import Showcase from "@/sections/showcase";

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
        <Showcase />
      </section>
      <section id="benefits">
        <BenefitsP1 />
        <BenefitsP2 />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="email">
        <Email />
      </section>
    </div>
  );
}
