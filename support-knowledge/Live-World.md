<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Live-World -->
<!-- source-files: ["Live-World/index.html"] -->

# Support-Dokumentation: Live Welt

**Website-Name:** Live Welt  
**Vermuteter Zweck:** Dashboard-ähnliche Startseite mit KI-gestütztem Kundensupport-Widget (lamacHub)  
**Quellcode-Pfad:** `Live-World/index.html`  
**Datum der Erstellung:** 2025-08-17  

---

## 1. Überblick

**Live Welt** ist eine einseitige Webanwendung (Single Page), die ein responsives Dashboard-Layout mit Karten (Cards) darstellt. Zusätzlich ist ein **KI-gestütztes Support-Widget (lamacHub Kundenservice)** fest in die Seite eingebettet. Die Seite unterstützt Light- und Dark-Mode (über CSS-Variablen) und nutzt die Schriftart *Inter* von Google Fonts.

> **Hinweis:** Der übermittelte Quellcode ist gekürzt (`[Datei gekürzt; nur Anfang analysiert]`). Die Dokumentation beschreibt nur die im Codeausschnitt tatsächlich erkennbaren Funktionen.

---

## 2. Voraussetzungen (Client-Seite)

| Anforderung | Details |
|-------------|---------|
| **Browser** | Moderner Browser mit Unterstützung für CSS Custom Properties, `fetch` API, `URL` API, `localStorage` (nicht explizit genutzt, aber Standard). |
| **Netzwerk** | Zugriff auf `https://fonts.googleapis.com` (Schriftart Inter) und `https://carescape-ai.oslamuoslamu.workers.dev/` (KI-Worker-Endpunkt). |
| **JavaScript** | Muss aktiviert sein (Widget-Logik, Markdown-Rendering, Chat-Kommunikation). |
| **Viewport** | Responsive ab 320 px Breite (Mobile First). |

---

## 3. Sichtbare Bereiche & UI-Elemente

### 3.1 Navigationsleiste (`.navbar`)
- **Position:** Oben, `position: sticky; top: 0`.
- **Inhalt:**
  - **Logo (`.logo`):** 32×32 px Bild (`<img>`) + Text „Live Welt“ (fett, schwarz im Light-Mode).
  - **Toggle-Button (`.toggle`):** Beschriftung im Code nicht sichtbar (nur `cursor:pointer`). **Vermutung:** Umschalter Light/Dark-Mode – **Im Quellcode nicht eindeutig erkennbar**, da kein `onclick`-Handler und keine `aria-label`-Logik im Ausschnitt vorhanden.

### 3.2 Dashboard-Grid (`.dashboard`)
- **Layout:** CSS Grid, `repeat(auto-fit, minmax(220px, 1fr))`, Gap 22 px, max. 1100 px Breite, zentriert.
- **Karten (`.card`):** Weiße Container mit Rand, abgerundeten Ecken (18 px), Padding 22 px, zentriertem Text.
  - **Hover-Effekt:** `transform: translateY(-3px)`.
  - **Inhalt pro Karte:**
    - **Label (`.label`):** Grauer, kleiner Text (14 px, `--muted`).
    - **Zahl (`.number`):** Große, orange Zahl (1.6 rem, `--accent` #ff7a00), fett.
- **Datenquelle:** **Im Quellcode nicht eindeutig erkennbar** – im Ausschnitt sind keine `<div class="card">`-Instanzen im HTML-Body vorhanden (vermutlich dynamisch per JS nachgeladen oder im gekürzten Teil).

### 3.3 lamacHub KI-Kundenservice (`#lamac-ai`)
Festes Overlay-Widget, **unabhängig vom Dashboard-Inhalt**.

| Element | Beschreibung |
|---------|--------------|
| **Öffnen-Button (`#lamac-ai-open`)** | Fester runder Button (60×60 px) rechts unten (24 px Abstand). Zeigt „💬“. `aria-label="Kundensupport öffnen"`. |
| **Chat-Fenster (`#lamac-ai-window`)** | Erscheint über dem Button (bottom: 96 px). Breite: min(390 px, 100vw−32 px). Höhe: min(570 px, 100dvh−125 px). `display: none` standardmäßig; Klasse `.open` → `display: flex` + Animation. |
| **Header** | Dunkler Hintergrund (#11211d), Titel „lamacHub Kundenservice“, Untertitel „KI-gestützter Support“, Schließen-Button (×). |
| **Nachrichtenbereich (`#lamac-ai-messages`)** | Scrollbar, `aria-live="polite"`. Zeigt Bot- (`.lamac-bot`) und User-Nachrichten (`.lamac-user`). |
| **Eingabeformular (`#lamac-ai-form`)** | Textfeld (`#lamac-ai-input`, max 1800 Zeichen, `required`), Sende-Button (➤). Enter = Senden. |
| **Typing-Indikator** | Drei animierte Punkte (`.lamac-typing-dot`), wird während Wartezeit auf Antwort eingeblendet. |

---

## 4. Bedienung – Schritt für Schritt

### 4.1 Dashboard betrachten
1. Seite aufrufen → Navigationsleiste oben, Dashboard-Grid darunter.
2. Karten enthalten Labels und Zahlen (sofern per JS befüllt).
3. Bei Bedarf **Toggle-Button** in der Navbar klicken → **Funktion im Quellcode nicht eindeutig erkennbar** (vermutlich Theme-Wechsel).

### 4.2 KI-Kundensupport nutzen
1. **Chat öffnen:** Klick auf den runden **💬-Button** rechts unten.
2. **Erste Nachricht:** Im Chat-Fenster erscheint automatisch die Bot-Begrüßung: *„Hallo! Wie kann ich dir weiterhelfen?“*
3. **Eigene Nachricht senden:**
   - Text in das Feld „Nachricht schreiben …“ eingeben (max. 1800 Zeichen).
   - **Enter** drücken oder **➤-Button** klicken.
   - Nachricht erscheint rechtsbündig grünlich (`.lamac-user`).
4. **Antwort warten:** Typing-Animation (drei Punkte) wird angezeigt.
5. **Antwort lesen:** Bot-Antwort erscheint linksbündig weiß mit Markdown-Formatierung (Fett, Kursiv, Code, Listen, Tabellen, Links).
6. **Chat schließen:** Klick auf **×** im Header des Chat-Fensters.
7. **Erneut öffnen:** Chat-Verlauf bleibt erhalten (kein Reload im Code sichtbar).

---

## 5. Eingaben & Ausgaben

| Bereich | Eingabe | Ausgabe / Reaktion |
|---------|---------|---------------------|
| **Dashboard** | Keine direkte Benutzereingabe im Code sichtbar. | Anzeige von Karten mit Label + Zahl. |
| **Chat-Input** | Freitext (max 1800 Zeichen). | User-Blase wird sofort gerendert; Request an Worker-URL gesendet (siehe unten). |
| **Worker-Antwort** | JSON/Stream vom Endpunkt `https://carescape-ai.oslamuoslamu.workers.dev/`. | Markdown wird sicher in HTML umgewandelt (XSS-Schutz via `escapeHTML`), als Bot-Blase gerendert. |
| **Links in Bot-Antwort** | `https://…` oder `[Text](https://…)` | Werden zu klickbaren `<a target="_blank" rel="noopener noreferrer">` umgewandelt. Nur HTTP(S) erlaubt. |

---

## 6. Technische Details (aus Quellcode ableitbar)

### 6.1 Theme-System
- CSS Custom Properties (`:root` + `.dark` Klasse).
- Umschaltung vermutlich via `document.documentElement.classList.toggle('dark')` – **Im Quellcode nicht eindeutig erkennbar** (kein JS-Handler im Ausschnitt).

### 6.2 Chat-Widget-Logik (IIFE in `<script>`)
- **Einmalige Initialisierung:** `root.dataset.initialized = "true"` verhindert doppelte Instanzen.
- **State:** `history = []` (Array), `busy = false` (Sperre während Request).
- **Markdown-Renderer (`renderMarkdown`):** Unterstützt
  - Überschriften `#` bis `####`
  - Fett `**`, Kursiv `*`, `___`, `__`, Durchgestrichen `~~`
  - Inline-Code `` `code` ``
  - Codeblöcke ``` ``` ```
  - Listen (`-`, `*`, `1.`)
  - Blockquotes `>`
  - Tabellen (GitHub-Flavored Markdown mit `|` und Trennzeile `---`)
  - Automatisches Verlinken von URLs
- **Sicherheit:** `escapeHTML` vor Rendering, `safeLink` erlaubt nur `http:` / `https:`.

### 6.3 Netzwerk-Endpunkt
```js
const WORKER_URL = "https://carescape-ai.oslamuoslamu.workers.dev/";
```
- **Im Quellcode nicht eindeutig erkennbar:** Request-Format (POST Body, Header), Response-Format (Streaming? JSON?), Authentifizierung, Fehlerbehandlung. Der Ausschnitt bricht vor dem `fetch`-Aufruf ab.

### 6.4 Barrierefreiheit
- `aria-label` an Buttons, `aria-live="polite"` am Nachrichtencontainer, `role="status"` beim Typing-Indikator, semantisches HTML (`<header>`, `<form>`, `<section>`), Fokus-Styles am Input.

### 6.5 Responsive / Reduced Motion
- Media Queries für ≤480 px (Breite/Höhe anpassen, Border-Radius verkleinern).
- `@media (prefers-reduced-motion: reduce)` deaktiviert Animationen.

---

## 7. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache (basierend auf Code) | Prüfschritte / Abhilfe |
|---------|----------------------------------------|------------------------|
| **Chat-Button fehlt / Widget öffnet nicht** | JS-Fehler vor Initialisierung, `#lamac-ai` nicht im DOM, CSP blockt Inline-Script/Styles. | DevTools Console prüfen; CSP `script-src 'self' 'unsafe-inline'` prüfen; Netzwerk-Tab: Worker-URL erreichbar? |
| **Keine Bot-Antwort / Typing-Indikator bleibt ewig** | `fetch` an `WORKER_URL` schlägt fehl (CORS, 4xx/5xx, Timeout), `busy` bleibt `true`. | Netzwerk-Tab → Request an Worker-URL prüfen; Server-Logs; `busy`-Flag im Code zurücksetzen (Reload). |
| **Markdown wird nicht gerendert (roher Text)** | `renderMarkdown` wirft Exception (z. B. bei unerwartetem Input). | Console auf Fehler prüfen; Bot-Antwort auf ungültige Zeichen testen. |
| **Links nicht klickbar / öffnen im selben Tab** | `safeLink` lehnt URL ab (kein http/https) oder `target="_blank"` fehlt. | Prüfen, ob Link `https://` hat; Code prüft Protokoll strikt. |
| **Dashboard-Karten leer** | Kein Daten-Fetch im sichtbaren Code; Daten werden evtl. nachgeladen (gekürzter Teil). | Netzwerk-Tab auf weitere Requests prüfen; nach JS-Dateien suchen, die Cards befüllen. |
| **Dark-Mode funktioniert nicht** | `.dark` Klasse wird nie gesetzt (Toggle-Button ohne Handler). | Manuell im DevTools `<html class="dark">` setzen → prüfen, ob Farben umschalten. |
| **Schriftart „Inter“ lädt nicht** | Blockierte Google Fonts (Firewall, Datenschutz-Einstellung). | Lokaler Fallback fehlt im CSS (`font-family: Inter, sans-serif` → nur `sans-serif` als Fallback). |

---

## 8. Datenschutz & Berechtigungen

| Aspekt | Status im Quellcode |
|--------|---------------------|
| **Externe Requests** | Google Fonts (`fonts.googleapis.com`), KI-Worker (`carescape-ai.oslamuoslamu.workers.dev`). |
| **Cookies / LocalStorage** | Nicht im Ausschnitt verwendet. |
| **Persönliche Daten** | Chat-Inhalt wird an Worker-URL gesendet. **Keine Anonymisierung/Pseudonymisierung im Client-Code sichtbar.** |
| **Berechtigungen** | Keine Camera, Mic, Location, Notifications im Code. |
| **CSP-Hinweis** | Inline `<style>` und `<script>` erfordern `'unsafe-inline'` oder Nonces/Hashes. |
| **Sicherheits-Hinweis** | Worker-URL ist **Hardcoded** im Client-Code. Kein API-Key im Ausschnitt sichtbar (falls doch: **aus Sicherheitsgründen ausgelassen**). |

---

## 9. FAQ

**F: Wie wechsle ich zwischen Light- und Dark-Mode?**  
A: Im Quellcode ist ein `.toggle`-Button in der Navbar vorhanden, aber **kein Event-Handler** im Ausschnitt sichtbar. Funktion **nicht eindeutig erkennbar**.

**F: Werden Chat-Verläufe gespeichert?**  
A: Client-seitig **nicht** (kein `localStorage`). Server-seitig **im Quellcode nicht erkennbar** (Worker-Logik nicht einsehbar).

**F: Kann ich Dateien/Bilder in den Chat hochladen?**  
A: **Nein.** Das Eingabeformular enthält nur `<input type="text">` (kein `type="file"`, kein `accept`-Attribut).

**F: Warum funktioniert der Chat auf `http://localhost` nicht?**  
A: Der Worker-Endpunkt ist `https://…`. Bei Mixed Content (HTTP-Seite → HTTPS-Worker) blockieren Browser evtl. den Request. Zudem kann CORS vom Worker für `localhost` nicht freigegeben sein.

**F: Unterstützt der Bot Code-Blöcke mit Syntax-Highlighting?**  
A: Der Renderer stellt Codeblöcke als `<pre><code>` dar, aber **kein Syntax-Highlighting** (keine Bibliothek wie Prism/Highlight.js eingebunden).

**F: Wie viele Karten zeigt das Dashboard?**  
A: **Im Quellcode nicht eindeutig erkennbar** – keine statischen Cards im HTML, vermutlich dynamisch gerendert (Code fehlt im Ausschnitt).

**F: Ist die Seite barrierefrei (WCAG)?**  
A: Gute Basis (ARIA-Labels, Live-Region, Semantik, Fokus-Styles, Reduced Motion). Fehlend: Kontrast-Prüfung der Custom Properties, Tastaturnavigation für Toggle-Button (kein `tabindex`/`role` sichtbar), Skip-Link.

---

## 10. Bekannte Limitationen (Code-Ausschnitt)

1. **Dashboard-Inhalt fehlt** – Karten werden nicht im HTML definiert.
2. **Theme-Toggle ohne Funktion** – Kein JS-Handler für `.toggle`.
3. **Chat-Request-Logik unvollständig** – `fetch`-Aufruf und Response-Handling nicht im Ausschnitt.
4. **Keine Fehler-UI** – Kein Toast/Alert bei Netzwerkfehlern im Code sichtbar.
5. **Kein Reset/Neustart-Button** für Chat (außer Seiten-Reload).

---

*Ende der Dokumentation
