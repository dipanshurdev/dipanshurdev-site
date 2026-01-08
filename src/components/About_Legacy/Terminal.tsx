"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaTerminal,
  FaHeart,
  FaCode,
  FaCoffee,
  FaLaptopCode,
} from "react-icons/fa";
import type { Command } from "../../types";

export default function Terminal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeCommand, setActiveCommand] = useState<number | null>(null);
  const [typedCommands, setTypedCommands] = useState<number[]>([]);
  
  const [showCursor, setShowCursor] = useState(true);

  // Blink cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Auto-type effect when in view
  useEffect(() => {
    if (isInView && typedCommands.length < commands.length) {
      const timer = setTimeout(
        () => {
          setActiveCommand(typedCommands.length);

          const responseTimer = setTimeout(() => {
            setTypedCommands((prev) => [...prev, prev.length]);

            if (typedCommands.length + 1 < commands.length) {
              setActiveCommand(null);
            }
          }, commands[typedCommands.length].delay);

          return () => clearTimeout(responseTimer);
        },
        typedCommands.length === 0 ? 500 : 1000
      );

      return () => clearTimeout(timer);
    }
  }, [isInView, typedCommands.length]);

  const commands: Command[] = [
    {
      command: "status --current",
      response: (
        <div className="flex flex-wrap gap-2 items-center">
          <div className="bg-green-500 text-white hover:bg-green-600">
            Available for work
          </div>
          <div className="bg-blue-500 text-white hover:bg-blue-600">
            Open to collaboration
          </div>
          <div className="bg-purple-500 text-white hover:bg-purple-600">
            Learning new technologies
          </div>
        </div>
      ),
      delay: 1500,
    },
    {
      command: "projects --current",
      response: (
        <div className="text-slate-300">
          <p className="mb-1">
            → Building a real-time collaboration tool with Next.js and Supabase
          </p>
          <p>
            → Developing an open-source component library for React developers
          </p>
        </div>
      ),
      delay: 2000,
    },
    {
      command: "skills --learning",
      response: (
        <div className="flex flex-wrap gap-2 mt-1">
          <div className="bg-slate-800 text-slate-300 border-slate-700">
            TypeScript
          </div>
          <div className="bg-slate-800 text-slate-300 border-slate-700">
            Rust
          </div>
          <div className="bg-slate-800 text-slate-300 border-slate-700">
            WebAssembly
          </div>
          <div className="bg-slate-800 text-slate-300 border-slate-700">
            Three.js
          </div>
        </div>
      ),
      delay: 1800,
    },
    //     {
    //       command: "quote --random",
    //       response: (
    //         <div className="text-slate-300 italic">
    //           "Code is like humor. When you have to explain it, it's bad."
    //           <span className="block text-slate-500 text-xs mt-1">
    //             – Cory House
    //           </span>
    //         </div>
    //       ),
    //       delay: 1500,
    //     },
    {
      command: "contact --info",
      response: (
        <div className="text-slate-300">
          <p className="mb-1">
            → Feel free to reach out if you'd like to collaborate!
          </p>
          <p>→ Check the links in the footer to connect with me</p>
        </div>
      ),
      delay: 1800,
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="mt-12 mb-6"
    >
      <div className="bg-slate-900 rounded-lg overflow-hidden shadow-xl border border-slate-700">
        {/* Terminal header */}
        <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaTerminal className="text-slate-400" />
            <span className="text-slate-300 text-sm font-medium">
              dipanshu@portfolio:~
            </span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-4 font-mono text-sm overflow-hidden">
          <AnimatePresence>
            {typedCommands.map((index) => (
              <motion.div
                key={`command-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <div className="flex items-center gap-2 text-green-400 mb-1">
                  <span>$</span>
                  <span>{commands[index].command}</span>
                </div>
                <div className="pl-6 text-slate-300">
                  {commands[index].response}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Currently typing command */}
          {activeCommand !== null && activeCommand === typedCommands.length && (
            <div className="flex items-center gap-2 text-green-400">
              <span>$</span>
              <span>{commands[activeCommand].command}</span>
              {showCursor && (
                <span className="inline-block w-2 h-4 bg-green-400 ml-1"></span>
              )}
            </div>
          )}

          {/* Prompt line when not typing */}
          {activeCommand === null && typedCommands.length < commands.length && (
            <div className="flex items-center gap-2 text-green-400">
              <span>$</span>
              {showCursor && (
                <span className="inline-block w-2 h-4 bg-green-400"></span>
              )}
            </div>
          )}

          {/* Final message after all commands */}
          {typedCommands.length === commands.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 pt-4 border-t border-slate-700"
            >
              <div className="flex items-center gap-2 text-slate-300">
                <FaHeart className="text-red-500" />
                <span>
                  Thanks for visiting my portfolio! Let's build something
                  amazing together.
                </span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaCode className="text-indigo-400" />
                <FaCoffee className="text-amber-600" />
                <FaLaptopCode className="text-blue-400" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
