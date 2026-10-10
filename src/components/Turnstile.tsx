import { useEffect, useRef } from "react";

// Site key comes from the VITE_TURNSTILE_SITE_KEY env var (set in Vercel).
// When it is not configured, the widget renders nothing and the form works
// exactly as before — captcha activates only once keys are added.
const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
  }
}

export function isTurnstileEnabled() {
  return !!SITE_KEY;
}

export default function Turnstile({ onToken }: { onToken: (token: string | null) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const cbRef = useRef(onToken);
  cbRef.current = onToken;

  useEffect(() => {
    if (!SITE_KEY || !ref.current) return;

    const render = () => {
      if (window.turnstile && ref.current && widgetId.current === null) {
        widgetId.current = window.turnstile.render(ref.current, {
          sitekey: SITE_KEY,
          theme: "light",
          callback: (token: string) => cbRef.current(token),
          "expired-callback": () => cbRef.current(null),
          "error-callback": () => cbRef.current(null),
        });
      }
    };

    const existing = document.querySelector(
      'script[src*="challenges.cloudflare.com/turnstile"]'
    ) as HTMLScriptElement | null;

    if (window.turnstile) {
      render();
    } else if (existing) {
      existing.addEventListener("load", render);
    } else {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      s.async = true;
      s.defer = true;
      s.onload = render;
      document.head.appendChild(s);
    }

    return () => {
      if (window.turnstile && widgetId.current !== null) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          /* already gone */
        }
        widgetId.current = null;
      }
    };
  }, []);

  if (!SITE_KEY) return null;
  return <div ref={ref} className="mt-4 flex justify-center" />;
}
