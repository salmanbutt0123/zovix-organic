import { useRef, useState } from "react";
import slideHero from "../assets/zovix-gallery-hero.jpg";
import slideFlatlay from "../assets/zovix-gallery-flatlay.jpg";

const SLIDES = [
  {
    src: slideHero,
    alt: "ZOVIX bottle and triangular box with botanical ingredients in golden light",
  },
  {
    src: slideFlatlay,
    alt: "Ingredients flat-lay — ZOVIX box with botanical ingredients and amber bottle",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = (i: number) => setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx < -50) go(index + 1);
    else if (dx > 50) go(index - 1);
    touchX.current = null;
  };

  return (
    <section id="top" className="bg-[#17100a]">
      {/* 2-slide gallery — approved design (Oct 25): no scrim, no caption chips */}
      <div
        className="relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s) => (
            <div key={s.src} className="min-w-full shrink-0">
              <img
                src={s.src}
                alt={s.alt}
                className="h-[74vh] min-h-[540px] w-full object-cover md:h-[84vh] md:min-h-[560px]"
              />
            </div>
          ))}
        </div>

        {/* Top badge — kept from the approved design */}
        <div
          className="hero-rise absolute right-4 top-4 z-10 rounded-2xl border border-white/35 bg-white/15 px-4 py-2.5 text-xs font-bold text-white shadow-lg backdrop-blur-md"
          style={{ animationDelay: "100ms" }}
        >
          100% Cold-Pressed · 100 ml
          <span className="mt-0.5 block text-[10px] font-medium opacity-85">
            18+ natural oils
          </span>
        </div>

        <button
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="absolute left-3 top-[42%] z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/35 text-xl text-white backdrop-blur-sm transition hover:scale-105 hover:bg-black/50"
        >
          ‹
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="absolute right-3 top-[42%] z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/35 text-xl text-white backdrop-blur-sm transition hover:scale-105 hover:bg-black/50"
        >
          ›
        </button>

        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-[#e8c877]" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ORDER NOW above the headline — approved design; headline given a wider space with balanced lines */}
      <div className="px-4 pb-9 pt-10 text-center md:pb-12">
        <a
          href="#order"
          className="hero-rise inline-block rounded-full bg-[#e8c877] px-10 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#17100a] shadow-md transition hover:bg-[#f4d98c] hover:shadow-xl"
          style={{ animationDelay: "200ms" }}
        >
          Order Now
        </a>
        <h1
          className="hero-rise mt-5 text-balance font-serif text-4xl font-medium leading-[1.05] text-white md:text-7xl"
          style={{ animationDelay: "320ms" }}
        >
          Not your ordinary formula
        </h1>
      </div>

      {/* Supporting copy below the gallery (the repeated "100% Cold-Pressed" eyebrow line was removed per Salman's direction — the badge on the gallery stays) */}
      <div
        className="hero-rise mx-auto max-w-xl px-4 pb-8 text-center md:pb-10"
        style={{ animationDelay: "460ms" }}
      >
        <p className="text-[15px] leading-relaxed text-white/85 md:text-base">
          Cold-pressed natural power — a special blend of 18+ oils for long, strong, shiny
          hair.
        </p>
      </div>
    </section>
  );
}
