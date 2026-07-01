import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { LuUser, LuBriefcaseBusiness, LuCodeXml, LuFolderCode, LuLayers } from "react-icons/lu";
import { MdEmail } from 'react-icons/md';

export const NAV_LINKS = [
    { href: "services", icon: LuCodeXml, name: "Services" },
    { href: "about", icon: LuUser, name: "About" },
    { href: "stack", icon: LuLayers, name: "Stack" },
    { href: "experience", icon: LuBriefcaseBusiness, name: "Experience" },
    { href: "projects", icon: LuFolderCode, name: "Projects" },
]

export const SOCIAL_LINKS = [
    { href: "https://www.linkedin.com/in/allanrodriguezv", icon: FaLinkedin, name: "LinkedIn" },
    { href: "https://github.com/AllanRV09", icon: FaGithub, name: "GitHub" },
    { href: "mailto:allanrod0908@gmail.com", icon: MdEmail, name: "Email" },
    { href: "https://www.instagram.com/allanrodv_", icon: FaInstagram, name: "Instagram" },
]

export const SERVICES_DATA = {
    index: "01", label: "SERVICES", title: "WHAT I DO",
    description: "I build modern, high-performance web applications with a focus on clean architecture, scalability, and seamless user experiences. Working across the entire stack, I deliver solutions that are reliable, maintainable, and built to last."
}

export const ABOUT_DATA = {
    index: "02", label: "ABOUT", title: "WHO I AM",
    paragraphs: [
        "I'm a full-stack developer who builds fast, scalable web applications with technologies like Next.js, TailwindCSS, .NET, and SQL. I enjoy working across the entire stack — from designing databases and APIs to crafting smooth, polished user interfaces.",
        "I like creating products that don't just work, but feel intuitive and well thought out. Performance, clean architecture, and attention to detail matter a lot to me, especially the small things users don't consciously notice but definitely feel.",
        "Most of the time, I'm building systems, refining UI interactions, or obsessing over spacing, animations, and responsiveness more than I probably should. But that's part of the fun."
    ]
}

export const ENTRY_DELAY = 0.1;

export const HERO_TIMING = {
    background: 0, nav: 0.02, badge: 0.05, title: 0.12, globe: 0, status: 0.3, description: 0.35, socials: 0.45,
};

export const EASE_OUT = [0.33, 1, 0.68, 1];

export const SERVICES = [
    {
        title: "Full-Stack Development",
        description: "I build web applications end-to-end, connecting interfaces, APIs, and databases into systems that actually feel complete. I enjoy shaping how data flows through an app just as much as how it looks on screen, making sure everything works as one solid product.",
        features: ["React, Node.js, .NET Core, Express.js", "REST APIs, SQL Server, PostgreSQL, MongoDB", "Git, GitHub, Postman", "Authentication, Roles & Database Design"]
    },
    {
        title: "Frontend Development",
        description: "I turn interfaces into interactive experiences that feel intentional, not just functional. I care about how every detail behaves on different devices, making sure layouts, animations, and interactions feel natural, consistent, and fast.",
        features: ["NextJs, TailwindCSS", "Figma", "HTML, CSS, JavaScript", "Accessible & Optimized Interfaces"]
    }
];

export const STACK_ITEMS = ["React", "Tailwind CSS", "Framer Motion", "Lenis Scroll", "Figma"];