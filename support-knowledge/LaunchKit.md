<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: LaunchKit -->
<!-- source-files: ["LaunchKit/index.html"] -->

# Support-Dokumentation: LaunchKit

**Website-Name:** LaunchKit  
**Vermuteter Zweck:** Professionelle Präsentations- und Vertriebsplattform für digitale Produkte (Software, Spiele, Apps, Plugins, Open-Source-Projekte) mit Produktseiten, Downloads, Versionen, Changelogs und Analytics – alles an einem Ort.  
**Quellcode-Pfad:** `LaunchKit/index.html` (Single-Page-Application-Struktur mit Hash-Routing)  
**Datum der Erstellung:** 2025-08-14 (basierend auf dem bereitgestellten Quellcode-Stand)

---

## 1. Überblick & Zielgruppe

LaunchKit ist eine **statische, clientseitige Webanwendung** (kein Backend im Quellcode erkennbar), die als „Landingpage + Produktkatalog + Produktdetailseiten“ fungiert. Sie richtet sich an:

- **Produktbesitzer/Entwickler**, die eine professionelle Produktseite ohne Server-Setup hosten möchten (z. B. auf GitHub Pages, Netlify, Vercel).
- **Besucher/Nutzer**, die Produkte entdecken, Details lesen, Versionen/Changelogs einsehen und Downloads starten wollen.
- **Analytics-Interessierte**, die eingebaute Zähler (Views, Downloads, Revenue) sehen – **Hinweis:** Im Quellcode sind dies **Mock-Daten / Demowerte**, keine echten Server-seitigen Analytics.

**Technische Basis:**  
- Einzelne `index.html` mit Inline-CSS (Design-System, Dark/Light Mode, Responsive) und Inline-JavaScript (Routing, State, Rendering, Mock-Daten, Theme, Mobile Menu, Smooth Scroll).  
- Keine externen Frameworks (React, Vue etc.) – Vanilla JS.  
- Schriftarten: Google Fonts (Poppins, Inter).  
- Icons: Inline SVGs.  
- Hosting-tauglich als statische Datei.

---

## 2. Voraussetzungen & Zugriff

| Voraussetzung | Details |
|---------------|---------|
| **Browser** | Moderne Browser (Chrome, Firefox, Safari, Edge – ES6+ Support). |
| **JavaScript** | Muss aktiviert sein (Routing, Rendering, Theme-Toggle, Mobile Menu). |
| **Netzwerk** | Für Google Fonts & Favicon (GitHub Raw) Internetzugang nötig. Offline: Fonts fallen auf System-Fallbacks zurück. |
| **Installation** | Keine. Datei `index.html` direkt öffnen oder auf statischem Hosting deployen. |
| **Konto/Anmeldung** | **Nicht vorhanden** – keine Login/Registrierung im Code. |
| **API-Keys/Secrets** | Keine im Quellcode. Ein möglicher Geheimniswert wurde aus Sicherheitsgründen ausgelassen (nicht gefunden). |

---

## 3. Sichtbare Bereiche & Navigation

### 3.1 Header / Navigation (`.site-header`, sticky)
- **Logo/Markenname:** „LaunchKit“ mit Subtitle „Professional Product Platform“.
- **Desktop-Nav (`.nav-links`):**  
  - **Produkte** → `/products` (Katalog)  
  - **Features** → `#features` (Scroll-Anker auf Startseite)  
  - **Preise** → `#pricing` (Scroll-Anker, **Im Quellcode nicht eindeutig erkennbar**, ob eigener Inhalt existiert)  
  - **Changelog** → `/changelog` (globale Changelog-Seite)  
  - **Analytics** → `/analytics` (Demo-Dashboard)  
- **Rechts (`.nav-right`):**  
  - **Theme-Toggle** (☀/🌙) – speichert Präferenz in `localStorage` (`lk-theme`).  
  - **Mobile Menu Button** (Hamburger) – nur < 880 px sichtbar.
- **Mobile Menu (`.mobile-menu`):** Vollbild-Overlay ab 64 px Top, gleiche Links + CTA-Buttons („Jetzt starten“, „GitHub“).

### 3.2 Startseite (Route `/` / `home`)
1. **Hero (`.hero`)**  
   - Headline: „Die professionelle Plattform für dein digitales Produkt“ (Brand-Akzent farbig).  
   - Lead-Text, CTA-Buttons: „Jetzt starten“ (scrollt zu `#products`), „GitHub ansehen“ (Link `https://github.com/lamacOs/LaunchKit`).  
   - Meta-Zeile: „Open Source“, „Kein Backend nötig“, „In Minuten live“.  
   - **Hero-Card (`.hero-card`)** – visuelle Demo eines Produkt-Dashboards:  
     - Produkt-Header (Logo, Name, Version, Status „Live“).  
     - KPI-Kacheln: **Views 12.4k**, **Downloads 3.2k**, **Revenue $4.8k** (Mock-Daten).  
     - Mini-Charts (Sparkbars, CSS-Animation).  
     - Footer mit „Letzte Aktualisierung: vor 2 Std.“.
2. **Features (`.features-grid`, 4 Karten)**  
   - **Produktseiten** – schöne Landingpages je Produkt.  
   - **Versionen & Changelog** – Historie pro Produkt.  
   - **Analytics & Insights** – Views, Downloads, Revenue (Demo).  
   - **Einfaches Deployment** – statisch, GitHub Pages, Netlify, Vercel.
3. **Showcase (`.showcase`)** – Split-Layout: Text + 4 Screenshot-Platzhalter (CSS-Gradienten, keine echten Bilder).
4. **Footer (`.site-footer`)** – 4 Spalten: Produkt, Ressourcen, Rechtliches, Social + Copyright-Zeile.

### 3.3 Produktkatalog (Route `/products`)
- **Toolbar (`.toolbar`)**  
  - Suche (Input mit Lupe-SVG) – filtert clientseitig nach Name, Beschreibung, Kategorie, Tags.  
  - Filter: **Kategorie** (Alle, Software, Spiel, App, Plugin, Open Source), **Sortierung** (Neueste, Beliebteste, Name A-Z, Version), **Status** (Alle, Live, Beta, Alpha, Privat).  
- **Produkt-Grid (`.products-grid`, 3 Spalten)** – Karten (`.product-card`) mit:  
  - Logo (Buchstabe + Gradient), Name, Kategorie/Status-Pills, Beschreibung, Tags, Footer: Version + „Details“-Link (navigiert zu `/product/<id>`).
- **Leerzustand (`.empty`)** – falls Filter nichts ergibt.

### 3.4 Produktdetail (Route `/product/:id`)
- **Header-Card** – großes Logo, Name, Kategorie/Status-Pills, Beschreibung, Meta (Version, Updated, Lizenz, Sprache, Größe), Buttons: **Download** (löst `handleDownload` aus), **Changelog** (scrollt zu Changelog-Sektion), **Website** (externer Link, falls `product.website` gesetzt).
- **Tabs (`.detail-tabs`)** – 3 Reiter:  
  1. **Übersicht** – Features (Checkliste), Systemanforderungen (Key-Value), Statistik-Kacheln (Views, Downloads, Rating, Update).  
  2. **Versionen** – Tabelle: Version, Datum, Typ, Größe, Changelog (gekürzt), Download-Button pro Zeile.  
  3. **Changelog** – Timeline pro Version (Datum, Typ-Badge, Titel, Liste Änderungen).
- **Nicht gefunden** – falls `id` nicht in `PRODUCTS` existiert: 404-Card mit Link zurück zu Produkten.

### 3.5 Globaler Changelog (Route `/changelog`)
- **Toolbar** – Suche, Produkt-Filter (Alle + alle Produkte), Typ-Filter (Alle, Feature, Fix, Improvement, Breaking, Security), Sortierung.
- **Liste** – Karten pro Eintrag: Produkt-Logo/Name, Version, Typ-Badge, Titel, Beschreibung, Datum, „Details“-Link → `/product/<id>#changelog`.
- **Leerzustand** bei keinem Treffer.

### 3.6 Analytics-Dashboard (Route `/analytics`)
- **Hinweis-Banner** – „Demo-Daten – Keine echten Analytics“.
- **KPI-Kacheln** – Total Views, Total Downloads, Total Revenue, Active Products (Summen über `PRODUCTS`).
- **Charts (Platzhalter)** – „Views (30 Tage)“, „Downloads (30 Tage)“, „Revenue (30 Tage)“ – nur SVG-Rahmen, **keine echte Chart-Bibliothek**.
- **Top-Produkte-Tabelle** – Sortierbar (Views, Downloads, Revenue, Rating) – Client-seitiges Sortieren via `th` Click.
- **Letzte Aktivität** – Mock-Liste (Download, View, Purchase) mit Zeitstempeln.

---

## 4. Bedienung Schritt für Schritt

### 4.1 Theme wechseln (Light/Dark)
1. Klicke auf den **Theme-Button** (Sonnen-/Mond-Icon) rechts im Header.  
2. Seite wechselt sofort; Präferenz wird in `localStorage` (`lk-theme`) gespeichert und beim nächsten Laden wiederhergestellt.

### 4.2 Mobile Navigation öffnen
1. Bei Bildschirmbreite < 880 px: **Hamburger-Button** (drei Striche) oben rechts antippen.  
2. Menü fährt von oben ein.  
3. Gewünschten Eintrag antippen → Menü schließt sich, Navigation wird ausgeführt (Hash-Change oder Scroll).

### 4.3 Produkte durchsuchen & filtern
1. Navigiere zu **Produkte** (Header) oder scrolle zum Bereich „Produkte“ auf Startseite.  
2. **Suche:** Text in „Produkte suchen…“ eingeben → Liste filtert live.  
3. **Kategorie:** Dropdown wählen (Software, Spiel, App, Plugin, Open Source).  
4. **Sortierung:** Dropdown wählen (Neueste, Beliebteste, Name A-Z, Version).  
5. **Status:** Dropdown wählen (Live, Beta, Alpha, Privat).  
6. **Karte anklicken** → Produktdetailseite.

### 4.4 Produktdetail ansehen
1. Auf Produktkarte **„Details“** klicken (oder direkt URL `#/product/<id>` aufrufen).  
2. **Tabs** oben wählen: Übersicht / Versionen / Changelog.  
3. **Download-Button** (Header oder Versionen-Tabelle) → löst `handleDownload(product, version)` aus:  
   - Zeigt `alert("Download gestartet: …")` (Demo).  
   - **Im Quellcode nicht eindeutig erkennbar**, ob echte Datei-Downloads hinterlegt sind – `product.downloadUrl` oder `version.url` werden nicht im Mock-Daten-Array befüllt (leere Strings).  
4. **Externer Website-Link** – falls im Produkt hinterlegt, öffnet neuen Tab.

### 4.5 Globalen Changelog nutzen
1. Header → **Changelog** klicken.  
2. Filter setzen (Produkt, Typ, Sortierung).  
3. Eintrag „Details“ → springt zu Produktdetail + Changelog-Tab.

### 4.6 Analytics-Dashboard ansehen
1. Header → **Analytics** klicken.  
2. KPI-Kacheln, Platzhalter-Charts, Top-Produkte-Tabelle (Spaltenköpfe klickbar zum Sortieren), Letzte Aktivität betrachten.  
3. **Hinweis:** Alles **Mock-Daten** – keine echte Messung.

### 4.7 Smooth Scroll zu Anker (`#features`, `#pricing`)
- Klick auf Nav-Links „Features“ / „Preise“ → `e.preventDefault()`, `scrollIntoView({behavior: 'smooth'})`.  
- **Preise-Bereich** – **Im Quellcode nicht eindeutig erkennbar**, ob ein `#pricing`-Element existiert (nicht im gelieferten HTML-Ausschnitt).

---

## 5. Eingaben & Ausgaben

| Bereich | Eingabe (User) | Ausgabe / Reaktion |
|---------|----------------|---------------------|
| Theme-Toggle | Klick | Umschaltung CSS-Variablen, `localStorage` Update, Icon-Drehung. |
| Mobile Menu | Klick Hamburger | Menü slide-down/up, Body-Scroll-Lock. |
| Suche (Produkte/Changelog) | Text eingeben | Clientseitiges Filtern der Arrays `PRODUCTS` / `CHANGELOG`. |
| Filter-Dropdowns | Auswahl | Neu-Render der Grid/Liste. |
| Sortier-Dropdowns | Auswahl | Neu-Render mit sortiertem Array. |
| Produktkarte / Details-Link | Klick | Hash-Route `#/product/<id>` → `renderProductDetail(id)`. |
| Download-Button | Klick | `alert("Download gestartet: …")` – **kein echter Download** (URLs leer). |
| Changelog-Details | Klick | Hash-Route `#/product/<id>#changelog` + Tab-Wechsel. |
| Analytics Tabellen-Header | Klick | Clientseitiges Sortieren der `PRODUCTS`-Kopie. |
| Nav-Links (Features/Preise) | Klick | Smooth Scroll zu `#features` / `#pricing`. |
| Externe Links (GitHub, Website) | Klick | `window.open(..., '_blank', 'noopener')`. |

---

## 6. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache (Code-basiert) | Abhilfe |
|---------|----------------------------------|---------|
| **Seite bleibt weiß / JS-Fehler** | Browser blockiert Inline-Scripts (CSP) oder JS deaktiviert. | CSP anpassen (`'unsafe-inline'` für Scripts/Styles), JS aktivieren. |
| **Fonts / Favicon laden nicht** | Kein Internet / GitHub Raw blockiert. | Lokal hosten oder Offline-Fallbacks nutzen (System-Fonts greifen automatisch). |
| **Download tut nichts / Alert nur** | `product.downloadUrl` & `version.url` sind leere Strings im Mock-Array. | Echte URLs in `PRODUCTS`-Daten pflegen (im Code: `const PRODUCTS = [...]`). |
| **Preise-Link scrollt nicht** | Kein Element mit `id="pricing"` im DOM. | Entweder Section `id="pricing"` hinzufügen oder Nav-Link entfernen/ändern. |
| **Mobile Menu schließt nicht** | Klick außerhalb nicht implementiert (nur Link-Klick schließt). | Außerhalb klicken → Menü bleibt offen (bekanntes Limit). Workaround: Link klicken oder Hamburger erneut drücken. |
| **Theme nicht gespeichert** | `localStorage` deaktiviert / Privatmodus blockiert. | Browser-Einstellungen prüfen; Fallback: System-Preference (`prefers-color-scheme`). |
| **Analytics zeigen 0 / Demo-Werte** | Kein Backend – Daten sind hardcoded in `PRODUCTS`. | Für echte Analytics: Backend/API anbinden (nicht im Code vorhanden). |
| **Changelog leer trotz Einträ
