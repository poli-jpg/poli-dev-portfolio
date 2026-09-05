import {
  Github,
  GitBranch,
  Triangle,
  Database,
  Send,
  Layout,
  ShoppingCart,
  LayoutGrid,
  CreditCard,
  Terminal,
  Server,
  Cylinder,
  Palette,
  Code2,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Github,
  GitBranch,
  Triangle,
  Database,
  Send,
  Layout,
  ShoppingCart,
  LayoutGrid,
  CreditCard,
  Terminal,
  Server,
  Cylinder,
  Palette,
  Code2,
};

export function ToolIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = iconMap[name] ?? Code2;
  return <Icon {...props} />;
}
