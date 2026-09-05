export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  stack: string[];
  features: string[];
  liveUrl?: string;
  repoUrl?: string; // Leave undefined if there is no public repo — the UI hides the "View code" button automatically.
  image?: string; // Path under /public, e.g. "/projects/maillots-shop.png"
  mockupIcon?: string; // lucide-react icon name shown in the stylised browser mockup (falls back to Globe)
  featured?: boolean;
  status: "live" | "in-progress" | "prototype";
}

// Add new projects to this array — the Projects section renders straight from here,
// so no component changes are needed to add a new card.
export const projects: Project[] = [
  {
    slug: "maillots-shop",
    name: "Maillots Shop",
    description:
      "Une plateforme e-commerce permettant aux clients de découvrir et commander des maillots de football en ligne.",
    longDescription:
      "Boutique en ligne complète pensée pour le marché africain : catalogue filtrable, gestion des données produits via Supabase, tunnel de commande, paiement en ligne via PayTech et prise de contact directe par WhatsApp Business pour lever les frictions à l'achat.",
    stack: ["HTML", "CSS", "JavaScript", "Supabase", "Vercel", "Postman", "API", "PayTech"],
    features: [
      "Catalogue de maillots avec affichage des produits",
      "Filtrage des produits",
      "Interface responsive",
      "Gestion des données avec Supabase",
      "Système de commande",
      "Intégration du paiement via PayTech",
      "Support des moyens de paiement disponibles via PayTech",
      "Bouton WhatsApp Business avec redirection directe",
      "Déploiement continu avec Vercel",
    ],
    liveUrl: "https://maillots-shop.vercel.app",
    // repoUrl intentionally omitted — no public repository provided.
    image: "/projects/maillots-shop.png",
    mockupIcon: "ShoppingBag",
    featured: true,
    status: "live",
  },
  {
    slug: "ndayane-group",
    name: "Ndayane Group",
    description: "Site vitrine d'entreprise pour Ndayane Group.",
    longDescription:
      "Site vitrine présentant l'entreprise Ndayane Group, construit avec Next.js et déployé sur Vercel, avec Supabase pour la gestion des données.",
    stack: ["Next.js", "Supabase", "Vercel", "VS Code"],
    features: ["Page d'accueil présentant l'entreprise Ndayane Group"],
    liveUrl: "https://ndayane-group.vercel.app/",
    repoUrl: "https://github.com/poli-jpg/Ndayane-group.git",
    image: "/projects/ndayane-group.png",
    mockupIcon: "Building2",
    status: "live",
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
