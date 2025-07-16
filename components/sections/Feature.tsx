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
            className="relative py-28 bg-gradient-to-b from-black to-neutral-950 overflow-hidden text-white"
            id="features"
        >
            <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="absolute top-0 h-full w-[1px] bg-white/5 blur-[0.5px] mix-blend-overlay"
                        style={{
                            left: `${(i + 1) * 20}%`,
                            animation: `scan-vert 6s linear ${i * 0.3}s infinite`,
                        }}
                        aria-hidden="true"
                    />
                ))}
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="absolute left-0 w-full h-[1px] bg-white/5 blur-[0.5px] mix-blend-overlay"
                        style={{
                            top: `${(i + 1) * 20}%`,
                            animation: `scan-horiz 8s linear ${i * 0.4}s infinite`,
                        }}
                        aria-hidden="true"
                    />
                ))}
            </div>

            <motion.div
                className="max-w-6xl mx-auto px-6"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-4xl font-bold text-center mb-20 text-white"
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
                                className="group relative px-6 py-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] rounded-xl"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div
                                    className="p-4 rounded-full bg-white/5 backdrop-blur-sm w-fit shadow-inner mb-4"
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

                                <div className="relative z-10">
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-white/60 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default memo(Features);
