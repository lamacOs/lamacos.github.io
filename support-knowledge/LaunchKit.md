<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: LaunchKit -->
<!-- source-files: ["LaunchKit/index.html"] -->

# Support-Dokumentation: LaunchKit

**Website-Name:** LaunchKit  
**Vermuteter Zweck:** Professionelle Präsentations- und Vertriebsplattform für digitale Produkte (Software, Spiele, Apps, Plugins, Open-Source-Projekte) mit Produktseiten, Downloads, Versionen, Changelog und Analytics.  
**Quellcode-Pfad:** `LaunchKit/index.html`  
**Datum der Erstellung:** 2025-08-14 (basierend auf heutigem Datum)  

---

## 1. Überblick

LaunchKit ist eine **statische Marketing- und Produktkatalog-Website** (Single-Page-Application-Charakter durch Hash-Routing), die vollständig im Browser läuft. Sie dient dazu, digitale Produkte ansprechend darzustellen, zu filtern, Details anzuzeigen (Versionen, Changelog, Systemanforderungen, Screenshots) und Downloads/Externe Links bereitzustellen. Es gibt **kein Backend**, keine Datenbank und keine Benutzerkonten im Quellcode – alle Daten liegen in einer eingebetteten JavaScript-Konstante `PRODUCTS`.

**Zielgruppe:** Entwickler, Publisher, Besucher, die digitale Produkte entdecken, vergleichen und herunterladen möchten.  
**Technische Basis:** Vanilla HTML/CSS/JS (ES-Module), Inline-Design-System, Hash-basiertes Routing (`#/`, `#/product/:slug`), LocalStorage für Theme & Favoriten, IntersectionObserver für Animationen, Service Worker (optional) für Offline-Caching.

---

## 2. Voraussetzungen & Zugänglichkeit

| Anforderung | Details |
|-------------|---------|
| **Browser** | Moderne Browser mit ES6-Module-Unterstützung (Chrome 61+, Firefox 60+, Safari 11+, Edge 79+). |
| **JavaScript** | Muss aktiviert sein – die gesamte Navigation, Rendering und Interaktion läuft clientseitig. |
| **Netzwerk** | Initialer Laden der `index.html` + Google Fonts (Poppins, Inter) + optionales Service-Worker-Caching. Danach offline nutzbar (sofern SW registriert). |
| **Auflösung** | Responsive: ≥ 320 px (Mobile) bis ≥ 1200 px (Desktop-Container). |
| **Barrierefreiheit** | Semantisches HTML, ARIA-Labels an Icon-Buttons, Fokus-Styles, `prefers-reduced-motion` wird respektiert. |
| **Datenschutz** | Keine Tracker, keine Cookies, keine externen API-Aufrufe (außer Google Fonts). LocalStorage nur für UI-Präferenzen (Theme, Favoriten). |

---

## 3. Sichtbare Bereiche & Navigation

### 3.1 Globale Navigation (Header)
- **Logo/Markenname** – Link zur Startseite (`#/`).
- **Navigationslinks** (Desktop):  
  - **Produkte** → `#/products` (Katalog mit Filtern)  
  - **Features** → `#/features` (Feature-Übersicht)  
  - **Preise** → `#/pricing` (Preis-Tabelle)  
  - **Changelog** → `#/changelog` (Globaler Changelog)  
  - **Kontakt** → `#/contact` (Kontaktformular/Infos)  
- **Rechts**: Theme-Toggle (☀️/🌙), Hamburger-Menü (Mobile < 880 px).
- **Mobile Menü**: Slide-Down-Panel mit denselben Links + CTA-Buttons.

### 3.2 Startseite (`#/`)
1. **Hero-Bereich**  
   - Headline, Subline, zwei CTA-Buttons („Produkte entdecken“, „Jetzt starten“).  
   - Meta-Row mit Vertrauensindikatoren (z. B. „100+ Produkte“, „Open Source“).  
   - **Hero-Card** (rechts): Mock-Dashboard mit Logo, KPIs (Downloads, Versionen, Bewertung), Sparkline-Balken.
2. **Features-Grid** (4 Spalten Desktop) – Karten mit Icon, Titel, Beschreibung.
3. **Showcase** – Split-View: Text + Pills (Tags) links, 4 Screenshot-Platzhalter rechts.
4. **Footer** – 4 Spalten (Produkt, Ressourcen, Rechtliches, Social), Copyright-Zeile.

### 3.3 Produktkatalog (`#/products`)
- **Toolbar** (sticky oben):  
  - Suchfeld (Echtzeit-Filter auf Name, Beschreibung, Tags, Kategorie).  
  - Dropdowns: Kategorie, Sortierung (Name, Version, Aktualisiert, Downloads), Preisfilter (Alle, Kostenlos, Bezahlt).  
  - „Nur Favoriten“ Checkbox.
- **Produkt-Grid** (3 Spalten Desktop) – Karten mit:  
  - Logo (Gradient-Kreis mit Initialen), Name, Kategorie/Version, Kurzbeschreibung, Tags, Version + „Details“-Link.
- **Leerzustand** – Illustration + Text, wenn Filter keine Treffer liefert.

### 3.4 Produktdetail (`#/product/:slug`)
- **Header**: Badge (Kategorie), Name, Version, Beschreibung, Meta-Tags (Lizenz, Plattform, Sprache, Preis), CTA-Buttons (Download, Website, GitHub, Favorit-Toggle).
- **Tabs**:  
  1. **Übersicht** – Long Description, Statistik-Karten (Downloads, Versionen, Letztes Update, Bewertung), Features-Liste, Systemanforderungen, Badges.  
  2. **Versionen** – Tabelle (Version, Datum, Typ, Größe, Changelog-Button, Download-Button).  
  3. **Changelog** – Akkordeon pro Version (Datum, Typ-Badge, Liste der Änderungen).  
  4. **Screenshots** – Lightbox-Grid (Klick → Vollbild-Slider mit Pfeiltasten/ESC/Swipe).  
  5. **Entwickler** – Autor-Info, Links (Website, GitHub, Twitter, Discord, E-Mail), verwandte Produkte.
- **Breadcrumb** oben links (Start → Produkte → Produktname).

### 3.5 Weitere Seiten (kurz)
- **Features** (`#/features`) – Erweiterte Feature-Karten mit „Mehr erfahren“-Links (Scroll-Anker).
- **Preise** (`#/pricing`) – Drei Tarifkarten (Starter/Professional/Enterprise) mit Feature-Listen, FAQ-Akkordeon.
- **Changelog** (`#/changelog`) – Globale Timeline aller Produkt-Updates (filterbar nach Produkt).
- **Kontakt** (`#/contact`) – Zwei-Spalten-Layout: Info-Karten links, Formular rechts (Name, E-Mail, Betreff, Nachricht, Checkbox). **Hinweis:** Formular hat `action="#"` – **kein Backend-Submit im Code sichtbar**.

---

## 4. Bedienung Schritt für Schritt

### 4.1 Theme wechseln (Hell/Dunkel)
1. Klicke auf den **Theme-Button** (Sonnen-/Mond-Icon) rechts in der Navigation.  
2. Das Farbschema wechselt sofort; Präferenz wird in `localStorage.theme` gespeichert und beim nächsten Besuch wiederhergestellt.

### 4.2 Produkte durchsuchen & filtern
1. Navigiere zu **Produkte** (oder Startseite → „Produkte entdecken“).  
2. **Suche**: Tippe in das Suchfeld – Liste filtert bei jeder Eingabe (Debounce 150 ms).  
3. **Kategorie**: Wähle im Dropdown „Alle Kategorien“ → z. B. „Spiele“.  
4. **Sortierung**: Wähle z. B. „Neueste zuerst“.  
5. **Preis**: „Nur kostenlos“ oder „Nur bezahlt“.  
6. **Favoriten**: Hake „Nur Favoriten anzeigen“ an (funktioniert nur, wenn zuvor Favoriten gesetzt wurden).  
7. Klicke auf **„Details“** einer Karte → Produktdetail-Seite.

### 4.3 Produktdetail nutzen
1. **Tabs wechseln**: Klicke auf Tab-Label (Übersicht, Versionen, Changelog, Screenshots, Entwickler).  
2. **Download**:  
   - In „Übersicht“: Primärer „Download vX.Y.Z“-Button → löst `handleDownload(product, latestVersion)` aus (öffnet `version.url` im neuen Tab, Fallback `product.downloadUrl`).  
   - In „Versionen“: Je Zeile ein Download-Button für die jeweilige Version.  
3. **Externe Links**: „Website“, „GitHub“ öffnen in neuem Tab (`target="_blank" rel="noopener"`).  
4. **Favorit toggeln**: Stern-Icon im Header → speichert/entfernt `slug` in `localStorage.favorites`.  
5. **Screenshots**: Klick auf Thumbnail → Lightbox öffnet sich. Navigation: Pfeiltasten ←/→, ESC, Klick auf Overlay, Swipe (Touch).  
6. **Changelog**: Klick auf Versionen-Akkordeon → klappt Änderungsliste auf/zu.

### 4.4 Favoriten verwalten
- **Hinzufügen**: Stern-Icon auf Produktkarte (nur im Katalog) oder Produktdetail.  
- **Anzeigen**: Katalog → „Nur Favoriten anzeigen“ anhaken.  
- **Persistenz**: `localStorage.favorites` (JSON-Array von Slugs). Kein Server-Sync.

### 4.5 Kontaktformular absenden
1. Gehe zu **Kontakt**.  
2. Fülle Pflichtfelder (Name, E-Mail, Betreff, Nachricht) + Checkbox „Ich stimme zu…“.  
3. Klicke **„Nachricht senden“**.  
   - **Im Quellcode nicht eindeutig erkennbar**, ob/wie die Daten versendet werden (`<form action="#" ...>` ohne JS-Submit-Handler).  
   - **Vermutung**: Formular ist nur Demo/Platzhalter; echtes Backend fehlt.

---

## 5. Eingaben & Ausgaben

| Interaktion | Eingabe | Ausgabe / Wirkung |
|-------------|---------|-------------------|
| Suche | Text (min. 0 Zeichen) | Gefilterte Produktliste (clientseitig) |
| Kategorie-Filter | Select-Option | Gefilterte Liste |
| Sortierung | Select-Option | Neu sortierte Liste |
| Preisfilter | Select-Option | Gefilterte Liste |
| Favorit-Toggle | Klick auf Stern | LocalStorage-Update, UI-Update |
| Download-Klick | – | `window.open(url, '_blank')` (externer Link) |
| Lightbox | Klick auf Thumbnail | Vollbild-Overlay mit Bildslider |
| Theme-Toggle | Klick | CSS-Variablen-Wechsel + LocalStorage |
| Kontaktformular | Formulardaten | **Keine verarbeitete Ausgabe im Code** (Standard-Submit auf `#`) |

---

## 6. Typische Probleme & Fehlerbehebung

| Problem | Mögliche Ursache | Lösung / Workaround |
|---------|------------------|---------------------|
| **Seite bleibt weiß / Navigation funktioniert nicht** | JavaScript deaktiviert oder ES-Module blockiert (z. B. strenge CSP). | JS aktivieren, CSP `script-src 'self' 'unsafe-inline'` erlauben (Inline-Script + Modul). |
| **Google Fonts laden nicht** | Netzwerkblocker / Offline / Firewall. | Seite nutzt `font-display: swap`; Fallback-System-Fonts greifen. Optional: Fonts lokal hosten. |
| **Theme wird nicht gespeichert** | `localStorage` deaktiviert (Privater Modus, Safari-Einstellung). | Keine Persistenz möglich; Theme fällt auf System-Präferenz zurück. |
| **Favoriten verschwinden nach Reload** | `localStorage` geleert / anderer Browser / Inkognito. | Erwartetes Verhalten – keine Cloud-Sync. |
| **Download startet nicht / 404** | `version.url` oder `product.downloadUrl` verweist auf ungültige/alte URL. | Prüfen, ob URL im `PRODUCTS`-Array korrekt ist (nur Datenpflege). |
| **Lightbox schließt nicht per ESC** | Fokus nicht im Overlay / Event-Listener nicht registriert. | Klick auf Overlay-Hintergrund oder „×“-Button nutzen. |
| **Mobile Menü öffnet nicht** | `nav-toggle` Click-Handler nicht gefeuert (z. B. `z-index`-Konflikt). | Seiten-Reload; prüfen, ob `mobile-menu` Klasse `.open` erhält. |
| **Kontaktformular sendet nicht ab** | Kein Submit-Handler / `action="#"`. | **Im Quellcode nicht eindeutig erkennbar** – Backend-Integration fehlt. Externes Formular-Tool (Formspree, Netlify Forms) einbinden oder eigenen Endpoint setzen. |

---

## 7. Datenschutz & Berechtigungen

- **Keine Cookies** gesetzt.  
- **LocalStorage Keys**:  
  - `theme` (`"light"` | `"dark"`)  
  - `favorites` (JSON-Array von Produkt-Slugs)  
  - Beide **nicht personenbezogen**, gerätegebunden.  
- **Externe Ressourcen**:  
  - Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) → IP-Übertragung an Google beim Font-Laden.  
  - GitHub Raw Logo (`raw.githubusercontent.com`) → IP an GitHub.  
  - Keine Analytics, Tracking, Social-Media-Widgets, CDN-Skripte (außer Fonts).  
- **Formulardaten**: Werden **nicht** clientseitig verarbeitet/gesendet (siehe 4.5).  
- **CSP-Empfehlung**:  
  ```http
  Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://raw.githubusercontent.com; script-src 'self' 'unsafe-inline'; connect-src 'self';
  ```

---

## 8. FAQ

**F: Kann ich LaunchKit auf meinem eigenen Server hosten?**  
A: Ja. Es ist eine reine statische `index.html` (inkl. CSS/JS). Einfach auf beliebigen Static Hosting legen (GitHub Pages, Netlify, Vercel, Apache, Nginx, S3+CloudFront). Kein Build-Schritt nötig.

**F: Wie füge ich eigene Produkte hinzu?**  
A: Bearbeite das `PRODUCTS`-Array im `<script type="module">`-Block am Ende der `index.html`. Jedes Produkt folgt dem im Code gezeigten Schema (id, slug, name, category, version, description, longDescription, logo, screenshots, downloadUrl, website, github, license, platform, language, price, rating, downloads, versions[], features[], requirements{}, badges[], developer{}, relatedProducts[]). **Im Quellcode nicht eindeutig erkennbar**, ob ein CMS/
