import { WHATSAPP_DISPLAY } from "../lib/supabase";

export default function FinalCta() {
  return (
    <>
      <section className="bg-[#2b2118] py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b98a2f]">
            FREE delivery · Cash on Delivery
          </p>
          <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">
            Apne baalon ko qudrati dekhbhal dein.
          </h2>
          <p className="mt-4 text-white/70">
            ZOVIX Organic Hair Oil — sirf Rs 1,600, bilkul FREE delivery ke saath.
          </p>
          <p className="mt-1 text-sm text-white/50">Button dabayein aur apna naam aur pata bhej dein.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#order"
              className="rounded-full bg-[#b98a2f] px-8 py-3 font-semibold text-white hover:bg-[#8f6a1f]"
            >
              Order Karein — Rs 1,600
            </a>
            <a
              href={`https://wa.me/923059014270?text=${encodeURIComponent(
                "Assalam-o-Alaikum! I want to order ZOVIX Organic Hair Oil."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white hover:bg-white hover:text-[#2b2118]"
            >
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </section>
      <footer className="border-t border-[#e8dfcd] bg-[#faf7f1] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-[#8f6a1f] md:flex-row">
          <p className="font-serif text-lg font-semibold text-[#2b2118]">
            Zovix <span className="text-[#b98a2f]">Organic</span>
          </p>
          <p>© 2026 Zovix Organic · WhatsApp {WHATSAPP_DISPLAY}</p>
        </div>
      </footer>
    </>
  );
}
