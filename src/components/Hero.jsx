import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

const ThreeDHero = lazy(() => import("./ThreeDHero"));

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background gradient accents */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* ─── Left: Text ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="inline-flex">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-slate-300">
                AI & Cloud Engineer Aspirant | .NET Developer
              </span>
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-blue-400 font-medium"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 hover:opacity-90 active:scale-95 transition-all"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={personalInfo.resumePath}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-200 font-medium text-sm hover:text-white transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 pt-2"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Send Email"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* ─── Right: 3D Visual ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/10 via-violet-600/10 to-cyan-600/10 blur-2xl" />
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                <div className="w-16 h-16 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
              </div>
            }
          >
            <ThreeDHero />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}
