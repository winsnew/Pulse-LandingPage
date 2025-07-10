"use client"

const ClientLabel = () => {
    const companies = [
        "Stripe", "CertiK", "Anthropic", "OpenAI", "Vercel",
        "Supabase", "Linear", "Notion", "Figma", "GitHub",
        "Microsoft", "Google", "Meta", "Tesla", "Netflix"
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-secondary/40 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">
                            Trusted Globally
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                        Powering the Future
                    </h3>

                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Join industry leaders who trust our cutting-edge solutions
                    </p>
                </div>

                {/* Enhanced scrolling animation with multiple rows */}
                <div className="relative space-y-8">
                    {/* First row - normal direction */}
                    <div className="relative">
                        <div className="flex animate-scroll space-x-12 hover:pause">
                            {[...companies, ...companies].map((company, index) => (
                                <div
                                    key={`row1-${company}-${index}`}
                                    className="flex-shrink-0 group cursor-pointer"
                                >
                                    <div className="relative px-8 py-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                                        <div className="text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                            {company}
                                        </div>
                                        {/* Subtle glow effect on hover */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second row - reverse direction */}
                    <div className="relative">
                        <div className="flex animate-scroll-reverse space-x-12 hover:pause">
                            {[...companies.slice().reverse(), ...companies.slice().reverse()].map((company, index) => (
                                <div
                                    key={`row2-${company}-${index}`}
                                    className="flex-shrink-0 group cursor-pointer"
                                >
                                    <div className="relative px-6 py-3 rounded-lg bg-muted/30 border border-border/30 backdrop-blur-sm hover:bg-muted/60 hover:border-accent/40 transition-all duration-500 hover:scale-105">
                                        <div className="text-sm font-medium text-muted-foreground/80 group-hover:text-foreground/90 transition-colors duration-300">
                                            {company}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient overlays with enhanced effects */}
                    <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10"></div>
                </div>
            </div>
        </section>
    );
}

export default ClientLabel