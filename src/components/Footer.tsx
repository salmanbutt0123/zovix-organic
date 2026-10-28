import { useState } from "react";

type Panel = "privacy" | "terms" | "contact" | null;

const WHATSAPP_DISPLAY = "0305 9014270";
const WHATSAPP_LINK = "https://wa.me/923059014270";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 first:mt-0">
      <h3 className="font-serif text-lg font-semibold text-[#2b2118]">{title}</h3>
      <div className="mt-1.5 text-[15px] leading-relaxed text-[#5c4f3d]">{children}</div>
    </div>
  );
}

export default function Footer() {
  const [open, setOpen] = useState<Panel>(null);

  const title =
    open === "privacy"
      ? "Privacy Policy"
      : open === "terms"
        ? "Terms & Conditions"
        : open === "contact"
          ? "Contact Us"
          : "";

  return (
    <footer className="border-t border-[#e8dfcd] bg-[#2b2118] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-serif text-2xl font-semibold">
              ZOVIX <span className="text-[#b98a2f]">Organic</span>
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
              Not your ordinary formula — cold-pressed natural power for long, strong,
              shiny hair.
            </p>
            <p className="mt-3 text-sm text-white/70">📍 Mardan, Pakistan</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#e8c877]">Questions about your order?</p>
            <p className="mt-2 text-sm text-white/70">Message us any time on WhatsApp:</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-base font-semibold text-white underline decoration-[#b98a2f] underline-offset-4"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-sm font-semibold">
          <button onClick={() => setOpen("privacy")} className="underline-offset-4 transition hover:underline">
            Privacy Policy
          </button>
          <button onClick={() => setOpen("terms")} className="underline-offset-4 transition hover:underline">
            Terms &amp; Conditions
          </button>
          <button onClick={() => setOpen("contact")} className="underline-offset-4 transition hover:underline">
            Contact Us
          </button>
          <a href="#order" className="underline-offset-4 transition hover:underline">
            Order Now
          </a>
        </div>

        <p className="mt-6 text-xs text-white/50">
          © 2026 Zovix Organic Hair Oil · Mardan, Pakistan
        </p>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
          <button
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="modal-backdrop absolute inset-0 bg-black/60"
          />
          <div className="modal-panel relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-[#faf7f1] p-6 text-[#2b2118] sm:rounded-2xl">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-serif text-2xl font-semibold">{title}</h2>
              <button
                onClick={() => setOpen(null)}
                aria-label="Close panel"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e8dfcd] text-lg font-bold transition hover:bg-[#f3ede1]"
              >
                ×
              </button>
            </div>

            {open === "privacy" && (
              <div>
                <Section title="What we collect">
                  When you place an order on our website, we collect your name, phone
                  number, address, and city. That&rsquo;s it — we don&rsquo;t create
                  accounts and we don&rsquo;t take online payments, so no card details
                  ever touch our website.
                </Section>
                <Section title="How we use it">
                  We use your details only to confirm your order (by phone call or
                  WhatsApp) and to deliver your parcel.
                </Section>
                <Section title="Who we share it with">
                  We share your name, address, and phone number with our courier company
                  so your parcel can reach you. We never sell your information or share
                  it with anyone else.
                </Section>
                <Section title="Cash on Delivery">
                  Payment happens in cash when your parcel arrives. We never ask for card
                  or bank details.
                </Section>
                <Section title="Questions?">
                  Message us on WhatsApp: {WHATSAPP_DISPLAY}. Email coming soon.
                </Section>
              </div>
            )}

            {open === "terms" && (
              <div>
                <Section title="Orders">
                  Placing an order on this website is a request, not a final sale. We
                  confirm every order by phone call or WhatsApp before dispatch.
                </Section>
                <Section title="Prices & payment">
                  Prices are shown in Pakistani Rupees. Delivery is a flat Rs 250 across
                  Pakistan. Payment is Cash on Delivery only — pay when your parcel
                  arrives.
                </Section>
                <Section title="Delivery">
                  Orders are delivered across Pakistan, usually in 2–4 working days.
                </Section>
                <Section title="Damaged parcels">
                  If your parcel arrives damaged, send us an unboxing video or a clear
                  photo on WhatsApp ({WHATSAPP_DISPLAY}) and replacement is free.
                </Section>
                <Section title="Contact">
                  WhatsApp: {WHATSAPP_DISPLAY} · Mardan, Pakistan. Email coming soon.
                </Section>
              </div>
            )}

            {open === "contact" && (
              <div>
                <p className="text-[15px] leading-relaxed text-[#5c4f3d]">
                  For orders and questions, message us any time on WhatsApp:
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-lg font-bold text-[#2b2118] underline decoration-[#b98a2f] underline-offset-4"
                >
                  {WHATSAPP_DISPLAY}
                </a>
                <p className="mt-3 text-[15px] text-[#5c4f3d]">📍 Mardan, Pakistan</p>
                <p className="mt-3 text-[15px] text-[#5c4f3d]">Email coming soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
