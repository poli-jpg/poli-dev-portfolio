import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  const { contact } = profile;

  const links = [
    contact.email ? { label: contact.email, href: `mailto:${contact.email}`, icon: Mail } : null,
    contact.phone ? { label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}`, icon: Phone } : null,
    contact.github ? { label: "GitHub", href: contact.github, icon: Github } : null,
    contact.linkedin ? { label: "LinkedIn", href: contact.linkedin, icon: Linkedin } : null,
    contact.instagram ? { label: "Instagram", href: contact.instagram, icon: Instagram } : null,
  ].filter((l): l is { label: string; href: string; icon: typeof Mail } => Boolean(l));

  return (
    <section id="contact" className="bg-paper dark:bg-base">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-night dark:text-ink sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-night-muted dark:text-ink-muted">
            Vous avez une idée de projet ? Construisons-la ensemble.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-2 rounded-full border border-paper-border bg-paper-surface px-5 py-3 text-sm font-medium text-night transition-colors hover:border-signal hover:text-signal dark:border-base-border dark:bg-base-surface dark:text-ink"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
