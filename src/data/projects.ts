export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
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
    slug: "cahier-commerce",
    name: "Cahier — gestion pour petits commerces",
    description:
      "Application de gestion pour les boutiques et petits commerces : ventes, Lebalma, clients et stock, directement sur le téléphone.",
    longDescription:
      "Mon propre produit : un cahier de gestion numérique qui remplace le cahier papier du commerçant. Il enregistre ses ventes, suit les ventes à crédit (Lebalma) et les remboursements de ses clients, gère ses produits et son stock, et voit où en est sa caisse. Application mobile (PWA), testée avec une boutique de cosmétiques, avec 14 jours d'essai gratuit puis abonnement.",
    features: [
      "Enregistrement rapide des ventes",
      "Suivi du Lebalma (ventes à crédit) et des remboursements",
      "Fiches clients avec ce qu'ils doivent",
      "Gestion des produits et du stock",
      "Suivi financier de la boutique",
      "Application mobile installable (PWA)",
      "14 jours d'essai gratuit puis abonnement",
    ],
    mockupIcon: "NotebookPen",
    status: "live",
  },
  {
    slug: "ligeey",
    name: "Ligeey — artisans du bâtiment",
    description:
      "Application qui met en relation les travailleurs du bâtiment avec les clients : maçons, électriciens, plombiers, peintres, menuisiers…",
    longDescription:
      "Ligeey aide à digitaliser les métiers du bâtiment au Sénégal : chaque artisan a son profil, les clients le trouvent par métier et par zone, le contactent directement et laissent un avis après le travail. Des badges de confiance (téléphone vérifié, identité validée) rassurent les clients et aident les artisans à trouver du travail.",
    features: [
      "Profils d'artisans par métier",
      "Recherche filtrée par métier et par zone",
      "Contact direct entre client et artisan",
      "Avis des clients après le travail",
      "Badges de confiance : téléphone vérifié, identité validée",
      "Connexion par téléphone et mot de passe",
      "Application mobile installable (PWA)",
    ],
    mockupIcon: "HardHat",
    status: "live",
  },
  {
    slug: "maillots-shop",
    name: "Maillots Shop",
    description:
      "Une plateforme e-commerce permettant aux clients de découvrir et commander des maillots de football en ligne.",
    longDescription:
      "Boutique en ligne complète pensée pour le marché africain : catalogue filtrable, gestion des données produits via Supabase, tunnel de commande, paiement en ligne via PayTech et prise de contact directe par WhatsApp Business pour lever les frictions à l'achat.",
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
    longDescription: "Site vitrine présentant l'entreprise Ndayane Group.",
    features: ["Page d'accueil présentant l'entreprise Ndayane Group"],
    liveUrl: "https://ndayane-group.vercel.app/",
    repoUrl: "https://github.com/poli-jpg/Ndayane-group.git",
    image: "/projects/ndayane-group.png",
    mockupIcon: "Building2",
    status: "live",
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
