import { pricing } from "../../lib/constants"
import { motion } from "framer-motion"

interface PricingListProps {
    billingPeriod: 'monthly' | 'annual';
}

const PricingList = ({ billingPeriod }: PricingListProps) => {
    const handleSubscribe = (planTitle: string) => {
        // Handle subscription logic here
        console.log(`Subscribing to ${planTitle} plan`);
        // You can integrate with your payment provider here
    };

    return (
        <motion.div
            className="flex flex-col items-center gap-6"
            initial="hidden"
            whileInView="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
            }}
            viewport={{ once: true }}
        >
            <div className="flex flex-wrap justify-center gap-6 w-full">
                {pricing.map((item, idx) => {
                    const currentPrice = billingPeriod === 'monthly' ? item.monthlyPrice : item.annualPrice;
                    const isFreePlan = item.title === 'Basic';

                    return (
                        <motion.div
                            key={item.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className={`w-full max-w-sm p-8 rounded-3xl shadow-lg border border-white/10 backdrop-blur-md bg-white/5 text-white relative overflow-hidden flex flex-col ${idx === 1 ? 'border-primary shadow-primary/20' : ''
                                }`}
                        >
                            {idx === 1 && (
                                <span className="absolute top-3 right-3 bg-green-500/20 backdrop-blur-md text-green-300 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-widest shadow-lg shadow-green-500/20 animate-pulse border border-green-400/20">
                                    Most Popular
                                </span>
                            )}
                            <h4 className="text-2xl font-bold mb-2 text-primary">{item.title}</h4>
                            <p className="text-sm text-white/70 min-h-[3rem] mb-4">{item.description}</p>
                            <div className="flex items-end mb-6">
                                {currentPrice && (
                                    <>
                                        <span className="text-4xl font-semibold">$</span>
                                        <span className="text-4xl font-semibold ml-1">{currentPrice}</span>
                                        {!isFreePlan && (
                                            <span className="text-white/60 text-sm ml-2 mb-1">
                                                /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                            <ul className="space-y-4 text-sm text-white/80 border-t border-white/10 pt-6 mb-8">
                                {item.features.map((feature, index) => (
                                    <li key={index} className="flex gap-2 items-start">
                                        <span className="mt-1 text-green-400">✔</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => handleSubscribe(item.title)}
                                className={`w-full py-3 px-6 rounded-xl font-semibold text-sm mt-auto transition-all duration-300 ${isFreePlan
                                        ? 'bg-white/10 text-white hover:bg-white/20 border-white/20'
                                        : 'bg-white/5 text-white hover:bg-white/10 border-white/20 hover:border-white/30'
                                    }`}
                            >
                                {isFreePlan ? 'Get Started' : 'Subscribe Now'}
                            </button>
                        </motion.div>
                    );
                })}
            </div>

            {/* Contact Sales Button */}
            <div className="text-center mt-4">
                <p className="text-muted-foreground mb-4">Need a custom solution?</p>
                <button className="inline-flex items-center justify-center h-10 px-4 py-0 text-sm font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
                    Contact Sales
                </button>
            </div>
        </motion.div>
    );
}

export default PricingList