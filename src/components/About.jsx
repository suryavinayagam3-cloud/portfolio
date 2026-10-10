import { motion } from "framer-motion";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo, aboutHighlights } from "../data/portfolioData";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-blue-400 font-mono text-sm tracking-wider uppercase mb-3">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get To Know Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left: Profile image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Gradient ring */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 via-violet-500 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden glass-card">
                {!imgError ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={`Portrait of ${personalInfo.name}`}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-navy-800">
                    <User size={48} className="text-slate-600" />
                    <span className="text-slate-500 text-sm font-medium">
                      Profile Image
                    </span>
                    <span className="text-slate-600 text-xs">
                      Add photo at public/profile.jpg
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Bio + stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {personalInfo.degree}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <GraduationCap size={16} className="text-blue-400" />
                  {personalInfo.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={16} className="text-violet-400" />
                  {personalInfo.college}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-cyan-400" />
                  {personalInfo.location}
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-slate-400 leading-relaxed"
            >
              I am a passionate Information Technology student with a strong
              interest in Artificial Intelligence, Machine Learning, Cloud
              Computing, .NET development, Web development, Retrieval-Augmented
              Generation (RAG), Generative AI, and building practical software
              applications that solve real-world problems.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-slate-400 leading-relaxed"
            >
              I actively architect modern cloud pipelines, build domain-specific
              RAG vector engines, and develop microservices in .NET Core and
              Python. My priority is pragmatic engineering — delivering
              observable, high-performance systems ready for real-world demands.
            </motion.p>

            {/* Stats grid */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
            >
              {aboutHighlights.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center hover:border-blue-500/20 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
