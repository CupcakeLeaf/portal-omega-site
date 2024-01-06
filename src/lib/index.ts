// place files you want to import through the `$lib` alias in this folder.
export { default as PortalOmega } from './portal-omega.svelte';

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}