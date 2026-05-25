import { memo } from "react";
import { motion } from "framer-motion";
import { ScrollingRows } from "./ScrollingRows";
import { ENTRY_DELAY } from "../data";

const consoleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            delay: ENTRY_DELAY, 
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const WindowControl = ({ color }) => (
    <div className={`w-3 h-3 rounded-full ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10 opacity-50" />
    </div>
);

export const TechTerminal = memo(function TechTerminal() {
    return (
        <motion.div 
            variants={consoleVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex relative h-132 w-full z-10 overflow-hidden rounded-2xl border border-white/10 flex-col bg-[#141f1c] shadow-2xl will-change-transform"
        >
            {/* Header - No blur for performance */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-[#1d2d29] relative z-10">
                <div className="flex items-center gap-2 flex-1">
                    <WindowControl color="bg-[#FF5F56]" />
                    <WindowControl color="bg-[#FFBD2E]" />
                    <WindowControl color="bg-[#27C93F]" />
                </div>

                <div className="flex-1 flex justify-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold select-none">
                        allan.sh — v2.0
                    </span>
                </div>

                <div className="flex-1" />
            </div>
            
            <div className="relative flex-1 bg-black/20">
                {/* Simplified Scanline Effect */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.02] overflow-hidden">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />
                </div>
                
                <div className="p-4 h-full relative z-0">
                    <ScrollingRows />
                </div>
            </div>
        </motion.div>
    );
});
