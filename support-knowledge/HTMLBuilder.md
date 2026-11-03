<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: HTMLBuilder -->
<!-- source-files: ["HTMLBuilder/index.html"] -->

# Support-Dokumentation: HTMLBuilder

**Website-Name:** HTMLBuilder  
**Vermuteter Zweck:** Ein webbasiertes Tool zum Erstellen, Bearbeiten und Vorschau von HTML-Code mit Live-Rendering, Syntax-Highlighting (via Prism.js) und Export-Funktionen.  
**Quellcode-Pfad:** `HTMLBuilder/index.html`  
**Datum der Erstellung:** 2025-08-14 (basierend auf Systemdatum)  

---

## 1. Überblick

HTMLBuilder ist eine **Single-Page-Application (SPA)**, die vollständig in einer `index.html` Datei enthalten ist. Sie ermöglicht Benutzern:
- HTML-Code in einem Editor zu schreiben (mit Zeilennummern und Syntax-Highlighting).
- Eine **Live-Vorschau** des gerenderten HTML in einem `iframe` zu sehen.
- Den Code zu **speichern** (als `.html` Datei), zu **kopieren**, zu **löschen** oder **Beispiele** zu laden.
- Zwischen **Hell-/Dunkelmodus** zu wechseln.
- Ein **KI-Support-Widget** (lamacHub) ist eingebettet, um Fragen zur Nutzung zu stellen.

**Voraussetzungen für Besucher:**
- Moderner Browser (Chrome, Firefox, Edge, Safari – ES6+ Unterstützung).
- JavaScript muss aktiviert sein.
- Internetverbindung für externe Ressourcen (Google Fonts, Prism.js CDN, lamacHub Worker).

---

## 2. Sichtbare Bereiche & UI-Elemente

### 2.1 Navigationsleiste (`.navbar`)
| Element | Bezeichnung / Icon | Funktion |
|---------|-------------------|----------|
| Logo + Titel | `<img src="logo.png">` + `HTML Builder` | Markenidentität (Logo wird geladen, falls vorhanden). |
| Theme-Button | `☀️` / `🌙` (ID: `themeToggle`) | Umschalten zwischen Hell- und Dunkelmodus. Speichert Präferenz in `localStorage`. |

### 2.2 Hauptbereich (`.container` → `.grid`)
Zweispaltiges Layout (auf Mobilgeräten einspaltig).

#### Linke Spalte: Editor (`.card`)
| Bereich | Element | Details |
|---------|---------|---------|
| Header | `<h2>HTML Editor</h2>` | Titel. |
| Zeilennummern | `<div id="lineNumbers">` | Automatisch generiert, scrollt synchron mit Editor. |
| Editor | `<textarea id="editor">` | Monospace, `min-height: 250px`, vertikal skalierbar. **Kein Tab-Einzug nativ** – wird per JS nachgerüstet (2 Leerzeichen). |
| Aktionen (`.actions`) | Buttons (`.action-btn`) | **Speichern** (Download), **Kopieren**, **Löschen**, **Beispiel laden**. |
| Ausgabe | `<div id="output" class="output">` | Zeigt Statusmeldungen (Erfolg, Fehler, Kopiert). |

#### Rechte Spalte: Live-Vorschau (`.card`)
| Element | Details |
|---------|---------|
| Header | `<h2>Live-Vorschau</h2>` |
| Vorschau | `<iframe id="preview" class="preview" height="500px">` | Rendert den Editor-Inhalt als vollständiges HTML-Dokument (inkl. `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`). **Sandbox-Attribute:** `allow-scripts`, `allow-same-origin`, `allow-forms`. |

### 2.3 Footer
Einfacher Hinweis: `Erstellt mit ❤️ für Entwickler`.

### 2.4 KI-Support-Widget (lamacHub) – `#lamac-ai`
**Position:** Fest unten rechts (60×60 px Button 🤖).  
**Fenster:** 390×570 px (responsive), öffnet sich per Klick.  
**Funktionen:** Chat-Interface mit Markdown-Rendering (Tabellen, Code, Links), Typing-Animation, History im `sessionStorage`.  
**Backend:** `https://carescape-ai.oslamuoslamu.workers.dev/` (Cloudflare Worker).  
**Hinweis:** Das Widget ist **nicht** Kernfunktion von HTMLBuilder, sondern ein eingebetteter Support-Service.

---

## 3. Bedienung – Schritt für Schritt

### 3.1 HTML schreiben & Live-Vorschau sehen
1. Öffne die Website.
2. Klicke in das **Textarea-Feld** („HTML Editor“).
3. Tippe HTML-Code ein (z. B. `<h1>Hallo</h1><p>Welt</p>`).
   - **Taste `Tab`** fügt **2 Leerzeichen** ein (Standard-Verhalten verhindert).
   - Zeilennummern aktualisieren sich automatisch bei Eingabe, Scroll, Resize.
4. Die **Vorschau (rechts)** aktualisiert sich **automatisch ca. 300 ms nach Tastaturpause** (Debounce).

### 3.2 Beispiel laden
1. Klicke auf Button **„Beispiel laden“**.
2. Der Editor wird mit einem vordefinierten HTML-Template befüllt (inkl. CSS-Variablen, Grid-Layout, Karten).
3. Vorschau zeigt das gerenderte Beispiel.

### 3.3 Code speichern (als Datei)
1. Klicke auf **„Speichern“**.
2. Browser lädt `meine-seite.html` herunter (UTF-8, Blob-basiert).

### 3.4 Code kopieren
1. Klicke auf **„Kopieren“**.
2. Inhalt des Editors landet in der Zwischenablage.
3. Erfolgsmeldung in `#output`: „✅ Code in Zwischenablage kopiert!“.

### 3.5 Editor leeren
1. Klicke auf **„Löschen“**.
2. Editor wird geleert, Zeilennummern zurückgesetzt, Vorschau geleert.
3. Meldung: „🗑️ Editor geleert“.

### 3.6 Theme wechseln
1. Klicke auf **☀️ / 🌙** in der Navbar.
2. Farben invertieren sofort (CSS-Variablen).
3. Auswahl wird in `localStorage` (`theme`) gespeichert → bleibt nach Reload erhalten.

### 3.7 KI-Support nutzen
1. Klicke auf **🤖** (unten rechts).
2. Schreibe Nachricht (max. 1800 Zeichen), drücke Enter oder Senden-Button (➤).
3. Antwort erscheint mit Markdown-Formatierung.
4. Schließen via **×** oben rechts.

---

## 4. Eingaben & Ausgaben

| Aktion | Eingabe | Ausgabe / Reaktion |
|--------|---------|---------------------|
| Tippen im Editor | Text (HTML) | Live-Vorschau (verzögert), Zeilennummern-Update |
| „Beispiel laden“ | Klick | Editor: Vorlage-HTML; Vorschau: gerendertes Beispiel |
| „Speichern“ | Klick | Download: `meine-seite.html` |
| „Kopieren“ | Klick | Clipboard: Editor-Inhalt; Toast in `#output` |
| „Löschen“ | Klick | Editor leer; Vorschau leer; Toast in `#output` |
| Theme-Button | Klick | CSS-Vars wechseln; Icon wechselt; `localStorage` Update |
| KI-Chat | Text + Enter | Bot-Antwort (Markdown gerendert) im Chat-Fenster |

---

## 5. Typische Probleme & Fehlerbehebung

| Problem | Mögliche Ursache | Lösung / Workaround |
|---------|------------------|----------------------|
| **Vorschau bleibt leer / weiß** | Editor enthält ungültiges HTML, `iframe` blockiert Skripte, oder CSP-Fehler. | Prüfe Editor-Inhalt auf Syntaxfehler. Öffne DevTools → Console im `iframe` (Rechtsklick → Untersuchen). |
| **Syntax-Highlighting fehlt** | Prism.js nicht geladen (Netzwerkfehler, CDN blockiert). | Prüfe Netzwerk-Tab: `prism.js`, `prism-line-numbers.min.js`. Lade Seite neu. |
| **Zeilennummern stimmen nicht / fehlen** | `updateLineNumbers()` nicht getriggert (z. B. nach programmatischem `value`-Set). | Funktion wird nach `loadExample()` & `clearEditor()` manuell aufgerufen. Bei eigenem JS: `editor.dispatchEvent(new Event('input'))`. |
| **Theme wechselt nicht** | `localStorage` deaktiviert / privat (z. B. Safari Privatmodus). | Manuell per Button wechseln. Präferenz nicht persistiert. |
| **„Kopieren“ schlägt fehl** | `navigator.clipboard` API verweigert (unsichere HTTP-Seite, iframe ohne `allow-clipboard`). | Seite über **HTTPS** oder `localhost` öffnen. |
| **KI-Widget öffnet nicht / keine Antwort** | Worker-URL blockiert (Firewall, AdBlocker), CORS-Fehler, Netzwerk offline. | Prüfe Console: `fetch` zu `carescape-ai.oslamuoslamu.workers.dev`. Deaktiviere Blocker testweise. |
| **Tab-Taste springt aus Editor** | Browser-Fokus-Verhalten (z. B. bei Screenreadern). | Im Code: `e.preventDefault()` bei `Tab` → 2 Leerzeichen. Funktioniert nur bei aktivem Fokus. |

---

## 6. Datenschutz, Berechtigungen & Sicherheit

| Aspekt | Details |
|--------|---------|
| **Lokale Speicherung** | `localStorage`: `theme` (String: `"dark"`/`"light"`). Keine personenbezogenen Daten. |
| **Session-Speicherung (KI-Widget)** | `sessionStorage`: `lamacHistory` (Chat-Verlauf, max. 20 Einträge). Wird bei Tab-Schluss gelöscht. |
| **Externe Ressourcen** | - Google Fonts (`fonts.googleapis.com`) → IP-Übertragung an Google.<br>- Prism.js CDN (`cdnjs.cloudflare.com`) → IP an Cloudflare.<br>- lamacHub Worker (`carescape-ai.oslamuoslamu.workers.dev`) → Chat-Inhalte an Worker. |
| **Kein Backend / Kein Tracking** | Keine Cookies, keine Analytics, keine User-Accounts. |
| **Clipboard API** | Erfordert sicheren Kontext (HTTPS/localhost). |
| **iframe Sandbox** | `allow-scripts allow-same-origin allow-forms` → **Vorsicht:** Geladene Skripte im Preview haben Same-Origin-Zugriff auf den `iframe`-Inhalt, aber **nicht** auf die Elternseite (Cross-Origin). |
| **Möglicher Geheimniswert** | Im KI-Widget-Code ist eine feste Worker-URL hardcoded. Keine API-Keys im Frontend sichtbar. |

---

## 7. FAQ

### ❓ Warum wird mein `<script>` in der Vorschau nicht ausgeführt?
Die Vorschau nutzt ein `iframe` mit `sandbox="allow-scripts allow-same-origin allow-forms"`. Inline-Skripte **sollten** laufen. Prüfe die Console **im iframe** (Rechtsklick in Vorschau → Untersuchen → Console). Externe Skripte (`<script src="...">`) benötigen CORS-Erlaubnis.

### ❌ Kann ich CSS/JS in separaten Dateien einbinden?
**Nein.** Der Editor akzeptiert nur **ein einzelnes HTML-Dokument**. Du musst `<style>` und `<script>` Tags direkt im Editor schreiben. Das Beispiel zeigt dies vor.

### 💾 Wird mein Code serverseitig gespeichert?
**Nein.** Alles läuft clientseitig. „Speichern“ löst nur einen lokalen Download aus. Beim Neuladen ist der Editor leer (außer du lädst das Beispiel).

### 🌙 Warum ist der Dunkelmodus nach Neuladen weg?
`localStorage` wird verwendet. Wenn du im **Privatmodus** (Incognito) bist oder `localStorage` blockierst, fällt es auf Default (Hellmodus) zurück.

### 🤖 Was passiert mit meinen Chat-Nachrichten im KI-Widget?
Sie werden an `https://carescape-ai.oslamuoslamu.workers.dev/` gesendet. Der Verlauf liegt nur in `sessionStorage` (Browser-Tab). **Keine Garantie** für Vertraulichkeit – lies die Datenschutzrichtlinie des Anbieters (lamacHub), falls vorhanden.

### ⌨️ Warum funktioniert `Tab` nicht wie in VS Code (Einzug ganzer Blöcke)?
Der Editor ist ein natives `<textarea>`. Der Code fängt nur **einzelne Tab-Tasten** ab und fügt **2 Leerzeichen** ein. Block-Einzug (Shift+Tab, Mehrzeilig) ist **nicht implementiert**.

### 📱 Funktioniert es auf Mobilgeräten?
**Ja**, Layout wird bei `<1000px` einspaltig. Editor & Vorschau stapeln sich. Touch-Scroll im Editor funktioniert. KI-Widget ist responsive.

### 🔧 Kann ich Prism-Themes ändern?
Im Quellcode ist `prism-tomorrow.min.css` fest eingebunden. **Nicht konfigurierbar** ohne Code-Änderung.

---

## 8. Technische Hinweise für Entwickler (aus Quellcode ersichtlich)

- **Kein Build-Schritt** – alles Vanilla JS/HTML/CSS in einer Datei.
- **Prism.js** wird für Highlighting & Zeilennummern genutzt (`data-line` Attribut wird nicht verwendet, Zeilennummern via `#lineNumbers` Div).
- **Debounce** (300 ms) auf `input`-Event für Preview-Update.
- **Blob-Download** für Speichern (`URL.createObjectURL`).
- **Theme-Logik**: `data-theme="dark"` auf `<html>` + CSS-Variablen.
- **KI-Widget** ist ein **fremdes Modul** (RTF-ähnlicher String im HTML-Kommentar? → **Im Quellcode nicht eindeutig erkennbar**, wie es injiziert wird. Es steht als Text im `<head>` nach `</style>`, aber **nicht** im DOM-Baum. Vermutlich per Server-Side-Include oder Build-Tool eingefügt. Im gelieferten Quelltext erscheint es als roher Text *außerhalb* von HTML-Tags – **das ist ein Artefakt der Quellcode-Lieferung**, kein lauffähiger Code an dieser Stelle.)

> **Hinweis:** Der KI-Widget-Code im Quelltext erscheint **nach `</style>` und vor `<body>` als roher RTF/HTML-Mix**. In einer echten `index.html` wäre er entweder im `<body>` oder per JS injiziert. **Im Quellcode nicht eindeutig erkennbar**, wie er produktiv eingebunden wird.

---

## 9. Bekannte Limitationen (aus Code ableitbar)

1. **Kein Undo/Redo** über Buttons (nur Browser-nativ via Strg+Z).
2. **Keine Datei-Öffnen-Funktion** (nur Download).
3. **Ke
