<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: LaunchKit -->
<!-- source-files: ["LaunchKit/index.html"] -->

# Support-Dokumentation: LaunchKit

**Website-Name:** LaunchKit  
**Vermuteter Zweck:** Professionelle Präsentations- und Vertriebsplattform für digitale Produkte (Software, Spiele, Apps, Plugins, Open-Source-Projekte) mit Produktseiten, Downloads, Versionen, Changelog und Analytics.  
**Quellcode-Pfad:** `LaunchKit/index.html`  
**Datum der Erstellung:** 2025-08-17 (basierend auf heutigem Datum)  

---

## 1. Überblick

LaunchKit ist eine **statische Single-Page-Website** (oder eng verwandte Seiten), die als Showcase und Landingpage für digitale Produkte dient. Sie bietet:

- **Produktkatalog** mit Such-/Filterfunktion (Client-seitig)
- **Produktdetailseiten** mit Versionshistorie, Changelog, Download-Buttons, Systemanforderungen, Screenshots
- **Responsive Design** (Mobile-First, Breakpoints bei ≤1024px, ≤768px, ≤640px, ≤480px)
- **Dark/Light Mode** mit Persistenz im `localStorage` und OS-Erkennung
- **Barrierefreiheit** (ARIA-Labels, Fokus-Styles, semantisches HTML)
- **Kein Backend erkennbar** – alle Daten liegen in einem eingebetteten JavaScript-Objekt `PRODUCTS` vor.

> **Hinweis:** Die übermittelte Datei wurde gekürzt (`[Datei gekürzt; nur Anfang analysiert]`). Die Dokumentation beschreibt nur das, was im sichtbaren Codeausschnitt eindeutig erkennbar ist. Fehlende Bereiche (z. B. vollständige Produktdetail-Seite, Footer-Inhalte, Analytics-Implementierung) sind als „Im Quellcode nicht eindeutig erkennbar“ gekennzeichnet.

---

## 2. Voraussetzungen für Besucher

| Anforderung | Details |
|-------------|---------|
| **Browser** | Moderner Browser mit ES6+ Unterstützung (Chrome 60+, Firefox 55+, Safari 11+, Edge 79+) |
| **JavaScript** | Muss aktiviert sein (Navigation, Theme-Toggle, Filter, Tabs, Mobile Menu) |
| **Cookies / localStorage** | Für Theme-Persistenz (`launchkit-theme`) |
| **Netzwerk** | Externe Ressourcen: Google Fonts (Poppins, Inter), GitHub Raw Logo (`https://raw.githubusercontent.com/lamacOs/lamacos.github.io/main/logo.png`) |
| **Bildschirm** | Responsive ab 320px Breite |

---

## 3. Sichtbare Bereiche & Navigation

### 3.1 Header (`<header class="site-header">`)
- **Logo/Markenname**: „LaunchKit“ mit Subtitle „Digital Products“ (SVG-Logo aus GitHub Raw)
- **Desktop-Navigation** (`.nav-links`):  
  - **Produkte** (`data-page="products"`) – Standardseite  
  - **Features** (`data-page="features"`)  
  - **Preise** (`data-page="pricing"`)  
  - **Changelog** (`data-page="changelog"`)  
  - **Dokumentation** (`data-page="docs"`)  
  - **Kontakt** (`data-page="contact"`)  
  - Aktiver Link: Klasse `.active`, Brand-Farbe
- **Rechte Seite** (`.nav-right`):  
  - **Theme-Toggle** (☀️/🌙) – `aria-label="Farbschema wechseln"`  
  - **CTA-Button** „Jetzt starten“ (`.btn-primary`) – Scrollt zu `#contact` oder lädt Kontakt-Seite
- **Mobile Menu** (Hamburger `☰`, `aria-label="Menü öffnen"`):  
  - Gleiche Links + CTA-Buttons („Jetzt starten“, „GitHub“)

### 3.2 Hauptseiten (Seiten-Wechsel via `showPage(page)`)
| Seite | ID / Selektor | Inhalt (erkennbar) |
|-------|---------------|---------------------|
| **Produkte** | `#page-products` | Toolbar (Suche, Filter: Kategorie, Plattform, Lizenz, Sortierung), Produkt-Grid (3 Spalten), Empty-State |
| **Features** | `#page-features` | 4 Feature-Karten (Icon, Titel, Beschreibung) |
| **Preise** | `#page-pricing` | 3 Tarif-Karten (Starter/Pro/Enterprise), Toggle Monatlich/Jährlich (20 % Rabatt), Feature-Listen |
| **Changelog** | `#page-changelog` | Timeline mit Versionen, Tags, Datum, Änderungen |
| **Dokumentation** | `#page-docs` | Sidebar-Navigation + Content-Bereich mit Tabs (Erste Schritte, Konfiguration, API, Deployment) |
| **Kontakt** | `#page-contact` | Formular (Name, E-Mail, Betreff, Nachricht) + Info-Karten (E-Mail, GitHub, Discord, Docs) |

### 3.3 Produktdetail-Seite (`#page-product-detail`)
- **Wird dynamisch gerendert** via `renderProductDetail(slug)`  
- **Tabs**: Übersicht, Versionen, Changelog, Systemanforderungen  
- **Inhalt**: Hero-Card (Logo, Name, Version, Badges, Beschreibung, Download-Buttons, Stats), Tab-Panels  
- **Zurück-Button** → `showPage('products')`

### 3.4 Footer (`<footer class="site-footer">`)
- 4 Spalten: Marke + Social Links, Produkt, Unternehmen, Rechtliches  
- Copyright-Zeile + „Made with LaunchKit“

---

## 4. Bedienung Schritt für Schritt

### 4.1 Theme wechseln (Light/Dark)
1. Klicke auf den **Theme-Toggle** (Sonnen-/Mond-Icon) rechts oben im Header.  
2. Das Farbschema wechselt sofort.  
3. Die Einstellung wird im `localStorage` unter `launchkit-theme` gespeichert und beim nächsten Besuch automatisch angewendet.

### 4.2 Navigation zwischen Seiten
**Desktop:** Klicke auf einen Navigationslink (Produkte, Features, Preise, …).  
**Mobile:**  
1. Tippe auf das **Hamburger-Menü** (☰).  
2. Wähle den gewünschten Eintrag.  
3. Das Menü schließt sich automatisch.

### 4.3 Produkte durchsuchen & filtern (Seite „Produkte“)
1. **Suche**: Gib Text in das Suchfeld („Produkte suchen…“) ein – filtert Name, Beschreibung, Kategorie, Tags.  
2. **Kategorie-Filter**: Wähle „Alle“, „Software“, „Spiele“, „Apps“, „Plugins“, „Open Source“.  
3. **Plattform-Filter**: „Alle“, „Windows“, „macOS“, „Linux“, „Web“, „Android“, „iOS“.  
4. **Lizenz-Filter**: „Alle“, „Kostenlos“, „Freemium“, „Kauf“, „Abo“, „Open Source“.  
5. **Sortierung**: „Neueste“, „Beliebteste“, „Name A–Z“, „Version“.  
6. **Ergebnis**: Produktkarten aktualisieren sich live (Client-seitig).  
7. **Leerer Zustand**: Erscheint Meldung „Keine Produkte gefunden“ mit Reset-Button.

### 4.4 Produktdetail anzeigen
1. Klicke auf eine **Produktkarte** (ganze Karte ist klickbar, `cursor: pointer`).  
2. Die Detailseite lädt mit Tabs:  
   - **Übersicht**: Beschreibung, Badges, Download-Buttons (Windows/macOS/Linux/Web), Statistiken (Downloads, Bewertung, Update)  
   - **Versionen**: Tabelle mit Version, Datum, Typ, Changelog-Link, Download-Buttons pro Plattform  
   - **Changelog**: Liste der Änderungen pro Version (Tags: Neu, Verbesserung, Fix, Breaking)  
   - **Systemanforderungen**: Karten für Windows, macOS, Linux (Minimal & Empfohlen)  
3. **Zurück**: Klicke auf „← Zurück zu Produkten“.

### 4.5 Preise vergleichen
1. Wechsle auf Seite **Preise**.  
2. Nutze den **Toggle „Jährlich / Monatlich“** – Preise aktualisieren sich (jährlich = 20 % Rabatt).  
3. Vergleiche Feature-Listen (✓/✗ Icons).  
4. Klicke auf „Loslegen“ beim gewünschten Tarif – scrollt zu Kontakt-Seite (`showPage('contact')`).

### 4.6 Changelog einsehen
1. Öffne Seite **Changelog**.  
2. Scrolle durch die Timeline (neueste Version oben).  
3. Jede Version zeigt: Versionsnummer, Tag (Major/Minor/Patch/Hotfix), Datum, Liste der Änderungen mit Typ-Tags.

### 4.7 Dokumentation lesen
1. Öffne Seite **Dokumentation**.  
2. **Sidebar**: Klicke auf Kategorie (Erste Schritte, Konfiguration, API, Deployment) – lädt entsprechenden Content.  
3. **Tabs** im Content-Bereich: Übersicht, Installation, Konfiguration, Nutzung (Inhalt variiert per Kategorie).  
4. Code-Beispiele sind per `pre code` formatiert (kein Syntax-Highlighting im Code sichtbar).

### 4.8 Kontaktformular absenden
1. Öffne Seite **Kontakt**.  
2. Fülle Pflichtfelder aus: **Name**, **E-Mail**, **Betreff** (Dropdown), **Nachricht**.  
3. Klicke **„Nachricht senden“**.  
4. **Client-seitige Validierung**:  
   - Name ≥ 2 Zeichen  
   - E-Mail-Format prüfen  
   - Betreff gewählt  
   - Nachricht ≥ 10 Zeichen  
5. **Erfolgs-Modal** erscheint (Danke, Antwort innerhalb 24h).  
6. Formular wird zurückgesetzt.  
> **Hinweis:** Kein `fetch`/`XMLHttpRequest` im Code – Submit ist **rein simuliert** (Demo). Kein Backend erkennbar.

---

## 5. Eingaben & Ausgaben

| Interaktion | Eingabe | Ausgabe / Reaktion |
|-------------|---------|---------------------|
| Theme-Toggle | Klick | Umschaltung CSS-Variablen, `localStorage`-Eintrag, Icon-Drehung |
| Nav-Link | Klick | `showPage(id)` → `hidden`-Attribut umschalten, Scroll to top, Mobile Menu schließen |
| Produktkarte | Klick | `renderProductDetail(slug)` → Detailseite anzeigen |
| Suchfeld | Tastatureingabe | `filterProducts()` → Grid aktualisiert |
| Filter-Dropdowns | Change | `filterProducts()` → Grid aktualisiert |
| Sortier-Dropdown | Change | `filterProducts()` → Grid aktualisiert |
| Reset-Filter | Klick | Alle Filter auf Standard, Grid aktualisiert |
| Preis-Toggle | Klick | `renderPricing()` → Preise & Labels aktualisieren |
| Doc-Sidebar | Klick | `renderDocContent(cat)` → Content + Tabs neu rendern |
| Doc-Tabs | Klick | Aktiven Tab umschalten |
| Kontaktformular | Submit + Validierung | Erfolgs-Modal, Formular-Reset (kein Netzwerkrequest) |
| Modal schließen | Klick auf × oder Overlay | Modal entfernen |
| Download-Buttons | Klick | `window.open(url, '_blank')` – öffnet externen Link (Platzhalter `#`) |

---

## 6. Typische Probleme & Fehlerbehebung

| Problem | Mögliche Ursache | Lösung / Workaround |
|---------|------------------|----------------------|
| **Theme wird nicht gespeichert** | `localStorage` blockiert (Privater Modus, Browser-Einstellung) | Browser-Einstellungen prüfen; Theme fällt auf OS-Präferenz zurück |
| **Mobile Menu öffnet nicht** | JavaScript-Fehler oder `navToggle` nicht gefunden | Konsole prüfen; Seite neu laden |
| **Produktfilter zeigt keine Ergebnisse** | Suchbegriff zu spezifisch / Filter-Kombination zu eng | „Filter zurücksetzen“ nutzen; Suchfeld leeren |
| **Produktdetail zeigt „Produkt nicht gefunden“** | `slug` stimmt nicht mit `PRODUCTS`-Array überein | Zurück zu Produkten, Karte erneut klicken |
| **Preise aktualisieren sich nicht beim Toggle** | JS-Fehler in `renderPricing()` | Konsole prüfen; Seite neu laden |
| **Kontaktformular sendet nicht ab** | Validierung fehlgeschlagen (roter Rand) | Alle Pflichtfelder korrekt ausfüllen |
| **Externe Schriftarten laden nicht** | Netzwerk blockiert Google Fonts / GitHub Raw | Offline: Fallback auf System-Fonts (CSS `font-family` Stack) |
| **Scroll-Verhalten ruckelt** | `scroll-behavior: smooth` + `scrollTo(0,0)` | Kein Fehler, Design-Entscheidung |
| **Download-Links führen ins Leere** | `href="#"` Platzhalter | Im Quellcode nicht eindeutig erkennbar – echte URLs fehlen |

---

## 7. Datenschutz & Berechtigungen

| Aspekt | Status im Quellcode |
|--------|---------------------|
| **Cookies** | Keine gesetzt (nur `localStorage` für Theme) |
| **Tracking / Analytics** | Im gekürzten Code **nicht erkennbar** (kein GA, Matomo, Plausible, etc.) |
| **Externe Requests** | Google Fonts (Fonts API), GitHub Raw (Logo) – laden beim Seitenaufruf |
| **Formulardaten** | Werden **nicht** an Server gesendet (Demo-Modal only) |
| **IP / Nutzerdaten** | Keine Erhebung im Frontend-Code sichtbar |
| **CSP / Security Headers** | Nicht im HTML definierbar (statische GitHub Pages) |
| **Barrierefreiheit** | ARIA-Labels, semantische Tags, Fokus-Styles, Kontrast (CSS-Variablen) – **gut umgesetzt** |

> **Hinweis:** Da es sich um eine statische Seite handelt, liegt Datenschutz-Verantwortung beim Hoster (GitHub Pages) und den externen Anbietern (Google Fonts).

---

## 8. FAQ

**F: Ist LaunchKit ein echtes Shopsystem mit Zahlungsabwicklung?**  
A: **Nein.** Im Quellcode ist **kein Backend, keine Payment-Integration, kein Warenkorb** erkennbar. Es ist eine Präsentations-/Demo-Plattform.

**F: Kann ich eigene Produkte hinzufügen?**  
A: Nur durch **Bearbeiten des `PRODUCTS`-Arrays im JavaScript** (ca. Zeile 1200+). Kein CMS, kein Admin-Interface.

**F: Funktioniert die Seite offline?**  
A: **Teilweise.** HTML/CSS/JS funktionieren offline, aber **Google Fonts & Logo** laden nicht. Ein Service Worker ist **nicht** im Code vorhanden.

**F: Gibt es eine API
