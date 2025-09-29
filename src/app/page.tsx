import About from "@/sections/about";
import { BenefitsP1, BenefitsP2 } from "@/sections/benefits";
import Contact from "@/sections/contact";
import EmailSection from "@/sections/email";
import Hero from "@/sections/hero";
import Showcase from "@/sections/showcase";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <section id="home" className="relative z-10">
        <Hero />
      </section>
      <section id="about" className="relative z-20">
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
        <EmailSection />
      </section>
      <Toaster position="bottom-center" />
    </div>
  );
}
