import React from 'react';

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const FeedbackSection = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmitFeedback = () => {
        if (!rating || !comment) return;
        setFeedbacks([
            ...feedbacks,
            { rating, comment, date: new Date().toLocaleString() },
        ]);
        setRating(0);
        setComment("");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 rounded-2xl shadow-lg p-6 mb-8 max-w-7xl mx-auto"
        >
            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                <Star size={18} /> Rate Your Doctor
            </h3>

            {/* ⭐ Star Rating */}
            <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={24}
                        onClick={() => setRating(star)}
                        className={`cursor-pointer ${rating >= star
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                            }`}
                    />
                ))}
            </div>

            {/* 📝 Feedback Input */}
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave your feedback..."
                className="w-full p-3 border rounded-lg mb-4"
            />

            {/* ✅ Submit Button */}
            <button
                onClick={handleSubmitFeedback}
                disabled={!rating || !comment}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium disabled:opacity-50"
            >
                Submit Feedback
            </button>

            {/* 📋 Submitted Feedbacks */}
            <div className="mt-6 space-y-3">
                {feedbacks.map((fb, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg border">
                        <div className="flex items-center gap-1 text-yellow-500">
                            {Array.from({ length: fb.rating }).map((_, i) => (
                                <Star key={i} size={16} />
                            ))}
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{fb.comment}</p>
                        <span className="text-xs text-gray-400">{fb.date}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default FeedbackSection;