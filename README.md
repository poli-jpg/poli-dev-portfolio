# Poli Dev — Portfolio

Portfolio professionnel construit avec **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** et **lucide-react**.

## Aperçu de l'architecture

```
src/
├── app/            → routes Next.js (layout, page, sitemap, styles globaux)
├── components/      → composants réutilisables (Navbar, Footer, ThemeToggle, ...)
├── sections/        → une section de page = un fichier (Hero, About, Skills, Projects, ...)
├── data/            → contenu du portfolio (projets, compétences, contact, ...)
└── lib/             → petits utilitaires
```

Le contenu est volontairement séparé du code : pour ajouter un projet, une compétence ou changer
une coordonnée de contact, il suffit d'éditer un fichier dans `src/data/`, aucune section n'a besoin
d'être modifiée.

| Je veux ajouter...              | Fichier à éditer                     |
|----------------------------------|----------------------------------------|
| Un nouveau projet                | `src/data/projects.ts`                 |
| Une compétence / catégorie       | `src/data/skills.ts`                   |
| Un outil dans la grille          | `src/data/tools.ts`                    |
| Une statistique                  | `src/data/stats.ts`                    |
| Mes coordonnées / bio            | `src/data/profile.ts`                  |
| Une compétence infra/réseaux     | `src/data/infrastructure.ts`           |

Pour ajouter plus tard des **certifications**, des **expériences professionnelles**, des **articles de blog**,
des **repositories GitHub** ou des **statistiques GitHub en direct**, crée simplement un nouveau fichier dans
`src/data/` (ex. `certifications.ts`) suivant le même modèle, puis une nouvelle section dans `src/sections/`
qui le consomme et l'ajoute à `src/app/page.tsx`.

## 1. Installer le projet

Prérequis : [Node.js](https://nodejs.org) 18.17 ou plus récent, et npm (ou pnpm/yarn).

```bash
# Dézippe l'archive, puis place-toi dans le dossier
cd poli-dev-portfolio

# Installe les dépendances
npm install
```

## 2. Lancer le projet en local

```bash
npm run dev
```

Le site est alors accessible sur [http://localhost:3000](http://localhost:3000).

## 3. Variables d'environnement

Aucune variable d'environnement n'est requise pour faire fonctionner le portfolio tel quel : tout le
contenu est statique et vit dans `src/data/`.

Si tu branches plus tard un service externe (formulaire de contact via une API, statistiques GitHub en
direct, Supabase pour des données dynamiques...), crée un fichier `.env.local` à la racine du projet :

```bash
# .env.local (exemple, à adapter selon les services que tu ajoutes)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

`.env.local` est déjà ignoré par Git (voir `.gitignore`), tes clés ne seront jamais publiées.

## 4. Publier sur GitHub

```bash
git init
git add .
git commit -m "Initial commit — Poli Dev portfolio"
git branch -M main
git remote add origin https://github.com/poli-jpg/poli-dev-portfolio.git
git push -u origin main
```

## 5. Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec ton compte GitHub.
2. Clique sur **Add New → Project**, puis sélectionne le repository que tu viens de pousser.
3. Vercel détecte automatiquement Next.js — laisse les réglages par défaut (`next build`).
4. Si tu as ajouté des variables d'environnement à l'étape 3, renseigne-les dans
   **Project Settings → Environment Variables** avant de déployer.
5. Clique sur **Deploy**. Ton portfolio sera en ligne en quelques minutes sur une URL du type
   `https://poli-dev-portfolio.vercel.app`.
6. Pense à mettre à jour `siteUrl` dans `src/data/profile.ts` avec ton URL finale (utilisé pour le
   SEO, l'Open Graph et le sitemap), puis à re-déployer.

## Contenu à personnaliser avant mise en ligne

- `src/data/profile.ts` → LinkedIn et Instagram sont laissés vides (placeholders) — ajoute tes liens si tu veux qu'ils apparaissent dans la section Contact.
- `public/projects/` → dépose une vraie capture d'écran de Maillots Shop (ex. `maillots-shop.png`) pour remplacer le mockup stylisé généré par défaut.
- `public/profile-photo.jpg` → remplace ce placeholder par ta vraie photo (idéalement environ 800×1000px, format portrait) pour qu'elle s'affiche dans le Hero.
- `public/favicon.svg` → remplace par ton propre favicon si besoin.

## Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev)
- [next-themes](https://github.com/pacocoursey/next-themes) (dark/light mode persistant)
