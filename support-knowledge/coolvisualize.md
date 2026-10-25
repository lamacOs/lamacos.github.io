<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: coolvisualize -->
<!-- source-files: ["coolvisualize/index.html", "coolvisualize/shortcut.txt"] -->

# coolvisualize – Support-Dokumentation

**Vermuteter Zweck:** `coolvisualize` ist ein browserbasierter Musik-Visualizer für macOS. Er kombiniert ein lokal ausgewähltes Hintergrundvideo, zeitgestempelte Lyrics aus `.lrc`- oder `.lcr`-Dateien, ein optionales Coverbild, eine frei wählbare Animationsfarbe und einen macOS-Kurzbefehl namens „Start“.  
**Quellcode-Pfad:** `coolvisualize`  
**Datum der Erstellung:** 11. März 2026

> **Hinweis zum Quellcode:** Die Angaben basieren auf den bereitgestellten Auszügen aus `coolvisualize/index.html` und `coolvisualize/shortcut.txt`. Da nur einzelne Dateien vorliegen, sind insbesondere das Verhalten des macOS-Kurzbefehls und die Kommunikation zwischen Website und Musikplayer nicht vollständig nachvollziehbar.

---

## 1. Überblick

`coolvisualize` erstellt eine vollflächige Präsentation mit folgenden Elementen:

- einem lokal ausgewählten Hintergrundvideo,
- synchronisierten Lyrics,
- einem optionalen Coverbild,
- einer pulsierenden Kreis-Animation,
- einer fest einstellbaren Animationsfarbe,
- einer Wiedergabeliste aus einer oder mehreren Lyrics-Dateien,
- einer Fortschrittsanzeige für das Video,
- einem optionalen Apple-Music-Playlist-Link.

Die Website ist als einzelne Seite aufgebaut. Die Einstellungen werden zunächst in einem mittig angezeigten Panel dargestellt. Nach dem Start wird dieses ausgeblendet und eine Steuerleiste am unteren Bildschirmrand eingeblendet.

---

## 2. Voraussetzungen und unterstützte Umgebung

### 2.1 Browser

Für die vollständige Nutzung wird ein aktueller Browser mit folgenden Funktionen benötigt:

- JavaScript,
- HTML5-Video,
- Web Audio ist im vorliegenden Quellcode nicht erforderlich,
- WebKit-/Safari-Unterstützung für die Auswahl ganzer Ordner,
- Fullscreen-API,
- Unterstützung für lokale Dateien über `File` beziehungsweise `Blob`-URLs.

Die Gestaltung und Bedienung sind besonders auf Safari und macOS abgestimmt.

### 2.2 macOS-Kurzbefehl „Start“

Beim Klick auf **„▶ Alles starten“** versucht die Website, den macOS-Kurzbefehl mit dem Namen **„Start“** auszuführen.

Dafür gilt:

- Der Kurzbefehl muss auf dem verwendeten macOS-Gerät vorhanden und entsprechend benannt sein.
- Beim ersten Aufruf kann macOS eine Bestätigung anzeigen.
- Der Kurzbefehl wird über die Kennung `shortcuts://run-shortcut` aufgerufen.
- Das Verhalten des Kurzbefehls selbst ist im bereitgestellten Website-Quellcode nicht eindeutig erkennbar.

In `coolvisualize/shortcut.txt` ist ein iCloud-Link für einen passenden Kurzbefehl hinterlegt. Der Link kann von der Website selbst nicht automatisch zur Einrichtung verwendet werden; die Einrichtung erfolgt über die offizielle Apple-Kurzbefehle-App oder eine manuelle Eingabe.

### 2.3 Dateiberechtigungen

Beim Auswählen von Dateien beziehungsweise Ordnern erteilt der Browser Zugriff auf die ausgewählten Inhalte. Es werden keine expliziten Mikrofon-, Kamera- oder Standortberechtigungen angefordert.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Hintergrund

Die Website verwendet einen dunklen, nahezu schwarzen Hintergrund. Sobald ein Hintergrundvideo ausgewählt und gestartet wurde, wird dieses als festes, bildschirmfüllendes Hintergrundvideo angezeigt.

Eine halbtransparente Verdunkelung liegt über dem Video, damit Cover, Trackname und Lyrics besser lesbar bleiben.

### 3.2 Coverbild

Oben links befindet sich ein quadratisches Coverbild mit abgerundeten Ecken. Solange kein Cover ausgewählt wurde, bleibt dieser Bereich als dunkler Platzhalter sichtbar.

Das Cover kann über **„Coverbild (optional)“** ausgewählt werden.

### 3.3 Trackanzeige und Status

Neben dem Cover zeigt die Website den aktuell ausgewählten Lyrics-Dateinamen. In der Zeile darunter wird der aktuelle Betriebszustand angezeigt, beispielsweise:

- **„Bereit zum Starten“**
- **„x Lyrics-Datei(en) geladen“**
- **„Visualizer läuft“**
- **„Visualizer pausiert“**
- **„Video konnte nicht automatisch starten.“**
- **„Keine Lyrics geladen“**
- **„Vollbild nicht verfügbar – bitte über das Browsermenü aktivieren.“**

Der Titel über der Statusanzeige lautet beim ersten Laden **„lamacOs Visualizer“**. Nach dem Laden der Lyrics-Liste wird dort der Name der aktuellen Datei angezeigt.

### 3.4 Kreis-Animation

Oben rechts befindet sich ein leuchtender Kreis. Während der Visualizer läuft, wird seine Größe in einem regelmäßigen Takt kurzzeitig vergrößert.

Wichtig: Die Kreis-Pulse sind ausdrücklich **simuliert**. Sie werden nicht aus der tatsächlichen Musik berechnet. Die Animationsfarbe kann über das Farbfeld festgelegt werden.

### 3.5 Lyrics

In der Bildschirmmitte werden die zeitgestempelten Lyrics angezeigt. Vor dem ersten gültigen Zeitstempel bleibt der Textbereich leer. Wenn eine Datei geladen wurde, aber keine zeitgestempelten Zeilen erkannt werden, erscheint der Hinweis:

**„Keine zeitgestempelten Lyrics gefunden.“**

Der Text wird weiß, fett und mit schwarzer Kontur dargestellt. Dadurch bleibt er auch über einem hellen Video sichtbar.

### 3.6 Einstellungs-Panel

Beim ersten Aufruf ist ein mittig platziertes Panel mit dem Titel **„🎵 Music Visualizer“** und dem Untertitel **„Deine Musik. Dein Video. Dein Style.“** sichtbar.

Es enthält:

1. ein Eingabefeld für einen Apple-Music-Playlist-Link,
2. eine Dateiauswahl für das Hintergrundvideo,
3. eine Dateiauswahl für eine einzelne Lyrics-Datei,
4. eine Ordnerauswahl für mehrere Lyrics-Dateien,
5. eine Dateiauswahl für ein Coverbild,
6. ein Farbfeld für die Animationsfarbe,
7. die Schaltflächen **„▶ Alles starten“** und **„⛶ Vollbild“**,
8. einen Hinweistext zu macOS und zur simulierten Kreis-Animation.

Während der Visualizer läuft, wird das Panel ausgeblendet. Über **„⚙“** in der unteren Steuerleiste kann es wieder geöffnet werden.

### 3.7 Untere Steuerleiste

Nach dem Start erscheint am unteren Rand eine Steuerleiste mit folgenden Schaltflächen:

- **„▶ Start“**
- **„Ⅱ Pause“**
- **„⏮ Lyrics zurück“**
- **„Lyrics weiter ⏭“**
- **„⚙“**
- **„⛶ Vollbild“**

Da der Bildschirmbereich begrenzt ist, kann sich die Leiste auf kleinen Displays über mehrere Zeilen umbrechen.

### 3.8 Wiedergabelisten-Anzeige

Oberhalb der Steuerleiste wird der aktuelle Eintrag der Lyrics-Wiedergabeliste angezeigt, zum Beispiel:

**„Lyrics 2 / 5 · 2/song.lrc“**

Sie erscheint nur, wenn mindestens eine Lyrics-Datei geladen wurde.

### 3.9 Fortschrittsanzeige

Am unteren very edge des Bildschirms befindet sich eine dünne grüne Fortschrittslinie. Sie zeigt den Fortschritt des Hintergrundvideos an, sofern dessen Laufzeit technisch ermittelt werden kann.

---

## 4. Bedienung Schritt für Schritt

### 4.1 Vorbereitung

1. Öffnen Sie die Website in einem aktuellen Browser.
2. Stellen Sie sicher, dass auf dem macOS-Gerät der Kurzbefehl **„Start“** eingerichtet und benannt ist.
3. Wählen Sie bei Bedarf die Dateien aus, die verwendet werden sollen.

### 4.2 Apple-Music-Playlist-Link eingeben

1. Öffnen Sie das Einstellungs-Panel.
2. Geben Sie in das Feld **„Apple-Music-Playlist-Link (optional, öffnet zusätzlich die Playlist)“** eine Apple-Music-Adresse ein, beispielsweise eine URL mit `music.apple.com` oder `itunes.apple.com`.
3. Lassen Sie das Feld leer, wenn die Playlist nicht geöffnet werden soll.

Die eingegebene Adresse wird erst beim Klick auf **„▶ Alles starten“** geöffnet. Es wird nicht automatisch beim Eintippen geöffnet.

### 4.3 Hintergrundvideo auswählen

1. Klicken Sie im Bereich **„Hintergrundvideo auswählen“** auf die Dateiauswahl.
2. Wählen Sie eine lokale Videodatei aus.
3. Bestätigen Sie die Auswahl im Betriebssystem.

Das Video wird lokal in eine temporäre Browser-URL geladen. Es ist im Quellcode nicht erkennbar, welche Videoformate der jeweils verwendete Browser unterstützt. Am zuverlässigsten ist ein vom Browser unterstütztes Format wie MP4 mit H.264-Video.

### 4.4 Einzelne Lyrics-Datei auswählen

1. Klicken Sie auf **„Einzelne Lyrics-Datei (.lrc oder .lcr)“**.
2. Wählen Sie eine `.lrc`- oder `.lcr`-Datei aus.
3. Die Datei wird eingelesen und als erster Eintrag der Lyrics-Liste verwendet.

Die Dateierweiterung wird ohne Rücksicht auf Groß- oder Kleinschreibung erkannt. Versehentliche Leerzeichen am Ende des Dateinamens werden bei der Prüfung toleriert.

### 4.5 Mehrere Lyrics-Dateien auswählen

1. Klicken Sie auf **„Lyrics-Ordner mit Unterordnern auswählen“**.
2. Wählen Sie den gewünschten Ordner aus.
3. Bestätigen Sie den Zugriff auf den Ordner.

Die Website übernimmt nur `.lrc`- und `.lcr`-Dateien. Andere Dateitypen werden ignoriert. Relative Pfade werden normalisiert und numerisch sortiert. Dadurch wird beispielsweise die Reihenfolge `1`, `2`, `10` statt `1`, `10`, `2` verwendet.

Unterordner können für die Sortierung verwendet werden. Das im Panel gezeigte Beispiel lautet:

```text
1/song.lrc
2/song.lrc
10/song.lrc
```

Doppelte relative Pfade werden nur einmal übernommen.

### 4.6 Coverbild auswählen

1. Klicken Sie auf **„Coverbild (optional)“**.
2. Wählen Sie ein lokales Bild aus.
3. Das Bild erscheint unmittelbar oben links.

Das empfohlene Seitenverhältnis ist quadratisch, da der Anzeigebereich quadratisch zugeschnitten wird. Welche Bildformate und Dateigrößen unterstützt werden, hängt vom Browser ab.

### 4.7 Animationsfarbe festlegen

1. Öffnen Sie das Farbfeld neben **„Feste Animationsfarbe“**.
2. Wählen Sie eine Farbe aus.

Die gewählte Farbe wird unmittelbar für Kreis, Fortschrittslinie und hervorgehobene Schaltflächen verwendet. Es findet keine automatische Farbwechsel-Animation statt.

### 4.8 Visualizer starten

1. Klicken Sie auf **„▶ Alles starten“**.
2. Die Website versucht:
   - den macOS-Kurzbefehl **„Start“** auszuführen,
   - einen angegebenen Apple-Music-Playlist-Link in einem neuen Tab zu öffnen,
   - den Browser in den Vollbildmodus zu versetzen,
   - das Hintergrundvideo abzuspielen,
   - Lyrics und Kreis-Animation zu starten.
3. Das Einstellungs-Panel wird ausgeblendet.
4. Die untere Steuerleiste erscheint.

Ist der macOS-Kurzbefehl nicht verfügbar oder wird er vom Betriebssystem blockiert, kann die Website weiterhin ihr eigenes Video und ihre Lyrics anzeigen. Ob zusätzlich ein externer Musikplayer oder Apple Music gestartet wird, hängt vom Kurzbefehl ab und ist im Website-Quellcode nicht eindeutig erkennbar.

### 4.9 Wiedergabe pausieren und fortsetzen

- Klicken Sie auf **„Ⅱ Pause“**, um Video, Lyrics-Timing und Kreis-Pulse anzuhalten.
- Klicken Sie auf **„▶ Start“**, um die Wiedergabe fortzusetzen.

Beim Pausieren wird die bisherige Laufzeit gespeichert. Beim Fortsetzen wird das Video erneut gestartet beziehungsweise fortgesetzt und das Lyrics-Timing anhand der gespeicherten Laufzeit fortgeführt.

### 4.10 Zwischen Lyrics-Dateien wechseln

- Klicken Sie auf **„Lyrics weiter ⏭“**, um zur nächsten geladenen Datei zu wechseln.
- Klicken Sie auf **„⏮ Lyrics zurück“**, um zur vorherigen Datei zurückzugehen.

Beim Wechsel:

- beginnt die Zeitberechnung der Lyrics wieder bei null,
- wird der aktuelle Dateiname oben angezeigt,
- wird die Wiedergabelisten-Anzeige aktualisiert,
- wird die nächste Datei über die Steuerleiste ausgewählt.

An der ersten beziehungsweise letzten Datei führt der jeweilige Vorwärts- beziehungsweise Rückwärts-Klick zu keiner weiteren Änderung.

### 4.11 Einstellungen erneut öffnen

1. Klicken Sie in der unteren Steuerleiste auf **„⚙“**.
2. Das Einstellungs-Panel erscheint wieder über der laufenden Präsentation.

Das erneute Laden einer Lyrics-Auswahl ersetzt die bisherige Lyrics-Liste.

### 4.12 Vollbild aktivieren oder verlassen

- Klicken Sie auf **„⛶ Vollbild“**, um den Vollbildmodus zu aktivieren.
- Im aktivierten Zustand wird die Beschriftung zu **„⛶ Vollbild aktiv“**.
- Um den Vollbildmodus zu verlassen, verwenden Sie in der Regel die Vollbildsteuerung des Browsers oder drücken Sie erneut auf die Schaltfläche, sofern der Browser dies zulässt.

Der Vollbildmodus kann alternativ über das Browsermenü aktiviert werden. Die Website verwendet dafür die Fullscreen-API des Browsers.

---

## 5. Unterstütztes LRC-Format

Die Website erkennt Zeitstempel nach dem Muster:

```text
[mm:ss]
[mm:ss.x]
[mm:ss.xxx]
```

Dabei sind:

- `mm` eine oder zwei Minuten,
- `ss` zwei Sekunden,
- `.x` oder `.xxx` optionale Sekundenbruchteile.

Beispiel:

```lrc
[00:12.50]Erste Zeile
[01:05.00]Zweite Zeile
```

Die Dateien werden zeilenweise eingelesen. Metadaten wie `[ar:]`, `[ti:]` oder `[al:]` werden zwar als Text entfernt
