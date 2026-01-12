import { motion } from "framer-motion";
import { FiBriefcase, FiArrowRight, FiSend } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center py-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] animate-blob"></div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-surface border border-white/10 px-4 py-1.5 text-sm font-medium text-primary">
            Available for freelance work
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl">
            Building digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              experiences that matter.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg text-text-muted sm:text-xl"
        >
          I'm a full-stack developer passionate about creating intuitive and dynamic user experiences. 
          Specializing in React, Astro, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-8 py-3 text-base font-semibold text-white dark:text-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
          >
            <FiBriefcase className="w-5 h-5" />
            View Projects
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-surface px-8 py-3 text-base font-semibold text-slate-900 dark:text-white backdrop-blur-sm transition-all hover:bg-slate-50 dark:hover:bg-white/10 active:scale-95 shadow-sm"
          >
            <FiSend className="w-5 h-5" />
            Contact Me
          </a>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1 flex justify-center">
          <motion.div 
            animate={{ 
                y: [0, 12, 0],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="h-2 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
