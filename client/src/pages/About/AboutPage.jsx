import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PanchakarmaTimeline from "@/components/PanchakarmaTimeline";
import DoshaInfo from "@/components/DoshaInfo";
import WhoShouldUndergo from "@/components/WhoShouldUndergo";
import PanchakarmaInfo from "@/components/PanchakarmaInfo";

const aboutServices = [
    "Detoxification Treatments 🌿",
    "Digestive Health Programs 🍽️",
    "Respiratory Cleansing 🌬️",
    "Mental Wellness & Stress Relief 🧘‍♂️",
    "Skin & Hair Therapy 💆‍♀️",
    "Blood Purification 💉",
    "Personalized Panchakarma Programs 🌀",
    "Joint & Muscle Rejuvenation 💪",
    "Liver & Kidney Detox Programs 🫀",
    "Weight Management & Metabolism Boost ⚖️",
    "Immune System Strengthening 🛡️",
    "Sleep & Relaxation Therapy 😴",
    "Head & Neck Detox Treatments 🧠",
    "Stress Reduction & Mindfulness Programs 🌸",
    "Rejuvenation for Chronic Fatigue 🔋",
];

const AboutPage = () => {
    return (
        <div className="bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50 min-h-screen overflow-hidden">

            {/* -------- HERO SECTION -------- */}
            <section className="relative text-center py-16 px-4 overflow-hidden">
                {/* Animated blobs */}
                <motion.div
                    className="absolute -top-20 -left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-20 right-0 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                />

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-600 via-yellow-400 to-purple-700 bg-clip-text text-transparent drop-shadow-lg"
                >
                    Panchakarma Reimagined
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-purple-950 font-semibold max-w-3xl mx-auto mt-6 text-lg md:text-xl leading-relaxed"
                >
                    Detoxify 🌿 Rejuvenate ✨ Restore balance ⚖️ <br />
                    Experience Ayurveda’s most powerful healing journey, tailored for your body, mind, and soul.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-8"
                >
                    <Link to="/schedule">
                        <Button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white rounded-full text-lg shadow-xl hover:scale-110 transition-transform cursor-pointer">
                            Book Your Spot →
                        </Button>
                    </Link>
                </motion.div>

                {/* Floating Sparkles */}
                <Sparkles className="absolute bottom-16 left-16 text-yellow-400 animate-pulse" size={40} />
                <Sparkles className="absolute top-10 right-20 text-green-400 animate-bounce" size={36} />
            </section>

            {/* -------- WHAT IS PANCHAKARMA -------- */}
            <section className="max-w-6xl mx-auto p-6 relative">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-orange-900 mb-8 text-center"
                >
                    What is Panchakarma?
                </motion.h2>

                <PanchakarmaInfo />
            </section>

            {/* -------- TIMELINE -------- */}
            <PanchakarmaTimeline />

            {/* -------- SERVICES -------- */}
            <section className="max-w-6xl mx-auto px-4 py-16 bg-green-50">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-10 text-center">
                    Services Provided
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    {aboutServices.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="bg-white/80 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/30 text-purple-900 text-md font-semibold text-center flex items-center justify-center"
                        >
                            <span className="mr-2 text-lg">
                                {idx % 2 === 0 ? "🌿" : idx % 3 === 0 ? "💧" : "🍃"}
                            </span>
                            {service}
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <Link to="/services">
                        <button className="px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg text-sm md:text-base lg:text-lg transition-all duration-300 hover:scale-110">
                            See Full Services →
                        </button>
                    </Link>
                </div>
            </section>

            {/* -------- BENEFITS -------- */}
            <section className="bg-green-100 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-10 text-center">
                        Key Benefits
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { text: "Detoxifies the body and mind", icon: "🧘‍♂️" },
                            { text: "Restores balance among doshas", icon: "⚖️" },
                            { text: "Strengthens the immune system", icon: "🛡️" },
                            { text: "Reduces stress and mental fatigue", icon: "🧘‍♀️" },
                            { text: "Enhances digestion and metabolism", icon: "🥗" },
                            { text: "Promotes deep relaxation and rejuvenation", icon: "🌸" },
                        ].map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white shadow-lg rounded-xl p-6 text-center"
                            >
                                <span className="text-5xl mb-4 inline-block">{benefit.icon}</span>
                                <p className="text-purple-900 text-md font-semibold">{benefit.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* -------- PANCHAKARMA PROCEDURES -------- */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-10 text-center">
                    The Five Procedures
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Vamana",
                            desc: "Therapeutic vomiting to remove excess Kapha and cleanse upper body.",
                            icon: "🤢",
                        },
                        {
                            name: "Virechana",
                            desc: "Purgation therapy to cleanse liver and intestines, removing Pitta imbalance.",
                            icon: "💧",
                        },
                        {
                            name: "Basti",
                            desc: "Medicated enemas to detoxify the colon and balance Vata dosha.",
                            icon: "🌊",
                        },
                        {
                            name: "Nasya",
                            desc: "Nasal administration of herbs for head and neck detox, enhancing clarity.",
                            icon: "🍃",
                        },
                        {
                            name: "Raktamokshana",
                            desc: "Controlled bloodletting therapy for blood purification and skin health.",
                            icon: "❤️",
                        },
                    ].map((therapy, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.08 }}
                            className="bg-gradient-to-tr from-green-200 to-emerald-300 rounded-2xl p-6 shadow-lg"
                        >
                            <div className="text-5xl mb-4 text-center">{therapy.icon}</div>
                            <h3 className="text-xl font-bold text-purple-900 mb-2 text-center">
                                {therapy.name}
                            </h3>
                            <p className="text-orange-900 font-semibold text-center">{therapy.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* -------- DOSHA INFO -------- */}
            <DoshaInfo />

            {/* -------- WHO SHOULD UNDERGO -------- */}
            <WhoShouldUndergo />

            {/* -------- BOOK SPOT ---------*/}
            <div className="flex justify-center my-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/schedule">
                        <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-bold rounded-full shadow-2xl text-lg transition-transform duration-300 cursor-pointer">
                            Book Your Spot →
                        </button>
                    </Link>
                </motion.div>
            </div>

        </div>
    );
};

export default AboutPage;
