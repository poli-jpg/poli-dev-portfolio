"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          Poli<span className="text-accent">Dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent"
          >
            Me contacter
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-bg px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 text-base text-fg-muted hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-fg px-4 py-3 text-center text-sm font-medium text-bg"
          >
            Me contacter
          </a>
        </div>
      ) : null}
    </header>
  );
}
