import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaStethoscope, FaHeartbeat } from "react-icons/fa";

const panchakarmaSteps = [
    {
        stage: "Purva Karma",
        icon: <FaLeaf size={30} className="text-green-700" />,
        description: `Preparation phase including dietary adjustments, herbal preparations, and oil massage (Abhyanga) to mobilize toxins. Pre-procedures like Snehana (Oleation) and Swedana (Sudation) are done.`
    },
    {
        stage: "Pradhana Karma",
        icon: <FaStethoscope size={30} className="text-green-700" />,
        description: `Main Panchakarma therapies to remove impurities (Ama Doshas): Vamana, Virechana, Nasya, Basti (Niruha & Anuvasana), and Raktamokshana (Bloodletting).`
    },
    {
        stage: "Paschat Karma",
        icon: <FaHeartbeat size={30} className="text-green-700" />,
        description: `Post-therapy support including gradual diet transition, continued herbal support, and lifestyle adjustments to maintain balance and wellness.`
    }
];

const PanchakarmaTimeline = () => {
    return (
        <div className="py-16 bg-green-50 px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl font-extrabold text-orange-900 text-center mb-6"
            >
                Your Panchakarma Journey
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-center text-purple-950 font-semibold max-w-3xl mx-auto mb-12 text-lg"
            >
                Explore the three key stages of Panchakarma to rejuvenate your body, mind, and energy.
            </motion.p>

            {/* Timeline */}
            <div className="relative max-w-5xl mx-auto">
                {/* Vertical line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2"></div>

                {panchakarmaSteps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.3, duration: 0.6 }}
                        className={`mb-12 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}
                    >
                        {/* Animated Icon instead of dot */}
                        <div className="hidden md:flex justify-center w-1/2">
                            <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="z-10 relative"
                            >
                                {step.icon}
                            </motion.div>
                        </div>

                        {/* Card */}
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 flex-1 text-center md:text-left md:max-w-md">
                            <div className="mb-4 flex justify-center md:justify-start">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-purple-900 mb-3">{step.stage}</h3>
                            <p className="text-purple-900 font-semibold">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="text-center mt-12"
            >
                <a
                    href="/schedule"
                    className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    Schedule Your Therapy
                </a>
            </motion.div>
        </div>
    );
};

export default PanchakarmaTimeline;
