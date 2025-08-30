import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Leaf,
    Heart,
    Send,
    ChevronUp
} from "lucide-react";

// Floating particles for background
const generateParticles = (num) => {
    return Array.from({ length: num }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        size: 2 + Math.random() * 4,
        duration: 6 + Math.random() * 8,
    }));
};

// Ayurvedic symbols SVG component
const AyurvedicSymbol = ({ type, className = "" }) => {
    const symbols = {
        om: (
            <svg viewBox="0 0 100 100" className={className}>
                <path d="M20,60 Q30,20 60,30 Q80,40 70,70 Q50,80 30,70 Q10,60 20,60 Z"
                    fill="currentColor" opacity="0.6" />
                <circle cx="65" cy="35" r="8" fill="currentColor" opacity="0.8" />
                <path d="M25,45 Q35,35 45,45" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
        ),
        lotus: (
            <svg viewBox="0 0 100 100" className={className}>
                <path d="M50,75 C35,60 25,45 30,35 C35,25 65,25 70,35 C75,45 65,60 50,75 Z"
                    fill="currentColor" opacity="0.6" />
                <path d="M50,70 C40,60 35,50 40,45 C45,40 55,40 60,45 C65,50 60,60 50,70 Z"
                    fill="currentColor" opacity="0.8" />
                <circle cx="50" cy="52" r="6" fill="currentColor" />
            </svg>
        ),
        mandala: (
            <svg viewBox="0 0 100 100" className={className}>
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
                <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
                <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.8" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
                    <line key={angle} x1="50" y1="50"
                        x2={50 + 20 * Math.cos(angle * Math.PI / 180)}
                        y2={50 + 20 * Math.sin(angle * Math.PI / 180)}
                        stroke="currentColor" strokeWidth="1" opacity="0.5" />
                ))}
            </svg>
        )
    };
    return symbols[type] || symbols.lotus;
};

const Footer = () => {
    const [email, setEmail] = useState("");
    const [showThankYou, setShowThankYou] = useState(false);
    const particles = generateParticles(20);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        setShowThankYou(true);
        setTimeout(() => {
            setShowThankYou(false);
            setEmail("");
        }, 3000);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white overflow-hidden mt-6">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Large decorative circles */}
                <motion.div
                    className="absolute -top-32 -right-32 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-tr from-teal-400/10 to-cyan-500/10 rounded-full"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-green-300/20 rounded-full"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                        }}
                    />
                ))}

                {/* Ayurvedic symbols */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-green-300/15"
                        style={{
                            left: `${10 + (i * 15)}%`,
                            top: `${20 + (i % 3) * 30}%`,
                        }}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <AyurvedicSymbol
                            type={i % 3 === 0 ? 'om' : i % 3 === 1 ? 'lotus' : 'mandala'}
                            className="w-8 h-8 md:w-12 md:h-12"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <motion.div
                            className="flex items-center mb-4"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="mr-3"
                            >
                                <Leaf className="w-8 h-8 text-green-400" />
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                                VedaVerse
                            </h3>
                        </motion.div>

                        <p className="text-green-100 mb-6 leading-relaxed text-sm md:text-base">
                            Discover the ancient wisdom of Ayurveda through modern wellness experiences.
                            Transform your life with authentic Panchakarma therapies and holistic healing.
                        </p>

                        <div className="flex space-x-4">
                            {[
                                { icon: Facebook, color: "hover:text-blue-400" },
                                { icon: Instagram, color: "hover:text-pink-400" },
                                { icon: Twitter, color: "hover:text-blue-300" },
                                { icon: Youtube, color: "hover:text-red-400" }
                            ].map(({ icon: Icon, color }, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className={`text-green-300 ${color} transition-colors duration-300`}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg md:text-xl font-semibold text-green-300 mb-4 flex items-center">
                            <Heart className="w-5 h-5 mr-2" />
                            Therapies
                        </h4>
                        <ul className="space-y-2">
                            {["Vamana", "Virechana", "Basti", "Nasya", "Raktamokshana"].map((therapy, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <a href="#" className="text-green-100 hover:text-green-300 transition-colors duration-300 text-sm md:text-base flex items-center">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                                        {therapy}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-lg md:text-xl font-semibold text-green-300 mb-4">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {[
                                "Consultation",
                                "Wellness Programs",
                                "Yoga & Meditation",
                                "Herbal Medicine",
                                "Lifestyle Coaching"
                            ].map((service, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <a href="#" className="text-green-100 hover:text-green-300 transition-colors duration-300 text-sm md:text-base flex items-center">
                                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                                        {service}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact & Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-1"
                    >
                        <h4 className="text-lg md:text-xl font-semibold text-green-300 mb-4">
                            Stay Connected
                        </h4>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-green-100 text-sm md:text-base">
                                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-3 text-green-400" />
                                <span>info@vedaverse.com</span>
                            </div>
                            <div className="flex items-center text-green-100 text-sm md:text-base">
                                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-3 text-green-400" />
                                <span>+91 98XXX XXXXX</span>
                            </div>
                            <div className="flex items-start text-green-100 text-sm md:text-base">
                                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                                <span>Odisha, India</span>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-green-800/30 backdrop-blur-sm rounded-2xl p-4 border border-green-600/30">
                            <h5 className="text-green-300 font-medium mb-3 text-sm md:text-base">
                                🌿 Weekly Wellness Tips
                            </h5>

                            <AnimatePresence mode="wait">
                                {!showThankYou ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        onSubmit={handleNewsletterSubmit}
                                        className="flex gap-2"
                                    >
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="flex-1 px-3 py-2 bg-white/10 border border-green-500/30 rounded-lg text-white placeholder-green-200 focus:outline-none focus:border-green-400 text-sm"
                                            required
                                        />
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                                        >
                                            <Send className="w-4 h-4" />
                                        </motion.button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="thank-you"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-2"
                                    >
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="text-green-300 mb-2"
                                        >
                                            ✨
                                        </motion.div>
                                        <p className="text-green-200 text-sm">Thank you for subscribing!</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="border-t border-green-600/30 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-green-200">
                            <p>© 2025 VedaVerse. All rights reserved.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-green-300 transition-colors">Privacy Policy</a>
                                <span>|</span>
                                <a href="#" className="hover:text-green-300 transition-colors">Terms of Service</a>
                                <span>|</span>
                                <a href="#" className="hover:text-green-300 transition-colors">Cookie Policy</a>
                            </div>
                        </div>

                        {/* Back to top button */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center space-x-2 text-green-300 hover:text-green-200 transition-colors duration-300"
                        >
                            <span className="text-sm">Back to top</span>
                            <ChevronUp className="w-4 h-4" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Subtle wave decoration at the top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400"></div>
        </footer>
    );
};

export default Footer;