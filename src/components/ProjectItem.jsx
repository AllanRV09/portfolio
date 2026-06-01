import { GoArrowUpRight } from "react-icons/go";

export function ProjectItem({ project }) {
    const words = project.title.split(" ");

    const lastWord = words.pop();

    const remainingTitle = words.join(" ");

    return (
        <li className="mb-16 grid gap-6 sm:grid-cols-8 sm:gap-8">
            <div className="sm:order-2 sm:col-span-6">
                <a href={project.link} className="inline text-2xl font-medium group">
                    {words.length > 0 && remainingTitle + " "}
                    <span className="whitespace-nowrap">
                        {lastWord}
                        <GoArrowUpRight className="inline-block ml-1 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                </a>

                <p className="my-4 font-light text-lg tracking-wide leading-relaxed max-w-3xl text-text/70 hover:text-text/90 transition-colors duration-300">
                    {project.description}
                </p>
            </div>
            <div className="w-48 sm:w-full sm:order-1 sm:col-span-2">
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
            </div>
        </li>
    )
}