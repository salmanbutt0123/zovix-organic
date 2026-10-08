import { useState } from "react";

const FAQS = [
  {
    q: "Delivery mein kitna waqt lagta hai?",
    a: "Aam tor par Pakistan bhar mein 2–4 working days.",
  },
  {
    q: "Kya Cash on Delivery available hai?",
    a: "Jee haan. Parcel milne par cash mein payment karein.",
  },
  {
    q: "Ye kin baalon ke liye hai?",
    a: "ZOVIX tamam hair types ki routine care mein istemaal ho sakta hai. Pehli dafa istemaal se pehle patch-test zaroor karein.",
  },
  {
    q: "Order kaise karein?",
    a: "WhatsApp order button dabayein ya website form mein apni details likhein.",
  },
  {
    q: "Agar parcel toota-phoota aaye to?",
    a: "Unboxing video ya wazeh tasveer bhej dein — toota-phoota parcel muft replace hoga.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-14">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6a1f]">
          Aam sawalat
        </p>
        <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">
          Order karne se pehle jaan lein.
        </h2>
        <p className="mt-3 text-sm text-[#5c4f3d]">
          Sirf bahar se lagane ke liye. Pehli dafa istemaal se pehle patch-test karein. Agar jalan
          ho to istemaal rok dein. Nataij har shakhs ke liye mukhtalif ho sakte hain.
        </p>
        <div className="mt-8 divide-y divide-[#e8dfcd] rounded-2xl border border-[#e8dfcd] bg-[#faf7f1]">
          {FAQS.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold"
              >
                <span>{f.q}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f3ede1] text-lg leading-none text-[#b98a2f] transition-transform duration-300 ease-in-out ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-[15px] text-[#5c4f3d]">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
