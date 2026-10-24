import { BOTTLE_SIZES, type BottleSize } from "../lib/supabase";

export default function SizePills({
  size,
  onChange,
}: {
  size: BottleSize;
  onChange: (s: BottleSize) => void;
}) {
  return (
    <div className="flex gap-2.5">
      {BOTTLE_SIZES.map((b) => {
        const active = b.value === size;
        return (
          <button
            key={b.value}
            type="button"
            onClick={() => onChange(b.value)}
            aria-pressed={active}
            className={`flex-1 rounded-full border-2 px-4 py-2.5 text-center transition-all duration-300 sm:max-w-[220px] ${
              active
                ? "border-[#b98a2f] bg-[#2b2118] text-white shadow-md"
                : "border-[#e8dfcd] bg-white text-[#5c4f3d] hover:border-[#b98a2f]/50"
            }`}
          >
            <span className="block text-[15px] font-bold">
              {b.label}
              {b.value === "150ml" && (
                <span className={`ml-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${active ? "bg-[#b98a2f] text-white" : "bg-[#b98a2f]/15 text-[#b98a2f]"}`}>
                  New
                </span>
              )}
            </span>
            <span className={`block text-[11px] ${active ? "text-white/70" : "text-[#a89a7d]"}`}>
              {b.sub}
            </span>
          </button>
        );
      })}
    </div>
  );
}
