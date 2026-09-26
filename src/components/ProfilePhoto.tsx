import Image from "next/image";

// Photo : /public/profile-photo.jpg (format portrait conseillé, ~800x1000 px).
export function ProfilePhoto() {
  return (
    <div className="relative w-56 sm:w-64 lg:w-72">
      <div className="absolute -inset-4 -z-10 rounded-[32px] bg-accent/10 blur-2xl" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
        <Image
          src="/profile-photo.jpg"
          alt="Photo de Poli Dev"
          fill
          priority
          sizes="(max-width: 1024px) 256px, 288px"
          className="object-cover grayscale-[30%]"
        />
      </div>
    </div>
  );
}
