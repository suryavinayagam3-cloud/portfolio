import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  User,
  AtSign,
  MessageSquare,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { socialLinks } from "../data/portfolioData";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address.";
    if (!form.subject.trim()) errs.subject = "Please provide a subject.";
    if (!form.message.trim()) errs.message = "Message cannot be empty.";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    // Simulate submission — replace with Formspree or backend
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
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
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg">
            Have an inquiry, role opening, or collaboration in mind? Leave a
            message below or contact me directly.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Left: Direct contact */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="glass-card rounded-2xl p-6 flex flex-col gap-4"
            aria-label="Direct contact details"
          >
            <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider font-semibold">
              Direct Communication
            </span>

            <a
              href={`mailto:${socialLinks.email}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-blue-400" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] text-slate-500">Email</span>
                <span className="text-sm text-slate-300 truncate group-hover:text-blue-400 transition-colors">
                  {socialLinks.email}
                </span>
              </div>
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-500/10 flex items-center justify-center shrink-0">
                <FaGithub size={18} className="text-slate-400" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] text-slate-500">GitHub</span>
                <span className="text-sm text-slate-300 truncate group-hover:text-blue-400 transition-colors">
                  GitHub Profile
                </span>
              </div>
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                <FaLinkedin size={18} className="text-violet-400" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] text-slate-500">LinkedIn</span>
                <span className="text-sm text-slate-300 truncate group-hover:text-blue-400 transition-colors">
                  LinkedIn Profile
                </span>
              </div>
            </a>

            <div className="mt-auto p-3 rounded-xl bg-white/[0.02] flex items-center gap-2 text-slate-500 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Response time usually &lt; 24h
            </div>
          </motion.aside>

          {/* Right: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="lg:col-span-2 glass-card rounded-2xl p-6 sm:p-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-4 py-2 rounded-lg glass-card text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-xs text-slate-400 font-medium flex items-center gap-1"
                    >
                      <User size={12} /> Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Alex Turner"
                      className="h-11 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                    {errors.name && (
                      <span className="text-red-400 text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs text-slate-400 font-medium flex items-center gap-1"
                    >
                      <AtSign size={12} /> Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@domain.com"
                      className="h-11 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                    {errors.email && (
                      <span className="text-red-400 text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs text-slate-400 font-medium flex items-center gap-1"
                  >
                    <FileText size={12} /> Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration or Role Opportunity"
                    className="h-11 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                  {errors.subject && (
                    <span className="text-red-400 text-[11px] flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs text-slate-400 font-medium flex items-center gap-1"
                  >
                    <MessageSquare size={12} /> Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello Krishnasurya, I reviewed your projects and would like to discuss..."
                    className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-slate-600 text-sm resize-none focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                  {errors.message && (
                    <span className="text-red-400 text-[11px] flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] text-slate-600 hidden sm:inline">
                    Ready for Formspree integration
                  </span>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 hover:opacity-90 disabled:opacity-50 transition-all active:scale-95"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
