import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiExpress,
  SiRedux,
  SiVercel,
  SiNetlify,
  SiFastapi,
  SiPython,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

const skills: SkillItem[] = [
  { name: "React.js", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Astro", icon: SiAstro, color: "text-[#FF5D01]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
  { name: "Express", icon: SiExpress, color: "text-slate-700 dark:text-slate-300" },
  { name: "Python", icon: SiPython, color: "text-yellow-700 dark:text-yellow-300" },
  { name: "FastAPI", icon: SiFastapi, color: "text-emerald-600 dark:text-emerald-400" },
  { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748] dark:text-[#fff]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
  { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
  { name: "Netlify", icon: SiNetlify, color: "text-[#00C7B7]" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-8 sm:mb-12 text-center px-4"
      >
        <span className="inline-block text-xs sm:text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
          Expertise
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="relative flex w-full flex-col gap-6 items-center justify-center overflow-hidden">
        {/* Gradient Slats for depth */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-[rgb(var(--background))] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-[rgb(var(--background))] to-transparent z-10" />

        {/* First Row: Moving Left */}
        <div className="flex w-full overflow-hidden py-2">
          <motion.div
            className="flex min-w-full shrink-0 gap-4 sm:gap-6 px-4"
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <SkillTag key={`${skill.name}-1-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Second Row: Moving Right */}
        <div className="flex w-full overflow-hidden py-2">
          <motion.div
            className="flex min-w-full shrink-0 gap-4 sm:gap-6 px-4"
            animate={{ x: "0%" }}
            initial={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <SkillTag key={`${skill.name}-2-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillTag = ({ skill }: { skill: SkillItem }) => (
  <div className="shrink-0 flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-slate-200/60 dark:border-white/5 bg-white/50 dark:bg-zinc-900/50 px-5 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-zinc-300 backdrop-blur-md transition-all hover:border-primary/40 hover:text-primary hover:scale-105 shadow-sm group">
    <skill.icon className={`text-xl sm:text-2xl transition-all duration-300 ${skill.color} group-hover:scale-110`} />
    <span className="tracking-tight">{skill.name}</span>
  </div>
);

export default Skills;
