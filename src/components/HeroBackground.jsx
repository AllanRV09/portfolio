import { memo } from "react";
import { motion } from "framer-motion";

export const HeroBackground = memo(function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Animated Atmospheric Lights (Blobs) */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
                className="absolute inset-0"
            >
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -10, 0]
                    }}
                    transition={{ 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.12] blur-[120px] will-change-transform"
                    style={{ background: 'var(--color-accent)' }} 
                />
                
                <motion.div 
                    animate={{ 
                        scale: [1.1, 1, 1.1],
                        x: [0, -20, 0],
                        y: [0, 10, 0]
                    }}
                    transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.1] blur-[100px] will-change-transform"
                    style={{ background: 'var(--color-surface)' }} 
                />
            </motion.div>

            {/* Dashed Grid with Radial Mask */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                    maskImage: `
                        repeating-linear-gradient(to right, black 0px, black 2px, transparent 2px, transparent 8px),
                        repeating-linear-gradient(to bottom, black 0px, black 2px, transparent 2px, transparent 8px)
                    `,
                    WebkitMaskImage: `
                        repeating-linear-gradient(to right, black 0px, black 2px, transparent 2px, transparent 8px),
                        repeating-linear-gradient(to bottom, black 0px, black 2px, transparent 2px, transparent 8px)
                    `,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </div>
    );
});
