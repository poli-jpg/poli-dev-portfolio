import { ExternalLink, Github, ShoppingBag, Building2, Globe, type LucideProps } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const mockupIconMap: Record<string, React.ComponentType<LucideProps>> = {
  ShoppingBag,
  Building2,
};

function getMockupIcon(name?: string) {
  return (name && mockupIconMap[name]) || Globe;
}

function getDomain(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-paper-border bg-paper dark:border-base-border dark:bg-base">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          title="Projects"
          description="Un aperçu de ce que j'ai construit et déployé en conditions réelles."
        />

        <div className="space-y-8">
          {projects.map((project) => {
            const MockupIcon = getMockupIcon(project.mockupIcon);
            return (
              <article
                key={project.slug}
                className="grid gap-0 overflow-hidden rounded-2xl border border-paper-border bg-paper-surface/40 dark:border-base-border dark:bg-base-surface lg:grid-cols-2"
              >
                {/* Stylised browser mockup — swap for a real screenshot at src/data/projects.ts → image */}
                <div className="relative flex min-h-[260px] items-center justify-center bg-gradient-to-br from-signal/15 via-base-soft to-base p-8">
                  <div className="w-full max-w-sm overflow-hidden rounded-lg border border-base-border bg-base-soft shadow-xl">
                    <div className="flex items-center gap-1.5 border-b border-base-border bg-base-surface px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                      <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                      <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                      <span className="ml-2 truncate font-mono text-[10px] text-ink-dim">
                        {getDomain(project.liveUrl)}
                      </span>
                    </div>
                    <div className="space-y-3 p-4">
                      <div className="flex items-center gap-2 text-signal">
                        <MockupIcon size={16} />
                        <span className="font-display text-sm font-semibold">{project.name}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[0, 1, 2].map((i) => (
                          <div key={i} className="aspect-[3/4] rounded-md bg-base-border/60" />
                        ))}
                      </div>
                      <div className="h-2 w-2/3 rounded bg-base-border/60" />
                      <div className="h-2 w-1/2 rounded bg-base-border/40" />
                    </div>
                  </div>
                  {project.status === "live" ? (
                    <span className="absolute right-5 top-5 rounded-full bg-signal/15 px-3 py-1 text-xs font-medium text-signal">
                      En production
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <h3 className="font-display text-2xl font-semibold text-night dark:text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-night-muted dark:text-ink-muted">{project.longDescription ?? project.description}</p>

                  <ul className="mt-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-night-muted dark:text-ink-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-paper-border px-2.5 py-1 font-mono text-xs text-night-muted dark:border-base-border dark:text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-base transition-transform hover:scale-[1.03]"
                      >
                        Voir le projet
                        <ExternalLink size={15} />
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-full border border-paper-border px-5 py-2.5 text-sm font-medium text-night transition-colors hover:border-signal hover:text-signal dark:border-base-border dark:text-ink"
                      >
                        Voir le code
                        <Github size={15} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

