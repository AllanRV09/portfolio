import { useEffect, useRef } from "react";
import { ROW_DEFS } from "../data";

const ACCENT_RGB = '7, 255, 205';

const PROCESSED_ROWS = [...ROW_DEFS, ...ROW_DEFS].map((def) => ({
    ...def,
    speed: def.speed * (0.8 + Math.random() * 0.4),
    initialOffset: Math.random() * 1000,
}));

export function ScrollingRows() {
    const rowRefs = useRef([]);
    const positions = useRef(PROCESSED_ROWS.map(r => r.initialOffset));
    const animRef = useRef(null);
    const isHovered = useRef(false);

    useEffect(() => {
        function animate() {
            PROCESSED_ROWS.forEach((row, i) => {
                const el = rowRefs.current[i];
                if (!el) return;

                const half = el.scrollWidth / 2;
                
                const currentSpeed = isHovered.current ? row.speed * 0.1 : row.speed;
                positions.current[i] += row.dir * currentSpeed;

                if (positions.current[i] >= half) positions.current[i] -= half;
                if (positions.current[i] <= 0) positions.current[i] += half;

                el.style.transform = `translate3d(${-positions.current[i]}px, 0, 0)`;
            });
            animRef.current = requestAnimationFrame(animate);
        }

        animRef.current = requestAnimationFrame(animate);
        return () => animRef.current && cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <div 
            className="relative h-full w-full flex flex-col justify-center overflow-hidden"
            onMouseEnter={() => isHovered.current = true}
            onMouseLeave={() => isHovered.current = false}
            aria-hidden="true"
        >
            <div className="w-full flex flex-col gap-2 z-0">
                {PROCESSED_ROWS.map((row, i) => (
                    <div key={i} className="flex items-center overflow-hidden" style={{ height: row.height }}>
                        <div
                            ref={el => rowRefs.current[i] = el}
                            className="flex items-center white-space-nowrap will-change-transform"
                        >
                            {[...row.words, ...row.words, ...row.words, ...row.words].map((word, wi) => (
                                <span
                                    key={wi}
                                    className="inline-flex items-center gap-3"
                                    style={{
                                        padding: `0 ${row.size > 20 ? 22 : 16}px`,
                                        fontSize: row.size,
                                        fontWeight: row.weight,
                                        color: `rgba(${ACCENT_RGB}, ${wi % 4 === 0 ? row.opacity[0] : row.opacity[1]})`,
                                        textTransform: row.upper ? 'uppercase' : 'none',
                                        letterSpacing: row.size > 18 ? '-0.02em' : '0.06em',
                                    }}
                                >
                                    <span 
                                        className="w-[3px] h-[3px] rounded-full flex-shrink-0" 
                                        style={{ background: `rgba(${ACCENT_RGB}, ${row.opacity[1] * 1.4})` }} 
                                    />
                                    {word}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
