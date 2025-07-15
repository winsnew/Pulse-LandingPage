"use client";

import { FeatureItem } from "@/lib/types";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    Microscope,
    Radar,
    Bot,
    Zap,
    Eye,
} from "lucide-react";

const features: FeatureItem[] = [
    {
        title: "AI Sentiment Analysis",
        description:
            "Real-time scanning of influencer signals and market sentiment with precision AI models.",
        icon: () => <BrainCircuit className="w-6 h-6 text-purple-500" />,
    },
    {
        title: "Atomic Risk Scoring",
        description:
            "Quantify asset risk levels using atomic-level behavioral prediction and real-world events.",
        icon: () => <Microscope className="w-6 h-6 text-blue-500" />,
    },
    {
        title: "Predictive Asset Radar",
        description:
            "AI radar system scans the market for bullish signals before they trend.",
        icon: () => <Radar className="w-6 h-6 text-indigo-400" />,
    },
    {
        title: "AI Automation Engine",
        description:
            "Robotic intelligence that automates alerts, workflows, and strategy triggers in real-time.",
        icon: () => <Bot className="w-6 h-6 text-cyan-500" />,
    },
    {
        title: "Lightning Fast Processing",
        description:
            "Built with GPU acceleration and neural indexing for millisecond decisions.",
        icon: () => <Zap className="w-6 h-6 text-yellow-400" />,
    },
    {
        title: "Visual Intelligence",
        description:
            "Beautiful dashboards with animated AI insights & crypto market behavior mapping.",
        icon: () => <Eye className="w-6 h-6 text-pink-400" />,
    },
];

const Features = () => {
    return (
        <section
            className="relative py-28 bg-gradient-to-b from-background/90 to-background overflow-hidden"
            id="features"
        >
            {/* ⚡ Grid Lines — reduced to 8x8 for perf */}
            <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="absolute top-0 h-full w-[1px] bg-purple-500/20 blur-[0.5px] mix-blend-screen will-change-transform"
                        style={{
                            left: `${(i + 1) * 10}%`,
                            animation: `scan-vert 6s linear ${i * 0.3}s infinite`,
                        }}
                    />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="absolute left-0 w-full h-[1px] bg-purple-500/20 blur-[0.5px] mix-blend-screen will-change-transform"
                        style={{
                            top: `${(i + 1) * 10}%`,
                            animation: `scan-horiz 8s linear ${i * 0.4}s infinite`,
                        }}
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
                    className="text-4xl font-bold text-center text-foreground mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Powered by Atomic AI Intelligence
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="relative group bg-gradient-to-br from-white/5 via-white/2 to-white/5 rounded-[2rem] px-6 py-8 backdrop-blur-md border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_25px_4px_rgba(168,85,247,0.3)] transition-all duration-300"
                            initial={{ opacity: 0, y: 40, rotateX: 5 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 z-0 rounded-[2rem] before:absolute before:inset-0 before:rounded-[2rem] before:bg-gradient-to-br before:from-purple-500/20 before:to-indigo-500/10 before:blur-[40px] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity" />

                            <motion.div
                                aria-label={feature.title}
                                className="p-4 rounded-full bg-white/10 shadow-inner backdrop-blur-lg mb-4 w-fit will-change-transform"
                                animate={{ y: [0, -4, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                {feature.icon()}
                            </motion.div>

                            <motion.div
                                className="relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Features;
