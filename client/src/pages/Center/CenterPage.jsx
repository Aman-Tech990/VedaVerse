import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Link } from "react-router";

// Custom Leaflet marker icon (green theme for VedaVerse)
const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const CenterPage = () => {
    const [position, setPosition] = useState([20.2961, 85.8245]);
    const [centers, setCenters] = useState([]);

    useEffect(() => {
        // Get user location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition([pos.coords.latitude, pos.coords.longitude]);
                },
                () => {
                    console.log("Geolocation not allowed, using default Bhubaneswar.");
                }
            );
        }

        // Mock Data: Nearby Panchakarma centers (replace with backend API later)
        setCenters([
            {
                id: 1,
                name: "Ayush Wellness Panchakarma Center",
                lat: 20.2965,
                lng: 85.8251,
                address: "CRP Square, Bhubaneswar",
            },
            {
                id: 2,
                name: "Veda Healing Ayurveda",
                lat: 20.298,
                lng: 85.822,
                address: "Jayadev Vihar, Bhubaneswar",
            },
            {
                id: 3,
                name: "Kerala Panchakarma Clinic",
                lat: 20.295,
                lng: 85.828,
                address: "Sahid Nagar, Bhubaneswar",
            },
        ]);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 py-10 px-4 md:px-12">
            {/* Page Header */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl font-bold text-center text-orange-900 mb-8"
            >
                Nearby Panchakarma Centers 🌿
            </motion.h1>

            {/* Map */}
            <div className="h-[400px] w-full rounded-2xl shadow-lg overflow-hidden mb-10 border border-green-200">
                <MapContainer center={position} zoom={14} scrollWheelZoom={false} className="h-full w-full">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                    />
                    <Marker position={position} icon={customIcon}>
                        <Popup>You are here</Popup>
                    </Marker>
                    {centers.map((center) => (
                        <Marker key={center.id} position={[center.lat, center.lng]} icon={customIcon}>
                            <Popup>
                                <strong>{center.name}</strong>
                                <br />
                                {center.address}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            {/* Centers List */}
            <div className="grid md:grid-cols-3 gap-6">
                {centers.map((center) => (
                    <motion.div
                        key={center.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-6 rounded-2xl bg-white shadow-md border border-green-100 hover:shadow-xl transition-all"
                    >
                        <h2 className="text-xl font-bold text-purple-900 mb-2">{center.name}</h2>
                        <p className="text-black font-medium mb-3">{center.address}</p>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium shadow-md hover:bg-green-700 transition cursor-pointer">
                            <Navigation className="h-4 w-4" />
                            <Link to="/schedule">Schedule Here</Link>
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CenterPage;
