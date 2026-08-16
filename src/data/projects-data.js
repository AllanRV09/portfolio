import racsaProjectImage from "../assets/images/projects/racsa-elearning-platform.webp"
import portfolioProjectImage from "../assets/images/projects/allan-rodriguez-portfolio.webp"

export const PROJECTS = [
    {
        title: "Self-Managed E-Learning Platform",
        description: "Full-stack e-learning platform for RACSA built with Blazor, .NET Core 9, SQL Server and Tailwind CSS, including authentication, course management, reporting and audit modules.",
        technologies: [".NET Core", "Blazor", "SQL Server", "Tailwind"],
        image: racsaProjectImage,
        link: null
    },
    {
        title: "Allan Rodriguez Portfolio",
        description: "Personal portfolio built with React, Vite, Tailwind CSS and Framer Motion, featuring responsive editorial design, custom interactions, optimized media and a serverless contact flow.",
        technologies: ["React", "Vite", "Tailwind", "Motion"],
        image: portfolioProjectImage,
        imageContained: true,
        link: null
    },
]

export const PROJECTS_DATA = { index: "05", label: "Projects", title: "My work" }
