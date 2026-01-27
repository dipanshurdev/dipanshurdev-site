import { motion, useInView } from "framer-motion";
import { Button } from "../ui/Button";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <div className="h-px bg-dark dark:bg-light w-6" />
        <h2 className="text-xl sm:text-2xl font-bold text-dark dark:text-light">
          About Me
        </h2>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-dark dark:text-light leading-relaxed text-sm sm:text-base"
      >
        Software Developer with 2+ years of experience building production-grade
        MVPs and scalable web applications across fintech, AI, automation, and
        ed-tech. Proficient in React.js, Next.js, TypeScript, Node.js, and
        backend API development. Experienced in collaborating with remote teams
        and founders to translate product ideas into reliable, user-focused
        solutions.
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-dark dark:text-light leading-relaxed text-sm sm:text-base"
      >
        I focus on clean architecture, REST APIs, and system design. Active in
        open source (Appwrite, EddieHub, Modernizr, OpenCut) and a 4× Hackathon
        winner.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-3 pt-2"
      >
        <Button variant="outline" className="outline-blue-800 outline-2 p-3 sm:p-4">
          <a href="/projects">View Projects</a>
        </Button>
        <Button variant="outline" className="p-3 sm:p-4">
          <a
            href="https://drive.google.com/file/d/11p8GTjhVOfYVL8Gb7wQ4CRJT18HLlsSM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
