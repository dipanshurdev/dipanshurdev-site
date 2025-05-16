import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaTools } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const OpenSourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const contributions = [
    {
      project: "Appwrite",
      description: "UI fixes, documentation improvements, and issue triaging",
      link: "https://github.com/appwrite/appwrite",
    },
    {
      project: "EddieHub",
      description: "Accessibility enhancements and layout fixes",
      link: "https://github.com/EddieHubCommunity",
    },
    {
      project: "Modernizr",
      description: "Translated documentation into Hindi",
      link: "https://github.com/Modernizr/Modernizr",
    },
    {
      project: "Mastodon",
      description: "Improved onboarding documentation",
      link: "https://github.com/mastodon/mastodon",
    },
  ];

  const personalProjects = [
    {
      name: "Resume CLI",
      description: "Command-line tool for generating resumes",
      tech: ["Node.js", "Commander.js"],
    },
    {
      name: "GitHub Issue Finder",
      description: "Tool to find beginner-friendly issues on GitHub",
      tech: ["React", "GitHub API"],
    },
    {
      name: "Form Builder",
      description: "Drag-and-drop form builder with validation",
      tech: ["React", "Tailwind CSS"],
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
        Open Source & Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaGithub className="mr-2 text-indigo-600 dark:text-indigo-400" />
            Open Source Contributions
          </h3>
          <div className="space-y-4">
            {contributions.map((item, index) => (
              <motion.div
                key={item.project}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">
                    {item.project}
                  </h4>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <MdOpenInNew />
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaTools className="mr-2 text-indigo-600 dark:text-indigo-400" />
            Personal Projects
          </h3>
          <div className="space-y-4">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <h4 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">
                  {project.name}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech) => (
                    // <Badge
                    //   key={tech}
                    //   variant="secondary"
                    //   className="bg-slate-100 dark:bg-slate-700 text-xs"
                    // >
                    <div>{tech}</div>
                    // </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OpenSourceSection;
