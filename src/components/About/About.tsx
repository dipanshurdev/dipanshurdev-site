"use client";

// import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGithub,
//   FaHtml5,
//   FaCss3Alt,
//   FaLinkedin,
//   FaTools,
//   FaCode,
//   FaGraduationCap,
//   FaAward,
//   FaUserAlt,
// } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiTailwindcss,
//   SiSupabase,
//   SiPrisma,
//   SiTypescript,
//   SiJavascript,
//   SiGit,
// } from "react-icons/si";
// import { MdOpenInNew } from "react-icons/md";
// import { Button } from "../ui/Button";
import HeroSection from "./HeroSection";
import JourneySection from "./JourneySection";
import TechStackSection from "./TechStackSection";
import OpenSourceSection from "./OpenSourceSection";
import CredentialsSection from "./CredentialsSection";
import ConnectSection from "./ConnectSection";
// import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-200">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-purple-200/20 to-indigo-300/20 dark:from-purple-900/20 dark:to-indigo-800/20 blur-3xl"
          style={{ y: backgroundY }}
        />
        <motion.div
          className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-pink-200/20 to-rose-300/20 dark:from-pink-900/20 dark:to-rose-800/20 blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        {/* Hero Intro */}
        <HeroSection />

        {/* Journey Timeline */}
        <JourneySection />

        {/* Tech Stack */}
        <TechStackSection />

        {/* Open Source Contributions */}
        <OpenSourceSection />

        {/* Certifications & Education */}
        <CredentialsSection />

        {/* Connect Section */}
        <ConnectSection />
      </div>
    </main>
  );
}
