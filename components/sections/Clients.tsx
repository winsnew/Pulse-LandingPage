"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { companies } from "../../lib/constants";

const ClientLabel = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background/70 to-background">
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-4 relative inline-block">
                        Built With
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full animate-pulse" />
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-md">
                        The world's leading teams build on our platform.
                    </p>
                </motion.div>

                <motion.div
                    className="relative mt-16 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="marquee">
                        <div className="track">
                            {companies.map((company) => (
                                <div
                                    key={company.name}
                                    className="flex-shrink-0 group transition-transform duration-300 hover:scale-105 px-4"
                                >
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all">
                                        <div className="relative w-6 h-6">
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                fill
                                                className="object-contain grayscale group-hover:grayscale-0 transition"
                                                sizes="24px"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition">
                                            {company.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fade gradient mask */}
                    <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default ClientLabel;
