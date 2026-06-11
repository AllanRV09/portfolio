// hooks/useSectionTheme.js
import { useEffect, useState, useCallback } from "react";

const HEADER_OFFSET = 100;

export function useSectionTheme() {
    const [theme, setTheme] = useState("dark");

    const updateTheme = useCallback(() => {
        const sections = document.querySelectorAll("[data-theme]");
        let current = "dark";

        sections.forEach((section) => {
            const top = section.getBoundingClientRect().top;

            if (top <= HEADER_OFFSET) {
                current = section.dataset.theme;
            }
        });

        setTheme((prev) => (prev !== current ? current : prev));
    }, []);

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateTheme();
                    ticking = false;
                });
                ticking = true;
            }
        };

        const frame = requestAnimationFrame(updateTheme);

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [updateTheme]);

    return theme;
}