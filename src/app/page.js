'use client'; // required if you're using useReservation (client hook)
import Introduction from './_component/Introduction';
import About from '@/app/About/page';
import Projects from '@/app/project/page';
import Contact from '@/app/contact/page';
import Skills from '@/app/skills/page';
export default function Home() {
  return (
    <div className={"transition-colors duration-500 bg-black text-white"}>
      <section id="home" className="">
       <Introduction/>
      </section>
      
      <section id="skills" className="">
        <Skills />
      </section>
    
      <section id="projects" className="">
        <Projects />

      </section>

    
      <section id="about" className="">
        <About />
      </section>

      <section id="contact" className="">
        <Contact />
      </section>
      
    </div>
  );
}
