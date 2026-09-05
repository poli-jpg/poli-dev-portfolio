import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-b border-paper-border bg-paper dark:border-base-border dark:bg-base">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading title="About Me" align="left" />
          <p className="max-w-2xl text-lg leading-relaxed text-night-muted dark:text-ink-muted">
            {profile.about}
          </p>
        </div>
      </div>
    </section>
  );
}
