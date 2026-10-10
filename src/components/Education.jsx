import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { education } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase mb-3">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Academic Background
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-500/30" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: i * 0.15 },
                },
              }}
              className="relative pl-16 pb-8"
            >
              {/* Timeline node */}
              <div className="absolute left-3 top-2 w-7 h-7 rounded-full bg-navy-900 border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <GraduationCap size={14} className="text-blue-400" />
              </div>

              {/* Card */}
              <div className="glass-card rounded-2xl p-6 hover:border-blue-500/15 transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="flex items-center gap-1.5 text-sm text-blue-400 font-medium">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-slate-400 text-sm font-medium mb-3">
                  {edu.institution}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 text-slate-400 text-xs border border-white/5"
                    >
                      <BookOpen size={12} />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
