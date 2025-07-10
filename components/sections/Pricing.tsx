"use client"
import { useRef } from "react"
import Heading from "../customs/Heading"
import PricingList from "../customs/PricingList"
import { motion, useInView } from "framer-motion"

const Pricing = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <section
            ref={ref}
            id="pricing"
            className="relative overflow-hidden min-h-screen"
        >
            {/* Background transition */}
            <motion.div
                className="absolute inset-0 z-0 bg-black transition-colors duration-[1200ms]"
                animate={{
                    backgroundColor: isInView ? "#0d0d0d" : "#000000"
                }}
            />
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0" />
            <div className="container relative z-10 py-20 sm:py-28 px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-xl mx-auto mb-14"
                >
                    <Heading
                        tag="Get started with Pulse"
                        title="Pay once, use forever"
                    />
                    <p className="text-white/60 text-base sm:text-lg mt-4">
                        Choose a one-time payment that unlocks lifetime access.
                    </p>
                </motion.div>

                <PricingList />
            </div>
        </section>
    );
}

export default Pricing