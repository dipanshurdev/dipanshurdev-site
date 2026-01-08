import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Email Ticketing Platform",
    description: "A full-featured email-based customer support ticketing system. Implemented ticket creation, assignment, status tracking, and email threading with scalable database schemas.",
    tags: ["FastAPI", "Python", "PostgreSQL", "React", "Docker"],
    link: "#",
    // Placeholder image
    image: "https://via.placeholder.com/600x400" 
  },
  {
    title: "Interactive Learning Platform",
    description: "A dynamic skill roadmap platform for developers. Features React Flow for visual navigation and categorized resources, boosting user retention by 30%.",
    tags: ["Next.js", "React Flow", "TypeScript", "BaaS"],
    link: "https://devpath.netlify.app",
    image: "https://via.placeholder.com/600x400"
  },
  {
    title: "AI-Powered Study App",
    description: "Collaborative study platform with real-time sessions. Features AI-powered note analysis and automatic MCQ creation to boost engagement.",
    tags: ["Next.js", "MongoDB", "AI Models", "Tailwind"],
    link: "#",
    image: "https://via.placeholder.com/600x400"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <span className="block text-sm font-medium text-primary mb-2">My Work</span>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-surface border border-white/10 hover:border-primary/50 transition-colors"
          >
            <div className="aspect-video w-full overflow-hidden bg-white/5">
                {/* Visual placeholder or gradient */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                    <span className="text-white/20 font-bold text-4xl">{index + 1}</span>
                </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-text-muted hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0" />
                  {project.title}
                </a>
              </h3>
              
              <p className="text-text-muted text-sm line-clamp-3">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
