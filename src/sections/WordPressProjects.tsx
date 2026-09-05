import { Layout, ShoppingCart, FileText, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const capabilities = [
  { icon: Layout, title: "Sites vitrines", description: "Présenter une activité avec un design soigné et responsive." },
  { icon: ShoppingCart, title: "Boutiques e-commerce", description: "Catalogue, panier et paiement avec WooCommerce." },
  { icon: FileText, title: "Landing pages", description: "Des pages orientées conversion, construites avec Elementor." },
  { icon: Briefcase, title: "Sites professionnels", description: "Des sites sur-mesure pour indépendants et entreprises." },
];

const stack = ["WordPress", "Elementor", "Elementor Pro", "WooCommerce", "WPForms"];

export function WordPressProjects() {
  return (
    <section className="border-b border-paper-border bg-paper-surface/40 dark:border-base-border dark:bg-base-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          title="Projets WordPress"
          description="Créer des boutiques et sites vitrines rapides à lancer, faciles à maintenir, et adaptés aux besoins des entreprises africaines."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-paper-border bg-paper px-3.5 py-1.5 text-xs font-medium text-night-muted dark:border-base-border dark:bg-base dark:text-ink-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-paper-border bg-paper p-6 dark:border-base-border dark:bg-base-surface"
            >
              <Icon size={20} className="text-signal" />
              <h3 className="mt-4 font-display text-base font-semibold text-night dark:text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-night-muted dark:text-ink-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
