'use client';

import Introduction from './_component/Introduction';
import About from '@/app/About/page';
import Projects from '@/app/project/page';
import Contact from '@/app/contact/page';
import Skills from '@/app/skills/page';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <section id="home" aria-label="Home">
        <Introduction />
      </section>
      <section id="skills" aria-label="Skills">
        <Skills />
      </section>
      <section id="projects" aria-label="Projects">
        <Projects />
      </section>
      <section id="about" aria-label="About">
        <About />
      </section>
      <section id="contact" aria-label="Contact">
        <Contact />
      </section>
    </div>
  );
}
