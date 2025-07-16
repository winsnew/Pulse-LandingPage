"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    BrainCircuit,
    Microscope,
    Radar,
    Bot,
    Zap,
    Eye,
} from "lucide-react";

const features = [
    {
        title: "AI Sentiment Analysis",
        description:
            "Real-time scanning of influencer signals and market sentiment with precision AI models.",
        icon: BrainCircuit,
    },
    {
        title: "Atomic Risk Scoring",
        description:
            "Quantify asset risk levels using atomic-level behavioral prediction and real-world events.",
        icon: Microscope,
    },
    {
        title: "Predictive Asset Radar",
        description:
            "AI radar system scans the market for bullish signals before they trend.",
        icon: Radar,
    },
    {
        title: "AI Automation Engine",
        description:
            "Robotic intelligence that automates alerts, workflows, and strategy triggers in real-time.",
        icon: Bot,
    },
    {
        title: "Lightning Fast Processing",
        description:
            "Built with GPU acceleration and neural indexing for millisecond decisions.",
        icon: Zap,
    },
    {
        title: "Visual Intelligence",
        description:
            "Beautiful dashboards with animated AI insights & crypto market behavior mapping.",
        icon: Eye,
    },
];

const Features = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section
            className="relative py-28 bg-gradient-to-b bg-transparent overflow-hidden text-white"
            id="features"
        >
            <motion.div
                className="max-w-6xl mx-auto px-6"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-4xl font-bold text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Powered by Atomic AI Intelligence
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md 
                                    transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] 
                                    hover:-translate-y-1 hover:scale-[1.015] 
                                    will-change-transform perspective-1000"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative z-10">
                                    <div
                                        className="p-4 rounded-full bg-white/10 shadow-inner backdrop-blur-lg w-fit mb-4"
                                        role="img"
                                        aria-label={feature.title}
                                        title={feature.title}
                                    >
                                        {!reduceMotion ? (
                                            <motion.div
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 2,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <Icon className="w-6 h-6 text-white/70" />
                                            </motion.div>
                                        ) : (
                                            <Icon className="w-6 h-6 text-white/70" />
                                        )}
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-white/60 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" /> */}
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default memo(Features);
