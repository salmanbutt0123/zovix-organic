#!/usr/bin/env python3
"""Build Zovix desktop + mobile heroes from the 4K upscaled real-packaging photo."""
import cv2
import numpy as np

VENV_PY = "/home/hatch/workspace/.venvs/upscale/bin/python"  # not used here; run with venv python
ASSETS = "/home/hatch/workspace/zovix-site/src/assets"
MASTER = f"{ASSETS}/new/zovix-hero-real-2x.png"

# Site palette
DARK = (10, 16, 23)      # #17100a in BGR
DARK2 = (6, 10, 15)

def warm_vignette(w, h):
    """Dark warm gradient background with a soft golden glow in the center."""
    y, x = np.mgrid[0:h, 0:w].astype(np.float32)
    # vertical gradient: slightly lighter at top-center, darker at edges/bottom
    t = y / h
    base = np.zeros((h, w, 3), np.float32)
    base[:, :] = np.array([26, 38, 52], np.float32)  # warm dark brown (BGR)
    base *= (1.0 - 0.55 * t)[..., None]
    # radial golden glow behind product
    cx, cy = w / 2, h * 0.42
    r = np.sqrt((x - cx) ** 2 + ((y - cy) * 1.4) ** 2)
    glow = np.exp(-(r ** 2) / (2 * (w * 0.28) ** 2))
    gold = np.array([40, 110, 190], np.float32)  # warm amber glow (BGR)
    base = base * (1 - 0.55 * glow[..., None]) + gold * (0.55 * glow[..., None])
    # edge vignette
    ex = np.minimum(x, w - x) / (w * 0.5)
    ey = np.minimum(y, h - y) / (h * 0.5)
    vig = np.clip(np.minimum(ex, ey) * 1.6, 0, 1)
    base *= (0.55 + 0.45 * vig)[..., None]
    return np.clip(base, 0, 255).astype(np.uint8)

def desktop_hero(master):
    W, H = 3840, 2160
    bg = warm_vignette(W, H)
    # blurred photo wash at low opacity for texture continuity
    wash = cv2.resize(master, (W, H), interpolation=cv2.INTER_AREA)
    wash = cv2.GaussianBlur(wash, (0, 0), 60)
    wash = (wash.astype(np.float32) * 0.28).astype(np.uint8)
    bg = cv2.addWeighted(bg, 1.0, wash, 0.35, 0)

    mh, mw = master.shape[:2]
    # product height fills 96% of canvas, keep aspect
    ph = int(H * 0.96)
    pw = int(ph * mw / mh)
    prod = cv2.resize(master, (pw, ph), interpolation=cv2.INTER_LANCZOS4)
    x0 = (W - pw) // 2
    y0 = (H - ph) // 2
    # soft drop shadow under product
    shadow = np.zeros((H, W), np.float32)
    cv2.ellipse(shadow, (W // 2, y0 + ph - 40), (pw // 2, 90), 0, 0, 360, 1.0, -1)
    shadow = cv2.GaussianBlur(shadow, (0, 0), 60)
    bg = (bg.astype(np.float32) * (1 - 0.5 * shadow[..., None])).astype(np.uint8)
    bg[y0:y0 + ph, x0:x0 + pw] = prod
    # bottom fade into #17100a so it melts into the headline block below
    fade_h = int(H * 0.22)
    fade = np.linspace(0, 1, fade_h)[:, None, None]
    solid = np.full((fade_h, W, 3), DARK, np.uint8)
    region = bg[H - fade_h:H].astype(np.float32)
    bg[H - fade_h:H] = (region * (1 - fade) + solid.astype(np.float32) * fade).astype(np.uint8)
    return bg

def mobile_hero(master, top_cut=170, height=3010):
    """4:5 portrait crop (2160x2700) from the 2x master (2408x3200)."""
    mh, mw = master.shape[:2]
    y1 = min(top_cut + height, mh)
    y0 = y1 - height
    crop = master[y0:y1, 0:mw]
    out = cv2.resize(crop, (2160, 2700), interpolation=cv2.INTER_LANCZOS4)
    return out

if __name__ == "__main__":
    import sys
    master = cv2.imread(MASTER)
    assert master is not None, "4K master not found"
    print("master:", master.shape)
    d = desktop_hero(master)
    cv2.imwrite(f"{ASSETS}/zovix-hero.jpg", d, [cv2.IMWRITE_JPEG_QUALITY, 82])
    print("desktop saved", d.shape)
    m = mobile_hero(master)
    cv2.imwrite(f"{ASSETS}/zovix-hero-mobile.jpg", m, [cv2.IMWRITE_JPEG_QUALITY, 82])
    print("mobile saved", m.shape)
