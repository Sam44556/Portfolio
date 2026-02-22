'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Page() {
  const projects = [
    {
      title: 'CareerAI',
      description:
        "AI-driven web app that recommends personalized career paths based on users skills and interests.",
      image: '/career.jpg',
      tech: ['Next.js', 'Supabase', 'Prisma', 'Gemini AI'],
      github: 'https://github.com/Sam44556/AI-Powered-Career-Path-web',
      live: 'https://ai-powered-career-path-web.vercel.app/',
    },
    {
      title: 'E-commerce Website',
      description:
        'Full-stack e-commerce platform with  checkout via Stripe, and a modern responsive shopping experience.',
      image: '/ec.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'PWA', 'Stripe', 'NextAuth', 'shadcn'],
      github: 'https://github.com/Sam44556/E-commerce',
      live: 'https://e-commerce-shop-hazel.vercel.app/',
    },
    {
      title: 'AgroTech',
      description:
        'Full-stack platform connecting farmers, buyers, and experts with crop listings, chat, analytics, and weather.',
      image: '/ag.jpg',
      tech: ['Next.js', 'Node.js', 'TypeScript', 'Prisma', 'PostgreSQL/Neon', 'Socket.io', 'BetterAuth', 'Tailwind'],
      github: 'https://github.com/Sam44556/AgroTech',
      live: '',
    },
    {
      title: 'FreelanceHub',
      description:
        'Freelance marketplace where clients hire professionals and freelancers find remote job opportunities.',
      image: '/fre.jpg',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Sam44556/freelance_web',
      live: 'https://freelance-web-2.onrender.com/',
    },
    {
      title: 'Chat Application',
      description:
        'Real-time chat with individual and group chats, file sharing, and profile management.',
      image: '/bunatetu.jpg',
      tech: ['Next.js', 'Prisma', 'Supabase', 'JWT'],
      github: 'https://github.com/Afomiya21-negash/chat-app',
      live: 'https://chat-app-b12t.vercel.app/',
    },
    {
      title: 'Student Course Management',
      description:
        'Backend API for courses, enrollments, assignments, and grading with role-based auth.',
      image: '/download.jpg',
      tech: ['Django', 'PostgreSQL', 'JWT', 'REST API'],
      github: 'https://github.com/Sam44556/Student-Course-Management-System',
      live: '',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="bg-background text-foreground pt-12 md:pt-10
 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-5 mb-16"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl ">
            A selection of recent work  each showcasing  a unique problem-solving and technical approach
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="group h-full flex flex-col overflow-hidden border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                <div className="relative h-52 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="border-sky-600 text-sky-600 dark:text-sky-400 ">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3 pt-0">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="border-sky-600 text-sky-600 dark:text-sky-400 ">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <FaGithub className="size-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" asChild className="bg-sky-600 hover:bg-sky-700">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <FaExternalLinkAlt className="size-4" />
                        Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
