 'use client';

import Image from 'next/image';
import TypewriterText from './TypewriterText';
import { FaGithub, FaLinkedin, FaTelegram ,FaDownload} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
export default function Introduction() {
  return (
    <section className="relative bg-background text-foreground min-h-screen flex items-center justify-center w-full overflow-hidden mt-2">
      {/* Subtle grid background - full area */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)] opacity-40" aria-hidden />

      {/* Full-width layout: same padding as skills page, no max-width */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center px-7 ">
        {/* Left: Text content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-4"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
          >
            <span className="block text-foreground">Samuel Girma</span>
            <span className="text-accent">
              <TypewriterText />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/80 mb-8 text-base md:text-lg max-w-xl mx-auto md:mx-0"
          >
            I build modern web experiences as a{' '}
            <span className="text-sky-600 dark:text-sky-400 font-semibold">full-stack developer</span>—using the latest tech to create fast, scalable, and user-focused applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
          >
            <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white" size="lg">
                                <a href="/samuel-girma-asfaw.pdf" download>
                                  <FaDownload className="size-4" />
                                  Download Resume
                                </a>
                              </Button>
            <Button asChild variant="outline" size="lg" className="border-sky-600 text-sky-600 dark:text-sky-400 px-8">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center md:justify-start gap-4"
          >
            <a
              href="mailto:samuelgirma888@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-card text-foreground hover:text-sky-600 hover:border-sky-600 transition-all duration-300"
              aria-label="Email"
            >
              <MdEmail className="size-5" />
            </a>
            <a
              href="https://github.com/Sam44556"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-card text-foreground hover:text-sky-600 hover:border-sky-600 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-girma-28046a299"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-card text-foreground hover:text-sky-600 hover:border-sky-600 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-5" />
            </a>
            <a
              href="https://t.me/Sami_girma_8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-card text-foreground hover:text-sky-600 hover:border-sky-600 transition-all duration-300"
              aria-label="Telegram"
            >
              <FaTelegram className="size-5" />
            </a>
          </motion.div>
        </div>

        {/* Right: Profile image – slides in from left with spin, then settles */}
        <motion.div
          initial={{ opacity: 0, x: -280, rotate: -180 }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          transition={{
            x: { type: 'spring', stiffness: 45, damping: 18 },
            rotate: { type: 'spring', stiffness: 50, damping: 16 },
            opacity: { duration: 0.5 },
          }}
          className="order-1 md:order-2 flex justify-center items-center"
        >
          <div className="relative transform md:translate-x-6">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-sky-600 to-sky-700/10 blur-2xl opacity-60" />
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full ring-6 ring-sky-600/30 ring-offset-4 ring-offset-background overflow-hidden bg-muted"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
            >
              <Image
                src="/000.jpg?v=2"
                alt="Samuel Girma"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, 288px"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
