
'use client';
import React from 'react';

import { motion } from 'framer-motion';
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Page() {
  const projects = [
    {
      title: "CareerAI",
      description: "An AI-driven web application that recommends personalized career paths based on users' skills, interests, and goals.",
      image: "/career.jpg",
      tech: ["Next.js", "Supabase", "Prisma", "Gemini AI"],
      github: "https://github.com/Sam44556/AI-Powered-Career-Path-web",
      live: "https://ai-powered-career-path-web.vercel.app/",
    },
      {
      title: "E-commerce Website",
      description: "An full-stack e-commerce platform where users can browse products, add items to their cart, and securely complete purchases using Stripe.this website  delivers a modern, responsive shopping experience for  customers.",
      image: "/ec.jpg",
      tech: ["React", "Node.js", "MongoDB", "PWA", "Stripe" ,"NextAuth", "Schdcn"],
      github: "https://github.com/Sam44556/E-commerce",
      live: "https://e-commerce-shop-hazel.vercel.app/",
    },
    {
title: "AgroTech ",
description: "A full-stack platform connecting farmers, buyers, experts, and administrators. AgroTech enables crop listings, expert advice, market analytics, chat features, and weather updates, streamlining agricultural commerce and communication.",
image: "/ag.jpg",
tech: ["Next.js", "React", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Tailwind CSS"],
github: "https://github.com/Sam44556/AgroTech",
live: "",
},
     {
      title: "FreelanceHub",
      description: "A freelance marketplace where clients can hire skilled professionals and freelancers can find real projects. Users can post jobs, offer services, and connect easily to work together online.",
      image: "/fre.jpg",
      tech: ["React", "Node.js", "Express.js", "Mongodb"],
      github: "https://github.com/Sam44556/freelance_web",
      live: "https://freelance-web-2.onrender.com/",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with individual and group chats, file sharing, and profile management.",
      image: "/bunatetu.jpg",
      tech: ["Next.js", "Prisma", "Supabase", "JWT"],
      github: "https://github.com/Afomiya21-negash/chat-app",
      live: "https://chat-app-b12t.vercel.app/",
    },
    {
      title: "Student Course Management",
      description: "Backend API for managing courses, enrollments, assignments, and grading with role-based authentication.",
      image: "/download.jpg",
      tech: ["Django", "PostgreSQL", "JWT", "REST API"],
      github: "https://github.com/Sam44556/Student-Course-Management-System",
      live: "",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for each card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };



  return (
    <div className="bg-background text-foreground py-8 md:py-12 px-4 md:px-8" id="projects">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
          Featured Projects
        </h2>
        <p className="text-foreground opacity-70 text-lg max-w-2xl mx-auto">
          Some of my recent projects demonstrating my work and experience
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative bg-muted rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20"
          >
            {/* Project Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-foreground opacity-70 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-background border border-border rounded-full text-foreground opacity-80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-background border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:opacity-90 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
