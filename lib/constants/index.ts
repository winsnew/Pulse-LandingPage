import {
    NavigationItem,
    PricingPlan,
} from "@/lib/types";
import { Client, SocialLink } from "@/lib/types";
import {
    Twitter,
    Linkedin,
    Facebook,
} from "lucide-react";

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

export const companies = [
    { name: "Stripe", logo: "/tinyLogos/stripe.png" },
    { name: "OpenAI", logo: "/tinyLogos/openai.png" },
    { name: "Vercel", logo: "/tinyLogos/vercel.png" },
    { name: "Supabase", logo: "/tinyLogos/supabase.png" },
    { name: "Google", logo: "/tinyLogos/google.png" },
    { name: "Meta", logo: "/tinyLogos/meta.png" },
    { name: "Tesla", logo: "/tinyLogos/tesla.png" },
    { name: "Certik", logo: "/tinyLogos/certik.png" },
];

export const footerLinks = {
    Product: [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/#pricing" },
        { name: "API", href: "/api" },
        { name: "Integrations", href: "/integrations" },
        { name: "Security", href: "/security" },
    ],
    Company: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
    ],
    Resources: [
        { name: "Documentation", href: "/documentation" },
        { name: "Help Center", href: "/help-center" },
        { name: "Community", href: "/community" },
    ],
    Legal: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Cookie Policy", href: "/cookie-policy" },
    ],
};

export const builtWith = [
    "React", "TypeScript", "Tailwind CSS", "Stripe", "Vercel",
    "Supabase", "OpenAI", "Anthropic", "CertiK", "AWS"
];

export const socialLinks: SocialLink[] = [
    { name: "Twitter", icon: Twitter, href: "https://x.com/Pulse_Platform1?t=rEq9QXsUDQaQK6d1J6EAUg&s=09" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/pulse-platform/" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61574756803349" }
];

export const navigation: NavigationItem[] = [
    { id: "0", title: "About", url: "about" },
    { id: "1", title: "Features", url: "/#features" },
    { id: "2", title: "How to use", url: "/#how-it-works" },
    { id: "3", title: "Pricing", url: "/#pricing" },
    { id: "4", title: "Sign up", url: "/signup", onlyMobile: true },
    { id: "5", title: "Sign in", url: "/login", onlyMobile: true },
];

export const faqs = [
    {
        question: "What is Pulse and how can it help my business?",
        answer:
            "Pulse is an intelligent analytics platform that helps businesses gain real-time insights, automate workflows, and scale efficiently with AI-powered tools.",
    },
    {
        question: "Do I need to install any software?",
        answer:
            "No, Pulse is 100% web-based. You can access it anytime, anywhere from your browser.",
    },
    {
        question: "Is there a free trial available?",
        answer:
            "Yes! We offer a 14-day free trial with no credit card required. Cancel anytime.",
    },
    {
        question: "Can I integrate Pulse with my current tools?",
        answer:
            "Absolutely. Pulse supports integrations with tools like Slack, Notion, GitHub, and many more via API and native connectors.",
    },
];

export const pricing: PricingPlan[] = [
    {
        id: "0",
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        monthlyPrice: "0",
        annualPrice: "0",
        features: [
            "Limited Access to Influencer Intel",
            "Basic Assets Radar with standard analysis",
            "Up to 5 active SmartAlerts",
            "Basic MarketView AI indicators",
            "General news headlines in NewsPulse"
        ],
    },
    {
        id: "1",
        title: "Premium",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        monthlyPrice: "29",
        annualPrice: "280",
        features: [
            "Full access to all 10 monitored influencers",
            "Advanced Assets Radar with detailed analysis",
            "Complete NewsPulse with priority alerts",
            "Unlimited SmartAlerts with advanced conditions",
            "Full MarketView AI with predictive indicators",
        ],
    },
    // {
    //     id: "2",
    //     title: "Advanced",
    //     description: "Custom AI chatbot, advanced analytics, dedicated account",
    //     monthlyPrice: "39",
    //     annualPrice: "100",
    //     features: [
    //         "Coming Soon",
    //     ],
    // },
];