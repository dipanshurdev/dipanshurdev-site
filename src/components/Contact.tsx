import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-surface to-surface border border-white/10 p-8 sm:p-12 text-center"
      >
         <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-primary/20 blur-[80px] rounded-full"></div>
         <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full"></div>

        <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's work together
            </h2>
            <p className="mb-8 mx-auto max-w-xl text-lg text-text-muted">
            Have a project in mind or want to discuss modern web technologies? 
            I'm always open to discussing new projects and opportunities.
            </p>
            
            <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@dipanshurdev.com" 
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/50"
            >
            Say Hello
            </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
