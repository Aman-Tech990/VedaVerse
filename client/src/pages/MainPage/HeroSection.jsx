import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Play, Pause, Droplets, Leaf, Heart, Brain, Shield } from "lucide-react";
import DoshaQuiz from "@/components/Doshaquiz";
import Footer from "@/components/Footer";

const panchakarmaTherapy = [
    {
        name: "Vamana",
        desc: "Therapeutic vomiting for upper body detox",
        color: "from-emerald-400 to-teal-500",
        icon: "🌿",
        benefits: ["Removes toxins", "Clears respiratory", "Balances Kapha"]
    },
    {
        name: "Virechana",
        desc: "Purgation therapy for middle body cleansing",
        color: "from-green-400 to-emerald-500",
        icon: "💧",
        benefits: ["Liver detox", "Skin purification", "Digestive health"]
    },
    {
        name: "Basti",
        desc: "Medicated enemas for lower body treatment",
        color: "from-teal-400 to-cyan-500",
        icon: "🌊",
        benefits: ["Colon cleansing", "Nervous system", "Joint health"]
    },
    {
        name: "Nasya",
        desc: "Nasal administration for head and neck",
        color: "from-cyan-400 to-blue-500",
        icon: "🍃",
        benefits: ["Mental clarity", "Sinus relief", "Headache cure"]
    },
    {
        name: "Raktamokshana",
        desc: "Blood purification therapy",
        color: "from-blue-400 to-indigo-500",
        icon: "❤️",
        benefits: ["Blood purification", "Skin diseases", "Circulation boost"]
    }
];

// Featured services 
const featuredServices = [
    "Detoxification Treatments 🌿",
    "Digestive Health Programs 🍽️",
    "Mental Wellness & Stress Relief 🧘‍♂️",
    "Skin & Hair Therapy 💆‍♀️",
    "Blood Purification 💉",
    "Joint & Muscle Rejuvenation 💪"
];

// Enhanced leaf generation with different types
const generateLeaves = (num) => {
    return Array.from({ length: num }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        size: 6 + Math.random() * 12,
        rotate: Math.random() * 360,
        type: Math.floor(Math.random() * 3),
        opacity: 0.2 + Math.random() * 0.3,
        duration: 12 + Math.random() * 15,
    }));
};

// Generate floating particles
const generateParticles = (num) => {
    return Array.from({ length: num }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        size: 1 + Math.random() * 3,
    }));
};

// Panchakarma themed SVG icons
const PanchakarmaIcon = ({ type, className = "" }) => {
    const icons = {
        lotus: (
            <svg viewBox="0 0 100 100" className={className}>
                <path d="M50,80 C30,60 20,40 30,30 C40,20 60,20 70,30 C80,40 70,60 50,80 Z" fill="currentColor" opacity="0.6" />
                <path d="M50,75 C35,60 25,45 30,35 C35,25 65,25 70,35 C75,45 65,60 50,75 Z" fill="currentColor" opacity="0.8" />
                <circle cx="50" cy="45" r="8" fill="currentColor" />
            </svg>
        ),
        herb: (
            <svg viewBox="0 0 100 100" className={className}>
                <path d="M20,80 Q30,60 50,70 Q70,60 80,80" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7" />
                <path d="M50,70 Q40,50 30,40 Q35,30 50,35 Q65,30 70,40 Q60,50 50,70" fill="currentColor" opacity="0.6" />
                <circle cx="50" cy="45" r="3" fill="currentColor" />
            </svg>
        ),
        drop: (
            <svg viewBox="0 0 100 100" className={className}>
                <path d="M50,20 C40,40 30,60 40,75 C45,85 55,85 60,75 C70,60 60,40 50,20 Z" fill="currentColor" opacity="0.7" />
                <ellipse cx="45" cy="55" rx="8" ry="12" fill="currentColor" opacity="0.3" />
            </svg>
        )
    };
    return icons[type] || icons.lotus;
};

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const leaves = generateLeaves(15);
    const particles = generateParticles(12);

    // Mouse tracking for parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Auto-slide carousel
    useEffect(() => {
        if (!isAutoPlay) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % panchakarmaTherapy.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % panchakarmaTherapy.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + panchakarmaTherapy.length) % panchakarmaTherapy.length);
    };

    return (
        <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden min-h-screen">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-full"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute -bottom-32 -left-32 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-tr from-teal-200/20 to-cyan-300/20 rounded-full"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-green-400/40 rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                />
            ))}

            {/* Enhanced Animated Leaves */}
            {leaves.map((leaf) => (
                <motion.div
                    key={leaf.id}
                    className={`absolute rounded-full ${leaf.type === 0 ? "bg-green-400/60" :
                        leaf.type === 1 ? "bg-emerald-400/60" : "bg-teal-400/60"
                        }`}
                    style={{
                        width: leaf.size,
                        height: leaf.size,
                        left: `${leaf.x}%`,
                        opacity: leaf.opacity,
                    }}
                    initial={{ y: -100, rotate: leaf.rotate }}
                    animate={{
                        y: ["−100px", "100vh"],
                        rotate: [leaf.rotate, leaf.rotate + 720],
                        x: [0, Math.sin(leaf.delay) * 30, 0],
                    }}
                    transition={{
                        duration: leaf.duration,
                        repeat: Infinity,
                        delay: leaf.delay,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Parallax Background Shapes */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-300/20 to-emerald-400/20 rounded-full blur-xl"
                animate={{
                    x: mousePosition.x * 0.05,
                    y: mousePosition.y * 0.05,
                }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
            />

            {/* Hero Section */}
            <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                {/* Main Title with Enhanced Animation */}
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                    className="mb-4 md:mb-6"
                >
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-600 via-yellow-400 to-purple-700 bg-clip-text text-transparent mt-5"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        Welcome to VedaVerse
                    </motion.h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1.2 }}
                    className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl text-purple-950 leading-relaxed px-4 font-semibold"
                >
                    Discover the ancient art of Panchakarma and rejuvenate your mind and body with modern wellness experiences.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6"
                >
                    <Link to="schedule">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 15px 30px rgba(34, 197, 94, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-semibold shadow-lg text-sm md:text-base lg:text-lg transition-all duration-300 hover:cursor-pointer"
                        >
                            <span className="flex items-center justify-center gap-2 text-white">
                                Schedule my Therapy
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.div>
                            </span>
                        </motion.button>
                    </Link>

                    <Link to="about">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white/90 text-green-700 font-semibold shadow-lg text-sm md:text-base lg:text-lg border border-green-200 transition-all duration-300 hover:cursor-pointer"
                        >
                            Learn More
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Enhanced Compact Panchakarma Section */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1.2 }}
                    className="mt-12 sm:mt-16 w-full max-w-5xl"
                >
                    <motion.h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-900 mb-2 md:mb-4"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        Panchakarma Therapies
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-center text-sm sm:text-base lg:text-lg text-purple-950 max-w-2xl mx-auto mb-8 px-4 font-semibold"
                    >
                        Explore the five main therapies designed to detoxify, rejuvenate, and harmonize your body, mind, and soul.
                    </motion.p>

                    {/* Compact Carousel */}
                    <div className="relative w-full max-w-3xl mx-auto">
                        {/* Carousel Controls */}
                        <div className="flex justify-center items-center gap-3 mb-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-green-600 transition-all duration-300"
                            >
                                <ChevronLeft size={18} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsAutoPlay(!isAutoPlay)}
                                className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-green-600 transition-all duration-300"
                            >
                                {isAutoPlay ? <Pause size={18} /> : <Play size={18} />}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-green-600 transition-all duration-300"
                            >
                                <ChevronRight size={18} />
                            </motion.button>
                        </div>

                        {/* Compact Main Carousel Card */}
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-lg border border-white/30 h-48 sm:h-56 md:h-64 max-w-md mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ x: 300, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -300, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={`relative h-full bg-gradient-to-br ${panchakarmaTherapy[activeIndex].color} p-4 sm:p-6 flex flex-col justify-center items-center text-center`}
                                >
                                    {/* Background Panchakarma Image */}
                                    <div className="absolute inset-0 opacity-20">
                                        <img
                                            src={`https://images.unsplash.com/photo-${activeIndex === 0 ? '1506905925346-21bda4d32df4' :
                                                activeIndex === 1 ? '1544161515-4ab6ce6db0946' :
                                                    activeIndex === 2 ? '1571019613454-1cb2f99b2d8b' :
                                                        activeIndex === 3 ? '1596178065887-1198b6148b2b' :
                                                            '1570197788417-0e82375c9371'}?w=400&h=300&fit=crop`}
                                            alt={`${panchakarmaTherapy[activeIndex].name} therapy`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/30" />
                                    </div>

                                    {/* Animated therapeutic elements overlay */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        {/* Large decorative icon */}
                                        <motion.div
                                            className="text-4xl sm:text-5xl md:text-6xl opacity-30 absolute top-4 right-4"
                                            animate={{
                                                rotate: [0, 10, -10, 0],
                                                scale: [1, 1.1, 1]
                                            }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        >
                                            {panchakarmaTherapy[activeIndex].icon}
                                        </motion.div>

                                        {/* Floating SVG elements */}
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 0.4 }}
                                                transition={{ delay: i * 0.2, duration: 0.8 }}
                                            >
                                                <PanchakarmaIcon
                                                    type={i === 0 ? 'lotus' : i === 1 ? 'herb' : 'drop'}
                                                    className="w-6 h-6 md:w-8 md:h-8 text-white/60 absolute"
                                                    style={{
                                                        left: `${20 + i * 30}%`,
                                                        bottom: `${10 + i * 20}%`,
                                                        transform: `rotate(${i * 60}deg)`
                                                    }}
                                                />
                                            </motion.div>
                                        ))}

                                        {/* Floating particles */}
                                        {[...Array(4)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute bg-white/40 rounded-full"
                                                style={{
                                                    width: 3 + i * 2,
                                                    height: 3 + i * 2,
                                                    left: `${10 + i * 25}%`,
                                                    top: `${15 + i * 20}%`,
                                                }}
                                                animate={{
                                                    y: [0, -12, 0],
                                                    opacity: [0.4, 0.8, 0.4],
                                                    scale: [1, 1.3, 1]
                                                }}
                                                transition={{
                                                    duration: 2.5 + i * 0.3,
                                                    repeat: Infinity,
                                                    delay: i * 0.3,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Content overlay */}
                                    <div className="relative z-10 flex flex-col items-center">
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="mb-3"
                                        >
                                            <span className="text-3xl sm:text-4xl mb-2 block">
                                                {panchakarmaTherapy[activeIndex].icon}
                                            </span>
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                                                {panchakarmaTherapy[activeIndex].name}
                                            </h3>
                                        </motion.div>

                                        <motion.p
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                            className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed max-w-xs drop-shadow-md"
                                        >
                                            {panchakarmaTherapy[activeIndex].desc}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-4 sm:mt-6 gap-2">
                            {panchakarmaTherapy.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? "bg-green-500 scale-125"
                                        : "bg-green-300 hover:bg-green-400"
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        {/* Mobile-friendly Thumbnail Preview */}
                        <div className="hidden sm:flex justify-center mt-6 gap-2 md:gap-3">
                            {panchakarmaTherapy.map((therapy, index) => (
                                <motion.div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`cursor-pointer p-2 md:p-3 rounded-lg transition-all duration-300 ${index === activeIndex
                                        ? "bg-white/80 shadow-lg scale-105"
                                        : "bg-white/40 hover:bg-white/60"
                                        }`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="text-lg md:text-xl mb-1">{therapy.icon}</div>
                                    <p className="text-xs md:text-sm font-semibold text-green-800">
                                        {therapy.name}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Quiz */}
            <DoshaQuiz />

            {/* Overview Section */}
            <div>
                <section className="relative z-10 w-full py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-green-100 via-emerald-50 to-teal-100 mt-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-900 text-center mb-6"
                    >
                        What is Panchakarma?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="max-w-3xl mx-auto text-center text-purple-950 font-semibold text-base sm:text-lg md:text-xl leading-relaxed"
                    >
                        Panchakarma is an ancient Ayurvedic detoxification and rejuvenation process designed to cleanse the body of toxins, restore balance to the doshas, and promote holistic well-being. Through a series of specialized therapies including Vamana, Virechana, Basti, Nasya, and Raktamokshana, Panchakarma targets both physical and mental wellness, enhancing vitality, immunity, and mental clarity. This timeless practice rejuvenates your body, sharpens your mind, and harmonizes your soul, empowering you to experience a healthier, more vibrant life.
                    </motion.p>
                </section>
            </div>

            {/* Services Section */}
            <div>
                <section className="relative z-10 w-full p-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-green-100 to-teal-50">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-900 text-center mb-12"
                    >
                        Our Featured Services
                    </motion.h2>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {featuredServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 hover:scale-105 transition-transform duration-300 text-purple-950 font-semibold text-center text-lg md:text-xl"
                            >
                                {service}
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Edge / Benefits Section */}
            <section className="relative z-10 w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-900 text-center mb-12"
                >
                    Why Choose VedaVerse?
                </motion.h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Benefit Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                    >
                        <Shield className="w-12 h-12 text-purple-950 mb-4" />
                        <h3 className="font-semibold text-xl text-purple-950 mb-2">Safe & Certified</h3>
                        <p className="text-md font-semibold text-purple-950">
                            All therapies are guided by certified Ayurvedic experts ensuring maximum safety.
                        </p>
                    </motion.div>

                    {/* Benefit Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                    >
                        <Heart className="w-12 h-12 text-purple-950 mb-4" />
                        <h3 className="font-semibold text-xl text-purple-950 mb-2">Holistic Wellness</h3>
                        <p className="text-md font-semibold text-purple-950">
                            Mind, body, and soul rejuvenation with personalized Panchakarma plans.
                        </p>
                    </motion.div>

                    {/* Benefit Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                    >
                        <Brain className="w-12 h-12 text-purple-950 mb-4" />
                        <h3 className="font-semibold text-xl text-purple-950 mb-2">Mental Clarity</h3>
                        <p className="text-md font-semibold text-purple-950">
                            Reduce stress, enhance focus, and boost mental performance with targeted therapies.
                        </p>
                    </motion.div>

                    {/* Benefit Card 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                    >
                        <Droplets className="w-12 h-12 text-purple-950 mb-4" />
                        <h3 className="font-semibold text-xl text-purple-950 mb-2">Detox & Rejuvenate</h3>
                        <p className="text-md font-semibold text-purple-950">
                            Cleanse your body naturally and boost immunity for long-term health benefits.
                        </p>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <div className="mt-12 flex justify-center">
                    <Link to="/services">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(34, 197, 94, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg text-lg transition-all duration-300"
                        >
                            See Full Services →
                        </motion.button>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HeroSection;