import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    CalendarDays,
    Bell,
    User,
    Phone,
    MapPin,
    Mail,
    ArrowLeft,
    CheckCircle,
    Clock,
    Target,
    Activity,
    Heart,
    Brain,
    Shield,
    Droplets,
    Leaf,
} from "lucide-react";

// Enhanced patients data with therapy details
const patients = [
    {
        id: 1,
        name: "Aarav Sharma",
        email: "aarav@example.com",
        phone: "+91 98765 43210",
        address: "Delhi, India",
        age: 32,
        gender: "Male",
        dosha: "Vata-Pitta",
        totalProgress: 75,
        joinDate: "2024-01-15",
        nextAppointment: "2024-09-18",
        completedTherapies: [
            {
                name: "Vamana",
                date: "2024-02-10",
                duration: "5 days",
                result: "Excellent - Respiratory clarity improved significantly",
                icon: "🌿",
                color: "from-emerald-400 to-teal-500",
            },
            {
                name: "Virechana",
                date: "2024-03-15",
                duration: "7 days",
                result: "Good - Digestive system restored, skin clarity enhanced",
                icon: "💧",
                color: "from-green-400 to-emerald-500",
            },
            {
                name: "Nasya",
                date: "2024-04-20",
                duration: "3 days",
                result: "Excellent - Mental clarity and focus dramatically improved",
                icon: "🍃",
                color: "from-cyan-400 to-blue-500",
            },
        ],
        upcomingTherapies: [
            {
                name: "Basti",
                scheduledDate: "2024-09-25",
                duration: "10 days",
                purpose: "Nervous system rejuvenation and joint health",
                icon: "🌊",
                color: "from-teal-400 to-cyan-500",
            },
            {
                name: "Raktamokshana",
                scheduledDate: "2024-11-10",
                duration: "3 days",
                purpose: "Blood purification and circulation enhancement",
                icon: "❤",
                color: "from-blue-400 to-indigo-500",
            },
        ],
        healthMetrics: {
            energy: 85,
            digestion: 90,
            sleep: 75,
            stress: 30,
            immunity: 80,
        },
        notes:
            "Patient showing excellent response to treatments. Vata imbalance significantly reduced. Continue with scheduled Panchakarma plan.",
    },
    {
        id: 2,
        name: "Meera Patel",
        email: "meera@example.com",
        phone: "+91 87654 32109",
        address: "Mumbai, India",
        age: 28,
        gender: "Female",
        dosha: "Kapha-Vata",
        totalProgress: 45,
        joinDate: "2024-03-01",
        nextAppointment: "2024-09-20",
        completedTherapies: [
            {
                name: "Virechana",
                date: "2024-03-20",
                duration: "7 days",
                result: "Good - Kapha imbalance reduced, weight management improved",
                icon: "💧",
                color: "from-green-400 to-emerald-500",
            },
        ],
        upcomingTherapies: [
            {
                name: "Vamana",
                scheduledDate: "2024-10-05",
                duration: "5 days",
                purpose: "Upper respiratory detox and Kapha balance",
                icon: "🌿",
                color: "from-emerald-400 to-teal-500",
            },
            {
                name: "Nasya",
                scheduledDate: "2024-11-15",
                duration: "3 days",
                purpose: "Mental clarity and sinus health",
                icon: "🍃",
                color: "from-cyan-400 to-blue-500",
            },
        ],
        healthMetrics: {
            energy: 65,
            digestion: 70,
            sleep: 80,
            stress: 45,
            immunity: 75,
        },
        notes: "Patient responding well to initial treatment. Focus on Kapha balancing therapies. Monitor weight and energy levels.",
    },
    {
        id: 3,
        name: "Rohan Verma",
        email: "rohan@example.com",
        phone: "+91 76543 21098",
        address: "Bangalore, India",
        age: 45,
        gender: "Male",
        dosha: "Pitta-Vata",
        totalProgress: 90,
        joinDate: "2023-11-10",
        nextAppointment: "2024-09-22",
        completedTherapies: [
            {
                name: "Virechana",
                date: "2023-12-05",
                duration: "7 days",
                result: "Excellent - Pitta balance restored, liver function improved",
                icon: "💧",
                color: "from-green-400 to-emerald-500",
            },
            {
                name: "Basti",
                date: "2024-01-20",
                duration: "10 days",
                result: "Outstanding - Joint pain eliminated, nervous system balanced",
                icon: "🌊",
                color: "from-teal-400 to-cyan-500",
            },
            {
                name: "Nasya",
                date: "2024-03-10",
                duration: "3 days",
                result: "Excellent - Mental stress reduced, focus enhanced",
                icon: "🍃",
                color: "from-cyan-400 to-blue-500",
            },
            {
                name: "Raktamokshana",
                date: "2024-05-15",
                duration: "3 days",
                result: "Good - Blood circulation improved, skin health enhanced",
                icon: "❤",
                color: "from-blue-400 to-indigo-500",
            },
        ],
        upcomingTherapies: [
            {
                name: "Maintenance Virechana",
                scheduledDate: "2024-12-01",
                duration: "5 days",
                purpose: "Seasonal detox and Pitta maintenance",
                icon: "💧",
                color: "from-green-400 to-emerald-500",
            },
        ],
        healthMetrics: {
            energy: 95,
            digestion: 85,
            sleep: 90,
            stress: 15,
            immunity: 90,
        },
        notes:
            "Exceptional progress. Complete Panchakarma cycle successful. Patient in optimal health. Continue with maintenance protocols.",
    },
];

// Generate floating particles for background
const generateParticles = (num) => {
    return Array.from({ length: num }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        size: 1 + Math.random() * 3,
    }));
};

const DoctorDashboard = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [showPatientDetails, setShowPatientDetails] = useState(false);
    const [activeTab, setActiveTab] = useState("patients");
    const particles = generateParticles(20);

    const handlePatientClick = (patient) => {
        setSelectedPatient(patient);
        setShowPatientDetails(true);
    };

    const handleBackToDashboard = () => {
        setShowPatientDetails(false);
        setSelectedPatient(null);
    };

    const getHealthColor = (value) => {
        if (value >= 80) return "text-green-500";
        if (value >= 60) return "text-yellow-500";
        return "text-red-500";
    };

    const getHealthBgColor = (value) => {
        if (value >= 80) return "bg-green-500";
        if (value >= 60) return "bg-yellow-500";
        return "bg-red-500";
    };

    if (showPatientDetails && selectedPatient) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden relative">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute bg-green-400/30 rounded-full"
                            style={{
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                            }}
                            animate={{
                                y: [0, -15, 0],
                                opacity: [0.2, 0.6, 0.2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: particle.delay,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 p-6 md:p-10">
                    {/* Header */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <Button
                            onClick={handleBackToDashboard}
                            className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-green-600 transition-all duration-300"
                        >
                            <ArrowLeft size={20} />
                        </Button>
                        <h1 className="text-3xl md:text-4xl font-extrabold bg-purple-950 bg-clip-text text-transparent">
                            {selectedPatient.name}'s Health Journey
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Side - Progress Report */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            {/* Patient Info Card */}
                            <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-none p-6">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-orange-700 flex items-center gap-3">
                                        <div className="w-12 h-12 bg-orange-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                            {selectedPatient.name.charAt(0)}
                                        </div>
                                        Patient Overview
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-purple-950" />
                                            <span className="text-purple-900 font-semibold">Age: {selectedPatient.age}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Target className="w-4 h-4 text-purple-950" />
                                            <span className="text-purple-900 font-semibold">Dosha: {selectedPatient.dosha}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-purple-950" />
                                            <span className="text-purple-900 font-semibold">{selectedPatient.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-purple-950" />
                                            <span className="text-purple-900 font-semibold">{selectedPatient.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-purple-950" />
                                            <span className="text-purple-900 font-semibold">{selectedPatient.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="w-4 h-4 text-purple-950" />
                                            <span className="text-purple-900 font-semibold">Joined: {selectedPatient.joinDate}</span>
                                        </div>
                                    </div>

                                    {/* Overall Progress */}
                                    <div className="mt-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-orange-900 font-semibold">Overall Progress</span>
                                            <span className="text-green-700 font-bold">{selectedPatient.totalProgress}%</span>
                                        </div>
                                        <div className="w-full bg-green-100 rounded-full h-4">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${selectedPatient.totalProgress}%` }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="bg-green-600 h-4 rounded-full shadow-sm"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Health Metrics */}
                            <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-none p-6">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-green-800 flex items-center gap-2">
                                        <Activity className="w-6 h-6 text-green-600" />
                                        Health Metrics
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {Object.entries(selectedPatient.healthMetrics).map(([metric, value]) => {
                                            const icons = {
                                                energy: <Heart className="w-5 h-5" />,
                                                digestion: <Droplets className="w-5 h-5" />,
                                                sleep: <Brain className="w-5 h-5" />,
                                                stress: <Shield className="w-5 h-5" />,
                                                immunity: <Leaf className="w-5 h-5" />,
                                            };

                                            const displayValue = metric === "stress" ? 100 - value : value;
                                            return (
                                                <div key={metric} className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className={`flex items-center gap-2 capitalize font-medium ${getHealthColor(displayValue)}`}>
                                                            {icons[metric]}
                                                            {metric}
                                                        </span>
                                                        <span className={`font-bold ${getHealthColor(displayValue)}`}>{displayValue}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${displayValue}%` }}
                                                            transition={{ duration: 1, delay: 0.3 }}
                                                            className={`${getHealthBgColor(displayValue)} h-2 rounded-full`}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Doctor's Notes */}
                            <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-none p-6">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-green-800">Doctor's Notes</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-green-700 leading-relaxed">{selectedPatient.notes}</p>
                                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                                        <p className="text-sm text-green-600 flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            Next Appointment: {selectedPatient.nextAppointment}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Right Side - Therapy Progress */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6"
                        >
                            {/* Completed Therapies */}
                            <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-none p-6">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-green-800 flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                        Completed Therapies ({selectedPatient.completedTherapies.length})
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {selectedPatient.completedTherapies.map((therapy, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.1 * index }}
                                                className={`relative p-4 rounded-2xl bg-gradient-to-r ${therapy.color} bg-opacity-20 border-l-4 border-green-500`}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="text-2xl">{therapy.icon}</div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-orange-800">{therapy.name}</h4>
                                                        <p className="text-sm text-purple-900 mb-1">
                                                            Completed: {therapy.date} • Duration: {therapy.duration}
                                                        </p>
                                                        <p className="text-sm text-green-700 bg-white/50 p-2 rounded-lg">
                                                            <strong>Result:</strong> {therapy.result}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Upcoming Therapies */}
                            <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-none p-6">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-green-800 flex items-center gap-2">
                                        <Clock className="w-6 h-6 text-orange-500" />
                                        Upcoming Therapies ({selectedPatient.upcomingTherapies.length})
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {selectedPatient.upcomingTherapies.map((therapy, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.1 * index }}
                                                className={`relative p-4 rounded-2xl bg-blue-300 bg-opacity-10 border-l-4 border-orange-400 border-dashed`}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="text-2xl opacity-70">{therapy.icon}</div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-black">{therapy.name}</h4>
                                                        <p className="text-sm text-orange-600 mb-1">
                                                            Scheduled: {therapy.scheduledDate} • Duration: {therapy.duration}
                                                        </p>
                                                        <p className="text-sm text-black font-normal bg-white/50 p-2 rounded-lg">
                                                            <strong>Purpose:</strong> {therapy.purpose}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Actions */}
                            <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-none p-6">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-green-800">Quick Actions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:scale-105 transition-transform">
                                        Schedule Next Session
                                    </Button>
                                    <Button className="w-full border bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl">
                                        Update Treatment Plan
                                    </Button>
                                    <Button className="w-full border bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl">
                                        Send Notification
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-teal-200/20 to-cyan-300/20 rounded-full"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />

                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-green-400/30 rounded-full"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: particle.delay,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 p-6 md:p-10">
                {/* Title */}
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-extrabold text-center bg-purple-950 bg-clip-text text-transparent mb-10"
                >
                    Doctor Dashboard
                </motion.h1>

                {/* Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="flex bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-2">
                        {["patients", "availability", "notifications"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${activeTab === tab
                                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                                    : "text-green-700 hover:bg-green-50"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === "patients" && (
                        <motion.div
                            key="patients"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {patients.map((patient, idx) => (
                                    <motion.div
                                        key={patient.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="cursor-pointer"
                                        onClick={() => handlePatientClick(patient)}
                                    >
                                        <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-none rounded-3xl hover:scale-105 transition-transform duration-300 overflow-hidden">
                                            <div
                                                className={`h-2 ${patient.totalProgress >= 80
                                                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                                                    : patient.totalProgress >= 60
                                                        ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                                                        : "bg-gradient-to-r from-orange-400 to-red-500"
                                                    }`}
                                            />
                                            <CardHeader className="pb-3">
                                                <CardTitle className="flex items-center gap-3 text-green-700">
                                                    <div className="w-10 h-10 bg-orange-900 rounded-full flex items-center justify-center text-white font-bold">
                                                        {patient.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="text-lg text-orange-800">{patient.name}</div>
                                                        <div className="text-sm text-purple-900 font-semibold">
                                                            {patient.dosha} • {patient.age}y
                                                        </div>
                                                    </div>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-3 text-sm text-purple-900">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="w-4 h-4 text-purple-900" />
                                                    <span className="truncate">{patient.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-4 h-4 text-purple-900" />
                                                    <span>{patient.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-purple-900" />
                                                    <span>{patient.address}</span>
                                                </div>

                                                <div className="mt-4 space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-orange-800 font-semibold">Treatment Progress</span>
                                                        <span className="text-purple-600 font-bold">{patient.totalProgress}%</span>
                                                    </div>
                                                    <div className="w-full bg-green-100 rounded-full h-3">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${patient.totalProgress}%` }}
                                                            transition={{ duration: 1.5, delay: 0.3 }}
                                                            className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full shadow-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-center text-xs text-purple-900 mt-3">
                                                    <span>Completed: {patient.completedTherapies.length}</span>
                                                    <span>Upcoming: {patient.upcomingTherapies.length}</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "availability" && (
                        <motion.div
                            key="availability"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-none p-8 max-w-4xl mx-auto">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
                                        <CalendarDays className="w-8 h-8 text-green-600" />
                                        Set Your Availability
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
                                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                                            (day, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-center p-4 rounded-2xl shadow-lg cursor-pointer hover:from-green-200 hover:to-emerald-200 transition-all duration-300"
                                                >
                                                    <CalendarDays className="w-6 h-6 mx-auto mb-2 text-green-600" />
                                                    <span className="font-semibold text-sm">{day.slice(0, 3)}</span>
                                                </motion.div>
                                            )
                                        )}
                                    </div>

                                    <Label className="text-green-700 text-lg font-semibold mb-4 block">Available Time Slots</Label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
                                        {[
                                            "9:00-11:00 AM",
                                            "11:00 AM-1:00 PM",
                                            "2:00-4:00 PM",
                                            "4:00-6:00 PM",
                                            "6:00-8:00 PM",
                                        ].map((slot, i) => (
                                            <motion.button
                                                key={i}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-3 rounded-2xl border-2 border-green-300 text-green-700 hover:bg-green-100 hover:border-green-400 transition-all duration-300 font-medium text-sm"
                                            >
                                                {slot}
                                            </motion.button>
                                        ))}
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Update Availability Schedule
                                    </motion.button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}

                    {activeTab === "notifications" && (
                        <motion.div
                            key="notifications"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-none p-8 max-w-3xl mx-auto">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
                                        <Bell className="w-8 h-8 text-green-600" />
                                        Send Patient Notifications
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <Label className="text-green-700 text-lg font-semibold mb-3 block">Notification Message</Label>
                                        <Input
                                            placeholder="Enter your notification message for patients..."
                                            className="p-4 text-lg rounded-2xl border-green-200 focus:border-green-400 focus:ring-green-400"
                                        />
                                    </div>

                                    <div>
                                        <Label className="text-green-700 text-lg font-semibold mb-3 block">Quick Templates</Label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 flex items-center justify-center gap-3 p-4 rounded-2xl font-semibold shadow-lg transition-all duration-300"
                                            >
                                                <Bell className="w-5 h-5" />
                                                Pre-Therapy Reminder
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 flex items-center justify-center gap-3 p-4 rounded-2xl font-semibold shadow-lg transition-all duration-300"
                                            >
                                                <Bell className="w-5 h-5" />
                                                Post-Therapy Care
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 flex items-center justify-center gap-3 p-4 rounded-2xl font-semibold shadow-lg transition-all duration-300"
                                            >
                                                <CalendarDays className="w-5 h-5" />
                                                Appointment Reminder
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 flex items-center justify-center gap-3 p-4 rounded-2xl font-semibold shadow-lg transition-all duration-300"
                                            >
                                                <Heart className="w-5 h-5" />
                                                Wellness Check-in
                                            </motion.button>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Send Notification to All Patients
                                    </motion.button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default DoctorDashboard;
