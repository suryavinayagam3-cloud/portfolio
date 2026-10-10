import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient background glows */}
      <div
        className="ambient-glow"
        style={{ top: "10%", left: "-10%", background: "#3b82f6" }}
      />
      <div
        className="ambient-glow"
        style={{ top: "40%", right: "-10%", background: "#8b5cf6" }}
      />
      <div
        className="ambient-glow"
        style={{ top: "70%", left: "20%", background: "#06b6d4" }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
