"use client"
import { motion } from 'framer-motion'

const companies = [
    "Stripe", "CertiK", "Anthropic", "OpenAI", "Vercel",
    "Supabase", "Linear", "Notion", "Figma", "GitHub",
    "Microsoft", "Google", "Meta", "Tesla", "Netflix"
];

const ClientLabel = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-primary/30 blur-3xl rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/5 w-28 h-28 bg-accent/30 blur-2xl rounded-full animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center px-2 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                            Trusted Worldwide
                        </span>
                    </div> 
                    

                    <h3 className="mt-6 text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                        Trusted by World-Class Teams
                    </h3>

                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        Powering innovation at the most forward-thinking companies.
                    </p>
                </motion.div>

                <motion.div
                    className="relative mt-16 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="flex whitespace-nowrap gap-12 animate-scroll"
                        aria-hidden
                    >
                        {[...companies, ...companies].map((company, index) => (
                            <motion.div
                                key={`logo-${company}-${index}`}
                                whileHover={{ scale: 1.05 }}
                                className="flex-shrink-0 group transition-transform duration-300"
                            >
                                <div className="px-6 py-3 rounded-xl bg-card/30 backdrop-blur-md border border-white/10 hover:border-primary/30 shadow-sm hover:shadow-primary/10 transition-all duration-300">
                                    <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground">
                                        {company}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}

export default ClientLabel