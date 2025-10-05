"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../lib/constants";

const FaqQuestion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="py-32 bg-gradient-to-b bg-transparent relative overflow-hidden" id="faq">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/30 blur-[90px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/5 w-48 h-48 bg-purple-500/30 blur-[100px] rounded-full animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4 text-left">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="bg-card/20 border border-white/10 rounded-xl p-5 hover:border-primary/30 transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            layout
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="flex items-center justify-between w-full text-left"
                            >
                                <span className="text-lg font-medium text-foreground">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0}}
                                        animate={{ opacity: 1}}
                                        exit={{ opacity: 0}}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        layout
                                        className="overflow-hidden"
                                    >
                                        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqQuestion;