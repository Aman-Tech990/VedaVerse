import React from "react";
import { motion } from "framer-motion";
import { FaWind, FaFire, FaWater } from "react-icons/fa";

const doshas = [
    {
        name: "Vata",
        icon: <FaWind size={40} className="text-yellow-600" />,
        qualities: "Dry, light, cold, irregular, mobile",
        balanced: "Creativity, enthusiasm, alertness",
        imbalanced: "Anxiety, insomnia, joint pain, constipation",
        color: "from-yellow-100 to-yellow-200"
    },
    {
        name: "Pitta",
        icon: <FaFire size={40} className="text-red-600" />,
        qualities: "Hot, sharp, intense, oily, spreading",
        balanced: "Good digestion, sharp intellect, courage",
        imbalanced: "Anger, acidity, ulcers, skin rashes",
        color: "from-red-100 to-red-200"
    },
    {
        name: "Kapha",
        icon: <FaWater size={40} className="text-blue-600" />,
        qualities: "Heavy, slow, steady, cool, oily, smooth",
        balanced: "Calmness, strength, endurance, compassion",
        imbalanced: "Laziness, obesity, congestion, depression",
        color: "from-blue-100 to-blue-200"
    },
];

const DoshaInfo = () => {
    return (
        <section className="py-16 bg-green-50 px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-bold text-orange-900 mb-10 text-center"
            >
                Balance Your Doshas
            </motion.h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {doshas.map((dosha, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                        className={`bg-gradient-to-br ${dosha.color} rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300`}
                    >
                        <div className="flex justify-center mb-4">{dosha.icon}</div>
                        <h3 className="text-2xl font-bold text-orange-900 mb-3">{dosha.name}</h3>
                        <p className="text-purple-900 font-semibold mb-2"><span className="font-semibold">Qualities:</span> {dosha.qualities}</p>
                        <p className="text-purple-900 font-semibold  mb-2"><span className="font-semibold">Balanced:</span> {dosha.balanced}</p>
                        <p className="text-purple-900 font-semibold "><span className="font-semibold">Imbalanced:</span> {dosha.imbalanced}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DoshaInfo;
