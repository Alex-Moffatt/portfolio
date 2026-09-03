"use client";

import { useEffect, useRef } from "react";
import Pill from "@/components/Pill";

// Order matches the Figma "Aligned" end-state (left to right).
// xPct/yPct are each pill's scattered starting position within the hero.
const pills = [
  { label: "Strategy", xPct: 80.2, yPct: 28.6 },
  { label: "Vision", xPct: 47.0, yPct: 25.0 },
  { label: "Value prop", xPct: 23.0, yPct: 23.3 },
  { label: "Prototype", xPct: 76.4, yPct: 79.9 },
  { label: "Brand", xPct: 37.0, yPct: 81.5 },
  { label: "Roadmap", xPct: 10.2, yPct: 48.4 },
  { label: "Campaign", xPct: 20.7, yPct: 70.9 },
  { label: "Website", xPct: 50.3, yPct: 67.6 },
  { label: "App", xPct: 64.0, yPct: 19.9 },
  { label: "Feature", xPct: 83.8, yPct: 51.7 },
];

const ATTRACT_RADIUS = 260;
const MAX_PULL = 70;
const EASE = 0.08;
const ALIGN_ROW_GAP = 48; // matches Figma's gap-xl between the text block and the pill row

// How much extra scroll distance the section stays pinned for while the pills settle.
const PIN_VH_FRACTION = 0.8;
const PIN_MIN_PX = 500;

function smoothstep(t: number) {
  const clamped = Math.min(Math.max(t, 0), 1);
  return clamped * clamped * (3 - 2 * clamped);
}

export default function FloatingPillsHero({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const targets = useRef(pills.map(() => ({ x: 0, y: 0 })));
  const pinDistance = useRef(PIN_MIN_PX);
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
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    const container = containerRef.current;
    const measureRow = measureRef.current;
    if (!wrapper || !section || !container || !measureRow) return;

    const measure = () => {
      const heroText = container.parentElement?.querySelector<HTMLElement>("[data-hero-text]");
      const containerRect = container.getBoundingClientRect();

      if (heroText) {
        const textRect = heroText.getBoundingClientRect();
        measureRow.style.top = `${textRect.bottom - containerRect.top + ALIGN_ROW_GAP}px`;
      }

      const items = Array.from(measureRow.children) as HTMLElement[];
      items.forEach((item, i) => {
        const r = item.getBoundingClientRect();
        targets.current[i] = {
          x: r.left + r.width / 2 - containerRect.left,
          y: r.top + r.height / 2 - containerRect.top,
        };
      });

      pinDistance.current = Math.max(window.innerHeight * PIN_VH_FRACTION, PIN_MIN_PX);
      wrapper.style.height = `${section.offsetHeight + pinDistance.current}px`;
    };

    measure();
    window.addEventListener("resize", measure);
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(measure);
    }

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

      // Pinned via `sticky`, so the wrapper's own scroll-off is the progress signal —
      // its top goes from 0 to -pinDistance while the section stays visually locked in place.
      const wrapperTop = wrapper.getBoundingClientRect().top;
      const progress = smoothstep(-wrapperTop / pinDistance.current);
      const fade = 1 - progress;

      pills.forEach((pill, i) => {
        const s = state.current[i];
        const baseX = (pill.xPct / 100) * rect.width;
        const baseY = (pill.yPct / 100) * rect.height;

        const idleX = Math.sin(t * s.freqX + s.phaseX) * s.ampX * fade;
        const idleY = Math.cos(t * s.freqY + s.phaseY) * s.ampY * fade;

        const cx = baseX + idleX;
        const cy = baseY + idleY;
        const dx = mouse.current.x - cx;
        const dy = mouse.current.y - cy;
        const dist = Math.hypot(dx, dy);

        let targetPullX = 0;
        let targetPullY = 0;
        if (dist < ATTRACT_RADIUS) {
          const strength = (1 - dist / ATTRACT_RADIUS) * MAX_PULL * fade;
          const angle = Math.atan2(dy, dx);
          targetPullX = Math.cos(angle) * strength;
          targetPullY = Math.sin(angle) * strength;
        }

        s.pullX += (targetPullX - s.pullX) * EASE;
        s.pullY += (targetPullY - s.pullY) * EASE;

        const scatterOffsetX = idleX + s.pullX;
        const scatterOffsetY = idleY + s.pullY;
        const alignOffsetX = targets.current[i].x - baseX;
        const alignOffsetY = targets.current[i].y - baseY;

        const offsetX = scatterOffsetX + (alignOffsetX - scatterOffsetX) * progress;
        const offsetY = scatterOffsetY + (alignOffsetY - scatterOffsetY) * progress;

        const el = pillRefs.current[i];
        if (el) {
          el.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
        }
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full min-h-[170vh]">
      <section
        ref={sectionRef}
        className="sticky top-0 w-full bg-white h-[calc(100vh-var(--header-height))] md:h-[829px] px-s md:px-l py-xl flex flex-col items-center justify-center gap-m overflow-hidden"
      >
        {children}

        <div ref={containerRef} className="absolute inset-0 pointer-events-none">
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

          {/* Hidden reference row — real flex layout, used only to measure each pill's aligned target position */}
          <div
            ref={measureRef}
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 w-full max-w-col-4 px-s md:px-l flex flex-wrap gap-xs justify-center opacity-0"
          >
            {pills.map((pill) => (
              <Pill key={pill.label} className="w-fit">
                {pill.label}
              </Pill>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
