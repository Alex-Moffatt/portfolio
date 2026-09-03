"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 6;
const EASE = 0.35;
const LEAD_SIZE = 12;
const MAX_STRETCH = 2.2;
const STRETCH_SENSITIVITY = 0.045;

type Point = { x: number; y: number; prevX: number; prevY: number };

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const points = useRef<Point[]>(
    Array.from({ length: TRAIL_LENGTH + 1 }, () => ({
      x: -100,
      y: -100,
      prevX: -100,
      prevY: -100,
    }))
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const applyTransform = (el: HTMLDivElement | null, p: Point) => {
      if (!el) return;
      const dx = p.x - p.prevX;
      const dy = p.y - p.prevY;
      const speed = Math.hypot(dx, dy);
      const stretch = 1 + Math.min(speed * STRETCH_SENSITIVITY, MAX_STRETCH - 1);
      const angle = speed > 0.05 ? Math.atan2(dy, dx) * (180 / Math.PI) : 0;
      el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) rotate(${angle}deg) scaleX(${stretch})`;
    };

    let raf: number;
    const tick = () => {
      const pts = points.current;

      pts[0].prevX = pts[0].x;
      pts[0].prevY = pts[0].y;
      pts[0].x += (mouse.current.x - pts[0].x) * EASE;
      pts[0].y += (mouse.current.y - pts[0].y) * EASE;
      applyTransform(cursorRef.current, pts[0]);

      for (let i = 1; i < pts.length; i++) {
        pts[i].prevX = pts[i].x;
        pts[i].prevY = pts[i].y;
        pts[i].x += (pts[i - 1].x - pts[i].x) * EASE;
        pts[i].y += (pts[i - 1].y - pts[i].y) * EASE;
        applyTransform(trailRefs.current[i - 1], pts[i]);
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => {
        const size = LEAD_SIZE - (i + 1) * 1.4;
        return (
          <div
            key={i}
            ref={(el) => {
              trailRefs.current[i] = el;
            }}
            aria-hidden
            className="bg-pink fixed top-0 left-0 pointer-events-none"
            style={{
              width: size,
              height: size,
              opacity: 0.55 - i * 0.08,
              zIndex: 9998,
            }}
          />
        );
      })}
      <div
        ref={cursorRef}
        aria-hidden
        className="bg-pink fixed top-0 left-0 border border-text-dark pointer-events-none"
        style={{ width: LEAD_SIZE, height: LEAD_SIZE, zIndex: 9999 }}
      />
    </>
  );
}
