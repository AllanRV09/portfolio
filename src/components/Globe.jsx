import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import { HERO_TIMING, EASE_OUT } from "../data";

const GLOBE_VARIANTS = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: HERO_TIMING.globe,
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
};
const MARKERS = [
  { id: "cr", location: [9.9281, -84.0907], label: "Costa Rica" },
];

export function Globe() {
  const wrapperRef = useRef();
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef({ x: 0, y: 0 });
  const phiRef = useRef(0);
  const thetaRef = useRef(0.2);

  const [{ r, t }, api] = useSpring(() => ({
    r: 0,
    t: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    let globe;
    let rafId;
    let resizeTimeout;
    let isVisible = false;
    let isPageVisible = document.visibilityState === "visible";
    let loopRunning = false;

    const startLoop = () => {
      if (loopRunning) return;
      loopRunning = true;
      rafId = requestAnimationFrame(animate);
    };

    const stopLoop = () => {
      loopRunning = false;
      cancelAnimationFrame(rafId);
    };

    const checkShouldRun = () => {
      if (isVisible && isPageVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    };

    const animate = () => {
      if (!loopRunning) return;

      if (!pointerInteracting.current) {
        phiRef.current += 0.0045;
      }
      if (globe) {
        globe.update({
          phi: phiRef.current + r.get(),
          theta: thetaRef.current + t.get(),
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    const getSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      return canvasRef.current.offsetWidth * dpr;
    };

    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (globe && canvasRef.current) {
          const size = getSize();
          globe.update({ width: size, height: size });
        }
      }, 150);
    };

    if (canvasRef.current) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const initialSize = getSize();

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: dpr,
        width: initialSize,
        height: initialSize,
        phi: 0,
        theta: 0.2,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 8000,
        mapBrightness: 6,
        baseColor: [0.6, 0.4, 0.2],
        markerColor: [0.85, 0.55, 0.25],
        glowColor: [0.6, 0.4, 0.2],
        markers: MARKERS.map((m) => ({
          location: m.location,
          size: 0.06,
          id: m.id,
        })),
      });
    }

    window.addEventListener("resize", onResize);

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
      checkShouldRun();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let observer;
    if (wrapperRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          checkShouldRun();
        },
        { threshold: 0 }
      );
      observer.observe(wrapperRef.current);
    }

    return () => {
      stopLoop();
      if (globe) globe.destroy();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (observer) observer.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, [r, t]);

  return (
    <motion.div
      ref={wrapperRef}
      variants={GLOBE_VARIANTS}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex flex-col items-center justify-center"
    >
      <div style={{
        width: '100%',
        maxWidth: 700,
        aspectRatio: 1,
        margin: '0 auto',
        position: 'relative'
      }}>
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            pointerInteracting.current = {
              x: e.clientX,
              y: e.clientY
            };
            pointerInteractionMovement.current = {
              x: r.get() * 200,
              y: t.get() * 400
            };
            canvasRef.current.style.cursor = 'grabbing';
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
            api.start({ t: 0 });
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
            api.start({ t: 0 });
          }}
          onPointerMove={(e) => {
            if (pointerInteracting.current !== null) {
              const deltaX = e.clientX - pointerInteracting.current.x + pointerInteractionMovement.current.x;
              const deltaY = e.clientY - pointerInteracting.current.y + pointerInteractionMovement.current.y;

              api.start({
                r: deltaX / 200,
                t: deltaY / 400
              });
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            cursor: 'grab',
            touchAction: 'none'
          }}
        />
      </div>

      <div className="flex items-center gap-2 -mt-8 opacity-70">
        <p className="text-xs text-background/80 xl:text-sm font-medium tracking-widest uppercase border rounded-full px-3 py-1 border-accent">
          San Carlos, Costa Rica
        </p>
      </div>
    </motion.div>
  );
}