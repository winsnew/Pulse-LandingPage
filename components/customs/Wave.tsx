"use client";

import { motion } from "framer-motion";

const WaveMotion = () => {
    return (
        <div className="relative bottom-0 left-0 right-0 z-0 overflow-hidden pointer-events-none">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1440 220"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-hidden"
            >
                <defs>
                    {/* Gradient for stroke to simulate thinner edges and thicker center */}
                    <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                        <stop offset="25%" stopColor="white" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="white" stopOpacity="1" />
                        <stop offset="75%" stopColor="white" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>

                    {/* Glow filter */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="400%">
                        <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Group with vertical bouncing animation */}
                <motion.g
                    animate={{
                        y: [0, -12, 0, 12, 0]
                    }}
                    transition={{
                        duration: 8,
                        ease: "easeInOut",
                        repeat: Infinity
                    }}
                >
                    <motion.path
                        d="M0 80 C 360 200, 1080 -40, 1440 80"
                        stroke="url(#wave-gradient)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="transparent"
                        filter="url(#glow)"
                        animate={{
                            d: [
                                "M0 80 C 360 200, 1080 -40, 1440 80",
                                "M0 80 C 360 -100, 1080 300, 1440 80",
                                "M0 80 C 360 100, 1080 60, 1440 40",
                                "M0 80 C 360 200, 1080 -40, 1440 80"
                            ],
                            opacity: [0.7, 1, 0.6, 1]
                        }}
                        transition={{
                            duration: 8,
                            ease: "easeInOut",
                            repeat: Infinity
                        }}
                    />
                </motion.g>
            </svg>
        </div>
    );
};

export default WaveMotion;
