import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
const CredentialsSection = () => {
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
        Credentials
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaAward className="mr-2 text-indigo-600 dark:text-indigo-400" />
            Certifications
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-indigo-500 before:rounded-full before:z-10 after:content-[''] after:absolute after:left-2 after:top-2 after:h-full after:w-0.5 after:bg-slate-200 dark:after:bg-slate-700 last:after:hidden"
              >
                <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
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
                    className="text-indigo-600 dark:text-indigo-400 text-sm inline-flex items-center mt-1 hover:underline"
                  >
                    View Certificate <MdOpenInNew className="ml-1" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaGraduationCap className="mr-2 text-indigo-600 dark:text-indigo-400" />
            Education
          </h3>
          <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-indigo-500 before:rounded-full">
            <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
              Bachelor of Science (Year 2)
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Indira Gandhi National Open University (IGNOU)
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">
              2020 - 2022
            </p>
            <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
              <p className="text-slate-700 dark:text-slate-300 text-sm italic">
                "Transitioned into full-time self-learning and web development
                in 2022, focusing on practical skills and building real-world
                projects."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CredentialsSection;
