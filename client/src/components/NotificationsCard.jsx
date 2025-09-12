import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";

const NotificationsCard = () => {
    const [notifications] = useState([
        { id: 1, type: "pre", text: "Drink plenty of water before Abhyanga.", time: "2 hrs before" },
        { id: 2, type: "post", text: "Avoid heavy meals for 3 hrs after Virechana.", time: "After session" },
        { id: 3, type: "pre", text: "Meditate 10 minutes before session for relaxation.", time: "30 mins before" },
    ]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 rounded-2xl shadow-lg p-6 mb-8"
        >
            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                <Bell size={18} /> Therapy Notifications
            </h3>
            <div className="space-y-3">
                {notifications.map(note => (
                    <div
                        key={note.id}
                        className={`p-3 rounded-lg border-l-4 ${note.type === "pre"
                            ? "bg-blue-50 border-blue-400"
                            : "bg-purple-50 border-purple-400"
                            }`}
                    >
                        <p className="text-sm text-gray-800">{note.text}</p>
                        <span className="text-xs text-gray-500">{note.time}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default NotificationsCard;