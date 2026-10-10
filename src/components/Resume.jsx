import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-3xl mx-auto glass-card rounded-3xl p-8 sm:p-12 text-center"
        >
          {/* Icon */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
              <FileText size={28} className="text-white" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
          >
            Interested in my profile?
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-slate-400 max-w-lg mx-auto mb-8"
          >
            View my resume to learn more about my education, skills and
            projects.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-200 font-medium text-sm hover:text-white hover:border-blue-500/20 transition-colors"
            >
              <Eye size={16} />
              View Resume
            </a>
            <a
              href={personalInfo.resumePath}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
