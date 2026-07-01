import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiBlazor, SiDotnet, SiMongodb } from "react-icons/si";
import { DiMsqlServer, DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

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
    { name: "VS Code", icon: VscVscode },
];

export const STACK = [
    { title: "FRONTEND", techs: FRONTEND_TECHS },
    { title: "BACKEND", techs: BACKEND_TECHS },
    { title: "DATABASE", techs: DATABASE_TECHS },
    { title: "TOOLS", techs: TOOLS_TECHS },
]

export const STACK_DATA = {
    index: "03", label: "STACK", title: "TOOLS I USE",
    description: "My toolkit is built around technologies I trust to develop modern web applications. Each one has been carefully chosen to help me create fast, scalable, and maintainable solutions while keeping the development process efficient."
}