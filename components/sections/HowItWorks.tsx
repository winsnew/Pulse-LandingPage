"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Cpu, Settings2 } from "lucide-react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Step {
    title: string;
    description: string;
    icon: JSX.Element;
    data: string;
    direction: "left" | "right";
    glowColor: string;
}

const steps: Step[] = [
    {
        title: "Gather",
        description: "AI scans influencers, tweets, and on-chain data to detect sentiment patterns.",
        icon: <Eye className="w-6 h-6 text-indigo-400" />,
        data: "Sentiment score · 72%",
        direction: "right",
        glowColor: "rgba(129,140,248,0.8)",
    },
    {
        title: "Analyze",
        description: "Behavioral models simulate asset paths and predict volatility trends.",
        icon: <Cpu className="w-6 h-6 text-blue-500" />,
        data: "Volatility index · 1.8 σ",
        direction: "left",
        glowColor: "rgba(96,165,250,0.8)",
    },
    {
        title: "Predict",
        description: "Trigger alerts and on-chain actions using AI-generated conditions.",
        icon: <Settings2 className="w-6 h-6 text-purple-500" />,
        data: "Alerts triggered · 120+",
        direction: "right",
        glowColor: "rgba(192,132,252,0.8)",
    },
];

const HowItWorksCircuitPrecise = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const pinWrapperRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
    const pathRefs = useRef<(SVGPathElement | null)[]>([]);
    const [pathDefs, setPathDefs] = useState<string[]>([]);

    useEffect(() => {
        const calculatePaths = () => {
            requestAnimationFrame(() => {
                const container = containerRef.current;
                if (!container) return;

                const getOffset = (el: HTMLElement, relativeTo: HTMLElement) => {
                    let x = 0, y = 0;
                    while (el && el !== relativeTo) {
                        x += el.offsetLeft;
                        y += el.offsetTop;
                        el = el.offsetParent as HTMLElement;
                    }
                    return { x, y };
                };

                const newPaths: string[] = [];

                for (let i = 0; i < steps.length - 1; i++) {
                    const from = iconRefs.current[i];
                    const to = iconRefs.current[i + 1];
                    if (!from || !to) continue;

                    const { x: startX, y: startY } = getOffset(from, container);
                    const { x: endX, y: endY } = getOffset(to, container);

                    const centerStartX = startX + from.offsetWidth / 2;
                    const centerStartY = startY + from.offsetHeight / 2;
                    const centerEndX = endX + to.offsetWidth / 2;
                    const centerEndY = endY + to.offsetHeight / 2;

                    let path = "";
                    if (window.innerWidth < 768) {
                        const curveOffsetX = 60;
                        const curveOffsetY = Math.abs(centerEndY - centerStartY) / 2;
                        const direction = centerEndX > centerStartX ? 1 : -1;
                        path = `M${centerStartX},${centerStartY} C${centerStartX + direction * curveOffsetX},${centerStartY + curveOffsetY} ${centerEndX - direction * curveOffsetX},${centerEndY - curveOffsetY} ${centerEndX},${centerEndY}`;
                    } else {
                        const midX = (centerStartX + centerEndX) / 2;
                        path = `M${centerStartX},${centerStartY} C${midX},${centerStartY} ${midX},${centerEndY} ${centerEndX},${centerEndY}`;
                    }

                    newPaths.push(path);
                }

                setPathDefs(newPaths);
            });
        };

        // Initial call
        calculatePaths();

        // Setup ResizeObserver
        const observer = new ResizeObserver(() => {
            calculatePaths();
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
            // Observe each icon
            iconRefs.current.forEach((el) => {
                if (el) observer.observe(el);
            });
        }

        // Cleanup
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (pathDefs.length === 0 || !pinWrapperRef.current || !containerRef.current) return;

        const container = containerRef.current;
        const stepsHeight = container.getBoundingClientRect().height;

        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        ScrollTrigger.create({
            trigger: pinWrapperRef.current,
            start: "top top",
            end: () => `+=${stepsHeight}`,
            pin: container,
            scrub: 0.8,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        });

        pathRefs.current.forEach((path, index) => {
            if (!path || index >= steps.length - 1) return;

            const length = path.getTotalLength();
            const startIcon = iconRefs.current[index];
            const endIcon = iconRefs.current[index + 1];
            if (!startIcon || !endIcon) return;

            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 1,
            });

            gsap.to(path, {
                strokeDashoffset: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: startIcon,
                    start: "top 90%",
                    end: "top 30%",
                    scrub: true,
                    markers: false,
                },
            });

            gsap.to(endIcon, {
                scale: 1.25,
                boxShadow: `0 0 24px ${steps[index + 1].glowColor}`,
                scrollTrigger: {
                    trigger: endIcon,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: true,
                },
            });
        });

        stepRefs.current.forEach((step, i) => {
            if (!step) return;

            gsap.fromTo(
                step,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                        end: "top 60%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        setTimeout(() => ScrollTrigger.refresh(), 50);

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, [pathDefs]);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-36 overflow-hidden bg-transparent"
            id="how-it-works"
        >
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6 md:mb-8">
                    How It Works
                </h2>
                <p className="text-center text-muted-foreground text-sm md:text-base mb-16 md:mb-24">
                    A smart AI circuit: scan data, model it, and execute your edge.
                </p>

                <div ref={pinWrapperRef} className="relative min-h-full">
                    <div className="relative" ref={containerRef}>
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none z-0"
                        >
                            {pathDefs.map((d, i) => (
                                <path
                                    key={i}
                                    ref={(el) => (pathRefs.current[i] = el)}
                                    d={d}
                                    stroke="#ffffff"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    className="glow-line"
                                />
                            ))}
                        </svg>

                        <div className="relative z-10 space-y-20 md:space-y-28">
                            {steps.map((step, i) => {
                                const isRight = step.direction === "right";

                                return (
                                    <div
                                        key={i}
                                        ref={(el) => (stepRefs.current[i] = el)}
                                        className={`flex flex-col md:flex-row ${isRight ? "md:flex-row" : "md:flex-row-reverse"
                                            } items-center justify-center gap-4 md:gap-6`}
                                    >
                                        <Tippy
                                            content={step.data}
                                            placement="top"
                                            theme="light"
                                            arrow={true}
                                            delay={[300, 0]}
                                            duration={100}
                                        >
                                            <motion.div
                                                ref={(el) => (iconRefs.current[i] = el)}
                                                className="p-4 rounded-full bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300"
                                                whileHover={{ scale: 1.2, rotate: 6 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                aria-label={step.title}
                                            >
                                                {step.icon}
                                            </motion.div>
                                        </Tippy>

                                        <div className="max-w-xs md:max-w-md text-center md:text-left">
                                            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksCircuitPrecise;
