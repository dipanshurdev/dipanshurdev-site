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

        <div className="grid gap-6 md:grid-cols-3">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            className="md:col-span-2 rounded-[2.5rem] bg-white dark:bg-zinc-900/40 border border-slate-200/60 dark:border-white/5 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-primary/20"
          >
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
               <span className="w-8 h-1 bg-primary rounded-full"></span>
               The Story
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">
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
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.1 }}
            className="flex md:flex-col gap-6"
          >
            <div className="flex-1 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-transparent dark:from-primary/20 dark:to-zinc-900/20 border border-primary/20 p-6 flex flex-col justify-center items-center text-center shadow-lg shadow-primary/5 group hover:scale-[1.02] transition-transform">
              <span className="text-4xl sm:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                4x
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-[0.2em]">
                Hackathons
              </span>
            </div>
            <div className="flex-1 rounded-[2.5rem] bg-gradient-to-br from-secondary/10 via-transparent to-transparent dark:from-secondary/20 dark:to-zinc-900/20 border border-secondary/20 p-6 flex flex-col justify-center items-center text-center shadow-lg shadow-secondary/5 group hover:scale-[1.02] transition-transform">
              <span className="text-4xl sm:text-5xl font-black text-secondary mb-2 group-hover:scale-110 transition-transform">
                2+
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-[0.2em]">
                Years Exp.
              </span>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.15 }}
            className="rounded-[2.5rem] bg-white dark:bg-zinc-900/40 border border-slate-200/60 dark:border-white/5 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-primary/20"
          >
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-6">
              Journey
            </h3>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white text-base">
                  Full Stack Development
                </span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  100xDevs · 2025
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white text-base">
                  B.Sc Computer Science
                </span>
                <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                  K.P. Higher Education
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white text-base">
                  Oracle AI Associate
                </span>
                <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                  Oct 2025
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Open Source */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 rounded-[2.5rem] bg-white dark:bg-zinc-900/40 border border-slate-200/60 dark:border-white/5 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-primary/20"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Open Source
              </h3>
              <span className="px-4 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                Active Contributor
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Appwrite", desc: "UI fixes & docs", stars: "45k" },
                { name: "EddieHub", desc: "Accessibility patches", stars: "6k" },
                { name: "Modernizr", desc: "Hindi documentation", stars: "25k" },
                { name: "OpenCut", desc: "Video editor UI", stars: "33k" },
              ].map((item) => (
                <div key={item.name} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-500">{item.desc}</p>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-slate-400">★ {item.stars}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
