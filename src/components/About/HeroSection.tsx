import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import { Button } from "../ui/Button";
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
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-pinkToVilot blur-xl opacity-20 dark:opacity-30"
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

export default HeroSection;
