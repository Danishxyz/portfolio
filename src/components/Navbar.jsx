import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Education", to: "education" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="group text-2xl font-bold cursor-pointer text-white tracking-widest transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(0,186,240,0.5)]"
                >
                    <span className="text-cyan group-hover:text-white transition-colors duration-300">Danish</span> <span className="group-hover:text-cyan transition-colors duration-300">Khan</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            spy={true}
                            activeClass="text-cyan drop-shadow-[0_0_8px_rgba(0,186,240,0.5)]"
                            className="relative group text-gray-300 hover:text-cyan cursor-pointer transition-all duration-300 text-sm font-medium tracking-wide uppercase py-1"
                        >
                            {link.name}
                            <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-cyan transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(0,186,240,0.8)]"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden glass overflow-hidden border-t border-white/10"
                    >
                        <ul className="flex flex-col items-center py-6 space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-300 hover:text-cyan text-lg font-medium cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
