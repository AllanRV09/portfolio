import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaGitAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiBlazor, SiDotnet, SiMongodb } from "react-icons/si";
import { DiMsqlServer, DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { LuUser, LuBriefcaseBusiness, LuCodeXml, LuFolderCode } from "react-icons/lu";
import { MdEmail } from 'react-icons/md';

export const NAV_LINKS = [
    { href: "about", icon: LuUser, name: "About" },
    { href: "experience", icon: LuBriefcaseBusiness, name: "Experience" },
    { href: "mystack", icon: LuCodeXml, name: "My Stack" },
    { href: "projects", icon: LuFolderCode, name: "Projects" },
]

export const SOCIAL_LINKS = [
    { href: "https://linkedin.com/in/allan-rodríguez", icon: FaLinkedin, name: "LinkedIn" },
    { href: "https://github.com/TU_USUARIO", icon: FaGithub, name: "GitHub" },
    { href: "https://instagram.com/TU_USUARIO", icon: FaInstagram, name: "Instagram" },
    { href: "mailto:allanrod0908@gmail.com", icon: MdEmail, name: "Gmail" },
]

export const PROJECTS = [
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Praesent et leo vel ante imperdiet eleifend. Duis luctus nisl id dolor eleifend, in lobortis justo convallis. Vivamus viverra erat ut placerat ornare. Phasellus finibus nunc sed enim faucibus semper. Nulla fermentum, turpis nec sagittis ullamcorper, augue nisl faucibus elit, id luctus nisi lacus sed tellus. Etiam sodales efficitur justo nec volutpat. Nulla lorem mi, dictum quis porttitor a, sollicitudin sed urna. Etiam vehicula eros a pulvinar accumsan.",
        image: "https://picsum.photos/300/200",
        link: "#"
    },
    {
        title: "Lorem",
        description: "Praesent et leo vel ante imperdiet eleifend. Duis luctus nisl id dolor eleifend, in lobortis justo convallis. Vivamus viverra erat ut placerat ornare. Phasellus finibus nunc sed enim faucibus semper. Nulla fermentum, turpis nec sagittis ullamcorper, augue nisl faucibus elit, id luctus nisi lacus sed tellus. Etiam sodales efficitur justo nec volutpat. Nulla lorem mi, dictum quis porttitor a, sollicitudin sed urna. Etiam vehicula eros a pulvinar accumsan.",
        image: "https://picsum.photos/300/200",
        link: "#"
    },
]

export const EXPERIENCES = [
    {
        year: "2025 — PRESENT",
        title: "Full-Stack Developer – Professional Internship • RACSA",
        description: "Full-stack development of a self-managed e-learning platform using Blazor, .NET Core 9, SQL Server and Tailwind CSS, including database design, backend and frontend. Implementation of a user, course and enrollment management system with role-based access control. Development of an administrative reporting module and audit system. Design and implementation of a complete authentication flow with email verification and credential recovery. The project was adopted as the technological base for a solution launched to the Costa Rican market.",
        tags: [
            "Blazor",
            ".Net Core",
            "Tailwind CSS",
        ]
    },
    {
        year: "2025 — PRESENT",
        title: "Full-Stack – Professional Internship • RACSA",
        description: "Full-stack development of a self-managed e-learning platform using Blazor, .NET Core 9, SQL Server and Tailwind CSS, including database design, backend and frontend. Implementation of a user, course and enrollment management system with role-based access control. Development of an administrative reporting module and audit system. Design and implementation of a complete authentication flow with email verification and credential recovery. The project was adopted as the technological base for a solution launched to the Costa Rican market.",
        tags: [
            "Blazor",
            ".Net Core",
            "Tailwind CSS",
        ]
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
];

export const STACK = [
    { title: "FRONTEND", techs: FRONTEND_TECHS },
    { title: "BACKEND", techs: BACKEND_TECHS },
    { title: "DATABASE", techs: DATABASE_TECHS },
    { title: "TOOLS", techs: TOOLS_TECHS },
]
export const ENTRY_DELAY = 2.2;