import { motion } from "framer-motion"

export function PageIntro() {
    return (
        <motion.div
            className="fixed inset-0 z-100 bg-text"
            initial={{ y: 0, borderRadius: "0% 0% 0% 0%" }}
            animate={{ y: "-100%", borderRadius: "50% 50% 0% 0%" }}
            transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.77, 0, 0.175, 1]
            }}
        />
    )
}