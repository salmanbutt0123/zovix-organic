export default function Ingredients() {
  return (
    <section className="bg-[#2b2118] py-14 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b98a2f]">
          Is mein kya hai?
        </p>
        <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">
          18+ oils. One powerful formula.
        </h2>
        <p className="mt-3 max-w-xl text-[15px] text-white/70">
          Packaging par di gayi ingredients list — teen asaan groups mein: growth, mazbooti aur
          scalp ki ghiza.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { t: "Growth", d: "Qudrati oils jo scalp ko ghiza dete hain aur healthy growth routine mein madad karte hain." },
            { t: "Mazbooti", d: "Cold-pressed oils jo jaron aur baalon ko rozana ke nuqsan se bachate hain." },
            { t: "Scalp ki ghiza", d: "Herbal extracts jo scalp ko sukoon dete hain aur uska qudrati tawazun barqarar rakhte hain." },
          ].map((g) => (
            <div key={g.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-serif text-xl font-semibold text-[#b98a2f]">{g.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{g.d}</p>
            </div>
          ))}
        </div>
        <p className="font-serif mt-10 text-center text-xl italic text-white/80">
          “What’s inside matters most.”
        </p>
        <p className="mt-1 text-center text-xs uppercase tracking-[0.2em] text-white/50">
          ZOVIX ka formulation usool
        </p>
      </div>
    </section>
  );
}
