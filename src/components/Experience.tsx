import { motion } from "framer-motion";
import { BiBriefcase } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    company: "Vojic LLC",
    companyUrl: "https://www.vojic.com",
    role: "Software Engineer",
    period: "Jan 2026 – Present",
    description:
      "Enhanced the VMeet AI meeting assistant: real-time transcription, translation, and summarization across meeting platforms (30% improvement in meeting data reliability). Expanded backend pipelines with Python, MongoDB, and Redis (Celery). Resolved critical bugs and optimized workflows for better session stability. Refactored modules, reducing technical debt by 25%.",
    tech: ["Python", "Flutter", "TypeScript", "AI", "MongoDB", "Redis"],
  },
  {
    company: "Claritel.ai",
    companyUrl: "https://claritel.ai",
    role: "Software Development Engineer Intern",
    period: "Oct 2025 – Jan 2026",
    description:
      "Built a full-featured email-based customer support ticketing system. Delivered backend logic with FastAPI and Python; integrated REST APIs with a TypeScript frontend, improving ticket processing speed by 25%. Improved scalability through modular refactoring. Enhanced the dialer UI, leading to a 30% improvement in agent efficiency.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Tailwind",
      "React",
    ],
  },
  {
    company: "HydroBank",
    companyUrl: "#",
    role: "Founding Full Stack Developer",
    period: "July 2025 – Oct 2025",
    description:
      "Contributed to an AI-driven crypto banking platform. Implemented secure P2P payment logic and supported early architecture for payments and AI-driven insights, accelerating MVP readiness by 25%.",
    tech: ["Next.js", "React", "Tailwind", "Node.js", "PostgreSQL"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 text-left"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-10 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative border-l-2 border-slate-200 dark:border-white/10 pl-6 sm:pl-8 ml-3 sm:ml-4 md:ml-0"
            >
              <div className="absolute -left-[13px] sm:-left-[17px] top-0 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white dark:bg-zinc-900 border-2 border-primary flex items-center justify-center text-primary z-10 shadow-sm">
                <BiBriefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              <div className="mb-3 sm:mb-4 text-base sm:text-lg text-slate-700 dark:text-zinc-300 font-semibold italic flex items-center gap-1.5 flex-wrap">
                {exp.companyUrl && exp.companyUrl !== "#" ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                    aria-label={`Open ${exp.company} website`}
                  >
                    {exp.company}
                    <FiExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                ) : (
                  <span>{exp.company}</span>
                )}
              </div>

              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
