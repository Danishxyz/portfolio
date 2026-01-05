import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDown, FileText, Code } from "lucide-react";

export const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "Front-End Developer | Aspiring Full-Stack Web Developer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 50); // Typing speed
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Animated Gradient Background */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan/20 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />

            {/* Floating Elements (Decorative) */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[10%] opacity-20 text-cyan hidden md:block"
            >
                <Code size={48} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-[10%] opacity-20 text-blue-500 hidden md:block"
            >
                <div className="w-12 h-12 border-2 border-current rounded-lg transform rotate-12" />
            </motion.div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-cyan font-md mb-4 tracking-widest uppercase text-sm">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6 drop-shadow-lg">
                        Danish Khan
                    </h1>

                    <div className="h-8 md:h-12 mb-6">
                        <span className="text-xl md:text-3xl text-cyan-glow font-mono font-medium">
                            {text}
                            <span className="animate-blink">|</span>
                        </span>
                    </div>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Front-end web developer skilled in <span className="text-white font-medium">HTML, CSS, and JavaScript</span>,
                        currently learning <span className="text-white font-medium">React, Node.js, and MongoDB</span> to become a full-stack developer.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-8 py-3 rounded-full bg-cyan text-slate-900 font-bold hover:bg-cyan-glow transition-all transform hover:scale-105 shadow-lg shadow-cyan/20 cursor-pointer flex items-center gap-2"
                        >
                            <Code size={20} /> View Projects
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Danish_Khan_Resume.pdf"
                            className="px-8 py-3 rounded-full border border-cyan/30 text-cyan hover:bg-cyan/10 transition-all transform hover:scale-105 cursor-pointer flex items-center gap-2"
                        >
                            <FileText size={20} /> Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};
