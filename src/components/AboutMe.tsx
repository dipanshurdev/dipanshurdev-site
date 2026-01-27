import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 sm:mb-12 text-center"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Who I am
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            className="md:col-span-2 rounded-2xl bg-white dark:bg-surface border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-sm dark:shadow-none"
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Summary
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-text-muted leading-relaxed">
              Software Developer with 2+ years of experience building
              production-grade MVPs and scalable web applications across
              fintech, AI, automation, and ed-tech. Proficient in React,
              Next.js, TypeScript, Node.js, and backend API development.
              Experienced in collaborating with remote teams and founders to
              translate product ideas into reliable, user-focused solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-rows-2 gap-4 sm:gap-6"
          >
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-white dark:from-primary/20 dark:to-surface border border-slate-200 dark:border-white/10 p-4 sm:p-6 flex flex-col justify-center items-center text-center shadow-sm dark:shadow-none">
              <span className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
                4x
              </span>
              <span className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                Hackathon Winner
              </span>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-secondary/10 to-white dark:from-secondary/20 dark:to-surface border border-slate-200 dark:border-white/10 p-4 sm:p-6 flex flex-col justify-center items-center text-center shadow-sm dark:shadow-none">
              <span className="text-3xl sm:text-4xl font-bold text-secondary mb-1 sm:mb-2">
                2+
              </span>
              <span className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                Years Experience
              </span>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl bg-white dark:bg-surface border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-sm dark:shadow-none"
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Education & Certs
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex flex-col">
                <span className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">
                  Full Stack Development
                </span>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                  100xDevs (Harkirat Singh) · Mar–Nov 2025
                </span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">
                  B.Sc Computer Science
                </span>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                  K.P. Higher Education (Pursuing)
                </span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">
                  Full-Stack Development
                </span>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                  freeCodeCamp
                </span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">
                  Oracle AI Foundations Associate
                </span>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                  Oracle · Oct 2025
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Open Source */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 rounded-2xl bg-white dark:bg-surface border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-sm dark:shadow-none"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Open Source
              </h3>
              <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium">
                Active Contributor
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-100 dark:border-transparent">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">
                  Appwrite
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                  UI fixes, bug triaging, docs (45.2k★)
                </p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-100 dark:border-transparent">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">
                  EddieHub
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                  Accessibility & UI patches (6.2k★)
                </p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-100 dark:border-transparent">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">
                  Modernizr
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                  Hindi documentation (25.7k★)
                </p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-100 dark:border-transparent">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">
                  OpenCut
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                  Video editor module, UI/UX (33k★)
                </p>
              </div>
              <div className="sm:col-span-2 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-transparent">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">
                  Hacktoberfest
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-text-muted">
                  2× Event Finisher
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
