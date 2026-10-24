#!/usr/bin/env python3
"""Build standalone Chrome-preview HTML: hero carousel + policies + footer."""
import base64, os

ASSETS = os.path.expanduser("~/workspace/zovix-site/src/assets")
def b64(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode()

img_box = b64(f"{ASSETS}/zovix-bundle.webp")
img_bottle = b64(f"{ASSETS}/zovix-hero.jpg")

def datauri(b64s, mime):
    return f"data:{mime};base64,{b64s}"

HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ZOVIX — Homepage Preview</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family: -apple-system, 'Segoe UI', Roboto, sans-serif; background:#faf7f1; color:#2b2118; }
  .serif { font-family: Georgia, 'Times New Roman', serif; }
  .bar { background:#2b2118; color:#e8dfcd; text-align:center; font-size:12px; letter-spacing:.15em; text-transform:uppercase; padding:10px 16px; }
  nav { display:flex; justify-content:space-between; align-items:center; padding:16px 24px; max-width:1100px; margin:0 auto; }
  .logo { font-weight:800; letter-spacing:.3em; font-size:18px; }
  .logo span { color:#b98a2f; }
  .btn { background:#b98a2f; color:#fff; border:none; border-radius:999px; padding:12px 28px; font-weight:700; font-size:14px; cursor:pointer; text-decoration:none; display:inline-block; }
  .btn:hover { background:#8f6a1f; }
  .hero { max-width:1100px; margin:0 auto; padding:32px 24px 8px; text-align:center; }
  .kicker { font-size:12px; font-weight:700; letter-spacing:.25em; text-transform:uppercase; color:#8f6a1f; }
  .hero h1 { font-size:clamp(34px,6vw,64px); font-weight:500; line-height:1.05; margin:12px 0 8px; }
  .hero p.sub { color:#5c4f3d; font-size:16px; max-width:560px; margin:0 auto; }
  .carousel { position:relative; max-width:860px; margin:28px auto 0; border-radius:24px; overflow:hidden; box-shadow:0 20px 60px rgba(43,33,24,.18); background:#2b2118; }
  .slides { display:flex; transition:transform .45s ease; }
  .slide { min-width:100%; position:relative; }
  .slide img { width:100%; height:min(58vw,480px); object-fit:cover; display:block; }
  .slide .cap { position:absolute; left:16px; bottom:16px; background:rgba(23,16,10,.72); color:#fff; font-size:13px; padding:8px 16px; border-radius:999px; letter-spacing:.08em; }
  .ing-card { min-height:min(58vw,480px); display:flex; flex-direction:column; justify-content:center; padding:48px 40px; text-align:left; color:#fff; }
  .ing-card h3 { font-size:clamp(26px,4vw,40px); font-weight:500; margin:10px 0 6px; }
  .ing-card .k { color:#b98a2f; font-size:12px; font-weight:700; letter-spacing:.25em; text-transform:uppercase; }
  .ing-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-top:26px; }
  .ing-grid div { border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.05); border-radius:16px; padding:18px; }
  .ing-grid h4 { color:#b98a2f; font-size:16px; margin-bottom:6px; }
  .ing-grid p { font-size:13px; color:rgba(255,255,255,.7); line-height:1.5; }
  .arrow { position:absolute; top:50%; transform:translateY(-50%); width:46px; height:46px; border-radius:50%; border:none; background:rgba(255,255,255,.92); color:#2b2118; font-size:20px; cursor:pointer; z-index:2; box-shadow:0 4px 14px rgba(0,0,0,.2); }
  .arrow:hover { background:#b98a2f; color:#fff; }
  .arrow.left { left:14px; } .arrow.right { right:14px; }
  .dots { display:flex; gap:8px; justify-content:center; padding:16px 0 4px; }
  .dots button { width:10px; height:10px; border-radius:50%; border:none; background:#d8cba8; cursor:pointer; }
  .dots button.on { background:#b98a2f; width:28px; border-radius:999px; }
  .trust { max-width:1100px; margin:34px auto 0; padding:0 24px; display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
  .trust div { background:#fff; border:1px solid #e8dfcd; border-radius:16px; padding:18px; text-align:center; font-size:14px; }
  .trust b { display:block; margin-bottom:4px; }
  footer { background:#2b2118; color:#e8dfcd; margin-top:56px; }
  .fgrid { max-width:1100px; margin:0 auto; padding:48px 24px 24px; display:grid; grid-template-columns:1.2fr 1fr 1fr; gap:32px; }
  footer h5 { font-size:12px; letter-spacing:.2em; text-transform:uppercase; color:#b98a2f; margin-bottom:14px; }
  footer p, footer a { font-size:14px; color:rgba(232,223,205,.75); line-height:1.9; text-decoration:none; }
  footer a:hover { color:#fff; }
  .soc { display:flex; gap:10px; margin-top:12px; }
  .soc a { width:40px; height:40px; border-radius:50%; border:1px solid rgba(232,223,205,.3); display:flex; align-items:center; justify-content:center; font-size:15px; font-weight:700; }
  .wa { display:inline-block; margin-top:14px; background:#25D366; color:#fff !important; font-weight:700; padding:12px 24px; border-radius:999px; }
  .copy { border-top:1px solid rgba(232,223,205,.15); text-align:center; font-size:12px; color:rgba(232,223,205,.5); padding:18px; }
  .overlay { display:none; position:fixed; inset:0; background:rgba(23,16,10,.7); z-index:50; padding:24px; overflow-y:auto; }
  .overlay.open { display:block; }
  .sheet { background:#fffdf8; max-width:680px; margin:40px auto; border-radius:20px; padding:40px; position:relative; }
  .sheet h2 { font-size:28px; margin-bottom:6px; }
  .sheet .up { font-size:11px; letter-spacing:.2em; text-transform:uppercase; color:#8f6a1f; font-weight:700; }
  .sheet h4 { margin:22px 0 6px; font-size:16px; }
  .sheet p { font-size:14.5px; line-height:1.75; color:#4a4033; margin-bottom:8px; }
  .x { position:absolute; top:16px; right:16px; width:38px; height:38px; border-radius:50%; border:1px solid #e8dfcd; background:#fff; font-size:18px; cursor:pointer; }
  @media (max-width:640px){ .fgrid{grid-template-columns:1fr;} .trust{grid-template-columns:1fr;} .ing-grid{grid-template-columns:1fr;} .ing-card{padding:32px 24px;} }
</style>
</head>
<body>

<div class="bar">Rs 250 delivery across Pakistan &middot; Cash on Delivery</div>
<nav>
  <div class="logo">ZOVIX <span>ORGANIC</span></div>
  <a class="btn" href="https://www.zovixorganic.com/#order">Order Now</a>
</nav>

<section class="hero">
  <p class="kicker">Organic Hair Oil</p>
  <h1 class="serif">Not your ordinary formula</h1>
  <p class="sub">18+ natural oils, cold-pressed into one powerful bottle. Swipe through the story.</p>

  <div class="carousel" id="car">
    <div class="slides" id="slides">
      <div class="slide">
        <img src="__IMG_BOX__" alt="Zovix box packaging">
        <span class="cap">1 &mdash; The box</span>
      </div>
      <div class="slide">
        <img src="__IMG_BOTTLE__" alt="Zovix bottle">
        <span class="cap">2 &mdash; The bottle</span>
      </div>
      <div class="slide">
        <div class="ing-card">
          <p class="k">What&rsquo;s inside?</p>
          <h3 class="serif">18+ oils. One powerful formula.</h3>
          <div class="ing-grid">
            <div><h4>Growth</h4><p>Natural oils that nourish the scalp and support a healthy growth routine.</p></div>
            <div><h4>Strength</h4><p>Cold-pressed oils that protect roots and hair from daily damage.</p></div>
            <div><h4>Scalp nourishment</h4><p>Herbal extracts that soothe the scalp and maintain its natural balance.</p></div>
          </div>
        </div>
        <span class="cap">3 &mdash; What&rsquo;s inside</span>
      </div>
    </div>
    <button class="arrow left" onclick="go(-1)" aria-label="Previous">&#10094;</button>
    <button class="arrow right" onclick="go(1)" aria-label="Next">&#10095;</button>
  </div>
  <div class="dots" id="dots"></div>
</section>

<section class="trust">
  <div><b>Cash on Delivery</b>Pay when your parcel arrives</div>
  <div><b>2&ndash;4 working days</b>Rs 250 flat, across Pakistan</div>
  <div><b>WhatsApp support</b>0305 9014270, always here</div>
</section>

<footer>
  <div class="fgrid">
    <div>
      <h5>Zovix Organic</h5>
      <p>Not your ordinary formula.<br>18+ natural oils, cold-pressed<br>into one powerful bottle.</p>
      <p style="margin-top:12px;">&#128205; Mardan, Pakistan</p>
    </div>
    <div>
      <h5>Quick links</h5>
      <p><a href="#" onclick="openSheet('pp');return false;">Privacy Policy</a><br>
      <a href="#" onclick="openSheet('tc');return false;">Terms &amp; Conditions</a><br>
      <a href="https://www.zovixorganic.com/#order">Order Now</a></p>
      <div class="soc">
        <!-- replace # with real links after review -->
        <a href="#" title="Instagram">IG</a>
        <a href="#" title="Facebook">FB</a>
        <a href="#" title="TikTok">TT</a>
      </div>
    </div>
    <div>
      <h5>Contact</h5>
      <p>Questions about your order?<br>Message us any time.</p>
      <a class="wa" href="https://wa.me/923059014270">WhatsApp: 0305 9014270</a>
    </div>
  </div>
  <div class="copy">&copy; 2026 Zovix Organic Hair Oil &middot; Mardan, Pakistan</div>
</footer>

<div class="overlay" id="pp"><div class="sheet">
  <button class="x" onclick="closeSheets()">&times;</button>
  <p class="up">Legal</p><h2 class="serif">Privacy Policy</h2>
  <h4>What we collect</h4>
  <p>When you place an order on our website, we collect your name, phone number, address, and city. That's it &mdash; we don't create accounts and we don't take online payments, so no card details ever touch our website.</p>
  <h4>How we use it</h4>
  <p>We use your details only to confirm your order (by phone call or WhatsApp) and to deliver your parcel.</p>
  <h4>Who we share it with</h4>
  <p>We share your name, address, and phone number with our courier company so your parcel can reach you. We never sell your information or share it with anyone else.</p>
  <h4>Cash on Delivery</h4>
  <p>Payment happens in cash when your parcel arrives. We never ask for card or bank details.</p>
  <h4>Questions?</h4>
  <p>Message us on WhatsApp: 0305 9014270. Email coming soon.</p>
</div></div>

<div class="overlay" id="tc"><div class="sheet">
  <button class="x" onclick="closeSheets()">&times;</button>
  <p class="up">Legal</p><h2 class="serif">Terms &amp; Conditions</h2>
  <h4>Orders</h4>
  <p>Placing an order on this website is a request, not a final sale. We confirm every order by phone call or WhatsApp before dispatch.</p>
  <h4>Prices &amp; payment</h4>
  <p>Prices are shown in Pakistani Rupees. Delivery is a flat Rs 250 across Pakistan. Payment is Cash on Delivery only &mdash; pay when your parcel arrives.</p>
  <h4>Delivery</h4>
  <p>Orders are delivered across Pakistan, usually in 2&ndash;4 working days.</p>
  <h4>Damaged parcels</h4>
  <p>If your parcel arrives damaged, send us an unboxing video or a clear photo on WhatsApp (0305 9014270) and replacement is free.</p>
  <h4>Contact</h4>
  <p>WhatsApp: 0305 9014270 &middot; Mardan, Pakistan. Email coming soon.</p>
</div></div>

<script>
let i = 0;
const slides = document.getElementById('slides');
const n = slides.children.length;
const dots = document.getElementById('dots');
for (let k = 0; k < n; k++) {
  const d = document.createElement('button');
  d.setAttribute('aria-label', 'Slide ' + (k+1));
  d.onclick = () => show(k);
  dots.appendChild(d);
}
function show(k) {
  i = (k + n) % n;
  slides.style.transform = 'translateX(-' + (i*100) + '%)';
  [...dots.children].forEach((d, j) => d.classList.toggle('on', j === i));
}
function go(d) { show(i + d); }
show(0);
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') go(-1);
  if (e.key === 'ArrowRight') go(1);
  if (e.key === 'Escape') closeSheets();
});
let sx = 0;
const car = document.getElementById('car');
car.addEventListener('touchstart', e => sx = e.touches[0].clientX, {passive:true});
car.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - sx;
  if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
}, {passive:true});
function openSheet(id) { document.getElementById(id).classList.add('open'); }
function closeSheets() { document.querySelectorAll('.overlay').forEach(o => o.classList.remove('open')); }
document.querySelectorAll('.overlay').forEach(o => o.addEventListener('click', e => { if (e.target === o) closeSheets(); }));
</script>
</body>
</html>
"""

HTML = HTML.replace("__IMG_BOX__", datauri(img_box, "image/webp"))
HTML = HTML.replace("__IMG_BOTTLE__", datauri(img_bottle, "image/jpeg"))

out = os.path.expanduser("~/workspace/your_files/Zovix_Homepage_Preview.html")
with open(out, "w") as f:
    f.write(HTML)
print("built OK", os.path.getsize(out), "bytes")
