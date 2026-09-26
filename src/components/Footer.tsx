import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 text-sm text-fg-dim sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#home" className="transition-colors hover:text-fg">Retour en haut ↑</a>
      </div>
    </footer>
  );
}
