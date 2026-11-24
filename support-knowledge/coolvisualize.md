<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: coolvisualize -->
<!-- source-files: ["coolvisualize/index.html", "coolvisualize/shortcut.txt"] -->

# Support-Dokumentation: lamacOs Music Visualizer (coolvisualize)

**Website-Name:** lamacOs Music Visualizer  
**Vermuteter Zweck:** Ein browserbasierter Musik-Visualisierer für macOS, der ein lokales Hintergrundvideo abspielt, synchronisierte Lyrics (LRC/LCR) anzeigt, eine pulsierende Orb-Animation darstellt und über einen macOS-Kurzbefehl („Start“) weitere Systemaktionen auslösen kann.  
**Quellcode-Pfad:** `coolvisualize/index.html` (Single-File-Application) + `coolvisualize/shortcut.txt` (Verweis auf iCloud-Kurzbefehl)  
**Datum der Erstellung:** 2025-08-14 (basierend auf heutigem Datum, da im Quellcode kein Erstellungsdatum steht)

---

## 1. Überblick & Voraussetzungen

### 1.1 Zweck
Die Anwendung visualisiert Musikwiedergabe im Browser:
- Hintergrundvideo (lokal, per Dateiauswahl)
- Coverbild (optional, lokal)
- Synchronisierte Lyrics aus `.lrc` / `.lcr` Dateien (Einzeldatei oder ganzer Ordner mit Unterordnern)
- Pulsierende Orb-Animation im Takt (fixes Intervall 1,35 s, Farbe einstellbar)
- Fortschrittsbalken am unteren Rand
- Steuerung per Toolbar (Play/Pause, Vor/Zurück Lyrics, Vollbild, Einstellungen)
- Start über macOS-Kurzbefehl `shortcuts://run-shortcut?name=Start` (nur auf macOS funktional)

### 1.2 Voraussetzungen
| Komponente | Anforderung |
|------------|-------------|
| Browser | Moderner Browser mit `requestFullscreen`, `URL.createObjectURL`, `FileReader API`, `webkitdirectory` Support (Chrome, Edge, Safari, Firefox). |
| Betriebssystem | macOS (für Kurzbefehl `shortcuts://` zwingend erforderlich). Auf anderen OS funktioniert der Visualisierer, aber der Kurzbefehl schlägt fehl / tut nichts. |
| Dateien | Lokale Videodatei (MP4/WebM etc., vom Browser spielbar), optionales Coverbild, Lyrics-Dateien (`.lrc` / `.lcr`) mit Zeitstempeln `[mm:ss.xx]` oder `[mm:ss]`. |
| Berechtigungen | Browser muss Zugriff auf lokale Dateien erlauben (kein Server nötig, läuft als `file://` oder `http(s)://`). macOS fragt beim ersten Kurzbefehl-Aufruf nach Bestätigung. |

### 1.3 Nicht unterstützt / Im Quellcode nicht eindeutig erkennbar
- Kein Audio-Playback im Browser (Video ist stumm oder nur visuell; Audio muss extern laufen).
- Kein Streaming von Apple Music / Spotify direkt im Visualisierer (nur Link-Öffnung in neuem Tab).
- Keine Cloud-Synchronisation, kein Benutzerkonto, keine Speicherung zwischen Sitzungen (alles flüchtig im RAM).
- Keine automatische Farberkennung aus Cover/Video (Farbe fest über Color-Picker).
- Keine Tastaturkurzbefehle (nur Maus/Touch über Buttons).
- Kein Export / Recording der Visualisierung.

---

## 2. Benutzeroberfläche – Sichtbare Bereiche

| Bereich | ID / Klasse | Beschreibung |
|---------|-------------|--------------|
| **Hintergrundvideo** | `#background` | `<video loop playsinline>`, initial `display:none`, wird beim Start eingeblendet. |
| **Schattierung** | `#shade` | Dunkler Gradient über Video für Lesbarkeit. |
| **Coverbild** | `#cover` | 76×76 px (Desktop), 54×54 px (Mobile), links oben, abgerundet. |
| **Titel / Status** | `#track` + `#status` | Zeigt Dateinamen der aktiven Lyrics-Datei und Statusmeldungen. |
| **Orb (Puls-Kreis)** | `#orb` | Rechts oben, 54 px (Desktop), 38 px (Mobile). Pulsiert per CSS-Animation (Klasse `.pulse`). |
| **Lyrics-Anzeige** | `#lyrics` | Zentriert, groß, weiß mit schwarzem Strich (`-webkit-text-stroke`), `pointer-events:none`. |
| **Einstellungs-Panel** | `#panel` | Glas-Effekt (`backdrop-filter`), mittig, scrollbar. Enthält alle Eingabefelder und Start-Buttons. |
| **Toolbar (Wiedergabe-Steuerung)** | `#toolbar` | Initial versteckt (`.hidden`), unten mittig, Buttons: Start, Pause, Lyrics zurück, Lyrics weiter, Einstellungen, Vollbild. |
| **Queue-Info** | `#queueInfo` | Zeigt „Lyrics X / Y · Dateiname“, erscheint über Toolbar. |
| **Fortschrittsbalken** | `#progress` | 3 px hoch, unten, Breite = Video-Fortschritt in %. |

---

## 3. Bedienung – Schritt für Schritt

### 3.1 Erste Einrichtung (Panel)
1. **Apple-Music-Playlist-Link (optional)**  
   Feld `playlist` (URL-Input). Beispiel: `https://music.apple.com/...`.  
   → Wird beim Start in neuem Tab geöffnet (`window.open`).

2. **Hintergrundvideo auswählen**  
   Button `videoFile` (File-Input). Wählt lokale Videodatei.  
   → Wird als Object-URL geladen, `<video>.src` gesetzt, `video.load()`.

3. **Einzelne Lyrics-Datei**  
   Button `lyricsFile` (File-Input, `.lrc` / `.lcr`).  
   → Lädt Datei, parst Zeitstempel, setzt Queue auf diese eine Datei.

4. **Lyrics-Ordner mit Unterordnern**  
   Button `folderFiles` (File-Input, `webkitdirectory multiple`).  
   → Erlaubt Ordnerauswahl. Alle `.lrc`/`.lcr` Dateien darin (rekursiv) werden numerisch sortiert (1, 2, … 10) und als Queue geladen.

5. **Coverbild (optional)**  
   Button `coverFile` (File-Input).  
   → Wird als Object-URL in `#cover` geladen.

6. **Feste Animationsfarbe**  
   Color-Picker `accent` (Standard `#55ff9b`).  
   → Setzt CSS-Variable `--accent` (Orb, Progress, Buttons).

7. **Alles starten**  
   Button `start` (▶ Alles starten).  
   → Führt **alle** folgenden Aktionen aus:
   - `runShortcut()` → `window.location.href = "shortcuts://run-shortcut?name=Start"` (macOS Kurzbefehl).
   - `openPlaylist()` → öffnet Apple-Music-Link in neuem Tab (falls ausgefüllt).
   - `enterFullscreen()` → Browser-Vollbild.
   - Video-Playback starten (falls Video geladen).
   - Panel ausblenden, Toolbar einblenden, Animations-Loop starten (`animate()`), Beat-Timer starten (`scheduleBeats()`).

8. **Vollbild (nur Panel)**  
   Button `fullscreen` (⛶ Vollbild).  
   → Nur `enterFullscreen()`, ohne Visualizer-Start.

### 3.2 Während der Wiedergabe (Toolbar)
| Button | ID | Aktion |
|--------|-----|--------|
| ▶ Start | `play` | `resumeAll()`: Video fortsetzen, Animation & Beat-Timer neu starten, Zeitbasis (`startedAt`) zurücksetzen. |
| Ⅱ Pause | `pause` | `pauseAll()`: Video pausieren, Animation & Beat-Timer stoppen, `elapsedBeforePause` akkumulieren. |
| ⏮ Lyrics zurück | `previous` | Springt zur vorherigen Lyrics-Datei in Queue (`queueIndex - 1`), Zeit zurücksetzen (`elapsedBeforePause=0`, `startedAt=now`). |
| Lyrics weiter ⏭ | `next` | Springt zur nächsten Lyrics-Datei (`queueIndex + 1`), Zeit zurücksetzen. |
| ⚙ Einstellungen | `settings` | Blendet Panel wieder ein (`panel.classList.remove("hidden")`). Toolbar bleibt sichtbar. |
| ⛶ Vollbild | `fullButton` | Toggelt Browser-Vollbild (`enterFullscreen()`). Text wechselt auf „Vollbild aktiv“. |

### 3.3 Lyrics-Navigation & Queue
- Queue wird beim Laden (`loadQueue`) numerisch sortiert (natürliche Sortierung: 1, 2, 10).
- `showQueueTrack(index)` setzt `lyricLines`, `currentLyric=-1`, `lyricOffset=0`, aktualisiert Titel (`#track` erster ChildNode) und Queue-Info.
- Vor dem ersten Zeitstempel zeigt `#lyrics` leeren String (bzw. „Keine zeitgestempelten Lyrics gefunden.“ bei leerer Parse-Liste).
- `lyricOffset` ist im Code vorhanden, wird aber nirgends per UI verändert (Im Quellcode nicht eindeutig erkennbar, wie man Offset justiert).

### 3.4 Fortschrittsbalken
- Aktualisiert pro Animation-Frame: `video.currentTime / video.duration * 100%`.
- Nur sichtbar, wenn Video geladen und `duration` endlich.

---

## 4. Technische Details (für Support / Fehlersuche)

### 4.1 LRC/LCR Parsing (`parseLRC`)
- Erwartet Zeilen mit Zeitstempeln: `[mm:ss]`, `[mm:ss.x]`, `[mm:ss.xx]`, `[mm:ss.xxx]` (Millisekunden werden auf Sekunden normalisiert).
- Mehrere Zeitstempel pro Zeile werden unterstützt (je Zeitstempel ein Eintrag mit gleichem Text).
- Text nach dem letzten `]` wird als Lyric-Text genommen, `trim()`.
- Leere Texte nach Tag-Entfernung werden ignoriert.
- Ergebnis: Array `{time: Sekunden (float), text: String}`, sortiert nach `time`.

### 4.2 Datei-Handling
- `URL.createObjectURL()` für Video & Cover → **Speicherleck möglich**, wenn Seite neu geladen wird ohne `revokeObjectURL` (Code revoked vorherige URL bei neuem File).
- `webkitRelativePath` für Ordnerstruktur → funktioniert nur in Chromium/WebKit (Safari unterstützt `webkitdirectory` aber Pfade können abweichen).
- Deduplizierung via `normalizedPath().toLowerCase()` (NFC-Normalisierung, Backslash→Slash, `./` entfernt).

### 4.3 Animation & Timing
- `animate()` via `requestAnimationFrame`.
- Zeitberechnung: `elapsedBeforePause + (performance.now() - startedAt)/1000`.
- Lyric-Sync: zeigt letzte Zeile mit `time <= seconds + lyricOffset`.
- Beat-Timer: `setInterval(pulse, 1350)` → **festes Intervall**, **keine Audio-Analyse**. Orb pulsiert alle 1,35 s unabhängig von Musik.

### 4.4 Kurzbefehl (Shortcut)
- `shortcuts://run-shortcut?name=Start` → **nur macOS**, erfordert Kurzbefehl-App und einen Kurzbefehl namens „Start“.
- Muss **direkt aus User-Click** aufgerufen werden (Popup-Blocker).
- Im Repository liegt `shortcut.txt` mit iCloud-Link: `https://www.icloud.com/shortcuts/ba602c51c79040f0b4e00b315004e43e` (Inhalt des Kurzbefehls im Quellcode **nicht** einsehbar).

### 4.5 Vollbild
- `document.documentElement.requestFullscreen()`.
- Fehler werden abgefangen → Statusmeldung „Vollbild nicht verfügbar…“.

---

## 5. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache | Abhilfe |
|---------|------------------|---------|
| **Kurzbefehl öffnet sich nicht / nichts passiert** | Nicht auf macOS, Kurzbefehl „Start“ nicht vorhanden, Popup-Blocker. | Auf macOS testen, Kurzbefehl „Start“ in Kurzbefehle-App anlegen, Popup für Seite erlauben. |
| **Video startet nicht / bleibt schwarz** | Browser blockiert Autoplay (kein User-Gesture), Video-Format nicht unterstützt, `video.src` leer. | „Alles starten“ klicken (ist User-Gesture), MP4 (H.264) oder WebM nutzen, Console prüfen (`video.error`). |
| **Lyrics werden nicht angezeigt / falsch synchron** | LRC-Format abweichend (z. B. `[mm:ss:xx]` statt `.`), Encoding (BOM), keine Zeitstempel. | Datei prüfen: Zeilen wie `[00:12.34]Text`. BOM wird im Code entfernt (`replace(/^\uFEFF/,"")`). |
| **Queue zeigt „Keine .lrc- oder .lcr-Dateien gefunden.“** | Dateiendung abweichend (`.txt`, `.LRC` groß), Ordnerstruktur nicht erkannt. | Endung prüfen (Case-insensitive Regex im Code ok), `webkitdirectory` nur in unterstützten Browsern. |
| **Orb pulsiert nicht im Takt der Musik** | **Designentscheidung**: Intervall fest 1,35 s, keine Audio-Analyse. | Nicht behebbar ohne Code-Änderung (Web Audio API nötig). |
| **Farbe ändert sich nicht** | Color-Picker Wert nicht übernommen? | `accent` Input hat `input`-Event → `setColor()` setzt `--accent` sofort. |
| **Vollbild geht nicht** | Browser-Policy (iframe ohne `allowfullscreen`), Mobile Safari Einschränkungen. | Seite direkt öffnen (nicht in iframe), auf iOS/iPadOS manuell Vollbild über Browser-Menü. |
| **Fortschrittsbalken bleibt bei 0%** | `video.duration` = NaN / 0 (Metadata noch nicht geladen), Video nicht spielbar. | `video.load()` nach `src` setzen, `onloadedmetadata` abwarten (Code prüft `Number.isFinite(video.duration)`). |
| **Panel / Toolbar verschwinden nicht / bleiben sichtbar** | CSS-Klasse `.hidden` (`display:none !important`) wird nicht korrekt getoggelt. | Console: `panel.classList.contains("hidden")` prüfen, JS-Fehler suchen. |

---

## 6. Datenschutz & Berechtigungen

- **Keine Server-Kommunikation**: Alles läuft clientseitig im Browser. Keine Logs, kein Tracking, keine Cookies.
- **Lokale Dateien**: Werden nur als `blob:` URLs im Speicher gehalten. Beim Schließen des Tabs freigegeben.
- **Kurzbefehl**: Öffnet `shortcuts://` URL → macOS fragt beim ersten Mal „Möchten Sie die App ‚Kurzbefehle‘ öffnen?“ → User-Entscheidung.
- **Apple-Music-Link**: Wird per `window.open` in neuem Tab geöffnet → verlässt die Seite, Apple erhält Request.
- **Berechtigungen**: Keine Kamera, Mikrofon, Ge
