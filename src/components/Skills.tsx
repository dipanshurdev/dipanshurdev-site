import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Next.js", "Astro", "Tailwind CSS",
  "Node.js", "GraphQL", "PostgreSQL", "Framer Motion", "Three.js",
  "Git", "Docker", "AWS", "Figma", "UI/UX Design"
];

const Skills = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="mb-12 text-center px-4">
        <span className="block text-sm font-medium text-primary mb-2">Expertise</span>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Skills & Technologies</h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="flex w-full overflow-hidden py-4">
          <motion.div
            className="flex min-w-full shrink-0 gap-4 px-4"
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="shrink-0 rounded-full border border-white/10 bg-surface px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
