// Icon names reference lucide-react components (see src/components/ToolIcon.tsx for the mapping).
// Where no official brand icon is available in lucide, a close conceptual icon is used instead.
export interface Tool {
  name: string;
  icon: string;
}

export const tools: Tool[] = [
  { name: "GitHub", icon: "Github" },
  { name: "Git", icon: "GitBranch" },
  { name: "Vercel", icon: "Triangle" },
  { name: "Supabase", icon: "Database" },
  { name: "Postman", icon: "Send" },
  { name: "WordPress", icon: "Layout" },
  { name: "WooCommerce", icon: "ShoppingCart" },
  { name: "Elementor", icon: "LayoutGrid" },
  { name: "PayTech", icon: "CreditCard" },
  { name: "MySQL", icon: "Cylinder" },
  { name: "Canva", icon: "Palette" },
  { name: "VS Code", icon: "Code2" },
];
