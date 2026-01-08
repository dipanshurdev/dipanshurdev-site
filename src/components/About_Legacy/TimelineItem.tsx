import { motion } from "framer-motion";
export default function TimelineItem({
  year,
  title,
  description,
  icon,
  delay,
  isInView,
  position,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: position === "left" ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay }}
      className={`relative flex items-center ${position === "left" ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`w-1/2 ${position === "left" ? "pr-12 text-right" : "pl-12"}`}
      >
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {year}
          </span>
          <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
          <p className="text-slate-600 dark:text-slate-400">{description}</p>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
          {icon}
        </div>
      </div>

      <div className="w-1/2"></div>
    </motion.div>
  );
}

// export default TimelineItem;
