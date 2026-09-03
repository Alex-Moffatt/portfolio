"use client";

import { useCallback, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import CtaButton from "@/components/CtaButton";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const smoothScrollTo = (targetY: number) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 800;
  let startTime: number | null = null;

  const ease = (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const isNavLinkActive = (href: string, pathname: string) => {
  if (href === "/work") return pathname === "/work" || pathname.startsWith("/projects");
  if (href === "/services") return pathname === "/services";
  if (href === "/about") return pathname === "/about";
  if (href === "/contact") return pathname === "/contact";
  return false;
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const hash = href.split("#")[1];
      if (!hash) return;

      // If we're already on the home page, smooth scroll directly
      if (pathname === "/") {
        e.preventDefault();
        const target = document.getElementById(hash);
        if (target) smoothScrollTo(target.offsetTop);
      } else {
        // Navigate home first, then scroll after load
        e.preventDefault();
        router.push("/");
        const wait = () => {
          const target = document.getElementById(hash);
          if (target) {
            smoothScrollTo(target.offsetTop);
          } else {
            requestAnimationFrame(wait);
          }
        };
        // Give the page transition time to render
        setTimeout(wait, 500);
      }
    },
    [pathname, router]
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-t border-b border-text-dark">
        <div className="flex w-full items-center justify-between px-s md:px-l py-s gap-s">
          {/* Left — logo + nav links (desktop only) */}
          <div className="flex items-center gap-xl">
            <a href="/" className="text-style-subtitle text-text-dark no-underline">am</a>

            <nav className="hidden md:flex items-center gap-m">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleAnchorClick(e, href)}
                  className={`text-style-label uppercase no-underline transition-opacity duration-200 hover:opacity-70 ${isNavLinkActive(href, pathname) ? "text-text-dark" : "text-text-dark-secondary"}`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right — CTA (desktop only) */}
          <CtaButton href="/contact" className="hidden md:inline-flex">
            Get in touch
          </CtaButton>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center gap-[5px] p-[8px]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-[20px] h-[2px] bg-text-dark" />
            <span className="block w-[20px] h-[2px] bg-text-dark" />
            <span className="block w-[20px] h-[2px] bg-text-dark" />
          </button>
        </div>
      </header>

      {/* Full screen mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-text-dark flex flex-col items-center justify-center gap-xl md:hidden">
          <button
            type="button"
            className="absolute top-s right-s p-[8px] text-text-light"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                setMenuOpen(false);
                handleAnchorClick(e, href);
              }}
              className={`text-style-h2 no-underline ${isNavLinkActive(href, pathname) ? "text-text-light" : "text-text-light-secondary"}`}
            >
              {label}
            </a>
          ))}

          <CtaButton href="/contact" variant="light" className="inline-flex mt-m">
            Get in touch
          </CtaButton>
        </div>
      )}
    </>
  );
}
