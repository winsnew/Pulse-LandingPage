"use client";

import { motion, useScroll, useTransform, Variants, easeOut } from "framer-motion";
import { useRef } from "react";
import { Gradient } from "../customs/Heros";
import ScrollRevealWrapper from "../customs/ScrollReveal";
import Image from "next/image";
import MotionLink from "../customs/MotionLink";

const containerVariant: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: easeOut },
    },
};

const fadeUpVariant = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.8, ease: easeOut },
    },
});

const imageVariant: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.95, rotateX: 15 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: { duration: 1.2, ease: easeOut },
    },
};

const Hero = () => {
    const parallaxRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: parallaxRef,
        offset: ["start end", "end start"],
    });

    const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <ScrollRevealWrapper>
            <section className="pt-[10rem] md:pt-[8.5rem] -mt-[4.25rem]" id="hero">
                <div className="container relative" ref={parallaxRef}>
                    <motion.div
                        className="relative z-10 max-w-full mx-auto text-center mb-20 md:mb-28 lg:mb-32"
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h1
                            className="h1 mb-6 font-extrabold tracking-tight text-white"
                            variants={fadeUpVariant(0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Transform Your Business With Intelligent Analytics{" "}
                            <span className="inline-block relative text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Pulse
                            </span>{" "}
                            - Your AI Trading Partner
                        </motion.h1>

                        <motion.p
                            className="body-1 max-w-3xl mx-auto mb-6 text-n-2 md:mb-8 text-sm"
                            variants={fadeUpVariant(0.4)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Cut through market noise, uncover high-value opportunities, and elevate your strategy with cutting-edge AI analytics. Join thousands of traders who trust Pulse to make smarter, faster, and more informed decisions — anytime, anywhere.
                        </motion.p>

                        <motion.div
                            className="flex flex-col items-center gap-4 justify-center"
                            variants={fadeUpVariant(0.6)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <MotionLink
                                    href="#"
                                    className="px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/30 transition-all duration-300"
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Start for Free"
                                >
                                    🚀 Start for Free
                                </MotionLink>

                                {/* <MotionLink
                                    href="#"
                                    className="px-8 py-3 rounded-xl text-slate-100 font-medium bg-white/5 border border-white/10 hover:border-white/20 hover:backdrop-blur-md hover:text-white transition-all duration-300"
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Book a Demo
                                </MotionLink> */}
                            </div>

                            <motion.span
                                className="text-sm text-slate-400 mt-2 text-center block"
                                variants={fadeUpVariant(0.8)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                ✅ 14-day free trial · No credit card required · Cancel anytime
                            </motion.span>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-5">
                        <motion.div
                            className="relative z-10 p-0.5 rounded-2xl bg-transparent"
                            style={{ y: yImage, scale: scaleImage }}
                            variants={imageVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.7 }}
                        >
                            <motion.div
                                className="relative bg-n-8 rounded-[1rem] shadow-2xl shadow-slate-200/50 overflow-hidden"
                                initial={{ filter: "blur(12px)", scale: 0.96 }}
                                whileInView={{ filter: "blur(0px)", scale: 1 }}
                                transition={{ duration: 1, ease: easeOut }}
                            >
                                <div className="h-[1.4rem] bg-transparent rounded-t-[0.9rem]" />
                                <motion.div
                                    className="rounded-b-[0.9rem] overflow-hidden hidden md:block"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUpVariant(0.4)}
                                >
                                    <Image
                                        src="/assets/dashboard.png"
                                        className="w-full h-auto"
                                        width={1024}
                                        height={690}
                                        alt="Pulse AI Dashboard"
                                        priority
                                    />
                                </motion.div>

                                <motion.div
                                    className="rounded-b-[0.9rem] overflow-hidden block md:hidden"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUpVariant(0.4)}
                                >
                                    <Image
                                        src="/assets/mobile.png"
                                        className="w-full h-auto"
                                        width={350}
                                        height={700}
                                        alt="Pulse AI Mobile Dashboard"
                                        priority
                                    />
                                </motion.div>
                            </motion.div>

                            <Gradient />
                        </motion.div>

                        <motion.div
                            className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] pointer-events-none"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.25 }}
                            transition={{ delay: 1, duration: 1.2 }}
                        >
                            <div className="w-full h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 blur-[120px] opacity-60 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </ScrollRevealWrapper>
    );
};

export default Hero;
