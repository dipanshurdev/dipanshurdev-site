import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MyName from "./MyName";
import "./hero.css";
import LinkPopup from "../link_popup/LinkPopup";

const HeroDesc = () => {
  const [widthPx, setwidthPx] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      const nameElm = document.querySelector(".my-name");
      if (nameElm) {
        let nameCharWidth = nameElm.getBoundingClientRect().width;
        setwidthPx(Math.floor(nameCharWidth));
      }
    };

    updateWidth();
    // Use an observer to handle dynamic changes (like flicker effect or font loading)
    const observer = new ResizeObserver(updateWidth);
    const nameElm = document.querySelector(".my-name");
    if (nameElm) observer.observe(nameElm);

    window.addEventListener('resize', updateWidth);
    return () => {
        window.removeEventListener('resize', updateWidth);
        observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full text-zinc-900 dark:text-zinc-100 max-w-5xl px-4 sm:px-6 md:px-8 mx-auto relative z-10"
    >
      <motion.div variants={itemVariants}>
        <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-wide text-primary/80 dark:text-primary uppercase flex items-center gap-3 mb-2">
            <span className="w-12 h-[1px] bg-primary/30 hidden sm:block"></span>
            Hey there <motion.span 
              animate={{ rotate: [0, 20, 0] }} 
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
              className="inline-block"
            >👋</motion.span>, I'm
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <MyName name="Dipanshu Rawat" />
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mt-6 tracking-tight"
      >
        <div className="flex flex-wrap items-baseline gap-x-4">
            <span
              className="hidden md:inline-block shrink-0 transition-all duration-300"
              style={{ width: `${widthPx}px` }}
            ></span>
            <span className="text-zinc-800 dark:text-zinc-200">a Software Developer.</span>
        </div>
        
        <div className="mt-2 text-zinc-900 dark:text-white">
            I build production-grade, scalable,{" "}
            <span className="relative inline-block group">
                <span className="relative z-10 text-primary italic pr-2">user-focused applications</span>
                <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-1 sm:bottom-2 left-0 h-3 sm:h-5 bg-primary/10 dark:bg-primary/20 -z-0 rounded-sm skew-x-[-12deg]"
                />
            </span>.
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 sm:mt-16"
      >
        <p className="text-lg sm:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl font-medium border-l-4 border-primary/30 pl-6 sm:pl-8">
            With 2+ years of experience in React, Next.js, and scaling products like{" "}
            <LinkPopup url="https://devpath.netlify.app" image="devpath.png" icon="reactjs">DevPath</LinkPopup>{" "}
            and{" "}
            <LinkPopup url="https://github.com/dipanshurdev/StudyOS" image="studyos.png" icon="nextjs">StudyOS</LinkPopup>.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HeroDesc;
