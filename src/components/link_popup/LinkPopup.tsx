import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  url: string;
  image: string;
  children: React.ReactNode;
  icon?: string;
};

const LinkPopup = ({ url, image, children, icon }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="relative inline-block align-baseline">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group inline-flex items-center"
      >
        <span className="relative z-10 font-bold transition-colors duration-300 decoration-primary hover:text-primary outline-none">
          {children}
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </span>

        {icon && (
          <motion.span 
            className="inline-flex mx-1.5 w-7 h-7 sm:w-8 sm:h-8 items-center justify-center rounded-lg bg-white/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 shadow-sm backdrop-blur-sm transition-colors group-hover:border-primary/50 group-hover:bg-primary/5"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={`/assets/icons/${icon}.svg`}
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              alt=""
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </motion.span>
        )}

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.92, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 15, scale: 0.92, rotateX: -15 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25,
                opacity: { duration: 0.2 }
              }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 z-[100] pointer-events-none"
              style={{ perspective: "1000px" }}
            >
              <div className="relative p-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden min-w-[240px]">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    src={`/assets/images/${image}`}
                    className="w-full h-full object-cover"
                    alt={children as string}
                    onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/600x400/1d4ed8/white?text=Preview';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-white">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-90 drop-shadow-md">
                        Project Site
                    </span>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                  </div>
                </div>
                {/* Glossy overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-50" />
                {/* Arrow */}
                <div className="absolute top-[99%] left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white dark:border-t-zinc-900 drop-shadow-sm" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </span>
  );
};

export default LinkPopup;
