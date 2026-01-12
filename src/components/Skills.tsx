import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaGitAlt, 
  FaFigma,
} from "react-icons/fa6";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiAstro, 
  SiTailwindcss, 
  SiGraphql, 
  SiPostgresql, 
  SiFramer, 
  SiThreedotjs 
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skills = [
  { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Astro", icon: SiAstro, color: "text-[#FF5D01]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
  { name: "GraphQL", icon: SiGraphql, color: "text-[#E10098]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Framer Motion", icon: SiFramer, color: "text-black dark:text-white" },
  { name: "Three.js", icon: SiThreedotjs, color: "text-black dark:text-white" },
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
  { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
  { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
  { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]" },
  { name: "UI/UX Design", icon: MdDesignServices, color: "text-primary" }
];

const Skills = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="mb-12 text-center px-4">
        <span className="block text-sm font-medium text-primary mb-2 uppercase tracking-wider">Expertise</span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Skills & Technologies</h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="flex w-full overflow-hidden py-4">
          <motion.div
            className="flex min-w-full shrink-0 gap-4 px-4"
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-surface px-6 py-3 text-sm font-medium text-slate-700 dark:text-white backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary shadow-sm dark:shadow-none group"
              >
                <skill.icon className={`text-xl transition-colors ${skill.color} group-hover:text-primary`} />
                <span>{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
