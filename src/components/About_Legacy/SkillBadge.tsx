import { motion } from "framer-motion";
import type { SkillsBadgeType } from "../../types";
export default function SkillBadge({
  icon,
  label,
  delay,
  isInView,
  direction,
  index,
}: SkillsBadgeType) {
  const xOffset = direction === "right" ? 50 : -50;
  const rotateValue = index % 2 === 0 ? 5 : -5;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, rotate: rotateValue }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              rotate: 0,
              transition: {
                duration: 0.5,
                delay,
                type: "spring",
                stiffness: 100,
              },
            }
          : { opacity: 0, x: xOffset, rotate: rotateValue }
      }
      whileHover={{
        scale: 1.05,
        rotate: rotateValue / 2,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="bg-white dark:bg-dark px-4 py-3 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 flex items-center gap-2"
    >
      <span className="text-xl text-blueDark">{icon}</span>
      <span className="font-medium text-dark dark:text-light">{label}</span>
    </motion.div>
  );
}

// export default SkillBadge;
