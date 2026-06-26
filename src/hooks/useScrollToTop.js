import { useCallback } from "react";
import { useLenis } from "./useLenis";

export function useScrollToTop() {
    const lenisRef = useLenis();

    return useCallback(() => {
        if (lenisRef?.current) {
            lenisRef.current.scrollTo(0, { duration: 1.5 });
            return;
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [lenisRef]);
}