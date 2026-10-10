import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card rounded-2xl overflow-hidden group hover:border-blue-500/15 transition-all duration-300"
    >
      {/* Project image / placeholder */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
        />
        {!imgError ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-navy-800/80">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
            >
              <span className="text-white text-2xl font-bold">
                {project.title.charAt(0)}
              </span>
            </div>
            <span className="text-slate-500 text-xs">Project Visual</span>
          </div>
        )}

        {/* Badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-semibold shadow-lg`}
        >
          {project.badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-white leading-snug group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-white/5 text-slate-400 text-[11px] font-medium border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-500 text-[11px]">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg glass-card text-sm text-slate-300 hover:text-white hover:border-blue-500/20 transition-colors"
          >
            <FaGithub size={14} />
            Source
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg glass-card text-sm text-slate-500 cursor-default">
              <Clock size={14} />
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
