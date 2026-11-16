"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#080b14]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-black tracking-tight"
        >
          nexora<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-9 text-sm text-gray-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          className="hidden rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white sm:inline-flex"
        >
          Let's Talk ↗
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#0c111d] px-6 py-5 shadow-2xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-gray-200 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-full bg-cyan-400 px-5 py-3 text-center font-bold text-slate-950"
            >
              Let's Talk ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}




