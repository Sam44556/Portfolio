"use client";

import { motion } from "framer-motion";
import { FaFileAlt, FaDownload, FaEye, FaCode, FaServer, FaDatabase, FaMobile } from "react-icons/fa";

export default function Page() {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Django, and RESTful API design.",
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Database Design",
      description: "Designing and implementing efficient database solutions with PostgreSQL, MongoDB, and Supabase.",
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment with modern tech stacks.",
    },
  ];

  const experience = [
    {
      year: "2025",
      title: "Backend Developer Intern",
      company: "Efuye Gela - Summer Internship",
      description: "Developed real-time chat application with JWT authentication, file sharing, and group chat features using Next.js and Supabase.",
    },
    {
      year: "2023 - Present",
      title: "Freelance Developer",
      company: "Self-Employed",
      description: "Building custom web applications for clients, specializing in full-stack development with React, Next.js, and Node.js.",
    },
  ];

  return (
    <div className="bg-background text-foreground pt-12 md:pt-16 pb-8 md:pb-12 px-4 md:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            About Me
          </h2>
          <p className="text-foreground opacity-70 text-lg max-w-2xl mx-auto">
            Passionate software engineer dedicated to creating impactful solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side - Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">Introduction</h3>
              <p className="text-foreground opacity-80 leading-relaxed">
                Hello! I'm <span className="text-accent font-semibold">Samuel Girma</span>,  Software Engineer in Ethiopia. I am passionate about designing and building innovative software solutions that combine strong engineering principles with modern user experiences.
              </p>
              
            </motion.div>

            {/* Goals & Mission */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">Goals & Mission</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-muted border border-border">
                  <h4 className="font-semibold text-lg mb-2">My Goal</h4>
                  <p className="text-foreground opacity-70 text-sm">
                    To create technology that is impactful, user-friendly, and meaningful in addressing real-world needs through innovative software solutions.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-muted border border-border">
                  <h4 className="font-semibold text-lg mb-2">My Mission</h4>
                  <p className="text-foreground opacity-70 text-sm">
                    To continuously evolve with the tech landscape, delivering high-quality, scalable applications that make a difference in people's lives.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative pl-8 border-l-2 border-accent pb-6 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                    <div className="mb-1">
                      <span className="text-sm text-accent font-semibold">{exp.year}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{exp.title}</h4>
                    <p className="text-sm text-foreground opacity-60 mb-2">{exp.company}</p>
                    <p className="text-foreground opacity-70 text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">Services I Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-lg bg-muted border border-border hover:border-accent transition-all group"
                  >
                    <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                    <p className="text-foreground opacity-70 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Resume & Skills (1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Resume Card */}
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-lg bg-muted border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <FaFileAlt className="text-accent w-6 h-6" />
                  <h3 className="font-bold text-lg">My Resume</h3>
                </div>
                <p className="text-foreground opacity-70 text-sm mb-6">
                  Download or view my complete resume to learn more about my experience and skills.
                </p>
                <div className="space-y-3">
                  <motion.a
                    href="/resume samuel girma asfaw.pdf"
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-accent text-white rounded-lg hover:opacity-90 transition font-semibold"
                  >
                    <FaDownload className="w-4 h-4" />
                    Download Resume
                  </motion.a>
                  <motion.a
                    href="/resume samuel girma asfaw.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition font-semibold"
                  >
                    <FaEye className="w-4 h-4" />
                    View Resume
                  </motion.a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="p-6 rounded-lg bg-muted border border-border">
                <h3 className="font-bold text-lg mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground opacity-70 text-sm">Projects Completed</span>
                    <span className="font-bold text-accent">10+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground opacity-70 text-sm">Years of Experience</span>
                    <span className="font-bold text-accent">3+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground opacity-70 text-sm">Technologies</span>
                    <span className="font-bold text-accent">15+</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
