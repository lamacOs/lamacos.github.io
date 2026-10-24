<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: endlessweb -->
<!-- source-files: ["endlessweb/404.html", "endlessweb/index.html"] -->

# endlessweb – Support-Dokumentation

**Vermuteter Zweck:** Interaktive, rätselbasierte Kurzgeschichte mit 50 Stationen namens „The Endless Internet“.  
**Quellcode-Pfad:** `endlessweb`  
**Datum der Erstellung:** 16. März 2026  

> **Hinweis zum Quellcode:** Die bereitgestellten Auszüge aus `index.html` und `404.html` sind unvollständig. Die Dokumentation beschreibt daher nur Funktionen, die im sichtbaren Quellcode eindeutig erkennbar sind.

---

## 1. Überblick

„endlessweb“ ist eine deutschsprachige Website, die den Besucher durch eine fortlaufende Rätselgeschichte führt. Jede Station enthält:

- einen Kategorienamen,
- einen Titel,
- einen kurzen Untertitel,
- mehrere Absätze Fließtext,
- optional ein hervorgehobenes Zitat,
- eine Rätselfrage,
- ein Antwortfeld,
- die Schaltfläche **„Prüfen“**,
- bei einer richtigen Antwort die Schaltfläche **„Zur nächsten Spur →“**.

Im Quellcode ist ein Gesamtumfang von **50 Stationen** vorgesehen. Jede Frage soll mehrere akzeptierte Antwortformulierungen besitzen. Für die Station 01 werden beispielsweise zehn Antwortvarianten für „Link“, „Verbindung“ und „Hyperlink“ angeboten.

Die sichtbaren Stationen beginnen unter anderem mit:

1. **Der Anfang**
2. **Der erste Eintrag**
3. **Die Uhr**
4. **Der Bahnhof**
5. **Das Foto**
6. **Dokument 17**
7. **Die Zahlen**
8. **Die Perspektive**
9. **Die Treppe**

---

## 2. Voraussetzungen

### Für Besucherinnen und Besucher

Für die Nutzung werden im Quellcode keine besonderen Berechtigungen, Anmeldungen oder Zahlungen vorausgesetzt.

Voraussetzungen sind:

- ein Webbrowser mit JavaScript,
- eine Internetverbindung, da Schriftarten von Google Fonts geladen werden,
- die Möglichkeit, Seiten innerhalb des Website-Pfads `endlessweb` aufzurufen.

Die Website ist responsiv gestaltet und enthält eine mobile Anpassung für schmale Bildschirme mit einer Breite von maximal 650 Pixeln.

### Für den Betrieb

Im Quellcode ist **keine eigene Serverlogik** erkennbar. Die Stationen und ihre Inhalte werden offenbar direkt als statische HTML-, CSS- und JavaScript-Daten ausgeliefert.

Ob das Projekt zusätzlich Routing-, Redirect- oder Deployment-Konfiguration benötigt, ist **im Quellcode nicht eindeutig erkennbar**.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Kopfbereich

Im fixierten Kopfbereich befindet sich links das Logo:

**„lamacOs“**

Rechts sind zwei quadratische Symbolschaltflächen sichtbar:

- **„←“** mit dem Hinweis **„Zurück“**
- **„☾“** mit dem Hinweis **„Darstellung“**

Die Kopfzeile bleibt beim Scrollen sichtbar.

### 3.2 Fortschrittsanzeige

Direkt unterhalb der Kopfzeile stehen:

- **„01 / 50“** – die aktuelle Station,
- **„Durchlauf 1“** – der aktuelle Durchlauf.

Darunter befindet sich ein horizontaler Fortschrittsbalken. Die Leiste füllt sich abhängig vom Fortschritt orange.

### 3.3 Inhaltsbereich

Der Inhaltsbereich zeigt in dieser Reihenfolge:

1. die Kategorie, etwa „Der Anfang“, „Archiv“ oder „Orte“,
2. den Titel der Station,
3. einen kurzen Untertitel,
4. die Textabsätze der Geschichte,
5. gegebenenfalls ein optionales Zitat,
6. den Rätselbereich **„Die nächste Spur“**.

### 3.4 Rätselbereich

Der Rätselbereich enthält:

- die Beschriftung **„Die nächste Spur“**,
- die konkrete Rätselfrage,
- ein Eingabefeld mit dem Platzhalter **„Deine Antwort …“**,
- die orange Schaltfläche **„Prüfen“**,
- einen Feedbackbereich,
- nach einer richtigen Antwort die Schaltfläche **„Zur nächsten Spur →“**.

### 3.5 Fußbereich

Am Ende stehen:

- **„The Endless Internet“**
- **„© 2026 lamacHub“**

---

## 4. Bedienung Schritt für Schritt

### Schritt 1: Erste Station öffnen

Öffnen Sie die Website über ihre Startseite im Verzeichnis `endlessweb`.

Die erste Station **„Du bist hier.“** wird geladen. Der Fortschrittszähler zeigt zunächst:

- **„01 / 50“**
- **„Durchlauf 1“**

### Schritt 2: Geschichte lesen

Lesen Sie den Fließtext und achten Sie auf Details, die für die jeweilige Frage relevant sein können. Einige Stationen enthalten zusätzlich ein Zitat oder versteckte Hinweise im Text.

### Schritt 3: Antwort eingeben

Klicken Sie in das Feld mit dem Platzhalter **„Deine Antwort …“** und geben Sie Ihre Lösung ein.

Das Eingabefeld verwendet:

- keine automatische Vervollständigung,
- keine Rechtschreibprüfung.

Groß- und Kleinschreibung, Artikel und alternative Formulierungen können je nach Frage unterschiedlich behandelt werden. Verwenden Sie daher möglichst eine der für die Frage vorgesehenen Antwortformen.

### Schritt 4: Antwort prüfen

Klicken Sie auf **„Prüfen“**.

Anschließend erscheint unterhalb des Eingabefeldes eine Rückmeldung. Der Quellcode enthält dafür zwei Farbzustände:

- grün für eine Erfolgsmeldung,
- rot für eine Fehlermeldung.

Der genaue Wortlaut der Meldungen und die genaue Normalisierung der Eingabe sind im gekürzten Quellcode nicht vollständig sichtbar.

### Schritt 5: Nächste Spur öffnen

Wird die Antwort als richtig erkannt, wird der Bereich mit der Schaltfläche **„Zur nächsten Spur →“** eingeblendet.

Klicken Sie auf diese Schaltfläche, um zur nächsten Station zu gelangen.

### Schritt 6: Zurück navigieren

Mit der Schaltfläche **„←“** im Kopfbereich können Sie zur vorherigen Station zurückkehren.

Ob dabei bereits abgegebene Antworten, der genaue Sprungverlauf oder der Durchlaufzähler verändert werden, ist **im Quellcode nicht eindeutig erkennbar**.

### Schritt 7: Darstellung ändern

Klicken Sie auf die Schaltfläche **„☾“**, um zwischen dunkler und heller Darstellung zu wechseln.

Der Code enthält dafür die Klasse `body.light`, die das Farbschema der Seite verändert. Ob die gewählte Einstellung dauerhaft gespeichert wird, ist **im Quellcode nicht eindeutig erkennbar**.

---

## 5. Antworten und Rückmeldungen

### 5.1 Mehrere Antwortformulierungen

Der Quellcode sieht pro Frage bis zu zehn akzeptierte Formulierungen vor. Dadurch sollen neben der genauen Lösung auch sprachlich ähnliche Antworten möglich sein.

Beispiele:

| Frage | Akzeptierte Formulierungen |
|---|---|
| Verbindung im Internet | „Link“, „ein Link“, „Verbindung“, „Verknüpfung“, „Hyperlink“ |
| Wiederkehrende Zahl | „17“, „siebzehn“, „die 17“, „Dokument 17“, „Nummer 17“ |
| Entferntes Objekt | „die Tür“, „eine Tür“, „der Eingang“, „die Eingangstür“ |
| Geometrische Form | „Quadrat“, „ein Quadrat“, „quadratische Form“, „gleichseitiges Viereck“ |
| Veränderter Blick | „den Blick“, „die Perspektive“, „mein Standpunkt“, „den Blickwinkel“ |

Die genaue Art der Normalisierung – etwa Groß-/Kleinschreibung, zusätzliche Leerzeichen oder Satzzeichen – ist im gekürzten Quellcode nicht vollständig erkennbar.

### 5.2 Erfolgszustand

Nach einer korrekten Antwort:

- erscheint eine grüne Rückmeldung,
- wird die Schaltfläche **„Zur nächsten Spur →“** sichtbar,
- kann die nächste Station geöffnet werden.

### 5.3 Fehlerzustand

Bei einer nicht akzeptierten Antwort:

- erscheint eine rote Rückmeldung,
- bleibt der aktuelle Inhalt sichtbar,
- kann die Eingabe erneut geprüft werden.

Ob zusätzlich eine konkrete Fehlermeldung wie „Falsch“ oder eine Erklärung angezeigt wird, ist im gekürzten Quellcode nicht eindeutig erkennbar.

---

## 6. Navigation und Stationen

### 6.1 Interne Pfade

Jede Station besitzt im Datenmodell einen Pfad, beispielsweise:

- `/archiv/der-erste-eintrag`
- `/wissenschaft/die-uhr`
- `/orte/der-bahnhof`
- `/geschichte/das-foto`
- `/archiv/dokument-17`
- `/raetsel/die-zahlen`
- `/wissenschaft/die-perspektive`
- `/orte/die-treppe`

Diese Pfade bilden die Reihenfolge der Geschichte ab.

### 6.2 Fortschritt und Durchläufe

Der Kopfbereich enthält einen Zähler für den **„Durchlauf“**. Der Startwert ist **„Durchlauf 1“**.

Das Datenmodell sieht außerdem einen kreisförmigen Aufbau vor: Der letzte Eintrag verweist wieder auf den ersten. Ob diese Rückkehr technisch vollständig umgesetzt ist und wie der Durchlaufzähler dabei aktualisiert wird, ist im gekürzten Quellcode **nicht eindeutig erkennbar**.

### 6.3 Start- und Fehlerseite

Zusätzlich zu `index.html` ist eine Datei `404.html` mit demselben Erscheinungsbild und demselben Stationsdatenmodell vorhanden.

Damit wird offenbar die normale Ansicht auch für nicht gefundene Seiten verwendet. Ob die 404-Ansicht automatisch geladen wird oder nur manuell eingerichtet werden muss, ist **im Quellcode nicht eindeutig erkennbar**.

---

## 7. Bedienung auf Mobilgeräten

Für Bildschirme mit maximal 650 Pixeln Breite passt die Website das Layout an:

- Die Eingabe und die Schaltfläche **„Prüfen“** werden untereinander angezeigt.
- **„Prüfen“** erhält die volle Breite.
- Texte und Karten erhalten kleinere Innenabstände.
- Der Fußbereich wird vertikal statt horizontal angezeigt.

Die Grundeinstellungen für Zoom und Seitenanpassung sind im HTML festgelegt:

- `viewport=device-width`
- `initial-scale=1.0`

---

## 8. Typische Probleme und Fehlerbehebung

### 8.1 Die Antwort wird nicht akzeptiert

**Mögliche Ursache:** Die eingegebene Formulierung ist nicht in der Liste der akzeptierten Antworten enthalten oder wird zu stark vom erwarteten Text abweichen.

**Vorgehen:**

1. Lesen Sie die Frage noch einmal.
2. Prüfen Sie die genaue Formulierung im umgebenden Text.
3. Geben Sie möglichst das zentrale Stichwort ein.
4. Verwenden Sie eine der im Quellcode vorgesehenen Varianten, zum Beispiel „17“ statt „Es ist siebzehn“.
5. Klicken Sie erneut auf **„Prüfen“**.

---

### 8.2 Die Schaltfläche **„Zur nächsten Spur →“** bleibt ausgeblendet

**Mögliche Ursache:** Die Antwort wurde noch nicht als korrekt bestätigt.

**Vorgehen:**

1. Kontrollieren Sie die Rückmeldung unter dem Eingabefeld.
2. Geben Sie eine alternative akzeptierte Antwortform ein.
3. Klicken Sie erneut auf **„Prüfen“**.

---

### 8.3 Der Inhalt bleibt leer oder die Station lädt nicht

**Mögliche Ursache:** JavaScript ist deaktiviert, die Datei wurde nicht vollständig bereitgestellt oder der Browser konnte die Seite nicht vollständig laden.

**Vorgehen:**

1. Laden Sie die Seite neu.
2. Prüfen Sie, ob JavaScript im Browser aktiviert ist.
3. Öffnen Sie die Website in einem aktuellen Browser.
4. Falls möglich, prüfen Sie die Browserkonsole auf technische Fehlermeldungen.

---

### 8.4 Der Fortschrittsbalken bewegt sich nicht

**Mögliche Ursache:** Der Balken wird an den Fortschritt gekoppelt, der möglicherweise erst nach erfolgreicher Beantwortung aktualisiert wird. Das genaue Verhalten ist im gekürzten Quellcode nicht vollständig erkennbar.

**Vorgehen:**

1. Antworten Sie die aktuelle Frage.
2. Bestätigen Sie die Eingabe mit **„Prüfen“**.
3. Klicken Sie nach erfolgreicher Prüfung auf **„Zur nächsten Spur →“**.
4. Falls der Zähler weiterhin unverändert bleibt, prüfen Sie die Seite über die Browserkonsole und melden Sie den technischen Fehler.

---

### 8.5 Die Schriftart wird anders dargestellt

**Mögliche Ursache:** Die Schriftarten werden von Google Fonts geladen. Bei blockierten externen Anfragen, fehlender Internetverbindung oder Netzwerkeinschränkungen kann die Website auf Ersatzschriften ausweichen.

**Vorgehen:**

- Laden Sie die Seite mit aktiver Internetverbindung neu.
- Prüfen Sie, ob Ihr Browser oder Netzwerk Anfragen an den Google-Fonts-Dienst blockiert.
- Die Grundfunktionalität sollte weiterhin nutzbar sein, da der HTML-Code für die Schriften einen sans-serif-Fallback enthält.

---

### 8.6 Die Schaltfläche **„←“** führt nicht zum erwarteten Ergebnis

**Mögliche Ursache:** Die genaue Zuordnung der Browser-Historie zu den Stationen sowie das Verhalten bei direkt aufgerufenen URLs ist im gekürzten Quellcode nicht vollständig erkennbar.

**Vorgehen:**

1. Nutzen Sie die Schaltfläche **„Zur nächsten Spur →“**, um die Stationsfolge fortzusetzen.
2. Verwenden Sie anschließend **„←“**, um zurückzugehen.
3. Falls die Rücknavigation weiterhin abweicht, öffnen Sie die Startseite neu und beginnen erneut bei **„Du bist hier.“**

---

### 8.7 Eine direkte URL zeigt nicht die gewünschte Station

**Mögliche Ursache:** Die vorgesehenen Story-Pfade sind möglicherweise keine eigenständigen Dateien, sondern werden durch JavaScript oder serverseitiges Routing aufgelöst. Die konkrete technische Umsetzung ist im gekürzten Quellcode **nicht eindeutig erkennbar**.

**Vorgehen:**

- Navigieren Sie bevorzugt über **„Prüfen“** und **„Zur nächsten Spur →“**.
- Öffnen Sie bei Problemen die Startseite neu.
- Prüfen Sie beim Betreiber, ob die Story-Pfade zusätzlich per Server-Routing konfiguriert werden müssen.

---

## 9. Datenschutz und Berechtig
