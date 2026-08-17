# Rep King

Een trainingslogboek voor de sportschool. Eén HTML-bestand, geen server, geen account.
Alles wat je logt blijft in de opslag van je eigen browser staan.

## Wat zit erin

- Sets loggen met gewicht, herhalingen en RPE, met je vorige waardes als hint
- Rusttimer met signaal
- Persoonlijke records en grafieken van je geschatte 1RM per oefening
- Een voorstel voor wat je die dag zou moeten trainen, op basis van wat achterloopt
- Inspanningsvergelijking tussen trainingen
- Importeren vanuit tekst, CSV of een Strava-export
- Exporteren als back-up

## Bestanden

| Bestand | Waarvoor |
|---|---|
| `index.html` | de hele app |
| `manifest.webmanifest` | naam en icoon bij "zet op beginscherm" |
| `sw.js` | offline werken |
| `icon-180/192/512.png` | app-icoon |

## Zelf draaien

Zet deze map op een willekeurige statische host (GitHub Pages, Netlify, je eigen webruimte).
Open daarna het adres in Safari en kies Deel → Zet op beginscherm.

Lokaal openen werkt ook: dubbelklik `index.html`. Offline werken en het eigen icoon
vragen wel om een https-adres.
