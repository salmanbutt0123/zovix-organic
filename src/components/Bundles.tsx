import bundleImg from "../assets/zovix-bundle.webp";
const BUNDLES = [
  {
    tag: "Launch bundle",
    title: "1 Bottle",
    price: "Rs 1,600",
    note: "Single bottle",
    highlight: false,
  },
  {
    tag: "Most popular",
    title: "2 Bottles",
    price: "Rs 3,000",
    note: "Save Rs 200",
    highlight: true,
  },
  {
    tag: "Launch bundle",
    title: "Family Pack",
    price: "Rs 4,200",
    note: "3 bottles · Save Rs 600",
    highlight: false,
  },
];

export default function Bundles() {
  return (
    <section id="bundles" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6a1f]">
              Launch bundles
            </p>
            <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">Choose your pack.</h2>
            <p className="mt-3 text-[15px] text-[#5c4f3d]">
              FREE delivery and Cash on Delivery on every pack.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {BUNDLES.map((b) => (
                <div
                  key={b.title}
                  className={`rounded-2xl border p-6 text-center ${
                    b.highlight
                      ? "border-[#b98a2f] bg-[#2b2118] text-white shadow-xl"
                      : "border-[#e8dfcd] bg-[#faf7f1]"
                  }`}
                >
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      b.highlight ? "bg-[#b98a2f] text-white" : "bg-[#f3ede1] text-[#8f6a1f]"
                    }`}
                  >
                    {b.tag}
                  </span>
                  <h3 className="font-serif mt-3 text-xl font-semibold">{b.title}</h3>
                  <p className="font-serif mt-1 text-2xl font-semibold text-[#b98a2f]">{b.price}</p>
                  <p className={`mt-1 text-sm ${b.highlight ? "text-white/70" : "text-[#5c4f3d]"}`}>
                    {b.note}
                  </p>
                  <a
                    href="#order"
                    className={`mt-5 block rounded-full py-2.5 text-sm font-semibold ${
                      b.highlight
                        ? "bg-[#b98a2f] text-white transition-colors hover:bg-[#8f6a1f]"
                        : "bg-[#2b2118] text-white hover:bg-[#b98a2f]"
                    }`}
                  >
                    Order Now
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={bundleImg}
                alt="ZOVIX bundle — bottle and premium box"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
