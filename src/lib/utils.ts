import { type ClassValue, clsx } from "./clsx";

// Minimal className combiner (avoids pulling in extra dependencies for a single helper).
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
