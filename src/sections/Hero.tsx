import { ArrowRight, Download } from "lucide-react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export function Hero() {
  const live = projects.filter((p) => p.status === "live").length;

  return (
    <section id="home" className="border-b border-line">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_auto]">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-fg-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Disponible pour de nouveaux projets
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-fg-muted">
            <span className="text-fg">{profile.name}</span> —{" "}
            {profile.role.toLowerCase()}. {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-bright"
            >
              Voir mes projets
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-fg-dim"
            >
              Me contacter
            </a>
            <a
              href="/CV.pdf"
              download="CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-fg-dim"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>
          </div>

          <p className="mt-10 font-mono text-xs text-fg-dim">
            {live} projets en production · Next.js · Supabase · Vercel
          </p>
        </div>

        <div className="flex justify-center animate-fade-up [animation-delay:150ms] lg:justify-end">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
