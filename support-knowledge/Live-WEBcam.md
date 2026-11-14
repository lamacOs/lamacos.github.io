<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Live-WEBcam -->
<!-- source-files: ["Live-WEBcam/index.html"] -->

# Support-Dokumentation: Live-WEBcam

**Website-Name:** Live-WEBcam (Titel im Browser-Tab: „lamacOs — Live Kamera“)  
**Vermuteter Zweck:** Webbasierte Anwendung zum Anzeigen eines Live-Kamerabildes (Video-Stream) und zur Generierung/Anzeige eines Zugangscodes. Enthält ein integriertes KI-Support-Widget (lamacHub Kundenservice).  
**Quellcode-Pfad:** `Live-WEBcam/index.html`  
**Datum der Erstellung:** 2025-08-17 (basierend auf heutigem Datum)  

---

## 1. Überblick

Die Seite besteht aus einer Single-Page-Application (SPA) mit drei Hauptbereichen (Sections), zwischen denen per Buttons navigiert wird:
1. **Startseite** – Einstieg mit Navigation zu den Funktionen.
2. **Live Kamera** – Anzeige eines Video-Streams (Webcam/Kamera) mit Verbindungsstatus und Steuerung.
3. **Zugangscode** – Anzeige eines generierten Codes (Format `XXXX-XXXX`) sowie Eingabefeld für Codes.

Zusätzlich ist ein **KI-Support-Chat** (lamacHub Kundenservice) fest in der Seite eingebettet, der über einen schwebenden Button geöffnet wird.

---

## 2. Voraussetzungen (Client-Seite)

| Anforderung | Details |
|-------------|---------|
| Browser | Moderner Browser mit Unterstützung für `getUserMedia` (WebRTC), `fetch`, `localStorage`, CSS-Variablen, `backdrop-filter`. Getestet: Chrome/Edge 100+, Firefox 100+, Safari 15+. |
| Berechtigungen | **Kamera & Mikrofon** (für Live-Kamera-Bereich). Der Browser fragt beim Start des Streams nach Erlaubnis. |
| Netzwerk | HTTPS (oder `localhost`) – `getUserMedia` erfordert sicheren Kontext. Für den KI-Chat: ausgehende Verbindung zu `https://carescape-ai.oslamuoslamu.workers.dev/`. |
| JavaScript | Muss aktiviert sein (gesamte Logik läuft clientseitig). |
| Viewport | Responsive ab 320 px Breite (Mobile First). |

> **Hinweis:** Serverseitige Komponenten (Signaling, TURN/STUN, Backend für Code-Verwaltung) sind **im vorliegenden Quellcode nicht enthalten**. Die Seite scheint als Frontend-Prototyp oder Demo konzipiert zu sein.

---

## 3. Sichtbare Bereiche & Navigation

### 3.1 Navbar (fix oben)
- **Logo** (36×36 px, `logo.png`) + Titel **„lamacOs“**.
- **Theme-Toggle** (Button mit Icon `☀️`/`🌙`) – wechselt zwischen Light/Dark Mode. Speichert Wahl in `localStorage` (`theme`).

### 3.2 Sections (nur eine gleichzeitig sichtbar)
| Section-ID | Überschrift | Hauptinhalt |
|------------|-------------|-------------|
| `home` | „Live Kamera“ / „Verbinde dich mit deiner Kamera in Echtzeit“ | Zwei Buttons: **„Live Kamera starten“** → wechselt zu `video`, **„Zugangscode generieren“** → wechselt zu `code`. |
| `video` | „Live Kamera“ | Video-Element (`<video id="videoElement" autoplay playsinline muted>`), Statusanzeige, Buttons: **„Kamera starten“**, **„Kamera stoppen“**, **„Zurück“**. |
| `code` | „Zugangscode“ | Großer Code-Display (`XXXX-XXXX`), Eingabefeld für Code, Button **„Code prüfen“**, **„Neuen Code generieren“**, **„Zurück“**. |

### 3.3 Footer
- Copyright-Hinweis: „© 2025 lamacOs. Teil von lamacHub.“
- Links: **Datenschutz**, **Impressum** (href=`#` – **Ziel im Quellcode nicht eindeutig erkennbar**).

### 3.4 KI-Support-Widget (rechts unten)
- **Öffnen-Button** (grüner Kreis, Icon `💬`).
- **Fenster** (390 × 570 px, dunkelgrüner Header „lamacHub Kundenservice“, Chat-Verlauf, Eingabefeld max. 1800 Zeichen, Senden-Button `✈️`).
- Kommunikation mit Worker: `https://carescape-ai.oslamuoslamu.workers.dev/` (POST, JSON, Streaming-Antwort).
- Markdown-Rendering im Bot-Antworten (Tabellen, Code-Blöcke, Listen, Links).

---

## 4. Bedienung Schritt für Schritt

### 4.1 Theme wechseln
1. Klicke auf den **Theme-Button** (☀️/🌙) in der Navbar.
2. Seite wechselt sofort; Einstellung bleibt beim Neuladen erhalten.

### 4.2 Live-Kamera starten
1. Auf Startseite Button **„Live Kamera starten“** klicken → Section `video` wird eingeblendet.
2. Button **„Kamera starten“** klicken.
   - Browser fragt nach Kamera-Berechtigung → **Zulassen**.
   - Video-Element zeigt Live-Bild.
   - Status wechselt zu **„Verbunden“** (grün).
3. **„Kamera stoppen“** beendet Stream, schaltet Kamera-LED aus, Status **„Getrennt“**.
4. **„Zurück“** führt zur Startseite.

### 4.3 Zugangscode generieren & prüfen
1. Startseite → **„Zugangscode generieren“** → Section `code`.
2. Automatisch wird ein Code `XXXX-XXXX` (Großbuchstaben/Ziffern, ohne Verwechslungszeichen) angezeigt.
3. **„Neuen Code generieren“** erstellt neuen Code.
4. Im Eingabefeld kann ein Code eingegeben werden (automatisch Großbuchstaben, Bindestrich nach 4. Zeichen).
5. **„Code prüfen“** vergleicht Eingabe mit angezeigtem Code → Status **„Code stimmt überein“** (grün) oder **„Code stimmt nicht überein“** (rot).

### 4.4 KI-Support nutzen
1. Klicke auf **Chat-Button** (rechts unten `💬`).
2. Fenster öffnet sich mit Begrüßung.
3. Nachricht tippen (max. 1800 Zeichen), **Enter** oder **Senden-Button** `✈️`.
4. Antwort erscheint als Markdown (Code-Blöcke, Tabellen, Links klickbar).
5. **Schließen** via `×` im Header oder Klick außerhalb (nicht implementiert – **nur Close-Button**).

---

## 5. Eingaben & Ausgaben

| Bereich | Eingabe | Ausgabe / Reaktion |
|---------|---------|---------------------|
| Kamera | Button „Kamera starten“ | Video-Stream (lokal), Status-Text, Button-Zustände |
| Kamera | Button „Kamera stoppen“ | Stream endet, Video schwarz, Status „Getrennt“ |
| Code | Auto bei Section-Show | Neuer Code `XXXX-XXXX` im Display |
| Code | Button „Neuen Code generieren“ | Neuer Code |
| Code | Texteingabe + „Code prüfen“ | Status: „stimmt überein“ / „stimmt nicht überein“ |
| Chat | Text + Senden | Bot-Antwort (Markdown), Typing-Indikator während Wartezeit |
| Theme | Button-Klick | CSS-Variablen wechseln, Icon ändert sich, `localStorage` Update |

---

## 6. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache (basierend auf Code) | Abhilfe |
|---------|----------------------------------------|---------|
| Kamera startet nicht, Status „Fehler: Could not start camera“ | Keine Kamera angeschlossen, Berechtigung verweigert, unsicherer Kontext (HTTP), anderer Tab nutzt Kamera exklusiv. | HTTPS/`localhost` prüfen, Browser-Berechtigungen → Kamera erlauben, andere Tabs schließen, Gerät anschließen. |
| Video bleibt schwarz / „Getrennt“ | `getUserMedia` liefert Stream, aber `<video>` spielt nicht ab (z. B. `autoplay` blockiert). | Seite neu laden, Browser-Update, manuell `videoElement.play()` in DevTools testen. |
| Code-Prüfung funktioniert nicht | Eingabe wird auf Großbuchstaben normiert, Bindestrich auto-gesetzt. Falsche Eingabe (z. B. Kleinbuchstaben) wird korrigiert. | Nur A-Z, 0-9 eingeben; Format `XXXX-XXXX` beachten. |
| Chat sendet nicht / „Fehler bei der Anfrage“ | Worker-URL nicht erreichbar (`carescape-ai.oslamuoslamu.workers.dev`), CORS, Netzwerk-Fehler, Rate-Limit. | Internet prüfen, Adblocker/Proxy testen, später erneut versuchen. |
| Theme wird nicht gespeichert | `localStorage` deaktiviert (Privater Modus, Browser-Einstellung). | `localStorage` zulassen, Cookies/Site-Daten erlauben. |
| Navbar/Chat auf Mobile abgeschnitten | CSS `fixed`/`bottom`/`right` Werte, Viewport-Meta vorhanden. | Im Quellcode Media-Queries bis 480 px vorhanden – **auf echten Geräten testen**. |

---

## 7. Datenschutz & Berechtigungen

| Aspekt | Umsetzung im Code |
|--------|-------------------|
| **Kamera/Mikrofon** | Werden **nur** nach explizitem Klick auf „Kamera starten“ angefordert (`getUserMedia({ video: true, audio: false })`). Stream bleibt lokal im `<video>`-Element – **kein Upload, kein Recording** im vorliegenden Code. |
| **Theme-Präferenz** | Gespeichert in `localStorage` (`theme`), nur clientseitig. |
| **Chat-Verlauf** | Wird im Speicher (`history` Array) gehalten und bei jedem Request an den Worker mitgesendet. **Nicht** in `localStorage` persistiert (Seite neu laden → Verlauf weg). |
| **Externe Verbindungen** | 1. Google Fonts (`fonts.googleapis.com`) – lädt Schrift „Inter“. 2. Worker-API (`carescape-ai.oslamuoslamu.workers.dev`) – sendet Chat-Nachrichten + Historie. 3. `logo.png` (lokal). |
| **Cookies** | Keine Cookie-Nutzung im Code erkennbar. |
| **Datenschutz/Impressum Links** | Platzhalter (`href="#"`) – **Ziel im Quellcode nicht eindeutig erkennbar**. |

> **Hinweis:** Da kein Backend-Code vorliegt, können keine Aussagen zu serverseitiger Speicherung, Logs oder Datenweitergabe getroffen werden.

---

## 8. Technische Details (für Entwickler/Support)

### 8.1 State-Management (Vanilla JS)
- `currentSection` – aktive Section (`home`, `video`, `code`).
- `stream` – `MediaStream` Objekt der Kamera.
- `currentCode` – aktueller Zugangscode (String).
- `history` (Chat) – Array von `{ role: 'user'|'assistant', content: string }`.

### 8.2 Wichtige Funktionen (Auszug)
| Funktion | Zweck |
|----------|-------|
| `showSection(id)` | Blendet Sections ein/aus (CSS-Klasse `active`). |
| `generateCode()` | Erzeugt 8-stelligen Code aus `ABCDEFGHJKLMNPQRSTUVWXYZ23456789` (kein I, O, 1, 0). Format `XXXX-XXXX`. |
| `startCamera()` / `stopCamera()` | Holt/beendet `MediaStream`, bindet an `<video>`. |
| `checkCode()` | Vergleicht normierte Eingabe mit `currentCode`. |
| `sendMessage()` | Baut Request an Worker (POST, JSON, `stream: true`), verarbeitet SSE-ähnliche Text-Chunks, rendert Markdown. |
| `renderMarkdown()` | Eigene Implementierung (keine externe Lib) – unterstützt: Headlines, Listen, Tabellen, Code-Blöcke, Blockquotes, Links, Inline-Code, HR. |

### 8.3 CSS-Architektur
- **Custom Properties** für Theming (`--accent`, `--bg`, `--text`, …).
- `[data-theme="dark"]` Selektor auf `<html>`.
- Mobile First, Breakpoints: 768 px, 480 px.
- Animationen: `fadeIn` (Sections), `lamac-ai-appear` (Chat), `bounce` (Typing-Dots).

### 8.4 Externe Abhängigkeiten
| Ressource | Zweck | SRI / Integrität |
|-----------|-------|------------------|
| `https://fonts.googleapis.com/css2?family=Inter...` | Schriftart Inter | **Nicht im Code** (kein `integrity`-Attribut). |
| `https://carescape-ai.oslamuoslamu.workers.dev/` | KI-Chat Backend | **Nicht im Code** (kein `integrity`). |
| `logo.png` | Logo in Navbar | Lokal, relativ. |

---

## 9. FAQ

**F: Warum funktioniert die Kamera auf meinem iPhone/Safari nicht?**  
A: Safari erfordert Benutzerinteraktion (Klick) für `autoplay`. Der Code nutzt `playsinline muted` und startet per Button – das ist korrekt. Prüfen Sie **Einstellungen → Safari → Kamera → „Fragen“ oder „Erlauben“**. HTTPS zwingend.

**F: Wo wird der Zugangscode gespeichert?**  
A: Nur im Speicher (`currentCode` Variable). Beim Neuladen der Seite wird ein **neuer Code generiert**. Keine Persistenz in `localStorage` oder Server.

**F: Kann ich den Chat-Verlauf exportieren?**  
A: **Im Quellcode nicht vorgesehen.** Der Verlauf liegt nur im JS-Array `history`. Kein Export-Button, kein Download.

**F: Wie ändere ich die Worker-URL für den Chat?**  
A: Im Skript-Block des Chat-Widgets: Konstante `WORKER_URL` anpassen. **Im Quellcode hardcodiert.**

**F: Gibt es eine API für die Kamera (z. B. Snapshots, Filter)?**  
A: **Im Quellcode nicht eindeutig erkennbar.** Nur Start/Stop/Anzeige.

**F: Warum lädt die Schrift „Inter“ nicht offline?**  
A: Google Fonts wird per `<link>` nachgeladen. Ohne Internet fällt Browser auf System-Schrift zurück (CSS `font-family: Inter, sans-serif`).

**F: Ist die Seite barrierefrei (a11y)?**  
A: Teilweise: `aria-label` an Buttons, `aria-live` im Chat, semantische Buttons, Fokus-Styles (`outline` auf Inputs). Fehlend: Tastaturnavigation für Chat-Schließen (nur Maus), Kontrast-Prüfung obliegt Deployment.

---

## 10. Bekannte Limitationen (aus Quellcode-Sicht)

1. **Kein Signaling/Backend für WebRTC
