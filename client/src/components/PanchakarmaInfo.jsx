import React from "react";
import { motion } from "framer-motion";

const PanchaKarmaInfo = () => {
    return (
        <section className="relative w-full py-6 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
            {/* Subtle animated background blobs */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto space-y-4">
                {/* Paragraphs */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-green-700 text-lg md:text-xl leading-relaxed text-justify"
                >
                    Panchakarma, meaning <em>“five actions”</em>, is a profound Ayurvedic purification and rejuvenation therapy rooted in classical texts like the Charaka Samhita, Sushruta Samhita, and Ashtanga Hridaya. It works on two fundamental approaches — <strong>Shamana</strong> (pacification) and <strong>Shodhana</strong> (purification). While Shamana balances the body through methods like enhancing digestion, detoxifying, controlled fasting, exercise, sunlight, and fresh air, Shodhana uses the five cleansing therapies: Vamana, Virechana, Basti, Nasya, and Raktamokshana.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-green-700 text-lg md:text-xl leading-relaxed text-justify"
                >
                    The three doshas — <strong>Vata</strong>, <strong>Pitta</strong>, and <strong>Kapha</strong> — govern bodily functions like movement, metabolism, and stability. Panchakarma restores balance to these doshas, enhancing immunity, digestion, and vitality. The therapy is most effective during late winter to early spring when Kapha naturally accumulates, making it the perfect period for detoxification and rejuvenation.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="text-green-700 text-lg md:text-xl leading-relaxed text-justify"
                >
                    The process unfolds in three stages: <strong>Purva Karma</strong> (preparation through diet, herbal oils, massage, and sudation), <strong>Pradhana Karma</strong> (main therapies removing toxins), and <strong>Paschat Karma</strong> (post-care with diet transitions, herbs, and lifestyle adjustments). Beyond treating chronic ailments like arthritis, asthma, digestive issues, and skin conditions, Panchakarma reduces stress, restores energy, and offers preventive and rejuvenative care.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-green-700 text-lg md:text-xl leading-relaxed text-justify"
                >
                    With roots stretching over 5000 years, Panchakarma bridges ancient wisdom and modern wellness, providing holistic healing that nurtures mind, body, and spirit.
                </motion.p>
            </div>
        </section>
    );
};

export default PanchaKarmaInfo;
