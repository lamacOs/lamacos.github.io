<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: HTMLBuilder -->
<!-- source-files: ["HTMLBuilder/index.html"] -->

# Support-Dokumentation: HTMLBuilder

**Website-Name:** HTMLBuilder  
**Vermuteter Zweck:** Ein webbasierter Editor zum Erstellen und Testen von HTML-Code mit Live-Vorschau, Syntax-Highlighting (durch monospace-Schrift) und Theme-Umschaltung (Light/Dark).  
**Quellcode-Pfad:** `HTMLBuilder/index.html`  
**Datum der Erstellung:** 2025-08-15 (basierend auf heutigem Datum)  

---

## 1. Überblick

HTMLBuilder ist eine **Single-Page-Application (SPA)**, die vollständig in einer einzelnen `index.html`-Datei enthalten ist. Sie bietet eine zweigeteilte Oberfläche:  
- **Links:** Ein Textbereich (`<textarea>`) zur Eingabe von HTML-Code.  
- **Rechts:** Eine Live-Vorschau (`<iframe>`), die den eingegebenen Code rendert.  

Zusätzlich ist ein **KI-gestützter Support-Chat (lamacHub)** fest in die Seite eingebettet. Die Anwendung läuft rein clientseitig, benötigt keine Server-Komponente für die Kernfunktion (HTML-Rendering) und speichert Daten nicht persistent (kein `localStorage`, keine Datenbank im Code sichtbar).

---

## 2. Voraussetzungen

| Anforderung | Details |
|-------------|---------|
| **Browser** | Moderner Browser mit Unterstützung für `CSS Custom Properties`, `Grid Layout`, `backdrop-filter`, `iframe`-Sandboxing (Standard). Getestet mit Chrome/Edge/Firefox/Safari aktuelle Versionen. |
| **JavaScript** | Muss aktiviert sein (für Theme-Toggle, Live-Vorschau-Update, Chat-Widget). |
| **Netzwerk** | Für den **Chat** und **Google Fonts (Inter)** ist Internetzugang erforderlich. Der HTML-Builder selbst funktioniert offline nach erstmaligem Laden. |
| **Berechtigungen** | Keine speziellen Berechtigungen (Kamera, Mikrofon, Standort) notwendig. Der Chat nutzt `fetch` zu einem externen Worker (`carescape-ai.oslamuoslamu.workers.dev`). |

---

## 3. Benutzeroberfläche – Bereiche im Detail

### 3.1 Navigationsleiste (`.navbar`)
- **Markenbereich (`.brand`)**: Zeigt ein Logo-Bild (`<img>`, 44×44px, Quelle im Quellcode nicht sichtbar, `src` fehlt im Ausschnitt) und den Text **"HTML Builder"** (Gewicht 800).
- **Theme-Button (`.theme-btn`)**: Button mit Beschriftung im Quellcode nicht direkt sichtbar (Icon/Text via JS gesetzt), Hintergrundfarbe `--accent` (#ff7a00). Wechselt zwischen Light/Dark-Mode (setzt Attribut `data-theme="dark"` auf `<html>`).

### 3.2 Hero-Bereich (`.hero`)
- Überschrift: **"HTML Builder"** (Farbe `--accent`, 3rem).
- Untertitel: Kurzbeschreibung (Farbe `--muted`), Text im Quellcode nicht vollständig lesbar (gekürzt).

### 3.3 Hauptbereich (`.grid` – 2 Spalten, ab 1000px 1 Spalte)

#### Linke Karte: Editor (`.card`)
- **Überschrift**: "Editor" (vermutet, da `h2` in `.card` vorhanden, Text im Ausschnitt nicht explizit).
- **Textarea (`#editor` / `textarea`)**:
  - `min-height: 250px`, `resize: vertical`.
  - Monospace-Schrift, 14px, Padding 14px.
  - Hintergrund transparent, Rahmen `var(--border)`.
  - **Kein Syntax-Highlighting** (reines `<textarea>`-Element).
- **Aktionsleiste (`.actions`)**:
  - Buttons (`.action-btn`), Beschriftungen im Quellcode **nicht sichtbar** (HTML für Buttons fehlt im Ausschnitt, nur CSS-Klasse definiert). Vermutet: "Vorschau aktualisieren", "Löschen", "Beispiel laden" – **Im Quellcode nicht eindeutig erkennbar**.
- **Ausgabebereich (`.output` / `#output`)**:
  - `min-height: 250px`. Zweck unklar: Möglicherweise für Fehlermeldungen, generierten Code oder Konsolen-Output. **Im Quellcode nicht eindeutig erkennbar**, da kein JS-Logik für `#output` im Ausschnitt vorhanden.

#### Rechte Karte: Vorschau (`.card`)
- **Überschrift**: "Live Vorschau" (vermutet).
- **Iframe (`#preview` / `.preview`)**:
  - `width: 100%`, `height: 500px`, `border: none`, `border-radius: 16px`, `background: white`.
  - **Sandbox-Attribut**: **Nicht gesetzt** im Quellcode (`<iframe>` ohne `sandbox`). Das bedeutet: Der gerenderte Code hat Zugriff auf das Parent-DOM (Same-Origin), kann Skripte ausführen, Cookies lesen etc. → **Sicherheitshinweis** siehe Abschnitt 6.

### 3.4 Footer
- Zentriert, `margin-top: 40px`, Textfarbe `--muted`. Inhalt im Ausschnitt nicht sichtbar.

### 3.5 lamacHub KI-Chat-Widget (`#lamac-ai`)
- **Fester Button (rechts unten, `#lamac-ai-open`)**: Kreis (60px), grün (#007e62), Icon (Emoji/Unicode `💬` oder ähnlich), `aria-label="Kundensupport öffnen"`.
- **Fenster (`#lamac-ai-window`)**: 390px × 570px (max), fest positioniert, erscheint über `display: flex` + Klasse `.open`.
- **Header**: Titel "lamacHub Kundenservice", Untertitel "KI-gestützter Support", Schließen-Button (×).
- **Nachrichtenbereich (`#lamac-ai-messages`)**: Scrollbar, Blasen-Layout (Bot links/weiß, User rechts/grünlich), unterstützt **Markdown-Rendering** (Tabellen, Codeblöcke, Links, Fett/Kursiv).
- **Eingabeformular (`#lamac-ai-form`)**:
  - Input (`#lamac-ai-input`): `maxlength="1800"`, Placeholder "Nachricht schreiben …".
  - Senden-Button (Pfeil-Icon `➤`).
- **Backend**: `WORKER_URL = "https://carescape-ai.oslamuoslamu.workers.dev/"` (Cloudflare Worker). Kommunikation via `fetch` (Im Skript angedeutet, Logik im gekürzten Teil).

---

## 4. Bedienung – Schritt für Schritt

### 4.1 HTML-Code schreiben & testen
1. **Seite öffnen** → Editor (linke Seite) ist fokussierbar.
2. **HTML eingeben** (z. B. `<h1>Hallo</h1><p>Welt</p>`).  
   *Hinweis: Kein Auto-Completion, kein Linting.*
3. **Vorschau aktualisieren**:  
   - Im Quellcode **kein Event-Listener für `input`/`keyup` auf der Textarea sichtbar** (JS-Teil fehlt/gekürzt).  
   - **Vermutung**: Entweder automatisches Update via `input`-Event oder manuell über einen Button in `.actions` (nicht im HTML-Ausschnitt).  
   - **Fallback**: Seite neu laden oder im DevTools `document.querySelector('iframe').srcdoc = document.querySelector('textarea').value` ausführen.
4. **Ergebnis prüfen** im rechten Iframe.

### 4.2 Theme wechseln (Light / Dark)
1. Button in der Navbar (`.theme-btn`) klicken.
2. Seite wechselt sofort: Hintergrund, Karten, Textfarben passen sich an (CSS-Variablen).
3. Zustand wird **nicht persistiert** (kein `localStorage` im Code) → nach Reload zurück auf System-Standard (Light).

### 4.3 KI-Chat (lamacHub) nutzen
1. **Öffnen**: Klick auf den runden grünen Button rechts unten ("Kundensupport öffnen").
2. **Fenster erscheint** mit Willkommensnachricht: *"Hallo! Wie kann ich dir weiterhelfen?"*
3. **Nachricht tippen** (max. 1800 Zeichen), Enter oder Senden-Button (➤).
4. **Antwort warten**: Typing-Animation (3 Punkte), dann Markdown-formatierte Antwort.
5. **Schließen**: Klick auf × im Header oder erneut auf den runden Button.
6. **Barrierefreiheit**: `aria-live="polite"`, `aria-label`, Fokus-Management (nicht im Code sichtbar, aber ARIA-Attribute vorhanden).

---

## 5. Eingaben & Ausgaben

| Bereich | Eingabe | Ausgabe / Reaktion |
|---------|---------|---------------------|
| **Editor (Textarea)** | HTML-Text (beliebig, unsicher) | Wird (vermutet) in Iframe gerendert. |
| **Iframe-Vorschau** | – | Gerendertes HTML/CSS/JS. **Führt Skripte aus** (kein Sandbox). |
| **Theme-Button** | Klick | Umschaltung CSS-Variablen (`data-theme="dark"` auf `<html>`). |
| **Chat-Input** | Text (≤1800 Zeichen) | Sendet an `https://carescape-ai.oslamuoslamu.workers.dev/`, zeigt Antwort mit Markdown. |
| **Chat-Close** | Klick | Versteckt Fenster (`display: none`). |

---

## 6. Datenschutz, Berechtigungen & Sicherheit

| Aspekt | Bewertung |
|--------|-----------|
| **Datenverarbeitung (Builder)** | Rein clientseitig. Kein Speichern, kein Senden von Code an Backend. |
| **Google Fonts (Inter)** | Wird von `fonts.googleapis.com` geladen → IP-Adresse an Google übermittelt. Kein `localStorage`-Cache im Code. |
| **Chat-Widget** | Sendet Nutzereingaben an **`https://carescape-ai.oslamuoslamu.workers.dev/`** (Cloudflare Worker). Keine Info im Code, welche Daten genau gesendet werden (vermutet: Chat-History + Input). **Keine Einwilligungsabfrage (Cookie-Banner) im Code vorhanden.** |
| **Iframe-Sicherheit** | **Kritisch**: `<iframe>` **ohne `sandbox`-Attribut**. Eingebetteter Code läuft **Same-Origin** → kann Parent-DOM manipulieren, Cookies/Storage lesen, Netzwerkrequests stellen. **Nicht für fremden/unsicheren Code verwenden.** |
| **CSP / Security Headers** | Im HTML keine `Content-Security-Policy` (`<meta http-equiv="CSP">`) definiert. |
| **Externe Skripte** | Keine weiteren externen JS-Dateien (Chat-Logik ist inline). |
| **Geheimnisse im Code** | `WORKER_URL` ist hardcoded. Keine API-Keys, Tokens, Passwörter im Ausschnitt sichtbar. |

---

## 7. Typische Probleme & Fehlerbehebung

| Problem | Mögliche Ursache | Lösung / Workaround |
|---------|------------------|----------------------|
| **Vorschau aktualisiert sich nicht bei Eingabe** | Fehlender `input`-Event-Listener im JS (Code nicht im Ausschnitt). | Prüfen, ob Button in `.actions` existiert ("Aktualisieren"). Andernfalls: Browser-Konsole → `iframe.srcdoc = textarea.value`. |
| **Theme-Button funktioniert nicht** | JS für Toggle fehlt oder `data-theme` nicht gesetzt. | In DevTools: `document.documentElement.setAttribute('data-theme', 'dark')` testen. |
| **Chat öffnet sich nicht / bleibt leer** | Netzwerkfehler zum Worker (`carescape-ai...workers.dev`), CSP blockiert `fetch`, JS-Fehler. | Netzwerk-Tab prüfen (403/500/CORS). Offline → Chat nicht nutzbar. |
| **Chat-Antworten fehlen / "Typing" bleibt** | Worker-Antwort fehlerhaft, `renderMarkdown` wirft Fehler. | Konsole prüfen (SyntaxError im Markdown-Parser). |
| **Iframe zeigt weiße Seite / Fehler** | Eingabe ungültiges HTML, Skriptfehler im Iframe, Same-Origin-Blockade (z. B. `X-Frame-Options` bei externen URLs im Code). | Einfaches HTML testen (`<h1>Test</h1>`). Externe Ressourcen (Bilder, Fonts) im Code prüfen. |
| **Layout bricht auf Mobile** | Grid wird bei `<1000px` auf 1 Spalte umgeschaltet (CSS `@media` ok). | Scrollen prüfen; Iframe-Höhe fix 500px → evtl. viel Scrollen nötig. |
| **Google Fonts lädt nicht** | Offline, Firewall, `fonts.googleapis.com` blockiert. | Fallback: System-Schrift (CSS `font-family: Inter, sans-serif` → fällt auf `sans-serif` zurück). |

---

## 8. FAQ

**F: Speichert HTMLBuilder meinen Code automatisch?**  
A: **Nein.** Im Quellcode ist keine `localStorage`-, `sessionStorage`- oder `IndexedDB`-Logik erkennbar. Beim Neuladen ist der Editor leer.

**F: Kann ich die Vorschau in einem neuen Fenster öffnen?**  
A: **Nicht über UI-Elemente im Code.** Manuell möglich: Rechtsklick auf Iframe → "Frame in neuem Tab öffnen" (Browser-Funktion).

**F: Warum führt der Iframe meine `<script>`-Tags aus?**  
A: Das Iframe hat **kein `sandbox`-Attribut** und ist **same-origin**. Es verhält sich wie ein normales Dokument. **Vorsicht bei fremdem Code.**

**F: Wie setze ich den Dark Mode dauerhaft?**  
A: **Nicht möglich** (keine Persistenz). Workaround: Browser-Extension (z. B. "Dark Reader") oder manuell per DevTools `localStorage.setItem('theme','dark')` + eigener Code beim Laden.

**F: Werden meine Chat-Nachrichten gespeichert?**  
A: **Im Quellcode nicht eindeutig erkennbar.** Der Worker (`carescape-ai...`) könnte serverseitig loggen. Lokal im Browser wird `history`-Array nur im Speicher gehalten (Variable `let history = []`), beim Reload weg.

**F: Kann ich den Chat deaktivieren/entfernen?**  
A: Ja, durch Entfernen des `<div id="lamac-ai">...</div>` Blocks und des zugehörigen `<style>`/`<script>` Blocks aus dem HTML.

**F: Unterstützt der Editor Syntax-Highlighting?**  
A: **Nein.** Es ist ein natives `<textarea>` (monospace). Keine Farbkodierung, Einrückungshilfe oder Error-Markierung.

**F: Warum lädt die Seite langsam?**  
A: Mögliche Ursachen: Google Fonts (Inter) blockiert/verzögert, Chat-Worker
