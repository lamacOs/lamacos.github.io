<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: HTMLBuilder -->
<!-- source-files: ["HTMLBuilder/index.html"] -->

# Support-Dokumentation: HTMLBuilder

**Website-Name:** HTML Builder  
**Vermuteter Zweck:** Ein webbasiertes Tool zum Erstellen, Bearbeiten und Live-Vorschau von HTML-Code. Nutzer können HTML in einem Editor schreiben und das Ergebnis sofort in einer Vorschau sehen.  
**Quellcode-Pfad:** `HTMLBuilder/index.html`  
**Datum der Erstellung:** 2025-08-07 (basierend auf heutigem Datum)

---

## 1. Überblick & Voraussetzungen

### 1.1 Zweck der Website
HTMLBuilder ist eine Single-Page-Application (SPA), die einen **HTML-Editor mit Live-Vorschau** bereitstellt. Sie ermöglicht das Schreiben von HTML-Code in einem Textbereich (`textarea`) und zeigt das gerenderte Ergebnis direkt in einem `iframe` an. Zusätzlich ist ein **KI-gestützter Support-Chat (lamacHub)** fest in die Seite eingebettet.

### 1.2 Technische Voraussetzungen (Client-Seite)
- **Moderner Browser** mit Unterstützung für:
  - CSS Custom Properties (Variablen)
  - `backdrop-filter` (für Glas-Effekte der Karten)
  - `iframe`-Sandboxing (Vorschau)
  - ES6 JavaScript (Pfeilfunktionen, `const`/`let`, `classList`, `fetch` – für den Chat)
- **Internetverbindung** erforderlich für:
  - Laden der Schriftart *Inter* (Google Fonts)
  - Laden des Favicon/Brand-Logos (externes SVG)
  - Funktion des KI-Support-Chats (Worker-Endpunkt `https://carescape-ai.oslamuoslamu.workers.dev/`)
- **Keine Server-seitige Installation** nötig; die Datei `index.html` kann lokal geöffnet werden (Einschränkung: Der Chat-Worker blockiert ggf. `file://`-Anfragen wegen CORS).

### 1.3 Unterstützte Sprachen
- UI-Texte: **Deutsch** (fest im Code, z. B. „Kundensupport öffnen“, „Nachricht schreiben …“).
- Code-Editor: **HTML** (keine Syntax-Highlighting-Bibliothek erkannt – reines `textarea`-Element).

---

## 2. Sichtbare Bereiche & Benutzeroberfläche

Die Seite besteht aus folgenden Hauptbereichen (von oben nach unten):

| Bereich | Beschreibung | Wichtige Elemente (Selektoren/IDs) |
| :--- | :--- | :--- |
| **Navbar** | Obere Leiste mit Branding, Theme-Umschalter und Primär-Aktion. | `.navbar`, `.brand img`, `.brand span`, `.theme-btn`, `.action-btn` |
| **Hero** | Überschrift und Kurzbeschreibung. | `.hero h1`, `.hero p` |
| **Editor-Bereich (Links)** | Karte mit HTML-Textarea und Aktionsbuttons. | `.grid > .card:first-child`, `textarea`, `.actions` |
| **Vorschau-Bereich (Rechts)** | Karte mit `iframe` zur Live-Darstellung. | `.grid > .card:last-child`, `#output`, `.preview` |
| **Footer** | Copyright/Hinweistext. | `footer` |
| **KI-Support-Chat (Overlay)** | Fester Button rechts unten + aufklappbares Chat-Fenster. | `#lamac-ai`, `#lamac-ai-open`, `#lamac-ai-window` |

### 2.1 Navbar-Details
- **Brand-Logo:** Externes SVG (`https://raw.githubusercontent.com/lamac04/lamacHub/main/lamacHub.svg`, 44×44 px).
- **Titel:** „HTML Builder“ (Font-Weight 800).
- **Theme-Button (`.theme-btn`):** Text „🌙“ / „☀️“ (Wechsel Light/Dark Mode). Speichert Präferenz in `localStorage` (`theme`).
- **Action-Button (`.action-btn`):** Text „Seite als HTML speichern“. Lädt den **gesamten aktuellen `document.documentElement.outerHTML`** als Datei `html-builder-export.html` herunter.

### 2.2 Editor-Karte (Links)
- **Überschrift:** „HTML Editor“.
- **Textarea:** `min-height: 250px`, `resize: vertical`, Monospace-Schrift, keine Syntax-Highlighting.
- **Aktionsleiste (`.actions`):** Drei Buttons (reine `button`-Elemente, **keine `type`-Attribute** → Standard `type="submit"`, aber **kein `<form>`-Elternteil** → verhalten sich wie `type="button"`):
  1. **„Vorschau aktualisieren“** → rendert Textarea-Inhalt in den Iframe.
  2. **„Beispiel laden“** → fügt ein vordefiniertes HTML-Beispiel (Bootstrap-CDN, Karten-Layout) in die Textarea ein.
  3. **„Leeren“** → leert die Textarea komplett.

### 2.3 Vorschau-Karte (Rechts)
- **Überschrift:** „Live Vorschau“.
- **Platzhalter (`#output`):** `div` mit `min-height: 250px`, initialer Text: „Klicke auf 'Vorschau aktualisieren', um dein HTML zu sehen“.
- **Iframe (`.preview`):** `width: 100%`, `height: 500px`, `border: none`, `border-radius: 16px`, `background: white`. **Kein `sandbox`-Attribut** erkannt → volle Skript-Ausführung im Iframe möglich (Sicherheitshinweis siehe Abschnitt 6).

### 2.4 KI-Support-Chat (lamacHub)
- **Öffnen-Button (`#lamac-ai-open`):** Fixiert rechts unten (60×60 px, grün `#007e62`), Icon `💬` (Unicode). `aria-label="Kundensupport öffnen"`.
- **Fenster (`#lamac-ai-window`):** 390 px breit, max 570 px hoch, fixiert über dem Button. Header dunkel (`#11211d`), Titel „lamacHub Kundenservice“, Untertitel „KI-gestützter Support“.
- **Nachrichtenbereich (`#lamac-ai-messages`):** Scrollbar, Bot-Nachrichten links (weiß, grauer Rand), User-Nachrichten rechts (grünlich `#d8f8e8`).
- **Eingabeformular (`#lamac-ai-form`):** Input `maxlength="1800"`, Placeholder „Nachricht schreiben …“, Sende-Button (Pfeil-Icon `➤`).
- **Markdown-Rendering:** Bot-Antworten unterstützen **Markdown** (Überschriften, Listen, Tabellen, Code-Blöcke, Links, Fett/Kursiv/Strikethrough). HTML wird escaped.
- **Backend:** `WORKER_URL = "https://carescape-ai.oslamuoslamu.workers.dev/"` (POST, JSON `{ messages: [...] }`, Streaming via `ReadableStream`).
- **Verlauf:** Wird im Speicher (`history`-Array) gehalten, **nicht** in `localStorage` persistiert (Seitenreload = Verlust).

---

## 3. Bedienung Schritt für Schritt

### 3.1 HTML schreiben & Vorschau sehen
1. Öffne `index.html` im Browser.
2. Schreibe HTML-Code in das **linke Textfeld** („HTML Editor“).
   - *Hinweis:* Kein Autovervollständigen, kein Highlighting.
3. Klicke auf **„Vorschau aktualisieren“** (Button links oben in der Aktionsleiste).
4. Das Ergebnis erscheint im **rechten Iframe** („Live Vorschau“).
5. Wiederhole Schritte 2–3 nach Änderungen.

### 3.2 Beispiel laden (Starter-Template)
1. Klicke auf **„Beispiel laden“**.
2. Die Textarea wird mit einem Bootstrap 5-Beispiel (Hero + 3 Karten) gefüllt.
3. Klicke **„Vorschau aktualisieren“**, um das Layout zu sehen.

### 3.3 Editor leeren
1. Klicke auf **„Leeren“**.
2. Textarea wird sofort geleert (keine Rückfrage).

### 3.4 Dark / Light Mode wechseln
1. Klicke auf den Button **„🌙“** (oder „☀️“ im Dark Mode) in der Navbar rechts.
3. Das Theme wechselt sofort; Wahl wird in `localStorage` gespeichert und beim nächsten Laden wiederhergestellt.

### 3.5 Aktuelle Seite als HTML-Datei speichern
1. Klicke auf **„Seite als HTML speichern“** in der Navbar.
2. Browser lädt `html-builder-export.html` herunter (enthält den **kompletten aktuellen DOM**, inkl. Chat-Widget, Styles, Skripte).

### 3.6 KI-Support-Chat nutzen
1. Klicke auf den **grünen Chat-Button (💬)** rechts unten.
2. Das Fenster öffnet sich mit Begrüßung: „Hallo! Wie kann ich dir weiterhelfen?“.
3. Tippe deine Nachricht (max. 1800 Zeichen) in das Eingabefeld.
4. Drücke **Enter** oder klicke **Sende-Button (➤)**.
5. Warte auf Antwort (animierte „Tippt…“-Anzeige).
6. Schließe Fenster über **×-Button** oben rechts im Chat-Header.

---

## 4. Eingaben & Ausgaben

| Aktion | Eingabe | Ausgabe / Wirkung |
| :--- | :--- | :--- |
| HTML schreiben | Freitext in `textarea` | Keine direkte Ausgabe; nur bei „Vorschau aktualisieren“ |
| Vorschau aktualisieren | Textarea-Inhalt (String) | `iframe.srcdoc` wird gesetzt → gerendertes HTML im Iframe |
| Beispiel laden | Keine (Klick) | Textarea wird mit festem HTML-String (Bootstrap-Beispiel) befüllt |
| Leeren | Keine (Klick) | Textarea `value = ""` |
| Theme toggeln | Keine (Klick) | `document.documentElement.dataset.theme` = `"dark"` / `"light"`, `localStorage.setItem('theme', ...)` |
| Seite speichern | Keine (Klick) | Download `html-builder-export.html` (Blob: `document.documentElement.outerHTML`) |
| Chat senden | Text (≤ 1800 Zeichen) | POST an Worker → Streaming-Antwort → Markdown → HTML im Chat-Fenster |
| Chat schließen | Klick auf × | `chatWindow.classList.remove('open')` (Display: none) |

---

## 5. Typische Probleme & Fehlerbehebung

| Problem | Mögliche Ursache | Lösung / Workaround |
| :--- | :--- | :--- |
| **Vorschau bleibt leer / zeigt alten Stand** | „Vorschau aktualisieren“ nicht geklickt | Button **„Vorschau aktualisieren“** drücken (kein Auto-Refresh). |
| **Skripte/Styles im Iframe funktionieren nicht** | Iframe hat **kein `sandbox`-Attribut**, aber `srcdoc` unterliegt Same-Origin-Policy; externe Ressourcen (CDN) benötigen Internet. | Prüfen: Internetverbindung? CDN-Links (Bootstrap) erreichbar? Browser-Konsole (F12) auf CSP-/Netzwerk-Fehler prüfen. |
| **Dark Mode wird nicht gespeichert** | `localStorage` deaktiviert / Privater Modus / Speicher voll | Browser-Einstellungen prüfen; manuell Theme-Button nutzen. |
| **„Seite als HTML speichern“ lädt riesige Datei / Chat mit herunter** | Exportiert **gesamten DOM** (`outerHTML`), inkl. Chat-Widget & Inline-Styles/Skripts. | Erwartetes Verhalten. Für reinen Editor-Code: Textarea-Inhalt manuell kopieren. |
| **Chat öffnet nicht / keine Antwort** | Worker-Endpunkt blockiert (CORS, Firewall, Adblocker), `file://`-Protokoll, Offline. | Seite über HTTP(S) servieren (lokaler Server: `npx serve`, `python -m http.server`). Adblocker für `carescape-ai.oslamuoslamu.workers.dev` deaktivieren. |
| **Chat-Verlauf nach Reload weg** | Verlauf nur im RAM (`history`-Array), **nicht** in `localStorage`. | Nicht persistiert – gewollt oder Limitierung. |
| **Enter im Chat sendet nicht / lädt Seite neu** | Buttons haben **kein `type="button"`**, aber **kein `<form>`-Elternteil** im Haupt-UI → kein Submit. Im Chat-Formular: `form.addEventListener('submit', ...)` mit `e.preventDefault()` → Enter sendet korrekt. | Im Chat: Enter funktioniert. Im Editor: Buttons verhalten sich wie Buttons. |
| **Schriftart „Inter“ lädt nicht** | Google Fonts blockiert / Offline | Fallback: `sans-serif` (CSS `font-family: Inter, sans-serif`). Lokal hosten für Offline-Nutzung. |

---

## 6. Datenschutz, Berechtigungen & Sicherheit

### 6.1 Datenverarbeitung
| Komponente | Daten | Speicherung | Weitergabe |
| :--- | :--- | :--- | :--- |
| **Theme-Präferenz** | `"dark"` / `"light"` | `localStorage` (lokal, Browser) | Nein |
| **Editor-Inhalt** | HTML-Code (Textarea) | Nur im RAM (DOM) | Nein (außer bei „Seite speichern“ → Download) |
| **Chat-Verlauf** | User/Bot-Nachrichten | Nur im RAM (`history`-Array) | **Ja** → an `https://carescape-ai.oslamuoslamu.workers.dev/` (POST, JSON) |
| **Chat-Eingabe** | Text (≤ 1800 Zeichen) | RAM | **Ja** → Worker (siehe oben) |

### 6.2 Externe Verbindungen (beim Laden der Seite)
1. **Google Fonts:** `https://fonts.googleapis.com/css2?family=Inter...` (CSS) → `https://fonts.gstatic.com` (Font-Dateien).
2. **Brand-Logo:** `https://raw.githubusercontent.com/lamac04/lamacHub/main/lamacHub.svg`.
3. **Chat-Worker (bei Nutzung):** `https://carescape-ai.oslamuoslamu.workers.dev/` (POST, Streaming).

### 6.3 Sicherheitshinweise
- **Iframe ohne Sandbox:** Der Vorschau-Iframe nutzt `srcdoc` **ohne `sandbox`-Attribut**. **Beliebiges JavaScript im Editor-Code wird im Iframe ausgeführt** (Same-Origin wie Hauptseite). → **Nicht** für unsicheren Fremdcode nutzen.
- **Content Security Policy (CSP):** Im Quellcode **kein `<meta http-equiv="Content-Security-Policy">`** erkannt. Externe Skripte/Styles (Bootstrap im Beispiel) laden ohne Integrity-Hashes.
- **Chat-Worker-URL:** Hardcoded im Code. Kein
