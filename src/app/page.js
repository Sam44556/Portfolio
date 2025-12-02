'use client';
import Introduction from './_component/Introduction';
import About from '@/app/About/page';
import Projects from '@/app/project/page';
import Contact from '@/app/contact/page';
import Skills from '@/app/skills/page';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Home section with introduction */}
      <section id="home" className="">
        <Introduction/>
      </section>
      
      {/* Skills section */}
      <section id="skills" className="">
        <Skills />
      </section>
    
      {/* Projects section */}
      <section id="projects" className="">
        <Projects />
      </section>
    
      {/* About section */}
      <section id="about" className="">
        <About />
      </section>

      {/* Contact section */}
      <section id="contact" className="">
        <Contact />
      </section>
    </div>
  );
}
