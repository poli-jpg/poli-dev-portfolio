import { SectionHeading } from "@/components/SectionHeading";
import { ToolIcon } from "@/components/ToolIcon";
import { tools } from "@/data/tools";

export function Tools() {
  return (
    <section className="border-b border-paper-border bg-paper-surface/40 dark:border-base-border dark:bg-base-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading title="Outils" description="L'environnement que j'utilise pour livrer un projet de bout en bout." />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-2.5 rounded-xl border border-paper-border bg-paper px-3 py-6 text-center transition-colors hover:border-signal/50 dark:border-base-border dark:bg-base-surface"
            >
              <ToolIcon name={tool.icon} size={22} className="text-signal" />
              <span className="text-xs font-medium text-night-muted dark:text-ink-muted">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
