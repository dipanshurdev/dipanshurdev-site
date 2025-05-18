import { motion, useScroll, useTransform } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import {
  HeroSection,
  SkillsSection,
  OpenSourceSection,
  EducationSection,
  ContactSection,
} from "./index";

export default function About() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="min-h-screen rounded-2xl  text-dark dark:text-light pb-20">
      {/* <div className="fixed  inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-0 right-0 w-[70%] h-[40%] rounded-full  blur-3xl"
          style={{ y: useTransform(backgroundY) }}
        />
      </div> */}

      {/* Document container */}
      <div className="max-w-4xl mx-auto  shadow-lg  rounded-lg overflow-hidden my-10">
        {/* Header section with subtle gradient */}
        <div className=" px-8 py-12 border-b border-slate-200 dark:border-slate-700">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            {/* <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-28 h-28 rounded-full overflow-hidden border-4 border-white dark:border-slate-600 shadow-lg"
            >
              <div className="w-full h-full  flex items-center justify-center">
                <FaUserAlt className="text-white text-3xl" />
              </div>
            </motion.div> */}

            <div className="text-center md:text-left ">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold bg-lightGradient bg-clip-text text-transparent"
              >
                Dipanshu Rawat
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-dark dark:text-light mt-2"
              >
                Full-Stack Developer
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Document content */}
        <div className="px-8 py-10 space-y-12">
          {/* About Me Section */}
          <HeroSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Open Source Section */}
          <OpenSourceSection />

          {/* Education & Certifications */}
          <EducationSection />

          {/* Contact Section */}
          <ContactSection />
        </div>
      </div>
    </main>
  );
}

// export default About;
