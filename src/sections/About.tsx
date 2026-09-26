import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading eyebrow="À propos" title="Du besoin au site en ligne." />
            <p className="-mt-4 text-lg leading-relaxed text-fg-muted">{profile.about}</p>

            <h3 className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-fg-dim">Stack</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.stack.map((tech) => (
                <li key={tech} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-fg-muted">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid gap-px self-start overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {profile.services.map((s, i) => (
              <li key={s.title} className="bg-bg-card p-6">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-display font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-fg-muted">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
