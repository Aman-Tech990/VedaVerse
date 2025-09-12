import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Leaf, User, LogOut, Settings } from 'lucide-react';
import { Link } from "react-router-dom";

// Floating particles for background
const generateParticles = (num) => {
    return Array.from({ length: num }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        size: 1 + Math.random() * 3,
        duration: 4 + Math.random() * 6,
    }));
};

// Ayurvedic leaf SVG component
const AyurvedicLeaf = ({ className = "" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M20,80 Q30,60 50,70 Q70,60 80,80 Q70,90 50,85 Q30,90 20,80 Z"
            fill="currentColor" opacity="0.7" />
        <path d="M50,70 Q40,60 35,50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M50,70 Q60,60 65,50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const particles = generateParticles(8);
    const user = true;

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/', id: 'home' },
        { name: 'About', path: '/about', id: 'about' },
        { name: 'Services', path: '/services', id: 'services' },
    ];

    const userMenuItems = [
        { icon: User, label: 'Profile', path: '/profile' },
        { icon: LogOut, label: 'Logout', path: '/logout' },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-green-200/50'
                    : 'bg-gradient-to-r from-green-50/90 via-emerald-50/90 to-teal-50/90 backdrop-blur-sm'
                    }`}
            >
                {/* Floating particles background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute bg-green-400/20 rounded-full"
                            style={{
                                width: particle.size,
                                height: particle.size,
                                left: `${particle.x}%`,
                                top: '50%',
                            }}
                            animate={{
                                x: [0, 30, 0],
                                y: [-10, 10, -10],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                            }}
                        />
                    ))}
                </div>

                <div className='hidden md:flex max-w-7xl mx-auto items-center justify-between px-6 py-4 relative z-10'>
                    {/* Logo Section */}
                    <motion.div className='flex items-center gap-3' whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="relative">
                            <Leaf className="w-8 h-8 text-green-600" />
                            <motion.div
                                className="absolute inset-0"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <AyurvedicLeaf className="w-8 h-8 text-emerald-500/50" />
                            </motion.div>
                        </motion.div>
                        <h1 className='text-3xl font-bold bg-gradient-to-r from-green-600 via-yellow-400 to-purple-700 bg-clip-text text-transparent'>
                            VedaVerse
                        </h1>
                    </motion.div>

                    {/* Navigation Items */}
                    <div className='flex items-center gap-6'>
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className="text-xl font-semibold text-purple-950 hover:scale-105 transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}


                        {/* User Section */}
                        {user ? (
                            <motion.div className="flex items-center gap-4">
                                <Link to="/dashboard">
                                    <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg transition-all duration-300 border-0 hover:cursor-pointer">
                                        Dashboard
                                    </Button>
                                </Link>
                                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer shadow-lg">
                                    <User className="w-5 h-5 hover:cursor-pointer" />
                                </div>
                            </motion.div>
                        ) : (
                            <div className="flex gap-3">
                                <Link to="/login">
                                    <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-full shadow transition-all duration-300 border-0 hover:cursor-pointer">
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-full shadow transition-all duration-300 border-0 hover:cursor-pointer">
                                        Signup
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navbar */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-green-200/50'
                    : 'bg-gradient-to-r from-green-50/95 via-emerald-50/95 to-teal-50/95 backdrop-blur-sm'
                    }`}
            >
                <div className='flex items-center justify-between px-5 py-4 relative z-10'>
                    {/* Mobile Logo */}
                    <motion.div className='flex items-center gap-2' whileHover={{ scale: 1.02 }}>
                        <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                            <Leaf className="w-6 h-6 text-green-600" />
                        </motion.div>
                        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 via-yellow-400 to-purple-700 bg-clip-text text-transparent">
                            VedaVerse
                        </h1>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 rounded-full bg-green-100/80 hover:bg-green-200/80 transition-colors cursor-pointer">
                                <Menu className="w-6 h-6 text-green-700" />
                            </motion.div>
                        </SheetTrigger>

                        <SheetContent className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-l border-green-200/50 w-80">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-3 text-2xl font-bold text-green-800">
                                    <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
                                        <Leaf className="w-7 h-7 text-green-600" />
                                    </motion.div>
                                    VedaVerse
                                </SheetTitle>
                            </SheetHeader>

                            <div className='flex flex-col space-y-4 p-4'>
                                {navItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={item.path}
                                        className="text-lg font-semibold bg-gradient-to-r from-green-600 via-yellow-400 to-purple-700 bg-clip-text text-transparent rounded-xl transition-all duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                {user ? (
                                    <div className="pt-4 border-t border-green-200/50 space-y-2">
                                        <Link to="/dashboard">
                                            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 border-0 mb-4 hover:cursor-pointer">
                                                Dashboard
                                            </Button>
                                        </Link>
                                        {userMenuItems.map((menuItem) => (
                                            <Link key={menuItem.label} to={menuItem.path}>
                                                <div className="flex items-center gap-3 text-green-700 hover:text-green-600 p-3 rounded-lg hover:bg-green-50/50 transition-colors cursor-pointer">
                                                    <menuItem.icon className="w-5 h-5" />
                                                    <span className="font-medium">{menuItem.label}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-3 pt-4 border-t border-green-200/50">
                                        <Link to="/login">
                                            <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 border-0">
                                                Login
                                            </Button>
                                        </Link>
                                        <Link to="/signup">
                                            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 border-0">
                                                Signup
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.div>

            {/* Spacer for fixed navbar */}
            <div className="h-20 md:h-24"></div>
        </>
    );
};

export default Navbar;
