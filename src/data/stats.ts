export interface Stat {
  value: number | "infinity";
  suffix?: string;
  label: string;
}

// Kept intentionally honest — no invented years of experience or client counts.
export const stats: Stat[] = [
  { value: 6, suffix: "+", label: "Technologies maîtrisées" },
  { value: 4, suffix: "+", label: "Projets / prototypes" },
  { value: 1, label: "E-commerce en production" },
  { value: "infinity", label: "Idées à construire" },
];
