<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: HTMLBuilder -->
<!-- source-files: ["HTMLBuilder/index.html"] -->

# Support-Dokumentation: HTMLBuilder

**Website-Name:** HTMLBuilder  
**Vermuteter Zweck:** Ein webbasiertes Tool zum Erstellen, Bearbeiten und Live-Vorschau von HTML-Code. Nutzer können HTML in einem Editor schreiben und das Ergebnis direkt in einer Vorschau (iframe) sehen.  
**Quellcode-Pfad:** `HTMLBuilder/index.html`  
**Datum der Erstellung:** 2025-08-14 (basierend auf heutigem Datum)  
**Hinweis:** Der bereitgestellte Quellcode scheint am Ende abgeschnitten zu sein (`[Datei gekürzt; nur Anfang analysiert]`). Die Dokumentation deckt nur die im Ausschnitt sichtbaren Bereiche ab.

---

## 1. Überblick & Voraussetzungen

### 1.1 Zweck der Anwendung
HTMLBuilder ist eine Single-Page-Application (SPA), die folgende Kernfunktionen bietet:
- **HTML-Editor:** Ein Textbereich (`textarea`) zur Eingabe von HTML-Code.
- **Live-Vorschau:** Ein `iframe`, der den eingegebenen HTML-Code rendert.
- **Theme-Umschaltung:** Wechsel zwischen Light- und Dark-Mode.
- **Integrierter KI-Support (lamacHub):** Ein Chat-Widget für Kundensupport.

### 1.2 Technische Voraussetzungen (Client-Seite)
- **Browser:** Moderner Browser mit Unterstützung für:
  - CSS Custom Properties (Variablen)
  - `backdrop-filter` (für Glas-Effekte der Karten)
  - `iframe` Sandboxing (Standard)
  - ES6 JavaScript (Arrow Functions, `const`/`let`, `classList`, `dataset`)
- **Netzwerk:** 
  - Zugriff auf `fonts.googleapis.com` (Schriftart "Inter").
  - Zugriff auf `carescape-ai.oslamuoslamu.workers.dev` (für den KI-Chat-Worker).
- **Keine Installation nötig:** Die Anwendung läuft rein clientseitig im Browser.

### 1.3 Unterstützte Sprachen
- UI-Texte: **Deutsch** (fest im HTML verankert: `lang="de"`, Button-Labels, Placeholder).
- Code-Eingabe: **HTML** (beliebige Tags, wird im `iframe` interpretiert).

---

## 2. Benutzeroberfläche – Sichtbare Bereiche

Die Seite ist in folgende Hauptbereiche gegliedert (von oben nach unten):

### 2.1 Navigationsleiste (`.navbar`)
- **Links:** Marken-Logo (`<img>` 44x44px) + Text **"HTML Builder"** (fett, 1.2rem).
- **Rechts:** 
  - **Theme-Button** (`.theme-btn`, Beschriftung im Quellcode **nicht sichtbar**, nur Klasse `theme-btn` und Styling als Accent-Button). *Vermutung: Icon-Only Button (z.B. Sonne/Mond).*
  - Keine weiteren Menüpunkte oder Links im Ausschnitt erkennbar.

### 2.2 Hero-Bereich (`.hero`)
- Überschrift: **"HTML Builder"** (Orange/Accent-Farbe, 3rem).
- Untertitel: Kurzbeschreibung (grau/gedämpft), Text im Quellcode **leer** (`<p></p>` oder nicht befüllt). *Im Quellcode nicht eindeutig erkennbar, ob dynamisch befüllt.*

### 2.3 Haupt-Arbeitsbereich (`.grid` – 2 Spalten auf Desktop, 1 Spalte < 1000px)

#### Linke Spalte: Editor-Karte (`.card`)
1.  **Überschrift:** `<h2>` (Text im Quellcode **nicht vorhanden**, nur Styling definiert). *Vermutung: "Editor" oder "HTML-Code".*
2.  **Textarea (`#editor` – ID im Quellcode **nicht explizit als ID vergeben**, nur Selektor `textarea` im CSS):**
    - Vollbreite, min. 250px Höhe, vertikal skalierbar (`resize: vertical`).
    - Monospace-Schrift, 14px, Padding 14px.
    - Transparenter Hintergrund, Rahmen passend zum Theme.
    - **Keine Syntax-Highlighting-Funktionen im Quellcode erkennbar** (reines `<textarea>`-Element).
3.  **Aktionsleiste (`.actions`):**
    - Container für Buttons (`.action-btn`, Accent-Farbe).
    - **Keine Buttons im HTML-Ausschnitt definiert.** *Im Quellcode nicht eindeutig erkennbar, welche Aktionen (z. B. "Laden", "Speichern", "Löschen", "In Vorschau rendern") vorgesehen sind. Eventuell per JS nachgeladen.*

#### Rechte Spalte: Vorschau-Karte (`.card`)
1.  **Überschrift:** `<h2>` (Text im Quellcode **nicht vorhanden**). *Vermutung: "Vorschau" oder "Ergebnis".*
2.  **Ausgabe-Container (`.output`):**
    - **Iframe (`#preview` – ID im HTML **nicht explizit vergeben**, CSS selektiert `.preview`):**
        - 100% Breite, feste Höhe **500px**.
        - Kein Rahmen (`border: none`), abgerundete Ecken (16px).
        - Weißer Hintergrund (hartcodiert `background: white` – **passt nicht automatisch zum Darkmode**).
        - **Sandbox-Attribute oder `srcdoc`-Logik im HTML nicht sichtbar.** *Vermutung: Befüllung erfolgt via JavaScript (`iframe.srcdoc = editorValue`).*

### 2.4 Footer
- Zentrierter Text (gedämpfte Farbe), Margin-top 40px.
- **Inhalt im Quellcode leer** (`<footer></footer>`). *Im Quellcode nicht eindeutig erkennbar.*

### 2.5 KI-Support-Widget (`#lamac-ai`) – **Getrennt vom Haupt-Layout (Fixed Position)**
Ein komplettes, in das HTML eingebettetes Chat-System (lamacHub).
- **Öffnen-Button (`#lamac-ai-open`):** Fest positioniert (rechts unten, 24px Abstand). Kreis (60px), türkis/grün (`#007e62`), Icon: `🤖` (Emoji/Unicode). `aria-label="Kundensupport öffnen"`.
- **Chat-Fenster (`#lamac-ai-window`):** Initial versteckt (`display: none`). Erscheint über dem Öffnen-Button (bottom: 96px). Breite max 390px, Höhe max 570px.
    - **Header:** Titel "lamacHub Kundenservice", Untertitel "KI-gestützter Support". Schließen-Button (×).
    - **Nachrichtenbereich (`#lamac-ai-messages`):** Scrollbar, `aria-live="polite"`. Startet mit Bot-Nachricht: *"Hallo! Wie kann ich dir weiterhelfen?"*.
    - **Eingabeformular (`#lamac-ai-form`):**
        - Input-Feld (`#lamac-ai-input`): Max 1800 Zeichen, Placeholder "Nachricht schreiben …", `autocomplete="off"`, `required`.
        - Senden-Button: Icon `➤` (Unicode Pfeil), `aria-label="Nachricht senden"`.
- **Features (aus JS/CSS ableitbar):**
    - Markdown-Rendering im Bot-Output (Fett, Kursiv, Code, Listen, Tabellen, Links).
    - Syntax-Highlighting für Code-Blöcke im Bot-Output.
    - "Tippt"-Animation (3 Punkte) während Wartezeit auf Worker-Antwort.
    - XSS-Schutz: HTML-Escaping aller Inhalte vor Rendering, Link-Validierung (nur http/https).
    - Kommunikation via `fetch` an `WORKER_URL` (`https://carescape-ai.oslamuoslamu.workers.dev/`).
    - Conversation History wird im Speicher (`history` Array) gehalten und mitgesendet.
    - Responsive: Auf Mobil (<480px) fast Vollbild.
    - Reduzierte Animation bei `prefers-reduced-motion`.

---

## 3. Bedienung – Schritt für Schritt

### 3.1 HTML-Code schreiben & Vorschau anzeigen
> **Hinweis:** Da keine "Render"-Buttons im HTML-Ausschnitt vorhanden sind, wird **vermutet**, dass die Vorschau **automatisch beim Tippen (Live-Update)** oder via **Tastenkombination (z. B. Strg+Enter)** aktualisiert wird. Dies ist im bereitgestellten JS-Ausschnitt **nicht bestätigt**.

1.  Seite öffnen (`index.html` im Browser).
2.  In das große Textfeld (linke Karte) klicken.
3.  Gültigen HTML-Code eingeben (z. B. `<h1>Hallo Welt</h1><p>Mein erster Test</p>`).
4.  **Erwartetes Verhalten (Vermutung):** Der rechte iframe (`preview`) zeigt sofort das gerenderte Ergebnis.
5.  Bei Fehlern im HTML: Browser-rendering-typische Fehleranzeige im Iframe (kein eigenes Error-Reporting im Code sichtbar).

### 3.2 Theme wechseln (Light / Dark Mode)
1.  Button in der Navbar rechts suchen (Accent-farben, wahrscheinlich ein Icon).
2.  Einmal klicken.
3.  **Erwartung:** Gesamte Seite (Hintergrund, Karten, Textfarben, Ränder) wechselt das Farbschema per CSS-Variablen (`[data-theme="dark"]` auf `<html>` oder `<body>`).
    - *Im JS-Ausschnitt ist der Event-Listener für `.theme-btn` **nicht enthalten**. Funktion nur bestätigt, wenn entsprechendes JS existiert (nicht im Ausschnitt).*

### 3.3 KI-Support (lamacHub) nutzen
1.  Unten rechts auf den runden **🤖-Button** ("Kundensupport öffnen") klicken.
2.  Chat-Fenster öffnet sich mit Animation.
3.  In das Eingabefeld ("Nachricht schreiben …") Text eintippen (max. 1800 Zeichen).
4.  Enter drücken oder auf **Pfeil-Button (➤)** klicken.
5.  Eigene Nachricht erscheint rechts (grünlicher Hintergrund).
6.  Drei pulsierende Punkte ("Tippt...") erscheinen links.
7.  Antwort der KI erscheint links (weißer Hintergrund, Markdown formatiert: **Fett**, *Kursiv*, `Code`, Listen, Links, Tabellen).
8.  Bei Bedarf Scrollen (Verlauf bleibt erhalten).
9.  Zum Schließen: **×-Button** im Chat-Header klicken oder erneut auf 🤖-Button (Toggle-Logik im JS: `open/close` via Klasse `.open`).

---

## 4. Eingaben & Ausgaben

| Bereich | Eingabe (User) | Ausgabe (System) | Hinweise |
| :--- | :--- | :--- | :--- |
| **Editor (Textarea)** | HTML-Text (String) | Keine direkte Ausgabe im Editor | Keine Validierung, kein Linting, kein Autocomplete im Code sichtbar. |
| **Vorschau (Iframe)** | Keine direkte Eingabe | Gerendertes HTML/DOM | **Sicherheit:** Iframe läuft im gleichen Origin (wenn `srcdoc` genutzt) oder `about:blank`. Kein `sandbox`-Attribut im HTML sichtbar -> **Vorsicht bei Skripten im Editor-Code.** |
| **Chat-Input** | Text (max 1800 Zeichen) | Bot-Antwort (HTML/Markdown) | Request an externen Worker (`carescape-ai...`). History wird mitgesendet. |
| **Theme-Button** | Klick | Toggle `data-theme` Attribut | Persistenz (LocalStorage) im Ausschnitt **nicht erkennbar**. |

---

## 5. Typische Probleme & Fehlerbehebung

| Problem | Mögliche Ursache (basierend auf Code) | Abhilfe / Workaround |
| :--- | :--- | :--- |
| **Vorschau bleibt leer / zeigt alten Stand** | Kein Auto-Update-Event-Listener im JS-Ausschnitt gefunden. | Seite neu laden (falls Speicherung im Iframe fehlerhaft) oder **Im Quellcode nicht eindeutig erkennbar**, wie Update getriggert wird. Prüfen: Gibt es einen "Run"-Button im echten Code? |
| **Dark Mode: Iframe-Hintergrund blendet weiß** | `.preview` hat hartcodiert `background: white;` im CSS. Keine Variable `var(--card)` oder `transparent`. | **Bestätigtes CSS-Problem.** Workaround: Im Editor `<body style="background: var(--bg);">` nutzen oder Browser-Erweiterung "Dark Reader" nutzen. |
| **Theme-Button reagiert nicht** | JS für `.theme-btn` fehlt im Ausschnitt. | Prüfen, ob separates JS-File geladen wird. Manuell `document.documentElement.dataset.theme = 'dark'` in Konsole setzen zum Test. |
| **Chat öffnet sich nicht / Button fehlt** | `#lamac-ai` Container oder Script blockiert (Adblocker, CSP). | Prüfen: Lädt `carescape-ai.oslamuoslamu.workers.dev`? Console auf JS-Fehler prüfen (`root.dataset.initialized` verhindert Doppel-Init). |
| **Chat sendet nicht / "Tippt..." bleibt stehen** | Worker-URL down, CORS-Fehler, Netzwerkblockade. | Netzwerk-Tab prüfen (POST an Worker-URL). Offline: Chat funktioniert **nicht** (reiner Client-Worker-Architektur). |
| **Markdown im Chat wird nicht gerendert** | `renderMarkdown` Funktion fehlerhaft oder Eingabe zu komplex. | Einfache Texte testen. Code-Blöcke (` ``` `) nutzen. |
| **Schriftart "Inter" lädt nicht** | `fonts.googleapis.com` blockiert / Offline. | Fallback: `sans-serif` (definiert in `font-family: Inter, sans-serif`). Layout bricht nicht. |
| **Mobile: Editor & Vorschau übereinander, aber Vorschau fest 500px** | `.preview` hat `height: 500px` fest. Kein `max-height: 50vh` o.ä. | Scrollen im Iframe nötig. Auf kleinen Bildschirmen viel Platzverlust. |

---

## 6. Datenschutz, Berechtigungen & Sicherheit

### 6.1 Clientseitige Verarbeitung
- **HTML-Editor & Vorschau:** Laufen **vollständig im Browser**. Keine Daten werden an den Betreiber der HTMLBuilder-Seite gesendet (sofern kein eigenes Backend im fehlenden JS-Teil existiert).
- **Lokale Speicherung:** `localStorage` / `sessionStorage` Zugriff im Ausschnitt **nicht erkennbar** (außer `root.dataset.initialized` für Chat).

### 6.2 Externe Verbindungen (Third Party)
1.  **Google Fonts (`fonts.googleapis.com`):**
    - Lädt Schriftart "Inter" beim Seitenaufruf.
    - Übermittelt IP-Adresse & User-Agent an Google. **Kein `local` Hosting der Fonts im Code sichtbar.**
2.  **lamacHub KI-Worker (`https://carescape-ai.oslamuoslamu.workers.dev/`):**
    - **Wird nur bei Chat-Nutz
