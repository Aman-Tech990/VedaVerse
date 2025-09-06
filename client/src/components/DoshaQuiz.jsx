import React, { useState } from "react";
import { motion } from "framer-motion";

const DoshaQuiz = () => {
    const questions = [
        {
            question: "How do you usually feel after waking up?",
            options: ["Energetic 🏃‍♂️", "Calm 😌", "Hungry 🍽️"],
        },
        {
            question: "Which climate do you prefer?",
            options: ["Cool ❄️", "Warm ☀️", "Moderate 🌤️"],
        },
        {
            question: "How is your digestion usually?",
            options: ["Fast ⚡", "Slow 🐢", "Moderate 🌿"],
        },
        {
            question: "How is your skin type?",
            options: ["Oily 💧", "Dry 🌵", "Normal 🌸"],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState("");

    const handleAnswer = (option) => {
        setAnswers([...answers, option]);
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateResult([...answers, option]);
            setShowResult(true);
        }
    };

    const calculateResult = (answers) => {
        // Simple logic to determine dosha
        const vata = answers.filter(a => a.includes("⚡") || a.includes("❄️") || a.includes("🐢")).length;
        const pitta = answers.filter(a => a.includes("🏃‍♂️") || a.includes("☀️") || a.includes("💧")).length;
        const kapha = answers.filter(a => a.includes("😌") || a.includes("🌿") || a.includes("🌸") || a.includes("🌵") || a.includes("🍽️")).length;

        if (vata >= pitta && vata >= kapha) setResult("Vata Dominant 🌀");
        else if (pitta >= vata && pitta >= kapha) setResult("Pitta Dominant 🔥");
        else setResult("Kapha Dominant 🌱");
    };

    const resetQuiz = () => {
        setAnswers([]);
        setCurrentQuestion(0);
        setShowResult(false);
        setResult("");
    };

    return (
        <section className="relative z-10 w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-900 text-center mb-12"
            >
                Discover Your Dosha
            </motion.h2>

            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/30">
                {!showResult ? (
                    <>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-purple-950 font-semibold text-xl mb-6 text-center"
                        >
                            {questions[currentQuestion].question}
                        </motion.p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {questions[currentQuestion].options.map((option, idx) => (
                                <motion.button
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleAnswer(option)}
                                    className="bg-green-500 text-white font-semibold rounded-xl py-3 px-4 shadow hover:bg-green-600 transition-all duration-300 text-center hover:cursor-pointer"
                                >
                                    {option}
                                </motion.button>
                            ))}
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
                            Your Dosha:
                        </h3>
                        <p className="text-xl font-semibold sm:text-2xl text-orange-900 mb-6">{result}</p>
                        <button
                            onClick={resetQuiz}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                        >
                            Retake Quiz
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default DoshaQuiz;
