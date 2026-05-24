import { motion } from "framer-motion";
import { ScrollingRows } from "./ScrollingRows";
import { ENTRY_DELAY } from "../data";

const consoleVariants = {
    hidden: { opacity: 0, y: 20 },
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

export function TechTerminal() {
    return (
        <motion.div 
            variants={consoleVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block relative self-stretch w-full z-10 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-[2px] shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] flex flex-col group transition-colors duration-500 hover:border-white/10"
        >
            {/* Barra superior macOS */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.03]">
                <div className="flex items-center gap-1.5 flex-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 hover:bg-[#FF5F56] transition-colors cursor-pointer" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 hover:bg-[#FFBD2E] transition-colors cursor-pointer" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 hover:bg-[#27C93F] transition-colors cursor-pointer" />
                </div>
                <div className="flex-1 text-center select-none">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">allan.dev — -zsh</span>
                </div>
                <div className="flex-1" />
            </div>
            
            <div className="relative flex-1">
                {/* Efecto CRT Scanlines */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] overflow-hidden">
                    <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 3px)' }} />
                </div>
                <ScrollingRows />
            </div>
        </motion.div>
    );
}
