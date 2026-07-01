import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { LenisContext } from "../hooks/useLenis";

export function LenisProvider({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        let lenis, rafId;
        const initId = requestAnimationFrame(() => {
            lenis = new Lenis({ anchors: true, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
            lenisRef.current = lenis;
            function raf(time) { lenis.raf(time); rafId = requestAnimationFrame(raf); }
            rafId = requestAnimationFrame(raf);
        });
        return () => {
            cancelAnimationFrame(initId);
            if (lenis) lenis.destroy();
            cancelAnimationFrame(rafId);
            lenisRef.current = null;
        };
    }, []);

    return (
        <LenisContext.Provider value={lenisRef}>
            {children}
        </LenisContext.Provider>
    );
}