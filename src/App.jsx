import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Certifications } from "./sections/Certifications";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";

function App() {
  // Smooth scroll behavior is handled by CSS (html { scroll-behavior: smooth })
  // But we can add extra GSAP initialization here if needed.

  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-cyan selection:text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="bg-slate-950 py-8 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Danish Khan. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
