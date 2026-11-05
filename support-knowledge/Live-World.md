<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Live-World -->
<!-- source-files: ["Live-World/index.html"] -->

# Support-Dokumentation: Live Welt

**Website-Name:** Live Welt  
**Vermuteter Zweck:** Dashboard-ähnliche Startseite mit KI-gestütztem Kundensupport-Widget (lamacHub)  
**Quellcode-Pfad:** Live-World/index.html  
**Datum der Erstellung:** 2025-08-17  

---

## 1. Überblick

**Live Welt** ist eine einzelne HTML-Seite, die ein responsives Dashboard-Layout mit Karten (Cards) und einer festen Navigationsleiste darstellt. Zusätzlich ist ein **KI-Kundenservice-Widget (lamacHub)** fest in die Seite eingebettet, das über einen schwebenden Button unten rechts geöffnet wird. Die Seite unterstützt Light- und Dark-Mode über CSS-Variablen.

> **Hinweis:** Der übermittelte Quellcode ist gekürzt (`[Datei gekürzt; nur Anfang analysiert]`). Die Dokumentation beschreibt nur die im Auszug erkennbaren Funktionen. Fehlende Bereiche (z. B. weitere Dashboard-Karten, Skript-Ende, Worker-Kommunikation) sind als „Im Quellcode nicht eindeutig erkennbar“ gekennzeichnet.

---

## 2. Voraussetzungen & Technische Basis

| Anforderung | Details |
|-------------|---------|
| **Browser** | Moderner Browser mit Unterstützung für CSS Custom Properties, `fetch`/`Web Workers`, `IntersectionObserver` (nicht direkt genutzt, aber typisch), `localStorage` (nicht im Auszug genutzt). |
| **Netzwerk** | Zugriff auf `https://fonts.googleapis.com` (Schriftart Inter) und `https://carescape-ai.oslamuoslamu.workers.dev/` (KI-Worker-Endpunkt). |
| **JavaScript** | Muss aktiviert sein für das Support-Widget (Öffnen/Schließen, Senden, Markdown-Rendering, Typing-Animation). |
| **Cookies/Storage** | Im Auszug nicht verwendet. Der Worker könnte serverseitig Sitzungen führen. |
| **CSP-Hinweis** | Inline-`<style>` und `<script>` sowie externe Fonts/Worker erfordern ggf. `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com` und `script-src 'self' 'unsafe-inline' https://carescape-ai.oslamuoslamu.workers.dev`. |

---

## 3. Sichtbare Bereiche & UI-Elemente

### 3.1 Navigationsleiste (`.navbar`)
- **Position:** Oben, `position: sticky; top: 0`.
- **Inhalt:**
  - **Logo (`.logo`):** 32×32 px Bild (`<img>`) + Text „Live Welt“ (schwarz, fett, per Kommentar „Design1 Regel“).
  - **Toggle-Button (`.toggle`):** Beschriftungsloser Button (`padding: 10px 14px`, abgerundet), vermutlich für Theme-Umschaltung (Light/Dark). **Im Quellcode nicht eindeutig erkennbar:** Kein `aria-label`, keine JS-Logik im Auszug.

### 3.2 Dashboard-Grid (`.dashboard`)
- **Layout:** CSS Grid, `repeat(auto-fit, minmax(220px, 1fr))`, Gap 22 px, max. 1100 px Breite, zentriert.
- **Karten (`.card`):** Weiße Karten mit Rand, Radius 18 px, Padding 22 px, zentrierter Text, Hover-Heave (`transform: translateY(-3px)`).
  - **Label (`.label`):** Grau, 14 px.
  - **Zahl (`.number`):** 1.6 rem, fett, Akzentfarbe `#ff7a00` (Orange).
- **Im Quellcode nicht eindeutig erkennbar:** Anzahl und konkreter Inhalt der Karten (Daten, Icons, Links).

### 3.3 lamacHub KI-Kundenservice (`#lamac-ai`)
- **Öffnen-Button (`#lamac-ai-open`):** Fester runder Button (60 px) unten rechts (24 px Abstand), Emoji „💬“, grün (`#007e62`), Schatten, Hover-Skalierung.
- **Chat-Fenster (`#lamac-ai-window`):** Initial `display: none`, bei Klasse `.open` `display: flex` mit Animation. Größe: max. 390 px × 570 px (Desktop), responsiv bis 100 vw−32 px. Hintergrund `#efeae2`, Rand, Radius 18 px, Schatten.
  - **Header:** Dunkelgrün (`#11211d`), Titel „lamacHub Kundenservice“, Untertitel „KI-gestützter Support“, Schließen-Button (×).
  - **Nachrichtenbereich (`#lamac-ai-messages`):** Scrollbar, `aria-live="polite"`, Blasen für Bot (weiß, links) und User (hellgrün, rechts). Markdown-Rendering (Überschriften, Listen, Tabellen, Code, Links, Zitate, HR).
  - **Typing-Indikator:** Drei pulsierende Punkte (`.lamac-typing-dot`), `role="status"`.
  - **Eingabeformular (`#lamac-ai-form`):** Textfeld (max. 1800 Zeichen, `autocomplete="off"`), Sende-Button (Pfeil ➤), deaktiviert während `busy`.

---

## 4. Bedienung – Schritt für Schritt

### 4.1 Dashboard betrachten
1. Seite laden → Navigationsleiste oben, Karten-Grid darunter.
2. Bei Bedarf **Toggle-Button** in der Navbar klicken → **Vermutung:** Umschaltung Light/Dark (CSS-Klasse `.dark` auf `<html>` oder `<body>`). **Im Quellcode nicht eindeutig erkennbar:** Kein Event-Listener im Auszug.

### 4.2 KI-Kundenservice nutzen
1. **Öffnen:** Klick auf den grünen 💬-Button unten rechts.
2. **Erste Nachricht:** Im Chat erscheint Bot-Begrüßung: „Hallo! Wie kann ich dir weiterhelfen?“.
3. **Eingabe:** Text in das Feld „Nachricht schreiben …“ tippen (max. 1800 Zeichen).
4. **Senden:** Enter oder Klick auf ➤-Button.
   - User-Nachricht erscheint rechts (grüne Blase).
   - Eingabefeld wird geleert, Button deaktiviert (`busy = true`).
   - Typing-Indikator (drei Punkte) erscheint links.
5. **Antwort warten:** Bot-Antwort wird per Markdown gerendert (Links, Code, Tabellen etc.). Nach Erhalt: `busy = false`, Button wieder aktiv.
6. **Schließen:** Klick auf × im Header oder erneut auf 💬-Button (Toggle-Logik im Skript). Fenster wird per `display: none` ausgeblendet.

### 4.3 Barrierefreiheit
- `aria-label` auf Buttons (Öffnen, Schließen, Senden, Eingabe).
- `aria-live="polite"` im Nachrichtenbereich.
- `role="status"` beim Typing-Indikator.
- Fokus-Styles auf Input (`border-color: #007e62`, Box-Shadow).
- `prefers-reduced-motion`: Animationen deaktiviert.

---

## 5. Eingaben & Ausgaben

| Komponente | Eingabe | Ausgabe / Wirkung |
|------------|---------|-------------------|
| **Toggle-Button (Navbar)** | Klick | **Unbekannt** – keine JS-Logik im Auszug. |
| **Chat-Eingabe** | Text (≤1800 Zeichen) | User-Blase, Versand an Worker (siehe 6). |
| **Sende-Button** | Klick / Enter | Submit des Formulars → `sendMessage()` (im gekürzten Teil). |
| **Schließen-Button** | Klick | Chat-Fenster `display: none`, Klasse `.open` entfernt. |
| **Worker-Antwort** | JSON/Stream (vermutlich) | Bot-Blase mit gerendertem Markdown, Typing-Indikator entfernt. |

---

## 6. Kommunikation mit dem KI-Worker (Bestätigt / Vermutet)

**Bestätigt (aus Skript-Kopf):**
```js
const WORKER_URL = "https://carescape-ai.oslamuoslamu.workers.dev/";
```
- Einziger Endpunkt für alle Websites.
- `history`-Array wird geführt (Kontext für Folgefragen).
- `busy`-Flag verhindert Doppelanfragen.

**Im Quellcode nicht eindeutig erkennbar (gekürzter Teil):**
- Request-Format (POST? JSON? `history` mitgesendet?).
- Response-Handling (Streaming? Einmalig? Fehlerbehandlung?).
- Authentifizierung/Api-Key (kein Header im Auszug).
- Serverseitige Speicherung von Gesprächen.

**Sicherheitshinweis:** Der Worker-URL ist im Frontend sichtbar. Keine Geheimnisse im Client-Code erkannt. Falls der Worker Auth-Tokens erwartet, werden diese **nicht** im Quellcode offengelegt.

---

## 7. Datenschutz & Berechtigungen

| Aspekt | Status |
|--------|--------|
| **Personenbezogene Daten** | Nur Chat-Inhalte (freiwillig eingegeben). Keine automatischen Tracking-Skripte (GA, Matomo, FB Pixel) im Auszug. |
| **Externe Requests** | Fonts (Google Fonts → IP an Google), Worker (Cloudflare Workers Subdomain → IP an Worker-Betreiber). |
| **Speicherung** | `localStorage`/`sessionStorage` nicht im Auszug genutzt. `history` nur im JS-Speicher (verflüchtigt bei Reload). |
| **Einwilligung** | Kein Cookie-Banner / Consent-Layer im Code. Bei DSGVO-Relevanz: Prüfen, ob Worker-Aufruf als „berechtigtes Interesse“ oder „Vertragserfüllung“ gilt. |
| **Inhaltssicherheit** | Markdown-Rendering escaped HTML (`escapeHTML`), erlaubt nur `https?` Links (`safeLink`), `target="_blank" rel="noopener noreferrer"`. XSS-Risiko gering. |

---

## 8. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache | Prüfschritte / Lösung |
|---------|------------------|------------------------|
| **Chat-Button fehlt / Widget öffnet nicht** | JS-Fehler, CSP blockiert Inline-Script, `root.dataset.initialized` schon `true` (Doppelteinbindung). | DevTools Console prüfen → „lamac-ai“ Element vorhanden? CSP `script-src 'unsafe-inline'` erlaubt? |
| **Nachricht wird nicht gesendet** | `busy = true` hängt, Worker nicht erreichbar (CORS, Netzwerk), `fetch` fehlt im gekürzten Code. | Network-Tab: Request an `carescape-ai.oslamuoslamu.workers.dev`? Status 200? CORS-Header? |
| **Antwort erscheint nicht / Typing-Indikator bleibt** | Worker liefert Fehler/leere Antwort, `addBotMessage` nicht aufgerufen, Markdown-Renderer wirft Exception. | Console auf Fehler prüfen (z. B. `renderMarkdown` undefined). |
| **Dark-Mode funktioniert nicht** | Kein JS für `.toggle`, CSS-Klasse `.dark` nicht auf `<html>`/`<body>` gesetzt. | Manuell `<html class="dark">` testen → Farben wechseln? Dann Toggle-Logik nachrüsten. |
| **Layout bricht auf Mobil** | Viewport-Meta vorhanden, Grid `auto-fit` sollte greifen. Chat-Fenster hat Media-Queries ≤480 px. | Chrome DevTools Device Toolbar testen. |
| **Fonts laden nicht** | `fonts.googleapis.com` blockiert (Firewall, Privacy-Tools). | Lokal `Inter` hosten oder `font-display: swap` prüfen (nicht im Code). |

---

## 9. Häufige Fragen (FAQ)

**F: Wie wechsle ich zwischen Light- und Dark-Mode?**  
A: Im Quellcode ist ein `.toggle`-Button in der Navbar vorhanden, aber **keine JavaScript-Logik** dafür im Auszug erkennbar. Vermutlich muss ein Klick-Handler die Klasse `.dark` auf `<html>` oder `<body>` togglen.

**F: Werden meine Chat-Verläufe gespeichert?**  
A: Clientseitig **nicht** (kein `localStorage`). Serverseitig **im Quellcode nicht eindeutig erkennbar** – der Worker könnte Gespräche protokollieren. Datenschutzhinweis des Anbieters beachten.

**F: Kann ich Dateien/Bilder an den Bot senden?**  
A: **Nein.** Das Eingabeformular akzeptiert nur Text (`<input type="text">`, `maxlength="1800"`). Kein Datei-Upload im Code.

**F: Warum antwortet der Bot auf Englisch / nicht auf Deutsch?**  
A: Die Begrüßung ist fest auf Deutsch („Hallo! Wie kann ich dir weiterhelfen?“). Die Antwortsprache hängt vom **Worker-Modell/Prompt** ab – **im Quellcode nicht steuerbar**.

**F: Funktioniert der Chat ohne Internet?**  
A: **Nein.** Der Worker-Endpunkt (`https://carescape-ai.oslamuoslamu.workers.dev/`) muss erreichbar sein. Offline wird `fetch` fehlschlagen.

**F: Ist der Chat DSGVO-konform?**  
A: **Im Quellcode nicht eindeutig erkennbar.** Kein Consent-Banner, keine AVV-Infos, Worker auf Cloudflare-Subdomain. Rechtliche Prüfung durch Betreiber nötig.

**F: Kann ich das Widget farblich anpassen?**  
A: Die Widget-Farben sind im `<style>`-Block **hardcodiert** (z. B. `#007e62`, `#efeae2`). Anpassung nur durch Überschreiben der CSS-Regeln oder Einbindung einer modifizierten Version möglich.

---

## 10. Bekannte Limitationen (aus Quellcode-Sicht)

1. **Unvollständiger Code** – Das Skript endet mitten in `renderMarkdown` (Heading-Level-Array). Funktionen wie `sendMessage`, `fetch`-Logik, Fehlerbehandlung, History-Management fehlen im Auszug.
2. **Toggle-Button ohne Funktion** – Dark-Mode-Umschaltung vorbereitet (CSS), aber nicht verdrahtet.
3. **Keine Server-seitige Validierung** – Client-seitig `maxlength="1800"`, aber Worker könnte längere Texte ablehnen.
4. **Keine i18n** – UI-Texte fest auf Deutsch.
5. **Keine automatischen Tests / Error Boundaries** – JS-Fehler brechen das Widget komplett ab (kein Try-Catch im Auszug).

---

## 11. Empfehlungen für Betrieb & Weiterentwicklung

- **Vervollständigen:** Fehlenden JS-Teil (`sendMessage`, Worker-Kommunikation, Error-Handling) einpflegen.
- **Dark-Mode verbinden:** `document.querySelector('.toggle').addEventListener('click', () => document.documentElement.classList.toggle('dark'))`.
- **CSP härten:** Nonces/Hashes
