"use client";

import { FaGithub, FaLinkedin, FaTelegram, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Page() {
  const techs = ["React", "TypeScript", "Node.js", "Next.js", "Django", "MongoDB", "Supabase"];

  return (
    <div className="bg-black text-white min-h-screen mb-10 px-6 py-12 flex flex-col">
      {/* Page Title */}
      <h1 className="text-4xl md:text-4xl font-bold ml-12 mb-12 text-purple-500">
        About Me
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left Side - Paragraphs */}
        <div className="space-y-4 flex flex-col justify-center">
          <p className="text-gray-300 text-justify leading-relaxed">
            Hello! I&apos;m <span className="text-purple-400 font-semibold">Samuel Girma</span>, a
             5th-year Software Engineering student at Addis Ababa
            Science and Technology University (AASTU). I am passionate about
            designing and building innovative software solutions that combine
            strong engineering principles with modern user experiences. My goal
            is to create technology that is impactful, user-friendly, and
            meaningful in addressing real-world needs.
          </p>

          <p className="text-gray-300 leading-relaxed text-justify ">
            To support this vision, I have built a strong technical foundation
            in programming and software development. My skills span{" "}
            <span className="text-purple-400 font-semibold">C++</span> and{" "}
            <span className="text-purple-400 font-semibold">Java</span> for problem-solving
            and software design, along with web technologies like{" "}
            <span className="text-purple-400 font-semibold">HTML</span>,{" "}
            <span className="text-purple-400 font-semibold">CSS</span>,{" "}
            <span className="text-purple-400 font-semibold">JavaScript</span>, and{" "}
            <span className="text-purple-400 font-semibold">TypeScript</span>. I also utilize{" "}
            <span className="text-purple-400 font-semibold">Python</span> for backend and
            data-related tasks, enabling me to write clean and reliable code
            across different domains.
          </p>

          <p className="text-gray-300 leading-relaxed text-justify ">
            Building on this foundation, I specialize in developing full-stack
            applications that bring ideas to life from concept to deployment. I
            work across both frontend and backend with secure, scalable
            databases. These are some of the Frameworks I work with:
          </p>

          {/* Tech Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            {techs.map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-gray-800 border border-purple-500 rounded-full cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 font-semibold transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex flex-col justify-between">
         
          <div className="space-y-6">
             <h1 className="text-2xl text-center  font-bold mt-5 ml-5 mb-12 text-purple-500">
             Social Media Links & Resume
          </h1>
            <a
              href="mailto:samuelgirma888@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition"
            >
              <MdEmail className="text-red-500 w-6 h-6" />
              <span>samuelgirma888@gmail.com</span>
            </a>

            <a
              href="https://github.com/Sam44556"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition"
            >
              <FaGithub className="text-white w-6 h-6" />
              <span>Sam44556</span>
            </a>

            <a
              href="https://www.linkedin.com/in/samuel-girma-28046a299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition"
            >
              <FaLinkedin className="text-blue-600 w-6 h-6" />
              <span>Samuel Girma</span>
            </a>

            <a
              href="https://t.me/Sami_girma_8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition"
            >
              <FaTelegram className="text-sky-400 w-6 h-6" />
              <span>@samuel_girma_8</span>
            </a>
          </div>

          {/* Resume Section */}
          <div className="mt-8 border-t border-gray-700 pt-6">
            <div className="flex items-center gap-3 mb-4">
              <FaFileAlt className="text-purple-500 w-6 h-6" />
              <span className="text-gray-300 font-semibold">Resume - Samuel Girma</span>
            </div>
            <div className="flex gap-4">
              <a
                href="/resume samuel girma asfaw.pdf"
                download
                className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition font-semibold"
              >
                Download
              </a>
              <a
                href="/resume samuel girma asfaw.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-600 transition font-semibold"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
