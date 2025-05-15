"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaTools,
  FaCode,
  FaGraduationCap,
  FaAward,
  FaUserAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiPrisma,
  SiTypescript,
  SiJavascript,
  SiGit,
} from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";
import { Button } from "../components/ui/Button";
// import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Dipanshu Rawat";
  }, []);

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

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative pt-10"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-20 dark:opacity-30"
      />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 200,
          }}
          className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl"
        >
          <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <FaUserAlt className="text-white text-4xl" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-slate-700 dark:text-slate-300"
        >
          I'm <strong>Dipanshu Rawat</strong>, a self-taught full-stack
          developer passionate about building tools that solve real-world
          problems. Over the last 2+ years, I've shipped projects using{" "}
          <strong>React.js, Next.js, Supabase, Prisma, Tailwind</strong> and
          contributed to global open-source communities.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Button
            variant="default"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500"
          >
            View Projects
          </Button>
          <Button variant="outline">Download Resume</Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

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

const TimelineItem = ({
  year,
  title,
  description,
  icon,
  delay,
  isInView,
  position,
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: position === "left" ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay }}
      className={`relative flex items-center ${position === "left" ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`w-1/2 ${position === "left" ? "pr-12 text-right" : "pl-12"}`}
      >
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {year}
          </span>
          <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
          <p className="text-slate-600 dark:text-slate-400">{description}</p>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
          {icon}
        </div>
      </div>

      <div className="w-1/2"></div>
    </motion.div>
  );
};

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const technologies = [
    { icon: <FaReact />, label: "React.js", proficiency: 90 },
    { icon: <SiNextdotjs />, label: "Next.js", proficiency: 85 },
    { icon: <SiTailwindcss />, label: "Tailwind CSS", proficiency: 95 },
    { icon: <SiTypescript />, label: "TypeScript", proficiency: 80 },
    { icon: <FaNodeJs />, label: "Node.js", proficiency: 75 },
    { icon: <SiPrisma />, label: "Prisma", proficiency: 85 },
    { icon: <SiSupabase />, label: "Supabase", proficiency: 80 },
    { icon: <FaGithub />, label: "GitHub", proficiency: 90 },
    { icon: <SiGit />, label: "Git", proficiency: 85 },
    { icon: <SiJavascript />, label: "JavaScript", proficiency: 90 },
    { icon: <FaHtml5 />, label: "HTML", proficiency: 95 },
    { icon: <FaCss3Alt />, label: "CSS", proficiency: 90 },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <TechBadge
            key={tech.label}
            icon={tech.icon}
            label={tech.label}
            proficiency={tech.proficiency}
            delay={0.1 * index}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.section>
  );
};

const TechBadge = ({ icon, label, proficiency, delay, isInView }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-slate-800 rounded-lg p-6 flex flex-col items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
    >
      <div className="text-4xl text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
      <span className="font-medium text-slate-800 dark:text-slate-200">
        {label}
      </span>
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
      <span className="text-xs text-slate-500 dark:text-slate-400">
        {proficiency}%
      </span>
    </motion.div>
  );
};

const OpenSourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const contributions = [
    {
      project: "Appwrite",
      description: "UI fixes, documentation improvements, and issue triaging",
      link: "https://github.com/appwrite/appwrite",
    },
    {
      project: "EddieHub",
      description: "Accessibility enhancements and layout fixes",
      link: "https://github.com/EddieHubCommunity",
    },
    {
      project: "Modernizr",
      description: "Translated documentation into Hindi",
      link: "https://github.com/Modernizr/Modernizr",
    },
    {
      project: "Mastodon",
      description: "Improved onboarding documentation",
      link: "https://github.com/mastodon/mastodon",
    },
  ];

  const personalProjects = [
    {
      name: "Resume CLI",
      description: "Command-line tool for generating resumes",
      tech: ["Node.js", "Commander.js"],
    },
    {
      name: "GitHub Issue Finder",
      description: "Tool to find beginner-friendly issues on GitHub",
      tech: ["React", "GitHub API"],
    },
    {
      name: "Form Builder",
      description: "Drag-and-drop form builder with validation",
      tech: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
        Open Source & Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaGithub className="mr-2 text-indigo-600 dark:text-indigo-400" />
            Open Source Contributions
          </h3>
          <div className="space-y-4">
            {contributions.map((item, index) => (
              <motion.div
                key={item.project}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">
                    {item.project}
                  </h4>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <MdOpenInNew />
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaTools className="mr-2 text-indigo-600 dark:text-indigo-400" />
            Personal Projects
          </h3>
          <div className="space-y-4">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <h4 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">
                  {project.name}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech) => (
                    // <Badge
                    //   key={tech}
                    //   variant="secondary"
                    //   className="bg-slate-100 dark:bg-slate-700 text-xs"
                    // >
                    <div>{tech}</div>
                    // </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const CredentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const certifications = [
    {
      name: "Full-Stack Development",
      issuer: "freeCodeCamp",
      date: "Aug 2023 – Jan 2024",
      link: "#",
    },
    {
      name: "Legacy Frontend Certification",
      issuer: "freeCodeCamp",
      date: "2023",
      link: "https://www.freecodecamp.org/certification/dipanshurdev/legacy-front-end",
    },
    {
      name: "Frontend Libraries",
      issuer: "freeCodeCamp",
      date: "2023",
      link: "https://www.freecodecamp.org/certification/dipanshurdev/front-end-development-libraries",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
        Credentials
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaAward className="mr-2 text-indigo-600 dark:text-indigo-400" />
            Certifications
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-indigo-500 before:rounded-full before:z-10 after:content-[''] after:absolute after:left-2 after:top-2 after:h-full after:w-0.5 after:bg-slate-200 dark:after:bg-slate-700 last:after:hidden"
              >
                <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                  {cert.name}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {cert.issuer} • {cert.date}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 text-sm inline-flex items-center mt-1 hover:underline"
                  >
                    View Certificate <MdOpenInNew className="ml-1" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaGraduationCap className="mr-2 text-indigo-600 dark:text-indigo-400" />
            Education
          </h3>
          <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-indigo-500 before:rounded-full">
            <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
              Bachelor of Science (Year 2)
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Indira Gandhi National Open University (IGNOU)
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">
              2020 - 2022
            </p>
            <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
              <p className="text-slate-700 dark:text-slate-300 text-sm italic">
                "Transitioned into full-time self-learning and web development
                in 2022, focusing on practical skills and building real-world
                projects."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const ConnectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200/50 dark:border-slate-700/50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <p className="text-slate-700 dark:text-slate-300">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of these platforms!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          <SocialButton
            icon={<FaGithub />}
            label="GitHub"
            href="https://github.com/dipanshur"
            delay={0.1}
            isInView={isInView}
          />
          <SocialButton
            icon={<FaLinkedin />}
            label="LinkedIn"
            href="https://linkedin.com/in/dipanshur"
            delay={0.2}
            isInView={isInView}
          />
          <SocialButton
            icon={<MdOpenInNew />}
            label="Portfolio"
            href="/"
            delay={0.3}
            isInView={isInView}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

const SocialButton = ({ icon, label, href, delay, isInView }: any) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: delay + 0.4 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex items-center gap-2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
    >
      <span className="text-indigo-600 dark:text-indigo-400 text-xl">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </motion.a>
  );
};
