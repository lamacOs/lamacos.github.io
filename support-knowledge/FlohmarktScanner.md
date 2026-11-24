<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: FlohmarktScanner -->
<!-- source-files: ["FlohmarktScanner/index.html"] -->

# Support-Dokumentation: FlohmarktScanner

**Website-Name:** FlohmarktScanner  
**Vermuteter Zweck:** Basierend auf dem Repository-Namen und dem eingebetteten Widget handelt es sich um eine Website zum Scannen/Analysieren von Flohmarkt-Artikeln. Die eigentliche Kernfunktionalität (Scanner, Preissuche, Erkennung) ist **im bereitgestellten Quellcode-Ausschnitt nicht enthalten**. Der Ausschnitt zeigt ausschließlich die Integration des **lamacHub KI-Kundenservice-Widgets**.  
**Quellcode-Pfad:** `FlohmarktScanner/index.html`  
**Datum der Erstellung:** 2025-08-14 (basierend auf heutigem Datum)

---

## 1. Überblick & Voraussetzungen

### 1.1 Was ist im Quellcode sichtbar?
Die Datei `index.html` enthält **ausschließlich** den HTML-, CSS- und JavaScript-Code für das **lamacHub KI-Support-Widget** (Chat-Bubble unten rechts). Es sind **keine** Inhalte der eigentlichen FlohmarktScanner-Anwendung (z. B. Kamera-Zugriff, Artikel-Datenbank, Preisvergleich, Benutzerkonten) im Ausschnitt enthalten.

### 1.2 Voraussetzungen für das Support-Widget
| Anforderung | Details |
| :--- | :--- |
| **Browser** | Moderner Browser mit Unterstützung für `fetch`, `CSS Grid/Flexbox`, `CSS Custom Properties`, `IntersectionObserver` (für Animationen). |
| **Netzwerk** | Ausgehende HTTPS-Verbindung zu `https://carescape-ai.oslamuoslamu.workers.dev/` (Cloudflare Worker Endpoint). |
| **Berechtigungen** | Keine speziellen Browser-Berechtigungen (Kamera, Mikrofon, Standort) für das Widget selbst. |
| **JavaScript** | Muss aktiviert sein. Das Widget nutzt ein IIFE (Immediately Invoked Function Expression) im Strict Mode. |

---

## 2. Sichtbare Bereiche der Benutzeroberfläche (nur Widget)

Da der Hauptinhalt der Seite fehlt, wird hier nur das **Support-Widget** beschrieben.

### 2.1 Geschlossener Zustand (Standard)
*   **Element:** Ein runder, grüner Button (`#lamac-ai-open`), fest positioniert **unten rechts** (24px vom Rand, auf Mobile 16px).
*   **Beschriftung:** `aria-label="Kundensupport öffnen"`.
*   **Icon:** Ein Emoji/Unicode-Zeichen (💬 oder ähnlich, Code: `\u55357 \u56492`).
*   **Verhalten:** Hover-Effekt (Skalierung + dunkleres Grün), Klick öffnet das Chat-Fenster.

### 2.2 Geöffneter Zustand (Chat-Fenster `#lamac-ai-window`)
*   **Position:** Über dem Öffnen-Button (bottom: 96px Desktop / 86px Mobile), rechtsbündig.
*   **Größe:** Max. 390px Breite, max. 570px Höhe (Mobile: fast Vollbild).
*   **Aufbau (Flex-Spalte):**
    1.  **Header (`header`):**
        *   Titel: **"lamacHub Kundenservice"** (`strong`).
        *   Untertitel: **"KI-gestützter Support"** (`small`).
        *   **Schließen-Button (`#lamac-ai-close`):** `×` (Multiplikationszeichen), `aria-label="Chat schließen"`.
    2.  **Nachrichtenbereich (`#lamac-ai-messages`):**
        *   Scrollbar, `aria-live="polite"` für Screenreader.
        *   **Startnachricht (Bot):** *"Hallo! Wie kann ich dir weiterhelfen?"* (Klasse `.lamac-bot`).
        *   **Eigene Nachrichten:** Rechtsbündig, hellgrüner Hintergrund (`.lamac-user`).
        *   **Bot-Antworten:** Links, weißer Hintergrund, Rahmen, Markdown-Rendering (`.lamac-bot`).
        *   **Tipp-Indikator:** Drei animierte Punkte (`.lamac-typing`), `role="status"`, `aria-label="Kundenservice antwortet"`.
    3.  **Eingabeformular (`#lamac-ai-form`):**
        *   **Textfeld (`#lamac-ai-input`):** Placeholder *"Nachricht schreiben …"*, Max. **1800 Zeichen**, `autocomplete="off"`, `required`.
        *   **Senden-Button (`button[type="submit"]`):** Papierflieger-Icon (`\u10148`), deaktiviert während Versand (`busy` state).

---

## 3. Bedienung Schritt für Schritt

### 3.1 Chat eröffnen
1.  Seite laden (Widget initialisiert sich automatisch einmalig – Schutz vor Doppel-Laden via `data-initialized`).
2.  Auf den **grünen runden Button unten rechts** klicken (Beschriftung per Screenreader: *"Kundensupport öffnen"*).
3.  Das Fenster fährt mit Animation (Fade-in + Slide-up) auf.

### 3.2 Nachricht schreiben & senden
1.  In das Eingabefeld klicken (Fokus: grüner Rand + Schatten).
2.  Text eingeben (max. 1800 Zeichen). **Enter** sendet **nicht** automatisch (kein `keydown`-Listener im Code sichtbar), sondern nur Klick auf **Senden-Button** (Papierflieger) oder Submit des Formulars.
3.  Während der Verarbeitung:
    *   Senden-Button wird deaktiviert (`opacity: 0.5`, `cursor: not-allowed`).
    *   Eigene Nachricht erscheint sofort rechts (`.lamac-user`, `white-space: pre-wrap` → Zeilenumbrüche bleiben erhalten).
    *   Tipp-Animation (drei Punkte) erscheint links.

### 3.3 Antwort empfangen
1.  Tipp-Animation wird durch die formatierte Bot-Antwort ersetzt (`.lamac-bot`).
2.  Scrollen passiert automatisch ans Ende (`scrollToBottom`).
3.  Markdown wird gerendert (siehe Abschnitt 4).

### 3.4 Chat schließen
*   Klick auf **`×` oben rechts** (`aria-label="Chat schließen"`).
*   Fenster wird ausgeblendet (`display: none`), Zustand bleibt im DOM erhalten (History bleibt im Speicher der Session erhalten, solange Seite nicht neu lädt).

### 3.5 Chat erneut öffnen
*   Erneut auf grünen Button klicken → Fenster erscheint mit **vorherigem Verlauf** (History wird im Array `history` gehalten, DOM-Nachrichten bleiben erhalten).

---

## 4. Eingaben, Ausgaben & Markdown-Unterstützung

### 4.1 Eingabe (User)
*   **Typ:** Plain Text.
*   **Länge:** Max 1800 Zeichen (HTML-Attribut `maxlength`).
*   **Sonderzeichen:** Werden beim Senden **nicht** vom Client interpretiert, aber serverseitig verarbeitet. Client-seitig wird `textContent` gesetzt → **keine XSS-Gefahr durch User-Input**.

### 4.2 Ausgabe (Bot) – Markdown-Rendering (`renderMarkdown`)
Der Bot-Antwort-Text wird **nicht** als `innerText`, sondern als `innerHTML` nach Parsing eingefügt. Der Parser (`renderMarkdown` + `renderInline`) unterstützt:

| Feature | Syntax | Hinweis |
| :--- | :--- | :--- |
| **Überschriften** | `# H1` bis `#### H4` | Farben: `#173c30`. |
| **Fett / Kursiv** | `**fett**`, `*kursiv*`, `___fett+kursiv___` | Verschachtelt möglich. |
| **Durchgestrichen** | `~~text~~` | `<del>` Tag. |
| **Inline-Code** | `` `code` `` | Geschützt vor weiterem Parsing. |
| **Code-Blöcke** | ``` ```code``` ``` | `<pre><code>`, Dark Theme (`#17231f`), Escape HTML. |
| **Listen** | `- ` oder `1. ` | `<ul>` / `<ol>`, Einzug 23px. |
| **Zitate** | `> Text` | `<blockquote>`, linker grüner Rand. |
| **Links (MD)** | `[Text](https://url)` | **Nur HTTP/HTTPS**, `target="_blank"`, `rel="noopener noreferrer"`. |
| **Autolinks** | `https://example.com` | Werden automatisch zu `<a>` umgewandelt (nur HTTP/HTTPS). |
| **Tabellen** | `\| H1 \| H2 \|\n\|---\|---\|\n\| Z1 \| Z2 \|` | Responsive Wrapper (horizontal scrollbar), Header grünlich. |
| **Trennlinien** | `---` | `<hr>`. |
| **Absätze** | Leerzeile trennt `<p>`, Zeilenumbruch im Text → `<br>`. |

**Sicherheit:** Alle Roh-Texte werden vor Parsing per `escapeHTML` maskiert (`&`, `<`, `>`, `"`, `'`). Links werden via `new URL()` validiert (Protokoll-Prüfung).

---

## 5. Typische Probleme & Fehlerbehebung (Widget-spezifisch)

| Symptom | Mögliche Ursache (Code-basiert) | Lösung / Prüfung |
| :--- | :--- | :--- |
| **Widget erscheint gar nicht** | 1. Script-Fehler vor Initialisierung.<br>2. `root` Element (`#lamac-ai`) fehlt im HTML.<br>3. `data-initialized="true"` schon gesetzt (Doppel-Einbindung verhindert). | DevTools Console prüfen. HTML auf `<div id="lamac-ai">...</div>` prüfen. Seite neu laden. |
| **Chat öffnet sich nicht beim Klick** | `openButton` oder `chatWindow` QuerySelector liefert `null` (ID geändert/fehlt). | HTML-Struktur im Inspector prüfen (IDs: `lamac-ai-open`, `lamac-ai-window`). |
| **Nachricht wird nicht gesendet / Button bleibt deaktiviert** | `busy` Flag bleibt `true` (Promise vom Worker rejected/timeout, `finally` Block nicht erreicht).<br>Netzwerkfehler zum Worker (`carescape-ai.oslamuoslamu.workers.dev`). | Netzwerk-Tab prüfen (POST Request). Console auf `catch` Fehler prüfen. Seite neu laden setzt `busy=false` zurück. |
| **Antwort zeigt rohen Markdown / HTML-Tags** | `renderMarkdown` liefert String, aber `item.innerHTML` Zuweisung fehlgeschlagen oder `renderInline` Fehler. | Console Errors prüfen. Bot-Antwort prüfen (evtl. ungültige Zeichen). |
| **Links im Chat funktionieren nicht / öffnen nicht in neuem Tab** | `safeLink` lehnt URL ab (kein http/https, `new URL` wirft Fehler). | Nur absolute HTTPS/HTTP Links werden verlinkt. Relative Pfade oder `mailto:`/`tel:` werden **nicht** verlinkt (bleiben Text). |
| **Layout bricht auf Mobile** | CSS Media Queries (`max-width: 480px`) greifen nicht (Viewport Meta Tag fehlt?). | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ist im `<head>` vorhanden. |
| **Animationen stören (Barrierefreiheit)** | `prefers-reduced-motion: reduce` wird respektiert (Animationen deaktiviert, Typing-Dots statisch). | Kein Bug, Feature. Nutzer-Einstellung im OS prüfen. |

---

## 6. Datenschutz, Berechtigungen & Sicherheit

### 6.1 Datenverarbeitung (Client-seitig sichtbar)
*   **Gespeichert (Session/JS-Variablen):** `history` Array (gesamter Chat-Verlauf), `busy` Status. **Kein** `localStorage` / `sessionStorage` / `Cookies` Zugriff im Code sichtbar.
*   **Gesendet an Backend:** Bei Submit wird `fetch(WORKER_URL, ...)` aufgerufen (Code im Ausschnitt **abgeschnitten**, aber `WORKER_URL` konstant definiert).
    *   **Vermutung:** Payload enthält `history` + aktuelle User-Nachricht.
    *   **Empfänger:** `https://carescape-ai.oslamuoslamu.workers.dev/` (Cloudflare Worker).
*   **Keine Client-seitigen Tracking-Pixel, Analytics, Fingerprinting** im Widget-Code sichtbar.

### 6.2 Berechtigungen (Browser-APIs)
*   **Nicht genutzt:** `navigator.mediaDevices` (Kamera/Mikrofon), `navigator.geolocation`, `Notification API`, `Clipboard API` (außer Standard Copy/Paste im Input), `File System Access API`.

### 6.3 Content Security Policy (CSP) Hinweise
Für sicheren Betrieb der Seite (falls CSP Header gesetzt wird) benötigt das Widget:
*   `script-src 'self' 'unsafe-inline'` (oder Nonce/Hash für das Inline-Script in `index.html`).
*   `style-src 'self' 'unsafe-inline'` (Inline `<style>` Block).
*   `connect-src https://carescape-ai.oslamuoslamu.workers.dev` (für `fetch`).
*   `img-src data:` (falls Emojis als Data-URIs genutzt würden, aktuell Unicode).
*   `font-src` / `object-src` / `frame-src` nicht benötigt.

### 6.4 Geheimnisse / Sensible Daten
*   Im Code **keine** API-Keys, Tokens, Passwörter, persönlichen Daten gefunden.
*   `WORKER_URL` ist eine öffentliche Endpoint-Adresse.

---

## 7. FAQ (Häufige Fragen zum Widget)

**F: Warum öffnet sich der Chat nicht per Enter-Taste?**
A: Im Code ist kein `keydown`-Event-Listener auf dem Input registriert. Absenden erfolgt ausschließlich über **Form-Submit** (Klick auf Senden-Button oder programmatisch `form.submit()`).

**F: Werden meine Chat-Verläufe gespeichert, wenn ich den Tab schließe?**
A: **Nein.** Der Verlauf liegt nur im JavaScript-Speicher (`history` Array, DOM-Nodes). Beim Neuladen/Schließen des Tabs ist er weg. Kein `localStorage` im Code.

**F: Kann der Bot Bilder oder Dateien anzeigen/senden?**
A: **Im Code nicht vorgesehen.** Der Renderer unterstützt nur Text/Markdown/Tabellen/Code. Keine `<img>` Tags im Output, kein File-Upload im Input (`type="text"`).

**F: Funktioniert der Support offline?**
A: **Nein.** Die Verarbeitung läuft über `fetch` gegen den Cloudflare Worker. Ohne Internetverbindung bleibt `busy=true`, Tipp-Animation läuft endlos (kein Timeout-Handling im Ausschnitt sichtbar).

**F: Ist der Chat DSGVO-konform?**
A: **Im Quellcode nicht eindeutig erkennbar.** Der Code sendet Daten an einen Dritten (`oslamuoslamu.workers.dev`). Ein AV-Vertrag, Datenschutzerklärung oder
