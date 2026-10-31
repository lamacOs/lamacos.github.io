<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Live-WEBcam -->
<!-- source-files: ["Live-WEBcam/index.html"] -->

# Support-Dokumentation: Live-WEBcam

**Website-Name:** Live-WEBcam (Titel im Browser-Tab: „lamacOs — Live Kamera“)  
**Vermuteter Zweck:** Eine Webanwendung zur Anzeige eines Live-Kamerastreams (Webcam) mit Einbindung eines KI-gestützten Support-Chats (lamacHub Kundenservice). Die Seite bietet Theme-Umschaltung (Hell/Dunkel), einen Bereich für Video-Streaming, eine Code-Anzeige (vermutlich für Zugriffscodes/Session-IDs) und Eingabefelder für Benutzerinteraktion.  
**Quellcode-Pfad:** `Live-WEBcam/index.html`  
**Datum der Erstellung:** 2025-08-15 (basierend auf heutigem Datum, da im Quellcode kein Erstellungsdatum enthalten ist)

---

## 1. Überblick & Voraussetzungen

### 1.1 Zweck der Website
Die Seite dient als **Live-Kamera-Interface** (vermutlich für Überwachung, Remote-Zugriff oder Streaming-Zwecke) unter der Marke „lamacOs“. Ergänzend ist ein **KI-Support-Chat** („lamacHub Kundenservice“) fest in die Seite eingebettet, der über einen schwebenden Button erreichbar ist.

### 1.2 Technische Voraussetzungen (Client-Seite)
| Anforderung | Details |
|-------------|---------|
| **Browser** | Moderner Browser mit Unterstützung für: `fetch` API, `Web Workers` (für den Chat-Worker), `CSS Custom Properties`, `backdrop-filter`, `IntersectionObserver` (nicht explizit, aber moderne Features), `video` Element (HTML5). Getestet: Chrome/Edge 90+, Firefox 88+, Safari 14+. |
| **JavaScript** | Muss aktiviert sein (die gesamte UI-Logik, Theme-Wechsel, Chat, Video-Handling laufen clientseitig). |
| **Netzwerk** | Zugriff auf `https://carescape-ai.oslamuoslamu.workers.dev/` (Chat-Backend/Worker). Für den Video-Stream: je nach Implementierung Zugriff auf Kameraserver/WebRTC/Signaling-Server (im Quellcode nicht vollständig sichtbar). |
| **Berechtigungen** | Kamera-/Mikrofonzugriff **nicht** direkt im Quellcode angefordert (kein `getUserMedia`). Die Seite zeigt vermutlich einen *externen* Stream (z. B. RTMP/HLS/WebRTC via `<video src="...">`). Falls doch lokale Kamera genutzt werden soll: Browser-Berechtigung nötig. |
| **Cookies/LocalStorage** | Wird für Theme-Persistenz (`localStorage.setItem('theme', ...)`) und Chat-History (`sessionStorage.setItem('lamac_ai_history', ...)`) genutzt. |
| **Bildschirm** | Responsive ab 320 px Breite (Mobile First). |

### 1.3 Nicht eindeutig erkennbar / Vermutungen
- **Video-Quelle:** Im HTML ist ein `<video>`-Element ohne `src` oder `srcObject` vorhanden. Die Zuweisung erfolgt vermutlich per JavaScript (nicht im Ausschnitt enthalten). Ob es sich um WebRTC, HLS (m3u8), MJPEG oder einen statischen Platzhalter handelt, ist **im Quellcode nicht eindeutig erkennbar**.
- **Authentifizierung/Accounts:** Keine Login-Formulare, Token-Handling oder User-Session-Logik im Ausschnitt sichtbar. **Im Quellcode nicht eindeutig erkennbar**, ob die Seite öffentlich oder geschützt ist.
- **Backend/API:** Außer dem Chat-Worker (`carescape-ai.oslamuoslamu.workers.dev`) sind keine weiteren API-Endpunkte im Codeausschnitt zu sehen.
- **Code-Display:** Zeigt einen großen Code (monospace, 2.5rem). Vermutlich ein **Zugangscode / Session-ID / Pairing-Code** für die Kamera. Genauer Verwendungszweck **nicht eindeutig erkennbar**.

---

## 2. Sichtbare Bereiche & UI-Elemente

### 2.1 Navbar (fixiert oben)
| Element | Bezeichnung / ARIA | Funktion |
|---------|-------------------|----------|
| Logo | `<img class="navbar-logo" src="logo.png" alt="">` (36×36 px) | Markenlogo (Datei `logo.png` erwartet im selben Verzeichnis). |
| Titel | „lamacOs“ (`.navbar-title`) | Schriftzug, Farbanpassung je Theme. |
| Theme-Toggle | Button „☀️“ / „🌙“ (`.theme-toggle`, `aria-label` fehlt) | Umschaltung Hell-/Dunkelmodus. Speichert Wahl in `localStorage`. |

> **Hinweis:** Der Theme-Button hat **kein `aria-label`** – Barrierefreiheitseinschränkung.

### 2.2 Hauptbereich (`.container`, zentriert, vertikal mittig)
Die Seite nutzt **Sections** (`.section`), von denen jeweils eine `.active` angezeigt wird. Im Ausschnitt sind folgende Sections im HTML **nicht vollständig sichtbar** (nur CSS-Klassen definiert), aber die Struktur legt nahe:
- **Start/Willkommen** (Button-Gruppe `.button-group` mit `.btn` Buttons)
- **Video-Ansicht** (`.video-section` → `.video-card` → `<video>`)
- **Code-Anzeige** (`.code-display` mit `<h2>` für den Code)
- **Eingabe** (`<input>` für Code-Eingabe, Großbuchstaben, Buchstabenabstand)
- **Status/Steuerung** (`.status` Box + `.control-buttons`)

### 2.3 Video-Karte (`.video-card`)
- Container mit Rand, Schatten, abgerundeten Ecken.
- `<video>` Element: `width: 100%`, `min-height: 200px`, schwarzer Hintergrund (`background: #000`).
- **Keine Controls** (`controls`-Attribut fehlt) → Steuerung muss per JS oder Overlay erfolgen.

### 2.4 Code-Anzeige (`.code-display`)
- Farbiger Rahmen (Accent-Farbe `#ff7a00`), Gradient-Hintergrund.
- Beschriftung: `<p>` (gedämpft, z. B. „Ihr Zugangscode“).
- Code: `<h2>` monospace, 2.5rem, Buchstabenabstand 3px, Großbuchstaben.

### 2.5 Eingabefeld (`<input>`)
- Vollbreite, zentriert, Großbuchstaben (`text-transform: uppercase`), Buchstabenabstand 2px.
- Fokus-Ring in Accent-Farbe.

### 2.6 Status-Box (`.status`)
- Links farbiger Balken (3px): Standard (Accent), `.connecting` (Orange `#f59e0b`), `.connected` (Grün `#10b981`), `.error` (Rot `#ef4444`).
- Text linksbündig, gedämpfte Schrift.

### 2.7 Footer
- Einfacher Text, zentriert, gedämpft, kleine Schrift (0.85rem). Inhalt im Ausschnitt leer (`<footer></footer>`).

### 2.8 KI-Support-Chat (lamacHub) – **fest eingebettet am Seitenende**
| Element | ID / Klasse | Beschreibung |
|---------|-------------|--------------|
| Öffnen-Button | `#lamac-ai-open` | Schwebend rechts unten (60×60 px), grün (`#007e62`), Icon „💬“ (Unicode). `aria-label="Kundensupport öffnen"`. |
| Chat-Fenster | `#lamac-ai-window` | Initial `display:none`, bei `.open` → `flex`, feste Größe (max 390×570 px), abgerundet, Schatten. |
| Header | `#lamac-ai-window > header` | Dunkelgrün, Titel „lamacHub Kundenservice“, Untertitel „KI-gestützter Support“, Schließen-Button (×). |
| Nachrichtenbereich | `#lamac-ai-messages` | Scrollbar, `aria-live="polite"`, Bot-Nachrichten (`.lamac-bot`, weiß, links), User-Nachrichten (`.lamac-user`, hellgrün, rechts). Markdown-Rendering (siehe unten). |
| Eingabeformular | `#lamac-ai-form` | Input (`maxlength=1800`), Senden-Button (Pfeil ➤). Enter zum Senden. |
| Typing-Indikator | `.lamac-typing` | Drei animierte Punkte beim Warten auf Antwort. |

**Chat-Features (aus JS):**
- Markdown-Rendering: Überschriften, Listen, Blockquotes, Code (inline & Block), Tabellen, Links.
- History in `sessionStorage` (`lamac_ai_history`).
- Streaming-Antworten via `fetch` an `WORKER_URL` (Cloudflare Worker).
- Rate-Limit/Fehlerbehandlung (429, 500, Netzwerkfehler).
- `AbortController` für Abbruch bei neuem Senden.
- Reduzierte Animation bei `prefers-reduced-motion`.

---

## 3. Bedienung – Schritt für Schritt

### 3.1 Theme wechseln (Hell / Dunkel)
1. Klicke auf den Button **„☀️“** (Hellmodus) oder **„🌙“** (Dunkelmodus) rechts in der Navbar.
2. Die Seite wechselt sofort die Farbpalette (CSS-Variablen).
3. Die Einstellung wird im `localStorage` unter Schlüssel `'theme'` gespeichert und beim nächsten Besuch automatisch geladen.

### 3.2 Live-Kamera ansehen (Video-Section)
> **Voraussetzung:** Die Section `.video-section` muss aktiv sein (`.active` Klasse). Wie dorthin navigiert wird (Buttons, Routing), ist **im Quellcode nicht eindeutig erkennbar** (kein Router, keine Navigation im Ausschnitt).

1. Sobald die Video-Section sichtbar ist, lädt das `<video>`-Element den Stream.
2. **Steuerung:** Im Quellcode **keine** nativen `controls` und **keine** sichtbaren Play/Pause/Volume-Buttons im HTML. Steuerung erfolgt vermutlich per JavaScript (nicht im Ausschnitt).
3. **Vollbild:** Browser-eigenes Kontextmenü (Rechtsklick → „Vollbild“) möglich, sofern Stream dies zulässt.

### 3.3 Zugangscode anzeigen / eingeben
**Code anzeigen (Code-Display):**
- Wird automatisch in der `.code-display` Box angezeigt, sobald die entsprechende Section aktiv ist.
- Format: Großbuchstaben, monospace, gruppiert (Buchstabenabstand 3px).

**Code eingeben (Input-Feld):**
1. Klicke in das Eingabefeld (Platzhalter fehlt im HTML, aber `text-transform: uppercase` erzwingt Großbuchstaben).
2. Tippe den Code ein (Buchstaben/Ziffern). Leerzeichen werden nicht automatisch eingefügt.
3. Drücke **Enter** oder klicke den zugehörigen Button (`.control-buttons` – Beschriftung im Ausschnitt nicht sichtbar).
4. Status-Box zeigt Ergebnis: „Verbinde…“ (orange), „Verbunden“ (grün), „Fehler“ (rot).

### 3.4 KI-Support-Chat nutzen
1. **Öffnen:** Klicke auf den grünen runden Button **„💬“** (rechts unten, `aria-label="Kundensupport öffnen"`).
2. **Chat-Fenster** öffnet sich mit Begrüßung: „Hallo! Wie kann ich dir weiterhelfen?“.
3. **Nachricht schreiben:** Klicke in das Eingabefeld („Nachricht schreiben …“), tippe Text (max. 1800 Zeichen).
4. **Senden:** Drücke **Enter** oder klicke den Pfeil-Button **„➤“**.
5. **Antwort warten:** Typing-Indikator (drei Punkte) erscheint, dann Bot-Antwort mit Markdown-Formatierung.
6. **Schließen:** Klicke auf **„×“** oben rechts im Chat-Header.
7. **Verlauf:** Bleibt in der Session erhalten (`sessionStorage`). Nach Tab-Schließen weg.

---

## 4. Eingaben & Ausgaben

| Bereich | Eingabe (User) | Ausgabe (System) | Validierung / Limits |
|---------|----------------|------------------|----------------------|
| **Theme-Toggle** | Klick | UI-Farben wechseln, `localStorage` Update | – |
| **Code-Eingabe** | Text (A-Z, 0-9), max. Länge nicht im HTML begrenzt (`maxlength` fehlt) | Status-Text (Verbinde/Verbunden/Fehler), evtl. Video-Start | Serverseitige Validierung **nicht im Code sichtbar** |
| **Chat-Input** | Text, max. 1800 Zeichen (`maxlength="1800"`) | Bot-Antwort (Markdown gerendert), History in `sessionStorage` | Clientseitig: `required`, `maxlength`. Serverseitig: Worker prüft (Rate-Limit 429). |
| **Video** | Keine direkte Eingabe im HTML | Video-Stream (Blob/URL/WebRTC) | Abhängig von Stream-Quelle (CORS, Codecs). |

---

## 5. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache (basierend auf Code) | Prüfung / Lösung |
|---------|----------------------------------------|------------------|
| **Video bleibt schwarz / „Kein Signal“** | `<video>` hat kein `src` / `srcObject` gesetzt. JS-Logik zum Laden fehlt oder schlägt fehl. | 1. DevTools → Console: Fehler prüfen (z. B. `Failed to load stream`).<br>2. Network-Tab: Stream-Request (m3u8, WebRTC Offer/Answer, MP4) prüfen.<br>3. Prüfen, ob Signaling-Server erreichbar ist (nicht im Code sichtbar). |
| **Theme wechselt nicht / wird nicht gespeichert** | `localStorage` blockiert (Privater Modus, Cookie-Blocker), JS-Fehler im Theme-Script. | 1. Console: `localStorage.setItem` Fehler?<br>2. Manuell testen: `localStorage.setItem('theme','dark')` → Reload. |
| **Chat öffnet nicht / Button fehlt** | `#lamac-ai` Container nicht gerendert (Script am Ende gekürzt), JS-Fehler vor Initialisierung. | 1. Prüfen, ob das `<script>`-Tag für Chat vollständig geladen ist (Ausschnitt endet mittendrin).<br>2. Console: `Uncaught SyntaxError` oder `WORKER_URL` blockiert (CSP, Adblocker). |
| **Chat sendet, aber keine Antwort** | Worker-URL `https://carescape-ai.oslamuoslamu.workers.dev/` nicht erreichbar, CORS, Rate-Limit (429), Worker-Fehler (500). | 1. Network-Tab: POST an Worker-URL → Status prüfen.<br>2. 429: Warten / weniger Requests.<br>3. 500/Netzwerk: Admin kontaktieren (Worker-Log). |
| **Chat-Verlauf weg nach
