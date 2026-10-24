<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: pianosound/mp3tomid -->
<!-- source-files: ["pianosound/mp3tomid/index.html"] -->

# mp3tomid – lamacHub Audio2MIDI

**Vermuteter Zweck:** mp3tomid ist eine browserbasierte Audio-zu-MIDI-Anwendung. Nutzer laden eine Aufnahme hoch, lassen erkannte Piano-Noten automatisch transkribieren, sehen das Ergebnis in einer Piano-Roll-Ansicht und können anschließend eine MIDI-Datei exportieren.

**Quellcode-Pfad:** `pianosound/mp3tomid`

**Datum der Erstellung:** 14. März 2026

> **Hinweis zum Quellcode:** Die vorliegenden Auszüge sind unvollständig. Die Dokumentation beschreibt die im sichtbaren Code erkennbaren Funktionen. Abläufe, die im gekürzten Teil liegen, werden als **„Im Quellcode nicht eindeutig erkennbar“** gekennzeichnet.

---

## 1. Überblick

lamacHub Audio2MIDI bietet einen vollständig im Browser ablaufenden Workflow:

1. Audiodatei auswählen oder per Drag-and-drop hinzufügen
2. Erkennungsparameter einstellen
3. Audio automatisch in Mono und 22.050 Hz konvertieren
4. Piano-Noten automatisch analysieren
5. Erkannte Noten in der Piano Roll ansehen
6. Originalaufnahme abspielen
7. Ergebnis als MIDI-Datei exportieren

Die erkennbare Kopfzeile der Seite lautet **„Audio → MIDI“**. Die Anwendung ist unter der Bezeichnung **„lamacHub Audio2MIDI“** im Kopfbereich sichtbar.

---

## 2. Voraussetzungen

### 2.1 Technische Voraussetzungen

Für die bestätigten Funktionen benötigt die Website:

- Einen aktuellen Browser mit Unterstützung für die **Web Audio API**
- JavaScript-Modulunterstützung, da das Basic-Pitch-Modell als ES-Modul geladen wird
- Eine Internetverbindung, da Basic Pitch und das Modell von einem CDN geladen werden
- Genügend Browser-Speicher für die geladene Audiodatei, das dekodierte Audio und das KI-Modell

Im Quellcode wird ausdrücklich geprüft, ob `AudioContext` oder `webkitAudioContext` verfügbar sind. Fehlen beide, wird die Meldung:

> „Dieser Browser unterstützt die Web Audio API nicht.“

angezeigt.

### 2.2 Unterstützte Dateiformate

Der Dateiauswahldialog akzeptiert laut sichtbarem Quellcode:

- MP3
- WAV
- M4A
- OGG
- FLAC
- zusätzlich allgemein `audio/*`

Die Datei kann außerdem per Drag-and-drop in den Upload-Bereich gezogen werden.

**Im Quellcode nicht eindeutig erkennbar:** Eine harte Validierung der Dateierweiterung oder eine Größenbeschränkung.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Kopfbereich

Im fest positionierten Kopfbereich befinden sich:

- ein orangefarbenes Logo mit dem Buchstaben **„L“**
- die Bezeichnung **„lamacHub Audio2MIDI“**
- die Schaltfläche **„Darstellung wechseln“** mit einem Mondsymbol

Mit **„Darstellung wechseln“** kann zwischen einer hellen und einer dunklen Darstellung gewechselt werden. Der Quellcode enthält dafür eine Dark-Mode-Styledefinition.

### 3.2 Titelbereich

Der zentrale Titel lautet **„Audio → MIDI“**.

Darunter wird erklärt, dass Piano-Aufnahmen automatisch erkannt und direkt im Browser in eine MIDI-Datei umgewandelt werden. Außerdem wird auf die automatische Konvertierung in **Mono und 22.050 Hz** hingewiesen.

### 3.3 Datei-Upload-Bereich

Der Bereich **„Piano-Datei auswählen“** ist als Ablagezone gestaltet und enthält:

- ein Audiosymbol
- die Überschrift **„Piano-Datei auswählen“**
- den Hinweis **„MP3, WAV, M4A, OGG oder FLAC hier hineinziehen oder eine Datei auswählen.“**
- die Schaltfläche **„Datei auswählen“**

Während eine Datei über die Ablagezone gezogen wird, erhält diese eine orange Hervorhebung.

### 3.4 Datei-Information

Nach der Auswahl erscheint ein zusätzlicher Informationseintrag mit:

- dem Dateinamen
- einer Metazeile mit weiteren Angaben
- dem Status **„● bereit“**

### 3.5 Transkriptionsbereich

Nach erfolgreicher Auswahl einer Datei wird der Arbeitsbereich mit zwei Spalten sichtbar.

#### Linke Spalte: „Transkription“

Die Parameter sind:

1. **Erkennungsschwelle**
   - Schieberegler
   - Bereich: 0,05 bis 0,80
   - Schrittweite: 0,05
   - Standardwert: 0,25

2. **Quantisierung**
   - Auswahlfeld
   - Möglichkeiten:
     - Keine
     - 1/4
     - 1/8
     - 1/16
     - 1/32
   - Standardwert: 1/16

3. **MIDI-Tempo**
   - Schieberegler
   - Bereich: 40 bis 240 BPM
   - Standardwert: 120 BPM

Zusätzlich ist ein Hinweisfeld mit folgenden Angaben sichtbar:

- automatische Konvertierung nach **Mono · 22050 Hz**
- Anpassung von Stereo, Mehrkanal und anderen Sample-Raten
- MIDI-Ausgabe mit **1 Track · Channel 1**

Darunter befindet sich die Schaltfläche **„Piano analysieren“**.

#### Rechte Spalte: „Piano Roll“

Die Piano Roll zeigt die erkannten Noten grafisch an. Vor der Analyse enthält sie den Hinweis:

> „Nach der Analyse erscheinen hier die erkannten Piano-Noten.“

Die Ansicht ist horizontal und vertikal scrollbar. Erkannte Noten werden als orangefarbene Rechtecke dargestellt.

Oberhalb der Ansicht befindet sich die Schaltfläche **„Leeren“**.

### 3.6 Fortschrittsbereich

Während der Verarbeitung wird ein Statusbereich mit folgenden Elementen angezeigt:

- Statustext, anfangs **„Bereit“**
- prozentualer Fortschritt, anfangs **„0 %“**
- farbiger Fortschrittsbalken
- Protokollbereich mit zeitgestempelten Meldungen

### 3.7 Audio- und Exportbereich

Nach einer erfolgreichen Analyse wird der Audiobereich sichtbar:

- Überschrift **„Audio“**
- ein eingebetteter Audioplayer
- die Schaltfläche **„▶ Wiedergabe“**
- die Schaltfläche **„MIDI exportieren“**

Die Export-Schaltfläche ist zunächst deaktiviert und wird erst nach erfolgreicher Erstellung der MIDI-Datei aktiviert.

### 3.8 Fußbereich

Die Fußzeile enthält:

> „© 2026 lamacHub · Audio2MIDI“

---

## 4. Bedienung Schritt für Schritt

### 4.1 Audiodatei auswählen

1. Öffnen Sie die Website.
2. Klicken Sie auf **„Datei auswählen“**.
3. Wählen Sie eine unterstützte Audiodatei aus.
4. Alternativ ziehen Sie die Datei direkt in den Bereich **„Piano-Datei auswählen“**.

Nach der Auswahl werden der Dateiname und weitere Metadaten angezeigt. Der Status **„● bereit“** bestätigt, dass die Datei übernommen wurde.

### 4.2 Parameter anpassen

1. Öffnen Sie den Bereich **„Transkription“**.
2. Passen Sie bei Bedarf die **Erkennungsschwelle** an.
3. Wählen Sie eine **Quantisierung**.
4. Legen Sie das **MIDI-Tempo** fest.

Die jeweils aktuellen Werte werden neben den Einstellungen angezeigt.

#### Einstellungen der Erkennungsschwelle

- **Niedrigerer Wert:** Erkennung tendenziell empfindlicher; möglicherweise mehr Noten oder mehr Störungen.
- **Höherer Wert:** Erkennung tendenziell strenger; möglicherweise weniger Noten.
- **1/16:** Ausgewogene Standardwahl mit mittlerer Auflösung.
- **Keine:** Zeitliche Positionen werden nicht auf ein Raster reduziert.
- **1/4 oder 1/8:** Groberes Raster, meist weniger Ereignisse.
- **1/32:** Feineres Raster, meist mehr Ereignisse.

Diese Einordnung ist eine allgemeine technische Einordnung der sichtbaren Parameter. Eine projektspezifische Kalibrierungsempfehlung ist im Quellcode nicht vorhanden.

### 4.3 Audio analysieren

1. Klicken Sie auf **„Piano analysieren“**.
2. Die Audiodatei wird für die Analyse vorbereitet.
3. Der Fortschrittsbereich zeigt den Verarbeitungsstatus und den Prozentwert.
4. Das Protokoll protokolliert die einzelnen Schritte.
5. Nach erfolgreicher Analyse erscheinen die Noten in der Piano Roll.

### 4.4 Ergebnis prüfen

1. Prüfen Sie die Noten in der **Piano Roll**.
2. Scrollen Sie bei Bedarf horizontal oder vertikal durch die Ansicht.
3. Spielen Sie die Aufnahme über **„▶ Wiedergabe“** oder direkt im Audioplayer ab.
4. Vergleichen Sie Klang und Notenanzeige, um das Ergebnis zu beurteilen.

### 4.5 MIDI exportieren

1. Klicken Sie auf **„MIDI exportieren“**.
2. Die MIDI-Datei wird vom Browser heruntergeladen.

Im Quellcode ist eindeutig erkennbar, dass die Schaltfläche erst aktiviert wird, wenn eine MIDI-Datei erfolgreich erzeugt wurde. **Im Quellcode nicht eindeutig erkennbar:** der konkrete Dateiname des Downloads.

### 4.6 Ergebnis leeren

Mit **„Leeren“** kann die Piano Roll zurückgesetzt werden. Was dabei genau mit einer eventuell bereits erzeugten MIDI-Datei oder dem Audiobereich geschieht, ist im gekürzten Quellcode nicht eindeutig erkennbar.

### 4.7 Darstellung wechseln

Klicken Sie im Kopfbereich auf **„Darstellung wechseln“**, um zwischen heller und dunkler Darstellung zu wechseln.

---

## 5. Eingaben und Ausgaben

### 5.1 Eingaben

| Eingabe | Bereich | Standardwert |
|---|---|---|
| Audiodatei | MP3, WAV, M4A, OGG, FLAC, `audio/*` | keine Datei |
| Erkennungsschwelle | 0,05–0,80 | 0,25 |
| Quantisierung | Keine, 1/4, 1/8, 1/16, 1/32 | 1/16 |
| MIDI-Tempo | 40–240 BPM | 120 BPM |

### 5.2 Ausgaben

- Dateiinformationen mit Name und Metadaten
- Fortschrittsanzeige in Prozent
- zeitgestempeltes Protokoll
- grafische Noten Darstellung in der Piano Roll
- abspielbares Originalaudio
- exportierbare MIDI-Datei

### 5.3 Technische Audio- und MIDI-Angaben

Im Quellcode bestätigt:

- Eingangs-Sample-Rate für das Modell: 22.050 Hz
- automatische Umwandlung in ein Mono-Signal
- bei mehreren Kanälen werden die Samples aller Kanäle gemittelt
- MIDI-Auflösung: 480 Impulse pro Viertelnote
- MIDI-Kanal: technisch Index 0, entsprechend MIDI Channel 1
- Ausgabe: 1 Track

---

## 6. Typische Probleme und Fehlerbehebung

### 6.1 Die Datei wird nicht angenommen

**Mögliche Ursache:** Das Format wird vom Browser nicht unterstützt oder die Datei ist beschädigt.

**Abhilfe:**

1. Verwenden Sie eine der ausdrücklich genannten Dateitypen: MP3, WAV, M4A, OGG oder FLAC.
2. Prüfen Sie, ob die Datei lokal abgespielt werden kann.
3. Konvertieren Sie die Datei gegebenenfalls zunächst in WAV.
4. Wählen Sie die Datei über **„Datei auswählen“** statt per Drag-and-drop aus.

### 6.2 Die Schaltfläche „Piano analysieren“ ist nicht aktiv

**Mögliche Ursache:** Es wurde noch keine gültige Datei ausgewählt.

**Abhilfe:**

1. Wählen Sie eine Datei aus.
2. Warten Sie, bis der Status **„● bereit“** und die Dateiinformationen erscheinen.
3. Prüfen Sie anschließend, ob **„Piano analysieren“** aktiv ist.

### 6.3 „Dieser Browser unterstützt die Web Audio API nicht.“

**Abhilfe:**

1. Verwenden Sie einen aktuellen Browser.
2. Aktualisieren Sie den Browser.
3. Prüfen Sie, ob Audio- oder andere Browserfunktionen blockiert sind.
4. Falls die Seite in einer eingebetteten Umgebung läuft, testen Sie sie in einem normalen Browser-Tab.

### 6.4 Die Analyse bleibt bei 0 % oder hängt

**Mögliche Ursache:** Das KI-Modell oder die Bibliothek wird noch geladen, die Datei ist sehr groß oder die Browser-Ressourcen sind begrenzt.

**Abhilfe:**

1. Prüfen Sie die Internetverbindung, da Bibliothek und Modell über ein CDN geladen werden.
2. Warten Sie, bis der Ladevorgang abgeschlossen ist.
3. Verwenden Sie bei langen Aufnahmen eine kürzere Audiodatei.
4. Schließen Sie andere speicherintensive Tabs.
5. Starten Sie die Analyse gegebenenfalls neu durch erneutes Auswählen der Datei.

**Im Quellcode nicht eindeutig erkennbar:** Eine konkrete Zeit- oder Größenbeschränkung sowie eine eigene Abbruchschaltfläche für eine laufende Analyse.

### 6.5 Es werden keine oder zu wenige Noten erkannt

**Abhilfe:**

1. Senken Sie die **Erkennungsschwelle**.
2. Stellen Sie sicher, dass die Aufnahme tatsächlich Klavier oder eine vergleichbare monophone Quelle enthält.
3. Entfernen Sie unnötige Geräusche, Hintergrundmusik oder starke Dynamikwechsel, falls möglich.
4. Prüfen Sie, ob das Original mit **„▶ Wiedergabe“** korrekt abgespielt wird.

Bei sehr leisen Passagen kann eine höhere Schwelle helfen, wenn zuvor zu viele Störungen erkannt wurden.

### 6.6 Zu viele oder falsche Noten

**Abhilfe:**

1. Erhöhen Sie die **Erkennungsschwelle**.
2. Verwenden Sie eine Aufnahme mit weniger Hintergrundgeräuschen.
3. Prüfen Sie das Ergebnis in der Piano Roll.

### 6.7 Das Tempo passt nicht zur Aufnahme

**Abhilfe:**

1. Passen Sie den Wert bei **„MIDI-Tempo“** an.
2. Vergleichen Sie das exportierte MIDI anschließend erneut mit dem Original.

### 6.8 Die Noten liegen zeitlich nicht passend auf dem Raster

**Abhilfe:**

1. Wählen Sie unter **„Quantisierung
