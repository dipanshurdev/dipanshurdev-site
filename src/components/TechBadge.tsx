import { motion } from "framer-motion";
const TechBadge = ({ icon, label, proficiency, delay, isInView }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-slate-800 rounded-lg p-6 flex flex-col items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
    >
      <div className="text-4xl text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
      <span className="font-medium text-slate-800 dark:text-slate-200">
        {label}
      </span>
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
      <span className="text-xs text-slate-500 dark:text-slate-400">
        {proficiency}%
      </span>
    </motion.div>
  );
};

export default TechBadge;
