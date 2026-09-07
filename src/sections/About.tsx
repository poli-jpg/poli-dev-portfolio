import { profile } from "@/data/profile";

export function About() {
  const { about } = profile;

  return (
    <section id="about" className="border-b border-paper-border bg-paper dark:border-base-border dark:bg-base">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-night dark:text-ink sm:text-4xl">
              About Me
            </h2>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-signal">{about.lead}</p>
          </div>

          <div className="max-w-2xl space-y-10">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-night-muted dark:text-ink-muted">{about.intro}</p>
              <p className="text-lg leading-relaxed text-night-muted dark:text-ink-muted">{about.paragraph}</p>
            </div>

            <div className="border-l-2 border-signal pl-5">
              <h3 className="font-display text-lg font-semibold text-night dark:text-ink">
                {about.approach.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-night-muted dark:text-ink-muted">
                {about.approach.text}
              </p>
            </div>

            <div className="border-l-2 border-signal pl-5">
              <h3 className="font-display text-lg font-semibold text-night dark:text-ink">{about.build.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-night-muted dark:text-ink-muted">
                {about.build.text}
              </p>
            </div>

            <p className="font-display text-xl font-medium text-night dark:text-ink">{about.ambition}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
