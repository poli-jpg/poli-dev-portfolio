export type ClassValue = string | number | null | boolean | undefined | ClassValue[];

export function clsx(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (val: ClassValue) => {
    if (!val) return;
    if (Array.isArray(val)) {
      val.forEach(walk);
    } else {
      out.push(String(val));
    }
  };
  inputs.forEach(walk);
  return out.join(" ");
}
