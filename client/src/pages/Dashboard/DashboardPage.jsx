import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    PieChart, Pie, Cell, ResponsiveContainer,
} from "recharts";
import {
    Calendar, Clock, Activity, Heart, Brain, Bell,
    ChevronRight, Plus, CheckCircle, AlertCircle, Download
} from "lucide-react";
import FeedbackSection from "@/components/FeedbackSection";
import NotificationsCard from "@/components/NotificationsCard";

// Mock patient data
const patientProfile = {
    name: "Arjun",
    program: "21-Day Complete Panchakarma",
    startDate: "2024-08-15",
    currentDay: 12,
    totalDays: 21,
    currentPhase: "Main Treatment Phase",
    nextTherapy: {
        name: "Abhyanga + Virechana",
        date: "2024-09-12",
        time: "10:00 AM",
        duration: "90 minutes",
        therapist: "Dr. Priya Sharma"
    }
};

const upcomingTherapies = [
    { id: 1, name: "Abhyanga + Virechana", date: "2024-09-12", time: "10:00 AM", duration: "90 min", therapist: "Dr. Priya Sharma", status: "confirmed", icon: "💧" },
    { id: 2, name: "Shirodhara", date: "2024-09-13", time: "2:00 PM", duration: "60 min", therapist: "Dr. Raj Kumar", status: "confirmed", icon: "🌊" },
    { id: 3, name: "Basti Therapy", date: "2024-09-14", time: "11:00 AM", duration: "45 min", therapist: "Dr. Priya Sharma", status: "pending", icon: "🍃" },
    { id: 4, name: "Nasya Treatment", date: "2024-09-15", time: "9:30 AM", duration: "30 min", therapist: "Dr. Anita Verma", status: "available", icon: "🌿" }
];

const progressData = [
    { day: 1, energy: 6, mood: 7, sleep: 6, digestion: 5 },
    { day: 3, energy: 6.5, mood: 7.2, sleep: 6.5, digestion: 5.5 },
    { day: 5, energy: 7, mood: 7.5, sleep: 7, digestion: 6.2 },
    { day: 7, energy: 7.5, mood: 8, sleep: 7.5, digestion: 7 },
    { day: 9, energy: 8, mood: 8.2, sleep: 8, digestion: 7.5 },
    { day: 11, energy: 8.5, mood: 8.5, sleep: 8.2, digestion: 8 },
    { day: 12, energy: 8.7, mood: 8.8, sleep: 8.5, digestion: 8.2 },
];

const doshaBalance = [
    { name: "Vata", current: 25, target: 33, fill: "#22d3ee" },
    { name: "Pitta", current: 45, target: 33, fill: "#fb7185" },
    { name: "Kapha", current: 30, target: 34, fill: "#4ade80" },
];

const therapyCompletion = [
    { name: "Completed", value: 65, color: "#10b981" },
    { name: "Remaining", value: 35, color: "#e5e7eb" },
];

const availableTimeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: false },
    { time: "11:00 AM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: false },
    { time: "4:00 PM", available: true },
];

const generateFloatingElements = (num) => {
    return Array.from({ length: num }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        size: 4 + Math.random() * 8,
        duration: 15 + Math.random() * 10,
    }));
};

const DashboardPage = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [floatingElements] = useState(generateFloatingElements(12));
    const [showScheduler, setShowScheduler] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedTherapy, setSelectedTherapy] = useState("");
    const [notifications] = useState([
        { id: 1, type: "pre", text: "Drink plenty of water before Abhyanga.", time: "2 hrs before" },
        { id: 2, type: "post", text: "Avoid heavy meals for 3 hrs after Virechana.", time: "After session" },
    ]);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const progressPercentage = (patientProfile.currentDay / patientProfile.totalDays) * 100;

    const vitalStats = [
        { title: "Program Progress", value: `${patientProfile.currentDay} / ${patientProfile.totalDays}`, percentage: progressPercentage, icon: Calendar, color: "from-green-400 to-emerald-500" },
        { title: "Wellness Score", value: "8.7/10", percentage: 87, icon: Heart, color: "from-emerald-400 to-teal-500" },
        { title: "Energy Level", value: "High", percentage: 85, icon: Activity, color: "from-teal-400 to-cyan-500" },
        { title: "Sleep Quality", value: "Excellent", percentage: 92, icon: Brain, color: "from-cyan-400 to-blue-500" },
    ];

    const therapyOptions = [
        "Abhyanga (Oil Massage)",
        "Shirodhara",
        "Virechana",
        "Basti Therapy",
        "Nasya Treatment",
        "Consultation",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
            {/* Background Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingElements.map((element) => (
                    <motion.div
                        key={element.id}
                        className="absolute bg-green-300/20 rounded-full blur-sm"
                        style={{ width: element.size, height: element.size, left: `${element.x}%`, top: `${element.y}%` }}
                        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                        transition={{ duration: element.duration, repeat: Infinity, delay: element.delay, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center my-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center sm:items-start flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-orange-900 text-center sm:text-left w-full">
                        Welcome back, {patientProfile.name}
                    </h1>
                    <p className="text-purple-500 font-semibold mt-2 flex items-center gap-2">
                        <Calendar size={16} />
                        Day {patientProfile.currentDay} of {patientProfile.program}
                    </p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowScheduler(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <Plus size={16} />
                        <span className="font-medium">Schedule Therapy</span>
                    </motion.button>
                </div>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
                {/* Next Therapy Reminder */}
                <div className="col-span-12 md:col-span-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-gradient-to-r from-orange-100 to-amber-100 border-l-4 border-orange-400 rounded-xl p-6 shadow-md flex flex-col justify-between h-80"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-400 rounded-lg">
                                <Bell size={32} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-orange-800 text-lg mb-1">
                                    Next Therapy Reminder
                                </h3>
                                <p className="text-orange-700 text-sm font-medium">
                                    {patientProfile.nextTherapy.name} • Tomorrow at {patientProfile.nextTherapy.time}
                                </p>
                                <p className="text-orange-600 text-xs mt-1">
                                    with {patientProfile.nextTherapy.therapist} • {patientProfile.nextTherapy.duration}
                                </p>
                            </div>
                            <ChevronRight className="text-orange-400 mt-1" size={20} />
                        </div>
                        <img src="/Abhyanga.jpg" alt="Therapy" className="object-contain h-52 p-4 rounded-xl" />
                        <div className="mt-6 text-xs text-orange-700 italic">
                            Remember to stay hydrated before your session!
                        </div>
                    </motion.div>
                </div>

                {/* Therapy Notifications */}
                <div className="col-span-12 md:col-span-8">
                    <NotificationsCard />
                </div>
            </div>

            {/* Vital Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
                {vitalStats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 relative overflow-hidden"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`} />
                        <div className="relative z-10 flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                                <stat.icon size={24} className="text-white" />
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-gray-600">{stat.percentage}%</p>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
                            <p className="text-2xl font-bold text-gray-800 mb-3">{stat.value}</p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${stat.percentage}%` }}
                                    transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                                    className={`h-2 rounded-full bg-gradient-to-r ${stat.color}`}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Upcoming Therapies & Pie Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 max-w-7xl mx-auto">
                {/* Upcoming Therapies */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-green-800">Upcoming Therapy Sessions</h3>
                        <button
                            onClick={() => setShowScheduler(true)}
                            className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1"
                        >
                            <Plus size={16} />
                            Add Session
                        </button>
                    </div>

                    <div className="space-y-4 max-w-7xl mx-auto">
                        {upcomingTherapies.map((therapy, index) => (
                            <motion.div
                                key={therapy.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                className={`p-4 rounded-xl border-l-4 transition-all duration-300 hover:scale-[1.02] ${therapy.status === 'confirmed'
                                    ? 'bg-green-50 border-green-400'
                                    : therapy.status === 'pending'
                                        ? 'bg-yellow-50 border-yellow-400'
                                        : 'bg-gray-50 border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{therapy.icon}</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{therapy.name}</h4>
                                            <p className="text-sm text-gray-600">
                                                {new Date(therapy.date).toLocaleDateString('en-US', {
                                                    weekday: 'short',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })} at {therapy.time}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {therapy.duration} • {therapy.therapist}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {therapy.status === 'confirmed' && <CheckCircle size={16} className="text-green-500" />}
                                        {therapy.status === 'pending' && <Clock size={16} className="text-yellow-500" />}
                                        {therapy.status === 'available' && <AlertCircle size={16} className="text-gray-400" />}
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${therapy.status === 'confirmed'
                                            ? 'bg-green-100 text-green-700'
                                            : therapy.status === 'pending'
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {therapy.status}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Pie Chart */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 flex flex-col items-center justify-center">
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={therapyCompletion}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {therapyCompletion.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4 text-center">
                        <p className="text-2xl font-bold text-green-800">
                            {Math.round(progressPercentage)}%
                        </p>
                        <p className="text-sm text-gray-600">Treatment Completed</p>
                    </div>
                </div>
            </div>

            {/* Bottom Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 max-w-7xl mx-auto">
                {/* Wellness Progress */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50"
                >
                    <h3 className="text-xl font-bold text-green-800 mb-6">Wellness Progress</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={progressData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="day" stroke="#6b7280" label={{ value: 'Day', position: 'insideBottom', offset: -5 }} />
                            <YAxis stroke="#6b7280" domain={[0, 10]} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    border: 'none',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                            <Legend />
                            <Line type="monotone" dataKey="energy" stroke="#10b981" strokeWidth={3} name="Energy" />
                            <Line type="monotone" dataKey="mood" stroke="#06b6d4" strokeWidth={3} name="Mood" />
                            <Line type="monotone" dataKey="sleep" stroke="#8b5cf6" strokeWidth={3} name="Sleep" />
                            <Line type="monotone" dataKey="digestion" stroke="#f59e0b" strokeWidth={3} name="Digestion" />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Dosha Balance */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50"
                >
                    <h3 className="text-xl font-bold text-green-800 mb-6">Dosha Balance Progress</h3>
                    <div className="space-y-4">
                        {doshaBalance.map((dosha, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">{dosha.name}</span>
                                    <div className="flex gap-2 text-xs">
                                        <span className="text-gray-500">Current: {dosha.current}%</span>
                                        <span className="text-green-600">Target: {dosha.target}%</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(dosha.current / 50) * 100}%` }}
                                            transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                                            className="h-3 rounded-full"
                                            style={{ backgroundColor: dosha.fill }}
                                        />
                                    </div>
                                    <div
                                        className="absolute top-0 h-3 w-1 bg-gray-600 rounded"
                                        style={{ left: `${(dosha.target / 50) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                            <strong>Progress Note:</strong> Your Pitta levels are decreasing well. Continue with cooling therapies.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Scheduler Modal */}
            <AnimatePresence>
                {showScheduler && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setShowScheduler(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-xl font-bold text-green-800 mb-6">Schedule New Therapy</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Therapy
                                    </label>
                                    <select
                                        value={selectedTherapy}
                                        onChange={(e) => setSelectedTherapy(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    >
                                        <option value="">Choose a therapy...</option>
                                        {therapyOptions.map((therapy, index) => (
                                            <option key={index} value={therapy}>{therapy}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Date
                                    </label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Available Times
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {availableTimeSlots.map((slot, index) => (
                                            <button
                                                key={index}
                                                onClick={() => slot.available && setSelectedTime(slot.time)}
                                                disabled={!slot.available}
                                                className={`p-2 rounded-lg text-sm font-medium transition-all ${slot.available
                                                    ? selectedTime === slot.time
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-green-100 text-green-700 hover:bg-green-200'
                                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                    }`}
                                            >
                                                {slot.time}
                                                {!slot.available && ' (Booked)'}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={() => setShowScheduler(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    disabled={!selectedTherapy || !selectedDate || !selectedTime}
                                    className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                                >
                                    Schedule Session
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <FeedbackSection />
        </div>
    );
};

export default DashboardPage;
