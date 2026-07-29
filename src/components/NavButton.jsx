import { CONTACT_EMAIL } from "../data/data";

export function NavButton() {
    return (
        <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={'px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-center rounded-xl md:whitespace-nowrap lg:w-[155px] lg:text-sm transition-colors duration-300 bg-white/14 text-surface hover:bg-white/25'}
        >
            Hire Me
        </a>
    );
}
