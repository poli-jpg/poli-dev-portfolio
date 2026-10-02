"use client";

import { useState } from "react";
import {
  ArrowUpRight, Github, ShoppingBag, Building2, Globe, Palette, Scissors,
  ChevronDown, ChevronUp, type LucideProps,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const icons: Record<string, React.ComponentType<LucideProps>> = { ShoppingBag, Building2, Palette, Scissors };

// Nombre de projets affichés avant le bouton « Voir plus ».
const INITIAL_COUNT = 2;
const MAX_STACK = 5;

const domain = (url?: string) => {
  try { return url ? new URL(url).hostname : ""; } catch { return url ?? ""; }
};

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hidden = projects.length - INITIAL_COUNT;

  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Projets"
          title="Réalisations récentes"
          description="Des projets réels, développés et mis en production pour des clients."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {visible.map((p) => {
            const Icon = (p.mockupIcon && icons[p.mockupIcon]) || Globe;
            const extra = p.stack.length - MAX_STACK;
            return (
              <article
                key={p.slug}
                className="group flex flex-col rounded-2xl border border-line bg-bg-card p-6 transition-colors hover:border-fg-dim/60 sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-hover text-accent">
                    <Icon size={20} />
                  </span>
                  {p.status === "live" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-fg-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> En ligne
                    </span>
                  ) : (
                    <span className="rounded-full border border-line px-2.5 py-1 text-xs text-fg-dim">En cours</span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold">{p.name}</h3>
                {p.liveUrl ? <p className="mt-0.5 font-mono text-xs text-fg-dim">{domain(p.liveUrl)}</p> : null}
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{p.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-fg-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, MAX_STACK).map((t) => (
                    <li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-fg-dim">{t}</li>
                  ))}
                  {extra > 0 ? (
                    <li className="rounded-md px-2 py-0.5 font-mono text-[11px] text-fg-dim">+{extra}</li>
                  ) : null}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent"
                    >
                      Voir le site <ArrowUpRight size={15} />
                    </a>
                  ) : null}
                  {p.repoUrl ? (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-fg-dim"
                    >
                      Code <Github size={15} />
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {hidden > 0 ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              aria-expanded={showAll}
              onClick={() => {
                if (showAll) document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                setShowAll(!showAll);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-fg-muted transition-colors hover:border-fg-dim hover:text-fg"
            >
              {showAll ? <>Voir moins <ChevronUp size={16} /></> : <>Voir plus de projets ({hidden}) <ChevronDown size={16} /></>}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
