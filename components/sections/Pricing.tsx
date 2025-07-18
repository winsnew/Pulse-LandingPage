"use client"
import { useRef, useState } from "react"
import Heading from "../customs/Heading"
import PricingList from "../customs/PricingList"
import { motion, useInView } from "framer-motion"

const Pricing = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

    return (
        <section
            ref={ref}
            id="pricing"
            className="relative overflow-hidden min-h-screen"
        >
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-b transition-colors duration-[1200ms]"
                animate={{
                    backgroundColor: isInView ? "#0d0d0d" : "#000000"
                }}
            />
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0" />
            <div className="container relative z-8 pt-20 pb-24 sm:py-28 px-3 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-xl mx-auto mb-8"
                >
                    <Heading
                        tag="Get started with Pulse"
                        title="Pay once, use forever"
                    />
                    <p className="text-white/60 text-base sm:text-lg mt-3">
                        Choose a one-time payment that unlocks lifetime access.
                    </p>
                </motion.div>

                {/* Billing Period Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-10"
                >
                    <div className="relative w-[200px] h-[38px] rounded-full p-[2px] border border-white/20 shadow-xl bg-white/10 backdrop-blur-md backdrop-saturate-150">
                        {/* Sliding Indicator */}
                        <motion.div
                            className="absolute top-[2px] bottom-[2px] w-[calc(50%-4px)] bg-gradient-to-br from-white/70 via-gray-200 to-white/90 rounded-full shadow-[0_2px_8px_rgba(255,255,255,0.3)] backdrop-blur-md"
                            layout
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            style={{
                                left: billingPeriod === "monthly" ? "2px" : "calc(50% + 2px)",
                            }}
                        />

                        {/* Monthly */}
                        <button
                            onClick={() => setBillingPeriod("monthly")}
                            className={`w-1/2 h-full relative z-10 text-sm font-semibold rounded-full transition-all duration-300 ${billingPeriod === "monthly"
                                ? "text-black"
                                : "text-white/60 hover:text-white"
                                }`}
                        >
                            Monthly
                        </button>

                        {/* Annual */}
                        <button
                            onClick={() => setBillingPeriod("annual")}
                            className={`w-1/2 h-full relative z-10 text-sm font-semibold rounded-full transition-all duration-300 ${billingPeriod === "annual"
                                ? "text-black"
                                : "text-white/60 hover:text-white"
                                }`}
                        >
                            Annual
                            {billingPeriod === "annual" && (
                                <span className="absolute -top-2 -right-4 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded-full shadow-sm">
                                    Save 20%
                                </span>
                            )}
                        </button>
                    </div>
                </motion.div>
        
                <PricingList billingPeriod={billingPeriod} />
            </div>
        </section>
    );
}

export default Pricing