import { motion } from "framer-motion";
const SocialButton = ({ icon, label, href, delay, isInView }: any) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: delay + 0.4 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex items-center gap-2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
    >
      <span className="text-indigo-600 dark:text-indigo-400 text-xl">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </motion.a>
  );
};

export default SocialButton;
