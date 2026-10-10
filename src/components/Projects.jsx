import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-violet-400 font-mono text-sm tracking-wider uppercase mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Explore AI/ML frameworks, RAG systems, and intelligent web
            applications I have built.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-4" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
