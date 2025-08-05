"use client";

import { motion, useScroll, useTransform, Variants, easeOut } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useNavbar } from "@/hooks/nav-provider";
import { ArrowUpRight } from "lucide-react";
import WaveMotion from "../customs/Wave";

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
    const { isNavbarVisible } = useNavbar()
    const { scrollYProgress } = useScroll({
        target: parallaxRef,
        offset: ["start end", "end start"],
    });
    const [isHovered, setIsHovered] = useState(false);
    // const[animationKey, setAnimationKey] = useState(0);

    // const handleHover = () => {
    //     setTrigger(false);
    //     setAnimationKey(prev=>prev+1);
    //     requestAnimationFrame(()=> setTrigger(true));
    // }

    const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <>
            <motion.section
                id="hero"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                    opacity: 1,
                    y: isNavbarVisible ? 40 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`transition-all duration-700 ${isNavbarVisible ? "pt-[7rem] md:pt-[10.5rem]" : "pt-[5rem]"
                    } -mt-[4.25rem]`}
            >

                <div className="container relative" ref={parallaxRef}>
                    <motion.div
                        className="relative z-10 max-w-full mx-auto text-center mb-20 md:mb-28 lg:mb-32"
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <WaveMotion />
                        <motion.h1
                            className="h1 mb-6 font-bold tracking-tight text-white"
                            variants={fadeUpVariant(0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Transform Your Business With Intelligent Analytics{" "}
                            <motion.span
                                className="chrome-text inline-block "
                            >
                                Pulse
                            </motion.span>{" "}
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
                            <div className="flex sm:flex-row gap-4 justify-center items-center">
                                <motion.a
                                    href="#"
                                    className="bg-white/100 rounded-full group relative inline-flex gap-2 px-5 py-3 text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:ring-2 hover:ring-white/60 hover:ring-offset-2 flex flex-row justify-evenly"
                                    // whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.3, ease: "linear" } }}
                                    // whileTap={{ scale: 0.95, y:0, transition: {duration: 0.1, ease: "linear"}}}
                                    aria-label="Start for Free"
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                >
                                    Start for Free

                                    <motion.div
                                        className="relative z-10 flex items-center justify-center"
                                        initial={{ x: 0, y: 0 }}
                                        animate={
                                            isHovered
                                                ? {
                                                    x: 12, // move far to the right
                                                    y: -12,// move far up
                                                    opacity: 0,
                                                    transition: { duration: 0.4, ease: "linear" }
                                                }
                                                : {
                                                    x: [12, 0], // re-enter from bottom-left
                                                    y: [-12, 0],
                                                    opacity: [0, 1],
                                                    transition: {
                                                        duration: 0.4,
                                                        ease: "linear"
                                                    }
                                                }
                                        }
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </motion.div>
                                </motion.a>
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
                                className="relative bg-transparent rounded-[1rem] shadow-2xl shadow-slate-200/50 overflow-hidden"
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
                                        loading="lazy"
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

                        </motion.div>

                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Hero;