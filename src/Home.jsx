import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Education from "./Sections/Education";
import Contributions from "./Sections/Contributions";
import Contact from "./Sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contributions />
      <Contact />
    </main>
  );
}
