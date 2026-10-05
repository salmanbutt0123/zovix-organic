import { useState } from "react";

const FAQS = [
  {
    q: "How long does delivery take?",
    a: "Usually 2–4 working days, anywhere in Pakistan.",
  },
  {
    q: "Is Cash on Delivery available?",
    a: "Yes. Pay in cash when your parcel arrives.",
  },
  {
    q: "Which hair types is it for?",
    a: "ZOVIX can be used in the routine care of all hair types. Always patch-test before first use.",
  },
  {
    q: "How do I order?",
    a: "Tap the WhatsApp order button or submit your details in the website form.",
  },
  {
    q: "What if my parcel arrives damaged?",
    a: "Share an unboxing video or clear photo proof — a damaged parcel will be replaced free.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-14">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6a1f]">
          Common questions
        </p>
        <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">
          What to know before you order.
        </h2>
        <p className="mt-3 text-sm text-[#5c4f3d]">
          External use only. Patch-test before first use. Stop use if irritation occurs. Individual
          results vary.
        </p>
        <div className="mt-8 divide-y divide-[#e8dfcd] rounded-2xl border border-[#e8dfcd] bg-[#faf7f1]">
          {FAQS.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold"
              >
                <span>{f.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f3ede1] text-lg leading-none text-[#b98a2f]">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && <p className="px-6 pb-5 text-[15px] text-[#5c4f3d]">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
