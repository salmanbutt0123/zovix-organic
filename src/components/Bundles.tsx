import { useState } from "react";
import bundleImg from "../assets/zovix-bundle.webp";
import { BUNDLE_PRICING, type BottleSize } from "../lib/supabase";
import SizePills from "./SizePills";
const BUNDLES = [
  {
    tag: "Launch bundle",
    title: "1 Bottle",
    qty: 1,
    note: "Single bottle",
    highlight: false,
  },
  {
    tag: "Most popular",
    title: "2 Bottles",
    qty: 2,
    note: "2 bottles",
    highlight: true,
  },
  {
    tag: "Launch bundle",
    title: "Family Pack",
    qty: 3,
    note: "3 bottles",
    highlight: false,
  },
];

export default function Bundles() {
  const [size, setSize] = useState<BottleSize>("100ml");
  return (
    <section id="bundles" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6a1f]">
              Launch bundles
            </p>
            <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">Choose your pack.</h2>
            <p className="mt-3 text-[15px] text-[#5c4f3d]">
              Rs 250 delivery charges and Cash on Delivery on every pack.
            </p>
            <div className="mt-6">
              <SizePills size={size} onChange={setSize} />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {BUNDLES.map((b) => (
                <div
                  key={b.qty}
                  className={`rounded-2xl border p-6 text-center transition-colors duration-300 ${
                    b.highlight
                      ? "border-[#b98a2f] bg-[#2b2118] text-white shadow-xl"
                      : "border-[#e8dfcd] bg-[#faf7f1]"
                  }`}
                >
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      b.highlight ? "bg-[#b98a2f] text-white" : "bg-[#f3ede1] text-[#8f6a1f]"
                    }`}
                  >
                    {b.tag}
                  </span>
                  <h3 className="font-serif mt-3 text-xl font-semibold">
                    {b.title} · {size === "150ml" ? "150 ml" : "100 ml"}
                  </h3>
                  <p
                    key={`${size}-${b.qty}`}
                    className="font-serif price-pop mt-1 text-2xl font-semibold text-[#b98a2f]"
                  >
                    Rs {BUNDLE_PRICING[size][b.qty].toLocaleString("en-PK")}
                  </p>
                  <p className={`mt-1 text-sm ${b.highlight ? "text-white/70" : "text-[#5c4f3d]"}`}>
                    {b.note}
                  </p>
                  <a
                    href="#order"
                    className={`mt-5 block rounded-full py-2.5 text-sm font-semibold ${
                      b.highlight
                        ? "bg-[#b98a2f] text-white transition-colors hover:bg-[#8f6a1f]"
                        : "bg-[#2b2118] text-white hover:bg-[#b98a2f]"
                    }`}
                  >
                    Order Now
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={bundleImg}
                alt="ZOVIX bundle — bottle and premium box"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
