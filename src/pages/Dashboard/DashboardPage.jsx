import React from "react";
import { motion } from "framer-motion";
import { Pie, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Dummy data
const therapies = [
    { name: "Vamana", sessions: 12 },
    { name: "Virechana", sessions: 8 },
    { name: "Basti", sessions: 5 },
    { name: "Nasya", sessions: 10 },
    { name: "Raktamokshana", sessions: 7 },
];

const progressData = {
    labels: ["Completed", "Remaining"],
    datasets: [
        {
            label: "Overall Progress",
            data: [65, 35],
            backgroundColor: ["#10B981", "#D1FAE5"],
            borderWidth: 1,
        },
    ],
};

const barData = {
    labels: therapies.map((t) => t.name),
    datasets: [
        {
            label: "Sessions Attended",
            data: therapies.map((t) => t.sessions),
            backgroundColor: [
                "#10B981",
                "#34D399",
                "#6EE7B7",
                "#A7F3D0",
                "#D9F99D",
            ],
            borderRadius: 8,
        },
    ],
};

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50 p-6 md:p-10">
            {/* Headline */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Welcome Back, Rejuvenator! 🌿
                </h1>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl text-green-800/80">
                    Your healing journey is beautifully unfolding ✨
                </p>
            </motion.div>

            {/* Upcoming Session Reminder */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-12 bg-gradient-to-r from-emerald-100 via-green-50 to-teal-100 rounded-3xl shadow-xl p-6 text-center mb-6"
            >
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                    🌸 Next Session Reminder
                </h2>
                <p className="text-green-700 text-lg">
                    Your next <span className="font-semibold">Nasya Therapy</span> is
                    scheduled on{" "}
                    <span className="font-bold text-green-900">5th Sept, 10:00 AM</span>.
                </p>
            </motion.div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Therapy Sessions */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/30"
                >
                    <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                        Therapy Sessions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {therapies.map((therapy, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-4 shadow-md border border-green-100 hover:shadow-xl flex flex-col items-center justify-center"
                            >
                                <h3 className="text-xl font-semibold text-green-700 mb-2">
                                    {therapy.name}
                                </h3>
                                <p className="text-green-800 text-lg font-bold">
                                    {therapy.sessions} Sessions
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bar chart */}
                    <div className="mt-6">
                        <Bar
                            data={barData}
                            options={{
                                responsive: true,
                                plugins: { legend: { display: false } },
                                scales: {
                                    y: { beginAtZero: true, ticks: { stepSize: 1 } },
                                },
                            }}
                        />
                    </div>
                </motion.div>

                {/* Overall Progress */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/30 flex flex-col items-center justify-center"
                >
                    <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                        Your Wellness Progress
                    </h2>
                    <div className="w-64 sm:w-72 md:w-80">
                        <Pie
                            data={progressData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: { position: "bottom" },
                                    tooltip: { enabled: true },
                                },
                            }}
                        />
                    </div>
                    <p className="mt-4 text-green-700 text-lg font-medium text-center">
                        You have completed{" "}
                        <span className="font-bold text-green-800">
                            {progressData.datasets[0].data[0]}%
                        </span>{" "}
                        of your journey. Keep going! 🌟
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default DashboardPage;
