<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: endlessweb -->
<!-- source-files: ["endlessweb/404.html", "endlessweb/index.html"] -->

# endlessweb – Support-Dokumentation

**Website:** endlessweb  
**Vermuteter Zweck:** Interaktive, rätselbasierte Kurzgeschichte namens „The Endless Internet“ mit 50 Stationen  
**Quellcode-Pfad:** `endlessweb`  
**Analysierte Dateien:** `endlessweb/index.html`, `endlessweb/404.html`  
**Datum der Erstellung:** 10. April 2026

> **Hinweis:** Die Quellcode-Auszüge wurden gekürzt. Die Dokumentation beschreibt die im sichtbaren Code bestätigten Funktionen. Funktionen, die nur im nicht vollständig gezeigten JavaScript-Bereich liegen, sind entsprechend gekennzeichnet.

---

## 1. Überblick

Bei endlessweb handelt es sich um eine statische, deutschsprachige Website, die eine fortlaufende Geschichte in Form von Rätseln präsentiert.

Jede Station besteht aus:

- einer Kategorie,
- einem Titel,
- einer kurzen Einleitung,
- mehreren Absätzen zum Handlungsverlauf,
- optional einem hervorgehobenen Zitat,
- einer Frage mit der Bezeichnung **„Die nächste Spur“**,
- einem Antwortfeld,
- der Schaltfläche **„Prüfen“**,
- einer Rückmeldung zur Eingabe,
- bei einer richtigen Antwort der Schaltfläche **„Zur nächsten Spur →“**.

Die Geschichte ist als geschlossener Kreis angelegt. Im Quellcode heißt es ausdrücklich:

- „50 Stationen“
- Jeder Eintrag verweist auf den nächsten.
- Der letzte Eintrag verweist wieder auf den ersten.

Die Website ist ein digitales Rätselspiel beziehungsweise eine interaktive Webgeschichte. Sie stellt keine erkennbare Sammlung, Buchhandlung, Benutzerkontoverwaltung oder soziale Plattform dar.

---

## 2. Voraussetzungen und technische Grundlagen

### 2.1 Erforderlicher Browser

Für die dargestellte Website wird ein aktueller Browser mit folgenden Fähigkeiten vorausgesetzt:

- HTML5
- CSS3
- JavaScript
- `localStorage` für das Speichern des Fortschritts
- `history.pushState` beziehungsweise `history.replaceState` für die stationsbezogene URL-Verwaltung

Die Seiten sind als statische HTML-Dateien aufgebaut. Ob ein Server, ein Static-Host oder eine zusätzliche Build-Pipeline benötigt wird, ist **im Quellcode nicht eindeutig erkennbar**.

### 2.2 Lokale Ausführung

1. Den Ordner `endlessweb` öffnen.
2. Die Datei `index.html` in einem modernen Browser aufruft.

Ein Server ist für die Grundanzeige wahrscheinlich nicht zwingend erforderlich. Einzelne Funktionen können jedoch von der Herkunft der Seite abhängen, insbesondere:

- das Speichern im Browser,
- die Aktualisierung der Browserhistorie,
- die Nutzung interner Pfade wie `/archiv/der-erste-eintrag`.

Die vollständige Ausführung dieser Funktionen in einem einfachen Dateisystem ist **im vorliegenden Auszug nicht eindeutig erkennbar**.

### 2.3 Schriften

Die Seite lädt Inter und Poppins von Google Fonts. Für die normale Darstellung ist keine zusätzliche Installation erforderlich. Bei blockierten oder nicht verfügbaren externen Schriftdiensten kann die Seite jedoch auf Ersatzschriften zurückfallen.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Obere Leiste

Oben befindet sich eine feste beziehungsweise „sticky“ Leiste mit:

- dem sichtbaren Logo **„lamacOs“**,
- der Schaltfläche **„←“** mit dem Tooltip **„Zurück“**,
- der Schaltfläche **„☾“** mit dem Tooltip **„Darstellung“**.

Die Leiste bleibt beim Scrollen sichtbar.

### 3.2 Fortschrittsanzeige

Direkt unter der oberen Leiste zeigt die Website:

- die aktuelle Station, beispielsweise **„01 / 50“**,
- den aktuellen Durchlauf, beispielsweise **„Durchlauf 1“**,
- einen horizontalen Fortschrittsbalken.

Der Fortschrittsbalken ist orange und wird bei erfolgreichem Fortschritt nachgefüllt.

### 3.3 Kategorie und Titel

Oberhalb des Haupttextes stehen:

- die Kategorie der Station, etwa **„Der Anfang“**, **„Archiv“**, **„Wissenschaft“**, **„Orte“**, **„Geschichte“** oder **„Rätsel“**,
- der große Stationstitel,
- eine hervorgehobene Kurzbeschreibung.

### 3.4 Story-Bereich

Die eigentliche Geschichte wird in mehreren separaten Karten dargestellt. Jeder Absatz bildet eine eigene Karte.

### 3.5 Zitat

Zwischen Geschichte und Rätsel kann ein optisch hervorgehobenes Zitat erscheinen. In den sichtbaren Beispielen besitzt die erste Station kein sichtbares Zitat. Das Zitatelement ist standardmäßig ausgeblendet und wird nur eingeblendet, wenn die jeweiligen Stationsdaten ein Zitat enthalten.

### 3.6 Rätselbereich „Die nächste Spur“

Der untere Bereich enthält:

- die feste Bezeichnung **„Die nächste Spur“**,
- die konkrete Frage,
- ein Eingabefeld mit dem Platzhalter **„Deine Antwort …“**,
- die Schaltfläche **„Prüfen“**,
- eine Rückmeldungszeile,
- bei richtiger Antwort die Schaltfläche **„Zur nächsten Spur →“**.

### 3.7 Fußbereich

Am Ende stehen:

- **„The Endless Internet“**,
- **„© 2026 lamacHub“**.

---

## 4. Bedienung Schritt für Schritt

### 4.1 Eine Station lesen

1. `endlessweb/index.html` im Browser öffnen.
2. Kategorie, Titel und Kurzbeschreibung lesen.
3. Die Absätze der Story-Karten in Reihenfolge lesen.
4. Falls vorhanden, das hervorgehobene Zitat lesen.
5. Die Frage unter **„Die nächste Spur“** beantworten.

### 4.2 Eine Antwort prüfen

1. Die Antwort in das Feld **„Deine Antwort …“** eingeben.
2. Auf **„Prüfen“** klicken.
3. Die Rückmeldung unter dem Eingabefeld lesen.
   - Eine korrekte Antwort wird grün dargestellt.
   - Eine falsche Antwort wird rot dargestellt.
4. Bei korrekter Antwort auf **„Zur nächsten Spur →“** klicken.
5. Die nächste Station wird geladen.

### 4.3 Zur vorherigen Station navigieren

1. In der oberen Leiste auf **„←“** klicken.
2. Die vorherige Station wird angezeigt.

Der genaue Umgang mit dem ersten Eintrag ist **im gekürzten JavaScript-Auszug nicht eindeutig erkennbar**. Da die Geschichte als geschlossener Kreis beschrieben wird, ist eine Rücknavigation vom ersten zum letzten Eintrag beziehungsweise eine begrenzte Rücknavigation plausibel; dies ist jedoch eine **begründete Vermutung**, keine im Auszug bestätigte Funktion.

### 4.4 Darstellung wechseln

1. In der oberen Leiste auf **„☾“** kliczen.
2. Die Website wechselt zwischen dunkler und heller Darstellung.
3. Das Symbol wird voraussichtlich passend zur aktiven Darstellung aktualisiert.

Die Umschaltung ist im CSS durch die Klasse `body.light` vorbereitet. Die genaue JavaScript-Logik und ob die Auswahl dauerhaft gespeichert wird, ist im gekürzten Auszug **nicht eindeutig erkennbar**.

### 4.5 Fortschritt dauerhaft fortsetzen

Im Quellcode ist die Fortschrittsverwaltung über den Browser-Speicher vorgesehen. Das konkrete Speicherschema und der genaue Ablauf beim erneuten Aufruf der Website sind im gekürzten Auszug nicht vollständig sichtbar.

Vermutlich wird unter anderem der aktuelle Stationseintrag und gegebenenfalls der Durchlauf gespeichert. Das ist **eine begründete Vermutung**, da solche Daten für die Fortsetzung nach einem Neuladen erforderlich wären.

---

## 5. Eingaben und Ausgaben

### 5.1 Eingabefeld

Das Eingabefeld besitzt die technische Kennung `answer` und folgende Eigenschaften:

- Platzhalter: **„Deine Antwort …“**
- keine automatische Vervollständigung,
- Rechtschreibprüfung deaktiviert,
- freie Texteingabe.

### 5.2 Antwortprüfung

Für jede Station enthält die Datenstruktur ein Feld `answers` mit bis zu zehn akzeptierten Formulierungen. Die erste Station akzeptiert beispielsweise Varianten von:

- „Link“
- „Verbindung“
- „Verknüpfung“
- „Hyperlink“

Das Eingabefeld wird gegen diese vordefinierten Antworten geprüft. Eine unbeabsichtigte groß- oder kleingeschriebene Variante kann dadurch abweichen, sofern die JavaScript-Funktion keine zusätzliche Normalisierung vornimmt. Eine solche Normalisierung ist im sichtbaren Auszug **nicht eindeutig erkennbar**.

### 5.3 Rückmeldungen

Für die Prüfung sind zwei CSS-Zustände definiert:

- `feedback.success` für eine grüne Erfolgsmeldung,
- `feedback.error` für eine rote Fehlermeldung.

Der genaue Wortlaut der Rückmeldungen ist im gekürzten Auszug nicht vollständig sichtbar.

### 5.4 Freischaltung des nächsten Schritts

Der Container für **„Zur nächsten Spur →“** ist zunächst verborgen. Er erhält bei erfolgreicher Prüfung die Klasse `show` und wird dadurch sichtbar.

### 5.5 Stationswechsel

Jede Station enthält einen Zielpfad im Feld `next`, zum Beispiel:

- `/archiv/der-erste-eintrag`
- `/wissenschaft/die-uhr`
- `/orte/der-bahnhof`

Ob dieser Pfad unmittelbar per `history.pushState` gesetzt, durch einen serverseitigen Rewrite geladen oder anderweitig aufgelöst wird, ist im gekürzten Auszug **nicht eindeutig erkennbar**.

---

## 6. Stationen und Fortschritt

### 6.1 Anzahl der Stationen

Der Quellcode nennt insgesamt **50 Stationen**.

Die sichtbaren Zähler sind standardmäßig:

- **„01 / 50“**
- **„Durchlauf 1“**

### 6.2 Durchläufe

Die Anzeige **„Durchlauf 1“** zeigt, dass die Geschichte nach Abschluss erneut begonnen werden kann. Der genaue Ablauf am letzten Eintrag sowie die genaue Bezeichnung weiterer Durchläufe sind im gekürzten Quellcode nicht vollständig erkennbar.

### 6.3 Progressionsbalken

Der Balken wird anhand der aktuellen Position aktualisiert. Die verwendete Prozentformel ist im gekürzten Auszug nicht vollständig sichtbar.

---

## 7. Mobile Bedienung

Für schmale Bildschirme bis 650 Pixel Breite enthält die Seite eigene Layoutregeln:

- reduzierte seitliche Abstände,
- kleinere Innenabstände der Karten,
- senkrechte Anordnung von Eingabefeld und **„Prüfen“**,
- vollbreite Schaltfläche **„Prüfen“**,
- untereinander angeordnete Fußzeilenelemente.

Die große Überschrift passt sich mit einer responsiven Schriftgröße an.

---

## 8. Typische Probleme und Fehlerbehebung

### 8.1 Die Seite bleibt leer oder zeigt nur den Rahmen

**Möglicher Grund:** JavaScript wird nicht ausgeführt oder das Skript enthält einen Fehler.

**Prüfung und Behebung:**

1. JavaScript im Browser aktivieren.
2. Die Browser-Entwicklerwerkzeuge öffnen.
3. Unter **Konsole** nach Fehlermeldungen suchen.
4. Prüfen, ob `index.html` und das enthaltene Skript vollständig geladen wurden.
5. Die Seite neu laden.

### 8.2 **„Prüfen“** reagiert nicht

**Möglicher Grund:** Das JavaScript für die Antwortprüfung wurde nicht geladen oder ist nach einem Syntaxfehler nicht ausführbar.

**Behebung:**

1. Konsole auf Fehler prüfen.
2. Sicherstellen, dass der vollständige `<script>`-Bereich vorhanden ist.
3. Seite neu laden.
4. Prüfen, ob eine Antwort in das Feld eingegeben wurde.
5. Falls zutreffend, die Eingabe per Enter bestätigen; eine Enter-Bindung ist im sichtbaren Auszug jedoch **nicht eindeutig erkennbar**.

### 8.3 Eine offensichtlich passende Antwort wird abgelehnt

**Möglicher Grund:** Die Website akzeptiert nur die fest hinterlegten Formulierungen. Eine zusätzliche Satzstellung, Abkürzung oder andere Schreibweise kann nicht enthalten sein.

**Behebung:**

1. Die Formulierung aus der Stationsfrage möglichst eng übernehmen.
2. Zahlwörter oder Ziffern passend zur Fragestellung verwenden.
3. Andere Formulierungen aus der Antwortliste testen.
4. Groß- und Kleinschreibung berücksichtigen.

### 8.4 **„Zur nächsten Spur →“** bleibt unsichtbar

**Möglicher Grund:** Die Antwort wurde nicht als korrekt bestätigt.

**Behebung:**

1. Prüfen, ob eine grüne Erfolgsmeldung angezeigt wird.
2. Falls nicht, die Antwort erneut eingeben und auf **„Prüfen“** klicken.
3. Prüfen, ob das Eingabefeld leer war oder eine unsichtbare Eingabe enthielt.
4. Falls die Meldung trotzdem nicht erscheint, JavaScript und Konsole prüfen.

### 8.5 Ein interner Pfad liefert einen 404-Fehler

Die Datei `404.html` enthält offenbar dieselbe Anwendung wie `index.html`. Damit soll bei nicht gefundenen Pfaden offenbar eine Ersatzansicht erscheinen.

**Möblösung:**

1. Sicherstellen, dass bei der Bereitstellung ein Rewrite auf `index.html` oder `404.html` eingerichtet ist.
2. Prüfen, ob die URL-Struktur der konfigurierten Station entspricht.
3. Relative Pfade bevorzugen, wenn der Inhalt in einem Unterordner gehostet wird.
4. Die Browser-Konsole auf fehlgeschlagene Ressourcen prüfen.

Ob das Hosting tatsächlich alle unbekannten URLs auf `404.html` umleitet, ist **im Quellcode nicht eindeutig erkennbar**, weil die Serverkonfiguration nicht vorliegt.

### 8.6 Der Zurück-Pfeil funktioniert nicht wie erwartet

**Möglicher Grund:** Die Browserhistorie oder der intern gespeicherte Stationsindex wird nicht wie erwartet verwendet.

**Behebung:**

1. Andere Tabs oder Seiten im Verlauf prüfen.
2. Den Browserverlauf über die Browsernavigation testen.
3. Die Seite neu laden und den Pfeil erneut verwenden.
4. Falls die Anwendung intern einen Stationszähler verwaltet, den vollständigen JavaScript-Code auf Fehler prüfen.

### 8.7
