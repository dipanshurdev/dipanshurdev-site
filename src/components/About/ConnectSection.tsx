import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import SocialButton from "./SocialButton";

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

export default ConnectSection;
