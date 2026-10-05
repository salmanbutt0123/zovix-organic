import { useState } from "react";
import { BUNDLE_PRICING, bundleLabel, supabase } from "../lib/supabase";

const inputCls =
  "w-full rounded-xl border border-[#e8dfcd] bg-white px-4 py-3 text-[15px] text-[#2b2118] placeholder-[#a89a7d] focus:border-[#b98a2f] focus:outline-none";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const [qty, setQty] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const price = BUNDLE_PRICING[qty];

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim() || !city.trim()) {
      setErrorMsg("Apna naam, phone, pata aur sheher zaroor likhein.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    const { error } = await supabase.rpc("place_order", {
      _customer_name: name.trim(),
      _phone: phone.trim(),
      _address: address.trim(),
      _city: city.trim(),
      _note: note.trim() || null,
      _quantity: qty,
    });
    if (error) {
      setErrorMsg("Aapka order save nahi ho saka. Dobara try karein ya WhatsApp par order karein.");
      setStatus("error");
    } else {
      setStatus("done");
    }
  }

  return (
    <section id="order" className="bg-[#faf7f1] py-14">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6a1f]">
          Aapke darwaze tak
        </p>
        <h2 className="font-serif mt-3 text-3xl font-medium md:text-4xl">Website se order karein.</h2>
        <p className="mt-3 max-w-xl text-[15px] text-[#5c4f3d]">
          Apni details ek dafa likhein. Hum aapka order save kar ke confirm karne ke liye rabta
          karein ge.
        </p>
        <p className="mt-2 text-sm text-[#5c4f3d]">100 ml · Rs 1,600 (1 bottle) · neeche bundles dekhein</p>
        <p className="mt-1 text-sm font-medium text-[#4a5d3a]">
          Pure Pakistan mein FREE delivery · Cash on Delivery
        </p>

        {status === "done" ? (
          <div className="mt-8 rounded-2xl bg-[#4a5d3a] p-8 text-center text-white">
            <p className="font-serif text-2xl font-semibold">Shukriya, {name.split(" ")[0]}!</p>
            <p className="mt-3">
              Aapka order ({bundleLabel(qty)} — Rs {price.toLocaleString("en-PK")}) save ho gaya
              hai. Hum jald confirm karne ke liye rabta karein ge.
            </p>
            <p className="mt-2 text-sm text-white/70">Cash on Delivery · FREE delivery</p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 rounded-2xl border border-[#e8dfcd] bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input className={inputCls} placeholder="Aapka naam" value={name} onChange={(e) => setName(e.target.value)} />
              <input className={inputCls} placeholder="Phone number (03xx-xxxxxxx)" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <input className={`${inputCls} mt-4`} placeholder="Mukammal pata" value={address} onChange={(e) => setAddress(e.target.value)} />
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input className={inputCls} placeholder="Sheher" value={city} onChange={(e) => setCity(e.target.value)} />
              <input className={inputCls} placeholder="Koi khaas note? (optional)" value={note} onChange={(e) => setNote(e.target.value)} />
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl bg-[#faf7f1] p-4">
              <div>
                <p className="text-sm font-semibold">{bundleLabel(qty)}</p>
                <p className="font-serif text-2xl font-semibold text-[#b98a2f]">
                  Rs {price.toLocaleString("en-PK")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8dfcd] bg-white text-xl font-bold hover:bg-[#f3ede1]"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-6 text-center text-lg font-bold">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(Math.min(3, qty + 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8dfcd] bg-white text-xl font-bold hover:bg-[#f3ede1]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {status === "error" && <p className="mt-4 text-sm font-medium text-red-700">{errorMsg}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-full bg-[#b98a2f] py-4 text-lg font-semibold text-white hover:bg-[#8f6a1f] disabled:opacity-60"
            >
              {status === "sending" ? "Order save ho raha hai…" : "Order Confirm Karein"}
            </button>
            <p className="mt-3 text-center text-xs text-[#8f6a1f]">
              Parcel milne par payment karein — Cash on Delivery
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
