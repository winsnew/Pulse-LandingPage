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
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

        let particles: Array<{
            angle: number;
            radiusVariation: number;
            size: number;
            speed: number;
            initialAngle: number;
            scrollBurst: number;
            x: number;
            y: number;
        }> = [];

        let animationMode: 'hero' | 'about' | 'features' = 'hero';

        const getCenter = () => ({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        });

        const initParticles = () => {
            const center = getCenter();
            particles = [];
            for (let i = 0; i < 120; i++) {
                const angle = (i / 120) * Math.PI * 2;
                const radiusVariation = (Math.random() - 0.5) * 120;
                particles.push({
                    angle,
                    radiusVariation,
                    size: Math.random() * 4 + 2,
                    speed: Math.random() * 0.02 + 0.01,
                    initialAngle: angle,
                    scrollBurst: 0,
                    x: center.x,
                    y: center.y
                });
            }
        };

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            initParticles();
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const sectionOffsets = {
            hero: 0,
            about: 0,
            features: 0,
        };

        const updateSectionOffsets = () => {
            sectionOffsets.hero = document.getElementById('hero')?.offsetTop || 0;
            sectionOffsets.about = document.getElementById('about')?.offsetTop || 600;
            sectionOffsets.features = document.getElementById('features')?.offsetTop || 1200;
        };

        updateSectionOffsets();
        window.addEventListener('resize', updateSectionOffsets);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < sectionOffsets.about - 100) {
                animationMode = 'hero';
            } else if (scrollY < sectionOffsets.features - 100) {
                animationMode = 'about';
            } else {
                animationMode = 'features';
            }
        };

        window.addEventListener('scroll', handleScroll);

        let time = 0;
        let animationId: number;
        let lastFrame = 0;
        const fps = 60;
        const interval = 1000 / fps;

        const gradientCache = new Map<number, CanvasGradient>();

        const animate = (timestamp: number) => {
            if (timestamp - lastFrame < interval) {
                animationId = requestAnimationFrame(animate);
                return;
            }
            lastFrame = timestamp;

            ctx.clearRect(0, 0, width, height);
            time += 0.01;

            const center = getCenter();
            const baseRadius = Math.min(width, height) * 0.3;

            particles.forEach((particle, index) => {
                particle.angle += particle.speed;

                if (animationMode === 'hero') {
                    const floatOffset = Math.sin(time + index * 0.1) * 20;
                    const radius = baseRadius + particle.radiusVariation + floatOffset + particle.scrollBurst;
                    if (particle.scrollBurst > 0) particle.scrollBurst *= 0.9;

                    particle.x = center.x + Math.cos(particle.angle) * radius;
                    particle.y = center.y + Math.sin(particle.angle) * radius;

                } else if (animationMode === 'about') {
                    particle.y += Math.sin(time + index) * 0.5 + 1.2;
                    particle.x += Math.cos(time * 0.5 + index * 0.05) * 0.5;
                    if (particle.y > height + 20) {
                        particle.y = -20;
                        particle.x = Math.random() * width;
                    }

                } else if (animationMode === 'features') {
                    const spiralSpeed = 1.2;
                    particle.x += Math.cos(particle.angle) * spiralSpeed;
                    particle.y += Math.sin(particle.angle) * spiralSpeed;
                    if (
                        particle.x < -100 || particle.x > width + 100 ||
                        particle.y < -100 || particle.y > height + 100
                    ) {
                        particle.x = center.x;
                        particle.y = center.y;
                        particle.angle = Math.random() * Math.PI * 2;
                    }
                }

                const opacity = 0.6 + Math.sin(time * 2 + index * 0.1) * 0.4;
                ctx.shadowBlur = 5;
                ctx.shadowColor = `rgba(255, 255, 255, ${opacity})`;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

                const gradientKey = Math.round(particle.size * 2 * 10);
                let gradient = gradientCache.get(gradientKey);
                if (!gradient) {
                    gradient = ctx.createRadialGradient(
                        particle.x, particle.y, 0,
                        particle.x, particle.y, particle.size * 2
                    );
                    gradient.addColorStop(0, `rgba(255, 255, 255,  ${opacity})`);
                    gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.9})`);
                    gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity * 0.4})`);
                    gradientCache.set(gradientKey, gradient);
                }

                ctx.fillStyle = gradient;
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('scroll', handleScroll);
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
