import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaSpa, FaUserMd } from "react-icons/fa";

// Sample options
const therapyOptions = ["Vamana", "Virechana", "Basti", "Nasya", "Raktamokshana"];
const doctorOptions = ["Dr. Sharma", "Dr. Mehta", "Dr. Kapoor", "Dr. Reddy"];
const timeOptions = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

const SchedulePage = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedTherapy, setSelectedTherapy] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState("");

    // Generate sample dates for the next 7 days
    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date.toDateString();
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-900 mb-4">
                    Unlock Your Body's True Potential
                </h1>
                <p className="text-green-800 text-lg sm:text-xl md:text-2xl">
                    Pick a date, choose your therapy, and let wellness flow effortlessly.
                </p>
            </motion.div>

            {/* Option Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {[
                    { icon: <FaCalendarAlt />, label: "Date", value: selectedDate, setValue: setSelectedDate, options: dates },
                    { icon: <FaClock />, label: "Time", value: selectedTime, setValue: setSelectedTime, options: timeOptions },
                    { icon: <FaSpa />, label: "Therapy", value: selectedTherapy, setValue: setSelectedTherapy, options: therapyOptions },
                    { icon: <FaUserMd />, label: "Doctor", value: selectedDoctor, setValue: setSelectedDoctor, options: doctorOptions },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-lg flex flex-col items-center text-center cursor-pointer transition-all duration-300"
                    >
                        <div className="text-4xl mb-3 text-green-700">{item.icon}</div>
                        <h3 className="font-bold text-green-900 mb-2">{item.label}</h3>
                        <select
                            className="p-2 rounded-xl border border-green-200 w-full text-green-800 text-center font-medium focus:ring-2 focus:ring-green-400 focus:outline-none"
                            value={item.value}
                            onChange={(e) => item.setValue(e.target.value)}
                        >
                            <option value="">{`Select ${item.label}`}</option>
                            {item.options.map((opt, i) => (
                                <option key={i} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </motion.div>
                ))}
            </div>

            {/* Calendar Section */}
            <div className="max-w-5xl mx-auto mb-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6"
                >
                    {dates.map((date, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedDate(date)}
                            className={`p-4 rounded-2xl shadow-lg text-center cursor-pointer font-semibold transition-all duration-300 ${selectedDate === date
                                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                                : "bg-white/80 backdrop-blur-lg text-green-800 hover:shadow-2xl"
                                }`}
                        >
                            {date}
                            <div className="mt-2 text-sm text-green-700">Available Slots: 4</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34,197,94,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xl shadow-lg transition-all duration-300 cursor-pointer"
                >
                    Confirm Your Therapy
                </motion.button>
            </div>
        </div>
    );
};

export default SchedulePage;
