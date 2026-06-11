import { useEffect, useRef } from "react";
import { ROW_DEFS } from "../data";

const ACCENT_RGB = "184, 146, 94"; // #B8925E

const LARGE_WORD_THRESHOLD = 20;

const OPACITY_MAP = {
    large: [0.55, 0.35],
    small: [0.18, 0.10],
};

function buildWordEntries(row) {
    const isLargeWord = row.size > LARGE_WORD_THRESHOLD;
    const [evenOpacity, oddOpacity] = isLargeWord
        ? OPACITY_MAP.large
        : OPACITY_MAP.small;
    const dotOpacity = isLargeWord ? 0.35 : 0.18;

    const style = {
        padding: `0 ${isLargeWord ? 22 : 16}px`,
        fontSize: row.size,
        fontWeight: row.weight,
        textTransform: row.upper ? "uppercase" : "none",
        letterSpacing: row.size > 18 ? "-0.02em" : "0.06em",
    };

    const dotStyle = {
        background: `rgba(${ACCENT_RGB}, ${dotOpacity})`,
    };

    return [...row.words, ...row.words].map((word, wi) => ({
        word,
        style: {
            ...style,
            color: `rgba(${ACCENT_RGB}, ${wi % 2 === 0 ? evenOpacity : oddOpacity})`,
        },
        dotStyle,
    }));
}

const PROCESSED_ROWS = [...ROW_DEFS, ...ROW_DEFS].map((def) => ({
    ...def,
    speed: def.speed * (0.8 + Math.random() * 0.4),
    initialOffset: Math.random() * 1000,
    wordEntries: buildWordEntries(def),
}));

export function ScrollingRows() {
    const rowRefs = useRef([]);
    const positions = useRef(PROCESSED_ROWS.map((r) => r.initialOffset));
    const animRef = useRef(null);
    const isHovered = useRef(false);

    useEffect(() => {
        function animate() {
            PROCESSED_ROWS.forEach((row, i) => {
                const el = rowRefs.current[i];
                if (!el) return;

                const half = el.scrollWidth / 2;

                const currentSpeed = isHovered.current
                    ? row.speed * 0.1
                    : row.speed;

                positions.current[i] += row.dir * currentSpeed;

                if (positions.current[i] >= half) positions.current[i] -= half;
                if (positions.current[i] <= 0) positions.current[i] += half;

                el.style.transform = `translate3d(${-positions.current[i]}px, 0, 0)`;
            });

            animRef.current = requestAnimationFrame(animate);
        }

        animRef.current = requestAnimationFrame(animate);

        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, []);

    return (
        <div
            className="relative h-full w-full flex flex-col justify-center overflow-hidden"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
            aria-hidden="true"
        >
            <div className="w-full flex flex-col gap-2 z-0">
                {PROCESSED_ROWS.map((row, i) => (
                    <div
                        key={i}
                        className="flex items-center overflow-hidden"
                        style={{ height: row.height }}
                    >
                        <div
                            ref={(el) => (rowRefs.current[i] = el)}
                            className="flex items-center whitespace-nowrap will-change-transform"
                        >
                            {row.wordEntries.map(({ word, style, dotStyle }, wi) => (
                                <span
                                    key={wi}
                                    className="inline-flex items-center gap-3"
                                    style={style}
                                >
                                    <span
                                        className="w-[3px] h-[3px] rounded-full flex-shrink-0"
                                        style={dotStyle}
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