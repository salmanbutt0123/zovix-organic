import heroImg from "../assets/zovix-hero.jpg";
import heroMobileImg from "../assets/zovix-hero-mobile.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#2b2118]">
      <picture>
        <source media="(max-width: 767px)" srcSet={heroMobileImg} />
        <img
          src={heroImg}
          alt="ZOVIX Organic Cold Press Hair Oil — bottle and premium box"
          className="h-[62vh] min-h-[440px] w-full object-cover md:h-[82vh] md:min-h-[540px]"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-[#17100a]/95 via-[#17100a]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-4xl px-4 pb-12 text-center md:pb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e8c877]">
            100% Cold-Pressed · 18+ Natural Oils
          </p>
          <h1 className="font-serif mt-4 text-5xl font-medium leading-[1.05] text-white md:text-7xl">
            Not your ordinary formula
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/85 md:text-base">
            Cold Press Formula — Naturally Powerful. An 18+ oil blend crafted for healthy-looking
            growth, stronger roots, and natural shine.
          </p>
          <a
            href="#order"
            className="mt-7 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-white underline underline-offset-8 hover:text-[#e8c877]"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
