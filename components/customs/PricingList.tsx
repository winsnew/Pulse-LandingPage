
import { pricing } from "../constants"
import { motion } from "framer-motion"

const PricingList = () => {
    return (
        <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial="hidden"
            whileInView="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
            viewport={{ once: true }}
        >
            {pricing.map((item, idx) => (
                <motion.div
                    key={item.id}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className={`w-full max-w-sm p-8 rounded-3xl shadow-lg border border-white/10 backdrop-blur-md bg-white/5 text-white relative overflow-hidden ${idx === 1 ? "border-primary shadow-primary/20" : ""
                        }`}
                >
                    {idx === 1 && (
                        <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-widest shadow-md">
                            Most Popular
                        </span>
                    )}

                    <h4 className="text-2xl font-bold mb-2 text-primary">{item.title}</h4>

                    <p className="text-sm text-white/70 min-h-[3rem] mb-4">
                        {item.description}
                    </p>

                    <div className="flex items-end mb-6">
                        {item.price && (
                            <>
                                <span className="text-2xl font-medium">$</span>
                                <span className="text-5xl font-extrabold leading-none ml-1">
                                    {item.price}
                                </span>
                            </>
                        )}
                    </div>

                    <ul className="space-y-4 text-sm text-white/80 border-t border-white/10 pt-4">
                        {item.features.map((feature, index) => (
                            <li key={index} className="flex gap-2 items-start">
                                <span className="mt-1 text-green-400">✔</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default PricingList