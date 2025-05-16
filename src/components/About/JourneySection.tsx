import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TimelineItem from "./TimelineItem";
import { FaAward, FaCode, FaGithub, FaReact } from "react-icons/fa";
const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2 z-0" />

      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
        My Journey
      </h2>

      <div className="space-y-16">
        <TimelineItem
          year="2022"
          title="Started Web Development"
          description="Began self-learning web development, focusing on HTML, CSS, and JavaScript fundamentals."
          icon={<FaCode />}
          delay={0.2}
          isInView={isInView}
          position="right"
        />

        <TimelineItem
          year="2023"
          title="Mastered React & Next.js"
          description="Deepened my knowledge of React.js and Next.js, building several full-stack applications."
          icon={<FaReact />}
          delay={0.4}
          isInView={isInView}
          position="left"
        />

        <TimelineItem
          year="2023"
          title="Open Source Contributions"
          description="Started contributing to open source projects like Appwrite, EddieHub, and Mastodon."
          icon={<FaGithub />}
          delay={0.6}
          isInView={isInView}
          position="right"
        />

        <TimelineItem
          year="2024"
          title="Full-Stack Certification"
          description="Completed freeCodeCamp's Full-Stack Development certification program."
          icon={<FaAward />}
          delay={0.8}
          isInView={isInView}
          position="left"
        />
      </div>
    </motion.section>
  );
};

export default JourneySection;
