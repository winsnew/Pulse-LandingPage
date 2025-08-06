"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, ChevronDown } from "lucide-react";
import { useState } from "react";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const filters = ["Last 7 Days", "Last 30 Days", "All Time"];

export const FeatureCard = () => {
    const [filter, setFilter] = useState("Last 7 Days");

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-lg backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-gradient-to-r from-slate-400 to-black text-white shadow-md">
                    <BrainCircuit size={20} />
                </div>
                <h3 className="text-white text-lg font-semibold leading-snug">
                    AI–Powered Workflow Automation
                </h3>
            </div>

            {/* Description */}
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Streamline operations with intelligent systems tailored to your business needs. Real-time optimization included.
            </p>

            <div>

            </div>

            <div className="mt-6">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-lime-500 text-black text-sm font-medium hover:opacity-90 transition">
                    Explore
                    <ArrowRight size={16} />
                </button>
            </div>
        </motion.div>
    );
};
