<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: FlohmarktScanner -->
<!-- source-files: ["FlohmarktScanner/index.html"] -->

# Support-Dokumentation: FlohmarktScanner

**Website-Name:** FlohmarktScanner  
**Vermuteter Zweck:** Basierend auf dem Repository-Namen und dem eingebetteten Widget handelt es sich um eine Website zum Scannen/Analysieren von Flohmarkt-Artikeln. Die eigentliche Fachlogik (Scanner, Preise, Erkennung) ist **im bereitgestellten Quellcode nicht enthalten**. Der vorliegende Code stellt ausschließlich den **lamacHub KI-Kundenservice-Chatbot** (Widget) dar, der auf der Seite eingebunden ist.  
**Quellcode-Pfad:** `FlohmarktScanner/index.html`  
**Datum der Erstellung:** 2025-08-07 (basierend auf heutigem Datum)

---

## 1. Überblick & Zweck der dokumentierten Komponente

Diese Dokumentation beschreibt **ausschließlich das Chat-Widget „lamacHub Kundenservice“**, das in der `index.html` des Projekts `FlohmarktScanner` eingebettet ist.

*   **Funktion:** Ein KI-gestützter Support-Chat, der Besuchern der Website bei Fragen hilft.
*   **Technologie:** Reines Frontend (HTML, CSS, Vanilla JavaScript), kommuniziert mit einem Cloudflare Worker Backend (`carescape-ai.oslamuoslamu.workers.dev`).
*   **Keine Hauptfunktionen:** Der Code enthält **keine** Logik für Flohmarkt-Scanning, Bilderkennung, Preisdatenbanken, Benutzerkonten oder Zahlungsabwicklungen.

---

## 2. Voraussetzungen für die Nutzung (Client-Seite)

| Voraussetzung | Status | Details |
| :--- | :--- | :--- |
| **JavaScript** | **Erforderlich** | Das Widget ist eine Single-Page-Application im Widget-Format. Ohne JS ist es nicht sichtbar/benutzbar. |
| **Netzwerkzugriff** | **Erforderlich** | Muss `https://carescape-ai.oslamuoslamu.workers.dev/` erreichen können (CORS, Firewall). |
| **Browser** | Modern | Nutzt `fetch`, `URL` API, `dataset`, `arrow functions`, `const/let`, CSS Custom Properties (Variablen), `prefers-reduced-motion`. IE wird nicht unterstützt. |
| **Viewport** | Responsive | Funktioniert ab ca. 320px Breite (Mobile First). |
| **Cookies/Storage** | Nicht genutzt | Der Chat-Verlauf (`history`) wird nur im RAM gehalten (Seitenreload = Verlust). Kein `localStorage`/`sessionStorage` im Code sichtbar. |

---

## 3. Sichtbare Bereiche & Bedienelemente (UI)

Das Widget besteht aus zwei Hauptzuständen: **Geschlossen (Button)** und **Geöffnet (Fenster)**.

### 3.1. Geschlossener Zustand: Der Öffnen-Button
*   **Position:** Fest positioniert (`fixed`), rechts unten (24px Abstand, auf Mobile 16px).
*   **Aussehen:** Kreis (60px), türkis/grün (`#007e62`), weißes Icon (UTF-8: `💬` / Code `\u55357 \u56492`).
*   **Beschriftung (Screenreader):** `aria-label="Kundensupport öffnen"`.
*   **Interaktion:** Klick/Touch öffnet das Fenster. Hover-Effekt: Skalierung 1.06x, dunklerer Hintergrund.

### 3.2. Geöffneter Zustand: Das Chat-Fenster (`#lamac-ai-window`)
*   **Position:** Über dem Button (bottom: 96px / Mobile 86px), rechtsbündig.
*   **Größe:** Max 390px breit, max 570px hoch (Mobile: fast Vollbild, max 620px hoch). Mindesthöhe 300px.
*   **Design:** Abgerundete Ecken (18px/15px), heller Sandton (`#efeae2`), Schatten, Einblend-Animation (0.22s).
*   **Zustands-Klasse:** `.open` (steuert `display: flex` + Animation).

#### 3.2.1. Header
*   **Titel:** `lamacHub Kundenservice` (`<strong>`).
*   **Untertitel:** `KI-gestützter Support` (`<small>`).
*   **Schließen-Button (`#lamac-ai-close`):** Kreis (34px), `×` Zeichen, Hover-Hintergrund leicht weiß-transparent. `aria-label="Chat schließen"`.

#### 3.2.2. Nachrichtenbereich (`#lamac-ai-messages`)
*   **Layout:** Flex-Spalte, Scrollbar bei Überlauf, `gap: 9px`, Padding 15px.
*   **Barrierefreiheit:** `aria-live="polite"`, `aria-relevant="additions"`.
*   **Nachrichten-Typen:**
    *   **Bot (`lamac-bot`):** Links ausgerichtet, weißer Hintergrund, grauer Rand, oben-links abgerundet (4px). Unterstützt **Markdown-Rendering** (siehe 4.2).
    *   **User (`lamac-user`):** Rechts ausgerichtet, hellgrüner Hintergrund (`#d8f8e8`), grüner Rand, oben-rechts abgerundet (4px). **Reiner Text** (kein Markdown), `white-space: pre-wrap` (Zeilenumbrüche bleiben erhalten).
    *   **Typing-Indikator (`lamac-typing`):** Drei pulsierende Punkte (`lamac-typing-dot`), `role="status"`, `aria-label="Kundenservice antwortet"`.

#### 3.2.3. Eingabeformular (`#lamac-ai-form`)
*   **Eingabefeld (`#lamac-ai-input`):**
    *   `placeholder="Nachricht schreiben …"`
    *   `maxlength="1800"` Zeichen.
    *   `autocomplete="off"`, `required`.
    *   Fokus-Ring: 3px türkis transparent (`#007e621c`).
*   **Senden-Button (`button[type="submit"]`):**
    *   Kreis (43px), türkis, weißes Pfeil-Icon (`\u10148` / `➨`).
    *   **Zustände:** Hover dunkler, `disabled` (während `busy=true`): Opazität 0.5, Cursor `not-allowed`.

---

## 4. Bedienung Schritt für Schritt

### 4.1. Chat starten
1.  Seite laden → Warten bis Widget initialisiert (Button erscheint rechts unten).
2.  Button **"Kundensupport öffnen"** (Sprechblasen-Icon) anklicken.
3.  Fenster fährt auf → Fokus liegt **nicht** automatisch im Eingabefeld (im Code nicht implementiert).

### 4.2. Nachricht senden
1.  In das Feld **"Nachricht schreiben …"** klicken.
2.  Text eingeben (Max. **1.800 Zeichen**).
3.  **Enter** drücken **ODER** Senden-Button (Pfeil) klicken.
    *   *Hinweis:* Kein `Shift+Enter` für Zeilenumbruch im Code definiert → Enter sendet ab.
4.  Eigene Nachricht erscheint **sofort rechts** (grün).
5.  Eingabefeld wird geleert, Button deaktiviert (`busy=true`), **Typing-Indikator** erscheint links.

### 4.3. Antwort empfangen
1.  Warten auf Backend-Antwort (POST an Worker-URL).
2.  Typing-Indikator verschwindet.
3.  Bot-Antwort erscheint **links** (weiß) mit **formatiertem Markdown** (siehe 4.4).
4.  Automatisch zum Ende scrollen (`scrollToBottom`).
5.  Eingabefeld wieder aktiv (`busy=false`).

### 4.4. Chat beenden / Schließen
*   Klick auf **`×`** (Schließen-Button im Header) → Fenster blendet aus (`display: none`), Button reappears.
*   **Verlauf bleibt im RAM** erhalten, solange Seite nicht neu geladen wird (`history` Array + DOM-Nodes bleiben erhalten).

---

## 4.4. Unterstützte Markdown-Formatierungen (Bot-Antworten)

Der Bot rendert folgende Syntax serverseitig generiert im Frontend sicher (`escapeHTML` + Whitelist):

| Element | Syntax | Beispiel Ausgabe |
| :--- | :--- | :--- |
| **Überschriften** | `# H1` bis `#### H4` | `<h1>`–`<h4>`, Farbe `#173c30` |
| **Fett** | `**Text**` oder `__Text__` | `<strong>` |
| **Kursiv** | `*Text*` oder `_Text_` | `<em>` |
| **Fett+Kursiv** | `***Text***` oder `___Text___` | `<strong><em>` |
| **Durchgestrichen** | `~~Text~~` | `<del>` |
| **Inline-Code** | `` `code` `` | `<code>` (grauer Hintergrund) |
| **Code-Block** | ``` ```code``` ``` | `<pre><code>` (dunkler Hintergrund, Scrollbar) |
| **Links** | `[Text](https://url)` | `<a target="_blank" rel="noopener noreferrer">` (Nur `http/https`) |
| **Autolinks** | `https://example.com` | Automatisch verlinkt (Nur `http/https`) |
| **Listen** | `- Item` oder `1. Item` | `<ul>`/`<ol>` mit Einrückung |
| **Zitate** | `> Text` | `<blockquote>` (grüner linker Rand) |
| **Tabellen** | `\| H1 \| H2 \|\n\|---\|---\|\n\| Z1 \| Z2 \|` | Responsive `<table>` in Wrapper (horizontal scrollbar) |
| **Trennlinie** | `---` | `<hr>` |
| **Zeilenumbruch** | Im Absatz | `<br>` (innerhalb `<p>`) |

**Sicherheit:** HTML in Bot-Antworten wird **ge-escaped**. Nur o.g. Markdown wird in sichere HTML-Elemente umgewandelt. Links werden auf `http:`/`https:` Protokoll geprüft (`safeLink`).

---

## 5. Technische Abläufe & Datenflüsse (Bestätigt aus Code)

### 5.1. Initialisierung (IIFE)
1.  Skript prüft `document.querySelector("#lamac-ai")`.
2.  Verhindert Doppel-Initialisierung via `dataset.initialized = "true"`.
3.  Cached DOM-Referenzen (Window, Buttons, Form, Input, Messages).
4.  Initialisiert `history = []`, `busy = false`.
5.  Registriert Event-Listener: `openButton` (click), `closeButton` (click), `chatForm` (submit).

### 5.2. Senden (`chatForm` Submit)
1.  `preventDefault()`.
2.  Wert aus Input lesen, `trim()`.
3.  Prüfen: `if (!text || busy) return;`.
4.  `busy = true`, Send-Button `disabled = true`.
5.  `addUserMessage(text)` → DOM-Update + Scroll.
6.  `showTyping()` → DOM-Update + Scroll.
7.  `history.push({ role: "user", content: text })`.
8.  **API-Request:** `fetch(WORKER_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: history }) })`.
    *   **URL:** `https://carescape-ai.oslamuoslamu.workers.dev/` (Hardcoded Konstante).
    *   **Payload:** `{ "messages": [ { "role": "user", "content": "..." }, ... ] }`.
9.  **Response Handling:**
    *   `!response.ok` → Fehler-Text: `Fehler: HTTP {status}`.
    *   `response.json()` → Erwartet `{ "reply": "String" }`.
    *   `reply` validieren (String, nicht leer).
    *   `history.push({ role: "assistant", content: reply })`.
    *   `addBotMessage(reply)` (rendert Markdown).
10. `catch (error)` → `addBotMessage("Entschuldigung, da ist etwas schiefgelaufen. Bitte versuche es später erneut.")`.
11. `finally` → `busy = false`, `sendButton.disabled = false`, `chatInput.focus()`, Typing-Element entfernen.

### 5.3. Barrierefreiheit (a11y)
*   Semantisches HTML (`<form>`, `<header>`, `<section>`, `<button>`).
*   `aria-label` auf allen Icon-Buttons.
*   `aria-live="polite"` auf Nachrichtencontainer.
*   `role="status"` + `aria-label` auf Typing-Indikator.
*   Fokus-Styles (`outline: none` + custom `box-shadow` auf Input).
*   `prefers-reduced-motion`: Deaktiviert Animationen (Window appear, Typing dots, Button transitions).

---

## 6. Typische Probleme & Fehlerbehebung (Client-Seite)

| Symptom | Mögliche Ursache (basierend auf Code) | Prüfung / Lösung |
| :--- | :--- | :--- |
| **Widget erscheint gar nicht** | 1. JS-Fehler vor Initialisierung.<br>2. Container `#lamac-ai` fehlt im HTML.<br>3. Skript wird nicht geladen/ausgeführt. | DevTools Console prüfen (Rot: SyntaxError, ReferenceError). Netzwerk-Tab: `index.html` / Inline-Script geladen? |
| **Button da, Fenster öffnet nicht** | Click-Listener nicht registriert / `openButton` null. | Console: `document.querySelector('#lamac-ai-open')` prüfen. `z-index` Kollision? (Widget nutzt 99999). |
| **Nachricht absenden nicht möglich** | 1. `maxlength="1800"` überschritten.<br>2. `busy = true` (vorherige Anfrage läuft noch/hängt).<br>3. `required` Attribut + leeres Feld. | Input prüfen (Zeichenanzahl). Warten bis Typing-Indikator weg. Console auf JS-Fehler im `submit`-Handler prüfen. |
| **Keine Antwort vom Bot / "Etwas schiefgelaufen"** | 1. Netzwerkfehler (CORS, Offline, Worker down).<br>2. Worker antwortet nicht mit JSON `{ "reply": "..." }`.<br>3. HTTP Status != 2xx. | DevTools -> Network -> `carescape-ai...workers.dev` anklicken.<br>Status: 0 (Netzwerk/CORS), 4xx/5xx (Server), 200 aber falsches JSON-Format. |
| **Antwort unformatiert / HTML-Tags sichtbar** | Bot sendet ungültiges Markdown oder `renderMarkdown` Fehler. | Console auf Fehler in `renderMarkdown`
