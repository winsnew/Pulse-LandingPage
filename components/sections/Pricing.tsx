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
                    className="flex justify-center mb-8"
                >
                    <div className="flex items-center bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
                        <button
                            onClick={() => setBillingPeriod('monthly')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                billingPeriod === 'monthly'
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'text-white/70 hover:text-white'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingPeriod('annual')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                                billingPeriod === 'annual'
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'text-white/70 hover:text-white'
                            }`}
                        >
                            Annual
                            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                                Save 20%
                            </span>
                        </button>
                    </div>
                </motion.div>

                <PricingList billingPeriod={billingPeriod} />
            </div>
        </section>
    );
}

export default Pricing