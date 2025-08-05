"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    Microscope,
    Radar,
    Bot,
    Zap,
    Eye,
    Users,
    Target,
    Award,
    Lightbulb,
    TrendingUp,
    Shield,
    Globe,
    CheckCircle
} from "lucide-react";
import { teamMembers, achievements, stats } from "@/lib/constants/appdata";
import Link from "next/link";
import Image from 'next/image';
import Wave from "@/components/customs/WaveParticle";

export default function Tes() {
    return (
        <div className="min-h-screen inset-0 -z-10">
            <Wave />
        </div>
    );
}