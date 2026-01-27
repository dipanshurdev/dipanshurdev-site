import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/10 p-6 sm:p-12 lg:p-16 text-center shadow-xl dark:shadow-none"
      >
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-primary/10 dark:bg-primary/20 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-secondary/10 dark:bg-secondary/20 blur-[80px] rounded-full"></div>

        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Get In Touch
          </span>
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's build something <span className="text-primary italic">extraordinary</span> together
          </h2>
          <p className="mb-8 sm:mb-10 mx-auto max-w-2xl text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:dipanshurdev@gmail.com" 
            className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-primary px-6 py-3.5 sm:px-10 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 ring-1 ring-white/10 min-h-[44px] touch-manipulation"
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
