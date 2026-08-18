/* Rep King — offline werken in de sportschool.

   Aanpak: eerst het netwerk proberen, en wat binnenkomt bewaren. Lukt dat niet
   (geen bereik in de kelder), dan pakken we de bewaarde versie. Zo heb je altijd
   de nieuwste app als er verbinding is, en werkt hij toch als die er niet is.

   Je gelogde trainingen staan hier los van — die zitten in de opslag van je
   browser en worden hier nooit aangeraakt.                                    */

/* Verhoog dit nummer bij elke uitgave: alles wat onder een oudere naam bewaard
   is, wordt bij het activeren weggegooid. Zo blijft er nooit een oude versie
   op een telefoon hangen. */
const CACHE = "repking-v4";
const BESTANDEN = [
  "./",
  "./index.html",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./manifest.webmanifest"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(BESTANDEN))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(namen => Promise.all(namen.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== location.origin) return;

  // Bij het openen van de app de pagina altijd écht van het netwerk halen,
  // niet uit de tussenopslag van de browser — anders zie je een oude versie.
  const vers = req.mode === "navigate" || req.url.endsWith("index.html")
             ? new Request(req, {cache: "reload"}) : req;

  e.respondWith(
    fetch(vers)
      .then(res => {
        const kopie = res.clone();
        caches.open(CACHE).then(c => c.put(req, kopie)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
  );
});
