import { FaDatabase } from "react-icons/fa6"
import {
    SiBlazor,
    SiDotnet,
    SiFramer,
    SiGit,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

const FRONTEND_TECHS = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
    { name: "Blazor", icon: SiBlazor },
]

const BACKEND_TECHS = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: ".NET Core", icon: SiDotnet },
]

const DATABASE_TECHS = [
    { name: "SQL Server", icon: FaDatabase },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
]

const TOOLS_TECHS = [
    { name: "Git", icon: SiGit },
    { name: "VS Code", icon: VscVscode },
]

export const STACK = [
    {
        id: "01",
        displayTitle: "Frontend",
        category: "UI system",
        meta: [
            "Client-side · UI development",
            "Interfaces · responsive · interaction",
        ],
        techs: FRONTEND_TECHS,
    },
    {
        id: "02",
        displayTitle: "Backend",
        category: "Application layer",
        meta: [
            "Server-side · application logic",
            "REST APIs · authentication · business logic",
        ],
        techs: BACKEND_TECHS,
    },
    {
        id: "03",
        displayTitle: "Database",
        category: "Data layer",
        meta: ["Data layer · persistence", "Relational · document · data modeling"],
        techs: DATABASE_TECHS,
    },
    {
        id: "04",
        displayTitle: "Tools",
        category: "Workflow",
        meta: [
            "Development · workflow",
            "Version control · editor · API testing",
        ],
        techs: TOOLS_TECHS,
    },
]

export const STACK_DATA = {
    index: "02",
    label: "Stack",
    title: ["Selected tools.", "Built to scale."],
    description:
        "A focused toolkit for building interfaces, APIs, databases and complete web applications.",
}
