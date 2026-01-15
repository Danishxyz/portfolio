import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Terminal, Layout, Globe, Cpu, GitBranch } from "lucide-react";

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML5", icon: <Globe size={24} />, level: 90 },
            { name: "CSS3", icon: <Layout size={24} />, level: 85 },
            { name: "JavaScript (ES6+)", icon: <Code size={24} />, level: 80 },
            { name: "Responsive Design", icon: <Layout size={24} />, level: 95 },
        ],
    },
    {
        category: "Learning / Backend",
        items: [
            { name: "React.js", icon: <Code size={24} />, level: 75 },
            { name: "Node.js", icon: <Server size={24} />, level: 60 },
            { name: "MongoDB", icon: <Database size={24} />, level: 65 },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Git & GitHub", icon: <GitBranch size={24} />, level: 80 },
            { name: "VS Code", icon: <Terminal size={24} />, level: 90 },
        ],
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My <span className="text-cyan">Skills</span></h2>
                    <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                            className="glass p-6 rounded-2xl border-t border-cyan/20"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-cyan rounded-full"></span>
                                {category.category}
                            </h3>

                            <div className="space-y-6">
                                {category.items.map((skill, index) => (
                                    <div key={skill.name} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3 text-gray-300 group-hover:text-cyan transition-colors">
                                                <div className="bg-slate-800 p-2 rounded-lg text-cyan">
                                                    {skill.icon}
                                                </div>
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                                        </div>
                                        {/* Animated Progress Bar */}
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-cyan to-blue-600 rounded-full relative"
                                            >
                                                <div className="absolute right-0 top-0 h-full w-2 bg-white/50 animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
