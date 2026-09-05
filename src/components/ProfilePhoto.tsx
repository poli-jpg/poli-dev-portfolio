import Image from "next/image";

const focusBadges = ["Web", "SaaS", "E-commerce"];

// Replaces the animated terminal in the hero with a portrait photo.
// Drop your photo at /public/profile-photo.jpg (or .png/.webp — just update the src below)
// at roughly 800x1000px (portrait) for the sharpest result.
export function ProfilePhoto() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-signal/25 via-signal/5 to-transparent blur-xl" />
      <div className="overflow-hidden rounded-[24px] border border-base-border bg-base-surface shadow-2xl shadow-black/40">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/profile-photo.jpg"
            alt="Photo de Poli Dev"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 420px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-base-border bg-base-soft px-4 py-2 shadow-lg shadow-black/30">
        {focusBadges.map((badge) => (
          <span key={badge} className="font-mono text-[11px] text-signal">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
