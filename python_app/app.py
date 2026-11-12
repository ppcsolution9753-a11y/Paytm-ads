"""Pi Ads website — standard-library Python web server.

Run: python python_app/app.py
Open: http://localhost:8000
"""
from __future__ import annotations

from html import escape
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

PLANS = [
    ("Silver", "₹1,999", "₹2,000", "Meta images, copy, Click-to-WhatsApp and location targeting."),
    ("Gold", "₹4,999", "₹5,000", "Everything in Silver, video self-upload, lead ads and In-app CRM."),
    ("Platinum", "₹9,999", "₹10,000", "Everything in Gold, AI video generation and Website Ads."),
]

SERVICES = [
    ("Click-to-WhatsApp Ads", "Turn ad engagement into direct WhatsApp conversations.", "click-to-whatsapp.jpeg", "Available on Silver, Gold and Platinum."),
    ("Location-Based Targeting", "Reach customers within the locations you can actually serve.", "location-targeting.jpeg", "Available on Silver, Gold and Platinum."),
    ("AI Video Generation Ads", "Transform product images into engaging, ready-to-run video ads.", "ai-video-generation.jpeg", "Gold: self-upload · Platinum: AI-generated video + self-upload."),
    ("Website Ads", "Drive high-intent traffic to a merchant website landing page.", "website-ads.jpeg", "Available on Platinum."),
    ("In-app CRM", "Manage, track and convert advertising leads from one place.", "in-app-crm.jpeg", "Available on Gold and Platinum."),
]

CSS = """
:root{--navy:#092B67;--deep:#061D49;--cyan:#11BCE0;--cloud:#F4F8FC;--ink:#17243A}*{box-sizing:border-box}body{margin:0;color:var(--ink);font:16px/1.6 Arial,sans-serif}a{text-decoration:none;color:inherit}.wrap{width:min(1160px,calc(100% - 40px));margin:auto}.nav{position:sticky;top:0;z-index:3;background:#fffffff0;backdrop-filter:blur(14px);border-bottom:1px solid #e6edf5}.nav .wrap{height:76px;display:flex;align-items:center;justify-content:space-between}.brand{font-weight:800;font-size:20px;color:var(--navy)}.brand b{color:var(--cyan)}.links{display:flex;gap:28px;font-size:14px;font-weight:700;color:#5d6c80}.button{display:inline-block;border-radius:999px;padding:12px 20px;background:var(--navy);color:white;font-weight:700;font-size:14px}.button.alt{background:white;color:var(--navy);border:1px solid #cbd8e8}.hero{background:var(--cloud);padding:96px 0}.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:64px;align-items:center}.eyebrow{color:var(--cyan);text-transform:uppercase;font-size:12px;font-weight:bold;letter-spacing:.16em}.display{font-family:Georgia,serif;font-size:clamp(42px,6vw,74px);line-height:1.05;letter-spacing:-.045em;margin:14px 0 20px}.muted{color:#5f6e82;max-width:620px}.actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.dashboard{background:white;padding:18px;border-radius:26px;box-shadow:0 20px 50px #092b6720}.dash-top{background:var(--deep);color:white;border-radius:16px;padding:25px}.bars{height:100px;display:flex;align-items:end;gap:7px;margin-top:20px}.bars i{display:block;flex:1;background:var(--cyan);border-radius:5px 5px 0 0}.section{padding:88px 0}.section h2{font:600 clamp(34px,4vw,52px)/1.12 Georgia,serif;margin:10px 0 20px}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.card{border:1px solid #e2e9f1;border-radius:22px;padding:25px;background:white}.card.featured{background:var(--navy);color:white}.card h3{margin:0;color:var(--navy)}.featured h3{color:white}.price{font-size:30px;font-weight:800;margin:14px 0}.credit{border-radius:10px;background:var(--cloud);padding:8px 12px;font-size:14px;font-weight:bold}.featured .credit{background:#ffffff17}.service-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:28px}.service{padding:28px;border-bottom:1px solid #e4eaf1}.service img{width:100%;border-radius:18px;border:1px solid #e1e8f0;margin-bottom:18px}.service h3{font-size:25px;color:var(--navy);margin:0}.footer{background:var(--deep);color:#cbd5e1;padding:55px 0;margin-top:40px}.footer strong{color:white}@media(max-width:720px){.links{display:none}.hero{padding:60px 0}.hero-grid,.cards,.service-grid{grid-template-columns:1fr}.section{padding:60px 0}}
"""


def layout(title: str, content: str) -> str:
    nav = '<a class="brand" href="/">Pi <b>Ads</b></a><div class="links"><a href="/">Home</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About Us</a></div><a class="button" href="https://wa.me/YOUR_WHATSAPP_NUMBER">Get Started</a>'
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{escape(title)} | Pi Ads</title><style>{CSS}</style></head><body><header class="nav"><div class="wrap">{nav}</div></header>{content}<footer class="footer"><div class="wrap"><strong>Pi Ads</strong><p>Meta advertising solutions designed to generate better leads and measurable business growth.</p><p>WhatsApp contact: editable in <code>python_app/app.py</code></p></div></footer></body></html>"""


def home() -> str:
    cards = "".join(f'<article class="card {"featured" if name == "Platinum" else ""}"><p class="eyebrow">Pi Meta plan</p><h3>{name}</h3><p class="price">{price}<small>/month</small></p><p class="credit">Free Pi Credits: {credits}</p><p>{detail}</p><a href="/pricing" class="button">View plan</a></article>' for name, price, credits, detail in PLANS)
    return layout("Meta Advertising Plans", f'''<main><section class="hero"><div class="wrap hero-grid"><div><p class="eyebrow">Pi Ads × Meta</p><h1 class="display">Smarter Meta Ads.<br>Better Leads.<br>Faster Growth.</h1><p class="muted">Pi Ads brings Meta advertising, Click-to-WhatsApp, location targeting, video creative and lead management into one clear product suite for merchants.</p><div class="actions"><a class="button" href="/services">Explore Pi solutions</a><a class="button alt" href="/pricing">View Meta pricing</a></div></div><div class="dashboard"><div class="dash-top"><small>Pi Ads campaign intelligence</small><h2 style="font-family:Arial;margin:8px 0">42.8K reach</h2><div class="bars">{''.join(f'<i style="height:{h}%"></i>' for h in [35,58,45,72,59,85,70,100])}</div></div><p><b>1,284</b> qualified Meta leads this week</p></div></div></section><section class="section"><div class="wrap"><p class="eyebrow">Meta Ads pricing</p><h2>Choose the Pi plan that fits your growth.</h2><div class="cards">{cards}</div></div></section></main>''')


def services() -> str:
    content = ''.join(f'<article class="service"><img src="/assets/{image}" alt="{name}"><h3>{name}</h3><p>{description}</p><p class="credit">{availability}</p></article>' for name, description, image, availability in SERVICES)
    return layout("Services", f'<main class="section"><div class="wrap"><p class="eyebrow">Pi Ads solutions</p><h1 class="display">Meta products built for customer action.</h1><div class="service-grid">{content}</div></div></main>')


def pricing() -> str:
    cards = ''.join(f'<article class="card {"featured" if name == "Platinum" else ""}"><h3>{name}</h3><p class="price">{price}<small>/month</small></p><p class="credit">Free credits: {credits}</p><p>{detail}</p><a class="button" href="https://wa.me/YOUR_WHATSAPP_NUMBER">Choose This Plan</a></article>' for name, price, credits, detail in PLANS)
    return layout("Pricing", f'<main class="section"><div class="wrap"><p class="eyebrow">Pi Meta plans</p><h1 class="display">Simple, transparent pricing.</h1><div class="cards">{cards}</div><p class="muted" style="margin-top:24px">Your subscription continues on the same plan upon renewal. Unused Pi Credits carry forward to the next month.</p></div></main>')


def about() -> str:
    return layout("About Us", '<main class="section"><div class="wrap"><p class="eyebrow">About Pi Ads</p><h1 class="display">Making digital advertising smarter, simpler & more effective.</h1><p class="muted">Our mission is to help businesses grow through accessible, intelligent and performance-focused advertising solutions.</p></div></main>')


PAGES = {'/': home, '/services': services, '/pricing': pricing, '/about': about}


class WebsiteHandler(SimpleHTTPRequestHandler):
    def do_GET(self) -> None:
        path = urlparse(self.path).path.rstrip('/') or '/'
        if path.startswith('/assets/'):
            self.path = f'/public/product-screenshots/{path.removeprefix("/assets/")}'
            return super().do_GET()
        page = PAGES.get(path)
        if page is None:
            self.send_error(404, 'Page not found')
            return
        body = page().encode()
        self.send_response(200)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == '__main__':
    print('Pi Ads running at http://localhost:8000')
    ThreadingHTTPServer(('localhost', 8000), WebsiteHandler).serve_forever()
