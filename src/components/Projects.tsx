import { motion } from "framer-motion";
import projectData from "../data/projects.json";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

interface Project {
  name: string;
  url: string;
  githubUrl?: string;
  image?: string;
  desc: string;
  tech: string[];
  type?: string;
}

const Projects = () => {
  // Separate featured projects (first 3) from others
  const featuredProjects = (projectData as Project[]).slice(0, 3);
  const otherProjects = (projectData as Project[]).slice(3);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 sm:mb-16 text-center"
      >
        <span className="inline-block text-xs sm:text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
          My Work
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
          A collection of projects I've built, from AI-powered platforms to interactive learning tools
        </p>
      </motion.div>

      {/* Featured Projects - Larger Cards */}
      <div className="mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8 sm:mb-10"
        >
          <HiSparkles className="w-5 h-5 text-primary" />
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Featured
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              featured={true}
            />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8 sm:mb-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              More Projects
            </h3>
          </motion.div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="relative group/scroll">
            <div className="flex sm:grid gap-6 sm:gap-8 flex-nowrap sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-x-visible pb-8 sm:pb-0 hide-scrollbar snap-x snap-mandatory sm:snap-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {otherProjects.map((project, index) => (
                <div key={project.name} className="min-w-[85vw] sm:min-w-0 snap-center">
                  <ProjectCard
                    project={project}
                    index={index + featuredProjects.length}
                    featured={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  featured: boolean;
}

const ProjectCard = ({ project, index, featured }: ProjectCardProps) => {
  const hasUrl = project.url && project.url !== "#";
  const hasGithub = project.githubUrl && project.githubUrl !== "#";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.1, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative flex flex-col h-full rounded-[2rem] bg-white dark:bg-zinc-900/40 border border-slate-200/60 dark:border-white/5 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:border-primary/20 overflow-hidden`}
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
             <span className="text-slate-300 dark:text-zinc-700 font-black text-6xl italic opacity-50">0{index + 1}</span>
          </div>
        )}
        
        {/* Featured Badge */}
        {featured && (
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-[10px] font-bold text-primary uppercase tracking-wider shadow-sm border border-primary/10">
                <HiSparkles className="w-3 h-3" />
                Featured
              </span>
            </div>
        )}

        {/* Hover Overlay with Actions */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            {hasGithub && (
                <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-xl"
                    title="View GitHub"
                >
                    <FiGithub className="w-5 h-5" />
                </a>
            )}
            {hasUrl && (
                <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform shadow-xl"
                    title="Live Demo"
                >
                    <FiExternalLink className="w-5 h-5" />
                </a>
            )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 border border-slate-200/50 dark:border-white/5"
            >
              {tag}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 text-[10px] font-bold text-slate-400">+{project.tech.length - 3}</span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
           {project.name}
        </h3>

        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-6">
          {typeof project.desc === "string"
            ? project.desc.replace(/<[^>]+>/g, "").trim()
            : ""}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
            <div className="flex items-center gap-4">
                {hasGithub && <a href={project.githubUrl} target="_blank" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Github</a>}
                {hasUrl && <a href={project.url} target="_blank" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Live</a>}
            </div>
            <span className="text-[10px] font-black text-slate-300 dark:text-zinc-700 uppercase italic">/ {project.type || "project"}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
