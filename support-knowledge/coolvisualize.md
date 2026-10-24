<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: coolvisualize -->
<!-- source-files: ["coolvisualize/index.html", "coolvisualize/shortcut.txt"] -->

# coolvisualize

**Vermuteter Zweck:** `coolvisualize` ist eine browserbasierte Music-Visualizer-Anwendung. Sie kombiniert ein lokal ausgewähltes Hintergrundvideo, zeitgestempelte Lyrics, ein optionales Coverbild, einen Apple-Music-Playlist-Link und eine pulsierende Kreis-/Farbanimation zu einer vollflächigen Präsentation.

**Quellcode-Pfad:** `coolvisualize`  
**Datum der Erstellung:** 12. März 2025

---

## 1. Überblick

Die Website läuft als einzelne HTML-Seite und benötigt laut Quellcode keine sichtbare Anmeldung. Die wichtigsten Bestandteile sind:

- ein zentriertes Einstellungsfenster,
- ein lokales Hintergrundvideo,
- einzelne oder mehrere Lyrics-Dateien im LRC-Format,
- ein optionales Coverbild,
- eine frei wählbare, feste Animationsfarbe,
- eine simulierte pulsierende Kreisanimation,
- ein unteres Bedienfeld mit Start, Pause, Lyrics-Navigation, Einstellungen und Vollbild,
- eine optionale Verknüpfung mit einem Apple-Music-Playlist-Link,
- der Start eines macOS-Kurzbefehls namens `Start`.

Die Website ist optisch für eine Präsentation auf einem größeren Bildschirm ausgelegt. Die Farb- und Hintergrundgestaltung erzeugt einen dunklen, halbtransparenten Look.

---

## 2. Voraussetzungen

### 2.1 Allgemeine Voraussetzungen

Für die grundlegende Darstellung wird ein aktueller Browser benötigt. Im Quellcode werden folgende Browser- bzw. Plattformfunktionen verwendet:

- Auswahl lokaler Dateien,
- lokale Datei-URLs über `URL.createObjectURL()`,
- HTML5-Video,
- Web Animations beziehungsweise `requestAnimationFrame`,
- Vollbild über die Fullscreen API,
- automatisches Abspielen von Video,
- `window.open()` für den Apple-Music-Link.

Ob alle verwendeten Funktionen in jedem Browser und auf jedem Betriebssystem identisch funktionieren, ist im Quellcode nicht eindeutig erkennbar.

### 2.2 Voraussetzungen für den macOS-Kurzbefehl

Beim Betätigen von **„▶ Alles starten“** wird die Adresse

```text
shortcuts://run-shortcut?name=Start
```

aufgerufen.

Damit dieser Teil funktioniert, sind mindestens erforderlich:

- macOS,
- die Apple-App „Kurzbefehle“,
- ein Kurzbefehl mit der Bezeichnung `Start`,
- die Erlaubnis der App beziehungsweise des Browsers, den Kurzbefehl auszuführen.

Der Quellcode enthält einen Verweis auf einen iCloud-Kurzbefehl. Ob dieser Verweis ohne Anmeldung, ohne Apple-ID oder mit besonderen Freigaben funktioniert, ist im Quellcode nicht eindeutig erkennbar. Der tatsächliche Inhalt und die Schritte des Kurzbefehls sind im bereitgestellten Quellcode nicht enthalten.

### 2.3 Dateiformate

Bestätigt unterstützt werden:

| Eingabe | Unterstütztes Format |
|---|---|
| Hintergrundvideo | Im Quellcode nicht eindeutig auf ein bestimmtes Format beschränkt; verwendet wird das vom Browser unterstützte Videoformat |
| Einzelne Lyrics-Datei | `.lrc` und `.lcr` |
| Lyrics-Ordner | `.lrc`- und `.lcr`-Dateien inklusive Unterordnern |
| Coverbild | Vom Browser unterstütztes Bildformat; keine Dateiendungsfilterung im Quellcode |
| Apple-Music-Playlist | URL mit den Hosts `music.apple.com` oder `itunes.apple.com` |

---

## 3. Sichtbare Bereiche der Website

## 3.1 Hintergrund

Die gesamte Seite besitzt einen dunklen Hintergrund. Sobald ein Hintergrundvideo ausgewählt und gestartet wurde, wird es als fixiertes, seitenfüllendes Video dargestellt.

Eine dezente dunkle Überlagerung liegt über dem Video, damit Texte und Bedienelemente sichtbar bleiben.

## 3.2 Coverbild oben links

Oben links befindet sich ein quadratisches Coverbild mit abgerundeten Ecken.

- Ohne Auswahl bleibt der vorgesehene Platz sichtbar.
- Nach Auswahl eines Coverbilds wird das Bild dort angezeigt.
- Das Bild wird lokal aus dem Browser verarbeitet und nicht an einen im Quellcode erkennbaren Server hochgeladen.

## 3.3 Track-Anzeige

Neben dem Coverbild zeigt die Website den aktuellen Dateinamen der Lyrics sowie eine Statuszeile.

Mögliche bestätigte Statustexte sind:

- `Bereit zum Starten`
- `Visualizer läuft`
- `Visualizer pausiert`
- `Video konnte nicht automatisch starten.`
- `Keine Lyrics geladen`
- eine Anzahl geladener Lyrics-Dateien
- `Vollbild nicht verfügbar – bitte über das Browsermenü aktivieren.`

Wenn eine Lyrics-Datei geladen wurde, wird ihr Dateiname links oben angezeigt.

## 3.4 Kreisanimation oben rechts

Oben rechts befindet sich ein leuchtender Kreis. Dieser:

- verwendet die im Einstellungsfenster gewählte Farbe,
- pulsiert in regelmäßigen Abständen,
- wird beim Start beziehungsweise Fortsetzen aktiviert,
- wird beim Pausieren beendet.

Die Pulsation ist laut Oberfläche und Quellcode **simuliert**. Sie analysiert weder die Musik noch das Video und ist nicht zwingend synchron zum Audiotakt.

## 3.5 Lyrics-Anzeige in der Bildschirmmitte

In der Mitte der Seite steht der aktuell zeitgestempelte Liedtext.

Vor dem ersten gültigen Zeitstempel bleibt der Bereich leer. Bei einer Datei ohne erkennbare zeitgestempelte Zeilen erscheint:

> Keine zeitgestempelten Lyrics gefunden.

Mehrere zeitgestempelte Zeilen innerhalb derselben LRC-Zeile werden unterstützt. Das Programm verwendet dann den zulzt passenden Eintrag.

## 3.6 Einstellungsfenster

Beim ersten Aufruf ist ein zentriertes Einstellungsfenster mit der Überschrift **„🎵 Music Visualizer“** sichtbar.

Es enthält:

1. ein Eingabefeld für einen Apple-Music-Playlist-Link,
2. eine Dateiauswahl für das Hintergrundvideo,
3. eine Dateiauswahl für eine einzelne Lyrics-Datei,
4. eine Ordnerauswahl für mehrere Lyrics-Dateien,
5. eine Dateiauswahl für ein Coverbild,
6. eine Farbauswahl für die feste Animationsfarbe,
7. die Schaltflächen **„▶ Alles starten“** und **„⛶ Vollbild“**.

Nach dem Start wird das Einstellungsfenster ausgeblendet. Über die Schaltfläche **„⚙“** im unteren Bedienfeld kann es erneut geöffnet werden.

## 3.7 Unteres Bedienfeld

Nach dem Start erscheint am unteren Bildschirmrand eine Bedienleiste mit folgenden sichtbaren Beschriftungen:

- **„▶ Start“**
- **„Ⅱ Pause“**
- **„⏮ Lyrics zurück“**
- **„Lyrics weiter ⏭“**
- **„⚙“**
- **„⛶ Vollbild“**

Die Leiste wird auf kleinen Bildschirmen schmaler dargestellt und ihre Beschriftungen werden verkleinert.

## 3.8 Wiedergabefortschritt

Am untersten Rand befindet sich eine dünne grüne Fortschrittsleiste. Sie zeigt den Anteil des bereits abgespielten Hintergrundvideos an.

Voraussetzung dafür ist, dass der Browser die Videodauer korrekt ermitteln kann.

## 3.9 Queue-Anzeige

Oberhalb des Bedienfelds erscheint nach dem Laden von Lyrics eine Anzeige wie:

```text
Lyrics 1 / 5 · song.lrc
```

Sie enthält den aktuellen Queue-Index, die Gesamtzahl der geladenen Dateien und den relativen Pfad der aktuellen Datei.

---

## 4. Bedienung Schritt für Schritt

## 4.1 Apple-Music-Playlist vorbereiten

1. Öffnen Sie die zentrale Apple-Music-Webseite.
2. Kopieren Sie die Adresse der gewünschten Playlist.
3. Fügen Sie die Adresse in das Feld **„Apple-Music-Playlist-Link (optional, öffnet zusätzlich die Playlist)“** ein.

Die Eingabe muss eine vollständige `https://`-Adresse sein. Akzeptiert werden nur Links zu:

- `music.apple.com`
- `itunes.apple.com`

Ein Link zu einer anderen Domain wird abgelehnt.

## 4.2 Hintergrundvideo auswählen

1. Klicken Sie auf die Dateiauswahl bei **„Hintergrundvideo auswählen“**.
2. Wählen Sie ein lokales Video aus.
3. Das Video wird in die Website geladen und im Hintergrund vorgesehen.

Das Video startet jedoch nicht zwingend bereits mit der Dateiauswahl. Es wird beim Start beziehungsweise Fortsetzen abgespielt.

## 4.3 Eine einzelne Lyrics-Datei auswählen

1. Klicken Sie auf die Dateiauswahl bei **„Einzelne Lyrics-Datei (.lrc oder .lcr)“**.
2. Wählen Sie eine `.lrc`- oder `.lcr`-Datei aus.
3. Die Datei wird gelesen und als einziger Eintrag in die Lyrics-Queue aufgenommen.
4. Links oben erscheint der Name der Datei.
5. In der Queue-Anzeige wird der geladene Eintrag angezeigt.

Das Laden einer einzelnen Datei ersetzt eine zuvor geladene Queue.

## 4.4 Mehrere Lyrics-Dateien auswählen

1. Klicken Sie auf die Auswahl bei **„Lyrics-Ordner mit Unterordnern auswählen“**.
2. Wählen Sie einen Ordner und bestätigen Sie die Auswahl.
3. Die Website durchsucht die Auswahl nach `.lrc`- und `.lcr`-Dateien.
4. Dateien aus Unterordnern werden einbezogen.
5. Die Dateien werden numerisch sortiert.

Beispielstruktur laut Oberfläche:

```text
1/song.lrc
2/song.lrc
10/song.lrc
```

Die Reihenfolge wird dann:

```text
1/song.lrc
2/song.lrc
10/song.lrc
```

Die Groß-/Kleinschreibung der Dateiendung wird nicht unterschieden. Ein versehentliches Leerzeichen am Ende des Dateinamens wird beim Erkennen der Dateiendung berücksichtigt.

Doppelte relative Pfade werden nicht mehrfach in die Queue aufgenommen.

## 4.5 Coverbild auswählen

1. Öffnen Sie das Einstellungsfenster.
2. Klicken Sie auf die Dateiauswahl bei **„Coverbild (optional)“**.
3. Wählen Sie ein lokales Bild aus.
4. Das Coverbild wird oben links angezeigt.

Ein Coverbild ist nicht erforderlich.

## 4.6 Animationsfarbe festlegen

1. Klicken Sie im Einstellungsfenster auf das Farbfeld bei **„Feste Animationsfarbe“**.
2. Wählen Sie eine Farbe aus.
3. Die Kreisanimation, Fortschrittsleiste und hervorgehobenen Schaltflächen verwenden unmittelbar die neue Farbe.

Die Farbe bleibt nach der Auswahl fest. Eine automatische Farbänderung ist im Quellcode ausdrücklich nicht vorgesehen.

## 4.7 Alles starten

1. Wählen Sie bei Bedarf Video, Lyrics, Cover und Playlist-Link aus.
2. Klicken Sie auf **„▶ Alles starten“**.
3. Die Website versucht, den macOS-Kurzbefehl `Start` aufzurufen.
4. Falls ein Playlist-Link eingetragen wurde, öffnet die Website zusätzlich den Apple-Music-Link in einem neuen Tab.
5. Die Website versucht, in den Vollbildmodus zu wechseln.
6. Das Hintergrundvideo beginnt zu laufen.
7. Das Einstellungsfenster wird ausgeblendet.
8. Das untere Bedienfeld erscheint.
9. Die Lyrics werden anhand der Laufzeit synchronisiert.
10. Die Kreisanimation beginnt zu pulsieren.

Je nach Browser und macOS-System kann beim ersten Kurzbefehl eine Bestätigung erscheinen. Die Oberfläche weist ausdrücklich darauf hin, dass macOS beim ersten Aufruf nachfragen kann.

## 4.8 Vollbild

Sie können den Vollbildmodus auf zwei Arten anfordern:

- im Einstellungsfenster über **„⛶ Vollbild“**,
- in der unteren Bedienleiste über **„⛶ Vollbild“**.

Während der Vollbildmodus aktiv ist, zeigt die Schaltfläche in der unteren Leiste:

> ⛶ Vollbild aktiv

Beim Verlassen des Vollbildmodus wird sie wieder als:

> ⛶ Vollbild

angezeigt.

## 4.9 Pausieren und fortsetzen

### Pausieren

1. Klicken Sie in der unteren Leiste auf **„Ⅱ Pause“**.
2. Das Video wird pausiert.
3. Die Lyrics-Uhr wird angehalten.
4. Die Pulsanimation endet.
5. Die Statusanzeige wechselt zu **„Visualizer pausiert“**.

### Fortsetzen

1. Klicken Sie auf **„▶ Start“**.
2. Das Video wird fortgesetzt, sofern ein Video geladen wurde.
3. Die Lyrics-Uhr läuft ab der gespeicherten Pausezeit weiter.
4. Die Pulsanimation beginnt erneut.
5. Die Statusanzeige wechselt zu **„Visualizer läuft“**.

Die Schaltfläche **„▶ Start“** dient im unteren Bedienfeld zum Fortsetzen eines pausierten Visualizers. Der eigentliche Start befindet sich im Einstellungsfenster.

## 4.10 Zwischen Lyrics-Dateien wechseln

### Nächste Datei

1. Klicken Sie auf **„Lyrics weiter ⏭“**.
2. Die nächste Datei der numerisch sortierten Queue wird geladen.
3. Die Lyrics-Zeit wird auf null zurückgesetzt.
4. Die Anzeige **„Lyrics x / y“** und der Dateiname oben links werden aktualisiert.

Am Ende der Queue führt diese Schaltfläche keine weitere Aktion aus.

### Vorherige Datei

1. Klicken Sie auf **„⏮ Lyrics zurück“**.
2. Die vorherige Datei wird geladen.
3. Die Lyrics-Zeit wird auf null zurückgesetzt.
4. Die Anzeige **„Lyrics x / y“** und der Dateiname oben links werden aktualisiert.

An der ersten Datei führt diese Schaltfläche keine weitere Aktion aus.

## 4.11 Einstellungen erneut öffnen

1. Klicken Sie in der unteren Leiste auf **„⚙“**.
2. Das Einstellungsfenster wird vor dem laufenden Visualizer eingeblendet.

Im Quellcode ist keine separate Schaltfläche zum vollständigen Beenden oder Neustarten der Präsentation vorhanden. Eine vollständige Beendigung ist deshalb im Quellcode nicht eindeutig erkennbar.

---

## 5. Format und Verarbeitung der Lyrics

## 5.1 Erkannte Zeitstempel

Der Parser unterstützt Zeitstempel in Form von:

```text
[mm:ss]
[mm:ss
