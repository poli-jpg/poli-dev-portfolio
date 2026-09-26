interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p> : null}
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-fg-muted">{description}</p> : null}
    </div>
  );
}
