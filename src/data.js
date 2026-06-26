import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaGitAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiBlazor, SiDotnet, SiMongodb } from "react-icons/si";
import { DiMsqlServer, DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { LuUser, LuBriefcaseBusiness, LuCodeXml, LuFolderCode, LuLayers } from "react-icons/lu";
import { MdEmail } from 'react-icons/md';
import { VscVscode } from "react-icons/vsc";
import racsaProjectImage from "./assets/images/projects/racsa-elearning-platform.webp"

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

export const PROJECTS = [
    {
        title: "Self-Managed E-Learning Platform",
        description: "Full-stack development of a self-managed e-learning platform for RACSA using Blazor, .NET Core 9, SQL Server and Tailwind CSS, including database modeling, backend APIs and frontend interfaces. Implemented authentication and authorization flows with role-based access control, email verification and credential recovery, alongside user, course and enrollment management, reporting and audit modules. The platform was later adopted as the technological foundation for a solution launched to the Costa Rican market.",
        image: racsaProjectImage,
        link: "#projects"
    },
]

export const EXPERIENCES = [
    {
        year: "2025 — PRESENT",
        role: "Full-Stack Developer",
        type: "Professional Internship",
        company: "RACSA",
        description: "Developed and launched a self-managed e-learning platform with authentication, RBAC, reporting and audit systems for a solution later adopted for the Costa Rican market.",
        tags: ["Blazor", ".NET Core", "SQL Server", "Tailwind CSS"]
    },
]

const FRONTEND_TECHS = [
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "React", icon: FaReact },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "Framer Motion", icon: TbBrandFramerMotion },
    { name: "Blazor", icon: SiBlazor },
];

const BACKEND_TECHS = [
    { name: ".Net Core", icon: SiDotnet },
    { name: "Node.js", icon: FaNodeJs },
]

const DATABASE_TECHS = [
    { name: "SQL Server", icon: DiMsqlServer },
    { name: "PostgreSQL", icon: DiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: GrMysql },
]

const TOOLS_TECHS = [
    { name: "Git", icon: FaGitAlt },
    { name: "VS Code", icon: VscVscode }, // de react-icons/vsc
];

export const STACK = [
    { title: "FRONTEND", techs: FRONTEND_TECHS },
    { title: "BACKEND", techs: BACKEND_TECHS },
    { title: "DATABASE", techs: DATABASE_TECHS },
    { title: "TOOLS", techs: TOOLS_TECHS },
]

export const SERVICES_DATA = {
    index: "01",
    label: "SERVICES",
    title: "WHAT I DO",
    description: "I focus on building modern, high-performance applications using a curated set of tools. My approach is centered on clean code, scalability, and creating seamless user experiences across the entire development lifecycle."
}

export const ABOUT_DATA = {
    index: "02",
    label: "ABOUT",
    title: "WHO I AM",
    paragraphs: [
        "I’m a full-stack developer who builds fast, scalable web applications with technologies like Next.js, TailwindCSS, .NET, and SQL. I enjoy working across the entire stack — from designing databases and APIs to crafting smooth, polished user interfaces.",
        "I like creating products that don’t just work, but feel intuitive and well thought out. Performance, clean architecture, and attention to detail matter a lot to me, especially the small things users don’t consciously notice but definitely feel.",
        "Most of the time, I’m building systems, refining UI interactions, or obsessing over spacing, animations, and responsiveness more than I probably should. But that’s part of the fun."
    ]
}

export const STACK_DATA = {
    index: "03",
    label: "STACK",
    title: "TOOLS I USE",
    description: "I focus on building modern, high-performance applications using a curated set of tools. My approach is centered on clean code, scalability, and creating seamless user experiences across the entire development lifecycle."
}

export const EXPERIENCE_DATA = {
    index: "04",
    label: "EXPERIENCE",
    title: "MY JOURNEY",
}

export const PROJECTS_DATA = {
    index: "05",
    label: "PROJECTS",
    title: "MY WORK",
}

export const ENTRY_DELAY = 2.2;

export const ROW_DEFS = [
    { words: ['Built', 'Shipped', 'Scaled', 'Deployed', 'Launched', 'Owned', 'Engineered', 'Automated', 'Crafted', 'Delivered'], size: 28, height: 52, opacity: [0.5, 0.14], dir: 1, speed: 0.28, weight: 800, upper: true },
    { words: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Vite', 'Zustand', 'Framer Motion', 'React Query', 'tRPC', 'Radix UI'], size: 11, height: 34, opacity: [0.22, 0.08], dir: -1, speed: 0.38, weight: 500, upper: true },
    { words: ['Architected', 'Refactored', 'Debugged', 'Optimized', 'Integrated', 'Migrated', 'Documented', 'Reviewed', 'Profiled', 'Tested'], size: 18, height: 44, opacity: [0.38, 0.11], dir: 1, speed: 0.3, weight: 600, upper: false },
    { words: ['Node.js', 'PostgreSQL', 'Docker', 'Redis', 'AWS', 'Nginx', 'CI/CD', 'Vercel', 'Prisma', 'GraphQL'], size: 11, height: 32, opacity: [0.18, 0.07], dir: -1, speed: 0.44, weight: 500, upper: true },
    { words: ['Led', 'Mentored', 'Collaborated', 'Planned', 'Designed', 'Iterated', 'Shipped', 'Presented', 'Contributed', 'Solved'], size: 22, height: 48, opacity: [0.42, 0.1], dir: 1, speed: 0.22, weight: 700, upper: true },
    { words: ['SOLID', 'Clean Code', 'TDD', 'API Design', 'Code Review', 'DRY', 'KISS', 'Git Flow', 'Microservices', 'REST'], size: 10, height: 30, opacity: [0.16, 0.06], dir: -1, speed: 0.48, weight: 500, upper: true },
    { words: ['Planned', 'Estimated', 'Groomed', 'Deployed', 'Monitored', 'Debugged', 'Released', 'Hotfixed', 'Rollbacked', 'Merged'], size: 15, height: 40, opacity: [0.3, 0.09], dir: 1, speed: 0.34, weight: 600, upper: false },
];

export const SERVICES = [
    {
        title: "Full-Stack Development",
        description: "I build web applications end-to-end, connecting interfaces, APIs, and databases into systems that actually feel complete. I enjoy shaping how data flows through an app just as much as how it looks on screen, making sure everything works as one solid product.",
        features: [
            "React, Node.js, .NET Core, Express.js",
            "REST APIs, SQL Server, PostgreSQL, MongoDB",
            "Git, GitHub, Postman",
            "Authentication, Roles & Database Design"
        ]
    },
    {
        title: "Frontend Development",
        description: "I turn interfaces into interactive experiences that feel intentional, not just functional. I care about how every detail behaves on different devices, making sure layouts, animations, and interactions feel natural, consistent, and fast.",
        features: [
            "NextJs, TailwindCSS",
            "Figma",
            "HTML, CSS, JavaScript",
            "Accessible & Optimized Interfaces"
        ]
    }
];