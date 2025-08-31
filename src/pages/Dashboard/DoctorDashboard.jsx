import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarDays, Bell, User, Phone, MapPin, Mail } from "lucide-react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Dummy patients data
const patients = [
    {
        id: 1,
        name: "Aarav Sharma",
        email: "aarav@example.com",
        phone: "+91 98765 43210",
        address: "Delhi, India",
        progress: 70,
    },
    {
        id: 2,
        name: "Meera Patel",
        email: "meera@example.com",
        phone: "+91 87654 32109",
        address: "Mumbai, India",
        progress: 40,
    },
    {
        id: 3,
        name: "Rohan Verma",
        email: "rohan@example.com",
        phone: "+91 76543 21098",
        address: "Bangalore, India",
        progress: 85,
    },
];

const DoctorDashboard = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-orange-50 p-6 md:p-10">
            {/* Title */}
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-green-700 via-emerald-600 to-orange-500 bg-clip-text text-transparent"
            >
                Doctor Dashboard
            </motion.h1>

            {/* Tabs */}
            <Tabs defaultValue="patients" className="mt-10">
                <TabsList className="grid grid-cols-3 max-w-xl mx-auto rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg">
                    <TabsTrigger value="patients">Patients</TabsTrigger>
                    <TabsTrigger value="availability">Availability</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>

                {/* Patients List */}
                <TabsContent value="patients" className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {patients.map((p, idx) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="cursor-pointer"
                                onClick={() => setSelectedPatient(p)}
                            >
                                <Card className="bg-white/80 backdrop-blur-md shadow-xl border-none rounded-2xl hover:scale-105 transition-transform duration-300">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-green-700">
                                            <User className="w-6 h-6 text-green-500" /> {p.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm text-green-900">
                                        <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {p.email}</p>
                                        <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {p.phone}</p>
                                        <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {p.address}</p>
                                        <div className="mt-2 w-full bg-green-100 rounded-full h-3">
                                            <div
                                                className="bg-green-500 h-3 rounded-full"
                                                style={{ width: `${p.progress}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-green-700">Progress: {p.progress}%</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {selectedPatient && (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="mt-12 p-6 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl max-w-2xl mx-auto"
                        >
                            <h2 className="text-2xl font-bold text-green-800 mb-4">
                                {selectedPatient.name}'s Progress
                            </h2>
                            <Pie
                                data={{
                                    labels: ["Completed", "Remaining"],
                                    datasets: [
                                        {
                                            data: [selectedPatient.progress, 100 - selectedPatient.progress],
                                            backgroundColor: ["#10B981", "#D1FAE5"],
                                        },
                                    ],
                                }}
                                options={{ responsive: true, plugins: { legend: { position: "bottom" } } }}
                            />
                        </motion.div>
                    )}
                </TabsContent>

                {/* Availability */}
                <TabsContent value="availability" className="mt-10">
                    <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Set Your Availability</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-green-100 text-green-800 text-center p-3 rounded-xl shadow cursor-pointer hover:bg-green-200"
                                >
                                    <CalendarDays className="w-5 h-5 mx-auto mb-1" />
                                    {day}
                                </motion.div>
                            ))}
                        </div>
                        <Label className="text-green-700">Select Time Slots</Label>
                        <div className="flex flex-wrap gap-3 mt-2">
                            {["9-11 AM", "11-1 PM", "2-4 PM", "4-6 PM", "6-8 PM"].map((slot, i) => (
                                <Button
                                    key={i}
                                    variant="outline"
                                    className="rounded-full border-green-400 text-green-700 hover:bg-green-200"
                                >
                                    {slot}
                                </Button>
                            ))}
                        </div>
                        <Button className="mt-6 w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl hover:scale-105 transition-transform">
                            Save Availability
                        </Button>
                    </Card>
                </TabsContent>

                {/* Notifications */}
                <TabsContent value="notifications" className="mt-10">
                    <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Send Notifications</h2>
                        <Label className="text-green-700">Message</Label>
                        <Input placeholder="Enter your notification message..." className="mb-4" />
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <Button className="bg-green-500 text-white hover:bg-green-600 flex items-center gap-2">
                                <Bell className="w-5 h-5" /> Pre-Therapy
                            </Button>
                            <Button className="bg-orange-500 text-white hover:bg-orange-600 flex items-center gap-2">
                                <Bell className="w-5 h-5" /> Post-Therapy
                            </Button>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl hover:scale-105 transition-transform">
                            Send Notification
                        </Button>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default DoctorDashboard;
