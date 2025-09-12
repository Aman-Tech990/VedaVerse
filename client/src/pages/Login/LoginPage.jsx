import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Leaf, Stethoscope, Settings, User } from "lucide-react";

// Individual falling leaf component
const FallingLeaf = ({ delay }) => {
    const [x, setX] = useState(Math.random() * window.innerWidth);

    // Reset position when animation restarts
    useEffect(() => {
        const interval = setInterval(() => {
            setX(Math.random() * window.innerWidth);
        }, (12 + Math.random() * 8) * 1000); // match duration
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="absolute text-green-500 opacity-40"
            style={{ left: x }}
            initial={{ y: -100, rotate: 0 }}
            animate={{ y: window.innerHeight + 100, rotate: [0, 360] }}
            transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay,
                ease: "linear",
            }}
        >
            <Leaf size={32} />
        </motion.div>
    );
};

const LoginPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-emerald-100 to-orange-50">
            {/* Floating glowing shapes */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 rounded-full bg-green-200 opacity-30 blur-3xl"
                animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange-200 opacity-30 blur-3xl"
                animate={{ y: [0, -40, 0], scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            />

            {/* Drifting leaves all over screen */}
            {[...Array(15)].map((_, i) => (
                <FallingLeaf key={i} delay={i * 2} />
            ))}

            {/* Title */}
            <motion.h1
                className="relative z-10 mb-10 text-5xl font-extrabold bg-gradient-to-r from-green-600 via-yellow-400 to-purple-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
            >
                VedaVerse
            </motion.h1>

            {/* Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="z-10"
            >
                <Tabs defaultValue="register" className="w-[380px]">
                    <TabsList className="grid grid-cols-2 bg-white/70 backdrop-blur-lg rounded-2xl shadow-md w-full">
                        <TabsTrigger
                            value="register"
                            className="data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-xl"
                        >
                            Register
                        </TabsTrigger>
                        <TabsTrigger
                            value="login"
                            className="data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-xl"
                        >
                            Login
                        </TabsTrigger>
                    </TabsList>

                    {/* Register Card */}
                    <TabsContent value="register">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Card className="backdrop-blur-lg bg-white/70 shadow-xl border-none rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="text-orange-900 font-semibold text-lg">
                                        Create Account
                                    </CardTitle>
                                    <CardDescription className="text-purple-950 font-semibold">
                                        Begin your Panchakarma healing journey
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {/* Name */}
                                    <motion.div
                                        className="space-y-2 text-orange-900"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                    >
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Your Name" />
                                    </motion.div>

                                    {/* Email */}
                                    <motion.div
                                        className="space-y-2 text-orange-900"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.9 }}
                                    >
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="you@example.com" />
                                    </motion.div>

                                    {/* Password */}
                                    <motion.div
                                        className="space-y-2 text-orange-900"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 1.1 }}
                                    >
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                        />
                                    </motion.div>

                                    {/* Roles */}
                                    <div className="space-y-2">
                                        <Label>Select Your Role</Label>
                                        <RadioGroup
                                            defaultValue="patient"
                                            className="grid grid-cols-2 gap-3"
                                        >
                                            {/* Patient */}
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center space-x-2 bg-green-100 rounded-lg p-3 shadow-sm cursor-pointer"
                                            >
                                                <RadioGroupItem value="patient" id="patient" />
                                                <Label
                                                    htmlFor="patient"
                                                    className="flex items-center gap-2 font-medium"
                                                >
                                                    <motion.div
                                                        animate={{ rotate: [0, 10, -10, 0] }}
                                                        transition={{ repeat: Infinity, duration: 3 }}
                                                    >
                                                        <User className="w-5 h-5 text-red-500" />
                                                    </motion.div>
                                                    Patient
                                                </Label>
                                            </motion.div>

                                            {/* Doctor */}
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center space-x-2 bg-green-100 rounded-lg p-3 shadow-sm cursor-pointer"
                                            >
                                                <RadioGroupItem value="doctor" id="doctor" />
                                                <Label
                                                    htmlFor="doctor"
                                                    className="flex items-center gap-2 font-medium"
                                                >
                                                    <motion.div
                                                        animate={{ y: [0, -3, 0] }}
                                                        transition={{ repeat: Infinity, duration: 2 }}
                                                    >
                                                        <Stethoscope className="w-5 h-5 text-purple-500" />
                                                    </motion.div>
                                                    Doctor
                                                </Label>
                                            </motion.div>

                                            <div className="flex item gap-4">
                                                {/* Clinic Manager */}
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center space-x-2 bg-green-100 rounded-lg p-3 shadow-sm cursor-pointer col-span-2"
                                                >
                                                    <RadioGroupItem value="clinicManager" id="clinicManager" />
                                                    <Label
                                                        htmlFor="admin"
                                                        className="flex items-center gap-2 font-medium"
                                                    >
                                                        <motion.div
                                                            animate={{ scale: [1, 1.2, 1] }}
                                                            transition={{ repeat: Infinity, duration: 2.5 }}
                                                        >
                                                            <Settings className="w-5 h-5 text-blue-500" />
                                                        </motion.div>
                                                        Clinic Manager
                                                    </Label>
                                                </motion.div>
                                                {/* Admin */}
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center space-x-2 bg-green-100 rounded-lg p-3 shadow-sm cursor-pointer col-span-2"
                                                >
                                                    <RadioGroupItem value="admin" id="admin" />
                                                    <Label
                                                        htmlFor="admin"
                                                        className="flex items-center gap-2 font-medium"
                                                    >
                                                        <motion.div
                                                            animate={{ scale: [1, 1.2, 1] }}
                                                            transition={{ repeat: Infinity, duration: 2.5 }}
                                                        >
                                                            <Settings className="w-5 h-5 text-blue-500" />
                                                        </motion.div>
                                                        Admin
                                                    </Label>
                                                </motion.div>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105 transition-transform duration-300 text-white rounded-xl">
                                        Register
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    {/* Login Card */}
                    <TabsContent value="login">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Card className="backdrop-blur-lg bg-white/70 shadow-xl border-none rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="text-orange-900 font-bold">
                                        Welcome Back
                                    </CardTitle>
                                    <CardDescription className="text-purple-900 font-semibold">
                                        Enter your details to continue your wellness journey
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {/* Email */}
                                    <motion.div
                                        className="space-y-2 text-orange-900"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                    >
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="you@example.com" />
                                    </motion.div>

                                    {/* Password */}
                                    <motion.div
                                        className="space-y-2 text-orange-900"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.9 }}
                                    >
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                        />
                                    </motion.div>

                                    {/* Roles */}
                                    <div className="space-y-2">
                                        <Label>Select Your Role</Label>
                                        <RadioGroup
                                            defaultValue="patient"
                                            className="grid grid-cols-2 gap-3"
                                        >
                                            {/* Patient */}
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center space-x-2 bg-green-100 rounded-lg p-3 shadow-sm cursor-pointer"
                                            >
                                                <RadioGroupItem value="patient" id="patient" />
                                                <Label
                                                    htmlFor="patient"
                                                    className="flex items-center gap-2 font-medium"
                                                >
                                                    <motion.div
                                                        animate={{ rotate: [0, 10, -10, 0] }}
                                                        transition={{ repeat: Infinity, duration: 3 }}
                                                    >
                                                        <User className="w-5 h-5 text-red-500" />
                                                    </motion.div>
                                                    Patient
                                                </Label>
                                            </motion.div>

                                            {/* Doctor */}
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center space-x-2 bg-green-100 rounded-lg p-3 shadow-sm cursor-pointer"
                                            >
                                                <RadioGroupItem value="doctor" id="doctor" />
                                                <Label
                                                    htmlFor="doctor"
                                                    className="flex items-center gap-2 font-medium"
                                                >
                                                    <motion.div
                                                        animate={{ y: [0, -3, 0] }}
                                                        transition={{ repeat: Infinity, duration: 2 }}
                                                    >
                                                        <Stethoscope className="w-5 h-5 text-purple-500" />
                                                    </motion.div>
                                                    Doctor
                                                </Label>
                                            </motion.div>

                                            <div className="flex flex-row items-center gap-4">
                                                {/* ClinicManager */}
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center space-x-2 bg-green-100 rounded-lg p-3 shadow-sm cursor-pointer col-span-2 w-full"
                                                >
                                                    <RadioGroupItem value="admin" id="admin" />
                                                    <Label
                                                        htmlFor="admin"
                                                        className="flex items-center gap-2 font-medium"
                                                    >
                                                        <motion.div
                                                            animate={{ scale: [1, 1.2, 1] }}
                                                            transition={{ repeat: Infinity, duration: 2.5 }}
                                                        >
                                                            <Settings className="w-5 h-5 text-blue-500" />
                                                        </motion.div>
                                                        Clinic Manager
                                                    </Label>
                                                </motion.div>
                                                {/* Admin */}
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center space-x-2 bg-green-100 rounded-lg p-3 shadow-sm cursor-pointer col-span-2 w-full"
                                                >
                                                    <RadioGroupItem value="admin" id="admin" />
                                                    <Label
                                                        htmlFor="admin"
                                                        className="flex items-center gap-2 font-medium"
                                                    >
                                                        <motion.div
                                                            animate={{ scale: [1, 1.2, 1] }}
                                                            transition={{ repeat: Infinity, duration: 2.5 }}
                                                        >
                                                            <Settings className="w-5 h-5 text-blue-500" />
                                                        </motion.div>
                                                        Admin
                                                    </Label>
                                                </motion.div>
                                            </div>


                                        </RadioGroup>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105 transition-transform duration-300 text-white rounded-xl">
                                        Login
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </motion.div>
        </div>
    );
};

export default LoginPage;
