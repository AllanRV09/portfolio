import { useEffect, useState } from "react";

const HEADER_OFFSET = 100;

export function useSectionTheme() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const sections = document.querySelectorAll("[data-theme]");
        let rafId;

        const updateTheme = () => {
            let current = "dark";

            sections.forEach((section) => {
                const top = section.getBoundingClientRect().top;
                if (top <= HEADER_OFFSET) {
                    current = section.dataset.theme;
                }
            });

            setTheme((prev) => (prev !== current ? current : prev));
        };

        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(updateTheme);
        };

        // Check inicial
        rafId = requestAnimationFrame(updateTheme);

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return theme;
}