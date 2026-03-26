"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroRef = useRef<HTMLParagraphElement>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const dimStyle = (id: string) => ({
    opacity: hoveredLink && hoveredLink !== id ? 0.4 : 1,
    transition: "opacity 300ms ease",
  });

  const textDimStyle = {
    opacity: hoveredLink ? 0.4 : 1,
    transition: "opacity 300ms ease",
  };

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // Create a hidden clone for measurement
    const clone = el.cloneNode(true) as HTMLElement;
    clone.style.position = "absolute";
    clone.style.visibility = "hidden";
    clone.style.pointerEvents = "none";
    clone.style.left = "0";
    clone.style.top = "0";
    document.body.appendChild(clone);

    const getLineCount = (measEl: HTMLElement) => {
      const lineHeight = parseFloat(getComputedStyle(measEl).lineHeight);
      return Math.round(measEl.offsetHeight / lineHeight);
    };

    const adjustFontSize = () => {
      // Match the clone's width to the hero's parent width
      const parentWidth = el.parentElement?.offsetWidth ?? window.innerWidth;
      const parentStyle = el.parentElement ? getComputedStyle(el.parentElement) : null;
      const paddingLeft = parentStyle ? parseFloat(parentStyle.paddingLeft) : 0;
      const paddingRight = parentStyle ? parseFloat(parentStyle.paddingRight) : 0;
      clone.style.width = `${parentWidth - paddingLeft - paddingRight}px`;

      // More lines on mobile = larger text relative to screen
      const targetLines = window.innerWidth < 768 ? 6 : 3;

      // Binary search for the largest font size that fits in target lines
      let lo = 10;
      let hi = 200;
      while (lo < hi) {
        const mid = Math.ceil((lo + hi) / 2);
        clone.style.fontSize = `${mid}px`;
        clone.style.lineHeight = "1.1";
        if (getLineCount(clone) <= targetLines) {
          lo = mid;
        } else {
          hi = mid - 1;
        }
      }

      el.style.fontSize = `${lo}px`;
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
    return () => {
      window.removeEventListener("resize", adjustFontSize);
      document.body.removeChild(clone);
    };
  }, []);

  return (
    <section className="h-screen bg-background flex items-center px-s md:px-l">
      <p ref={heroRef} className="text-text-dark" style={{ fontSize: 60, lineHeight: 1.1, fontWeight: 500 }}>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          style={{ display: "inline" }}
        >
          <span style={textDimStyle}>Alex Moffatt</span>
          <a
            href="/#personal"
            className="font-highlight text-accent-3 no-underline cursor-pointer"
            style={dimStyle("personal")}
            onMouseEnter={() => setHoveredLink("personal")}
            onMouseLeave={() => setHoveredLink(null)}
          >*</a>
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          style={{ display: "inline" }}
        >
          <span style={textDimStyle}>{" "}is a designer and strategist who&apos;s spent eight years building impactful{" "}</span>
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.9 }}
          style={{ display: "inline" }}
        >
          <a
            href="/#projects"
            className="font-highlight text-accent-2 no-underline cursor-pointer"
            style={dimStyle("projects")}
            onMouseEnter={() => setHoveredLink("projects")}
            onMouseLeave={() => setHoveredLink(null)}
          >products,</a>
          <span style={textDimStyle}>{" "}</span>
          <a
            href="/#philosophy"
            className="font-highlight text-accent-4 no-underline cursor-pointer"
            style={dimStyle("philosophy")}
            onMouseEnter={() => setHoveredLink("philosophy")}
            onMouseLeave={() => setHoveredLink(null)}
          >quickly</a>
          <span style={textDimStyle}>.</span>
        </motion.span>
      </p>
    </section>
  );
}
