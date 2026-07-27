import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { LuUser, LuBriefcaseBusiness, LuCodeXml, LuFolderCode, LuLayers } from "react-icons/lu";
import { MdEmail } from 'react-icons/md';

export const NAV_LINKS = [
    { href: "about", icon: LuUser, name: "About" },
    { href: "services", icon: LuCodeXml, name: "Services" },
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
    index: "03",
    label: "SERVICES",
    displayLabel: "Services",
    title: "FROM INTERFACE TO SYSTEM. EVERYTHING WORKS TOGETHER.",
    motionTitle: [
        "From interface to system.",
        "Everything works together.",
    ],
    description:
        "I build both the visible experience and the technical foundation behind it.",
    summary: {
        interface: {
            title: "Interface",
            description:
                "Responsive layouts, interaction, accessibility and visual consistency.",
        },
        system: {
            title: "System",
            description:
                "APIs, authentication, database and maintainable application logic.",
        },
    },
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
        title: "Frontend Development",
        description:
            "Building responsive, accessible and interactive interfaces.",
        features: [
            "Responsive Layouts",
            "Accessible Interfaces",
            "Interaction & Visual Consistency",
        ],
    },
    {
        title: "Full-Stack Web Applications",
        description:
            "Connecting interfaces, APIs and databases into complete digital products.",
        features: [
            "Frontend & Backend Integration",
            "APIs & Databases",
            "Complete Digital Products",
        ],
    },
    {
        title: "API & Backend Integration",
        description:
            "Developing APIs and data structures that keep applications connected.",
        features: [
            "REST APIs",
            "Authentication",
            "Data Structures & Application Logic",
        ],
    },
];

export const STACK_ITEMS = ["React", "Tailwind CSS", "Framer Motion", "Lenis Scroll", "Figma"];
