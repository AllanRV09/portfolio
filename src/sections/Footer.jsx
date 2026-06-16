import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { NAV_LINKS, SOCIAL_LINKS } from "../data";

const STACK_ITEMS = ["React", "Tailwind CSS", "Framer Motion", "Lenis Scroll", "Figma"];

const FooterColumn = ({ title, children }) => (
    <div className="flex flex-col gap-4">
        <h4 className="text-sm sm:text-lg font-semibold text-background pb-3 border-b border-background/15">
            {title}
        </h4>
        <div className="flex flex-col gap-2.5">{children}</div>
    </div>
);

const FooterLink = ({ href, children, ...props }) => (
    <a
        href={href}
        className="group inline-flex items-center gap-1.5 text-sm sm:text-lg text-text hover:text-background transition-colors w-fit"
        {...props}
    >
        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-accent">
            →
        </span>
        {children}
    </a>
);

const useLocalTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZoneName: "short",
    });
};

const scrollToTop = () => {
    if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.5 });
        return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
};

export function Footer() {
    const localTime = useLocalTime();

    return (
        <footer
            data-theme="light"
            className="relative z-10 text-background bg-surface"
        >
            <div className="px-6 lg:px-24 xl:px-36 py-16 sm:py-24">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    <FooterColumn title="Menu">
                        {NAV_LINKS.map((link) => (
                            <FooterLink key={link.name} href={`#${link.href}`}>
                                {link.name}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Socials">
                        {SOCIAL_LINKS.map((link) => (
                            <FooterLink
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {link.name}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                        <h4 className="text-sm lg:text-lg font-semibold text-background pb-3 border-b border-background/15">
                            Local time
                        </h4>

                        <div className="flex items-center gap-2">
                            <span className="relative inline-flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                            <span className="text-sm lg:text-lg text-text font-mono tabular-nums">
                                {localTime}
                            </span>
                        </div>

                        <span className="text-sm lg:text-lg text-text">
                            Costa Rica
                        </span>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-background/15">
                    <h4 className="text-xs lg:text-base uppercase tracking-[0.2em] text-text font-semibold mb-4">
                        Built with
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {STACK_ITEMS.map((item) => (
                            <span
                                key={item}
                                className="text-xs lg:text-base font-medium px-3 py-1.5 rounded-full border border-background/15 text-text hover:border-accent hover:text-background transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-background/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
                        <p className="text-xs sm:text-base text-text">
                            © {new Date().getFullYear()} Allan Rodriguez. All rights reserved.
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="group flex items-center gap-2 text-xs sm:text-base font-medium uppercase tracking-[0.15em] text-text hover:text-accent transition-colors"
                    >
                        Back to top
                        <span className="flex items-center justify-center w-9 h-9 rounded-full border border-background/15 group-hover:border-accent transition-colors">
                            <FiArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}