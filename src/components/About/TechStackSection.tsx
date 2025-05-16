import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiJavascript,
} from "react-icons/si";
import TechBadge from "../TechBadge";

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

export default TechStackSection;
