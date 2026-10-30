# REP KING FORGED

**REFORGE YOURSELF.** — adaptive strength training.

Een trainingslogboek voor de sportschool. Eén HTML-bestand, geen server, geen account,
geen cloud. Alles wat je logt blijft in de opslag van je eigen browser staan.

## Wat zit erin

- **Een voorstel voor vandaag** dat om je focusoefening draait: de oefening die je de
  laatste twaalf weken het vaakst zwaar deed, automatisch afgeleid. Het kiest tussen een
  rustige week, een maxdag, een zware dag, een volumedag, een trekdag en een benendag, met
  de reden erbij in je eigen cijfers.
- **Sets loggen** met herhalingen vóór kilo's, opwarmsets apart, en een BW-knop voor
  oefeningen op eigen lichaamsgewicht. Per oefening zie je wat je vorige keer deed, je
  record, en het gewicht dat de app voorstelt. Niets wordt vooraf ingevuld.
- **RIR** — na je laatste set van een oefening één vraag: hoeveel zat er nog in de tank?
  Daar komt het voorstel van de volgende keer uit.
- **Trends per oefening** over zes weken tegen de zes daarvóór, een krachtgrafiek op je
  werksets, en een tabel met je zwaarste gewicht per herhalingsaantal.
- **Jaaroverzicht en evaluatie** — een blok van 4, 8 of 12 weken tegen het blok daarvóór,
  met de bevindingen op volgorde van belang.
- **Tips**: twaalf regels die elke keer opnieuw rekenen, elk met hun eigen tijdvenster.
- **Bodyworkouts** op rondes, met stopwatch en intervaltimer.
- **Samenvatting na afloop** die je met één knop kopieert en in Strava plakt.
- **Importeren** uit tekst of CSV, **exporteren** als back-up in JSON.

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

## Je data

Alles staat in `localStorage` onder de sleutel `ijzerlog.v1`, op het apparaat waarop je
logt. Er gaat niets naar een server, dus er staat ook nergens een kopie. Maak daarom af en
toe een back-up via Meer → Exporteren.
