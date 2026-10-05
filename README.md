# Zovix Organic — Hair Oil Storefront

Standalone rebuild of the Zovix Organic Hair Oil site (originally built in Lovable).
Vite + React + TypeScript + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

## Backend

Orders go straight to the existing Supabase (Lovable Cloud) project via the
`place_order(_customer_name, _phone, _address, _city, _note, _quantity)` RPC.
The publishable key in `src/lib/supabase.ts` is public by design (client-side).
Override with env vars if you ever move backends:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
```

## Admin

Open `#/admin` in the deployed URL, sign in with the Supabase Auth admin account,
and view incoming orders.

## Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages): build command `npm run build`,
output dir `dist`.
