<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: HTMLBuilder -->
<!-- source-files: ["HTMLBuilder/index.html"] -->

# HTMLBuilder

- **Vermuteter Zweck:** Browserbasierte Oberfläche zum Erstellen und Anzeigen von HTML-Code. Die Seite enthält einen Editor, Ausgabeflächen und einen integrierten KI-gestützten Kundenservice.
- **Quellcode-Pfad:** `HTMLBuilder/index.html`
- **Erstellungsdatum der Dokumentation:** 18. August 2026

> Die vorliegende Dokumentation basiert auf einem gekürzten Quellcode-Auszug. Funktionen, die im sichtbaren Ausschnitt nicht eindeutig nachvollziehbar sind, werden ausdrücklich als **„Im Quellcode nicht eindeutig erkennbar“** gekennzeichnet.

---

## 1. Überblick

HTMLBuilder ist eine responsive Webanwendung mit einem zentralen Arbeitsbereich. Im Quellcode sind folgende Bestandteile erkennbar:

1. Kopfbereich mit Branding und Schaltflächen
2. Begrüßungs- und Informationsbereich
3. Zwei nebeneinander angeordnete Karten:
   - links ein Eingabefeld für HTML beziehungsweise Quellcode
   - rechts eine Ausgabe beziehungsweise Vorschau
4. Fußbereich
5. Fest positionierter Kundenservice-Chat

Die Seite unterstützt hell- und dunkel dargestellte Farbschemata. Eine Schaltfläche für den Wechsel ist im CSS vorbereitet. Ob im nicht vollständig gezeigten HTML eine entsprechende Schaltfläche mit dieser Klasse vorhanden ist und wie sie betrieben wird, ist im vorliegenden Ausschnitt nicht eindeutig erkennbar.

---

## 2. Voraussetzungen

### 2.1 Technische Voraussetzungen

Für die grundlegende Nutzung werden bestätigt:

- ein aktueller Webbrowser,
- eine Bildschirmdarstellung mit JavaScript-Ausführung,
- für die Darstellung der Vorschau grundsätzlich die vom Browser unterstützten HTML- und CSS-Funktionen.

Die Anwendung ist als statische HTML-Seite aufgebaut. Eine Installation ist im gezeigten Quellcode nicht erforderlich.

### 2.2 Optionale Netzwerkabhängigkeiten

Bestätigt sind externe oder externe Server beteiligt:

- Die Schrift „Inter“ wird über Google Fonts geladen. Fällt diese Ressource nicht verfügbar, verwendet die Seite ersatzweise eine Sans-Serif-Schrift.
- Der Kundenservice sendet Anfragen an eine externe Worker-Adresse. Für den Chat ist daher eine Netzwerkverbindung erforderlich.
- Der Integrationscode verwendet eine fest hinterlegte externe Adresse. Diese wird hier aus Sicherheitsgründen nicht wiedergegeben.

### 2.3 Inhalte im Textfeld

Das Eingabefeld ist für Quellcode vorgesehen. Akzeptierte Formate und Verarbeitung sind nur eingeschränkt erkennbar, da der Quellcode gekürzt ist.

Bestätigt ist:

- Das Feld ist mehrzeilig.
- Es kann in der Größe verändert werden.
- Es verwendet eine Monospace-Schrift.
- Die Mindesthöhe beträgt ungefähr 250 Pixel.

Nicht eindeutig erkennbar ist, ob beliebiges HTML direkt gerendert, validiert oder in einen Rahmen eingebettet wird.

---

## 3. Sichtbare Bereiche

## 3.1 Kopfbereich

Der Kopfbereich ist als „navbar“ gestaltet. Er enthält:

- ein Bild beziehungsweise Logo,
- die sichtbare Bezeichnung **„HTML Builder“**,
- orange hervorgehobene Schaltflächen mit den CSS-Klassen `theme-btn` und `action-btn`.

Die konkreten Beschriftungen dieser Schaltflächen sowie ihre Funktionen liegen nicht vollständig im Ausschnitt vor. Im Besonderen ist nicht eindeutig erkennbar:

- welche Aktion das `action-btn` ausführt,
- ob die `theme-btn` den hellen oder dunklen Zustand umschaltet,
- ob ein Zurücksetzen, Importieren, Kopieren oder Speichern angeboten wird.

---

## 3.2 Hero-Bereich

Unmittelbar unter dem Kopfbereich befindet sich ein zentrierter Abschnitt mit:

- einer großen orangefarbenen Überschrift `h1`,
- einem erklärenden Textabsatz `p`.

Der konkrete Text der Überschrift und Beschreibung ist im gekürzten Ausschnitt nicht enthalten.

---

## 3.3 Arbeitsbereich

Der Arbeitsbereich besteht aus einem Raster mit zwei Karten.

### Linke Karte

Die linke Karte enthält:

- eine Überschrift der zweiten Ebene,
- ein großes Textarea,
- unterhalb des Textareas einen Bereich mit Schaltflächen.

Die Überschrift und die sichtbaren Schaltflächenbeschriftungen sind im Ausschnitt nicht enthalten.

Das Textarea ist das zentrale Eingabefeld. Es ist ausdrücklich für die manuelle Eingabe von HTML beziehungsweise Quellcode vorgesehen.

### Rechte Karte

Die rechte Karte enthält:

- eine Überschrift der zweiten Ebene,
- einen Abschnitt mit der ID `output`,
- eine Vorschaufläche der Klasse `preview`.

Die Vorschau besitzt:

- eine Höhe von 500 Pixeln,
- eine weiße Hintergrundfarbe,
- abgerundete Ecken,
- keinen sichtbaren Rahmen.

Was innerhalb dieser Karte konkret angezeigt wird, ist im Ausschnitt nicht eindeutig erkennbar. Der Name `output` könnte für HTML-Ausgabe, generierten Code oder eine gerenderte Vorschau verwendet werden; das kann aus dem gekürzten Quellcode nicht sicher abgeleitet werden.

---

## 3.4 Reaktionsfähige Darstellung

Bestätigt ist:

- Ab einer Bildschirmbreite von 1000 Pixeln werden die beiden Karten untereinander angeordnet.
- Die große Hero-Überschrift wird auf kleineren Bildschirmen verkleinert.
- Das Textarea bleibt grundsätzlich horizontal auf die verfügbare Kartenbreite ausgerichtet.

---

## 3.5 Fußbereich

Am Ende der Seite befindet sich ein zentrierter Fußbereich mit grauer Textfarbe. Sein konkreter Inhalt ist im Ausschnitt nicht sichtbar.

---

# 4. Bedienung von HTMLBuilder

## 4.1 HTML-Code eingeben

1. Öffnen Sie die Website im Browser.
2. Wählen Sie das Eingabefeld in der linken Karte.
3. Geben Sie Ihren HTML- beziehungsweise Quellcode ein.
4. Korrigieren Sie den Code bei Bedarf direkt im Feld.

Das Eingabefeld ist vertikal vergrößerbar. Ziehen Sie dazu den unteren Rand des Textbereichs nach unten.

---

## 4.2 Ergebnis erzeugen

1. Geben Sie den gewünschten Code in das Textfeld ein.
2. Suchen Sie in der linken Karte die Schaltflächen unterhalb des Eingabefelds.
3. Betätigen Sie die Schaltfläche, deren Beschriftung dem gewünschten Vorgang entspricht.

> Die konkreten Schaltflächen und ihre Beschriftungen sind im bereitgestellten Ausschnitt nicht enthalten. Daher kann keine bestimmte Aktion wie „Generieren“, „Vorschau“, „Kopieren“ oder „Zurücksetzen“ bestätigt werden.

Falls im vollständigen Quellcode mehrere Ausgabemodi vorhanden sind, sollten sie anhand ihrer sichtbaren Beschriftungen unterschieden werden.

---

## 4.3 Ausgabe beziehungsweise Vorschau prüfen

1. Nach der Ausführung eines Vorgangs prüfen Sie den rechten Kartenbereich.
2. Beachten Sie den Abschnitt mit der ID `output`.
3. Prüfen Sie anschließend die Vorschaufläche mit der Klasse `preview`.
4. Bei einer leeren Vorschau kontrollieren Sie, ob im linken Textfeld vollständiger und fehlerfreier Code vorhanden ist.
5. Prüfen Sie außerdem, ob der Browser JavaScript-Fehler in den Entwicklerwerkzeugen anzeigt.

Welche Ausgabe in `output` und welche Darstellung in der Vorschau jeweils erscheinen, ist **im Quellcode nicht eindeutig erkennbar**.

---

## 4.4 Darstellung auf dem Smartphone oder Tablet

1. Öffnen Sie die Seite in einem mobilen Browser.
2. Drehen Sie das Gerät bei Bedarf in die Querlage.
3. Scrollen Sie zu den Karten.
4. Die Bearbeitungs- und Ausgabekarte stehen untereinander.
5. Tippen Sie in das Eingabefeld, um den Code zu bearbeiten.

Das Chat-Fenster passt seine Breite und Höhe an den verfügbaren Bildschirm an. Auf kleinen Geräten wird es fast über die gesamte Breite dargestellt.

---

# 5. Integrierter Kundenservice

## 5.1 Zweck

Unten rechts ist ein runder, grüner Kundenservice-Button sichtbar. Er öffnet das Chat-Fenster **„lamacHub Kundenservice“** mit der Unterzeile **„KI-gestützter Support“**.

Der Chat ist im Quellcode ausdrücklich als KI-gestützt gekennzeichnet.

---

## 5.2 Chat öffnen

1. Klicken Sie auf den runden grünen Button unten rechts.
2. Das Chat-Fenster öffnet sich über der Seite.
3. Im Chat erscheint die Begrüßung:

   > Hallo! Wie kann ich dir weiterhelfen?

Der Button besitzt die Barrierefreiheitsbezeichnung **„Kundensupport öffnen“**.

---

## 5.3 Nachricht senden

1. Klicken Sie in das Eingabefeld mit dem Platzhalter **„Nachricht schreiben“**.
2. Geben Sie Ihre Frage ein.
3. Klicken Sie auf den runden Senden-Button rechts neben dem Eingabefeld.
4. Ihre Nachricht erscheint rechts in grüner Hervorhebung.
5. Während der Verarbeitung wird eine animierte Statusanzeige eingeblendet.
6. Die Antwort erscheint anschließend als Bot-Nachricht.

Das Eingabefeld:

- ist erforderlich,
- erlaubt maximal 1800 Zeichen,
- verwendet die Barrierefreiheitsbezeichnung **„Deine Nachricht“**,
- deaktiviert die Browser-Autovervollständigung.

Der Senden-Button wird während einer laufenden Anfrage deaktiviert.

---

## 5.4 Chat schließen

Klicken Sie oben rechts im Chat-Fenster auf **„×“**. Der Button hat die Barrierefreiheitsbezeichnung **„Chat schließen“**.

Das Schließen entfernt den Chat nicht dauerhaft aus dem Quellcode. Beim erneuten Öffnen wird das Fenster erneut eingeblendet.

---

## 5.5 Unterstützte Formatierungen

Der Kundenservice kann Antworten mit verschiedenen Markdown-Elementen darstellen. Im Quellcode sind bestätigt:

- Überschriften der Ebenen 1 bis 4,
- Absätze,
- ungeordnete und geordnete Listen,
- Links,
- fett, kursiv und durchgestrichen,
- Inline-Code,
- Codeblöcke,
- Zitate,
- horizontale Linien,
- Tabellen.

HTTP- und HTTPS-Links werden in einem neuen Tab geöffnet. Andere Linkprotokolle werden nicht als klickbare Links übernommen.

---

## 5.6 Inhaltliche Grenzen des Chats

Die Antworten stammen erkennbar nicht aus einer lokalen festen Wissensbasis, sondern von einem externen KI-Dienst. Daher gilt:

- Antworten können unvollständig oder fehlerhaft sein.
- Der Kundenservice kennt möglicherweise nicht den vollständigen Quellcode.
- Fragen zu nicht sichtbaren Funktionen oder privaten Konfigurationen können daher nicht zuverlässig beantwortet werden.
- Für fachlich verbindliche Aussagen sollte eine andere Supportmöglichkeit genutzt werden. Eine konkrete E-Mail-Adresse oder Telefonnummer ist im Quellcode nicht erkennbar.

---

# 6. Eingaben und Ausgaben

## 6.1 HTML-Eingabefeld

**Eingabe:** frei formulierter HTML- oder Quellcode.

**Mögliche Ausgabe:** Der Quellcode-Auszug belegt die Existenz eines Ausgabebereichs und einer Vorschau, enthält aber nicht die vollständige Verarbeitungslogik. Deshalb ist nicht eindeutig erkennbar:

- ob fehlerhafter Code validiert wird,
- ob Syntaxfehler angezeigt werden,
- ob Code automatisch formatiert wird,
- ob einzelne Elemente gesucht oder ersetzt werden können,
- ob der erzeugte Code kopiert oder gespeichert werden kann.

---

## 6.2 Chat-Eingabefeld

**Eingabe:** eine Supportanfrage mit bis zu 1800 Zeichen.

**Ausgabe:** eine textbasierte KI-Antwort mit formatierbarer Markdown-Ausgabe.

**Rückmeldung während der Verarbeitung:** drei animierte Punkte mit der Statusbezeichnung **„Kundenservice antwortet“**.

---

# 7. Typische Probleme und Fehlerbehebung

## 7.1 Die Vorschau bleibt leer

### Mögliche Ursachen

- Das Eingabefeld enthält keinen Code.
- Der gewünschte Vorgang wurde noch nicht ausgeführt.
- Der HTML-Code enthält syntaktische Fehler.
- Der Quellcode verweist auf Dateien oder Ressourcen, die nicht erreichbar sind.
- JavaScript wurde im Browser deaktiviert.

### Prüfungen

1. Öffnen Sie die linke Karte.
2. Prüfen Sie, ob im Textarea Code vorhanden ist.
3. Korrigieren Sie offene oder nicht geschlossene Tags.
4. Betätigen Sie die in der vollständigen Oberfläche sichtbare Erzeugungs- oder Aktualisierungsschaltfläche.
5. Aktualisieren Sie die Seite.
6. Prüfen Sie, ob JavaScript in den Browser-Einstellungen aktiviert ist.
7. Öffnen Sie die Browser-Entwicklerwerkzeuge und prüfen Sie dort auf JavaScript- oder Netzwerkfehler.

Der konkrete Fehlertext der Anwendung ist im Quellcode-Auszug nicht erkennbar.

---

## 7.2 Der Kundenservice öffnet sich nicht

1. Prüfen Sie, ob das Chat-Fenster durch einen anderen Inhalt überdeckt wird.
2. Klicken Sie den grünen Button erneut.
3. Laden Sie die Seite neu.
4. Deaktivieren Sie testweise Erweiterungen, die Seiteninhalte verändern.
5. Prüfen Sie in den Entwicklerwerkzeugen, ob Fehler beim Laden der externen Ressourcen auftreten.

Da der Chat über eine externe Adresse antwortet, kann ein fehlender oder eingeschränkter Internetzugang die Antwort verhindern.

---

## 7.3 Eine Chat-Nachricht wird nicht gesendet

1. Stellen Sie sicher, dass das Eingabefeld nicht leer ist.
2. Prüfen Sie, ob die Nachricht höchstens 1800 Zeichen lang ist.
3. Klicken Sie direkt auf den runden Senden-Button.
4. Warten Sie, falls der Button während einer laufenden Anfrage deaktiviert ist.
5. Prüfen Sie die Internetverbindung.

Bei einer längeren Netzwerkunterbrechung kann die laufende Anfrage fehlschlagen. Im gekürzten Quellcode ist nicht erkennbar, ob nach einem Fehler automatisch eine erneute Anfrage erfolgt.

---

## 7.4 Der Chat bleibt bei der Statusanzeige stehen

Das kann auf eine fehlende oder unterbrochene Netzwerkverbindung h
