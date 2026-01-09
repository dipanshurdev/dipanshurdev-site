import React from "react";
import { motion } from "framer-motion";
import { BiBriefcase } from "react-icons/bi";

const experiences = [
  {
    company: "Claritel.ai",
    role: "Software Development Engineer Intern",
    period: "Oct 2025 – Jan 2026",
    description: "Designed and developed a complete email-based ticketing platform. Built backend services using FastAPI/Python and integrated with a React/TypeScript frontend.",
    tech: ["FastAPI", "Python", "PostgreSQL", "React", "TypeScript"]
  },
  {
    company: "HydroBank",
    role: "Founding Full Stack Developer",
    period: "July 2025 - Oct 2025",
    description: "Developed core features for a crypto banking platform. Built secure wallet systems and P2P transaction modules with Next.js and Node.js.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Appwrite"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-left"
        >
          <span className="block text-sm font-medium text-primary mb-2 uppercase tracking-wider">Journey</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Work Experience</h2>
        </motion.div>

        <div className="space-y-12">
            {experiences.map((exp, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative border-l-2 border-slate-200 dark:border-white/10 pl-8 ml-4 md:ml-0"
                >
                    <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full bg-white dark:bg-zinc-900 border-2 border-primary flex items-center justify-center text-primary z-10 shadow-sm">
                        <BiBriefcase className="w-4 h-4" />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    
                    <div className="mb-4 text-lg text-slate-700 dark:text-zinc-300 font-semibold italic">
                        {exp.company}
                    </div>
                    
                    <p className="mb-6 text-slate-600 dark:text-zinc-400 leading-relaxed text-base max-w-2xl">
                        {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {exp.tech.map(t => (
                            <span key={t} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-white/5">
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
