import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function SectionTitle({ children, className = '' }) {
  const text = typeof children === 'string' ? children : '';

  const letters = text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.07,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={
        "mb-14 text-4xl md:text-5xl lg:text-8xl font-semibold tracking-tight uppercase text-surface " +
        className
      }
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h2>
  );
}