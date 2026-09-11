"""AI cevap motorlarinda Limitra gorunurluk olcumu (Faz 6.3). Haftalik calistir.

Anahtari olan saglayicilar sorgulanir, olmayanlar atlanir:
  OPENAI_API_KEY, PPLX_API_KEY, ANTHROPIC_API_KEY (ortam degiskeni)
Cikti: scripts/gorunurluk.csv  (tarih, saglayici, soru, bahis, link)
"""
import csv, datetime, json, os, sys, urllib.request

MARKA = ("limitra",)
ALAN = "limitra.online"
SORULAR = [
    "en iyi android uygulama engelleyici hangisi",
    "aboneliksiz ekran süresi uygulaması android",
    "instagram ve tiktok süresini sınırlayan uygulama",
    "digital wellbeing yetmiyor daha sert uygulama engelleyici",
    "stayfree alternatifi android",
    "appblock alternatifi android",
    "öğrenciler için odaklanma uygulaması android",
    "çevrimdışı çalışan uygulama kilitleyici android",
    "erişilebilirlik izni isteyen app blocker güvenli mi",
    "doomscrolling engelleyen uygulama android",
    "best android app blocker one-time purchase no subscription",
    "screen time app that doesn't need internet permission android",
    "stricter alternative to digital wellbeing app timer",
    "stayfree alternative android",
    "app blocker for students android no ads",
]

def _post(url, headers, body):
    req = urllib.request.Request(url, data=json.dumps(body).encode(), headers={**headers, "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read().decode()

def sor_openai(q):
    return _post("https://api.openai.com/v1/responses",
                 {"Authorization": f"Bearer {os.environ['OPENAI_API_KEY']}"},
                 {"model": "gpt-4o", "input": q, "tools": [{"type": "web_search"}]})

def sor_perplexity(q):
    return _post("https://api.perplexity.ai/chat/completions",
                 {"Authorization": f"Bearer {os.environ['PPLX_API_KEY']}"},
                 {"model": "sonar", "messages": [{"role": "user", "content": q}]})

def sor_anthropic(q):
    return _post("https://api.anthropic.com/v1/messages",
                 {"x-api-key": os.environ["ANTHROPIC_API_KEY"], "anthropic-version": "2023-06-01"},
                 {"model": "claude-sonnet-5", "max_tokens": 1500,
                  "messages": [{"role": "user", "content": q}],
                  "tools": [{"type": "web_search_20250305", "name": "web_search"}]})

SAGLAYICILAR = [("openai", "OPENAI_API_KEY", sor_openai),
                ("perplexity", "PPLX_API_KEY", sor_perplexity),
                ("anthropic", "ANTHROPIC_API_KEY", sor_anthropic)]

aktif = [(ad, fn) for ad, env, fn in SAGLAYICILAR if os.environ.get(env)]
if not aktif:
    sys.exit("API anahtari yok. OPENAI_API_KEY / PPLX_API_KEY / ANTHROPIC_API_KEY ortam degiskenlerinden en az birini ayarla.")

tarih = datetime.date.today().isoformat()
out = os.path.join(os.path.dirname(__file__), "gorunurluk.csv")
yeni = not os.path.exists(out)
with open(out, "a", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    if yeni:
        w.writerow(["tarih", "saglayici", "soru", "bahis", "link"])
    for soru in SORULAR:
        for ad, fn in aktif:
            try:
                cevap = fn(soru).lower()
            except Exception as e:  # noqa: BLE001
                cevap = f"hata: {e}".lower()
            bahis = any(m in cevap for m in MARKA)
            link = ALAN in cevap
            w.writerow([tarih, ad, soru, bahis, link])
            print(f"{ad:11} | bahis={bahis!s:5} link={link!s:5} | {soru[:55]}")
