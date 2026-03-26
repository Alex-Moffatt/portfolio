"use client";

import { useState } from "react";
import Button from "./Button";

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Personal", href: "/#personal" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex w-full items-center justify-between px-s md:px-l py-s gap-s">
          {/* Left — nav links (desktop only) */}
          <nav className="hidden md:flex items-center gap-m">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-style-body-md text-[#F3F3F3] no-underline transition-opacity duration-200 hover:opacity-70"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Centre — logotype */}
          <a href="/" className="text-style-project text-[#F3F3F3] no-underline">AM</a>

          {/* Right — CTA (desktop only) */}
          <div className="hidden md:block">
            <Button
              label="Get in touch"
              className="!bg-[#F3F3F3] !text-[#101214]"
            />
          </div>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center gap-[5px] p-[8px]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-[20px] h-[2px] bg-[#F3F3F3]" />
            <span className="block w-[20px] h-[2px] bg-[#F3F3F3]" />
            <span className="block w-[20px] h-[2px] bg-[#F3F3F3]" />
          </button>
        </div>
      </header>

      {/* Full screen mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#101214] flex flex-col items-center justify-center gap-xl md:hidden">
          <button
            type="button"
            className="absolute top-s right-s p-[8px] text-[#F3F3F3]"
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
              onClick={() => setMenuOpen(false)}
              className="text-style-project text-[#F3F3F3] no-underline"
            >
              {label}
            </a>
          ))}

          <Button
            label="Get in touch"
            className="!bg-[#F3F3F3] !text-[#101214] mt-m"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
}
