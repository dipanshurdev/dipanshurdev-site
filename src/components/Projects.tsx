import React from "react";
import { motion } from "framer-motion";
import projectData from "../data/projects.json";
import { FiGithub, FiExternalLink } from "react-icons/fi";

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
        <span className="block text-sm font-medium text-primary mb-2 uppercase tracking-wider">My Work</span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Featured Projects</h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/10 dark:shadow-none"
          >
            <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-white/5 relative">
              {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                    <span className="text-slate-300 dark:text-white/20 font-bold text-4xl">{index + 1}</span>
                </div>
              )}
              
              {/* Overlay with links */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:scale-110 transition-all"
                    title="View Github"
                  >
                    <FiGithub className="w-6 h-6" />
                  </a>
                )}
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:scale-110 transition-all"
                  title="Live Preview"
                >
                  <FiExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag: string) => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-zinc-400 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                {project.desc.replace(/<\/?[^>]+(>|$)/g, "")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
