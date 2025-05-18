import { motion, useInView } from "framer-motion";
// import { FaUserAlt } from "react-icons/fa";
import { Button } from "../ui/Button";
import { useRef } from "react";

export default function () {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <div className="h-px bg-dark dark:bg-light w-6"></div>
        <h2 className="text-2xl font-bold text-dark dark:text-light">
          About Me
        </h2>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-dark dark:text-light leading-relaxed"
      >
        I'm a self-taught full-stack developer passionate about building tools
        that solve real-world problems. Over the last 2+ years, I've shipped
        projects using{" "}
        <strong>React.js, Next.js, Supabase, Prisma, Tailwind</strong> and
        contributed to global open-source communities.
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-dark dark:text-light leading-relaxed"
      >
        My journey in web development began with a curiosity about how websites
        work and quickly evolved into a passion for creating intuitive,
        accessible, and performant web applications. I enjoy the challenge of
        learning new technologies and applying them to solve complex problems.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-3 pt-2"
      >
        <Button variant="outline" className="outline-blue-800 outline-2 p-4 ">
          View Projects
        </Button>
        <Button variant="outline">Download Resume</Button>
      </motion.div>
    </motion.section>
  );
}

// export default HeroSection;
