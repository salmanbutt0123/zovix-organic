import heroImg from "../assets/zovix-hero.jpg";
import heroMobileImg from "../assets/zovix-hero-mobile.jpg";

export default function Hero() {
  return (
    <section id="top" className="bg-[#17100a]">
      <picture>
        <source media="(max-width: 767px)" srcSet={heroMobileImg} />
        <img
          src={heroImg}
          alt="ZOVIX Organic Cold Press Hair Oil — bottle and premium box"
          className="h-[68vh] min-h-[480px] w-full object-cover md:h-[78vh] md:min-h-[520px]"
        />
      </picture>
      <div className="mx-auto max-w-4xl px-4 py-10 text-center md:py-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e8c877] md:text-xs md:tracking-[0.25em]">
          100% Cold-Pressed · 18+ Qudrati Oils
        </p>
        <h1 className="font-serif mt-4 text-5xl font-medium leading-[1.05] text-white md:text-7xl">
          Not your ordinary formula
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/85 md:text-base">
          Cold-press ka qudrati power — 18+ oils ka khaas blend, lambe, mazboot aur chamakdar
          baalon ke liye.
        </p>
        <a
          href="#order"
          className="mt-7 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-white underline underline-offset-8 hover:text-[#e8c877]"
        >
          Abhi Order Karein
        </a>
      </div>
    </section>
  );
}
