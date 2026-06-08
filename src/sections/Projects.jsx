import { ProjectItem } from "../components/ProjectItem";
import { SectionLayout } from "../components/SectionLayout";
import { SectionTitle } from "../components/SectionTitle";
import { PROJECTS, PROJECTS_DATA } from "../data";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function ProjectCTA() {
    return (
        <li className="list-none">
            <div className="flex flex-col items-center text-center py-16 border-t border-surface/10">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-text/30 mb-5">
                    next project?
                </p>

                <a
                    href="#contact"
                    className="group text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-6"
                >
                    <span className="text-surface/30">Yours could</span>
                    <br />
                    <span className="text-surface group-hover:text-accent transition-colors duration-300">
                        be the next one.
                    </span>
                </a>

                <p className="text-sm font-light tracking-wide text-text/40">
                    ↓ Tell me about your idea
                </p>
            </div>
        </li>
    );
}

export function Projects() {
    const { index, label, title } = PROJECTS_DATA;
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"],
});

const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    return (
        <motion.section
            ref={ref}
            id="projects"
            style={{ scale }}
            className="relative z-20 bg-background rounded-b-3xl py-24 md:py-32 scroll-mt-24 origin-bottom"
        >
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>
            </SectionLayout>

            <div className="flex flex-col w-full max-w-[76rem] mx-auto px-[clamp(1.25rem,4vw,2.5rem)]">
                <ul>
                    {PROJECTS.map((project) => (
                        <ProjectItem key={project.title} project={project} />
                    ))}
                    <ProjectCTA />
                </ul>
            </div>
        </motion.section>
    );
}