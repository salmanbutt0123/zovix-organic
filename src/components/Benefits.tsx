import textureImg from "../assets/zovix-oil-texture.webp";
const BENEFITS = [
  {
    n: "01",
    title: "Sehatmand growth",
    body: "Qudrati oils scalp ko ghiza dete hain aur healthy growth routine mein madad karte hain.",
  },
  {
    n: "02",
    title: "Mazboot jarein",
    body: "Cold-pressed formula jaron aur baalon ko rozana ke nuqsan se bachane mein madad karta hai.",
  },
  {
    n: "03",
    title: "Baal girna kam kare",
    body: "Baqaida massage scalp ki dekhbhal behtar karta hai aur kamzor baalon ko taqat deta hai.",
  },
  {
    n: "04",
    title: "Qudrati chamak",
    body: "Baal naram, asaan aur qudrati chamakdar mehsoos hote hain — chipchipepan ke baghair.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#f3ede1] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6a1f]">
              18+ qudrati oils &amp; herbs
            </p>
            <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">
              Every drop has a purpose.
            </h2>
            <p className="mt-3 max-w-md text-[15px] text-[#5c4f3d]">
              Wazeh faydon wala focused formula. Koi khokhle daway nahi — bas mustaqil hair-care
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
