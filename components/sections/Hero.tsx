"use client"
import Link from "next/link";
import { MouseParallax } from "react-just-parallax";
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
            <section className="pt-[10rem] -mt-[4.25rem]" id="hero">
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
                            <motion.span
                                className="inline-block relative text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                                animate={{
                                    scale: [1, 1.03, 1], // Keyframes for the pulse effect
                                }}
                                transition={{
                                    duration: 2.0,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                Pulse
                            </motion.span>
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
                            className="flex flex-col items-center gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <div className="flex flex-col sm:flex-row gap-7 justify-center items-center">
                                <MotionLink
                                    href="#"
                                    className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/30 transition-all duration-300"
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    🚀 Unlock Insights Now
                                </MotionLink>

                                <MotionLink
                                    href="#"
                                    className="px-6 py-3 rounded-xl border border-slate-300 text-slate-300 hover:text-white hover:border-white transition-all duration-300"
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Book a Demo
                                </MotionLink>
                            </div>

                            <motion.span
                                className="text-sm text-slate-400 mt-2 text-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                ✅ 14-day free trial · No credit card required · Cancel anytime
                            </motion.span>
                        </motion.div>
                    </motion.div>
                    <div className="max-w-full mx-auto mb-12">
                        <ClientLabel />
                    </div>
                    <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                        {/* 👇 WRAPPER ADDED HERE 👇 */}
                        <MouseParallax strength={0.04} parallaxContainerRef={parallaxRef}>
                            <motion.div
                                className="relative z-10 p-0.5 rounded-2xl bg-transparent"
                                initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 15 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.7 }}
                                style={{ y: yImage, scale: scaleImage }}
                            >
                                <motion.div
                                    initial={{ filter: "blur(12px)", scale: 0.96 }}
                                    whileInView={{ filter: "blur(0px)", scale: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="relative bg-n-8 rounded-[1rem] shadow-2xl shadow-slate-200/50 overflow-hidden"
                                >
                                    <div className="h-[1.4rem] bg-transparent rounded-t-[0.9rem]" />
                                    <motion.div
                                        className="rounded-b-[0.9rem] overflow-hidden"
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 1 }}
                                    >
                                        <Image
                                            src="/assets/dashboard.png"
                                            className="w-full h-auto"
                                            width={1024}
                                            height={690}
                                            alt="Dashboard"
                                            priority
                                        />
                                    </motion.div>
                                </motion.div>
                                <Gradient />
                            </motion.div>
                        </MouseParallax>
                        {/* 👆 WRAPPER ENDS HERE 👆 */}
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
        </ScrollRevealWrapper >
    )
}

export default Hero













// "use client"
// import Link from "next/link";
// import { MouseParallax } from "react-just-parallax";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { Gradient } from "../customs/Heros";
// import ClientLabel from "./Clients";
// import ScrollRevealWrapper from "../customs/ScrollReveal";
// import Image from "next/image";
// import MotionLink from "../customs/MotionLink";

// const Hero = () => {
//     const parallaxRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: parallaxRef,
//         offset: ["start end", "end start"],
//     });

//     const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
//     const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
//     return (
//         <ScrollRevealWrapper>
//             <section className="pt-[10rem] -mt-[4.25rem]" id="hero">
//                 <div className="container relative" ref={parallaxRef}>
//                     <motion.div
//                         className="relative z-10 max-w-full mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1, ease: "easeOut" }}
//                         viewport={{ once: true }}
//                     >
//                         <motion.h1
//                             className="h1 mb-6"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.2, duration: 0.8 }}
//                         >
//                             Transform Your Business With Intelligent Analytics{" "}
//                             <motion.span
//                                 className="inline-block relative text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
//                                 animate={{
//                                     scale: [1, 1.03, 1], // Keyframes for the pulse effect
//                                 }}
//                                 transition={{
//                                     duration: 2.0,
//                                     repeat: Infinity,
//                                     ease: "easeInOut",
//                                 }}
//                             >
//                                 Pulse
//                             </motion.span>
//                         </motion.h1>

//                         <motion.p
//                             className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.4, duration: 0.8 }}
//                         >
//                             Get real-time insights, automate workflows, and scale your operations with our cutting-edge platform. Join thousands of companies already transforming their business.
//                         </motion.p>

//                         <motion.div
//                             className="flex flex-col items-center gap-4 justify-center"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.6, duration: 0.8 }}
//                         >
//                             <div className="flex flex-col sm:flex-row gap-7 justify-center items-center">
//                                 <MotionLink
//                                     href="#"
//                                     className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/30 transition-all duration-300"
//                                     whileHover={{ scale: 1.06 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     🚀 Unlock Insights Now
//                                 </MotionLink>

//                                 <MotionLink
//                                     href="#"
//                                     className="px-6 py-3 rounded-xl border border-slate-300 text-slate-300 hover:text-white hover:border-white transition-all duration-300"
//                                     whileHover={{ scale: 1.06 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     Book a Demo
//                                 </MotionLink>
//                             </div>

//                             <motion.span
//                                 className="text-sm text-slate-400 mt-2 text-center"
//                                 initial={{ opacity: 0, y: 10 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.8, duration: 0.6 }}
//                             >
//                                 ✅ 14-day free trial · No credit card required · Cancel anytime
//                             </motion.span>
//                         </motion.div>
//                     </motion.div>
//                     <div className="max-w-full mx-auto mb-12">
//                         <ClientLabel />
//                     </div>
//                     <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
//                         <motion.div
//                             className="relative z-10 p-0.5 rounded-2xl bg-transparent"
//                             initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 15 }}
//                             whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
//                             transition={{ duration: 1.2, ease: "easeOut" }}
//                             viewport={{ once: true, amount: 0.7 }}
//                             style={{ y: yImage, scale: scaleImage }}
//                         >
//                             <motion.div
//                                 initial={{ filter: "blur(12px)", scale: 0.96 }}
//                                 whileInView={{ filter: "blur(0px)", scale: 1 }}
//                                 transition={{ duration: 1, ease: "easeOut" }}
//                                 className="relative bg-n-8 rounded-[1rem] shadow-2xl shadow-slate-200/50 overflow-hidden"
//                             >
//                                 <div className="h-[1.4rem] bg-transparent rounded-t-[0.9rem]" />
//                                 <motion.div
//                                     className="rounded-b-[0.9rem] overflow-hidden"
//                                     initial={{ opacity: 0, y: 40 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: 0.4, duration: 1 }}
//                                 >
//                                     <Image
//                                         src="/assets/dashboard.png"
//                                         className="w-full h-auto"
//                                         width={1024}
//                                         height={690}
//                                         alt="Dashboard"
//                                         priority
//                                     />
//                                 </motion.div>
//                             </motion.div>
//                             <Gradient />
//                         </motion.div>
//                         <motion.div
//                             className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] pointer-events-none"
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 0.25 }}
//                             transition={{ delay: 1, duration: 1.2 }}
//                         >
//                             <div className="w-full h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 blur-[120px] opacity-60 rounded-full" />
//                         </motion.div>
//                     </div>
//                 </div>

//             </section>
//         </ScrollRevealWrapper >
//     )
// }

// export default Hero