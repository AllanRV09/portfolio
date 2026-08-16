import { GoArrowUpRight } from "react-icons/go";

const PROJECT_IMAGE_SIZES = [
    "(min-width: 1216px) 552px",
    "(min-width: 1024px) calc((100vw - 7rem) / 2)",
    "calc(100vw - clamp(2.5rem, 8vw, 5rem))",
].join(", ");

export function ProjectItem({ project, index }) {
    const CardElement = project.link ? "a" : "article";

    return (
        <li className="list-none">
            <CardElement
                {...(project.link
                    ? {
                          href: project.link,
                          "aria-label": `View ${project.title}`,
                      }
                    : {})}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface/10 bg-[#151515]"
            >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                        loading="lazy"
                        width="1024"
                        height="768"
                        src={project.image}
                        srcSet={project.imageSrcSet}
                        sizes={PROJECT_IMAGE_SIZES}
                        className="block h-full w-full object-cover"
                        alt={`Screenshot of ${project.title}`}
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-[#151515]"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#151515]"
                    />

                    <div className="absolute left-0 top-0 p-4 sm:p-6">
                        <span className="rounded-full border border-surface/25 bg-background/75 px-3 py-1.5 font-mono text-xs text-surface backdrop-blur-sm">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 px-6 pt-5 sm:absolute sm:right-6 sm:top-6 sm:z-10 sm:max-w-[calc(100%-7rem)] sm:justify-end sm:p-0">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-surface/25 bg-background/75 px-3 py-1.5 text-xs text-surface backdrop-blur-sm sm:text-sm"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="relative flex flex-1 flex-col bg-[#151515] px-6 pb-7 pt-2 sm:px-8 sm:pb-8">
                    <h3 className="text-3xl font-semibold leading-[0.95] tracking-[-0.045em] text-surface sm:text-4xl">
                        {project.title}
                    </h3>

                    <div className="mt-5 flex flex-1 items-end gap-5">
                        <p className="flex-1 text-base leading-relaxed text-text sm:text-lg">
                            {project.description}
                        </p>

                        {project.link && (
                            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-background sm:size-14">
                                <GoArrowUpRight
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </span>
                        )}
                    </div>
                </div>
            </CardElement>
        </li>
    );
}
