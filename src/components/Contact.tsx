import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/10 p-8 sm:p-16 text-center shadow-xl dark:shadow-none"
      >
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-primary/10 dark:bg-primary/20 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-secondary/10 dark:bg-secondary/20 blur-[80px] rounded-full"></div>

        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Get In Touch
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Let's build something <span className="text-primary italic">extraordinary</span> together
          </h2>
          <p className="mb-10 mx-auto max-w-2xl text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@dipanshurdev.com" 
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-10 py-5 text-lg font-bold text-white shadow-xl shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 ring-1 ring-white/10"
          >
            <FiMail className="w-6 h-6" />
            Say Hello
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
