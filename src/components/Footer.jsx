import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950/80 backdrop-blur-xl">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                {personalInfo.initials}
              </span>
              <span className="font-semibold text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
              AI & Cloud Engineer Aspirant | .NET Developer | AI/ML Enthusiast
            </p>
          </div>

          {/* Center: Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
