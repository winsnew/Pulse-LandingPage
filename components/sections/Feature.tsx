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
    LucideIcon,
} from "lucide-react";

const features: {
    title: string;
    description: string;
    icon: LucideIcon;
}[] = [
        {
            title: "AI Sentiment Analysis",
            description: "Real-time scanning of influencer signals and market sentiment with precision AI models.",
            icon: BrainCircuit,
        },
        {
            title: "Atomic Risk Scoring",
            description: "Quantify asset risk levels using atomic-level behavioral prediction and real-world events.",
            icon: Microscope,
        },
        {
            title: "Predictive Asset Radar",
            description: "AI radar system scans the market for signals before they trend.",
            icon: Radar,
        },
        {
            title: "AI Automation Engine",
            description: "Robotic intelligence that automates alerts, workflows, and strategy triggers in real-time.",
            icon: Bot,
        },
        {
            title: "Lightning Fast Processing",
            description: "Built with GPU acceleration and neural indexing for millisecond decisions.",
            icon: Zap,
        },
        {
            title: "Visual Intelligence",
            description: "Beautiful dashboards with animated AI insights & crypto market behavior mapping.",
            icon: Eye,
        },
    ];

const shapeVariants = [
    "row-span-1 col-span-1 sm:col-span-2",
    "row-span-1 col-span-1 sm:row-span-2",
    "row-span-1 col-span-1",
    "row-span-1 col-span-1 sm:col-span-2",
    "row-span-1 col-span-1",
    "row-span-1 col-span-1",
];

const Features = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative py-24 md:py-32 bg-transparent text-white" id="features">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-3xl sm:text-5xl font-bold text-center mb-20 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Discover Our Atomic AI Modules
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 grid-flow-dense">
                    {features.map(({ title, description, icon: Icon }, i) => (
                        <motion.div
                            key={title}
                            className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden shadow-inner transition-all duration-300 hover:shadow-xl hover:scale-[1.015] hover:-translate-y-[2px] ${shapeVariants[i % shapeVariants.length]}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -top-10 -right-10 opacity-20 group-hover:opacity-40 transition-all duration-300">
                                {!reduceMotion ? (
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                    >
                                        <Icon className="w-32 h-32 text-white/20" />
                                    </motion.div>
                                ) : (
                                    <Icon className="w-32 h-32 text-white/20" />
                                )}
                            </div>

                            <div className="relative z-10">
                                <div className="mb-4 bg-white/10 p-3 rounded-full w-fit">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                                <p className="text-sm text-white/60">{description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Features);