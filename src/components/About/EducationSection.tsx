import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const certifications = [
    {
      name: "Full-Stack Development",
      issuer: "freeCodeCamp",
      date: "Aug 2023 – Jan 2024",
      link: "#",
    },
    {
      name: "Legacy Frontend Certification",
      issuer: "freeCodeCamp",
      date: "2023",
      link: "https://www.freecodecamp.org/certification/dipanshurdev/legacy-front-end",
    },
    {
      name: "Frontend Libraries",
      issuer: "freeCodeCamp",
      date: "2023",
      link: "https://www.freecodecamp.org/certification/dipanshurdev/front-end-development-libraries",
    },
  ];

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
          <h3 className="text-lg font-semibold text-dark dark:text-light flex items-center gap-2">
            <FaGraduationCap className="text-blueDark " />
            Education
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-light dark:bg-darkExtra p-4 rounded-lg shadow-sm border border-slate-200"
          >
            <h4 className="font-medium text-darkSm dark:text-light">
              Bachelor of Science (Year 2)
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Indira Gandhi National Open University (IGNOU)
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              2020 - 2022
            </p>
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-600">
              <p className="text-slate-600 dark:text-slate-400 text-sm italic">
                Transitioned into full-time self-learning and web development in
                2022
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-dark dark:text-light flex items-center gap-2">
            <FaAward className="text-blueDark" />
            Certifications
          </h3>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-white dark:bg-darkExtra p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600"
              >
                <h4 className="font-medium text-darkSm dark:text-light">
                  {cert.name}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {cert.issuer} • {cert.date}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueDark text-sm inline-flex items-center mt-1 hover:underline"
                  >
                    View Certificate <MdOpenInNew className="ml-1" />
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

// export default EducationSection
