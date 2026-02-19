"use client";

import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function Page() {
  const education = [
    {
      year: '2022 - 2026',
      degree: "B.Sc. in Software Engineering",
      school: 'Addis Ababa Science and Technology University',
      description: 'Relevant coursework: Data Structures and Algorithms,oop, Advanced Programming, Operating Systems, Database Systems, System Design & Architecture, Software Requirements Engineering (SRE),Software Quality Assurance and Testing (SQAT) Embedded Systems, Machine Learning, AI.',
    },
  ];

  const experience = [
    {
      year: '2025',
      title: 'Backend Developer Intern',
      company: 'Efuye Gela - Summer Internship',
      description:
        'Built real-time chat with JWT auth, file sharing, and group chat using Next.js and Supabase.',
    },
    {
      year: '2023 - Present',
      title: 'Freelance Developer',
      company: 'Self-Employed',
      description:
        'Custom web applications for clients; full-stack with React, Next.js, and Node.js.',
    },
  ];

  return (
    <section className="bg-background text-foreground pt-12 pb-16 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-5 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Education and professional experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="border-border">
              <CardHeader className="flex  gap-3">
                <FaGraduationCap className="size-5 text-sky-600 dark:text-sky-400" />
                <CardTitle className="text-foreground">Education</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="relative pl-6 border-l-2 border-sky-600 dark:border-sky-400"
                    >
                      <div className="absolute -left-[9px] top-0 w-3 h-3 rounded-full bg-sky-600 dark:bg-sky-400" />
                      <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mb-1">{edu.year}</p>
                      <p className="font-bold text-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground mb-1">{edu.school}</p>
                      <p className="text-sm text-foreground/80">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="border-border">
              <CardHeader className="flex  gap-3">
                <FaBriefcase className="size-5 text-sky-600 dark:text-sky-400" />
                <CardTitle className="text-foreground">Experience</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="relative pl-6 border-l-2 border-sky-600 dark:border-sky-400"
                    >
                      <div className="absolute -left-[9px] top-0 w-3 h-3 rounded-full bg-sky-600 dark:bg-sky-400" />
                      <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mb-1">{exp.year}</p>
                      <p className="font-bold text-foreground">{exp.title}</p>
                      <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
                      <p className="text-sm text-foreground/80">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
