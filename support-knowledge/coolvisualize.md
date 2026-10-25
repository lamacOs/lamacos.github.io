<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: coolvisualize -->
<!-- source-files: ["coolvisualize/index.html", "coolvisualize/shortcut.txt"] -->

# coolvisualize

**Vermuteter Zweck:** Der Music Visualizer „lamacOs Music Visualizer“ („coolvisualize“) kombiniert ein lokal ausgewähltes Hintergrundvideo, synchronisierte Lyrics aus `.lrc`- oder `.lcr`-Dateien, ein optionales Coverbild, eine frei wählbare Animationsfarbe und einen simulierten Kreis-Puls. Er ist für die Nutzung in Verbindung mit dem macOS-Kurzbefehl **„Start“** vorgesehen.

**Quellcode-Pfad:** `coolvisualize`  
**Primäre Quellcodedatei:** `coolvisualize/index.html`  
**Ergänzende Datei:** `coolvisualize/shortcut.txt`  
**Datum der Erstellung:** 16. Juni 2026

> **Hinweis zur Quellcode-Basis:** Die Dokumentation basiert auf den bereitgestellten Auszügen. Ein möglicher geheimer Wert in `shortcut.txt` wird aus Sicherheitsgründen nicht wiedergegeben.

---

## 1. Überblick

„coolvisualize“ ist eine einzelne, in HTML, CSS und JavaScript umgesetzte Website. Sie benötigt keinen sichtbaren Anmeldungsbereich und stellt im Quellcode keine Benutzerkonten oder serverseitigen Funktionen bereit.

Die Website kann:

- ein Hintergrundvideo aus dem lokalen Dateisystem auswählen,
- ein optionales Coverbild anzeigen,
- eine einzelne Lyrics-Datei einlesen,
- einen Ordner mit mehreren Lyrics-Dateien und Unterordnern einlesen,
- Lyrics-Dateien numerisch sortieren,
- zeitgestempelte Lyrics anzeigen,
- zwischen mehreren Lyrics-Dateien wechseln,
- die Animation pausieren und fortsetzen,
- in den Vollbildmodus wechseln,
- einen Apple-Music-Playlist-Link in einem neuen Tab öffnen,
- den macOS-Kurzbefehl **„Start“** aufrufen,
- eine feste Animationsfarbe auswählen.

Die Website ist im Quellcode nicht ausdrücklich als mobiles oder als Desktop-only-Anwendung gekennzeichnet. Das Layout enthält jedoch eine Anpassung für Bildschirmbreiten bis 520 Pixel.

---

## 2. Voraussetzungen

### 2.1 Technische Voraussetzungen

Für die grundlegende Darstellung der Website ist ein aktueller Browser erforderlich, der Folgendes unterstützt:

- HTML5-Video,
- JavaScript,
- die File API,
- `URL.createObjectURL()`,
- `requestAnimationFrame()`,
- Fullscreen API,
- `webkitdirectory` für die Ordnerauswahl.

Die vollständige Bedienung ist im Quellcode für **Safari auf macOS** ausgelegt, insbesondere durch:

- den Aufruf des macOS-Kurzbefehls `shortcuts://`,
- den Hinweis, dass Safari/macOS beim ersten Öffnen des Kurzbefehls eine Bestätigung verlangen kann.

Ob die Website auch in anderen Browsern oder auf anderen Betriebssystemen vollständig funktioniert, ist im Quellcode nicht eindeutig erkennbar.

### 2.2 Inhaltliche Voraussetzungen

Je nach gewünschter Ansicht benötigt der Besucher:

- ein Hintergrundvideo,
- eine einzelne `.lrc`- oder `.lcr`-Datei,
- alternativ einen Ordner mit solchen Dateien,
- optional ein Coverbild,
- optional einen gültigen Link zu `music.apple.com` oder `itunes.apple.com`.

### 2.3 macOS-Kurzbefehl

Die Website versucht beim Start, den macOS-Kurzbefehl mit dem Namen **„Start“** auszuführen. Dafür muss dieser Kurzbefehl auf dem verwendeten macOS-Gerät vorhanden und für die Verwendung mit der Website eingerichtet sein.

Ein Verweis auf einen iCloud-Kurzbefehl ist in `shortcut.txt` enthalten. Der eigentliche Inhalt beziehungsweise die Schritte des Kurzbefehls sind im bereitgestellten Quellcode nicht eindeutig erkennbar.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Hintergrund

Die Website besitzt einen dunklen Seitenhintergrund. Wenn ein Hintergrundvideo ausgewählt und gestartet wurde, wird es hinter allen Bedienelementen eingeblendet. Eine dunkle Schicht legt sich darüber, damit Text und Bedienelemente lesbar bleiben.

### 3.2 Coverbild

Oben links befindet sich ein quadratisches Coverbild. Solange kein Coverbild ausgewählt wurde, bleibt der vorgesehene Platz leer beziehungsweise zeigt den Hintergrund des Elements.

### 3.3 Track-Anzeige

Neben dem Coverbild werden der aktuell ausgewählte Dateiname und darunter der Status angezeigt.

Mögliche Statusmeldungen im Quellcode sind:

- „Bereit zum Starten“
- „Visualizer läuft“
- „Visualizer pausiert“
- Angaben zur Anzahl geladener Lyrics-Dateien
- „Keine Lyrics geladen“
- „Video konnte nicht automatisch starten.“
- „Vollbild nicht verfügbar – bitte über das Browsermenü aktivieren.“

### 3.4 Kreis mit Puls-Animation

Oben rechts befindet sich ein leuchtender Kreis. Während der Visualizer läuft, wird seine Größe in einem regelmäßigen Takt kurz vergrößert und wieder verkleinert.

Die Animation ist ausdrücklich **simuliert**. Sie analysiert im Quellcode nicht die Musik und leitet den Puls auch nicht aus der tatsächlichen Audio- oder Videofrequenz ab.

### 3.5 Lyrics-Anzeige

In der Mitte der Seite steht der aktuell zeitgestempelte Liedtext. Der Text wird groß, fett und mit schwarzer Kontur sowie Schatten dargestellt.

Vor dem ersten gültigen Zeitstempel bleibt der Bereich leer. Wenn eine Datei geladen wurde, aber keine zeitgestempelten Lyrics enthalten sind, erscheint:

> Keine zeitgestempelten Lyrics gefunden.

### 3.6 Einstellungsbereich

Beim Öffnen der Website ist ein mittig positioniertes, halbtransparentes Panel mit dem Titel:

> 🎵 Music Visualizer

Darunter steht:

> Deine Musik. Dein Video. Dein Style.

Das Panel enthält:

1. ein Eingabefeld für einen Apple-Music-Playlist-Link,
2. eine Dateiauswahl für ein Hintergrundvideo,
3. eine Dateiauswahl für eine einzelne Lyrics-Datei,
4. eine Ordnerauswahl für Lyrics-Dateien,
5. eine Dateiauswahl für ein Coverbild,
6. eine Farbauswahl,
7. die Schaltflächen **„▶ Alles starten“** und **„⛶ Vollbild“**,
8. erläuternde Hinweise.

Nach dem Start wird das Panel ausgeblendet. Über die Schaltfläche **„⚙“** in der unteren Werkzeugleiste kann es erneut geöffnet werden.

### 3.7 Untere Werkzeugleiste

Nach dem Start erscheint am unteren Bildschirmrand eine Werkzeugleiste mit:

- **„▶ Start“**
- **„Ⅱ Pause“**
- **„⏮ Lyrics zurück“**
- **„Lyrics weiter ⏭“**
- **„⚙“**
- **„⛶ Vollbild“**

### 3.8 Queue-Anzeige

Über der Werkzeugleiste wird der aktuelle Eintrag der Lyrics-Liste angezeigt, beispielsweise:

> Lyrics 1 / 3 · 1/song.lrc

Die Anzeige wird ausgeblendet, wenn keine Lyrics geladen wurden.

### 3.9 Fortschrittsanzeige

Am unteren Seitenrand befindet sich eine dünne grüne Fortschrittsleiste. Sie zeigt den Fortschritt des Hintergrundvideos an, sofern dessen Dauer bekannt ist.

---

## 4. Erste Einrichtung

### Schritt 1: Website öffnen

Öffnen Sie `coolvisualize/index.html` in einem unterstützten Browser. Für die vollständige macOS-Integration ist Safari auf macOS im Quellcode ausdrücklich berücksichtigt.

### Schritt 2: Apple-Music-Link optional eingeben

Im Feld **„Apple-Music-Playlist-Link (optional, öffnet zusätzlich die Playlist)“** kann ein vollständiger Link eingefügt werden, beispielsweise:

```text
https://music.apple.com/...
```

Zulässig sind laut Code nur die Hostnamen:

- `music.apple.com`
- `itunes.apple.com`

Das Feld ist optional. Ohne Eintrag wird beim Start kein Playlist-Tab geöffnet.

### Schritt 3: Hintergrundvideo auswählen

1. Öffnen Sie die Dateiauswahl **„Hintergrundvideo auswählen“**.
2. Wählen Sie ein lokales Video aus.
3. Das Video wird für die spätere Wiedergabe vorgemerkt.

Das Video beginnt nicht automatisch beim Auswählen, sondern erst beim Start beziehungsweise Fortsetzen.

### Schritt 4: Lyrics auswählen

Sie können entweder:

- eine einzelne Datei über **„Einzelne Lyrics-Datei (.lrc oder .lcr)“** auswählen,
- oder über **„Lyrics-Ordner mit Unterordnern auswählen“** einen ganzen Ordner auswählen.

Für die Ordnerauswahl wird eine Funktion verwendet, die in Safari verfügbar sein sollte. Der Browser muss dabei die Auswahl eines Verzeichnisses erlauben.

### Schritt 5: Coverbild optional auswählen

1. Öffnen Sie die Dateiauswahl **„Coverbild (optional)“**.
2. Wählen Sie ein Bild aus.

Das Bild wird sofort oben links eingesetzt.

### Schritt 6: Farbe optional anpassen

Die Auswahl **„Feste Animationsfarbe“** steuert die Akzentfarbe des Kreises, der Fortschrittsleiste und der hervorgehobenen Schaltflächen.

Die Farbe bleibt während der Laufzeit fest. Es gibt keine automatische Farbwechsel-Animation.

---

## 5. Bedienung

## 5.1 Alles starten

1. Wählen Sie bei Bedarf ein Hintergrundvideo aus.
2. Wählen Sie eine einzelne Lyrics-Datei oder einen Lyrics-Ordner aus.
3. Wählen Sie optional ein Coverbild und eine Farbe aus.
4. Klicken Sie auf **„▶ Alles starten“**.

Beim Klick werden folgende Aktionen angestoßen:

1. Der macOS-Kurzbefehl **„Start“** wird aufgerufen.
2. Falls ein Apple-Music-Link eingetragen wurde, wird die Playlist in einem neuen Browser-Tab geöffnet.
3. Der Browser wechselt in den Vollbildmodus, sofern die Fullscreen API dies erlaubt.
4. Das Hintergrundvideo beginnt, falls eines ausgewählt wurde.
5. Das Einstellungsfenster wird geschlossen.
6. Die untere Werkzeugleiste erscheint.
7. Die Lyrics-Animation und der simulierte Kreis-Puls beginnen.

Wenn kein Hintergrundvideo ausgewählt wurde, starten der Visualizer und die Lyrics trotzdem. Die Videoanzeige bleibt dann ausgeblendet.

### Verhalten bei bereits laufendem Visualizer

Ein erneuter Klick auf **„▶ Alles starten“** startet das Video erneut beziehungsweise setzt es auf den Anfang. Die laufende Animationsschleife wird nicht doppelt erzeugt, da der Code einen bereits laufenden Zustand erkennt.

## 5.2 Pause und Fortsetzen

- **„Ⅱ Pause“** hält Video, Lyrics-Timer und Pulsanimation an.
- **„▶ Start“** setzt alle drei Abläufe fort.

Die verstrichene Lyrics-Zeit bleibt beim Pausieren erhalten.

## 5.3 Zwischen Lyrics-Dateien wechseln

- **„Lyrics weiter ⏭“** springt zur nächsten geladenen Datei.
- **„⏮ Lyrics zurück“** springt zur vorherigen Datei.

Beim Wechsel:

- wird der neue Dateiname in der Track-Anzeige dargestellt,
- beginnt die Lyrics-Zeit wieder bei null,
- wird die Queue-Anzeige aktualisiert,
- beginnt die Zeitanzeige der Lyrics erneut.

An der ersten beziehungsweise letzten Datei führen die Schaltflächen keine weitere Aktion aus.

## 5.4 Einstellungen erneut öffnen

Klicken Sie in der unteren Werkzeugleiste auf **„⚙“**. Das Einstellungsfenster wird über der laufenden Visualizer-Ansicht eingeblendet.

Ob die laufende Wiedergabe beim Öffnen oder Schließen des Panels pausiert, ist im Quellcode nicht eindeutig erkennbar. Der Code enthält keinen entsprechenden automatischen Pauseaufruf.

## 5.5 Vollbild

Es gibt zwei sichtbare Schaltflächen:

- **„⛶ Vollbild“** im Einstellungsfenster,
- **„⛶ Vollbild“** in der unteren Werkzeugleiste.

Der Vollbildstatus wird in der Werkzeugleiste durch die Beschriftung **„⛶ Vollbild aktiv“** dargestellt.

Beim Verlassen des Vollbildmodus wechselt die Beschriftung zurück zu **„⛶ Vollbild“**.

## 5.6 Apple-Music-Playlist öffnen

Der Link wird beim Klick auf **„▶ Alles starten“** zusätzlich geöffnet, sofern das Feld nicht leer ist.

Ein eigener separater Button zum Öffnen des Playlist-Links ist im Quellcode nicht vorhanden.

---

## 6. Eingaben und Ausgaben

## 6.1 Apple-Music-Playlist-Link

**Eingabe:** URL im Feld **„Apple-Music-Playlist-Link (optional, öffnet zusätzlich die Playlist)“**.

**Verarbeitung:**

- Der Link wird getrimmt.
- Er muss als absolute URL parsebar sein.
- Der Hostname muss exakt `music.apple.com` oder `itunes.apple.com` sein.
- Der Link wird in einem neuen Tab geöffnet.

**Ausgabe beziehungsweise Meldung:** Bei einem ungültigen Hostnamen oder einem nicht parsebaren Link erscheint ein Browser-Alert:

> Bitte einen gültigen Apple-Music-Link eingeben.

## 6.2 Hintergrundvideo

**Eingabe:** Eine lokale Videodatei.

**Ausgabe:**

- eine temporäre lokale Object-URL,
- ein Hintergrundvideo hinter der Benutzeroberfläche,
- eine Fortschrittsleiste entsprechend der Videolänge.

Die Datei wird nicht an einen Server übertragen. Im Quellcode ist kein Upload-Vorgang vorhanden.

## 6.3 Lyrics-Datei

**Eingabe:** Eine `.lrc`- oder `.lcr`-Datei.

**Unterstützte Zeitstempelformate:**

```text
[mm:ss]
[mm:ss.x]
[mm:ss.xx]
[mm:ss.xxx]
```

Dabei gilt:

- `mm`: ein- oder zweistellige Minuten,
- `ss`: zweistellige Sekunden,
- der Punktwert ist optional,
- ein Doppelpunkt kann anstelle eines Punktes als Dezimaltrennzeichen verwendet werden.

Beispiel:

```text
[00:12.50]Erster Liedtext
[01:03.00]Zweiter Liedtext
```

Mehrere Zeitstempel in derselben Zeile werden unterstützt. Eine solche Zeile erzeugt mehrere Zeitpunkte mit demselben Text.

## 6.4 Lyrics-Ordner

**Eingabe:** Ein Verzeichnis mit Lyrics-
