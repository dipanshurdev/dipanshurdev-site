import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function OpenSourceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const contributions = [
    {
      project: "Appwrite",
      description: "UI fixes, documentation improvements, and issue triaging",
      link: "https://github.com/appwrite/appwrite",
      tags: ["UI", "Documentation", "Support"],
    },
    {
      project: "EddieHub",
      description: "Accessibility enhancements and layout fixes",
      link: "https://github.com/EddieHubCommunity",
      tags: ["Accessibility", "UI"],
    },
    {
      project: "Modernizr",
      description: "Translated documentation into Hindi",
      link: "https://github.com/Modernizr/Modernizr",
      tags: ["Translation", "Documentation"],
    },
    {
      project: "Mastodon",
      description: "Improved onboarding documentation",
      link: "https://github.com/mastodon/mastodon",
      tags: ["Documentation", "UX"],
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
          Open Source
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contributions.map((item, index) => (
          <motion.div
            key={item.project}
            initial={{
              opacity: 0,
              y: 20,
              x: index % 2 === 0 ? -20 : 20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 100,
                    },
                  }
                : {
                    opacity: 0,
                    y: 20,
                    x: index % 2 === 0 ? -20 : 20,
                  }
            }
            whileHover={{
              scale: 1.02,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            }}
            className="  rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-600 group"
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-blueDark group-hover:text-blue-900 transition-colors">
                  {item.project}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blueDark dark:hover:text-blue-950 transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
              <p className="text-darkSm dark:text-light text-sm mb-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <div // Badge
                    key={tag}
                    // variant="secondary"
                    className="bg-slate-100 dark:bg-dark text-xs font-normal p-2 rounded-lg"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-light dark:bg-darkSm p-4 rounded-lg border border-slate-200 dark:border-slate-600 mt-4"
      >
        <p className="text-darkSm dark:text-light text-sm">
          <span className="font-medium">Personal Projects:</span> Built
          micro-tools like Resume CLI, GitHub Issue Finder, and Form Builder
        </p>
      </motion.div>
    </motion.section>
  );
}

// export default OpenSourceSection;
