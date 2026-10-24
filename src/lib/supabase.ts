import { createClient } from "@supabase/supabase-js";

// Same backend as the Lovable-hosted site (Lovable Cloud / Supabase).
// The publishable key is public by design — it ships in client-side code.
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ??
  "https://c--1646f8ff-ff70-4a99-9802-5c6ef14776b1-prod.lovable.cloud";
const SUPABASE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  "sb_publishable_2dGijS1uXspbeScAR9TjZA_aRYNAf9s";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const WHATSAPP_NUMBER = "03059014270";
export const WHATSAPP_DISPLAY = "0305 9014270";

export type BottleSize = "100ml" | "150ml";

export const BOTTLE_SIZES: { value: BottleSize; label: string; sub: string }[] = [
  { value: "100ml", label: "100 ml", sub: "Classic bottle" },
  { value: "150ml", label: "150 ml", sub: "Bigger bottle" },
];

export const BUNDLE_PRICING: Record<BottleSize, Record<number, number>> = {
  "100ml": { 1: 1499, 2: 2999, 3: 4499 },
  "150ml": { 1: 1999, 2: 3999, 3: 5999 },
};

export const DELIVERY_FEE = 250;

export function bundleLabel(qty: number, size: BottleSize = "100ml"): string {
  const suffix = size === "150ml" ? " · 150 ml" : "";
  if (qty === 1) return "1 Bottle" + suffix;
  if (qty === 2) return "2 Bottles" + suffix;
  return "Family Pack · 3 Bottles" + suffix;
}
