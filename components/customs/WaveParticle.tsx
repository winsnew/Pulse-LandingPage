"use client";

import { useEffect, useRef } from "react";

const Wave = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = 200;
        canvas.width = width;
        canvas.height = height;

        interface Particle {
            x: number;
            y: number;
            radius: number;
            speed: number;
            amplitude: number;
        }

        const particles: Particle[] = [];
        const particleCount = 120;

        for (let i = 0; i < particleCount; i++) {
            const x = (i / particleCount) * width;
            const y = height / 2;
            const radius = Math.random() * 2 + 1.5;
            const speed = Math.random() * 0.03 + 0.02;
            const amplitude = Math.random() * 15 + 10;
            particles.push({ x, y, radius, speed, amplitude });
        }

        let step = 0;

        const draw = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            step += 1;
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const offset = Math.sin(step * p.speed + p.x * 0.01) * p.amplitude;

                ctx.beginPath();
                ctx.arc(p.x, p.y + offset, p.radius, 0, Math.PI * 2);

                // Glow Effect
                ctx.shadowBlur = 20;
                ctx.shadowColor = "#00ffff";
                ctx.fillStyle = "#ffffff";
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = window.innerWidth;
            canvas.width = width;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0">
            <canvas ref={canvasRef} className="w-full h-[200px]" />
        </div>
    );
};

export default Wave;
