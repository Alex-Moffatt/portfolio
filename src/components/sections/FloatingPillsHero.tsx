"use client";

import { useEffect, useRef } from "react";
import Pill from "@/components/Pill";

const pills = [
  { label: "Strategy", xPct: 80.2, yPct: 28.6 },
  { label: "Value prop", xPct: 23.0, yPct: 23.3 },
  { label: "Prototype", xPct: 76.4, yPct: 79.9 },
  { label: "Campaign", xPct: 20.7, yPct: 70.9 },
  { label: "Website", xPct: 50.3, yPct: 67.6 },
  { label: "App", xPct: 64.0, yPct: 19.9 },
  { label: "Vision", xPct: 47.0, yPct: 25.0 },
  { label: "Roadmap", xPct: 10.2, yPct: 48.4 },
  { label: "Feature", xPct: 83.8, yPct: 51.7 },
  { label: "Brand", xPct: 37.0, yPct: 81.5 },
];

const ATTRACT_RADIUS = 260;
const MAX_PULL = 70;
const EASE = 0.08;

export default function FloatingPillsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  // Deterministic per-pill variety (avoids Math.random during render) —
  // irrational multipliers spread phases/frequencies/amplitudes unevenly.
  const state = useRef(
    pills.map((_, i) => ({
      phaseX: (i * 2.399) % (Math.PI * 2),
      phaseY: (i * 1.117) % (Math.PI * 2),
      freqX: 0.2 + (i % 5) * 0.03,
      freqY: 0.18 + (i % 4) * 0.035,
      ampX: 10 + (i % 3) * 4,
      ampY: 8 + (i % 4) * 3,
      pullX: 0,
      pullY: 0,
    }))
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };
    window.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const t = (now - start) / 1000;
      const rect = container.getBoundingClientRect();

      pills.forEach((pill, i) => {
        const s = state.current[i];
        const baseX = (pill.xPct / 100) * rect.width;
        const baseY = (pill.yPct / 100) * rect.height;

        const idleX = Math.sin(t * s.freqX + s.phaseX) * s.ampX;
        const idleY = Math.cos(t * s.freqY + s.phaseY) * s.ampY;

        const cx = baseX + idleX;
        const cy = baseY + idleY;
        const dx = mouse.current.x - cx;
        const dy = mouse.current.y - cy;
        const dist = Math.hypot(dx, dy);

        let targetPullX = 0;
        let targetPullY = 0;
        if (dist < ATTRACT_RADIUS) {
          const strength = (1 - dist / ATTRACT_RADIUS) * MAX_PULL;
          const angle = Math.atan2(dy, dx);
          targetPullX = Math.cos(angle) * strength;
          targetPullY = Math.sin(angle) * strength;
        }

        s.pullX += (targetPullX - s.pullX) * EASE;
        s.pullY += (targetPullY - s.pullY) * EASE;

        const el = pillRefs.current[i];
        if (el) {
          el.style.transform = `translate(calc(-50% + ${idleX + s.pullX}px), calc(-50% + ${idleY + s.pullY}px))`;
        }
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Desktop — animated, cursor-attracted pills */}
      <div ref={containerRef} className="absolute inset-0 hidden md:block pointer-events-none">
        {pills.map((pill, i) => (
          <Pill
            key={pill.label}
            ref={(el) => {
              pillRefs.current[i] = el;
            }}
            className="absolute w-fit"
            style={{ left: `${pill.xPct}%`, top: `${pill.yPct}%` }}
          >
            {pill.label}
          </Pill>
        ))}
      </div>

      {/* Mobile — static, scattered behind the text (no animation, no cursor to attract to) */}
      <div className="absolute inset-0 md:hidden pointer-events-none">
        {pills.map((pill) => (
          <Pill
            key={pill.label}
            className="absolute w-fit"
            style={{ left: `${pill.xPct}%`, top: `${pill.yPct}%`, transform: "translate(-50%, -50%)" }}
          >
            {pill.label}
          </Pill>
        ))}
      </div>
    </>
  );
}
