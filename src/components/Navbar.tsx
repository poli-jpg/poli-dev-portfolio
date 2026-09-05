"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-paper-border/80 bg-paper/80 backdrop-blur-md dark:border-base-border/80 dark:bg-base/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-night dark:text-ink">
          Poli<span className="text-signal">Dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-night-muted transition-colors hover:text-signal dark:text-ink-muted dark:hover:text-signal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-signal px-4 py-2 text-sm font-medium text-base transition-transform hover:scale-[1.03]"
          >
            Let&apos;s Talk
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-border text-night dark:border-base-border dark:text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-paper-border bg-paper px-5 pb-6 pt-2 dark:border-base-border dark:bg-base md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-night-muted hover:bg-paper-surface hover:text-signal dark:text-ink-muted dark:hover:bg-base-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-signal px-4 py-3 text-center text-sm font-medium text-base"
          >
            Let&apos;s Talk
          </a>
        </div>
      ) : null}
    </header>
  );
}
