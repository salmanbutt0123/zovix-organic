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

export const BUNDLE_PRICING: Record<number, number> = {
  1: 1600,
  2: 3000,
  3: 4200,
};

export function bundleLabel(qty: number): string {
  if (qty === 1) return "1 Bottle";
  if (qty === 2) return "2 Bottles";
  return "Family Pack · 3 Bottles";
}
