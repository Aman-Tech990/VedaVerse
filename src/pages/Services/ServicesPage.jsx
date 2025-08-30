import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

// All services with details
const allServices = [
    { name: "Detoxification Treatments", desc: "Deep cleanse your body from toxins using ancient Ayurvedic therapies.", icon: "🌿" },
    { name: "Digestive Health Programs", desc: "Improve digestion, boost metabolism, and support gut health naturally.", icon: "🍽️" },
    { name: "Respiratory Cleansing", desc: "Clear your respiratory system, enhance lung function and breathing.", icon: "🌬️" },
    { name: "Mental Wellness & Stress Relief", desc: "Relax your mind, reduce stress, and improve emotional balance.", icon: "🧘‍♂️" },
    { name: "Skin & Hair Therapy", desc: "Nourish skin and hair for natural glow and health.", icon: "💆‍♀️" },
    { name: "Blood Purification", desc: "Cleanse your blood to enhance circulation and vitality.", icon: "💉" },
    { name: "Personalized Panchakarma Programs", desc: "Tailored therapy plans based on your unique dosha balance.", icon: "🌀" },
    { name: "Joint & Muscle Rejuvenation", desc: "Relieve joint pain, stiffness and improve flexibility.", icon: "💪" },
    { name: "Liver & Kidney Detox Programs", desc: "Support your liver and kidney function naturally.", icon: "🫀" },
    { name: "Weight Management & Metabolism Boost", desc: "Achieve healthy weight and improve metabolic efficiency.", icon: "⚖️" },
    { name: "Immune System Strengthening", desc: "Boost immunity naturally to fight diseases.", icon: "🛡️" },
    { name: "Sleep & Relaxation Therapy", desc: "Improve sleep quality and enhance relaxation.", icon: "😴" },
    { name: "Head & Neck Detox Treatments", desc: "Cleansing therapies focused on head, neck, and sensory organs.", icon: "🧠" },
    { name: "Stress Reduction & Mindfulness Programs", desc: "Learn mindfulness techniques to reduce stress and anxiety.", icon: "🌸" },
    { name: "Rejuvenation for Chronic Fatigue", desc: "Restore energy, vitality, and reduce chronic tiredness.", icon: "🔋" },
    { name: "Anti-Aging Therapy", desc: "Maintain youthful vigor and slow aging naturally.", icon: "✨" },
    { name: "Hormonal Balance Programs", desc: "Balance hormones for better physical and emotional health.", icon: "⚡" },
    { name: "Detoxifying Herbal Treatments", desc: "Use natural herbs to cleanse and rejuvenate the body.", icon: "🌱" },
    { name: "Vata, Pitta & Kapha Balancing Therapies", desc: "Restore dosha balance with personalized therapies.", icon: "🌀" },
    { name: "Seasonal Panchakarma Retreats", desc: "Special seasonal retreats for complete body & mind detox.", icon: "🏞️" },
    { name: "Post-Illness Recovery Programs", desc: "Recover strength, immunity, and vitality after illness.", icon: "💊" },
    { name: "Chronic Pain Management", desc: "Alleviate chronic pain and enhance mobility.", icon: "🩹" },
    { name: "Arthritis & Joint Health Treatments", desc: "Special therapies to maintain joint health and reduce arthritis symptoms.", icon: "🦴" },
    { name: "Circulatory & Cardiovascular Wellness", desc: "Support heart health and improve blood circulation.", icon: "❤️" },
    { name: "Energy & Vitality Boost", desc: "Increase stamina, energy, and overall vitality.", icon: "⚡" },
    { name: "Mind-Body Harmony Sessions", desc: "Achieve mental clarity and physical harmony with holistic therapies.", icon: "🧘‍♀️" },
    { name: "Detox Bath & Steam Therapies", desc: "Relaxing baths and steam sessions for full-body detox.", icon: "🛁" },
    { name: "Ayurvedic Dietary Consultation", desc: "Get dietary guidance tailored to your dosha and health goals.", icon: "🥗" },
    { name: "Meditation & Breathing Practices", desc: "Learn meditation and pranayama for mental and physical wellness.", icon: "🌬️" },
    { name: "Holistic Lifestyle Coaching", desc: "Personal coaching to optimize lifestyle, health, and balance.", icon: "🌿" }
];

// Motion variants for fade-in on scroll
const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, duration: 0.5 } },
    hover: { scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }
};

const iconVariants = {
    hover: {
        rotate: [0, 10, -10, 10, 0],
        transition: { duration: 0.8 }
    }
};

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-green-50 py-16 px-4 sm:px-6 lg:px-8 relative">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 text-center mb-12">
                Our Complete Services
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {allServices.map((service, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover="hover"
                        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 flex flex-col items-center text-center cursor-pointer"
                    >
                        <motion.span
                            className="text-5xl mb-3"
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            {service.icon}
                        </motion.span>
                        <h2 className="text-xl font-bold text-green-800 mb-2">{service.name}</h2>
                        <p className="text-sm text-green-700">{service.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Schedule Button */}
            <div className="mt-16 flex justify-center">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/schedule">
                        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg text-lg sm:text-xl transition-all duration-300">
                            Schedule My Therapy
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;
