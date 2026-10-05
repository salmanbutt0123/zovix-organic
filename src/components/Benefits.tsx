import textureImg from "../assets/zovix-oil-texture.webp";
const BENEFITS = [
  {
    n: "01",
    title: "Support healthy growth",
    body: "Natural oils nourish the scalp and support a healthy growth routine.",
  },
  {
    n: "02",
    title: "Strengthen roots",
    body: "The cold-pressed formula helps protect roots and strands from everyday damage.",
  },
  {
    n: "03",
    title: "Reduce hair fall",
    body: "Regular massage improves scalp care and gives strength to weak hair.",
  },
  {
    n: "04",
    title: "Boost natural shine",
    body: "Hair feels soft, manageable, and naturally lustrous — without a greasy finish.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#f3ede1] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6a1f]">
              18+ natural oils &amp; herbs
            </p>
            <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">
              Every drop has a purpose.
            </h2>
            <p className="mt-3 max-w-md text-[15px] text-[#5c4f3d]">
              A focused formula with clear benefits. No empty claims — just a consistent hair-care
              routine.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div key={b.n} className="rounded-2xl bg-[#faf7f1] p-5 shadow-sm">
                  <p className="font-serif text-xs font-semibold text-[#b98a2f]">{b.n}</p>
                  <h3 className="mt-1 text-base font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5c4f3d]">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={textureImg}
              alt="Cold-pressed golden oil texture"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
