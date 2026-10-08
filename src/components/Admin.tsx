import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Order = {
  id: string;
  customer_name: string;
  phone: string;
  address: string;
  city: string;
  note: string | null;
  quantity: number;
  total_price?: number;
  status?: string;
  created_at: string;
};

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState<boolean>(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(!!data.session));
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg("Login failed: " + error.message);
    else {
      setSession(true);
      setMsg("");
    }
  }

  async function load() {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);
    if (error) setMsg("Orders load nahi ho sakay: " + error.message);
    else setOrders((data as Order[]) ?? []);
  }

  useEffect(() => {
    if (session) load();
  }, [session ]);

  if (!session) {
    return (
      <div className="mx-auto max-w-sm px-4 py-20">
        <h2 className="font-serif text-2xl font-semibold">Admin Login</h2>
        <form onSubmit={login} className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl border border-[#e8dfcd] px-4 py-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-xl border border-[#e8dfcd] px-4 py-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {msg && <p className="text-sm text-red-700">{msg}</p>}
          <button className="w-full rounded-full bg-[#2b2118] py-3 font-semibold text-white">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-semibold">Orders — ZOVIX</h2>
        <button
          onClick={load}
          className="rounded-full border border-[#e8dfcd] px-5 py-2 text-sm font-semibold transition-colors hover:bg-[#f3ede1]"
        >
          Refresh
        </button>
      </div>
      {msg && <p className="mt-4 text-sm text-red-700">{msg}</p>}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e8dfcd]">
        <table className="w-full min-w-[720px] bg-white text-sm">
          <thead>
            <tr className="bg-[#f3ede1] text-left">
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Qty</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Note</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-[#e8dfcd]">
                <td className="px-4 py-3 whitespace-nowrap">
                  {new Date(o.created_at).toLocaleString("en-PK")}
                </td>
                <td className="px-4 py-3 font-medium">{o.customer_name}</td>
                <td className="px-4 py-3">{o.phone}</td>
                <td className="px-4 py-3">{o.city}</td>
                <td className="px-4 py-3">{o.quantity}</td>
                <td className="px-4 py-3">{o.address}</td>
                <td className="px-4 py-3">{o.note ?? "—"}</td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-[#8f6a1f]">
                  Koi orders nahi mile — ya to abhi koi order nahi aaya, ya is login ko access nahi.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
