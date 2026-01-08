import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Claritel.ai",
    role: "Software Development Engineer Intern",
    period: "Oct 2025 – Present",
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
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Work Experience</h2>
        </motion.div>

        <div className="space-y-12">
            {experiences.map((exp, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0"
                >
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <span className="text-sm font-medium text-primary/80">{exp.period}</span>
                    </div>
                    
                    <div className="mb-4 text-lg text-white/80 font-medium">
                        {exp.company}
                    </div>
                    
                    <p className="mb-4 text-text-muted leading-relaxed">
                        {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {exp.tech.map(t => (
                            <span key={t} className="px-2 py-1 rounded-md bg-white/5 text-xs text-text-muted hover:text-white transition-colors">
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
