import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "../DarkMode";
import ResumeLink from "../ResumeLink";
import { BiUser, BiBriefcase, BiCodeAlt, BiMessageSquareDetail } from "react-icons/bi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active hash based on scroll position
      const sections = links.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveHash(`#${current}`);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about", icon: BiUser },
    { name: "Experience", href: "#experience", icon: BiBriefcase },
    { name: "Projects", href: "#projects", icon: BiCodeAlt },
    { name: "Contact", href: "#contact", icon: BiMessageSquareDetail },
  ];

  return (
    <>
      {/* Desktop & Mobile Top Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                dipanshurdev
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 px-2 py-1.5 rounded-full border border-black/5 dark:border-white/5 backdrop-blur-sm">
                {links.map((link) => {
                    const Icon = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 ${
                                activeHash === link.href 
                                    ? "text-primary bg-white dark:bg-zinc-800 shadow-sm" 
                                    : "text-zinc-600 dark:text-zinc-400 hover:text-primary hover:bg-black/5 dark:hover:bg-white/5"
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            {link.name}
                        </a>
                    );
                })}
              </div>

              <div className="flex items-center gap-4 pl-4 border-l border-zinc-200 dark:border-zinc-800">
                <DarkModeToggle />
                <ResumeLink />
              </div>
            </div>

            {/* Mobile Actions (Top Right) */}
            <div className="md:hidden flex items-center gap-3">
              <DarkModeToggle />
              <ResumeLink />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Dock Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 max-w-[350px]">
        <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/10 ring-1 ring-black/5"
        >
            {links.map((link) => {
                const Icon = link.icon;
                const isActive = activeHash === link.href;
                
                return (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setActiveHash(link.href)}
                        className="group relative flex flex-col items-center gap-1"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, y: -4 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className={`p-2.5 rounded-xl transition-all duration-300 ${
                                isActive 
                                    ? "bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]" 
                                    : "text-zinc-500 dark:text-zinc-400 hover:text-primary hover:bg-black/5 dark:hover:bg-white/5"
                            }`}
                        >
                            <Icon className="w-6 h-6" />
                        </motion.div>
                        
                        {/* Active Indicator Dot */}
                        {isActive && (
                            <motion.span 
                                layoutId="nav-dot"
                                className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full"
                            />
                        )}

                       {/* Tooltip for Mobile - Optional/Subtle */}
                       {/* <span className="absolute -top-8 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {link.name}
                       </span> */}
                    </a>
                );
            })}
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
