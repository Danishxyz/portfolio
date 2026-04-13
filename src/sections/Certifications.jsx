import React from "react";
import { motion } from "framer-motion";
import { Award, Download, ExternalLink } from "lucide-react";

export const Certifications = () => {
    const certifications = [
        {
            title: "Software Development Internship",
            issuer: "AccioJob",
            date: "Jan 2026 - Mar 2026",
            description: "Certificate of completion for successfully completing a comprehensive Software Development Internship program.",
            link: "/Danish Khan_Internship_certi.pdf",
            icon: <Award size={40} />,
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-cyan">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-1 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border-l-4 border-cyan/50 hover:border-cyan transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="text-cyan bg-slate-800 p-3 rounded-lg group-hover:bg-slate-700 transition-colors">
                                            {cert.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                                {cert.title}
                                            </h3>
                                            <p className="text-sm text-slate-400">{cert.issuer} • {cert.date}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 mt-4">{cert.description}</p>
                                </div>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-cyan/10 border border-cyan text-cyan rounded-lg hover:bg-cyan/20 transition-colors whitespace-nowrap"
                                >
                                    <Download size={18} />
                                    <span className="hidden sm:inline">View</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
