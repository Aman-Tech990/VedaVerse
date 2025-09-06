import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaSpa, FaUserMd } from "react-icons/fa";

const therapyOptions = ["Vamana", "Virechana", "Basti", "Nasya", "Raktamokshana"];
const doctorOptions = ["Dr. Sharma", "Dr. Mehta", "Dr. Kapoor", "Dr. Reddy"];
const timeOptions = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

const SchedulePage = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedTherapy, setSelectedTherapy] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState("");

    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date.toDateString();
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Unlock Your Body&apos;s True Potential 🌿
                </h1>
                <p className="text-green-800 text-lg sm:text-xl md:text-2xl mt-4">
                    Pick a date, choose your therapy, and let wellness flow effortlessly.
                </p>
            </motion.div>

            {/* Option Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {[
                    { icon: <FaCalendarAlt />, label: "Date", value: selectedDate, setValue: setSelectedDate, options: dates },
                    { icon: <FaClock />, label: "Time", value: selectedTime, setValue: setSelectedTime, options: timeOptions },
                    { icon: <FaSpa />, label: "Therapy", value: selectedTherapy, setValue: setSelectedTherapy, options: therapyOptions },
                    { icon: <FaUserMd />, label: "Doctor", value: selectedDoctor, setValue: setSelectedDoctor, options: doctorOptions },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/30 flex flex-col items-center text-center cursor-pointer"
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
            <div className="max-w-6xl mx-auto mb-16">
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
                            className={`p-5 rounded-2xl shadow-lg text-center cursor-pointer font-semibold transition-all duration-300 
                ${selectedDate === date
                                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl ring-2 ring-green-400"
                                    : "bg-white/80 backdrop-blur-lg text-green-800 hover:shadow-xl"
                                }`}
                        >
                            {date}
                            <div className="mt-2 text-sm opacity-80">Available Slots: 4</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Selection Summary */}
            {(selectedDate || selectedTime || selectedTherapy || selectedDoctor) && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto mb-12 bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/30 text-center"
                >
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Your Selection</h2>
                    <p className="text-green-700 text-lg">
                        {selectedDate && <span className="font-semibold">📅 {selectedDate} </span>}
                        {selectedTime && <span className="font-semibold">⏰ {selectedTime} </span>}
                        {selectedTherapy && <span className="font-semibold">🌸 {selectedTherapy} </span>}
                        {selectedDoctor && <span className="font-semibold">👨‍⚕️ {selectedDoctor}</span>}
                    </p>
                </motion.div>
            )}

            {/* CTA */}
            <div className="flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.07, boxShadow: "0 0 30px rgba(16,185,129,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xl shadow-lg transition-all duration-300"
                >
                    Confirm Your Therapy
                </motion.button>
            </div>
        </div>
    );
};

export default SchedulePage;
