import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "../DarkMode";
import ResumeLink from "../ResumeLink";
import { BiUser, BiBriefcase, BiCodeAlt, BiMessageSquareDetail, BiChip } from "react-icons/bi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active hash based on scroll position
      const sections = links.map((link) => link.href.substring(1));
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
    { name: "Skills", href: "#skills", icon: BiChip },
    { name: "Experience", href: "#experience", icon: BiBriefcase },
    { name: "Projects", href: "#projects", icon: BiCodeAlt },
    { name: "About", href: "#about", icon: BiUser },
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
              <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
               
              
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
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-center">
        <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="flex items-center justify-around w-full max-w-[400px] px-2 py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
        >
            {/* Added Home Link to dock */}
            <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveHash("");
                }}
                className="group relative flex flex-col items-center gap-1 flex-1 py-1"
            >
                <div className={`p-1.5 rounded-xl transition-all duration-300 ${
                    activeHash === "" 
                        ? "text-primary scale-110" 
                        : "text-zinc-500 dark:text-zinc-400 group-hover:text-primary"
                }`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
                <span className={`text-[10px] font-medium transition-colors ${
                  activeHash === "" ? "text-primary" : "text-zinc-500 dark:text-zinc-400"
                }`}>Home</span>
                {activeHash === "" && (
                    <motion.span 
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-2xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
            </a>

            {links.map((link) => {
                const Icon = link.icon;
                const isActive = activeHash === link.href;
                
                return (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setActiveHash(link.href)}
                        className="group relative flex flex-col items-center gap-1 flex-1 py-1"
                    >
                        <div className={`p-1.5 rounded-xl transition-all duration-300 ${
                            isActive 
                                ? "text-primary scale-110" 
                                : "text-zinc-500 dark:text-zinc-400 group-hover:text-primary"
                        }`}>
                            <Icon className="w-6 h-6" />
                        </div>
                        
                        <span className={`text-[10px] font-medium transition-colors ${
                          isActive ? "text-primary" : "text-zinc-500 dark:text-zinc-400"
                        }`}>{link.name}</span>

                        {isActive && (
                            <motion.span 
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-2xl -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </a>
                );
            })}
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
