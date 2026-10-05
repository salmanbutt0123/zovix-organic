import lifestyleImg from "../assets/zovix-lifestyle.webp";
const STEPS = [
  {
    n: "01",
    title: "Halka neem garam karein",
    body: "Thoda sa oil lein aur halka neem garam karein — zyada garam na karein.",
  },
  {
    n: "02",
    title: "5 minute ka massage",
    body: "Ungliyon ke poron se 5 minute tak scalp aur jaron mein narmi se massage karein.",
  },
  {
    n: "03",
    title: "2+ ghante laga rehne dein",
    body: "Kam az kam 2 ghante ya raat bhar laga rehne dein, phir apne normal shampoo se dho lein.",
  },
];

export default function HowToUse() {
  return (
    <section className="bg-[#f3ede1] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={lifestyleImg}
              alt="ZOVIX in a warm bathroom ritual setting"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6a1f]">
              Istemaal ka tareeqa
            </p>
            <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">Sirf 3 asaan steps.</h2>
            <p className="mt-3 max-w-md text-[15px] text-[#5c4f3d]">
              Behtareen nataij ke liye apni routine ka hissa bana kar baqaida istemaal karein.
              Khulne ke 12 mah ke andar istemaal karein.
            </p>
            <div className="mt-8 space-y-4">
              {STEPS.map((s) => (
                <div key={s.n} className="flex gap-4 rounded-2xl bg-[#faf7f1] p-5 shadow-sm">
                  <p className="font-serif text-sm font-semibold text-[#b98a2f]">{s.n}</p>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-[#5c4f3d]">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
