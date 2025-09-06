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

const generateParticles = (num) =>
    Array.from({ length: num }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        size: 2 + Math.random() * 5,
        duration: 6 + Math.random() * 8,
    }));

const Footer = () => {
    const [email, setEmail] = useState("");
    const [showThankYou, setShowThankYou] = useState(false);
    const particles = generateParticles(30);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        setShowThankYou(true);
        setTimeout(() => {
            setShowThankYou(false);
            setEmail("");
        }, 3000);
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-purple-50 overflow-hidden mt-12 pt-16">
            {/* Animated Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            background: `linear-gradient(135deg, #84CC16, #FACC15, #F97316, #EF4444, #D946EF)`,
                            filter: "blur(2px)",
                        }}
                        animate={{ y: [0, -20, 0], scale: [1, 1.4, 1] }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <Leaf className="w-8 h-8 text-green-600 animate-spin-slow mr-3" />
                            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-600 via-yellow-400 to-purple-700 bg-clip-text text-transparent italic drop-shadow-lg">
                                VedaVerse
                            </h3>
                        </div>
                        <p className="mb-6 leading-relaxed text-sm md:text-base text-green-900/80 font-semibold italic drop-shadow-md">
                            Unlock ancient Ayurvedic wisdom. Rejuvenate with Panchakarma therapies and holistic healing.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="text-green-700 hover:text-red-500 transform hover:scale-125 transition-transform drop-shadow-md">
                                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Therapies */}
                    <div>
                        <h4 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-400 to-red-500 mb-4 flex items-center italic drop-shadow-lg">
                            <Heart className="w-5 h-5 mr-2" /> Therapies
                        </h4>
                        <ul className="space-y-2">
                            {["Vamana", "Virechana", "Basti", "Nasya", "Raktamokshana"].map((t, i) => (
                                <li key={i} className="hover:translate-x-1 transition-transform">
                                    <a href="#" className="flex items-center text-sm md:text-base font-semibold text-gradient-to-r from-green-400 via-yellow-300 to-red-500 hover:scale-105 transition-transform drop-shadow-md">
                                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 rounded-full mr-3"></span>{t}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-purple-500 mb-4 drop-shadow-lg">Services</h4>
                        <ul className="space-y-2">
                            {["Consultation", "Wellness Programs", "Yoga & Meditation", "Herbal Medicine", "Lifestyle Coaching"].map((s, i) => (
                                <li key={i} className="hover:translate-x-1 transition-transform">
                                    <a href="#" className="flex items-center text-sm md:text-base font-medium bg-clip-text bg-gradient-to-r text-black hover:scale-105 transition-transform drop-shadow-md">
                                        <span className="w-1.5 h-1.5 bg-gradient-to-r text-black rounded-full mr-3"></span>{s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-purple-400 mb-4 italic drop-shadow-md">Stay Connected</h4>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm md:text-base font-semibold text-green-900 drop-shadow-md">
                                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-3 text-green-600" />
                                <span>info@vedaverse.com</span>
                            </div>
                            <div className="flex items-center text-sm md:text-base font-semibold text-orange-800 drop-shadow-md">
                                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-3 text-red-500" />
                                <span>+91 98XXX XXXXX</span>
                            </div>
                            <div className="flex items-start text-sm md:text-base font-medium text-black drop-shadow-md">
                                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-orange-400 flex-shrink-0" />
                                <span>Odisha, India</span>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                            <h5 className="text-purple-950 font-semibold mb-3 text-sm md:text-base italic drop-shadow-md">🌿 Weekly Wellness Tips</h5>
                            <AnimatePresence>
                                {!showThankYou ? (
                                    <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg placeholder-purple-950 text-purple-950 font-medium italic focus:outline-none text-sm drop-shadow-md"
                                            required
                                        />
                                        <button type="submit" className="px-3 py-2 bg-gradient-to-r from-green-400 via-yellow-400 to-purple-500 rounded-lg hover:from-yellow-400 hover:to-red-400 transition-all duration-300 shadow-lg">
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </form>
                                ) : (
                                    <div className="text-center py-2 text-yellow-50 text-sm font-semibold drop-shadow-md">Thank you for subscribing!</div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
                    <p className="text-green-900 font-semibold drop-shadow-md">© 2025 VedaVerse. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-orange-400 font-medium hover:text-red-500 drop-shadow-md">Privacy Policy</a>
                        <span className="text-yellow-400 drop-shadow-md">|</span>
                        <a href="#" className="text-yellow-300 font-medium hover:text-purple-400 drop-shadow-md">Terms of Service</a>
                        <span className="text-red-400 drop-shadow-md">|</span>
                        <a href="#" className="text-purple-400 font-medium hover:text-green-400 drop-shadow-md">Cookie Policy</a>
                    </div>
                    <button onClick={scrollToTop} className="flex items-center space-x-2 hover:scale-110 transition-transform text-yellow-300 font-semibold drop-shadow-md">
                        <span className="text-sm italic">Back to top</span>
                        <ChevronUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
