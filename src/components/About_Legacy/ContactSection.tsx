import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { SocialButton } from "./index";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

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
        <h2 className="text-2xl font-bold text-dark dark:text-light">
          Contact
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="  p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-600"
      >
        <p className="text-dark dark:text-light mb-4">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="flex flex-wrap gap-3">
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
        </div>
      </motion.div>
    </motion.section>
  );
}

// export default ContactSection;
