import { TeamMembers, AboutStats, Achievement } from "@/lib/types";


export const teamMembers: TeamMembers[] = [
    {  
        id: "1",
        name: "Max Almudhafar",
        role: "Founder & CEO",
        image: "/assets/team-members/maxios.jpeg",
        bio: "10+ years Tech builder | 3X Founder | Visionary"
    },
    {
        id: "2",
        name: "Issac Joumessi",
        role: "CTO & Cybersecurity Expert",
        image: "/assets/team-members/IssacJoumessi.png", 
        bio: "5+ years Red Teamer | AI Engineer | Cybersecurity Mentor"
    },
    {
        id: "3",
        name: "Lane",
        role: "Senior Developer",
        image: "/assets/team-members/Lane.jpg",
        bio: "Ex Dell Engineer | Author of Dell NativeEdge Cloud | 3X Founder building Tech"
    },
    {
        id:"4",
        name: "Harshith Reddy",
        role: "AI Engineer",
        image: "/assets/team-members/harshith.jpg",
        bio: "INEX 2024 | Published ODL+ML=EWS  | Build IDS at International Expo"
    },
    {
        id: "5",
        name: "Tejinder Singh",
        role: "Software Developer",
        image: "/assets/team-members/tejinder.png",
        bio: "Full-Stack Developer | Front-End Engineer | UI-to-Code Specialist | Workflow Automation Developer "
    },
    {
        id: "6",
        name: "SOJO",
        role: "Fullstack Developer",
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Fullstack Web Developer | High Performance | Idea Based Imagined"
    },
    
    {
        id: "7",
        name: "Huy Le",
        role: "Software Developer",
        image: "/assets/team-members/huyle.jpg",
        bio: "Computer Science student who could wear multiple hats"
    },
    {
        id: "8",
        name: "Shubham Saini",
        role: "Marketing Head",
        image: "/assets/team-members/Shub_Saini.jpg",
        bio: "CUDA & Python Dev | 3D Animator | AI/Game Systems | Ex-indusBank Employee | Marketing Dev"
    },
    {
        id: "9",
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
    { number: 500, label: "Data Points Analyzed Daily", suffix: "M+" },

    { number: 99.7, label: "Prediction Accuracy", suffix: "%", decimals: 1},
    // { number: "50K+", label: "Active Users" },
    { number: 24, label: "Market Monitoring", suffix:"/7"}
];

export const achievements: Achievement[] = [
    "AI-curated news from 50+ verified sources",
    "Real-time tracking of 10+ market influencers",
    "Smart Alerts for new listing and price movements"
];