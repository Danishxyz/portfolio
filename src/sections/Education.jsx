import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

export const Education = () => {
    const education = [
        {
            degree: "Master of Computer Applications (MCA)",
            school: "Parul University",
            year: "2024 - 2026",
            grade: "CGPA: 7.31",
            description: "Specializing in Full-Stack Development and Advanced Web Technologies.",
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            school: "Dolat Usha Institute",
            year: "2020 - 2023",
            grade: "CGPA: 6.91",
            description: "Graduated with a strong foundation in Computer Science principles and programming.",
        },
    ];

    return (
        <section id="education" className="py-20 bg-slate-950">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education <span className="text-cyan">Timeline</span></h2>
                    <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-800 rounded-full"></div>

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="w-full md:w-5/12"></div>

                                <div className="z-10 bg-cyan border-4 border-slate-950 w-8 h-8 rounded-full flex items-center justify-center shadow-lg shadow-cyan/50">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                </div>

                                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                                    <div className={`glass p-6 rounded-xl border-l-4 border-cyan relative hover:bg-white/5 transition-colors ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                                        }`}>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <GraduationCap className="text-cyan" size={20} />
                                            {edu.degree}
                                        </h3>
                                        <h4 className="text-lg text-gray-300 font-medium mt-1">{edu.school}</h4>
                                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {edu.year}</span>
                                            <span className="flex items-center gap-1 text-cyan"><Award size={14} /> {edu.grade}</span>
                                        </div>
                                        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
