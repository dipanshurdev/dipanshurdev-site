import { motion } from "framer-motion";

export default function SocialButton({
  icon,
  label,
  href,
  delay,
  isInView,
}: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: delay + 0.2 }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="flex items-center gap-2 bg-light dark:bg-dark px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-600 text-dark dark:text-light"
    >
      <span className="text-blueDark">{icon}</span>
      <span className="font-medium">{label}</span>
    </motion.a>
  );
}

// export default SocialButton;
