"use client";

import { motion } from "framer-motion";
// import { FaUserAlt } from "react-icons/fa";
import {
  HeroSection,
  SkillsSection,
  OpenSourceSection,
  EducationSection,
  ContactSection,
} from "./index";
import Terminal from "./Terminal";

export default function About() {
  // const { scrollYProgress } = useScroll();

  // Animate Y from 0 to 100px as scroll progresses
  // const rawY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // const backgroundY = useSpring(rawY, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  return (
    <main className="min-h-screen text-dark dark:text-light pb-20 relative overflow-hidden">
      {/* Background Blob */}
      {/* <di className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bg-lightGradientMain top-0 right-0 w-[70%] h-[40%] rounded-full blur-3xl"
          style={{ y: backgroundY }}
        />
      </di> */}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden my-10 bg-white/80 dark:bg-black/50 backdrop-blur">
        <div className="px-8 py-12 border-b border-slate-200 dark:border-slate-700">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold bg-lightGradient bg-clip-text text-transparent"
              >
                Dipanshu Rawat
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl mt-2"
              >
                Full-Stack Developer | Open Source Contributor
              </motion.p>
            </div>
          </motion.div>
        </div>

        <div className="px-8 py-10 space-y-12">
          <HeroSection />
          <SkillsSection />
          <OpenSourceSection />
          <EducationSection />
          {/* <ContactSection /> */}
          <Terminal />
        </div>
      </div>
    </main>
  );
}
