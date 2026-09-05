interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-night dark:text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-night-muted dark:text-ink-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
