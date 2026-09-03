"use client";

import { useEffect, useRef } from "react";
import CtaButton from "@/components/CtaButton";

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
    <footer className="bg-text-dark border-t border-text-dark w-full flex flex-col gap-section pt-section">
      {/* Top row */}
      <div className="px-s md:px-l flex flex-col md:flex-row md:items-center gap-m">
        <span className="text-style-label uppercase text-text-light-secondary">© Alex Moffatt</span>
        <CtaButton href="https://zcal.co/alexmoffatt/30min" className="inline-flex justify-center w-fit">
          Get in touch
        </CtaButton>
      </div>

      {/* Full-width logotype */}
      <div className="w-full leading-none">
        <p
          ref={logoRef}
          className="block w-full text-text-light whitespace-nowrap"
          style={{
            fontFamily: "var(--font-bricolage-grotesque), sans-serif",
            fontWeight: 500,
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
