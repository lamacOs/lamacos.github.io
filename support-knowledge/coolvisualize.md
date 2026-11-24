<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: coolvisualize -->
<!-- source-files: ["coolvisualize/index.html", "coolvisualize/shortcut.txt"] -->

# Support-Dokumentation: lamacOs Music Visualizer (coolvisualize)

**Website-Name:** lamacOs Music Visualizer  
**Repository-Pfad:** `coolvisualize`  
**Erstellungsdatum:** 2024 (basierend auf Quellcode-Analyse)  
**Hauptdatei:** `index.html` (Single-Page-Application, keine Build-Schritte nötig)  
**Zusätzliche Ressource:** `shortcut.txt` (Link zu einem iCloud-Kurzbefehl)

---

## 1. Zweck und Überblick

Der **lamacOs Music Visualizer** ist eine browserbasierte Anwendung (optimiert für macOS/Safari), die lokale Mediendateien (Video, Lyrics, Cover) zu einem visuellen Musik-Erlebnis kombiniert. Kernfunktionen:

- **Hintergrundvideo** (lokal, Loop, Fullscreen-fähig)
- **Synchronisierte Lyrics-Anzeige** (Parsing von `.lrc` / `.lcr` Dateien)
- **Pulsierende Orb-Animation** (feste Akzentfarbe, simulierter Beat)
- **Playlist-/Queue-Verwaltung** für mehrere Lyrics-Dateien (numerische Sortierung)
- **Integration macOS Kurzbefehle (Shortcuts):** Startet beim Drücken von „Alles starten“ den Kurzbefehl `Start` (z. B. für Apple Music Wiedergabe).
- **Optional:** Öffnen einer Apple-Music-Playlist im Browser.

**Zielgruppe:** Nutzer, die lokale Musikvideos mit Lyrics-Overlay auf macOS darstellen wollen, ohne Server/Backend.  
**Voraussetzungen:**  
- macOS mit Safari (oder Chromium-basierter Browser mit Fullscreen-API-Unterstützung).  
- Die Datei `index.html` lokal öffnen (z. B. per Doppelklick oder via `file://`).  
- Für Kurzbefehl-Integration: Der in `shortcut.txt` verlinkte iCloud-Kurzbefehl muss in der Kurzbefehle-App installiert sein und „Start“ heißen.  
- Lokale Dateizugriffsrechte (Browser muss Dateien lesen dürfen).

---

## 2. Benutzeroberfläche – Sichtbare Bereiche

| Bereich | Beschreibung | Sichtbarkeit |
|---------|--------------|--------------|
| **Hintergrundvideo** (`#background`) | Fullscreen-Video, Loop, `playsinline`. Initial ausgeblendet (`display: none`), wird beim Start eingeblendet. | Immer (fixiert, `z-index: -3`) |
| **Schattierung** (`#shade`) | Dunkler Overlay-Gradient für Kontrast. | Immer (`z-index: -2`) |
| **Coverbild** (`#cover`) | Links oben (22px/22px), 76×76px, abgerundet. Platzhalter `#222`. | Immer |
| **Track-Info** (`#track`) | Titel (Dateiname der aktiven Lyrics-Datei) + Statuszeile (`#status`). | Immer |
| **Orb** (`#orb`) | Kreis rechts oben (54×54px), Akzentfarbe, pulsiert per CSS-Animation (Klasse `.pulse`). | Immer |
| **Lyrics-Anzeige** (`#lyrics`) | Zentriert, groß, Outline-Text, `pointer-events: none`. Zeigt aktuelle Zeile oder Platzhalter. | Immer |
| **Queue-Info** (`#queueInfo`) | Unten mittig, zeigt „Lyrics X / Y · Dateiname“. Ausgeblendet, wenn Queue leer. | Bei Queue > 0 |
| **Fortschrittsbalken** (`#progress`) | Unten, 3px Höhe, Akzentfarbe, Breite = Video-Fortschritt in %. | Immer |
| **Einstellungs-Panel** (`#panel`) | Modal (zentriert, Glassmorphism). Enthält alle Eingabefelder und Start-Buttons. Initial sichtbar. | Ein-/ausblendbar |
| **Toolbar** (`#toolbar`) | Unten mittig, Buttons für Play/Pause, Vor/Zurück (Lyrics), Einstellungen, Vollbild. Initial ausgeblendet (`.hidden`). | Während Visualizer läuft |

---

## 3. Bedienung – Schritt für Schritt

### 3.1 Erste Einrichtung (einmalig)
1. **Kurzbefehl installieren:**  
   Öffne den Link aus `shortcut.txt` (`https://www.icloud.com/shortcuts/ba602c51c79040f0b4e00b315004e43e`) auf dem Mac → „Kurzbefehl hinzufügen“. Er muss **exakt „Start“ heißen** (Groß-/Kleinschreibung beachten).
2. **`index.html` öffnen:**  
   Doppelklick auf die Datei oder per Terminal: `open coolvisualize/index.html`.  
   → Das Panel öffnet sich, der Visualizer ist noch inaktiv.

### 3.2 Medien laden (im Panel)
| Feld | Aktion | Hinweise |
|------|--------|----------|
| **Apple-Music-Playlist-Link** (`#playlist`) | Optional: URL einfügen (z. B. `https://music.apple.com/.../playlist/...`). | Wird beim Start in neuem Tab geöffnet. Validierung auf Host `music.apple.com` / `itunes.apple.com`. |
| **Hintergrundvideo** (`#videoFile`) | Datei wählen (MP4, WebM, etc.). | Wird als Object-URL geladen, Loop aktiv. |
| **Einzelne Lyrics-Datei** (`#lyricsFile`) | `.lrc` oder `.lcr` wählen. | Wird als Queue mit einem Eintrag geladen. |
| **Lyrics-Ordner** (`#folderFiles`) | Ordner wählen (webkitdirectory). | Rekursiv alle `.lrc`/`.lcr` Dateien, **numerisch sortiert** (1, 2, 10 …). Doppelte Pfade (case-insensitive) werden entfernt. |
| **Coverbild** (`#coverFile`) | Bilddatei wählen. | Ersetzt Platzhalter links oben. |
| **Animationsfarbe** (`#accent`) | Color-Picker (Default `#55ff9b`). | Setzt CSS-Variable `--accent` (Orb, Progress, Buttons). **Kein Farbzyklus**, Farbe bleibt fest. |

### 3.3 Visualizer starten
1. Button **„▶ Alles starten“** (`#start`) klicken.  
   → Löst **drei Aktionen gleichzeitig** aus (müssen aus Nutzerinteraktion kommen):
   - `runShortcut()` → `window.location.href = "shortcuts://run-shortcut?name=Start"` (macOS fragt ggf. beim ersten Mal nach Bestätigung).
   - `openPlaylist()` → Falls Playlist-Link gesetzt, `window.open(...)` in neuem Tab.
   - `enterFullscreen()` → `document.documentElement.requestFullscreen()`.
2. Panel wird ausgeblendet, Toolbar eingeblendet.
3. Video startet (falls geladen), Orb pulsiert (alle 1,35 s), Lyrics laufen synchron zum Video (bzw. zur internen Zeit).

### 3.4 Während der Wiedergabe (Toolbar)
| Button | Aktion | Code-Funktion |
|--------|--------|---------------|
| **▶ Start** (`#play`) | Fortsetzen nach Pause. | `resumeAll()`: Video.play(), `running=true`, `animate()` + `scheduleBeats()` neu. |
| **Ⅱ Pause** (`#pause`) | Pausieren. | `pauseAll()`: `running=false`, Video.pause(), Zeitstand merken (`elapsedBeforePause`). |
| **⏮ Lyrics zurück** (`#previous`) | Vorherige Lyrics-Datei in Queue. | `showQueueTrack(index-1)`, Zeit zurücksetzen. |
| **Lyrics weiter ⏭** (`#next`) | Nächste Lyrics-Datei in Queue. | `showQueueTrack(index+1)`, Zeit zurücksetzen. |
| **⚙** (`#settings`) | Panel wieder einblenden. | `panel.classList.remove("hidden")`. |
| **⛶ Vollbild** (`#fullButton`) | Vollbild umschalten. | `enterFullscreen()`. |

### 3.5 Beenden / Zurück
- **ESC** oder Browser-Vollbild-Beenden → Toolbar bleibt sichtbar, Video pausiert **nicht automatisch** (Code reagiert nicht auf `fullscreenchange` für Pause).  
- Über **⚙ Einstellungen** zurück ins Panel → Visualizer läuft weiter (`running` bleibt `true`), aber Panel überlagert.  
- Neuer Klick auf „▶ Alles starten“ → `if (running) return;` (kein Neustart).

---

## 4. Eingaben und Ausgaben

### Eingaben (User)
- **Dateien:** Video (1), Cover (1), Lyrics (1 Datei **oder** Ordner mit vielen).  
- **Text:** Apple-Music-URL (optional).  
- **Farbe:** Hex über Color-Picker.  
- **Interaktion:** Buttons (Start, Play, Pause, Next, Prev, Settings, Fullscreen).

### Ausgaben (App)
- **Visuell:** Video, Cover, Orb, Lyrics-Text, Progressbar, Queue-Info.  
- **System:** Öffnet `shortcuts://` URL (macOS Kurzbefehl), öffnet Apple-Music-Tab.  
- **Konsolen-Logs:** Warnungen bei fehlerhaften Lyrics-Dateien (`console.warn`).

### Lyrics-Parsing (`.lrc` / `.lcr`)
- **Format:** Zeilen mit Zeitstempeln `[mm:ss.xx]` oder `[mm:ss:xx]` (Millisekunden 1–3 Stellen).  
- **Mehrere Stempel pro Zeile** werden unterstützt (je Stempel ein Eintrag mit gleichem Text).  
- **Ohne Text nach Stempel** → Zeile wird ignoriert.  
- **Sortierung:** Nach Zeit aufsteigend.  
- **Offset:** `lyricOffset` (im Code vorhanden, aber **kein UI-Regler** → immer 0).  
- **Anzeige:** Vor erstem Stempel leer, danach jeweilige Zeile. Kein Scrolling/Karaoke-Effekt, nur harter Wechsel.

---

## 5. Typische Probleme und Fehlerbehebung

| Symptom | Mögliche Ursache (Code-basiert) | Abhilfe |
|---------|----------------------------------|---------|
| **Kurzbefehl startet nicht / „Kurzbefehl nicht gefunden“** | Kurzbefehl heißt nicht exakt „Start“ oder ist nicht installiert. | In Kurzbefehle-App prüfen: Name = „Start“. iCloud-Link aus `shortcut.txt` erneut öffnen. |
| **macOS fragt „„kurzbefehle“ möchte „Start“ ausführen“ bei jedem Start** | Standard-Sicherheitsabfrage beim ersten Aufruf pro Sitzung. | Einmal „Erlauben“ klicken. Deaktivierung nur über macOS-Einstellungen → Datenschutz & Sicherheit → Automatisierung (nicht per Code beeinflussbar). |
| **Video startet nicht / bleibt schwarz** | Autoplay-Policy: `video.play()` kann fehlschlagen, wenn nicht aus User-Geste. Code fängt Fehler ab → Status „Video konnte nicht automatisch starten.“ | Toolbar „▶ Start“ klicken (ruft `video.play()` erneut auf). Oder Video manuell im Kontextmenü starten. |
| **Lyrics werden nicht angezeigt / „Keine zeitgestempelten Lyrics gefunden.“** | Datei hat keine passenden `[mm:ss...]` Tags oder Parsing fehlgeschlagen. | Datei prüfen: Jede Zeile muss Time-Tag + Text haben. Encoding UTF-8 (BOM wird entfernt). |
| **Queue-Reihenfolge falsch (1, 10, 2 …)** | Code nutzt `numericCompare` (Intl.Collator `numeric: true`). Funktioniert nur bei **Dateinamen/Ordnern mit Zahlen am Anfang**. | Dateien/Ordner als `01_song.lrc`, `02_song.lrc` … benennen. |
| **Orb pulsiert nicht im Takt der Musik** | **Absicht:** Puls ist **simuliert** (fix 1,35 s Intervall), **keine Audio-Analyse**. Code-Kommentar: „Die Kreis-Pulse sind simuliert; die Farbe bleibt fest.“ | Erwartung anpassen: Kein Beat-Detection. |
| **Farben ändern sich nicht / Color-Picker wirkt nicht** | `setColor()` setzt `--accent` auf `documentElement`. Funktioniert sofort für Orb, Progress, Buttons. | Prüfen, ob Browser CSS-Variablen unterstützt (alle modernen). |
| **Vollbild geht nicht** | `requestFullscreen()` schlägt fehl (z. B. `file://` ohne User-Geste, iframe, Browser-Einstellung). | Status zeigt „Vollbild nicht verfügbar – bitte über das Browsermenü aktivieren.“ → Manuell via View-Menü. |
| **Panel schließt sich nicht nach Start** | `panel.classList.add("hidden")` wird in `startVisualizer()` gesetzt. | Falls doch sichtbar: CSS-Konflikt prüfen (andere `.hidden` Definition). |
| **Mehrere Lyrics-Dateien im Ordner, aber nur eine geladen** | `loadQueue` filtert Duplikate **case-insensitive** nach `normalizedPath`. Unterschiedliche Großschreibung = Duplikat. | Dateinamen eindeutig halten (nicht nur Groß-/Kleinschreibung). |

---

## 6. Datenschutz, Berechtigungen & Sicherheit

- **Kein Backend, kein Tracking, keine Cookies.** Alles läuft lokal im Browser.
- **Dateizugriff:** Nur über `<input type="file">` / `webkitdirectory` → Nutzer wählt aktiv. Kein Zugriff auf Dateisystem ohne Interaktion.
- **Object-URLs** (`URL.createObjectURL`) werden bei Neuauswahl revoked (`URL.revokeObjectURL`) → Kein Speicherleck.
- **Kurzbefehl-URL:** `shortcuts://run-shortcut?name=Start` wird per `window.location.href` aufgerufen. **Keine Datenübertragung** an Dritte. Erfordert installierten Kurzbefehl.
- **Apple-Music-Link:** Wird per `window.open` im neuen Tab geöffnet. Validierung auf Hostname (`music.apple.com`, `itunes.apple.com`). Kein Token/Key im Code.
- **CSP / Sicherheit:** Inline-`<script>` und `<style>` → Bei Deployment auf Webserver CSP anpassen (`'unsafe-inline'` nötig oder auslagern).
- **Keine API-Keys, Tokens, Passwörter im Quellcode.** (Der iCloud-Link in `shortcut.txt` ist ein öffentlicher Shortcut-Link, kein Geheimnis.)

---

## 7. FAQ (Häufige Fragen)

**F: Funktioniert das auf Windows / Linux / iOS / Android?**  
A: **Im Quellcode nicht eindeutig erkennbar**, aber:  
- `shortcuts://` Schema ist **macOS/iOS-exklusiv** → Kurzbefehl-Start funktioniert nur dort.  
- `webkitdirectory` wird von Chrome/Edge/Firefox unterstützt (nicht Safari iOS).  
- Full
