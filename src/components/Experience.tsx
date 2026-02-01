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

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-8 md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-slate-200 dark:before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative flex items-center group"
            >
              {/* Dot Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 text-primary shadow-xl z-10 absolute left-0 md:left-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <BiBriefcase className="w-5 h-5" />
              </div>

              {/* Card */}
              <div className="w-full ml-16 md:ml-24 p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-zinc-900/40 border border-slate-200/60 dark:border-white/5 shadow-xl shadow-black/[0.02] dark:shadow-none hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                        {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-bold text-base tracking-wide">
                        {exp.company}
                        {exp.companyUrl && exp.companyUrl !== "#" && (
                            <a href={exp.companyUrl} target="_blank" className="p-1 rounded-full hover:bg-primary/10 transition-colors">
                                <FiExternalLink className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                  </div>
                  <time className="font-mono text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full border border-primary/10 w-fit self-start sm:self-center">
                    {exp.period}
                  </time>
                </div>

                <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed mb-8 font-medium max-w-4xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1.5 text-[10px] sm:text-xs font-bold rounded-xl bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-zinc-400 border border-slate-100 dark:border-white/5 uppercase tracking-wider transition-colors hover:border-primary/20 hover:text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
