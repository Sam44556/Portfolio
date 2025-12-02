import Image from "next/image";
import TypewriterText from "./TypewriterText";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Introduction() {
  return (
    <>
   <div className="bg-background text-foreground min-h-screen flex items-center justify-center px-6">
  <div className="max-w-6xl w-full  grid grid-cols-1 md:grid-cols-2  md:pl-10 items-center gap-20">
    
    {/* Left: Text content */}
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold leading-snug mb-4 text-center md:text-left">
        <span className="block text-foreground">I&apos;m Samuel Girma,</span>
        <span className="text-accent font-bold"> <TypewriterText /></span>
      </h1>
      <p className="text-foreground opacity-80 mb-6 text-center md:text-left text-base md:text-lg lg:text-xl">
       I develop modern websites using the latest technologies <span className="text-accent font-bold">as a full-stack developer</span>— constantly evolving with the tech landscape.
      </p>
       <div className="flex flex-row justify-center md:justify-start gap-4 mb-6">
       

  <button className="bg-accent hover:opacity-90 text-white font-semibold py-2 px-5 md:py-3 md:px-6 lg:py-3 lg:px-8 rounded-full shadow-md transition duration-300 text-sm md:text-base lg:text-lg">
    <a href="#contact">Contact Me</a>
  </button>


        <button className="bg-muted text-accent border border-accent font-semibold py-2 px-5 md:py-3 md:px-6 lg:py-3 lg:px-8 rounded-full shadow-md transition duration-300 hover:bg-accent hover:text-white text-sm md:text-base lg:text-lg">
         <a href="#projects">View My Work</a>
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-row justify-center md:justify-start gap-4 mt-2">
        {/* Email */}
        <a
          href="mailto:samuelgirma888@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-accent transition-all duration-300 transform hover:scale-110"
          aria-label="Email"
        >
          <MdEmail className="w-5 h-5" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Sam44556"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-accent transition-all duration-300 transform hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub className="w-5 h-5" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/samuel-girma-28046a299"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-accent transition-all duration-300 transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/Sami_girma_8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-accent transition-all duration-300 transform hover:scale-110"
          aria-label="Telegram"
        >
          <FaTelegram className="w-5 h-5" />
        </a>
      </div>
    </div>

    {/* Right: Circular image */}
   <div className="flex justify-center items-center ">
  <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-purple-600 to-purple-400 p-1">
    <div className="relative rounded-full overflow-hidden w-full h-full bg-background">
       <Image
        src="/000.jpg?v=2"
        alt="SAMI"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>


  </div>
</div>

</>
  );
}
