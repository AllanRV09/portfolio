import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import { ENTRY_DELAY } from "../data";

const GLOBE_VARIANTS = {
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
    let isVisible = true;
    let isPageVisible = document.visibilityState === "visible";

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
        mapSamples: 12000,
        mapBrightness: 6,
        baseColor: [0.6, 0.4, 0.2],
        markerColor: [0.6, 0.4, 0.2],
        glowColor: [0.6, 0.4, 0.2],
        markers: MARKERS.map((m) => ({
          location: m.location,
          size: 0.03,
          id: m.id,
        })),
      });
    }

    window.addEventListener("resize", onResize);

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let observer;
    if (wrapperRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0 }
      );
      observer.observe(wrapperRef.current);
    }

    const animate = () => {
      if (isVisible && isPageVisible) {
        if (!pointerInteracting.current) {
          phiRef.current += 0.0045;
        }
        if (globe) {
          globe.update({
            phi: phiRef.current + r.get(),
            theta: thetaRef.current + t.get(),
          });
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (globe) globe.destroy();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (observer) observer.disconnect();
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimeout);
    };
  }, [r, t]);

  return (
    <motion.div
      ref={wrapperRef}
      variants={GLOBE_VARIANTS}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex flex-col items-center justify-center will-change-transform"
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

        {MARKERS.map((m) => (
          <div
            key={m.id}
            className="marker-label"
            style={{
              positionAnchor: `--cobe-${m.id}`,
              opacity: `var(--cobe-visible-${m.id}, 0)`,
            }}
          >
            {m.label}
          </div>
        ))}
      </div>

      <style>{`
        .marker-label {
          position: absolute;
          bottom: anchor(top);
          left: anchor(center);
          translate: -50% 0;
          margin-bottom: 12px;
          padding: 4px 12px;
          background: rgb(153, 102, 51);
          color: #f5e6d3;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          pointer-events: none;
          transition: opacity 0.2s ease;
          z-index: 10;
        }

        .marker-label::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          translate: -50% 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid rgb(153, 102, 51);
        }
      `}</style>

      <div className="flex items-center gap-2 -mt-8 opacity-70">
        <span className="w-2 h-2 bg-[#996633] rounded-full animate-pulse shadow-[0_0_8px_rgba(153,102,51,0.8)]" />
        <p className="text-xs xl:text-sm font-medium tracking-widest uppercase">
          Based in Costa Rica
          <span className="mx-2 opacity-40">·</span>
          <span className="opacity-60 font-normal">Open to remote work</span>
        </p>
      </div>
    </motion.div>
  );
}