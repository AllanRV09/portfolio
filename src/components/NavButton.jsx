import { SOCIAL_LINKS } from "../data/data";

export function NavButton() {
    const email = SOCIAL_LINKS.find(link => link.name === "Email")?.href.replace('mailto:', '') || '';

    return (
        <a
            href={`mailto:${email}`}
            className={'px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-center rounded-xl md:whitespace-nowrap lg:w-[155px] lg:text-sm transition-colors duration-300 bg-white/14 text-white hover:bg-white/25'}
        >
            Hire Me
        </a>
    );
}