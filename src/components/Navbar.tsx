import { useState } from "react";
import { WHATSAPP_DISPLAY } from "../lib/supabase";

const LINKS = [
  { label: "Fayde", href: "#benefits" },
  { label: "Bundles", href: "#bundles" },
  { label: "Order", href: "#order" },
  { label: "FAQs", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8dfcd] bg-[#faf7f1]/95 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4">
        <div className="flex items-center">
          <button
            className="rounded p-2 hover:bg-[#f3ede1] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="block h-0.5 w-6 bg-[#2b2118]"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-[#2b2118]"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-[#2b2118]"></span>
          </button>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[#5c4f3d] hover:text-[#2b2118]">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <a href="#top" className="justify-self-center">
          <span className="font-serif text-2xl font-semibold tracking-[0.18em] text-[#b98a2f]">
            ZOVIX
          </span>
        </a>

        <div className="flex items-center justify-end gap-3">
          <a
            href={`https://wa.me/923059014270?text=${encodeURIComponent(
              "Assalam-o-Alaikum! I want to order ZOVIX Organic Hair Oil."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-semibold text-[#4a5d3a] sm:block"
          >
            {WHATSAPP_DISPLAY}
          </a>
          <a
            href="#order"
            className="rounded-full bg-[#2b2118] px-5 py-2 text-sm font-semibold text-white hover:bg-[#b98a2f]"
          >
            Order Karein
          </a>
        </div>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full border-b border-[#e8dfcd] bg-[#faf7f1]/85 px-4 py-3 shadow-lg backdrop-blur-md md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[15px] font-medium text-[#5c4f3d]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
