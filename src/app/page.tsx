import About from "@/sections/about";
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
        <h1 className="text-4xl font-bold">Benefits Section</h1>
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
