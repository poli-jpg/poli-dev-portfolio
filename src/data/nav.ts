export interface NavLink {
  label: string;
  href: string;
}

// Central nav config — edit here to add/remove sections from the sticky navbar.
// "Experience" and "Education" were removed for now — there's no real content to
// point them at yet. Add them back (with matching section ids) once you have
// professional experience or education/certifications to showcase.
export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
