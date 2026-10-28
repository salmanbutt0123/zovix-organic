import { WHATSAPP_DISPLAY } from "../lib/supabase";

export default function FinalCta() {
  return (
    <>
      <section className="bg-[#2b2118] py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b98a2f]">
            Rs 250 delivery · Cash on Delivery
          </p>
          <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">
            Give your hair natural care.
          </h2>
          <p className="mt-4 text-white/70">
            ZOVIX Organic Hair Oil — only Rs 1,499, plus Rs 250 delivery.
          </p>
          <p className="mt-1 text-sm text-white/50">Tap the button and send your name and address.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#order"
              className="rounded-full bg-[#b98a2f] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#8f6a1f]"
            >
              Order Now — Rs 1,499
            </a>
            <a
              href={`https://wa.me/923059014270?text=${encodeURIComponent(
                "Assalam-o-Alaikum! I want to order ZOVIX Organic Hair Oil."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#2b2118]"
            >
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
