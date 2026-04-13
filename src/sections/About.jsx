import React from "react";
import { motion } from "framer-motion";
import { User, Server, Layout } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About <span className="text-cyan">Me</span></h2>
                    <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Animated Profile/Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass p-8 rounded-2xl relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                            <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-cyan/30 flex items-center justify-center mb-4 overflow-hidden shadow-2xl shadow-cyan/10">
                                <User size={64} className="text-gray-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Danish Khan</h3>
                                <p className="text-cyan">Frontend Web Developer</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                                    <span className="block text-2xl font-bold text-white">MCA</span>
                                    <span className="text-xs text-gray-400">2024–2026</span>
                                </div>
                                <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                                    <span className="block text-2xl font-bold text-white">BCA</span>
                                    <span className="text-xs text-gray-400">2020–2023</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-gray-300 text-lg leading-relaxed"
                    >
                        <p>
                            I have completed my <span className="text-white font-semibold">Master of Computer Applications (MCA)</span> from
                            <span className="text-cyan"> Parul University (2024–2026)</span> and hold a <span className="text-white font-semibold">Bachelor of Computer Applications (BCA)</span> from 
                            <span className="text-cyan"> Dolat Usha Institute (2020–2023)</span>.
                        </p>
                        <p>
                            I am a <span className="text-cyan font-semibold">Frontend Web Developer</span> passionate about building clean, responsive, and user-friendly web interfaces. 
                            I have hands-on experience with modern web technologies, including the <span className="text-cyan font-semibold">MERN stack</span>, and continuously 
                            work on improving my skills to develop scalable and efficient applications.
                        </p>
                        <p>
                            My career goal is to become a proficient <span className="text-cyan font-semibold">Full Stack Web Developer</span>,
                            capable of designing and delivering high-performance solutions that solve real-world problems from frontend to backend.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Layout size={18} className="text-cyan" /> Responsive Design
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Server size={18} className="text-cyan" /> Modern Tech
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
