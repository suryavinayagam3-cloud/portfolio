import { motion } from "framer-motion";
import { Award, ExternalLink, Clock } from "lucide-react";
import { certifications } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certifications() {
  const hasReal = certifications.some((c) => !c.placeholder);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-amber-400 font-mono text-sm tracking-wider uppercase mb-3">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Credentials & Learning
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-4" />
        </motion.div>

        {!hasReal ? (
          /* Placeholder state */
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="max-w-md mx-auto glass-card rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
              <Clock size={28} className="text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Coming Soon</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Certification details will be added soon. Targeted accreditations
              aligned with enterprise cloud and modern AI workflows are in
              progress.
            </p>
          </motion.div>
        ) : (
          /* Certification cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {certifications
              .filter((c) => !c.placeholder)
              .map((cert, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: i * 0.1 },
                    },
                  }}
                  className="glass-card rounded-2xl p-6 hover:border-amber-500/15 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <Award size={20} className="text-amber-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-slate-500 text-xs mb-3">{cert.date}</p>
                  {cert.credentialUrl && cert.credentialUrl !== "#" && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-amber-400 text-sm hover:text-amber-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Credential
                    </a>
                  )}
                </motion.div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
