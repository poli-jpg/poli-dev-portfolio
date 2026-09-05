"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { profile } from "@/data/profile";

const focusAreas = ["Web Development", "SaaS", "E-commerce", "API REST"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-paper-border bg-paper dark:border-base-border dark:bg-base"
    >
      {/* Signature moment: a faint circuit-grid backdrop, used once, only here. */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-signal">Hi, I&apos;m {profile.name} 👋</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-night dark:text-ink sm:text-5xl lg:text-6xl">
            {profile.role}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-night-muted dark:text-ink-muted">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-base transition-transform hover:scale-[1.03]"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-paper-border px-6 py-3 text-sm font-medium text-night transition-colors hover:border-signal hover:text-signal dark:border-base-border dark:text-ink"
            >
              Let&apos;s Talk
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-paper-border px-3 py-1.5 text-xs font-medium text-night-muted dark:border-base-border dark:text-ink-muted"
              >
                {area}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <ProfilePhoto />
        </motion.div>
      </div>
    </section>
  );
}
