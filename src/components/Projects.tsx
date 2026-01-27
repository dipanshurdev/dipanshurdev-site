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

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index + featuredProjects.length}
                featured={false}
              />
            ))}
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
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900/80 border border-slate-200/50 dark:border-white/10 transition-all duration-500 ${
        featured
          ? "shadow-xl hover:shadow-2xl hover:shadow-primary/20 dark:shadow-none"
          : "shadow-lg hover:shadow-xl hover:shadow-primary/10 dark:shadow-none"
      } hover:border-primary/30 dark:hover:border-primary/20`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 text-xs font-semibold text-primary dark:text-primary">
            <HiSparkles className="w-3 h-3" />
            Featured
          </span>
        </div>
      )}

      {/* Image Container with Gradient Overlay */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-zinc-800 dark:to-zinc-900">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 flex items-center justify-center">
            <span className="text-slate-400 dark:text-slate-500 font-bold text-4xl sm:text-5xl">
              {index + 1}
            </span>
          </div>
        )}

        {/* Action Buttons Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          {hasGithub && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 sm:p-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-2xl text-slate-900 dark:text-white hover:bg-primary hover:text-white transition-all shadow-xl min-w-[56px] min-h-[56px] flex items-center justify-center"
              title="View on GitHub"
              aria-label={`${project.name} on GitHub`}
            >
              <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          )}
          {hasUrl && (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 sm:p-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-2xl text-slate-900 dark:text-white hover:bg-primary hover:text-white transition-all shadow-xl min-w-[56px] min-h-[56px] flex items-center justify-center"
              title="Open project"
              aria-label={`Open ${project.name}`}
            >
              <FiExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          )}
        </div>

        {/* Type Badge */}
        {project.type && project.type !== "project" && (
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/10">
              {project.type === "contributor" ? "Contributed" : "Collaborator"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 lg:p-7">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-slate-100 to-slate-50 dark:from-white/5 dark:to-white/10 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-zinc-300 border border-slate-200/50 dark:border-white/10 transition-colors group-hover:border-primary/30 dark:group-hover:border-primary/20"
            >
              {tag}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="inline-flex items-center rounded-lg bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-500 dark:text-zinc-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-3 leading-tight">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed line-clamp-3 mb-4">
          {typeof project.desc === "string"
            ? project.desc.replace(/<[^>]+>/g, "").trim()
            : ""}
        </p>

        {/* Action Links - Desktop */}
        <div className="hidden sm:flex items-center gap-3 pt-2 border-t border-slate-200/50 dark:border-white/10">
          {hasGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
              aria-label={`${project.name} on GitHub`}
            >
              <FiGithub className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
              Code
            </a>
          )}
          {hasUrl && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
              aria-label={`Open ${project.name}`}
            >
              <FiExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
              Live Demo
            </a>
          )}
        </div>

        {/* Action Links - Mobile */}
        <div className="flex items-center gap-4 sm:hidden pt-4 border-t border-slate-200/50 dark:border-white/10">
          {hasGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white transition-all min-h-[44px]"
              aria-label={`${project.name} on GitHub`}
            >
              <FiGithub className="w-4 h-4" />
              Code
            </a>
          )}
          {hasUrl && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-sm font-medium text-white hover:bg-primary/90 transition-all min-h-[44px] shadow-lg shadow-primary/25"
              aria-label={`Open ${project.name}`}
            >
              <FiExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Decorative Gradient Border on Hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary/0 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl" />
    </motion.article>
  );
};

export default Projects;
