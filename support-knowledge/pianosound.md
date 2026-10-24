<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: pianosound -->
<!-- source-files: ["pianosound/index.html"] -->

# pianosound

**Vermuteter Zweck:** „pianosound“ ist eine browserbasierte Webanwendung zum Importieren und Abspielen von MIDI-Dateien, zum Spielen auf einer virtuellen Piano-Tastatur, zur Aufnahme eigener Performances sowie zur Erzeugung unterschiedlicher visueller Klavier-Animationen.  
**Quellcode-Pfad:** `pianosound/index.html`  
**Datum der Erstellung:** 16. Juni 2026

> Diese Dokumentation basiert auf dem bereitgestellten Quellcode-Auszug. Die Datei wurde ausdrücklich gekürzt; Funktionen nach dem sichtbaren Anfang des Abschnitts „Einstellungen“ sind im Quellcode nicht eindeutig erkennbar.

---

## 1. Überblick

„MIDI Piano Visualizer“ bietet zwei Hauptbetriebsarten:

1. **MIDI**
   - Eine lokale MIDI-Datei mit der Endung `.mid` oder `.midi` auswählen.
   - Die enthaltenen Tracks in der Visualisierung anzeigen.
   - Eine MIDI-Datei starten, pausieren, stoppen und an einer Position abspielen.

2. **Selbst spielen**
   - Noten mit Maus, Touch oder Computer-Tastatur auslösen.
   - Eine eigene Performance aufnehmen.
   - Die Aufnahme wiedergeben und als MIDI-Datei herunterladen.

Die Anwendung enthält außerdem:

- eine Audiowiedergabe mit Tone.js,
- mehrere Visualizer-Modi,
- einstellbare Hintergrundfarben,
- Partikel-, Glow- und Trail-Effekte,
- einstellbare Notengröße,
- eine virtuelle Piano-Tastatur,
- ein MP4-Schaltfeld,
- sowie Steuerelemente zum Speichern und Laden von Einstellungen.

---

## 2. Voraussetzungen

### Bestätigte Voraussetzungen

- Ein aktueller Browser mit JavaScript-Unterstützung.
- Web Audio beziehungsweise Tone.js-Unterstützung.
- Für die MIDI-Importfunktion eine MIDI-Datei mit der Endung `.mid` oder `.midi`.
- Für „Selbst spielen“ eine der im Quellcode vorgesehenen Eingabemöglichkeiten:
  - Maus,
  - Touch,
  - Computer-Tastatur.

### Im Quellcode nicht eindeutig erkennbar

- Eine vollständige Liste aller unterstützten Browser.
- Unterstützung für Apple MIDI- oder virtuelle MIDI-Tastaturen.
- Eine installierte Desktop- oder Mobile-App.
- Benutzerkonten, Anmeldung oder Cloud-Speicherung.
- Eine maximale Größe unterstützter MIDI-Dateien.
- Ob Tone.js vollständig offline verfügbar ist. Die Datei wird im gezeigten Quellcode über ein CDN geladen.
- Ob die MP4-Ausgabe serverseitig, per Browser-API oder mit einer weiteren Bibliothek erzeugt wird.

---

# 3. Erste Schritte

## 3.1 Seite öffnen

1. Öffnen Sie `pianosound/index.html` im Browser.
2. Prüfen Sie den Status oben rechts. Im Auslieferungszustand wird **„Bereit“** angezeigt.
3. Wählen Sie anschließend einen der Modi:
   - **„🎼 MIDI“**
   - **„🎹 Selbst spielen“**

## 3.2 Statusanzeige verstehen

Oben rechts befindet sich ein Status mit einem farbigen Punkt:

- **Grüner Punkt:** Bereit beziehungsweise kein laufender Aufnahmezustand.
- **Roter, blinkender Punkt:** Eine Aufnahme läuft.

Der Status ist auf sehr kleinen Bildschirmen ausgeblendet. Der aktuelle Aufnahmehinweis **„● AUFNAHME“** bleibt im Player sichtbar, sofern die Aufnahme tatsächlich läuft.

---

# 4. MIDI-Dateien importieren

## 4.1 Datei auswählen

1. Wählen Sie den Modus **„🎼 MIDI“**.
2. Klicken Sie auf den Bereich **„🎵 MIDI-Datei auswählen“**.
3. Wählen Sie im Dateidialog eine Datei mit der Endung `.mid` oder `.midi` aus.
4. Nach erfolgreichem Laden werden die verfügbaren Informationen im Bereich **„midiInfo“** angezeigt.
5. Die gefundenen Tracks erscheinen anschließend im Abschnitt **„🎼 Tracks“**.

Der Dateidialog ist so eingestellt, dass grundsätzlich MIDI-Dateien vorgeschlagen werden.

## 4.2 Erwartete Ausgabe

Nach dem Laden werden unter anderem folgende Angaben im MIDI-Info-Bereich angezeigt:

- Name der geladenen Datei,
- Anzahl der Tracks,
- Anzahl der Noten,
- Dauer,
- verwendeter Tastaturbereich.

Der genaue Wortlaut und alle Detailanzeigen sind im gekürzten Quellcode nicht vollständig eindeutig erkennbar. Sicher bestätigt sind die dafür vorgesehenen Elemente `midiInfo` und `rangeInfo`.

## 4.3 Tracks

Im Abschnitt **„🎼 Tracks“** wird für jeden geladenen Track eine eigene Zeile angezeigt. Die Darstellung enthält:

- eine Farbauswahl,
- den Track-Namen,
- eine kleinere Status- oder Informationszeile,
- eine Mute-Steuerung.

Die einzelnen Track-Funktionen sind im Quellcode-Auszug angelegt. Welche Aktionen beim Anklicken der Track-Bezeichnung oder der Statuszeile genau ausgeführt werden, ist im gekürzten Teil nicht eindeutig erkennbar.

---

# 5. Wiedergabe einer MIDI-Datei

Der Abschnitt **„▶ Wiedergabe“** enthält die Transportsteuerung.

## 5.1 Start

1. Laden Sie zuerst eine MIDI-Datei.
2. Klicken Sie auf **„▶ Start“**.
3. Die Wiedergabe beginnt an der aktuell eingestellten Position.

## 5.2 Pause

1. Klicken Sie während der Wiedergabe auf **„⏸ Pause“**.
2. Die Wiedergabe wird angehalten.
3. Mit **„▶ Start“** kann sie fortgesetzt werden.

## 5.3 Stop

1. Klicken Sie auf **„■ Stop“**.
2. Die Wiedergabe wird beendet beziehungsweise zurückgesetzt.

Ob „Stop“ dabei stets auf den Anfang zurückstellt oder lediglich die Wiedergabe beendet, ist im gekürzten Quellcode nicht vollständig erkennbar.

## 5.4 Position

Unter **„Position“** befindet sich ein Schieberegler:

- Ziehen Sie ihn, um in der MIDI-Datei zu navigieren.
- Links zeigt die Zeitanzeige die aktuelle Position.
- Rechts steht die Gesamtdauer.
- Die Anzeige hat das Format `M:SS / M:SS`, beispielsweise `0:12 / 1:45`.

Unterhalb des Reglers wird der erkannte **Tastaturbereich** angezeigt.

## 5.5 MP4

Im Wiedergabeabschnitt befindet sich die Schaltfläche **„🎥 MP4“**.

Der Quellcode bestätigt die Existenz dieser Funktion. Der vollständige Ablauf – insbesondere, ob zuerst ein Video aufgezeichnet, anschließend verarbeitet und dann heruntergeladen wird – ist im gekürzten Quellcode nicht eindeutig erkennbar.

---

# 6. Selbst spielen

## 6.1 In den Live-Modus wechseln

1. Klicken Sie auf **„🎹 Selbst spielen“**.
2. Der MIDI-Importbereich wird ausgeblendet.
3. Der Live-Bereich mit Tastenhinweisen, Aufnahme- und Löschschaltfläche erscheint.

## 6.2 Spielen mit Maus oder Touch

1. Bewegen Sie den Mauszeiger über die virtuelle Tastatur im Player.
2. Drücken Sie eine Taste, um einen Ton auszulösen.
3. Lassen Sie die Taste beziehungsweise die Touch-Fläche wieder los, um den Ton zu beenden.

Die virtuelle Tastatur wird im Player dargestellt. Die genaue Zuordnung einzelner Canvas-Positionen zu Noten ist im HTML allein nicht sichtbar, im JavaScript des gekürzten Quellcodes aber offenbar vorgesehen.

## 6.3 Spielen mit der Computer-Tastatur

Die sichtbaren Tastenhinweise ordnen folgende Tasten zu:

| Computertaste | Note |
|---|---|
| **A** | C |
| **W** | C# |
| **S** | D |
| **E** | D# |
| **D** | E |
| **F** | F |
| **T** | F# |
| **G** | G |

Bedienung:

1. Öffnen Sie den Modus **„🎹 Selbst spielen“**.
2. Drücken Sie eine der oben genannten Tasten.
3. Die zugeordnete Note wird gespielt und in der Visualisierung dargestellt.
4. Lassen Sie die Taste los, um den Ton zu beenden.

Ob zusätzliche Tasten unterstützt werden, ist im gekürzten Quellcode nicht eindeutig erkennbar.

---

# 7. Performance aufnehmen

## 7.1 Aufnahme starten

1. Wählen Sie **„🎹 Selbst spielen“**.
2. Klicken Sie auf **„● Aufnahme“**.
3. Der rote Aufnahmehinweis **„● AUFNAHME“** erscheint im Player.
4. Der Statuspunkt oben rechts wechselt in den blinkenden Aufnahmezustand.
5. Spielen Sie die gewünschte Performance mit Maus, Touch oder Tastatur.

## 7.2 Aufnahme beenden oder löschen

- Die Aufnahme lässt sich über die Aufnahmefunktion beenden; die genaue Beschriftung im aktiven Zustand ist im gekürzten Quellcode nicht vollständig sichtbar.
- Klicken Sie auf **„Löschen“**, um die aufgezeichnete Performance zu entfernen.

Nach dem Löschen zeigt der Info-Bereich an, dass keine Performance vorhanden ist.

## 7.3 Aufnahme herunterladen

Im Live-Bereich ist ein Downloadbereich für Aufnahmen vorgesehen. Dieser wird sichtbar, sobald eine Aufnahme verfügbar ist. Er enthält einen Download-Link für eine MIDI-Datei.

Der genaue Dateiname und der Zeitpunkt, an dem der Downloadbereich erscheint, sind im gekürzten Quellcode nicht eindeutig erkennbar.

---

# 8. Audioeinstellungen

Im Abschnitt **„🔊 Audio“** können drei Parameter verändert werden.

## 8.1 Geschwindigkeit

- Regler: **„Geschwindigkeit“**
- Bereich: **25 % bis 200 %**
- Standardwert: **100 %**

Ein höherer Wert beschleunigt die Wiedergabe. Ein niedrigerer Wert verlangsamt sie.

## 8.2 Lautstärke

- Regler: **„Lautstärke“**
- Bereich: **0 % bis 100 %**
- Standardwert: **80 %**

Ein Wert von 0 % stellt die Ausgabe stumm.

## 8.3 Reverb

- Regler: **„Reverb“**
- Bereich: **0 % bis 100 %**
- Standardwert: **15 %**

Der Effekt fügt der Klangausgabe einen hallartigen Nachklang hinzu. Die genaue akustische Auslegung ist im Quellcode-Auszug nicht eindeutig erkennbar.

---

# 9. Visualizer

Im Abschnitt **„✨ Visualizer“** wählen Sie aus fünf Darstellungsmodi:

1. **Falling Notes**
2. **Spectrum**
3. **Neon Waves**
4. **Galaxy**
5. **Minimal**

## 9.1 Modus wechseln

1. Öffnen Sie das Auswahlfeld **„Modus“**.
2. Wählen Sie einen der oben genannten Einträge.
3. Die aktive Darstellung wechselt im Player.

Der Name des aktiven Modus wird außerdem als kleine Beschriftung oben links im Player angezeigt.

## 9.2 Notengröße

- Regler: **„Notengröße“**
- Bereich: **60 % bis 150 %**
- Standardwert: **100 %**

Damit wird die dargestellte Größe der Noten verändert.

## 9.3 Notennamen

Das Kontrollkästchen **„Notennamen auf fallenden Noten anzeigen“** ist standardmäßig aktiviert.

- Aktiviert: Fallende Noten werden mit ihren Namen beschriftet.
- Deaktiviert: Die Beschriftung entfällt.

## 9.4 Piano-Tastatur

Das Kontrollkästchen **„Piano-Tastatur anzeigen“** ist standardmäßig aktiviert.

- Aktiviert: Die virtuelle Tastatur wird im Player dargestellt.
- Deaktiviert: Die Tastatur wird ausgeblendet.

---

# 10. Hintergrundfarben

Im Abschnitt **„🎨 Hintergrund“** stehen zwei Farbverläufe zur Verfügung.

## 10.1 Hintergrund 1 und Hintergrund 2

Jeder Verlauf besteht aus:

- einer Farbauswahl,
- einem Textfeld mit dem Hexadezimalwert.

Vorgehen:

1. Wählen Sie über das Farbfeld eine neue Farbe aus.
2. Der zugehörige Hexadezimalwert wird im Textfeld aktualisiert.
3. Alternativ können Sie den Wert im Textfeld bearbeiten.

Die sichtbaren Startwerte lauten:

- Hintergrund 1: `#080B18`
- Hintergrund 2: `#172554`

## 10.2 Überlappung

Das Feld **„Überlappung“** legt die Farbe für Überlappungsbereiche fest. Standardwert: Weiß.

## 10.3 Note Glow

Das Feld **„Note Glow“** bestimmt die Farbe des Leuchteffekts um Noten. Standardwert: Weiß.

---

# 11. Partikeleffekte

Der Abschnitt **„✨ Partikel“** steuert Umgebungspartikel und zusätzliche Partikel, die beim Auftreten von Noten entstehen.

## 11.1 Ambient-Partikel

### Anzahl

- Regler: **„Ambient Anzahl“**
- Bereich: **0 bis 250**
- Standardwert: **80**

Der Wert bestimmt, wie viele dauerhaft vorhandene Umgebungspartikel dargestellt werden.

### Größe

- Regler: **„Ambient Größe“**
- Bereich: **25 % bis 300 %**
- Standardwert: **100 %**

### Geschwindigkeit

- Regler: **„Ambient Geschwindigkeit“**
- Bereich: **0 % bis 300 %**
- Standardwert: **100 %**

### Turbulenz

- Regler: **„Turbulenz“**
- Bereich: **0 % bis 300 %**
- Standardwert: **100 %**

### Leuchtkraft

- Regler: **„Leuchtkraft“**
- Bereich: **0 % bis 300 %**
- Standardwert: **100 %**

### Farbe

Das Feld **„Ambient Farbe“** legt die Farbe der Umgebungspartikel fest. Standardwert: Weiß.

## 11.2 Notenpartikel

### Anzahl

- Regler: **„Noten-Partikel“**
- Bereich: **0 bis 30**
- Standardwert: **8**

Der Wert legt fest, wie viele Partikel beim Auslösen einer Note entstehen.

### Größe

- Regler: **„Notenpartikel Größe“**
- Bereich: **25 % bis 300 %**
- Standardwert: **100 %**

### Geschwindigkeit

- Regler: **„Notenpartikel Geschwindigkeit“**
- Bereich:
