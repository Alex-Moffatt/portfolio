"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const logoRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = logoRef.current;
    if (!el || !el.parentElement) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    const adjustFontSize = () => {
      const parentWidth = el.parentElement!.offsetWidth;
      const style = getComputedStyle(el);
      // Measure text width at a reference size using canvas
      const refSize = 100;
      ctx.font = `${style.fontWeight} ${refSize}px ${style.fontFamily}`;
      const refWidth = ctx.measureText("Alex Moffatt").width;
      // Scale proportionally to fill parent width
      const size = Math.floor((parentWidth / refWidth) * refSize);

      el.style.fontSize = `${size}px`;
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
    return () => window.removeEventListener("resize", adjustFontSize);
  }, []);

  return (
    <footer className="w-full bg-background border-t border-[#10141933]">
      <div className="px-s md:px-l py-xl">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-xs">
          <span className="text-style-body-sm text-text-dark">© Alex Moffatt</span>
          <a
            href="mailto:alexmoffatt92@gmail.com"
            className="text-style-body-sm text-text-dark hover:opacity-70 transition-opacity duration-200"
          >
            alexmoffatt92@gmail.com
          </a>
        </div>
      </div>

      {/* Full-width logotype */}
      <div className="w-full leading-none">
        <p
          ref={logoRef}
          className="block w-full text-text-dark whitespace-nowrap"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 700,
            fontSize: 120,
            lineHeight: 1,
          }}
        >
          Alex Moffatt
        </p>
      </div>
    </footer>
  );
}
