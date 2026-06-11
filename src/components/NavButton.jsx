export function NavButton({ isLight }) {
    return (
        <a
            href="mailto:allanrod0908@gmail.com"
            className={`px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-center rounded-xl md:whitespace-nowrap lg:w-[155px] lg:text-sm transition-colors duration-300 ${isLight
                ? 'bg-background text-surface hover:bg-background/85'
                : 'bg-surface/17 text-surface hover:bg-surface/25'
                }`}
        >
            Hire Me
        </a>
    );
}