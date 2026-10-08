import heroImg from "../assets/zovix-hero.jpg";
import heroMobileImg from "../assets/zovix-hero-mobile.jpg";

export default function Hero() {
  return (
    <section id="top" className="bg-[#17100a]">
      <div className="relative">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroMobileImg} />
          <img
            src={heroImg}
            alt="ZOVIX Organic Cold Press Hair Oil — bottle and premium box"
            className="h-[74vh] min-h-[540px] w-full object-cover object-[center_100%] md:h-[84vh] md:min-h-[560px]"
          />
        </picture>

        {/* Legibility scrim for the overlaid text */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

        {/* Headline + shop button overlaid on the image, Vegamour-style.
            The eyebrow line lives below the image so no small text clashes
            with the packaging's own label. */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 text-center md:pb-12">
          <h1 className="font-serif text-4xl font-medium leading-[1.05] text-white md:text-7xl">
            Not your ordinary formula
          </h1>
          <a
            href="#order"
            className="mt-5 inline-block rounded-full bg-[#e8c877] px-10 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#17100a] transition hover:bg-[#f4d98c] md:mt-7"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Eyebrow + supporting copy below the image */}
      <div className="mx-auto max-w-xl px-4 py-8 text-center md:py-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e8c877] md:text-xs md:tracking-[0.25em]">
          100% Cold-Pressed · 18+ Natural Oils
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-white/85 md:text-base">
          Cold-pressed natural power — a special blend of 18+ oils for long, strong, shiny
          hair.
        </p>
      </div>
    </section>
  );
}
