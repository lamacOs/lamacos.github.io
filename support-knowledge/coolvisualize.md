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

## 1. Zweck & Zielgruppe

**Zweck:**  
Eine browserbasierte Visualisierungs-Oberfläche für Musikwiedergabe auf macOS. Sie synchronisiert ein lokales Hintergrundvideo, Liedtexte (Lyrics) im LRC/LCR-Format und eine pulsierende Orb-Animation. Die eigentliche Musikwiedergabe wird über einen macOS-Kurzbefehl („Shortcut“) namens **„Start“** gesteuert, der per `shortcuts://`-URL-Schema aufgerufen wird.

**Zielgruppe:**  
macOS-Nutzer, die lokale Musikdateien, Videos und Lyrics-Dateien besitzen und diese in einer immersiven, fullscreen-fähigen Darstellung (z. B. für Partys, Proben, Streaming-Overlays) zusammenführen möchten.

**Voraussetzungen:**
- macOS mit Safari oder einem Browser, der `shortcuts://`-Links und Fullscreen-API unterstützt.
- Ein in der **Kurzbefehle-App** angelegter Shortcut mit dem exakten Namen **„Start“**, der die Musikwiedergabe startet (z. B. Apple Music, lokale Datei, etc.).
- Lokale Mediendateien: Video (MP4/WebM), Coverbild (optional), Lyrics-Dateien (`.lrc` / `.lcr`).
- Keine Server-Komponente, keine Installation – Öffnen der `index.html` genügt.

---

## 2. Benutzeroberfläche – Sichtbare Bereiche

| Bereich | Beschreibung | Standard-Sichtbarkeit |
| :--- | :--- | :--- |
| **Hintergrund-Video (`#background`)** | Fullscreen-Video-Layer (z-index -3), loopend, `playsinline`. | Ausgeblendet (`display: none`), wird beim Start eingeblendet. |
| **Cover (`#cover`)** | 76×76 px Bild links oben (Radius 13px). Platzhalter grau. | Sichtbar. |
| **Track-Info (`#track`)** | Titelzeile (Dateiname der aktiven Lyrics) + Status-Zeile (`#status`). | Sichtbar. |
| **Orb (`#orb`)** | Grüner Kreis rechts oben (54×54 px), pulsiert im Takt (simuliert alle 1,35 s). | Sichtbar. |
| **Lyrics-Anzeige (`#lyrics`)** | Zentriert, groß, weiß mit schwarzer Kontur (`text-stroke`). Zeigt aktuelle Lyric-Zeile oder Hinweistext. | Sichtbar. |
| **Steuer-Panel (`#panel`)** | Zentriertes Glas-Modal (Backdrop-Blur) mit allen Konfigurations-Inputs. | **Sichtbar beim Laden**. |
| **Toolbar (`#toolbar`)** | Untere Leiste mit Wiedergabe-Steuerung, Navigation, Einstellungen, Vollbild. | **Ausgeblendet**, erscheint nach „Alles starten“. |
| **Queue-Info (`#queueInfo`)** | Kleiner Banner über Toolbar: „Lyrics X / Y · Dateiname“. | Ausgeblendet, wenn keine Queue. |
| **Fortschrittsbalken (`#progress`)** | 3 px hoher Balken unten, zeigt Video-Fortschritt in Akzentfarbe. | Sichtbar (Breite 0%). |

---

## 3. Bedienung – Schritt für Schritt

### 3.1 Ersteinrichtung (einmalig)
1.  **Kurzbefehl anlegen:** Öffnen Sie die **Kurzbefehle-App** auf macOS. Erstellen Sie einen neuen Shortcut mit dem Namen **„Start“**. Dieser muss die Musikwiedergabe starten (z. B. Aktion „Musik wiedergeben“, „Datei öffnen“, Apple Music Playlist starten).
    *   *Hinweis:* Der im Repository liegende `shortcut.txt` verlinkt auf einen iCloud-Shortcut (`ba602c51c79040f0b4e00b315004e43e`). Ob dieser exakt „Start“ heißt und funktioniert, ist **im Quellcode nicht eindeutig erkennbar**. Der Code ruft fest `shortcuts://run-shortcut?name=Start` auf.
2.  **Datei öffnen:** Doppelklicken Sie `index.html` im Finder (öffnet in Standardbrowser) oder ziehen Sie sie in ein Browser-Fenster.

### 3.2 Konfiguration im Panel (vor dem Start)
Das Panel ist beim Laden offen. Füllen Sie die Felder nach Bedarf:

1.  **Apple-Music-Playlist-Link (optional)**  
    Input `#playlist`: Fügen Sie einen Link wie `https://music.apple.com/...` ein. Beim Start wird dieser in neuem Tab geöffnet.
2.  **Hintergrundvideo auswählen**  
    Input `#videoFile`: Wählen Sie eine lokale Videodatei (MP4, WebM, etc.). Das Video wird sofort in den `<video>`-Tag geladen (Object-URL), aber **nicht** automatisch abgespielt.
3.  **Einzelne Lyrics-Datei**  
    Input `#lyricsFile`: Wählen Sie **eine** `.lrc` oder `.lcr` Datei. Diese wird als Queue mit einem Eintrag geladen.
4.  **Lyrics-Ordner mit Unterordnern**  
    Input `#folderFiles`: Wählen Sie einen **Ordner** (nicht Dateien). Der Browser liest rekursiv alle Dateien (`webkitdirectory multiple`).  
    *Sortierung:* Natürlich (1, 2, 10 statt 1, 10, 2). Nur Dateien mit Endung `.lrc`/`.lcr` (case-insensitive) werden berücksichtigt. Doppelte Pfade (case-insensitive) werden entfernt.
5.  **Coverbild (optional)**  
    Input `#coverFile`: Ersetzt das graue Platzhalterbild links oben.
6.  **Feste Animationsfarbe**  
    Input `#accent` (Color-Picker): Standard `#55ff9b`. Ändert die CSS-Variable `--accent` für Orb, Fortschrittsbalken, Buttons. **Kein Farbzyklus** (Code-Kommentar: „Keep the selected color fixed“).

### 3.3 Starten
- Button **„▶ Alles starten“ (`#start`)** klicken.
    1.  Löst `shortcuts://run-shortcut?name=Start` aus (macOS fraggt ggf. beim ersten Mal nach Erlaubnis).
    2.  Öffnet Playlist-Link (falls gesetzt) in neuem Tab.
    3.  Fordert Fullscreen an (`document.documentElement.requestFullscreen()`).
    4.  Startet Video-Wiedergabe (falls Video geladen), setzt `running = true`.
    5.  Blendet Panel aus, Toolbar ein.
    6.  Startet Animations-Loop (`requestAnimationFrame`) und Beat-Intervall (1350 ms Orb-Puls).

### 3.4 Steuerung während der Laufzeit (Toolbar)
| Button | Aktion | Code-Funktion |
| :--- | :--- | :--- |
| **▶ Start** (`#play`) | Fortsetzen nach Pause. Setzt Zeitbasis neu (`startedAt = now`). | `resumeAll()` |
| **Ⅱ Pause** (`#pause`) | Pausiert Video, stoppt Animation/Beat, merkt verstrichene Zeit (`elapsedBeforePause`). | `pauseAll()` |
| **⏮ Lyrics zurück** (`#previous`) | Springt zum vorherigen Eintrag in der Lyrics-Queue (falls `queueIndex > 0`). Setzt Zeit auf 0. | `showQueueTrack(index - 1)` |
| **Lyrics weiter ⏭** (`#next`) | Springt zum nächsten Eintrag in der Queue (falls `queueIndex < length-1`). Setzt Zeit auf 0. | `showQueueTrack(index + 1)` |
| **⚙** (`#settings`) | Blendet das Konfigurations-Panel wieder ein (Pause bleibt aktiv). | `panel.classList.remove("hidden")` |
| **⛶ Vollbild** (`#fullButton`) | Toggelt Fullscreen-Modus. Text wechselt zu „Vollbild aktiv“. | `enterFullscreen()` |

### 3.5 Lyrics-Offset (Nicht im UI, nur Code)
Variable `lyricOffset` existiert (Default 0), wird im Code aber **nicht über UI-Elemente verändert**. **Im Quellcode nicht eindeutig erkennbar**, wie man diesen Offset manuell justieren soll (z. B. bei Versatz zwischen Musik und Lyrics).

---

## 4. Eingaben & Ausgaben

### Eingaben (User-Inputs)
| Element | Typ | Validierung / Verarbeitung |
| :--- | :--- | :--- |
| `#playlist` | `input[type="url"]` | Client-seitige URL-Prüfung: Host muss `music.apple.com` oder `itunes.apple.com` sein. Sonst `alert`. |
| `#videoFile` | `input[type="file"]` | Erzeugt `blob:`-URL via `URL.createObjectURL()`. Vorherige URL wird revoked. |
| `#coverFile` | `input[type="file"]` | Erzeugt `blob:`-URL, setzt `src` von `#cover`. Vorherige URL revoked. |
| `#lyricsFile` | `input[type="file"]` | Liest Datei als Text, parst LRC, baut Queue mit 1 Eintrag. |
| `#folderFiles` | `input[type="file"]` (webkitdirectory) | Liest alle Dateien rekursiv, filtert `.lrc/.lcr`, sortiert natürlich, parst parallel (`Promise.all`), baut Queue. Fehlerhafte Dateien werden geloggt (`console.warn`), Rest wird geladen. |
| `#accent` | `input[type="color"]` | Setzt CSS-Variable `--accent` live. |

### Ausgaben (Visuell / System)
- **DOM-Updates:** Lyrics-Text, Track-Name, Status-Text, Queue-Info, Progress-Balkenbreite, Orb-Puls-Klasse, Panel/Toolbar-Visibility, Fullscreen-Status.
- **System-Interaktion:** `window.location.href = "shortcuts://..."` (verlässt Browser-Kontext), `window.open()` (neuer Tab), Fullscreen-API.
- **Console-Logs:** Warnungen beim Lesen fehlerhafter Lyrics-Dateien.

---

## 5. Technische Details & Datenverarbeitung

### LRC/LCR Parsing (`parseLRC`)
- **Unterstützte Zeitstempel:** `[mm:ss]`, `[mm:ss.x]`, `[mm:ss.xx]`, `[mm:ss.xxx]` (Punkt oder Doppelpunkt als Trenner).
- **Mehrere Tags pro Zeile:** Werden alle ausgewertet (z. B. `[00:12.00][00:15.00]Text` → zwei Einträge mit gleichem Text).
- **Textbereinigung:** Tags entfernt, `trim()`.
- **Sortierung:** Nach Zeit aufsteigend.
- **Encoding:** BOM (`\uFEFF`) wird beim Lesen entfernt.

### Queue-Logik
- **Struktur:** Array von Objekten `{ name, file, lines[] }`.
- **Sortierung:** `numericCompare` (Intl.Collator `numeric: true`) auf `webkitRelativePath` (normalisiert: NFC, Slashes, kein `./`).
- **Deduplizierung:** Case-insensitive auf normalisiertem Pfad.
- **Navigation:** `next`/`previous` springen diskret zwischen Dateien, **nicht** innerhalb einer Datei. Zeit wird auf 0 zurückgesetzt.

### Animation & Timing
- **Zeitbasis:** `performance.now()` + `elapsedBeforePause` (Pause-fähig).
- **Lyric-Sync:** Findet letzten Eintrag mit `time <= currentTime + lyricOffset`.
- **Video-Progress:** `video.currentTime / video.duration` → Breite `#progress`.
- **Orb-Puls:** Reines CSS/Intervall (`setInterval` 1350 ms, Klasse `.pulse` für 520 ms). **Keine Audio-Analyse (Web Audio API)**. Der Kommentar bestätigt: „Die Kreis-Pulse sind simuliert“.

### Speicherverwaltung
- `URL.revokeObjectURL()` wird bei neuem Video/Cover aufgerufen (Verhindert Memory Leaks bei häufigem Wechsel).
- Keine Persistenz (localStorage, IndexedDB). Nach Reload ist alles weg.

---

## 6. Datenschutz & Berechtigungen

- **Keine Server-Kommunikation:** Alles läuft lokal im Browser. Keine Analytics, kein Tracking, keine externen Skripte (außer iCloud-Link in `shortcut.txt`, der aber nicht automatisch geladen wird).
- **Dateizugriff:** Nur über `input[type="file"]` (User-Geste). Dateien werden als `blob:`-URLs im Speicher gehalten, nie hochgeladen.
- **Shortcut-Aufruf:** `shortcuts://`-Link erfordert Benutzerinteraktion (Klick auf „Alles starten“). macOS zeigt ggf. Bestätigungsdialog („Möchten Sie die App ‚Kurzbefehle‘ öffnen?“).
- **Fullscreen:** Erfordert User-Gesture (Klick), Browser kann ablehnen (dann Fallback-Text in `#status`).
- **Popup-Blocker:** `window.open` für Playlist wird synchron im Click-Handler aufgerufen, um Blocking zu minimieren.

---

## 7. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache (Code-basiert) | Abhilfe |
| :--- | :--- | :--- |
| **„Visualizer läuft“, aber kein Ton** | Der Shortcut „Start“ existiert nicht, heißt anders, oder startet keine Audio-Quelle. | In Kurzbefehle-App prüfen: Name exakt **„Start“**? Funktioniert der Shortcut manuell? |
| **Klick auf „Alles starten“ tut nichts / Fehler** | Browser blockiert `shortcuts://` (z. B. Nicht-Safari, Sicherheitsrichtlinie). | Safari nutzen. In Safari: „Entwickler“ → „Erlauben: Automatische Wiedergabe“ / Popups prüfen. |
| **Video startet nicht / bleibt schwarz** | `video.play()` Promise rejected (Autoplay-Policy), obwohl `running=true`. | Status zeigt „Video konnte nicht automatisch starten.“ → Toolbar „▶ Start“ klicken (ruft `video.play()` erneut auf). |
| **Lyrics werden nicht angezeigt / „Keine zeitgestempelten Lyrics gefunden.“** | LRC-Datei hat keine passenden Zeitstempel (Regex matcht nicht) oder falsche Kodierung. | Datei prüfen: Zeilen wie `[00:12.34]Text`. Keine exotischen Tags (`[ti:...]`, `[ar:...]` werden ignoriert, aber Text danach genutzt). |
| **Queue-Reihenfolge falsch (1, 10
