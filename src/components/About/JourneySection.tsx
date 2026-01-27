import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TimelineItem } from "./index";
import { FaAward, FaCode, FaGithub, FaReact } from "react-icons/fa";

export default function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute left-1/2 h-full w-0.5 bg-blueDark transform -translate-x-1/2 z-0" />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
        My Journey
      </h2>

      <div className="space-y-12 sm:space-y-16">
        <TimelineItem
          year="2024"
          title="Interactive Learning Platform (DevPath)"
          description="Built roadmap-based learning platform; 30% user retention, 25% better content discoverability."
          icon={<FaCode />}
          delay={0.2}
          isInView={isInView}
          position="right"
        />

        <TimelineItem
          year="2025"
          title="Full Stack & Open Source"
          description="100xDevs, Claritel.ai intern, HydroBank. FastAPI, React, TypeScript, PostgreSQL. Appwrite, EddieHub, Modernizr, OpenCut."
          icon={<FaReact />}
          delay={0.4}
          isInView={isInView}
          position="left"
        />

        <TimelineItem
          year="2025"
          title="StudyOS & Email Ticketing"
          description="AI-powered study platform (StudyOS) and email-based support ticketing. Next.js, Supabase, HuggingFace."
          icon={<FaGithub />}
          delay={0.6}
          isInView={isInView}
          position="right"
        />

        <TimelineItem
          year="2026"
          title="Software Engineer @ Vojic"
          description="VMeet AI meeting assistant: transcription, translation, summarization. Python, Flutter, TypeScript, MongoDB, Redis."
          icon={<FaAward />}
          delay={0.8}
          isInView={isInView}
          position="left"
        />
      </div>
    </motion.section>
  );
}
