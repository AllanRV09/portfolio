import { memo } from "react";
import { motion } from "framer-motion";
import { HERO_TIMING } from "../data/data";

export const HeroBackground = memo(function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: HERO_TIMING.background }}
                className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(14, 14, 14, 0.04) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(14,14,14,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }}
            />
        </div>
    );
});
