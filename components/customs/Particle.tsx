import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const particles: Array<{
            x: number;
            y: number;
            size: number;
            opacity: number;
            speed: number;
            angle: number;
            baseRadius: number;
            currentAngle: number;
        }> = [];

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const baseRadius = Math.min(canvas.width, canvas.height) * 0.3;

        for (let i = 0; i < 300; i++) {
            const angle = (i / 300) * Math.PI * 2;
            const radiusVariation = (Math.random() - 0.5) * 100;
            const radius = baseRadius + radiusVariation;

            particles.push({
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.8 + 0.2,
                speed: Math.random() * 0.02 + 0.01,
                angle: Math.random() * Math.PI * 2,
                baseRadius: radius,
                currentAngle: angle
            });
        }

        let animationId: number;
        let time = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            time += 0.01;

            particles.forEach((particle, index) => {
                particle.currentAngle += particle.speed;
                const floatOffset = Math.sin(time + index * 0.1) * 20;

                particle.x = centerX + Math.cos(particle.currentAngle) * (particle.baseRadius + floatOffset);
                particle.y = centerY + Math.sin(particle.currentAngle) * (particle.baseRadius + floatOffset);
                particle.opacity = 0.3 + Math.sin(time * 2 + index * 0.1) * 0.4;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
                gradient.addColorStop(0.5, `rgba(138, 43, 226, ${particle.opacity * 0.8})`);
                gradient.addColorStop(1, `rgba(75, 0, 130, ${particle.opacity * 0.3})`);

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
            className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
            style={{ background: 'transparent' }}
        />
    );
};

export default ParticleBackground;