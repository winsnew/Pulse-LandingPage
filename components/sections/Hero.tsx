"use client"
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Gradient } from "../customs/Heros";
import ClientLabel from "./Clients";
import ScrollRevealWrapper from "../customs/ScrollReveal";
import Image from "next/image";
import MotionLink from "../customs/MotionLink";

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
            <section className="pt-[12rem] -mt-[5.25rem]" id="hero">
                <div className="container relative" ref={parallaxRef}>
                    <motion.div
                        className="relative z-10 max-w-full mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.h1
                            className="h1 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Transform Your Business With Intelligent Analytics{" "}
                            <span className="inline-block relative text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Pulse
                            </span>
                        </motion.h1>

                        <motion.p
                            className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Get real-time insights, automate workflows, and scale your operations with our cutting-edge platform. Join thousands of companies already transforming their business.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <MotionLink
                                href="#"
                                className="button-primary border-2 rounded-lg p-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get started
                            </MotionLink>
                            <MotionLink
                                href="#"
                                className="button-primary border-2 rounded-lg p-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Demo
                            </MotionLink>
                        </motion.div>
                    </motion.div>
                    <div className="max-w-full mx-auto mb-12">
                        <ClientLabel />
                    </div>
                    <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                        <motion.div
                            className="relative z-10 p-0.5 rounded-2xl bg-slate-700"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.7 }}
                            style={{ y: yImage, scale: scaleImage }}
                        >
                            <div className="relative bg-n-8 rounded-[1rem] shadow-2xl shadow-slate-900/50">
                                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                                <div className="rounded-b-[0.9rem] overflow-hidden">
                                    <Image
                                        src="/assets/dashboard.png"
                                        className="w-full h-auto"
                                        width={1024}
                                        height={690}
                                        alt="Dashboard"
                                        priority
                                    />
                                </div>
                            </div>
                            <Gradient />
                        </motion.div>

                        <motion.div
                            className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] pointer-events-none"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.2 }}
                            transition={{ delay: 1, duration: 1.2 }}
                        >
                            <div className="w-full h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 blur-[120px] opacity-60 rounded-full" />
                        </motion.div>
                    </div>
                </div>

            </section>
        </ScrollRevealWrapper >
    )
}

export default Hero