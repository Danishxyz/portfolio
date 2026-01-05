import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Gift, ShoppingBag, Code } from "lucide-react";

export const Projects = () => {
    const projects = [
        {
            title: "Gift Shop Website",
            category: "MERN Stack Application",
            description: "A comprehensive e-commerce platform for gifting items. Features responsive UI, product listing, and a modern layout.",
            tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            features: ["Responsive UI", "Product Listing", "Hover Previews", "Cart System"],
            links: {
                demo: "#",
                code: "#"
            }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-cyan">Projects</span></h2>
                    <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 center">
                    {/* Since there's only one project, I'll center it or make it prominent */}
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="col-span-1 lg:col-span-2 glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan/10 transition-all duration-300 border border-white/5 flex flex-col md:flex-row group"
                        >
                            {/* Project Visual/Mockup */}
                            <div className="md:w-1/2 bg-gradient-to-br from-cyan/20 to-blue-900/20 p-10 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10 backdrop-blur-sm">
                                    <a href={project.links.demo} className="p-3 bg-cyan rounded-full text-slate-900 hover:scale-110 transition-transform"><ExternalLink /></a>
                                    <a href={project.links.code} className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"><Github /></a>
                                </div>

                                {/* CSS Mockup */}
                                <div className="w-full h-64 bg-slate-800 rounded-t-xl border-4 border-slate-700 shadow-2xl transform group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                                    <div className="h-6 bg-slate-700 flex items-center px-4 space-x-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="p-4 flex flex-col items-center justify-center h-full text-center">
                                        <Gift size={48} className="text-cyan mb-2" />
                                        <span className="text-lg font-bold text-white">Gift Shop</span>
                                        <div className="grid grid-cols-2 gap-2 mt-4 w-full px-8 opacity-50">
                                            <div className="h-12 bg-slate-700 rounded-md"></div>
                                            <div className="h-12 bg-slate-700 rounded-md"></div>
                                            <div className="h-12 bg-slate-700 rounded-md"></div>
                                            <div className="h-12 bg-slate-700 rounded-md"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-cyan text-sm font-mono tracking-wider">{project.category}</span>
                                        <h3 className="text-3xl font-bold text-white mt-1">{project.title}</h3>
                                    </div>
                                    <ShoppingBag className="text-gray-500" />
                                </div>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><Code size={16} className="text-cyan" /> Features</h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {project.features.map((feat, i) => (
                                            <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-cyan rounded-full"></span>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-800 text-cyan text-xs rounded-full border border-cyan/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
