<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: LaunchKit -->
<!-- source-files: ["LaunchKit/index.html"] -->

# LaunchKit – Support-Dokumentation

**Website:** LaunchKit
**Vermuteter Zweck:** Produktplattform („Die professionelle Plattform für dein digitales Produkt“) für Software, Spiele, Apps, Plugins und Open-Source-Projekte – mit Produktseiten, Downloads, Versionen, Changelog und Analytics an einem Ort.
**Quellcode-Pfad:** `LaunchKit/index.html` (Single-File-Landingpage mit inline eingebettetem CSS)
**Stand der Erstellung:** Januar 2026 – basierend ausschließlich auf dem bereitgestellten Quellcode-Auszug (gekürzt).
**Sprache der Website:** Deutsch (`<html lang="de">`)

> **Hinweis zur Quellcode-Lage:** Die bereitgestellten Auszüge enden mitten im Bereich „Produkt-Detail“ (CSS-Klasse `.produ…`). JavaScript-Dateien sind im Auszug **nicht** enthalten. Alle interaktiven Funktionen sind daher aus CSS-Klassen und HTML-Struktur **abgeleitet** und unten entsprechend als *bestätigt*, *begründet vermutet* oder *nicht eindeutig erkennbar* gekennzeichnet.

---

## 1. Kurzüberblick

LaunchKit ist eine **statische, clientseitige Website ohne erkennbare Nutzerkonten**. Im Quellcode findet sich:

- eine sticky Kopfzeile mit Logo, Hauptnavigation, Dark-Mode-Umschalter und mobilem Menü,
- ein Hero-Bereich mit Call-to-Action und einer statischen Vorschau-Karte,
- eine Feature-Section mit vier Karten,
- ein Showcase-Bereich mit „Screenshot“-Platzhaltern,
- eine Produktübersicht mit Suchfeld, Filterleiste, Produktkarten-Raster und Leerzustand,
- ein Produkt-Detailbereich (im Ausschnitt nur angeschnitten),
- eine Fußzeile mit vier Spalten und einer unteren Abschlusszeile.

Es werden **keine Formulare für Anmeldung, Registrierung oder Kontaktdaten** und **keine Preise** gefunden. Formulare existieren nur implizit als Eingabefelder der Filterleiste.

---

## 2. Voraussetzungen

| Anforderung | Details |
|---|---|
| Browser | Moderner Browser mit CSS Grid, CSS Custom Properties, `backdrop-filter` und `position: sticky` (Chrome/Edge/Firefox/Safari aktueller Generationen). Ältere Browser wie Internet Explorer werden nicht unterstützt. |
| Internetverbindung | Für zwei externe Ressourcen: Schriftarten von `fonts.googleapis.com` / `fonts.gstatic.com` und das Logo/Favicon von `raw.githubusercontent.com`. Die Seite selbst funktioniert auch offline, dann ohne Webfonts und ohne Logo. |
| Keine Installation | Die Website wird direkt im Browser geöffnet; es ist kein Konto und keine Software nötig. |
| Bildschirmgröße | Desktop und Mobil. Für schmale Viewports ist ein mobiles Menü (Hamburger) vorgesehen. Die exakten Breakpoint-Werte sind im Ausschnitt **nicht eindeutig erkennbar**. |
| Barrierefreiheit | Große Schriftgrade (`clamp()`-basierte Überschriften), sichtbare Fokusrahmen sind im CSS für Eingabefelder definiert (`border-color: var(--brand)`). Ob `alt`-Texte, `aria`-Attribute oder Screenreader-Skip-Links vorhanden sind, ist im Ausschnitt **nicht eindeutig erkennbar**. |

---

## 3. Aufbau der Seite (alle sichtbaren Bereiche)

### 3.1 Kopfzeile (`.site-header` / `.nav`)
- **Festhaftend am oberen Bildschirmrand** (`position: sticky`), mit milchglasartigem Hintergrund (`backdrop-filter: blur(18px)`), der beim Scrollen stehen bleibt.
- **Markenbereich links (`.brand`)**: Logo-Bild (`.brand-logo`), Produktname (`.brand-name`), optionaler Zusatz (`.brand-sub`) und ein Trennzeichen (`.brand-sep`).
- **Hauptnavigation (`.nav-links`)**: mehrere `.nav-link`-Einträge; der aktive Eintrag erhält die Klasse `active` und wird in Markenfarbe hervorgehoben.
- **Rechter Bereich (`.nav-right`)**: Dark-Mode-Umschalter (`.theme-toggle`, 38 × 38 px, Quadrat) sowie – auf schmalen Viewports – der Menüknopf (`.nav-toggle`).
- **Mobil Menü (`.mobile-menu`)**: füllt den Bereich unterhalb der Kopfzeile aus, zunächst per `translateY(-110%)` ausgeblendet; mit der Klasse `open` wird es eingeblendet.

### 3.2 Hero-Bereich (`.hero`)
Zweispaltiges Layout (Text links, Vorschaukarte rechts):
- Kleines Kategorie-Badge (`.eyebrow`) in Markenfarbe.
- Große Überschrift (`.h1`) mit farbigem Verlaufseffekt auf einem Teilmotiv (`.accent`).
- Einleitungstext (`.lede`).
- Zwei Call-to-Action-Schaltflächen (`.cta-row`) – Primär- und Sekundärvariante.
- Metazeile (`.meta-row`) mit orangefarbenen Aufzählungspunkten.
- **Vorschaukarte (`.hero-card`)**: Kopfzeile mit pulsierendem Statuspunkt (`.pulse`, 2-Sekunden-Animation), eine Mini-Produktzeile mit Logo-Kachel, Titel und Untertitel, drei Kennzahlen (`.kpi-row` mit `.kpi .v` und `.kpi .l`) sowie eine Fußzeile mit kleinen Säulendiagrammen (`.sparkbars`).
- *Bestätigt:* Alle Inhalte sind statisch im HTML hinterlegt. *Vermutet:* Die Karte soll die Produkt-Detailansicht visualisieren.

### 3.3 Features (`.features-grid`)
Vier Karten in einem 4-Spalten-Raster. Jede Karte enthält:
- ein Icon-Feld (`.feature-icon`, 44 × 44 px, orangefarbener Verlauf),
- eine Überschrift (`.h4`),
- einen Beschreibungstext (`.p`).
Beim Überfahren hebt sich die Karte an, erhält einen orangefarbenen Rand und einen stärkeren Schatten.

### 3.4 Showcase (`.showcase`)
- „Meta-Leiste“ (`.meta-strip`) mit Pillen (`.pill`, hervorgehobene Variante `.pill.brand`),
- eine Überschrift (`.h2`),
- ein 2 × 2-Raster (`.screens`) aus grafischen Platzhaltern (`.screen`, 16:10),其中 eine Variante `.screen.alt` in dunkler Farbgebung.
- *Vermutet:* Die Platzhalter stehen für Screenshots der Produktseite. Echte Bilder sind im Ausschnitt nicht sichtbar.

### 3.5 Produktübersicht (Seite „Produkte“)
- **Seitenkopf (`.page-hero`)**: Überschrift mit Einleitungstext.
- **Filterleiste (`.toolbar`)**: Raster `1.2fr / 4 × 1fr / auto`:
  1. Suchfeld mit Lupensymbol (`.search`),
  2.–5. vier weitere Eingabefelder bzw. Auswahlfelder (`select`) – die konkreten Filterkategorien sind im Ausschnitt **nicht eindeutig erkennbar**,
  6. ein Feld mit `auto`-Breite – vermutlich eine Schaltfläche wie „Zurücksetzen“.
- **Produktkarten-Raster (`.products-grid`)**: drei Spalten. Jede Karte zeigt:
  - Logo-Kachel mit Initialen (`.logo`),
  - Titel und Untertitel (`.meta .t` / `.meta .s`),
  - Kurz
