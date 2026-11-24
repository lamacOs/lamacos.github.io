<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Live-WEBcam -->
<!-- source-files: ["Live-WEBcam/index.html"] -->

# Support-Dokumentation: Live-WEBcam

**Website-Name:** Live-WEBcam (Titel im Browser-Tab: „lamacOs — Live Kamera“)  
**Vermuteter Zweck:** Bereitstellung einer Web-Oberfläche zum Anzeigen eines Live-Kamerastreams, geschützt durch einen Raum-Code (PIN), mit Dark-/Light-Mode und integriertem KI-Support-Chat.  
**Quellcode-Pfad:** `Live-WEBcam/index.html`  
**Datum der Erstellung:** 2025-08-13  

---

## 1. Überblick

Die Seite besteht aus einer einzigen HTML-Datei, die Struktur, Styles und Client-Logik enthält. Sie lädt Google Fonts (Inter) und bindet ein KI-Chat-Widget (`lamac-ai`) ein, das über einen Web-Worker (`https://carescape-ai.oslamuoslamu.workers.dev/`) mit einem Backend kommuniziert.

**Hauptfunktionen (aus Code ableitbar):**
- Themen-Umschaltung (Light/Dark) mit Persistenz im `localStorage`.
- Drei Bildschirm-Abschnitte (Sections): Start, Code-Eingabe, Video-Anzeige.
- PIN-Eingabe (6-stellig, Großbuchstaben/Ziffern) mit Validierung.
- Einbindung eines Live-Video-Streams via `<video>`-Element (Quelle wird per JS gesetzt).
- KI-Support-Chat (Widget rechts unten) mit Markdown-Rendering, Tipp-Indikator, History.

**Nicht im Quellcode erkennbar:**  
- Backend-API für Stream-Erstellung/Validierung (nur Frontend-Logik sichtbar).  
- WebRTC-Signaling-Details (nur `peerConnection`/`DataChannel`-Anlage angedeutet).  
- Authentifizierung, Nutzerkonten, Preis-Modelle, Admin-Oberflächen.

---

## 2. Voraussetzungen (Client-Seite)

| Anforderung | Details |
|-------------|---------|
| Browser | Moderner Browser mit ES6-Modulen, `MediaDevices API`, `WebRTC (RTCPeerConnection)`, `Web Workers`, `localStorage`. |
| Berechtigungen | Keine direkten Kamera-/Mikrofon-Rechte für den Besucher (nur Empfang). Falls der Stream per `getUserMedia` vom Broadcaster kommt, betrifft das nicht diese Seite. |
| Netzwerk | Zugriff auf `https://carescape-ai.oslamuoslamu.workers.dev/` (KI-Chat) sowie auf das Signaling-/Stream-Backend (im Code als `SIGNALING_SERVER` / `STUN_SERVERS` referenziert, Werte nicht im Ausschnitt). |
| Cookies/Storage | `localStorage` für Theme (`lamac-theme`) und Chat-History (`lamac-ai-history`). |
| Viewport | Responsive ab 320 px Breite. |

---

## 3. Sichtbare Bereiche & Navigation

### 3.1 Navbar (fix oben)
| Element | Bezeichnung / ARIA | Funktion |
|---------|-------------------|----------|
| Logo | `<img class="navbar-logo" src="logo.svg">` | Visuelles Branding. |
| Titel | „lamacOs Live Kamera“ (`.navbar-title`) | Seiten-Titel. |
| Theme-Toggle | Button `.theme-toggle` (Icon: ☀️/🌙) | Umschaltung Light ↔ Dark Mode. |

### 3.2 Haupt-Container (zentriert, max. 1200 px)
Drei **Sections** (nur eine gleichzeitig sichtbar, Klasse `.active`):

1. **Start-Seite** (`#start-section`)  
   - Überschrift: „Live Kamera“  
   - Text: „Verbinde dich mit einem Live-Stream, indem du einen Raum-Code eingibst.“  
   - Button: **„Raum betreten“** (`.btn`, `data-section="code"`) → wechselt zur Code-Eingabe.

2. **Code-Eingabe** (`#code-section`)  
   - Überschrift: „Raum-Code eingeben“  
   - Eingabefeld: `<input id="code-input" maxlength="6" placeholder="ABC123">` (Großbuchstaben, Ziffern, 6 Stellen).  
   - Buttons:  
     - **„Verbinden“** (`.btn`, `id="connect-btn"`) → startet Validierung & Stream-Aufbau.  
     - **„Zurück“** (`.btn-secondary`, `data-section="start"`) → zurück zur Start-Seite.  
   - Status-Bereich: `<div id="code-status" class="status">` (Farbcodes: gelb=verbinde, grün=verbunden, rot=Fehler).

3. **Video-Anzeige** (`#video-section`)  
   - Überschrift: „Live Stream“  
   - Video-Card: `<div class="video-card"><video id="video-element" autoplay playsinline muted></video></div>`  
   - Code-Anzeige: `.code-display` mit großem Raum-Code (Monospace, Buchstabenabstand).  
   - Buttons:  
     - **„Kopieren“** (`.btn-secondary`, `id="copy-code-btn"`, Icon 📋) → kopiert Code in Zwischenablage.  
     - **„Stream beenden“** (`.btn`, `id="disconnect-btn"`) → trennt Verbindung, zurück zur Start-Seite.  
   - Status-Bereich: `<div id="video-status" class="status">`.

### 3.3 Footer
- Text: „© 2025 lamacOs. Teil des lamacHub-Ökosystems.“

### 3.4 KI-Support-Widget (rechts unten, fest positioniert)
- **Öffnen-Button** (`#lamac-ai-open`, Icon 🤖) → öffnet Chat-Fenster.  
- **Chat-Fenster** (`#lamac-ai-window`): Header (Titel, Schließen-×), Nachrichtenbereich (`#lamac-ai-messages`), Eingabeformular (`#lamac-ai-form` mit Input `maxlength="1800"` und Sende-Button ➤).  
- **Features:** Markdown-Rendering (Listen, Code-Blöcke, Tabellen, Links), Tipp-Animation, History-Persistenz (letzte 50 Nachrichten), Enter zum Senden, Shift+Enter für Zeilenumbruch.

---

## 4. Bedienung – Schritt für Schritt

### 4.1 Theme wechseln
1. Klicke auf den **Theme-Toggle** (☀️/🌙) in der Navbar.  
2. Das Theme wechselt sofort; Präferenz wird in `localStorage` (`lamac-theme`) gespeichert und beim nächsten Besuch wiederhergestellt.

### 4.2 Raum betreten & Stream starten
1. Auf der Start-Seite: Button **„Raum betreten“** drücken.  
2. In der Code-Eingabe:  
   - 6-stelligen Code eingeben (Großbuchstaben/Ziffern). Eingabe wird automatisch großgeschrieben.  
   - **„Verbinden“** klicken.  
   - Status wechselt: „Verbinde…“ (gelb) → „Verbunden“ (grün) oder Fehler (rot).  
3. Bei Erfolg: Automatischer Wechsel zur Video-Seite.  
   - Video-Element zeigt Stream (autoplay, muted, playsinline).  
   - Raum-Code groß angezeigt (kopierbar).  
   - Status: „Stream aktiv – Verbunden mit Raum [CODE]“.

### 4.3 Raum-Code kopieren
1. Auf der Video-Seite: Button **„Kopieren“** (📋) drücken.  
2. Bestätigung: Button-Text wechselt kurz zu „Kopiert!“, dann zurück.

### 4.4 Stream beenden
1. Button **„Stream beenden“** drücken.  
2. Video wird gestoppt, Peer-Connection geschlossen, DataChannel geschlossen.  
3. Zurück zur Start-Seite; Eingabefeld geleert, Status zurückgesetzt.

### 4.5 KI-Support-Chat nutzen
1. Klicke auf **🤖** (rechts unten).  
2. Chat-Fenster öffnet sich (Animation).  
3. Nachricht tippen (max. 1800 Zeichen), **Enter** zum Senden, **Shift+Enter** für neue Zeile.  
4. Antworten erscheinen mit Markdown-Formatierung.  
5. Schließen via **×** im Header oder erneuter Klick auf 🤖.  
6. History bleibt erhalten (bis 50 Einträge, `localStorage`).

---

## 5. Eingaben & Ausgaben

| Bereich | Eingabe | Validierung / Verhalten | Ausgabe / Rückmeldung |
|---------|---------|-------------------------|------------------------|
| Code-Input | 6 Zeichen (A-Z, 0-9) | `input`-Event: `toUpperCase()`, `replace(/[^A-Z0-9]/g,'')`, `maxLength=6` | Button „Verbinden“ aktiv nur bei 6 Zeichen. |
| Verbinden | Klick auf „Verbinden“ | Deaktiviert Button, zeigt „Verbinde…“, ruft `initConnection(code)` auf. | Status-Text + Farbe; bei Erfolg Section-Wechsel. |
| Video | Autoplay, muted | Browser-Policy: `muted` nötig für Autoplay. | Live-Bild oder schwarzer Bereich bei Fehler. |
| Kopieren | Klick „Kopieren“ | `navigator.clipboard.writeText(code)` | Temporärer Button-Text „Kopiert!“. |
| Chat-Input | Text ≤ 1800 Zeichen | `required`, `maxlength`, Enter sendet (Shift+Enter = Zeilenumbruch). | User-Blase (grün), Bot-Antwort (weiß, Markdown). |

---

## 6. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache (aus Code ableitbar) | Abhilfe |
|---------|----------------------------------------|---------|
| **Video bleibt schwarz / „Kein Stream verfügbar“** | `initConnection` schlägt fehl (Signaling, ICE, Code ungültig). | Code prüfen (6-stellig, Großbuchstaben). Seite neu laden, erneut versuchen. |
| **„Verbinden“ Button bleibt deaktiviert** | Eingabe < 6 Zeichen oder ungültige Zeichen. | Vollständigen 6-stelligen Code eingeben. |
| **Theme wechselt nicht / wird nicht gespeichert** | `localStorage` blockiert (Privater Modus, Storage-Quota). | Browser-Einstellungen prüfen; manuell Toggle nutzen. |
| **Chat öffnet nicht / keine Antwort** | Worker-URL `https://carescape-ai.oslamuoslamu.workers.dev/` blockiert (CORS, Firewall, Adblocker). | Netzwerk-Tools prüfen (Konsole: „Failed to fetch“), Adblocker pausieren, andere Netzwerk testen. |
| **Chat-History verloren** | `localStorage` geleert, anderer Browser/Profil, >50 Nachrichten (älteste werden gelöscht). | Erwartetes Verhalten; History limitiert auf 50 Einträge. |
| **Copy-Button funktioniert nicht** | `navigator.clipboard` erfordert HTTPS & User-Geste; unsichere Kontexte (http://localhost ohne Secure Context) blockieren es. | Seite über HTTPS oder `localhost` (Secure Context) aufrufen. |
| **Video startet nicht automatisch** | Browser blockiert Autoplay ohne `muted` oder ohne User-Interaktion. | Code nutzt `muted` + `playsinline`; erster Klick auf „Verbinden“ zählt als User-Geste. |

**Debug-Hinweise (für Entwickler/Support):**
- Browser-Konsole (F12) zeigt Logs: `🔗 Verbinde mit Raum:`, `✅ DataChannel offen`, `❌ Verbindungsfehler:`, `🛑 Stream beendet`.
- Network-Tab: WebSocket-/Fetch-Calls zum Signaling-Server & Worker-URL prüfen.
- `localStorage` Keys: `lamac-theme`, `lamac-ai-history`.

---

## 7. Datenschutz & Berechtigungen

| Aspekt | Status im Code |
|--------|----------------|
| **Kamera/Mikrofon Zugriff** | Nicht angefordert (Seite nur Empfänger: `<video autoplay playsinline muted>`). |
| **Cookies** | Keine klassischen Cookies; nur `localStorage`. |
| **Personenbezogene Daten** | Keine Eingabe von Namen, E-Mail etc. Nur Chat-Text (freiwillig) & Raum-Code. |
| **Externe Verbindungen** | - Google Fonts (`fonts.googleapis.com`) → IP-Übertragung an Google.<br>- KI-Worker (`carescape-ai.oslamuoslamu.workers.dev`) → Chat-Inhalte werden dorthin gesendet.<br>- Signaling/STUN-Server (Variablen im JS, Werte nicht im Ausschnitt). |
| **Speicherdauer** | `localStorage` bis manuelles Löschen; Chat-History max. 50 Einträge (FIFO). |
| **Rechte** | Keine Admin-/User-Rollen im Frontend erkennbar. |

**Hinweis:** Da der Quellcode keine Datenschutzerklärung oder Impressum enthält, sollten Betreiber diese separat verlinken (z. B. im Footer).

---

## 8. FAQ

**F: Brauche ich einen Account, um einen Stream anzusehen?**  
A: Im Quellcode nicht erkennbar. Die Seite fragt nur einen 6-stelligen Raum-Code ab. Kein Login-Formular vorhanden.

**F: Kann ich den Stream auf dem Smartphone ansehen?**  
A: Ja. Layout ist responsiv (Viewport-Meta, Media-Queries bis 480 px). Video nutzt `playsinline`, damit es im Browser (nicht Vollbild) läuft.

**F: Warum funktioniert der Chat nicht im Firmennetz?**  
A: Der Chat nutzt einen Cloudflare Worker (`https://carescape-ai.oslamuoslamu.workers.dev/`). Firewalls/Proxies blockieren oft unbekannte Worker-Domains. IT-Abteilung fragen oder privates Netz testen.

**F: Wie lange bleibt der Raum-Code gültig?**  
A: Im Quellcode nicht eindeutig erkennbar. Gültigkeit wird serverseitig gesteuert (Signaling/Stream-Backend).

**F: Kann ich den Chat-Verlauf exportieren?**  
A: Nicht über UI. Technisch in `localStorage` (`lamac-ai-history`) als JSON-Array abrufbar (DevTools → Application → Local Storage).

**F: Was bedeutet der Status „Verbinde…“ (gelb) dauerhaft?**  
A: Signaling-Verbindung steht, aber ICE-Kandidaten oder Media-Stream fehlen. Meist Netzwerk (STUN/TURN blockiert) oder Code abgelaufen. Seite neu laden, neuen Code probieren.

**F: Gibt es eine Aufzeichnungs-Funktion?**  
A: Im Frontend-Code nicht vorhanden (kein `MediaRecorder`, kein Download-Button).

**F: Warum wird der Theme-Wechsel nicht gespeichert?**  
A: `localStorage` deaktiviert (z. B. Safari „Privater Modus“, Cookie-Blocker
