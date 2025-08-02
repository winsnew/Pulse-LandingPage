import { TeamMembers, AboutStats, Achievement } from "@/lib/types";


export const teamMembers: TeamMembers[] = [
    {
        name: "Max Almudhafar",
        role: "Founder & CEO",
        image: "/assets/team-members/maxios.jpeg",
        bio: "Former Goldman Sachs AI researcher with 15+ years in fintech innovation."
    },
    {
        name: "Issac Joumessi",
        role: "CTO",
        image: "/assets/team-members/Issac_J.jpeg", 
        bio: "Ex-Google AI engineer specializing in real-time market prediction systems."
    },
    {
        name: "Yuvaraja Natarajan",
        role: "Software Developer",
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Cybersecurity veteran from Pentagon, specializing in financial data protection."
    },
    {
        name: "Tejinder Singh",
        role: "Software Developer",
        image: "/assets/team-members/tejinder.png",
        bio: "PhD in Machine Learning from MIT, pioneer in sentiment analysis algorithms."
    },
    {
        name: "Huy LE",
        role: "Software Developer",
        image: "/assets/team-members/huyle.jpg",
        bio: "10+ years at Microsoft Azure, expert in scalable AI infrastructure."
    },
    {
        name: "Shubham Saini",
        role: "Marketing Head",
        image: "/assets/team-members/Shub_Saini.jpg",
        bio: "Former Tesla product lead with expertise in user-centric AI interfaces."
    },
    {
        name: "Kyle Paul Lexis",
        role: "Community Lead",
        image: "/assets/team-members/Kyle-Paul.jpg",
        bio: "10+ years at Microsoft Azure, expert in scalable AI infrastructure."
    },
];

// export const sponsors = [
//     {
//         name: "Andreessen Horowitz",
//         logo: "https://images.pexels.com/photos/6913362/pexels-photo-6913362.jpeg?auto=compress&cs=tinysrgb&w=200",
//         tier: "Series A Lead"
//     },
//     {
//         name: "Sequoia Capital",
//         logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200",
//         tier: "Strategic Investor"
//     },
//     {
//         name: "Y Combinator",
//         logo: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=200",
//         tier: "Accelerator"
//     },
//     {
//         name: "Coinbase Ventures",
//         logo: "https://images.pexels.com/photos/8919564/pexels-photo-8919564.jpeg?auto=compress&cs=tinysrgb&w=200",
//         tier: "Strategic Partner"
//     }
// ];

export const stats: AboutStats[] = [
    { number: "500M+", label: "Data Points Analyzed Daily" },
    { number: "99.7%", label: "Prediction Accuracy" },
    // { number: "50K+", label: "Active Users" },
    { number: "24/7", label: "Market Monitoring" }
];

export const achievements: Achievement[] = [
    "AI-curated news from 50+ verified sources",
    "Real-time tracking of 10+ market influencers",
    "Smart Alerts for new listing and price movements"
];