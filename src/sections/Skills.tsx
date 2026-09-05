import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-b border-paper-border bg-paper-surface/40 dark:border-base-border dark:bg-base-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          title="Skills"
          description="Les compétences que je mobilise pour transformer une idée en application fonctionnelle."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-paper-border bg-paper p-6 dark:border-base-border dark:bg-base-surface"
            >
              <div className="border-l-2 border-signal pl-4">
                <h3 className="font-display text-lg font-semibold text-night dark:text-ink">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-night-muted dark:text-ink-muted">{category.description}</p>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${
                      skill.level === "learning"
                        ? "border border-amber/40 bg-amber/10 text-amber"
                        : "border border-paper-border bg-paper-surface text-night-muted dark:border-base-border dark:bg-base dark:text-ink-muted"
                    }`}
                  >
                    {skill.name}
                    {skill.level === "learning" ? (
                      <span className="text-[10px] font-normal text-amber/80">en apprentissage</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
