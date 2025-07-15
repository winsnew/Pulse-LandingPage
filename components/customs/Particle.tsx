import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const getCenter = () => ({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        });

        let particles: Array<{
            angle: number;
            radiusVariation: number;
            size: number;
            speed: number;
            initialAngle: number;
        }> = [];

        const initParticles = () => {
            particles = [];

            for (let i = 0; i < 300; i++) {
                const angle = (i / 300) * Math.PI * 2;
                const radiusVariation = (Math.random() - 0.5) * 100;

                particles.push({
                    angle: angle,
                    radiusVariation,
                    size: Math.random() * 3 + 1,
                    speed: Math.random() * 0.02 + 0.01,
                    initialAngle: angle
                });
            }
        };

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            initParticles();
        };

        initParticles();
        window.addEventListener('resize', resizeCanvas);

        let time = 0;
        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            time += 0.01;

            const center = getCenter();
            const baseRadius = Math.min(window.innerWidth, window.innerHeight) * 0.3;

            particles.forEach((particle, index) => {
                particle.angle += particle.speed;
                const floatOffset = Math.sin(time + index * 0.1) * 20;
                const radius = baseRadius + particle.radiusVariation + floatOffset;

                const x = center.x + Math.cos(particle.angle) * radius;
                const y = center.y + Math.sin(particle.angle) * radius;
                const opacity = 0.3 + Math.sin(time * 2 + index * 0.1) * 0.4;

                ctx.beginPath();
                ctx.arc(x, y, particle.size, 0, Math.PI * 2);

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(138, 43, 226, ${opacity * 0.8})`);
                gradient.addColorStop(1, `rgba(75, 0, 130, ${opacity * 0.3})`);

                ctx.fillStyle = gradient;
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            style={{ background: 'transparent' }}
        />
    );
};

export default ParticleBackground;