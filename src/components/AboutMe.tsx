import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-3xl font-bold text-center text-white"
        >
            About Me
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Summary Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-2xl bg-surface border border-white/10 p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Summary</h3>
            <p className="text-text-muted leading-relaxed">
                I specialize in building fast, scalable, user-focused applications and collaborating with founders & remote teams to convert ideas into working products. 
                With over 2 years of experience, I've worked on fintech, AI, automation, and ed-tech solutions.
                <br /><br />
                Currently pursuing a B.Sc. in Computer Science while actively contributing to open-source communities like Appwrite and modernizing legacy codebases.
            </p>
          </motion.div>

          {/* Stats/Achievements */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="grid grid-rows-2 gap-6"
          >
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-surface border border-white/10 p-6 flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-bold text-primary mb-2">4x</span>
                <span className="text-sm text-text-muted">Hackathon Winner</span>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-secondary/20 to-surface border border-white/10 p-6 flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-bold text-secondary mb-2">2+</span>
                <span className="text-sm text-text-muted">Years Experience</span>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-surface border border-white/10 p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Education</h3>
            <ul className="space-y-4">
                <li className="flex flex-col">
                    <span className="font-medium text-white">Full Stack Development</span>
                    <span className="text-sm text-text-muted">100xDevs (Harkirat Singh)</span>
                </li>
                <li className="flex flex-col">
                    <span className="font-medium text-white">B.Sc Computer Science</span>
                    <span className="text-sm text-text-muted">K.P. Higher Education (Pursuing)</span>
                </li>
                 <li className="flex flex-col">
                    <span className="font-medium text-white">Oracle AI Foundations</span>
                    <span className="text-sm text-text-muted">Associate Certified</span>
                </li>
            </ul>
          </motion.div>

          {/* Open Source */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-2xl bg-surface border border-white/10 p-8"
          >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Open Source</h3>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">Active Contributor</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-white mb-1">Appwrite</h4>
                    <p className="text-sm text-text-muted">UI fixes, bug triaging, and docs (45.2k+ stars)</p>
                </div>
                 <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-white mb-1">Modernizr</h4>
                    <p className="text-sm text-text-muted">Documentation translations (25.7k+ stars)</p>
                </div>
                 <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-white mb-1">EddieHub</h4>
                    <p className="text-sm text-text-muted">Accessibility & UI patches</p>
                </div>
                 <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-white mb-1">Hacktoberfest</h4>
                    <p className="text-sm text-text-muted">2x Event Finisher</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
