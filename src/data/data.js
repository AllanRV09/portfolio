export const NAV_LINKS = [
    { href: "services", name: "Services" },
    { href: "stack", name: "Stack" },
    { href: "about", name: "About" },
    { href: "experience", name: "Experience" },
    { href: "projects", name: "Projects" },
]

export const CONTACT_EMAIL = "allanrod0908@gmail.com";

export const SOCIAL_LINKS = [
    { href: "https://www.linkedin.com/in/allanrodriguezv", name: "LinkedIn" },
    { href: "https://github.com/AllanRV09", name: "GitHub" },
    { href: `mailto:${CONTACT_EMAIL}`, name: "Email" },
    { href: "https://www.instagram.com/allanrodv_", name: "Instagram" },
]

export const SERVICES_DATA = {
    index: "01",
    label: "Services",
    title: [
        "Interface + system.",
        "Built together.",
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
    index: "03", label: "About", title: "Who I am",
    paragraphs: [
        "I'm a full-stack developer who builds fast, scalable web applications with technologies like Next.js, TailwindCSS, .NET, and SQL. I enjoy working across the entire stack — from designing databases and APIs to crafting smooth, polished user interfaces.",
        "I like creating products that don't just work, but feel intuitive and well thought out. Performance, clean architecture, and attention to detail matter a lot to me, especially the small things users don't consciously notice but definitely feel.",
        "Most of the time, I'm building systems, refining UI interactions, or obsessing over spacing, animations, and responsiveness more than I probably should. But that's part of the fun."
    ]
}

export const ENTRY_DELAY = 0.1;

export const HERO_TIMING = {
    background: 0,
};

export const SERVICES = [
    {
        title: "Frontend Development",
        description:
            "Building responsive, accessible and interactive interfaces.",
    },
    {
        title: "Full-Stack Web Applications",
        description:
            "Connecting interfaces, APIs and databases into complete digital products.",
    },
    {
        title: "API & Backend Integration",
        description:
            "Developing APIs and data structures that keep applications connected.",
    },
];

export const STACK_ITEMS = ["React", "Tailwind CSS", "Framer Motion", "Lenis Scroll", "Figma"];
