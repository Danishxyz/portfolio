import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        }, 2000);
    };

    return (
        <section id="contact" className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In <span className="text-cyan">Touch</span></h2>
                    <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white">Let's Talk</h3>
                        <p className="text-gray-400 text-lg">
                            I'm open to <span className="text-cyan">Front-End Developer</span> or <span className="text-cyan">Full-Stack</span> roles.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danish.786400@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-full text-cyan group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-400">Email</span>
                                    <span className="text-white font-medium">danish.786400@gmail.com</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/danish-khan-742b5434a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-full text-cyan group-hover:scale-110 transition-transform">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-400">LinkedIn</span>
                                    <span className="text-white font-medium">Connect with me</span>
                                </div>
                            </a>

                            <a href="https://github.com/Danishxyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-full text-cyan group-hover:scale-110 transition-transform">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-400">GitHub</span>
                                    <span className="text-white font-medium">Check my repos</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass p-8 rounded-2xl border-t border-cyan/20"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all placeholder-gray-600 resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${status === "success"
                                    ? "bg-green-500 text-white"
                                    : "bg-cyan text-slate-900 hover:bg-cyan-glow hover:shadow-lg hover:shadow-cyan/20"
                                    }`}
                            >
                                {status === "submitting" ? (
                                    <Loader2 className="animate-spin" />
                                ) : status === "success" ? (
                                    "Message Sent!"
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
