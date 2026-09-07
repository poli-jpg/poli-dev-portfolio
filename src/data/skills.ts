export interface Skill {
  name: string;
  level?: "learning"; // Reserved for flagging a skill currently in progress.
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

// Grouped by category so the Skills section can render each block independently.
// Add a skill by pushing into the relevant category's `skills` array.
export const skillCategories: SkillCategory[] = [
  {
    title: "Langages",
    description: "Les langages que j'utilise au quotidien pour construire des applications.",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "SQL / MySQL" },
    ],
  },
  {
    title: "Développement web",
    description: "De la maquette au site en production, front-end comme back-end léger.",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "WordPress" },
      { name: "API REST" },
    ],
  },
  {
    title: "Backend & Bases de données",
    description: "Modéliser, stocker et sécuriser les données d'une application.",
    skills: [
      { name: "PHP PDO" },
      { name: "MySQL" },
      { name: "Supabase" },
      { name: "API" },
      { name: "Authentification" },
      { name: "Gestion des bases de données" },
    ],
  },
  {
    title: "Outils",
    description: "L'environnement de travail que j'utilise pour livrer un projet de bout en bout.",
    skills: [
      { name: "GitHub" },
      { name: "Git" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "Supabase" },
      { name: "Canva" },
      { name: "WordPress" },
    ],
  },
];
