const REVIEWS = [
  {
    text: "Oil ka texture acha laga aur routine mein use karna easy hai.",
    name: "Ayesha K.",
  },
  {
    text: "Packaging premium hai aur baal wash ke baad soft feel huay.",
    name: "Sana M.",
  },
  {
    text: "Khushboo balanced hai aur scalp massage ke liye achi consistency hai.",
    name: "Hira A.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#f3ede1] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#8f6a1f]">Customer reviews</p>
        <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">Aap ki rai, hamari behtari.</h2>
        <p className="mt-3 text-sm text-[#5c4f3d]">
          Sample reviews — asli customer feedback milne par owner inhein replace karega.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl bg-[#faf7f1] p-6 shadow-sm">
              <p className="text-[#b98a2f]">★★★★★</p>
              <p className="mt-3 text-[#2b2118]">“{r.text}”</p>
              <p className="mt-4 font-semibold">{r.name}</p>
              <p className="text-xs text-[#8f6a1f]">Sample — not verified</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
