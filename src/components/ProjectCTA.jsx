export function ProjectCTA() {
    return (
        <li className="mt-8 list-none lg:col-span-2">
            <div className="flex flex-col items-center text-center py-16 border-t border-surface/10">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-text mb-5">
                    next project?
                </p>

                <a
                    href="#contact"
                    className="group mb-6 inline-block rounded-sm text-4xl font-bold uppercase leading-[0.9] tracking-tighter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background md:text-6xl lg:text-7xl"
                >
                    <span className="text-surface/45">Yours could</span>
                    <br />
                    <span className="text-surface group-hover:text-accent transition-colors duration-300">
                        be the next one.
                    </span>
                </a>

                <p className="text-sm font-light tracking-wide text-text/90">
                    ↓ Tell me about your idea
                </p>
            </div>
        </li>
    );
}
