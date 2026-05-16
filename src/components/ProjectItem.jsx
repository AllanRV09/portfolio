import { GoArrowUpRight } from "react-icons/go";

export function ProjectItem({ project }) {
    const words = project.title.split(" ");

    const lastWord = words.pop();

    const remainingTitle = words.join(" ");

    return (
        <div className="mb-16">
            <a href={project.link} className="inline text-lg font-medium group">
                {words.length > 0 && remainingTitle + " "}
                <span className="whitespace-nowrap">
                    {lastWord}
                    <GoArrowUpRight className="inline-block ml-1 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
            </a>

            <p className="my-4 text-sm font-light tracking-wide leading-6">
                {project.description}
            </p>
            <div className="w-48 aspect-video rounded border-2 border-surface/15 overflow-hidden">
                <img
                    src={project.image}
                    className="w-full h-full object-cover"
                    alt="Random"
                />
            </div>
        </div>
    )
}