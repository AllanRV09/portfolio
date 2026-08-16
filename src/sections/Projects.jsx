import { ProjectItem } from "../components/ProjectItem";
import { SectionLayout } from "../components/SectionLayout";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCTA } from "../components/ProjectCTA";
import { PROJECTS, PROJECTS_DATA } from "../data/projects-data";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function Projects() {
    const { index, label, title } = PROJECTS_DATA;
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center center", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

    return (
        <motion.section
            ref={ref}
            id="projects"
            data-theme="dark"
            style={{ scale, y }}
            className="relative z-20 bg-background rounded-b-3xl py-24 md:py-32 scroll-mt-24 origin-bottom"
        >
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>
            </SectionLayout>

            <div className="container-main">
                <ul className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectItem
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                    <ProjectCTA />
                </ul>
            </div>
        </motion.section>
    );
}
