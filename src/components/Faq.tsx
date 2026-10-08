import { useState } from "react";

const FAQS = [
  {
    q: "How long does delivery take?",
    a: "Usually 2–4 working days across Pakistan.",
  },
  {
    q: "Is Cash on Delivery available?",
    a: "Yes. Pay in cash when your parcel arrives.",
  },
  {
    q: "Which hair types is it for?",
    a: "ZOVIX can be used for routine care of all hair types. Always patch-test before first use.",
  },
  {
    q: "How do I order?",
    a: "Tap the WhatsApp order button or enter your details in the website form.",
  },
  {
    q: "What if my parcel arrives damaged?",
    a: "Send an unboxing video or a clear photo — a damaged parcel will be replaced free.",
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
          Know before you order.
        </h2>
        <p className="mt-3 text-sm text-[#5c4f3d]">
          For external use only. Patch-test before first use. Stop use if irritation occurs. Results
          may vary from person to person.
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
