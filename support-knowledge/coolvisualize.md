<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: coolvisualize -->
<!-- source-files: ["coolvisualize/index.html", "coolvisualize/shortcut.txt"] -->

# Support-Dokumentation: lamacOs Music Visualizer (coolvisualize)

**Website-Name:** lamacOs Music Visualizer  
**Vermuteter Zweck:** Eine browserbasierte Anwendung zur Visualisierung von Musik mit synchronisierten Lyrics (LRC/LCR), Hintergrundvideo, Coverbild und pulsierender Orb-Animation. Die Steuerung erfolgt über ein Overlay-Panel und eine Toolbar. Ein macOS-Kurzbefehl („Start“) wird beim Start aufgerufen.  
**Quellcode-Pfad:** `coolvisualize/index.html`, `coolvisualize/shortcut.txt`  
**Datum der Erstellung:** 2025-08-14 (basierend auf dem bereitgestellten Quellcode)

---

## 1. Überblick & Voraussetzungen

### 1.1 Zweck
Der **lamacOs Music Visualizer** ermöglicht es, lokale Mediendateien (Video, Lyrics, Cover) in einer immersiven Vollbild-Darstellung abzuspielen. Lyrics werden zeitgesteuert eingeblendet, ein Orb pulsiert im Takt (simuliert alle 1,35 s), und der Fortschritt wird als Balken angezeigt. Die Anwendung läuft vollständig clientseitig im Browser – es gibt kein Backend, keine Cloud-Synchronisation und keine Benutzerkonten.

### 1.2 Unterstützte Formate
| Dateityp | Erweiterung | Hinweis |
|----------|-------------|---------|
| Hintergrundvideo | Beliebig (Browser-abhängig, z. B. MP4, WebM) | Wird per `<video>`-Element wiedergegeben, `loop` + `playsinline` |
| Lyrics | `.lrc`, `.lcr` | Zeitstempel im Format `[mm:ss.xx]` oder `[mm:ss:xx]`; mehrere Zeitstempel pro Zeile möglich |
| Coverbild | Beliebig (Browser-abhängig, z. B. JPG, PNG, WebP) | Wird oben links angezeigt |
| Playlist-Link | `https://music.apple.com/...` oder `https://itunes.apple.com/...` | Wird in neuem Tab geöffnet (optional) |

### 1.3 Systemvoraussetzungen
- **Browser:** Moderner Desktop-Browser mit Unterstützung für:
  - `requestAnimationFrame`
  - `File API` / `FileReader` (`file.text()`)
  - `URL.createObjectURL`
  - `Fullscreen API`
  - `backdrop-filter` (CSS)
  - `webkitdirectory` (für Ordner-Upload)
- **Betriebssystem:** macOS (für den Kurzbefehl „Start“ zwingend erforderlich), funktioniert aber auch auf anderen OS (Kurzbefehl wird dann fehlschlagen/ignoriert).
- **Berechtigungen:** Keine besonderen Berechtigungen nötig; Dateizugriff erfolgt ausschließlich über Benutzerinteraktion (File-Picker).
- **Netzwerk:** Nicht erforderlich (läuft offline), außer für das Öffnen des Apple-Music-Links.

### 1.4 Bekannte Einschränkungen (aus Quellcode ableitbar)
- Der **macOS-Kurzbefehl „Start“** wird per `shortcuts://run-shortcut?name=Start` aufgerufen. Auf Nicht-macOS-Systemen oder ohne installierten Kurzbefehl passiert nichts / Fehlermeldung des OS.
- **Kein Audio-Element im Code** – die Anwendung visualisiert nur Video + Lyrics. Audio muss extern (z. B. über den Kurzbefehl) gestartet werden.
- **Orb-Puls ist simuliert** (fixes Intervall 1,35 s), keine echte Beat-Erkennung.
- **Farben:** Animationsfarbe (`--accent`) wird fest über den Color-Picker gesetzt; kein automatischer Farbwechsel.
- **Lyrics-Offset** (`lyricOffset`) wird im Code definiert, aber **kein UI-Element** zur Laufzeit-Anpassung vorhanden.
- **Keine Persistenz:** Nach Neuladen sind alle Einstellungen (Dateien, Farbe, Queue-Position) verloren.

---

## 2. Benutzeroberfläche – Sichtbare Bereiche

| Bereich | ID / Klasse | Beschreibung |
|---------|-------------|--------------|
| **Hintergrundvideo** | `#background` | Vollbild-Video, initial ausgeblendet (`display: none`), wird beim Start eingeblendet. |
| **Schattierung** | `#shade` | Dunkler Overlay-Gradient über dem Video für bessere Lesbarkeit. |
| **Coverbild** | `#cover` | 76×76 px (Desktop) / 54×54 px (Mobile), oben links, abgerundet, Schatten. |
| **Titel / Status** | `#track` + `#status` | Zeigt Dateinamen der aktuellen Lyrics-Datei und Statusmeldungen. |
| **Pulsierender Orb** | `#orb` | Kreis oben rechts, Farbe = `--accent`, pulsiert per CSS-Klasse `.pulse`. |
| **Lyrics-Anzeige** | `#lyrics` | Zentriert, groß, mit Text-Stroke/Schatten, `pointer-events: none`. |
| **Queue-Info** | `#queueInfo` | Zeigt „Lyrics X / Y · Dateiname“, ausgeblendet bei leerer Queue. |
| **Fortschrittsbalken** | `#progress` | 3 px hoher Balken unten, Breite = Video-Fortschritt in %. |
| **Einstellungs-Panel** | `#panel` | Zentriertes Modal (Glas-Effekt), enthält alle Eingabefelder und Start-Buttons. |
| **Toolbar** | `#toolbar` | Unten mittig, Buttons für Play/Pause, Vor/Zurück (Lyrics), Einstellungen, Vollbild. Initial ausgeblendet. |

---

## 3. Bedienung – Schritt für Schritt

### 3.1 Erste Einrichtung (Panel)
1. **Panel öffnen:** Beim Laden der Seite ist das Panel (`#panel`) standardmäßig sichtbar.
2. **Hintergrundvideo wählen:**  
   - Klick auf „Hintergrundvideo auswählen“ → Datei-Dialog → Video-Datei wählen.  
   - Video wird sofort in `#background` geladen (aber noch nicht abgespielt).
3. **Coverbild (optional):**  
   - Klick auf „Coverbild (optional)“ → Bilddatei wählen → wird oben links angezeigt.
4. **Lyrics laden – drei Möglichkeiten:**  
   - **Einzelne Datei:** „Einzelne Lyrics-Datei (.lrc oder .lcr)“ → eine `.lrc`/`.lcr` wählen.  
   - **Ordner mit Unterordnern:** „Lyrics-Ordner mit Unterordnern auswählen“ → Ordner wählen (nutzt `webkitdirectory`). Alle `.lrc`/`.lcr`-Dateien werden rekursiv gefunden, numerisch sortiert (1, 2, … 10) und in die Queue übernommen.  
   - **Apple-Music-Playlist-Link (optional):** URL in das Feld „Apple-Music-Playlist-Link“ eintragen. Beim Start wird der Link in neuem Tab geöffnet.
5. **Animationsfarbe festlegen:**  
   - Color-Picker „Feste Animationsfarbe“ (Standard `#55ff9b`). Ändert die CSS-Variable `--accent` sofort (Orb, Fortschrittsbalken, Buttons).
6. **Alles starten:**  
   - Button **„▶ Alles starten“** klicken → löst folgende Aktionen aus (siehe 3.2).

### 3.2 Start-Sequenz („▶ Alles starten“)
1. **macOS-Kurzbefehl „Start“ aufrufen:** `window.location.href = "shortcuts://run-shortcut?name=Start"` (muss direkt aus Nutzerklick kommen).
2. **Apple-Music-Link öffnen:** Falls Link eingetragen → `window.open(url, "_blank")`.
3. **Vollbild anfordern:** `document.documentElement.requestFullscreen()`.
4. **Video starten:** Falls Video geladen → `video.play()` (kann durch Browser-Policy blockiert werden → Statusmeldung).
5. **UI umschalten:** Panel ausblenden, Toolbar einblenden, Status „Visualizer läuft“.
6. **Animation & Beat-Timer starten:** `requestAnimationFrame`-Loop + `setInterval` für Orb-Puls (1,35 s).

### 3.3 Laufzeit-Steuerung (Toolbar)
| Button | ID | Funktion |
|--------|-----|----------|
| ▶ Start | `#play` | Fortsetzen nach Pause (Video + Animation + Beat-Timer). |
| Ⅱ Pause | `#pause` | Pausieren: Video stoppen, Animation anhalten, elapsed Zeit merken. |
| ⏮ Lyrics zurück | `#previous` | Springt zur **vorherigen Lyrics-Datei** in der Queue (Index −1), Zeit auf 0 zurücksetzen. |
| Lyrics weiter ⏭ | `#next` | Springt zur **nächsten Lyrics-Datei** in der Queue (Index +1), Zeit auf 0 zurücksetzen. |
| ⚙ | `#settings` | Blendet das Einstellungs-Panel wieder ein (Visualizer läuft weiter). |
| ⛶ Vollbild | `#fullButton` | Toggelt Vollbild-Modus (Button-Text wechselt auf „Vollbild aktiv“). |

### 3.4 Lyrics-Navigation & Queue
- **Queue-Reihenfolge:** Natürliche Sortierung der relativen Pfade (numerisch: 1, 2, 3 … 10).
- **Aktuelle Lyrics-Datei:** Wird in `#track` (Dateiname) und `#queueInfo` („Lyrics X / Y · Pfad“) angezeigt.
- **Lyrics-Anzeige:** Vor dem ersten Zeitstempel leer; danach wird die jeweils aktuelle Zeile basierend auf Video-Zeit + `lyricOffset` eingeblendet.
- **Weiter/Zurück:** Setzt `elapsedBeforePause = 0` und `startedAt = performance.now()` → Zeit läuft bei neuer Datei von 0 an.

### 3.5 Einstellungen während der Laufzeit ändern
- Klick auf **⚙ (Einstellungen)** → Panel erscheint über dem laufenden Visualizer.
- Video, Cover, Lyrics, Farbe können **neu geladen** werden (alte Object-URLs werden revoked).
- **Warnung:** Ein Klick auf „▶ Alles starten“ während der Laufzeit führt `startVisualizer()` erneut aus (Kurzbefehl, Playlist, Vollbild), aber `running` ist bereits `true` → Video/Animation werden **nicht neu gestartet** (Guard `if (running) return;`).

---

## 4. Eingaben & Ausgaben

### 4.1 Eingaben (User-Interaktion)
| Element | Typ | Erwarteter Wert |
|---------|-----|-----------------|
| `#playlist` | `input[type="url"]` | Apple-Music-URL (`music.apple.com` / `itunes.apple.com`) |
| `#videoFile` | `input[type="file"]` | Videodatei (einzelne) |
| `#coverFile` | `input[type="file"]` | Bilddatei (einzelne) |
| `#lyricsFile` | `input[type="file"]` | Einzelne `.lrc`/`.lcr` |
| `#folderFiles` | `input[type="file"] webkitdirectory multiple` | Ordner (rekursiv) mit `.lrc`/`.lcr` |
| `#accent` | `input[type="color"]` | Hex-Farbwert (Standard `#55ff9b`) |
| Buttons | `click` | Siehe 3.3 |

### 4.2 Ausgaben (Visuell / System)
- **DOM-Updates:** Cover, Titel, Status, Lyrics, Queue-Info, Fortschrittsbalken, Orb-Puls (CSS-Klasse), Panel/Toolbar-Sichtbarkeit.
- **Browser-APIs:** `URL.createObjectURL` (Video, Cover), `requestFullscreen`, `window.open` (Playlist), `location.href` (Shortcut).
- **Konsolen-Logs:** Warnungen bei fehlerhaften Lyrics-Dateien (`console.warn`).

---

## 5. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache (Code-basiert) | Abhilfe |
|---------|----------------------------------|---------|
| **Video startet nicht / bleibt schwarz** | Browser blockiert `autoplay` ohne Nutzerinteraktion (obwohl Start per Klick erfolgt, kann Policy greifen). | Statusmeldung „Video konnte nicht automatisch starten.“ erscheint. Manuell im Browser erlauben oder Video per Toolbar „▶ Start“ erneut versuchen. |
| **Keine Lyrics zu sehen** | - Keine `.lrc`/`.lcr` im Ordner/Datei<br>- Zeitstempel-Format nicht erkannt (RegEx: `\[(\d{1,2}):(\d{2})(?:[.:](\d{1,3}))?\]`)<br>- Lyrics-Datei leer oder nur Metadaten (z. B. `[ti:...]`, `[ar:...]`) ohne Textzeilen | Prüfen: Dateiendung `.lrc`/`.lcr`, Zeitstempel pro Zeile, Text nach dem Tag. Im Code: `parseLRC` ignoriert Zeilen ohne Text nach Tag-Entfernung. |
| **Lyrics laufen asynchron (zu früh/spät)** | `lyricOffset` ist im Code definiert (Default 0), aber **kein UI zur Anpassung**. | Im Quellcode nicht eindeutig erkennbar, wie Offset zur Laufzeit geändert werden soll. Workaround: Code anpassen (`lyricOffset = X`) oder Lyrics-Datei korrigieren. |
| **Orb pulsiert nicht im Takt der Musik** | Puls-Intervall ist **fix 1.350 ms** (`setInterval`), keine Audio-Analyse. | Erwartetes Verhalten (Code-Kommentar: „Die Kreis-Pulse sind simuliert“). |
| **Kurzbefehl „Start“ öffnet sich nicht / Fehlermeldung** | - Nicht auf macOS<br>- Kurzbefehl „Start“ nicht in Kurzbefehle-App vorhanden<br>- `shortcuts://`-Scheme nicht registriert | Nur auf macOS funktional. Kurzbefehl unter `https://www.icloud.com/shortcuts/ba602c51c79040f0b4e00b315004e43e` importieren. |
| **Apple-Music-Link wird nicht geöffnet / Pop-up geblockt** | `window.open` wird synchron im Click-Handler aufgerufen, aber Browser-Pop-up-Blocker können trotzdem greifen. | Pop-ups für die Seite erlauben; Link manuell kopieren. |
| **Vollbild funktioniert nicht** | `requestFullscreen` schlägt fehl (z. B. in iframe ohne `allowfullscreen`, Browser-Einstellung). | Statusmeldung: „Vollbild nicht verfügbar – bitte über das Browsermenü aktivieren.“ |
| **Nach Neuladen alles weg** | Kein `localStorage` / `IndexedDB` – Zustand nur im RAM. | Dateien erneut auswählen. |
| **Farbe ändert sich nicht** | Color-Picker ändert `--accent` sofort per `input`-Event. Wenn nicht: Browser-Cache / CSS-Variable nicht unterstützt. | Browser aktualisieren; moderne Browser unterstützen CSS-Variablen. |

---

## 6. Datenschutz & Berechtigungen
