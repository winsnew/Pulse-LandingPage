"use client"

import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll';
import ParticleBackground from './Particle';

interface ScrollRevealWrapperProps {
    children: React.ReactNode;
}

const ScrollRevealWrapper: React.FC<ScrollRevealWrapperProps> = ({ children }) => {
    useScrollReveal();

    return (
        <>
            <ParticleBackground />
            {children}
        </>
    );
};

export default ScrollRevealWrapper;