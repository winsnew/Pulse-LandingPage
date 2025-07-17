import { LucideIcon } from "lucide-react";
import { JSX } from "react";

export interface NavigationItem {
    id: string;
    title: string;
    url: string;
    onlyMobile?: boolean;
}

export interface Client {
    name: string;
    isActive: boolean;
    logo?: string;
}

export interface SocialLink {
    name: string;
    icon: LucideIcon;
    href: string;
}

export type FeatureItem = {
    title: string;
    description: string;
    icon: () => JSX.Element;
};

export interface RoadmapItem {
    id: string;
    title: string;
    text: string;
    date: string;
    status: "done" | "progress";
    imageUrl: string;
    colorful?: boolean;
}

export interface CollabApp {
    id: string;
    title: string;
    icon: string;
    width: number;
    height: number;
}

export interface PricingPlan {
    id: string;
    title: string;
    description: string;
    monthlyPrice: string;
    annualPrice: string;
    features: string[];
}

export interface BenefitItem {
    id: string;
    title: string;
    text: string;
    backgroundUrl: string;
    iconUrl: string;
    imageUrl: string;
    light?: boolean;
}

export interface SocialItem {
    id: string;
    title: string;
    iconUrl: string;
    url: string;
}

export interface CollabContentItem {
    id: string;
    title: string;
    text?: string;
}
