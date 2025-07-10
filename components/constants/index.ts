import {
    NavigationItem,
    PricingPlan,
} from "@/lib/types";
import { Client, SocialLink } from "@/lib/types";
import { Twitter, Linkedin, Github } from "lucide-react";

//============================Component Data==============================

export const clients: Client[] = [
    { name: 'Ephemeral', isActive: false },
    { name: 'Wilderafted', isActive: true },
    { name: 'Codecraft', isActive: false },
    { name: 'Convergence', isActive: true },
    { name: 'ImgCompress', isActive: true },
    { name: 'Epicurious', isActive: false },
    { name: 'Watchtower', isActive: true },
    { name: 'Renaissance', isActive: false },
    { name: 'ContrastAI', isActive: false },
    { name: 'Nietzsche', isActive: true },
];

export const footerLinks = {
    Product: ["Features", "Pricing", "API", "Integrations", "Security"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Documentation", "Help Center", "Community", "Status", "Changelog"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"]
};

export const builtWith = [
    "React", "TypeScript", "Tailwind CSS", "Stripe", "Vercel",
    "Supabase", "OpenAI", "Anthropic", "CertiK", "AWS"
];

export const socialLinks: SocialLink[] = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" }
];

export const navigation: NavigationItem[] = [
    { id: "0", title: "Features", url: "#features" },
    { id: "1", title: "Pricing", url: "#pricing" },
    { id: "2", title: "How to use", url: "#how-to-use" },
    { id: "3", title: "Roadmap", url: "#roadmap" },
    { id: "4", title: "Sign up", url: "#signup", onlyMobile: true },
    { id: "5", title: "Sign in", url: "#login", onlyMobile: true },
];

export const pricing: PricingPlan[] = [
    {
        id: "0",
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "0",
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
    {
        id: "1",
        title: "Premium",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        price: "9.99",
        features: [
            "An advanced AI chatbot that can understand complex queries",
            "An analytics dashboard to track your conversations",
            "Priority support to solve issues quickly",
        ],
    },
    {
        id: "2",
        title: "Enterprise",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: null,
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
];

