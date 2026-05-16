import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiBlazor, SiDotnet, SiMongodb } from "react-icons/si";
import { DiMsqlServer, DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SectionTitle } from "../components/SectionTitle";
import { TechItem } from "../components/TechItem";

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

const STACK = [
    { title: "FRONTEND", techs: FRONTEND_TECHS },
    { title: "BACKEND", techs: BACKEND_TECHS },
    { title: "DATABASE", techs: DATABASE_TECHS },
    { title: "TOOLS", techs: TOOLS_TECHS },
]

export function TechStack() {
    return (
        <section className="mb-16">
            <SectionTitle>MY STACK</SectionTitle>

            {
                STACK.map(({ title, techs }) => (
                    <div key={title}>
                        <h3 className="mb-2 text-xl font-semibold">{title}</h3>

                        <div className="mb-8 flex flex-wrap gap-6">
                            {
                                techs.map((tech) => (
                                    <TechItem
                                        key={tech.name}
                                        name={tech.name}
                                        icon={tech.icon}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    )
}