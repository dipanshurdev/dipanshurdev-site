import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const certifications = [
  {
    name: "Oracle AI Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=76BFB291A61C73",
  },
  {
    name: "Full-Stack Development Certification",
    issuer: "freeCodeCamp",
    date: "2023",
    link: "https://www.freecodecamp.org/certification/dipanshurdev/legacy-front-end",
  },
  {
    name: "Legacy Frontend Certification",
    issuer: "freeCodeCamp",
    date: "2023",
    link: "https://www.freecodecamp.org/certification/dipanshurdev/legacy-front-end",
  },
];

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
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
        <div className="h-px bg-dark dark:bg-light w-6" />
        <h2 className="text-xl sm:text-2xl font-bold text-dark dark:text-light">
          Education & Certifications
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-base sm:text-lg font-semibold text-dark dark:text-light flex items-center gap-2">
            <FaGraduationCap className="text-blueDark" />
            Education
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-light dark:bg-darkExtra p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600"
          >
            <h4 className="font-medium text-darkSm dark:text-light text-sm sm:text-base">
              Full Stack Development
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              100xDevs (Harkirat Singh) · Mar 2025 – Nov 2025
            </p>
            <h4 className="font-medium text-darkSm dark:text-light text-sm sm:text-base mt-4">
              Bachelor of Science in Computer Science
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              K.P. Higher Education (Pursuing)
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-base sm:text-lg font-semibold text-dark dark:text-light flex items-center gap-2">
            <FaAward className="text-blueDark" />
            Certifications
          </h3>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-white dark:bg-darkExtra p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600"
              >
                <h4 className="font-medium text-darkSm dark:text-light text-sm sm:text-base">
                  {cert.name}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                  {cert.issuer} · {cert.date}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueDark text-xs sm:text-sm inline-flex items-center mt-1 hover:underline"
                  >
                    View Certificate <MdOpenInNew className="ml-1 w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
