import { memo } from "react";
import { motion } from "framer-motion";
import { ScrollingRows } from "./ScrollingRows";
import { ENTRY_DELAY } from "../data";

const ACCENT_RGB = "184, 146, 94"; // #B8925E
const SURFACE_RGB = "232, 227, 217"; // #E8E3D9

const CONSOLE_VARIANTS = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: ENTRY_DELAY,
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const SCANLINE_STYLE = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(${ACCENT_RGB}, 0.06), transparent, rgba(${SURFACE_RGB}, 0.04))`,
    backgroundSize: "100% 2px, 3px 100%",
};

const WINDOW_CONTROLS = ["#FF5F56", "#FFBD2E", "#27C93F"];

const WindowControl = memo(function WindowControl({ color }) {
    return (
        <div
            className="w-3 h-3 rounded-full relative overflow-hidden"
            style={{ backgroundColor: color }}
        >
            <div className="absolute inset-0 bg-white/10 opacity-50" />
        </div>
    );
});

export const TechTerminal = memo(function TechTerminal() {
    return (
        <motion.div
            variants={CONSOLE_VARIANTS}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex relative h-132 w-full z-10 overflow-hidden rounded-2xl border border-surface/10 flex-col bg-background shadow-2xl will-change-transform"
        >
            {/* Header — no blur for performance */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-surface/10 bg-muted relative z-10">
                <div className="flex items-center gap-2 flex-1">
                    {WINDOW_CONTROLS.map((color) => (
                        <WindowControl key={color} color={color} />
                    ))}
                </div>

                <div className="flex-1 flex justify-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-text font-semibold select-none">
                        allan.sh — v1.0
                    </span>
                </div>

                <div className="flex-1" />
            </div>

            {/* Body */}
            <div className="relative flex-1">
                {/* Scanline effect */}
                <div
                    className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] overflow-hidden"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0" style={SCANLINE_STYLE} />
                </div>

                <div className="p-4 h-full relative z-0">
                    <ScrollingRows />
                </div>
            </div>
        </motion.div>
    );
});