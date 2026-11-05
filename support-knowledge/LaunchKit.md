<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: LaunchKit -->
<!-- source-files: ["LaunchKit/index.html"] -->

# Support-Dokumentation: LaunchKit

**Website-Name:** LaunchKit  
**Vermuteter Zweck:** Professionelle Präsentations- und Vertriebsplattform für digitale Produkte (Software, Spiele, Apps, Plugins, Open-Source-Projekte) mit Produktseiten, Downloads, Versionen, Changelogs und Analytics.  
**Quellcode-Pfad:** `LaunchKit/index.html`  
**Datum der Erstellung:** 2025-08-14 (basierend auf heutigem Datum)  

---

## 1. Überblick & Zielgruppe

LaunchKit ist eine **statische Marketing- und Produktkatalog-Website** (Single-Page-Application-Charakter durch Hash-Routing), die Entwicklern und Anbietern digitaler Produkte eine zentrale Anlaufstelle bietet. Besucher können:

- Produkte entdecken, filtern und suchen
- Produktdetails einsehen (Beschreibung, Versionen, Changelog, Screenshots, Systemanforderungen)
- Downloads starten (sofern Links hinterlegt sind)
- Zwischen Light- und Dark-Mode wechseln
- Die Seite responsiv auf Mobilgeräten nutzen

**Zielgruppen:**  
- Endnutzer, die Software/Apps/Plugins suchen  
- Entwickler, die ihre Projekte präsentieren wollen (über die im Code angelegten Beispieldaten)  
- Interessenten an der LaunchKit-Plattform selbst (Hero-Bereich bewirbt LaunchKit als SaaS)

---

## 2. Technische Voraussetzungen

| Anforderung | Details |
|-------------|---------|
| **Browser** | Moderne Browser mit ES6-Module-Unterstützung, `localStorage`, `IntersectionObserver`, `fetch`, CSS Custom Properties, `backdrop-filter` |
| **JavaScript** | Muss aktiviert sein (Routing, Rendering, Theme, Interaktionen laufen clientseitig) |
| **Netzwerk** | Externe Ressourcen: Google Fonts (Poppins, Inter), GitHub Raw (Logo, Beispieldaten), Unpkg (Lucide Icons), CDN für Tailwind (nur in `404.html`) |
| **Kein Backend** | Keine Server-seitige Logik, keine Datenbank, keine Authentifizierung im Frontend-Code erkennbar |

---

## 3. Seitenstruktur & Navigation

Die Seite nutzt **Hash-basiertes Routing** (`#/`, `#/products`, `#/product/<id>`, `#/changelog`, `#/about`, `#/impressum`, `#/datenschutz`).  
Der **Header** ist auf allen Seiten identisch und enthält:

| Element | Bezeichnung / Funktion |
|---------|------------------------|
| **Logo + Name** | „LaunchKit“ (Link zur Startseite `#/`) |
| **Navigationslinks** | „Produkte“ (`#/products`), „Changelog“ (`#/changelog`), „Über uns“ (`#/about`) |
| **Theme-Toggle** | Button mit Sonnen-/Mond-Icon – schaltet Light/Dark-Mode (speichert in `localStorage`) |
| **Mobile Menu Button** | Hamburger-Icon (nur < 880 px) – öffnet Overlay-Menü mit denselben Links + CTA-Buttons |

---

## 4. Seitenbereiche im Detail

### 4.1 Startseite (`#/`) – `renderHome()`

| Bereich | Inhalt / Funktion |
|---------|-------------------|
| **Hero** | Headline „Die professionelle Plattform für dein digitales Produkt“, Untertitel, zwei CTA-Buttons („Jetzt starten“ → `#/products`, „Mehr erfahren“ → `#/about`), Meta-Row mit Vertrauenssignalen (Open Source, DSGVO-konform, Made in Germany) |
| **Hero-Card (rechts)** | Visuelle Demo eines Produkt-Dashboards: Logo, Name, Version, KPIs (Downloads, Bewertung, Umsatz), Sparkline-Balken, Footer mit „Live Demo“ & „GitHub“ Links |
| **Features** | 4 Karten (Grid 4 Spalten): „Alles an einem Ort“, „Versionen & Changelog“, „Analytics & Insights“, „Für Entwickler gebaut“ – jeweils Icon, Titel, Beschreibung |
| **Showcase** | Split-View: Links Text + Pillen (Typ, Plattform, Lizenz, Sprache), Rechts 4 Screenshot-Platzhalter (Gradient-Boxen) |
| **Produkt-Highlights** | 3 statische Karten (LaunchKit Pro, GameLauncher, DevTools CLI) mit Logo, Beschreibung, Tags, Version, „Details“-Link → `#/product/<id>` |
| **Footer** | 4 Spalten: Markenbeschreibung + Social-Icons, Produkt-Links, Unternehmen-Links, Ressourcen-Links, Copyright-Zeile |

### 4.2 Produktübersicht (`#/products`) – `renderProducts()`

| Element | Beschreibung |
|---------|--------------|
| **Page Hero** | Titel „Unsere Produkte“, Leiste „Entdecke professionelle Tools…“ |
| **Toolbar** | Suchfeld (Echtzeit-Filter auf Name/Description/Tags), Select-Filter: Kategorie (Alle, Software, Spiel, Plugin, App, Open Source), Sortierung (Neueste, Beliebteste, Name A-Z, Version), „Zurücksetzen“-Button |
| **Produkt-Grid** | 3-spaltig (Desktop), Karten mit: Logo, Name, Kurzbeschreibung, Tags, Version, „Details“-Link |
| **Leerzustand** | Falls keine Treffer: Illustration + Text „Keine Produkte gefunden“ + Button „Filter zurücksetzen“ |

### 4.3 Produktdetail (`#/product/:id`) – `renderProductDetail(id)`

| Sektion | Inhalt |
|---------|--------|
| **Header** | Breadcrumb (Produkte → Produktname), Logo, Name, Version, Kategorie-Pille, Beschreibung |
| **Tabs** | 4 Reiter: **Übersicht**, **Versionen**, **Changelog**, **Systemanforderungen** |
| **Übersicht** | Lange Beschreibung, Feature-Liste (Icons + Text), Screenshot-Gallery (4 Platzhalter), Meta-Daten (Lizenz, Plattform, Sprache, Letztes Update, Website, Repository, Issues) |
| **Versionen** | Tabelle: Version, Datum, Typ (Major/Minor/Patch/Hotfix), Größe, Changelog-Button (scrollt zu Changelog-Tab), Download-Button (öffnet `download_url` im neuen Tab) |
| **Changelog** | Zeitliche Liste pro Version: Datum, Typ-Badge, Liste der Änderungen (Kategorie: Added/Changed/Fixed/Removed/Security + Text) |
| **Systemanforderungen** | Zwei Spalten: **Minimum** & **Empfohlen** (OS, CPU, RAM, GPU, Speicher, Netzwerk, Sonstiges) – Werte aus `specs.min` / `specs.rec` |
| **Nicht gefunden** | Falls `id` nicht in `productsData` existiert: 404-Card mit Link zurück zu Produkten |

### 4.4 Globaler Changelog (`#/changelog`) – `renderChangelog()`

- Aggregiert **alle** Changelog-Einträge aller Produkte, sortiert nach Datum (neueste zuerst)
- Darstellung: Version + Produktname, Datum, Typ-Badge, Änderungsliste
- Leerzustand falls keine Einträge vorhanden

### 4.5 Über uns (`#/about`) – `renderAbout()`

- Hero mit Mission-Statement
- 3 Werte-Karten: „Entwickler-First“, „Transparenz“, „Qualität“
- Team-Grid (3 Platzhalter-Personen mit Avatar, Name, Rolle, Bio)
- CTA-Bereich: „Bereit loszulegen?“ → Buttons zu Produkten & Kontakt (Mailto)

### 4.6 Rechtliche Seiten

| Route | Titel | Inhalt |
|-------|-------|--------|
| `#/impressum` | Impressum | Angaben gem. §5 TMG: Betreiber (lamacOs / Lukas M.), Adresse (Musterstraße 123, 12345 Musterstadt), Kontakt (E-Mail, GitHub), Haftungsausschluss, Urheberrecht |
| `#/datenschutz` | Datenschutz | DSGVO-konforme Erklärung: Kein Tracking, keine Cookies (außer `theme` in `localStorage`), keine Weitergabe, Server-Logs nur technisch, Rechte der Betroffenen, Kontakt |

---

## 5. Bedienung Schritt für Schritt

### 5.1 Theme wechseln (Light ↔ Dark)
1. Im Header auf den **Theme-Toggle-Button** (Sonnen-/Mond-Icon) klicken.
2. Seite wechselt sofort; Präferenz wird in `localStorage` unter Schlüssel `theme` gespeichert (`"light"` oder `"dark"`).
3. Bei erneutem Besuch wird gespeicherter Wert angewendet (oder Systempräferenz `prefers-color-scheme`).

### 5.2 Produkte durchsuchen & filtern
1. Navigiere zu **Produkte** (Header-Link oder Hero-CTA).
2. **Suche**: Text in Suchfeld eingeben → Liste filtert live nach Name, Beschreibung, Tags.
3. **Kategorie**: Dropdown „Kategorie“ öffnen → gewünschte Kategorie wählen.
4. **Sortierung**: Dropdown „Sortierung“ → Option wählen (Neueste, Beliebteste, Name A-Z, Version).
5. **Zurücksetzen**: Button „Zurücksetzen“ klickt → Suchfeld leeren, Kategorie „Alle“, Sortierung „Neueste“.
6. **Produkt öffnen**: Auf Karten-Button „Details“ klicken → Produktdetail-Seite.

### 5.3 Produktdetails ansehen
1. Auf Detailseite oben **Tabs** klicken: Übersicht / Versionen / Changelog / Systemanforderungen.
2. **Versionen-Tab**: Tabelle durchscrollen; „Changelog“-Button springt zum Changelog-Tab; „Download“-Button öffnet externen Link (falls `download_url` vorhanden).
3. **Changelog-Tab**: Alle Änderungen der Versionen chronologisch.
4. **Systemanforderungen**: Minimum vs. Empfohlen vergleichen.

### 5.4 Globalen Changelog einsehen
1. Header → **Changelog** → zeigt alle Änderungen aller Produkte gebündelt.

### 5.5 Mobile Navigation
1. Bei Bildschirmbreite < 880 px: **Hamburger-Button** (Header rechts) antippen.
2. Overlay-Menü fährt von oben ein.
3. Gewünschten Link antippen → Menü schließt sich automatisch, Route wechselt.

---

## 6. Eingaben & Ausgaben

| Interaktion | Eingabe | Ausgabe / Reaktion |
|-------------|---------|---------------------|
| Theme-Toggle | Klick | CSS-Variable `--theme` wechselt, `localStorage.theme` gesetzt |
| Suche | Tastatureingabe | `input`-Event → `renderProducts()` filtert `productsData` clientseitig |
| Kategorie-Filter | Select-Change | `change`-Event → Neu-Render |
| Sortierung | Select-Change | `change`-Event → Neu-Render |
| Zurücksetzen | Klick | Formular zurückgesetzt, `renderProducts()` |
| Produkt-Detail | Hash-Wechsel `#/product/<id>` | `renderProductDetail(id)` liest `productsData.find(p => p.id === id)` |
| Download | Klick „Download“ in Versionen-Tab | `window.open(product.download_url, '_blank')` (falls vorhanden) |
| Externe Links (Website, Repo, Issues) | Klick | `window.open(url, '_blank', 'noopener,noreferrer')` |
| Mobile Menu | Klick Hamburger | Klasse `.open` auf `.mobile-menu` toggelt |

---

## 7. Datenschutz & Berechtigungen

- **Keine Cookies** (außer `localStorage` für Theme-Präferenz – technisch notwendig, keine personenbezogenen Daten).
- **Kein Tracking, keine Analytics, keine Drittanbieter-Skripte** (außer Google Fonts, Lucide Icons, GitHub Raw – siehe „Externe Ressourcen“).
- **Keine Benutzerkonten, kein Login, keine Formulare** → keine Verarbeitung personenbezogener Daten.
- **Server-Logs** (GitHub Pages / Hosting-Provider) enthalten standardmäßig IP, User-Agent, Pfad, Zeitstempel – Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
- **Externe Ressourcen** laden beim Seitenaufruf:
  - `fonts.googleapis.com` / `fonts.gstatic.com` (Schriften)
  - `raw.githubusercontent.com` (Logo, Beispieldaten-JS)
  - `unpkg.com` (Lucide Icons SVG)
  - `cdn.tailwindcss.com` (nur `404.html`)
- **Rechte der Nutzer**: Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Beschwerde – Kontakt über Impressum/Datenschutz-Seite.

---

## 8. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache | Lösung / Workaround |
|---------|------------------|----------------------|
| **Seite bleibt weiß / Inhalte fehlen** | JavaScript deaktiviert oder Fehler in `app.js` | JS aktivieren; Browser-Konsole prüfen (F12); Cache leeren (Strg+F5) |
| **Theme wechselt nicht / springt zurück** | `localStorage` blockiert (Privater Modus, Cookie-Blocker) | Site-Daten erlauben; manuell im DevTools `localStorage.setItem('theme','dark')` testen |
| **Produkte werden nicht angezeigt** | `products.js` nicht geladen (Netzwerkfehler, CORS, GitHub Raw down) | Netzwerk-Tab prüfen: `GET https://raw.githubusercontent.com/lamacOs/LaunchKit/main/products.js`; offline? → Daten liegen nur remote vor |
| **Routing funktioniert nicht (404-Seite)** | Hash-Route falsch geschrieben oder `app.js` nicht geladen | URL prüfen: `#/products`, `#/product/launchkit-pro`; Startseite neu laden |
| **Mobile Menü öffnet nicht** | Event-Listener nicht registriert (Script-Fehler) | Konsole prüfen; Seite neu laden |
| **Downloads starten nicht** | `download_url` fehlt im Datensatz oder Popup-Blocker | Prüfen, ob Button „Download“ angezeigt wird (nur wenn `download_url` vorhanden); Popup-Blocker erlauben |
| **Schriften / Icons fehlen** | Externe CDNs blockiert (Firewall, uBlock, Netzwerk) | Domains freigeben: `fonts.googleapis.com`, `fonts.gstatic.com`, `unpkg.com`, `raw.githubusercontent.com` |
| **Dark-Mode-Farben wirken inkonsistent** | CSS-Custom-Properties nicht unterstützt (sehr alte Browser) | Modernen Browser nutzen (Edge 79+, Firefox 78+, Chrome 89+, Safari 14+) |

---

## 9. Häufige Fragen (FAQ)

**F: Kann ich LaunchKit selbst hosten?**  
A: Der Quellcode liegt in einem öffentlichen GitHub-Repository (`lamacOs/LaunchKit`). Da es sich um reine HTML/CSS/JS-Dateien handelt, können Sie das Repository klonen/forken und auf jedem statischen Hosting (GitHub Pages, Netlify, Vercel, eigener Server) betreiben
