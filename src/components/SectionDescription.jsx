import { motion } from "framer-motion";

export function SectionDescription({ children, delay = 0.3, className = "", amount = 0.2 }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            viewport={{ once: true, amount }}
            className={`font-light tracking-wide leading-relaxed text-text/90 ${className}`}
        >
            {children}
        </motion.p>
    );
}
