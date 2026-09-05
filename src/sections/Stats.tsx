import { AnimatedCounter } from "@/components/AnimatedCounter";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="border-b border-paper-border bg-paper dark:border-base-border dark:bg-base">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-night-muted dark:text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
