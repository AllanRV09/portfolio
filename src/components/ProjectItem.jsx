import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { SectionDescription } from "./SectionDescription";

export function ProjectItem({ project }) {
    const words = project.title.split(" ");
    const lastWord = words.pop();
    const remainingTitle = words.join(" ");

    return (
        <motion.li
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="my-8 grid gap-6 sm:grid-cols-8 sm:gap-8"
        >
            <div className="sm:order-2 sm:col-span-6">
                <a href={project.link} className="type-item-title group uppercase text-surface">
                    {words.length > 0 && remainingTitle + " "}
                    <span className="whitespace-nowrap">
                        {lastWord}
                        <GoArrowUpRight className="inline-block ml-1 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                </a>

                <SectionDescription
                    delay={0.15}
                    amount={0.15}
                    className="type-editorial-copy mb-8 mt-6"
                >
                    {project.description}
                </SectionDescription>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.15 }}
                className="w-48 sm:w-full sm:order-1 sm:col-span-2"
            >
                <div className="aspect-video rounded border-2 border-surface/15 overflow-hidden">
                    <img
                        loading="lazy"
                        width="300"
                        height="200"
                        src={project.image}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        alt={`Screenshot of ${project.title}`}
                    />
                </div>
            </motion.div>
        </motion.li>
    );
}
