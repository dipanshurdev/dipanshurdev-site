import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiPrisma,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import { SkillCategory } from "./index";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const frontendSkills = [
    { icon: <FaReact />, label: "React.js" },
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
  ];

  const backendSkills = [
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiPrisma />, label: "Prisma" },
    { icon: <SiSupabase />, label: "Supabase" },
  ];

  const toolsSkills = [
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <SiGit />, label: "Git" },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <div className="h-px bg-dark dark:bg-light w-6"></div>
        <h2 className="text-2xl font-bold text-dark dark:text-light">Skills</h2>
      </motion.div>

      <div className="space-y-6">
        <SkillCategory
          title="Frontend"
          skills={frontendSkills}
          isInView={isInView}
          direction="right"
        />
        <SkillCategory
          title="Backend"
          skills={backendSkills}
          isInView={isInView}
          direction="left"
        />
        <SkillCategory
          title="Tools"
          skills={toolsSkills}
          isInView={isInView}
          direction="right"
        />
      </div>
    </motion.section>
  );
}

// export default SkillsSection;
