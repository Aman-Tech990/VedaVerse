import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

// All services 
const allServices = [
    { name: "Detoxification Treatments", icon: "🌿" },
    { name: "Digestive Health Programs", icon: "🍽️" },
    { name: "Respiratory Cleansing", icon: "🌬️" },
    { name: "Mental Wellness & Stress Relief", icon: "🧘‍♂️" },
    { name: "Skin & Hair Therapy", icon: "💆‍♀️" },
    { name: "Blood Purification", icon: "💉" },
    { name: "Personalized Panchakarma Programs", icon: "🌀" },
    { name: "Joint & Muscle Rejuvenation", icon: "💪" },
    { name: "Liver & Kidney Detox Programs", icon: "🫀" },
    { name: "Weight Management & Metabolism Boost", icon: "⚖️" },
    { name: "Immune System Strengthening", icon: "🛡️" },
    { name: "Sleep & Relaxation Therapy", icon: "😴" },
    { name: "Head & Neck Detox Treatments", icon: "🧠" },
    { name: "Stress Reduction & Mindfulness Programs", icon: "🌸" },
    { name: "Rejuvenation for Chronic Fatigue", icon: "🔋" },
    { name: "Anti-Aging Therapy", icon: "✨" },
    { name: "Hormonal Balance Programs", icon: "⚡" },
    { name: "Detoxifying Herbal Treatments", icon: "🌱" },
    { name: "Vata, Pitta & Kapha Balancing Therapies", icon: "🌀" },
    { name: "Seasonal Panchakarma Retreats", icon: "🏞️" },
    { name: "Post-Illness Recovery Programs", icon: "💊" },
    { name: "Chronic Pain Management", icon: "🩹" },
    { name: "Arthritis & Joint Health Treatments", icon: "🦴" },
    { name: "Circulatory & Cardiovascular Wellness", icon: "❤️" },
    { name: "Energy & Vitality Boost", icon: "⚡" },
    { name: "Mind-Body Harmony Sessions", icon: "🧘‍♀️" },
    { name: "Detox Bath & Steam Therapies", icon: "🛁" },
    { name: "Ayurvedic Dietary Consultation", icon: "🥗" },
    { name: "Meditation & Breathing Practices", icon: "🌬️" },
    { name: "Holistic Lifestyle Coaching", icon: "🌿" }
];

// Motion variants
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-900 text-center mb-12">
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
                        <h2 className="text-lg font-bold text-purple-900">{service.name}</h2>
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
