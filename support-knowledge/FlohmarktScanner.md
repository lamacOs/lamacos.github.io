<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: FlohmarktScanner -->
<!-- source-files: ["FlohmarktScanner/index.html"] -->

# Support-Dokumentation: FlohmarktScanner

**Website-Name:** FlohmarktScanner  
**Vermuteter Zweck:** Basierend auf dem Repository-Namen und dem eingebetteten Widget handelt es sich um eine Website zum Scannen/Analysieren von Flohmarkt-Artikeln. Die Hauptfunktionalität der eigentlichen FlohmarktScanner-Anwendung ist **im bereitgestellten Quellcode nicht enthalten**. Der vorliegende Code implementiert ausschließlich das **lamacHub KI-Kundensupport-Widget** (Chat-Interface), das auf der Seite eingebunden ist.  
**Quellcode-Pfad:** `FlohmarktScanner/index.html`  
**Datum der Erstellung:** 2025-08-15 (basierend auf heutigem Datum)

---

## 1. Überblick & Voraussetzungen

### 1.1 Was ist das lamacHub Widget?
Das Widget ist ein **KI-gestützter Support-Chat**, der fest in die FlohmarktScanner-Website integriert ist. Es ermöglicht Besuchern, Fragen zu stellen und automatisierte Antworten zu erhalten.

### 1.2 Technische Voraussetzungen (Client-Seite)
| Voraussetzung | Status | Hinweis |
| :--- | :--- | :--- |
| **JavaScript** | **Erforderlich** | Das Widget ist eine reine Client-Side-Applikation (IIFE). Ohne JS ist es nicht sichtbar/benutzbar. |
| **Moderner Browser** | Empfohlen | Nutzt `fetch`, `URL` API, `dataset`, `arrow functions`, `const/let`, CSS Custom Properties, `calc()`, `dvh`-Einheiten. |
| **Netzwerkzugriff** | **Erforderlich** | Muss `https://carescape-ai.oslamuoslamu.workers.dev/` erreichen können (CORS-fähig). |
| **Cookies / LocalStorage** | Nicht genutzt | Der Chat-Verlauf (`history`) wird nur im Speicher (RAM) gehalten und beim Neuladen verworfen. |

### 1.3 Barrierefreiheit (a11y)
*   **ARIA-Labels:** Alle interaktiven Elemente (`button`, `input`, `form`, `section`) besitzen `aria-label` oder `aria-labelledby`.
*   **Live Region:** Der Nachrichtenbereich (`#lamac-ai-messages`) nutzt `aria-live="polite"` und `aria-relevant="additions"` für Screenreader.
*   **Tastaturbedienung:** Fokus-Reihenfolge logisch (Schließen → Header → Verlauf → Eingabe → Senden). `Enter` zum Senden, `Escape` **nicht** im Code implementiert (nur Klick auf Close-Button).
*   **Reduced Motion:** Respektiert `@media (prefers-reduced-motion: reduce)` (deaktiviert Animationen).

---

## 2. Sichtbare Bereiche & Bedienelemente

Das Widget besteht aus zwei Hauptzuständen: **Geschlossen (FAB)** und **Geöffnet (Chat-Fenster)**.

### 2.1 Zustand: Geschlossen (Floating Action Button)
*   **Element:** `<button id="lamac-ai-open">`
*   **Position:** Fixiert, rechts unten (24px / 16px mobile).
*   **Beschriftung (aria-label):** *"Kundensupport öffnen"*
*   **Icon:** Emoji `💬` (Unicode: `\u55357 \u56492`).
*   **Design:** Grün (`#007e62`), rund, Schatten, Hover-Skalierung.

### 2.2 Zustand: Geöffnet (Chat-Fenster)
*   **Container:** `<section id="lamac-ai-window">` (initial `display: none`, bei `.open` → `display: flex`).
*   **Größe:** Max 390px Breite / 570px Höhe (Desktop), fast Vollbild (Mobile).
*   **Bestandteile:**
    1.  **Header** (`<header>`): Dunkelgrün (`#11211d`).
        *   Titel: **"lamacHub Kundenservice"** (`<strong>`).
        *   Untertitel: **"KI-gestützter Support"** (`<small>`).
        *   **Schließen-Button** (`#lamac-ai-close`): `×` (Multiplikationszeichen), `aria-label="Chat schließen"`.
    2.  **Nachrichtenbereich** (`#lamac-ai-messages`): Scrollbar, flexibel.
        *   **Bot-Nachrichten** (`.lamac-bot`): Weiß, linker Rand abgerundet, unterstützt **Markdown-Rendering** (siehe 3.2).
        *   **User-Nachrichten** (`.lamac-user`): Hellgrün (`#d8f8e8`), rechter Rand abgerundet, `white-space: pre-wrap` (Zeilenumbrüche bleiben erhalten).
        *   **Typing-Indikator** (`.lamac-typing`): Drei pulsierende Punkte ("Kundenservice antwortet").
    3.  **Eingabeformular** (`#lamac-ai-form`): Unten fixiert.
        *   **Eingabefeld** (`#lamac-ai-input`): `placeholder="Nachricht schreiben …"`, `maxlength="1800"`, `required`, `autocomplete="off"`.
        *   **Senden-Button** (`button[type="submit"]`): Papierflieger-Icon (`\u10148` / 📤), deaktiviert während Ladevorgang (`busy`).

---

## 3. Bedienung: Schritt für Schritt

### 3.1 Chat eröffnen
1.  Klicke auf den grünen **Runden Button (💬)** unten rechts ("Kundensupport öffnen").
2.  Das Fenster fährt mit Animation von unten nach oben auf.
3.  Der Fokus springt **nicht** automatisch in das Eingabefeld (im Code nicht implementiert) → Manuell in das Feld klicken/tabben.

### 3.2 Erste Begrüßung
*   Sofort nach Öffnen erscheint die **Bot-Nachricht**: *"Hallo! Wie kann ich dir weiterhelfen?"*

### 3.3 Nachricht senden
1.  Klicke in das Eingabefeld ("Nachricht schreiben …").
2.  Tippe deine Frage (max. **1.800 Zeichen**).
3.  Drücke **Enter** (Absenden des Formulars) **oder** klicke den **Papierflieger-Button (📤)**.
    *   *Hinweis:* `Shift+Enter` für Zeilenumbruch ist **nicht** explizit im Code behandelt (Standard-Verhalten `textarea` vs `input`: hier `input`, also Enter = Submit).

### 3.4 Ablauf nach Absenden
1.  Deine Nachricht erscheint **sofort rechtsbündig (grün)**.
2.  Das Eingabefeld wird geleert, Senden-Button **deaktiviert** (`busy = true`, Opazität 50%).
3.  **Typing-Indikator** (3 Punkte) erscheint linksbündig.
4.  **Im Hintergrund:** `POST`-Request an `https://carescape-ai.oslamuoslamu.workers.dev/` mit JSON-Body:
    ```json
    {
      "messages": [ { "role": "user", "content": "..." }, ... ],
      "systemPrompt": "Du bist der Kundenservice von lamacHub..."
    }
    ```
    *   `messages` enthält: System-Prompt + kompletter bisheriger Verlauf (`history`) + aktuelle User-Nachricht.
5.  **Bei Erfolg (Streaming):**
    *   Typing-Indikator wird entfernt.
    *   Antwort wird **Zeichen für Zeichen (Stream)** in einer neuen Bot-Nachricht (weiß, Markdown-gerendert) aufgebaut.
    *   Scrollen folgt automatisch nach unten.
6.  **Bei Fehler (Netzwerk, HTTP-Fehler, Abbruch):**
    *   Typing-Indikator wird entfernt.
    *   Fehlermeldung als Bot-Nachricht: *"Entschuldige, da ist etwas schiefgelaufen. Bitte versuche es noch einmal."*
7.  Senden-Button wird wieder aktiviert (`busy = false`), Fokus zurück ins Eingabefeld.

### 3.5 Chat schließen
*   Klicke auf das **`×` (Schließen-Button)** oben rechts im Header ("Chat schließen").
*   Fenster wird ausgeblendet (`display: none`), Verlauf bleibt im Speicher erhalten bis Seiten-Reload.

### 3.6 Chat-Verlauf bei Neuladen
*   **Wird gelöscht.** `history` ist eine JS-Variable im Speicher. Kein `localStorage`/`sessionStorage` im Code vorhanden.

---

## 4. Eingaben, Ausgaben & Markdown-Unterstützung

### 4.1 Eingabe (User)
*   **Typ:** Plain Text.
*   **Länge:** Max 1.800 Zeichen (Client-seitig via `maxlength`, Server-seitig unbekannt).
*   **Sonderzeichen:** Werden escaped (XSS-Schutz). Kein HTML erlaubt.
*   **Zeilenumbrüche:** Werden im User-Bubble via `white-space: pre-wrap` dargestellt.

### 4.2 Ausgabe (Bot / KI) – Markdown-Rendering
Der Bot-Antwort-Text wird durch eine **eigene Markdown-Parser-Funktion (`renderMarkdown`)** in sicheres HTML umgewandelt. **Rohe HTML-Tags der KI werden escaped (entfernt/unschädlich gemacht).**

**Unterstützte Syntax (Bestätigt im Code):**

| Element | Syntax | Ausgabe-Beispiel |
| :--- | :--- | :--- |
| **Überschriften** | `# H1` bis `#### H4` | `<h1>`–`<h4>` (Farbe `#173c30`) |
| **Fett** | `**Text**` oder `__Text__` | `<strong>` |
| **Kursiv** | `*Text*` oder `_Text_` | `<em>` |
| **Fett + Kursiv** | `***Text***` oder `___Text___` | `<strong><em>` |
| **Durchgestrichen** | `~~Text~~` | `<del>` |
| **Inline-Code** | `` `code` `` | `<code>` (Hintergrund `#edf0ed`) |
| **Code-Block** | ``` ```code``` ``` | `<pre><code>` (Dunkel `#17231f`, Scrollbar) |
| **Links (MD)** | `[Text](https://url)` | `<a target="_blank" rel="noopener noreferrer">` (Nur `http/https`) |
| **Autolinks** | `https://example.com` | Automatisch verlinkt (Nur `http/https`) |
| **Listen** | `- Item` oder `1. Item` | `<ul>` / `<ol>` (Einzug 23px) |
| **Zitat** | `> Text` | `<blockquote>` (Grüner Rand links `#007e62`) |
| **Tabellen** | `\| H1 \| H2 \|\n\|---\|---\|\n\| Z1 \| Z2 \|` | Responsive `<table>` in Wrapper (Horizontal scrollbar) |
| **Trennlinie** | `---` | `<hr>` |
| **Absätze** | Leerzeile trennt | `<p>` mit `<br>` bei Zeilenumbrüchen im Quelltext |

**Sicherheits-Hinweise zur Ausgabe:**
*   **XSS-Schutz:** Kompletter Input wird initial per `escapeHTML` maskiert. Nur erlaubte MD-Patterns werden wieder in Tags umgewandelt.
*   **Link-Sicherheit:** Nur `http:` und `https:` Protokolle erlaubt. `javascript:`, `data:`, `mailto:` etc. werden **entfernt/ignoriert** (`safeLink` Funktion). Links öffnen **immer** in neuem Tab (`target="_blank"`) mit `noopener noreferrer`.

---

## 5. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache (Code-Basiert) | Lösung / Prüfung |
| :--- | :--- | :--- |
| **Widget erscheint gar nicht** | 1. JS deaktiviert / Fehler in anderer JS-Datei bricht Ausführung ab.<br>2. Container `#lamac-ai` fehlt im HTML.<br>3. Script wird doppelt geladen (Schutz: `dataset.initialized` verhindert 2. Instanz). | 1. JS aktivieren, Konsole prüfen.<br>2. Prüfen, ob `<div id="lamac-ai">...</div>` im HTML existiert (der Code erwartet das Markup *in* der HTML-Datei).<br>3. Nur einmal einbinden. |
| **Fenster öffnet sich nicht beim Klick** | Click-Listener auf `#lamac-ai-open` fehlt oder Element nicht gefunden. | DevTools: Event Listener prüfen. `openButton` Variable prüfen. |
| **Nachricht wird nicht gesendet / Button bleibt deaktiviert** | 1. `busy` Flag hängt (vorheriger Request läuft noch/fehlgeschlagen ohne Cleanup).<br>2. `fetch` schlägt fehl (CORS, Netzwerk, Worker down).<br>3. Eingabe leer (HTML5 `required` verhindert Submit). | 1. Seite neu laden (setzt `busy=false`).<br>2. Netzwerk-Tab prüfen: Request an `carescape-ai.oslamuoslamu.workers.dev`? Status? CORS-Header?<br>3. Text eingeben. |
| **Antwort der KI erscheint nicht / "Typing" bleibt stehen** | Stream-Reader bricht ab (`reader.read()` Fehler), `controller.abort()` wurde nicht korrekt gehandhabt, oder `done: true` kommt nie. | Netzwerk-Tab: Response Body prüfen (Chunked Transfer?). Konsole auf JS-Fehler im `try/catch` Block prüfen. |
| **Markdown wird falsch dargestellt (z.B. Tabelle kaputt)** | Parser-Logik (`renderMarkdown`) deckt Edge-Cases nicht ab (z.B. Zellen mit `|` im Text, ungleiche Spaltenanzahl). | Im Quellcode nicht behebbar (Client-seitig fest verdrahtet). Kürzere Tabellen nutzen. |
| **Links in KI-Antwort funktionieren nicht / fehlen** | KI liefert Protokoll außer `http/https` (z.B. `mailto:`, `tel:`, relativer Pfad `/kontakt`). `safeLink` verwirft diese. | KI-Prompt (Server-seitig) anpassen, damit nur absolute HTTPS-Links ausgegeben werden. |
| **Layout bricht auf Mobile / Kleinem Bildschirm** | CSS `calc(100dvh - ...)` oder `min(390px, ...)` wird von sehr alten Browsern nicht unterstützt. | Browser aktualisieren. Fallback im Code: `height: min(620px, calc(100dvh - 100px))` für Mobile. |
| **Eingabefeld verliert Fokus nach Senden (Mobile)** | `chatInput.focus()` am Ende von `finally`-Block. Funktioniert meist, aber iOS Safari blockiert Fokus manchmal ohne User-Geste
