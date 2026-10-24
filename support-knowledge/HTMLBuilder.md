<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: HTMLBuilder -->
<!-- source-files: ["HTMLBuilder/index.html"] -->

# HTMLBuilder

**Vermuteter Zweck:** HTMLBuilder ist ein browserbasierter Editor zum Erstellen einer vollständigen HTML-Datei aus HTML-, CSS- und JavaScript-Code. Der erzeugte Code kann in einer Live-Vorschau angezeigt, kopiert oder als `website.html` heruntergeladen werden.

**Quellcode-Pfad:** `HTMLBuilder/index.html`  
**Erstellungsdatum:** 19. März 2026

---

## 1. Überblick

HTMLBuilder stellt drei Eingabefelder für die wichtigsten Bestandteile einer Webseite bereit:

- **HTML** für den Inhalt und die Seitenstruktur
- **CSS** für das Erscheinungsbild
- **JavaScript** für clientseitige Funktionen

Daraus erzeugt die Anwendung eine vollständige HTML-Datei mit:

- `DOCTYPE`
- HTML-Grundgerüst
- UTF-8-Zeichenkodierung
- responsivem Viewport-Eintrag
- eingebettetem CSS im `<style>-Bereich
- eingebettetem JavaScript im `<script>-Bereich

Die Ausgabe erscheint sowohl im Feld **„Generierter HTML-Code“** als auch in der **„Live Vorschau“**.

### Bestätigte Hauptfunktionen

- Eingabe von HTML, CSS und JavaScript
- Erzeugen einer vollständigen HTML-Datei
- Anzeigen des erzeugten Codes
- Kopieren des erzeugten Codes
- Herunterladen als `website.html`
- Aktualisieren der Live-Vorschau
- Umschalten zwischen hellem und dunklem Erscheinungsbild
- Vollbilddarstellung der Live-Vorschau
- Integrierter KI-gestützter Kundenservice

---

## 2. Voraussetzungen

### Technische Voraussetzungen

Für die grundlegende Nutzung werden ein aktueller Browser und eine Internetverbindung benötigt.

Die Website lädt:

- die Schriftart „Inter“ von Google Fonts
- ein Logo von einem externen GitHub-Bildpfad

Falls diese externen Ressourcen nicht geladen werden können, bleibt die Hauptfunktion des HTMLBuilders nach dem vorliegenden Quellcode weiterhin grundsätzlich nutzbar. Allerdings können Schriftart oder Logo fehlen.

### Für die Vollbildfunktion

Der Browser muss die Fullscreen-Schnittstelle für HTML-Elemente unterstützen. Der Quellcode verwendet dafür `requestFullscreen()` und `exitFullscreen()`.

### Für die Kopierfunktion

Die Funktion **„Kopieren“** verwendet die Zwischenablage-API des Browsers. In den meisten aktuellen Browsern funktioniert dies nur in einem sicheren Kontext, etwa bei:

- `https://`
- `localhost`

Zusätzlich kann eine Browser-Berechtigung zur Zwischenablage verlangt werden.

### Kein Benutzerkonto erforderlich

Im Quellcode ist weder eine Anmeldung noch ein Benutzerkonto erkennbar. Die Eingaben werden jedoch nicht dauerhaft gespeichert. Beim Neuladen der Seite gehen die Inhalte der Eingabefelder verloren.

---

## 3. Sichtbare Bereiche der Website

## 3.1 Navigationsleiste

Oben befindet sich eine Navigationsleiste mit:

- einem Logo
- der Bezeichnung **„lamacOs“**
- der Schaltfläche **„Dark Mode“** beziehungsweise **„Light Mode“**

Das Logo ist als Bild verlinkt beziehungsweise wird aus einer externen Quelle geladen. Ob das Logo selbst anklickbar ist, ist im Quellcode nicht eindeutig erkennbar, da es in einem `<img>`-Element ohne Link steht.

## 3.2 Dark Mode beziehungsweise Light Mode

Die Schaltfläche **„Dark Mode“** wechselt das Erscheinungsbild der Website.

Nach der Auswahl eines dunklen Designs wechselt die Beschriftung zu **„Light Mode“**. Die Auswahl wird im lokalen Speicher des Browsers gespeichert und beim nächsten Besuch erneut angewendet.

## 3.3 Hero-Bereich

Unterhalb der Navigationsleiste stehen:

- die Überschrift **„HTML Builder“**
- der Erklärungstext **„HTML, CSS und JavaScript eingeben und als vollständige HTML-Datei generieren.“**

## 3.4 Eingabebereich

Die linke Karte enthält drei Textfelder:

### HTML

Das Feld **„HTML“** ist ein frei editierbares Textfeld mit einem HTML-Beispiel als Platzhalter.

Beispiel:

```html
<h1>Hallo Welt</h1>
```

### CSS

Das Feld **„CSS“** ist ein frei editierbares Textfeld mit einem CSS-Beispiel als Platzhalter.

Beispiel:

```css
body {
  background: red;
}
```

### JavaScript

Das Feld **„JavaScript“** ist ein frei editierbares Textfeld mit einem JavaScript-Beispiel als Platzhalter.

Beispiel:

```javascript
console.log("Hallo");
```

Die Textfelder können in der Höhe vergrößert oder verkleinert werden.

## 3.5 Aktionsschaltflächen

Unter den Eingabefeldern stehen fünf Schaltflächen:

- **„HTML generieren“**
- **„Kopieren“**
- **„Herunterladen“**
- **„Vorschau aktualisieren“**
- **„Vollbild“**

## 3.6 Ausgabebereich

Die rechte Karte enthält:

- das nur lesbare Textfeld **„Generierter HTML-Code“**
- den Bereich **„Live Vorschau“**

Die Live-Vorschau wird in einem eingebetteten Frame dargestellt. Das Textfeld für den generierten Code kann nicht direkt bearbeitet werden.

## 3.7 Footer

Am Ende der Seite erscheint:

**© 2026 lamacHub**

## 3.8 Kundenservice-Chat

Unabhängig vom HTMLBuilder ist unten rechts ein runder Chat-Button mit einem Sprechblasen-Symbol sichtbar. Beim Öffnen erscheint ein Fenster mit der Überschrift **„lamachub Kundenservice“** und dem Hinweis **„KI-gestützter Support“**.

Der Chat besitzt:

- ein Eingabefeld mit dem Platzhalter **„Nachricht schreiben“**
- eine Senden-Schaltfläche mit einem Pfeilsymbol
- eine Schließen-Schaltfläche mit dem Zeichen **„×“**
- einen automatischen Begrüßungstext: **„Hallo! Wie kann ich Ihnen weiterhelfen?“**

---

## 4. Bedienung Schritt für Schritt

## 4.1 Eine HTML-Datei erzeugen

1. Öffnen Sie die Website **HTMLBuilder**.
2. Geben Sie im Feld **„HTML“** den gewünschten Inhalt und die Seitenstruktur ein.
3. Geben Sie im Feld **„CSS“** die gewünschten Formatierungen ein.
4. Geben Sie im Feld **„JavaScript“** optional Skripte ein.
5. Klicken Sie auf **„HTML generieren“**.
6. Der erzeugte Quellcode erscheint im Feld **„Generierter HTML-Code“**.

Die Vorschau wird durch **„HTML generieren“** allein nicht aktualisiert. Für die Anzeige im Vorschaufenster muss zusätzlich **„Vorschau aktualisieren“** verwendet werden.

## 4.2 Die Live-Vorschau aktualisieren

1. Prüfen Sie die Eingaben in den drei Feldern **„HTML“**, **„CSS“** und **„JavaScript“**.
2. Klicken Sie auf **„Vorschau aktualisieren“**.
3. Die Vorschau wird anhand der aktuellen Eingaben neu aufgebaut.
4. Gleichzeitig wird auch der Text im Feld **„Generierter HTML-Code“** aktualisiert.

Die Vorschau wird beim Laden der Website automatisch initialisiert.

## 4.3 Den erzeugten Code kopieren

1. Klicken Sie auf **„Kopieren“**.
2. Der Builder erzeugt beziehungsweise aktualisiert zunächst den HTML-Code.
3. Der vollständige Code wird in die Zwischenablage kopiert.
4. Eine Bestätigung mit **„HTML kopiert.“** erscheint.

Danach kann der Code in einen Texteditor, ein Code-Hosting-System oder eine Entwicklungsumgebung eingefügt werden.

## 4.4 Die HTML-Datei herunterladen

1. Klicken Sie auf **„Herunterladen“**.
2. Der Builder erzeugt den aktuellen HTML-Code.
3. Der Browser startet einen Download mit dem Dateinamen:

```text
website.html
```

Die Datei enthält die eingegebenen Inhalte sowie das automatisch erzeugte HTML-Grundgerüst.

## 4.5 Die Vorschau im Vollbild anzeigen

1. Klicken Sie auf **„Vollbild“**.
2. Die Live-Vorschau wechselt in den Vollbildmodus des Browsers.
3. Bei einem erneuten Klick auf **„Vollbild“** wird der Vollbildmodus beendet.

In der Vollbildansicht wird nur der Inhalt des Vorschaufensters hervorgehoben. Die übrigen Bedienelemente des Builders werden in dieser Ansicht nicht angezeigt.

## 4.6 Das Erscheinungsbild wechseln

1. Klicken Sie oben auf **„Dark Mode“**.
2. Die Website wechselt in das dunkle Farbschema.
3. Die Schaltflächenbeschriftung wechselt zu **„Light Mode“**.
4. Ein erneuter Klick wechselt zurück zum hellen Farbschema.

Die Auswahl wird lokal im Browser gespeichert.

## 4.7 Den Kundenservice nutzen

1. Klicken Sie rechts unten auf das Sprechblasen-Symbol.
2. Das Chatfenster **„lamachub Kundenservice“** öffnet sich.
3. Schreiben Sie Ihre Frage in das Feld **„Nachricht schreiben“**.
4. Klicken Sie auf die Pfeil-Schaltfläche oder drücken Sie die Eingabetaste.
5. Ihre Nachricht erscheint im Chat.
6. Antworten werden im Chatverlauf angezeigt.

Maximal 1800 Zeichen können pro Nachricht eingegeben werden.

Nach 15 gesendeten Nachrichten erscheint zusätzlich der Hinweis:

> Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.

Für den laufenden Chat werden die letzten 12 Chat-Einträge als Kontext an den Support-Dienst übermittelt. Eine dauerhafte Speicherung des Chatverlaufs im Browser ist im Quellcode nicht erkennbar.

---

## 5. Eingaben und Ausgaben

## 5.1 Eingaben

| Eingabefeld | Zweck | Mögliche Ausgabe |
|---|---|---|
| **HTML** | Struktur und Inhalt der Webseite | HTML-Elemente, Text, Bilder, Formulare und weitere HTML-Inhalte |
| **CSS** | Gestaltung der Webseite | Farben, Abstände, Schriftarten, Layout, Responsivität |
| **JavaScript** | Dynamische Browserfunktionen | Ereignisbehandlung, DOM-Manipulation, Berechnungen, Animationen |
| **Nachricht schreiben** | Anfrage an den Kundenservice | KI-gestützte Antwort oder Fehlermeldung |

## 5.2 Generierte HTML-Datei

Jeder erzeugte Download und jeder Codeauszug enthält das folgende Grundgerüst:

```html
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
...
</style>
</head>
<body>

...

<script>
...
</script>

</body>
</html>
```

Die Werte aus **„CSS“** werden in den `<style>`-Bereich und die Werte aus **„JavaScript“** in den `<script>`-Bereich eingesetzt.

## 5.3 Ausgabefeld

Das Feld **„Generierter HTML-Code“**:

- ist schreibgeschützt
- zeigt den vollständigen erzeugten Quellcode
- wird durch **„HTML generieren“** aktualisiert
- wird auch durch **„Vorschau aktualisieren“** aktualisiert
- dient als Quelle für **„Kopieren“** und **„Herunterladen“**

## 5.4 Live-Vorschau

Die Vorschau führt den erzeugten HTML-Code in einem eingebetteten Frame aus. Dadurch können:

- HTML-Elemente dargestellt werden
- CSS-Formatierungen angewendet werden
- JavaScript im Browser ausgeführt werden

Die Vorschau verwendet den weißen Hintergrund, unabhängig vom gewählten Dark Mode der Builder-Oberfläche.

---

## 6. Technische Besonderheiten und Grenzen

## 6.1 Keine automatische Syntaxprüfung

Im Quellcode ist keine Syntaxvalidierung für HTML, CSS oder JavaScript erkennbar. Fehlerhafte Eingaben werden daher grundsätzlich in die Ausgabe übernommen.

Eine fehlerhafte Vorschau kann verschiedene Ursachen haben:

- nicht geschlossene HTML-Tags
- ungültige CSS-Deklarationen
- JavaScript-Fehler
- Verweise auf nicht vorhandene Dateien oder externe Ressourcen

Der Builder meldet solche Fehler nicht automatisch.

## 6.2 JavaScript wird in der Vorschau ausgeführt

Der eingegebene JavaScript-Code wird beim Aktualisieren der Vorschau ausgeführt. Das ist für die Erstellung funktionaler Webseiten beabsichtigt.

Daher sollten nur eigener oder vertrauenswürdiger Code eingegeben werden.

## 6.3 Keine dauerhafte Speicherung der Inhalte

Im Quellcode ist kein Speichern der drei Eingabefelder in `localStorage`, IndexedDB oder einem Server erkennbar.

Folgen:

- Beim Neuladen der Seite werden die Eingaben zurückgesetzt.
- Ein Browserabsturz kann zu Datenverlust führen.
- Vor wichtigen Änderungen sollte der generierte Code kopiert oder heruntergeladen werden.

Der Dark Mode wird dagegen gespeichert.

## 6.4 Keine Projektverwaltung

Im Quellcode sind keine Funktionen zum:

- Speichern mehrerer Projekte
- Öffnen vorhandener Dateien
- Importieren von HTML
- Undo oder Redo
- Umbenennen eines Projekts

erkennbar.

## 6.5 Keine serverseitige Verarbeitung erkennbar

HTML, CSS und JavaScript werden im Browser zusammengesetzt. Eine Speicherung auf einem Server ist im Builder-Code nicht erkennbar.

---

## 7. Datenschutz- und Berechtigungshinweise

## 7.1 Lokale Speicherung

Für den Dark Mode wird folgender Eintrag im lokalen Browserspeicher verwendet:

```text
theme
```

Diese Einstellung betrifft nur die Darstellung der Oberfläche.

## 7.2 Externe Ressourcen

Beim Laden der Website werden externe Ressourcen angefordert:

- Google Fonts für die Schriftart „Inter“
- ein GitHub-Bildpfad für das Logo
- ein externer Worker-Endpunkt für den Kundenservice

Beim Öffnen der Website kann der Browser daher eine Verbindung zu diesen externen Anbietern herstellen.

## 7.3 Kundenservice und Chatverlauf

Der Chat sendet die eingegebene Nachricht sowie einen begrenzten Chatverlauf an einen externen Support-Endpunkt. Der zuletzt übertragene Verlauf umfasst die letzten zwölf Einträge.

Daher gilt:

- keine Geheimnisse, Passwörter oder Tokens im Chat eingeben
- keine person
