'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaGithub, FaCode, FaShieldAlt, FaBug, FaUsers, FaCheckCircle } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiVercel } from 'react-icons/si';

export default function Page() {
  const professionalStrengths = [
    { name: "REST APIs", icon: <FaCode className="w-5 h-5" />, color: "text-blue-500" },
    { name: "JWT Auth", icon: <FaShieldAlt className="w-5 h-5" />, color: "text-green-500" },
    { name: "Debugging", icon: <FaBug className="w-5 h-5" />, color: "text-red-500" },
    { name: "Team Collaboration", icon: <FaUsers className="w-5 h-5" />, color: "text-purple-500" },
    { name: "Clean Code", icon: <FaCheckCircle className="w-5 h-5" />, color: "text-cyan-500" },
  ];

  const skillCategories = [
    {
      title: "Tech Stack",
      description: "Technologies I use to build modern web applications",
      skills: [
        { name: "React", icon: <FaReact className="w-8 h-8" />, color: "text-cyan-400" },
        { name: "Next.js", icon: <div className="w-8 h-8 flex items-center justify-center font-bold text-2xl">N</div>, color: "text-foreground" },
        { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" />, color: "text-blue-500" },
        { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" />, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" />, color: "text-cyan-500" },
        { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress className="w-8 h-8" />, color: "text-foreground" },
        { name: "Django", icon: <div className="w-8 h-8 flex items-center justify-center font-bold text-2xl">D</div>, color: "text-green-600" },
        { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" />, color: "text-green-500" },
        { name: "Supabase", icon: <FaDatabase className="w-8 h-8" />, color: "text-green-400" },
          { name: "Socket.io", icon: <div className="w-8 h-8 flex items-center justify-center font-bold text-2xl">S</div>, color: "text-purple-500" },
          { name: "SI Better Auth", icon: <div className="w-8 h-8 flex items-center justify-center font-bold text-2xl">A</div>, color: "text-pink-500" },
      ]
    },
    {
      title: "Tools & Technologies",
      description: "Development tools and platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-6 h-6" />, color: "text-orange-500" },
        { name: "GitHub", icon: <FaGithub className="w-6 h-6" />, color: "text-foreground" },
        { name: "Postman", icon: <SiPostman className="w-6 h-6" />, color: "text-orange-600" },
        { name: "Vercel", icon: <SiVercel className="w-6 h-6" />, color: "text-foreground" },
      ]
    }
  ];

  return (
    <div className="bg-background text-foreground py-8 md:py-12 px-4 md:px-8" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            My Skills & Expertise
          </h1>
        
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable web applications
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-accent mb-2">Tech Stack Skills</h2>
            <p className="text-foreground/60">Technologies I use to build modern web applications</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {skillCategories[0].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.1 }}
                className="relative flex flex-col items-center justify-center p-4 rounded-xl bg-background border border-border transition-all group cursor-pointer hover:border-accent hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.5)]"
              >
                <div className={`${skill.color} mb-3 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-300`}>
                  {skill.icon}
                </div>
                <p className="text-sm font-semibold text-center text-foreground group-hover:text-accent transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools & Professional Strengths Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Tools & Technologies Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-muted/30 rounded-2xl p-8 md:p-10 border border-border h-full">
              <h2 className="text-3xl font-bold text-accent mb-6">Tools & Technologies</h2>
              <div className="grid grid-cols-2 gap-3">
                {skillCategories[1].skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -8, scale: 1.1 }}
                    className="relative flex flex-col items-center justify-center p-3 rounded-xl bg-background border border-border transition-all group cursor-pointer hover:border-accent hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.5)]"
                  >
                    <div className={`${skill.color} mb-2 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-300`}>
                      {skill.icon}
                    </div>
                    <p className="text-xs font-semibold text-center text-foreground group-hover:text-accent transition-colors">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Professional Strengths Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-muted/30 rounded-2xl p-8 md:p-10 border border-border h-full">
              <h2 className="text-3xl font-bold text-accent mb-6">Professional Strengths</h2>
              <div className="flex flex-wrap gap-3">
                {professionalStrengths.map((strength, idx) => (
                  <motion.span
                    key={strength.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-center gap-2 px-5 py-3 bg-background border border-border rounded-lg text-sm font-semibold hover:border-accent hover:text-accent transition-colors cursor-default group"
                  >
                    <span className={`${strength.color} group-hover:text-accent transition-colors`}>
                      {strength.icon}
                    </span>
                    {strength.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Additional Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
        
        </motion.section>
      </div>
    </div>
  );
}