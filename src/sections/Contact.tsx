import { Mail, MessageCircle, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  const { contact } = profile;
  const wa = contact.phone.replace(/\D/g, "");

  const links = [
    { label: "E-mail", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
    { label: "WhatsApp", value: contact.phone, href: `https://wa.me/${wa}`, icon: MessageCircle },
    { label: "GitHub", value: contact.github.replace("https://", ""), href: contact.github, icon: Github },
    ...(contact.linkedin
      ? [{ label: "LinkedIn", value: "Profil LinkedIn", href: contact.linkedin, icon: Linkedin }]
      : []),
  ];

  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <div className="rounded-3xl border border-line bg-bg-card p-8 sm:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Un projet en tête ? Parlons-en.
          </h2>
          <p className="mt-3 max-w-lg text-fg-muted">
            Décrivez-moi votre besoin, je vous réponds rapidement avec une proposition claire.
          </p>

          <div className="mt-10 grid gap-3 md:grid-cols-[1.35fr_1fr_1fr]">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-bg p-4 transition-colors hover:border-fg-dim"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-hover text-accent">
                  <Icon size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-fg-dim">{label}</span>
                  <span className="block truncate text-sm">{value}</span>
                </span>
                <ArrowUpRight size={16} className="text-fg-dim transition-colors group-hover:text-fg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
