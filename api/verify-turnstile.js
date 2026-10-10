// Verifies a Cloudflare Turnstile token server-side before an order is saved.
// Needs the TURNSTILE_SECRET_KEY env var set in Vercel. If it is not set
// (keys not configured yet), verification is skipped so orders keep working.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return res.status(200).json({ success: true, skipped: true });
  }
  const { token } = req.body || {};
  if (!token) {
    return res.status(400).json({ success: false });
  }
  try {
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      }
    );
    const data = await verifyRes.json();
    return res.status(200).json({ success: !!data.success });
  } catch {
    return res.status(500).json({ success: false });
  }
}
