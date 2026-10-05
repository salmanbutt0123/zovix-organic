import lifestyleImg from "../assets/zovix-lifestyle.webp";
const STEPS = [
  {
    n: "01",
    title: "Warm it lightly",
    body: "Take a little oil and warm it gently — never overheat.",
  },
  {
    n: "02",
    title: "5-minute massage",
    body: "Massage gently into the scalp and roots with your fingertips for 5 minutes.",
  },
  {
    n: "03",
    title: "Leave for 2+ hours",
    body: "Leave on for at least 2 hours or overnight, then wash with your regular shampoo.",
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
              How to use
            </p>
            <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">Three simple steps.</h2>
            <p className="mt-3 max-w-md text-[15px] text-[#5c4f3d]">
              For best results, use regularly as part of your routine. Use within 12 months of
              opening.
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
