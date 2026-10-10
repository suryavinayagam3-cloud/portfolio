import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Server,
  Brain,
  Cloud,
  Wrench,
} from "lucide-react";
import { skills } from "../data/portfolioData";

const iconMap = { Code2, Globe, Server, Brain, Cloud, Wrench };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-3">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technologies & Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: i * 0.08 },
                  },
                }}
                className="glass-card rounded-2xl p-6 group hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-xs font-medium border border-white/5 hover:border-blue-500/20 hover:text-blue-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
