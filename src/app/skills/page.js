'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNextdotjs,
  SiSocketdotio,
  SiFigma,
  SiRedux,
  SiMysql,
} from 'react-icons/si';

// Four category cards with pill badges - exact layout from reference
const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'Django', 'Tailwind CSS', 'Redux', 'Better Auth', 'Socket.io'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Figma'],
  },
];

// Bottom row: colored technology logos (icons only, like reference)
const techLogos = [
  { name: 'Git', Icon: FaGitAlt, className: 'text-orange-500' },
  { name: 'JavaScript', Icon: SiJavascript, className: 'text-yellow-400' },
  { name: 'TypeScript', Icon: SiTypescript, className: 'text-blue-500' },
  { name: 'Python', Icon: SiPython, className: 'text-cyan-400' },
  { name: 'HTML5', Icon: SiHtml5, className: 'text-orange-500' },
  { name: 'CSS3', Icon: SiCss3, className: 'text-blue-500' },
  { name: 'React', Icon: FaReact, className: 'text-cyan-400' },
  { name: 'Next.js', Icon: SiNextdotjs, className: 'text-foreground' },
  { name: 'Node.js', Icon: FaNodeJs, className: 'text-green-500' },
  { name: 'MongoDB', Icon: SiMongodb, className: 'text-green-500' },
  { name: 'MySQL', Icon: SiMysql, className: 'text-blue-600' },
  { name: 'Tailwind', Icon: SiTailwindcss, className: 'text-cyan-500' },
  { name: 'Redux', Icon: SiRedux, className: 'text-purple-500' },
  { name: 'Socket.io', Icon: SiSocketdotio, className: 'text-foreground' },
  { name: 'Figma', Icon: SiFigma, className: 'text-fuchsia-500' },
  { name: 'Vercel', Icon: SiVercel, className: 'text-foreground' },
];

export default function Page() {
  return (
    <section
      className="bg-background text-foreground w-full pt-12 md:pt-0
 overflow-hidden"
      id="skills"
    >
      {/* Header: padded so title doesn't touch edges */}
      <div className="w-full px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-2">
            Technical Skills
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg max-w-2xl">
            Tools and Technologies I leverage to build  digital experiences
          </p>
        </motion.div>
      </div>

      {/* Category cards: full screen width on both sides, minimal edge padding */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 px-3 sm:px-4 md:px-5 lg:px-6 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.06 }}
              className="rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 p-5 md:p-6 min-h-[180px] flex flex-col shadow-sm dark:shadow-none"
            >
              <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-sky-400/50 dark:border-sky-500/40 bg-sky-50 dark:bg-sky-500/5 px-3 py-1.5 text-xs md:text-sm font-medium text-sky-600 dark:text-sky-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Logo marquee: full viewport width, edge to edge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden"
        style={{ maxWidth: '100vw' }}
        aria-hidden
      >
        <div className="flex w-max animate-skills-marquee items-center gap-8 md:gap-12 py-4">
          {[...techLogos, ...techLogos].map(({ name, Icon, className }, i) => (
            <span
              key={`${name}-${i}`}
              className={`shrink-0 ${className} opacity-90 hover:opacity-100 transition-opacity`}
              title={name}
              aria-label={name}
            >
              <Icon className="size-10 md:size-12" aria-hidden />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
