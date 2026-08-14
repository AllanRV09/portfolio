import { useState, useEffect } from "react";

export function useMediaQuery(query, onChange) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = (event) => {
            onChange?.(event.matches);
            setMatches(event.matches);
        };

        mediaQueryList.addEventListener("change", handleChange);
        return () => mediaQueryList.removeEventListener("change", handleChange);
    }, [query, onChange]);

    return matches;
}
