import { TeamMembers, AboutStats, Achievement } from "@/lib/types";

export const teamMembers: TeamMembers[] = [
    {
        name: "Dr. Sarah Chen",
        role: "CEO & Co-Founder",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Former Goldman Sachs AI researcher with 15+ years in fintech innovation."
    },
    {
        name: "Marcus Rodriguez",
        role: "CTO & Co-Founder",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Ex-Google AI engineer specializing in real-time market prediction systems."
    },
    {
        name: "Dr. Priya Patel",
        role: "Head of AI Research",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "PhD in Machine Learning from MIT, pioneer in sentiment analysis algorithms."
    },
    {
        name: "James Liu",
        role: "Head of Product",
        image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Former Tesla product lead with expertise in user-centric AI interfaces."
    },
    {
        name: "Emily Watson",
        role: "VP of Engineering",
        image: "https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "10+ years at Microsoft Azure, expert in scalable AI infrastructure."
    },
    {
        name: "David Kim",
        role: "Head of Security",
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Cybersecurity veteran from Pentagon, specializing in financial data protection."
    }
];

export const sponsors = [
    {
        name: "Andreessen Horowitz",
        logo: "https://images.pexels.com/photos/6913362/pexels-photo-6913362.jpeg?auto=compress&cs=tinysrgb&w=200",
        tier: "Series A Lead"
    },
    {
        name: "Sequoia Capital",
        logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200",
        tier: "Strategic Investor"
    },
    {
        name: "Y Combinator",
        logo: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=200",
        tier: "Accelerator"
    },
    {
        name: "Coinbase Ventures",
        logo: "https://images.pexels.com/photos/8919564/pexels-photo-8919564.jpeg?auto=compress&cs=tinysrgb&w=200",
        tier: "Strategic Partner"
    }
];

export const stats: AboutStats[] = [
    { number: "500M+", label: "Data Points Analyzed Daily" },
    { number: "99.7%", label: "Prediction Accuracy" },
    { number: "50K+", label: "Active Users" },
    { number: "24/7", label: "Market Monitoring" }
];

export const achievements: Achievement[] = [
    "Winner - TechCrunch Disrupt 2024",
    "Best AI Innovation - FinTech Awards 2024",
    "Top 10 Startups - Forbes 30 Under 30",
    "Excellence in AI - MIT Technology Review"
];