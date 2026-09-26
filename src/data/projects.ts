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
    slug: "paint-reverie",
    name: "The Paint Reverie",
    description:
      "Site de réservation en ligne pour des ateliers de peinture à Dakar, avec un espace d'administration complet.",
    longDescription:
      "Plateforme sur mesure pour The Paint Reverie, une créatrice d'ateliers de peinture à Dakar : les visiteurs découvrent les prochains ateliers, réservent leur place en quelques clics et demandent des ateliers privés, pendant que la gérante pilote tout depuis un espace admin sécurisé (ateliers, réservations, demandes, galerie) et répond à ses clients sur WhatsApp en un clic.",
    stack: ["Next.js", "TypeScript", "Supabase", "Resend", "Zod", "Vercel"],
    features: [
      "Réservation en ligne avec places restantes en temps réel",
      "Réservation sécurisée côté base (pas de surréservation)",
      "Formulaire de demande d'ateliers privés",
      "Espace admin protégé par authentification",
      "Gestion des ateliers, réservations et demandes",
      "Confirmation et relance des clients via WhatsApp",
      "Export CSV des réservations",
      "Galerie photos et vidéos administrable",
      "Notifications e-mail avec Resend",
      "Design sur mesure et responsive",
    ],
    liveUrl: "https://paint-reverie.vercel.app",
    mockupIcon: "Palette",
    status: "live",
  },
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
