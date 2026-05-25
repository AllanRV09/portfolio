import { memo } from "react";
import { motion } from "framer-motion";
import { ScrollingRows } from "./ScrollingRows";
import { ENTRY_DELAY } from "../data";

const consoleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { 
            delay: ENTRY_DELAY, 
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const WindowControl = ({ color }) => (
    <div className={`w-3 h-3 rounded-full ${color} shadow-sm relative overflow-hidden group/btn`}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
    </div>
);

export const TechTerminal = memo(function TechTerminal() {
    return (
        <motion.div 
            variants={consoleVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex relative self-stretch w-full z-10 overflow-hidden rounded-2xl border border-white/10 flex-col group will-change-transform"
            style={{
                background: 'linear-gradient(180deg, #1a2a26 0%, #141f1c 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.05)'
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-[#1d2d29]/80 backdrop-blur-md relative z-10">
                <div className="flex items-center gap-2 flex-1">
                    <WindowControl color="bg-[#FF5F56]" />
                    <WindowControl color="bg-[#FFBD2E]" />
                    <WindowControl color="bg-[#27C93F]" />
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="px-3 py-1 rounded-full bg-black/20 border border-white/5 flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">
                            allan.sh — v2.0
                        </span>
                    </div>
                </div>

                <div className="flex-1 flex justify-end opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                    </svg>
                </div>
            </div>
            
            <div className="relative flex-1 bg-black/5">
                {/* CRT & Scanlines */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] overflow-hidden mix-blend-overlay">
                    <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 3px)' }} />
                </div>
                
                <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]" />
                
                <div className="p-4 h-full">
                    <ScrollingRows />
                </div>
            </div>
        </motion.div>
    );
});
