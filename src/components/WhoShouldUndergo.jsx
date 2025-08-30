import React from "react";
import { motion } from "framer-motion";
import { Heart, Brain, Activity, Leaf } from "lucide-react";

// Data
const benefits = [
    {
        icon: <Heart className="w-12 h-12 text-rose-500" />,
        title: "Chronic Ailments",
        desc: "For individuals suffering from arthritis, diabetes, asthma, or digestive disorders who need deep-rooted healing.",
        color: "from-emerald-50 via-green-100 to-green-200",
    },
    {
        icon: <Brain className="w-12 h-12 text-indigo-500" />,
        title: "Mental Stress",
        desc: "Perfect for those facing stress, anxiety, insomnia, or mental fatigue seeking calmness and clarity.",
        color: "from-teal-50 via-emerald-100 to-green-200",
    },
    {
        icon: <Activity className="w-12 h-12 text-green-600" />,
        title: "Lifestyle Imbalance",
        desc: "Ideal for people with sedentary lifestyles, poor eating habits, or irregular routines causing body imbalance.",
        color: "from-green-50 via-emerald-100 to-teal-200",
    },
    {
        icon: <Leaf className="w-12 h-12 text-emerald-500" />,
        title: "Preventive Wellness",
        desc: "For healthy individuals who want to detoxify, rejuvenate, and boost immunity naturally.",
        color: "from-emerald-50 via-green-100 to-emerald-200",
    },
];

const WhoShouldUndergo = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50">
            {/* Animated floating background orbs */}
            <motion.div
                className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-40 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
                animate={{ scale: [1.1, 0.9, 1.1] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center text-green-900 mb-6"
                    initial={{ y: -40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Who Should Undergo{" "}
                    <span className="text-emerald-700 drop-shadow-md">Panchakarma?</span>
                </motion.h2>
                <motion.p
                    className="text-lg text-center text-green-700 max-w-2xl mx-auto mb-14"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Panchakarma is for everyone — whether you need relief from chronic
                    ailments, mental stress, lifestyle imbalances, or simply wish to
                    rejuvenate naturally.
                </motion.p>

                {/* Responsive Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.25 },
                        },
                    }}
                >
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-gradient-to-br ${item.color} p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group`}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Glow ring on hover */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-400 transition duration-300" />

                            {/* Icon with hover float */}
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="flex justify-center mb-5"
                            >
                                {item.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-green-900 text-center mb-3">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-green-700 text-center leading-relaxed text-sm md:text-base">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhoShouldUndergo;
