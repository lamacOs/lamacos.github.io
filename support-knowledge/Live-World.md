<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Live-World -->
<!-- source-files: ["Live-World/index.html"] -->

# Live-World

- **Website-Name:** Live-World  
- **Vermuteter Zweck:** Live-World ist anhand des vorliegenden Quellcodes eine responsive Dashboard-Seite mit Kennzahlen sowie einem integrierten, KI-gestützten Kundenservice-Chat. Die genaue fachliche Bedeutung der angezeigten Kennzahlen ist im Quellcode-Auszug nicht eindeutig erkennbar.  
- **Quellcode-Pfad:** `Live-World/index.html`  
- **Datum der Erstellung:** 24. Juni 2026  

> **Hinweis zur Quellcode-Basis:** Die Analyse basiert auf einem gekürzten Auszug. Funktionen, die im sichtbaren Abschnitt eindeutig erkennbar sind, werden als bestätigt beschrieben. Angaben, die erst im nicht enthaltenen Code folgen könnten, werden ausdrücklich als nicht eindeutig erkennbar gekennzeichnet.

---

## 1. Zweck und Überblick

Live-World zeigt eine modern gestaltete Dashboard-Oberfläche. Im sichtbaren Quellcode sind folgende Bestandteile erkennbar:

1. eine obere Navigationsleiste,
2. ein Logo mit der Bezeichnung **„Live Welt“**,
3. eine Schaltfläche zum Umschalten zwischen heller und dunkler Darstellung,
4. ein Dashboard mit Karten,
5. Kennzahlenkarten mit Beschriftung und hervorgehobener Zahl,
6. ein fest positionierter Kundenservice-Chat,
7. eine Chat-Oberfläche mit Verlauf, Texteingabe und KI-gestütztem Support.

Die Seite ist responsiv gestaltet. Auf schmalen Bildschirmen werden die Dashboard-Karten automatisch in weniger Spalten angezeigt. Auch das Chat-Fenster passt seine Größe an die verfügbare Bildschirmhöhe und -breite an.

---

## 2. Voraussetzungen

### Bestätigte Voraussetzungen

Für die grundlegende Darstellung wird ein aktueller Webbrowser benötigt, der folgende moderne Funktionen unterstützt:

- CSS Grid,
- CSS Custom Properties,
- `position: sticky`,
- JavaScript-Funktionen wie `dataset`, `querySelector` und `classList`,
- `fetch` beziehungsweise eine vergleichbare Netzwerkanbindung für den Kundenservice,
- `URL` zur Prüfung von Links.

Die Seite lädt die Schriftart **Inter** über Google Fonts. Falls diese Ressource nicht geladen werden kann, verwendet das Stylesheet als Schriftart `sans-serif`.

### Netzwerkzugriff

Für den Chat wird im Quellcode eine externe Worker-Adresse hinterlegt. Die Adresse wird hier aus Sicherheitsgründen nicht vollständig wiedergegeben. Damit der KI-gestützte Support antworten kann, muss eine Verbindung zu diesem Dienst möglich sein.

Ob zusätzlich eine Anmeldung, ein Benutzerkonto oder eine besondere Berechtigung erforderlich ist, ist im Quellcode-Auszug **nicht eindeutig erkennbar**.

---

## 3. Sichtbare Bereiche der Website

## 3.1 Navigationsleiste

Ganz oben befindet sich eine feste Navigationsleiste. Sie bleibt beim Scrollen sichtbar und besteht aus:

- einem 32 × 32 Pixel großen Logo,
- der Textmarke **„Live Welt“**,
- einer rechteckigen Schaltfläche mit dem CSS-Klassennamen `toggle`.

Die sichtbare Beschriftung dieser Umschaltfläche ist im Quellcode nicht angegeben. Es ist bestätigt, dass sie für den Wechsel zwischen der hellen und dunklen Darstellung vorgesehen ist, weil dafür entsprechende Farbvariablen definiert sind.

### Design der Navigationsleiste

- Hintergrund: Kartenfarbe des aktuellen Farbschemas
- Untere Trennlinie
- Logo und Text links
- Umschalter rechts
- Der Text „Live Welt“ wird im Auszug unabhängig vom dunklen Farbschema schwarz dargestellt. Auf einem dunklen Hintergrund kann die Lesbarkeit deshalb eingeschränkt sein.

---

## 3.2 Dashboard und Kennzahlen

Im Hauptbereich befindet sich das Dashboard. Es verwendet ein responsives Raster:

- maximale Breite: 1100 Pixel,
- automatische Spaltenzahl,
- Mindestbreite einer Karten-Spalte: 220 Pixel,
- Abstand zwischen den Karten: 22 Pixel.

Jede Karte enthält:

1. eine graue Beschriftung (`label`),
2. eine größere orange hervorgehobene Zahl (`number`).

Beim Überfahren einer Karte wird sie leicht nach oben bewegt. Dies ist eine rein visuelle Reaktion und hat keine erkennbare fachliche Funktion.

Im gekürzten Auszug sind die konkreten Beschriftungen und Zahlen der Karten nicht enthalten. Daher ist nicht eindeutig erkennbar:

- welche Kennzahlen Live-World tatsächlich anzeigt,
- ob die Werte statisch sind,
- ob sie aus einer Datenbank geladen werden,
- ob sie sich automatisch aktualisieren,
- ob die Karten anklickbar sind oder Detailseiten öffnen.

Die Karten besitzen im sichtbaren Quellcode keine Schaltflächen, Links oder sichtbaren Aktionsschaltflächen.

---

## 3.3 Helles und dunkles Farbschema

Die Website besitzt zwei definierte Farbschemata:

### Helles Schema

- Seitenhintergrund: hellgrau
- Karten: weiß
- Text: dunkel
- sekundäre Texte: grau
- Kennzahlen: orange

### Dunkles Schema

- Seitenhintergrund: sehr dunkles Blau-Schwarz
- Karten: dunkles Blau-Schwarz
- Text: hellgrau
- sekundäre Texte: mittelgrau
- Kennzahlen: weiterhin orange

Der Wechsel wird über die Klasse `dark` gesteuert. Ob der aktuelle Zustand lokal gespeichert oder beim Neuladen beibehalten wird, ist im sichtbaren Auszug **nicht eindeutig erkennbar**.

---

## 4. Bedienung des Dashboards

## 4.1 Dunkle oder helle Darstellung aktivieren

1. Öffnen Sie Live-World im Webbrowser.
2. Locate in der rechten Seite der oberen Navigationsleiste die Schaltfläche neben dem Logo.
3. Klicken Sie auf diese Schaltfläche.
4. Das Farbschema wechselt zwischen heller und dunkler Darstellung.

Da die Schaltfläche keinen sichtbaren Text besitzt, erkennt man sie am Wechsel der Seitenfarben.

### Wenn der Wechsel nicht funktioniert

1. Prüfen Sie, ob JavaScript im Browser aktiviert ist.
2. Öffnen Sie die Browser-Entwicklerwerkzeuge.
3. Kontrollieren Sie, ob im Konsolenbereich ein JavaScript-Fehler erscheint.
4. Laden Sie die Seite vollständig neu.
5. Falls das Problem bleibt, verwenden Sie einen aktuellen Browser.

Im gekürzten Quellcode ist das JavaScript für den Farbumschalter nicht enthalten. Die Funktion ist daher aus dem vorhandenen CSS und der `toggle`-Klasse als begründete Vermutung zu betrachten.

---

## 4.2 Dashboard-Karten verwenden

Die Karten sind sichtbar und reagieren beim Überfahren mit einer leichten Bewegung. Im vorliegenden Quellcode-Auszug ist jedoch keine fachliche Interaktion erkennbar.

Daher gilt:

- Das Scrollen durch das Dashboard ist bestätigt.
- Das Lesen der Beschriftungen und Zahlen ist bestätigt.
- Anklickbare Detailansichten oder Filter sind nicht bestätigt.
- Eine Erklärung zu einzelnen Werten ist im Quellcode-Auszug nicht eindeutig erkennbar.

---

## 5. Der lamacHub Kundenservice

## 5.1 Zweck

Im rechten unteren Bildschirmrand befindet sich eine runde grüne Schaltfläche mit einem Chat-Symbol **„💬“**. Sie öffnet das Kundenservice-Fenster mit der Überschrift:

- **„lamacHub Kundenservice“**
- **„KI-gestützter Support“**

Der Dienst soll allgemeine Fragen beantworten und bei Problemen mit Live-World unterstützen. Die konkreten fachlichen Support-Abläufe, Zuständigkeiten und Reaktionszeiten sind im Quellcode-Auszug **nicht eindeutig erkennbar**.

---

## 5.2 Chat öffnen

1. Scrollen Sie bei Bedarf zur rechten unteren Ecke.
2. Klicken Sie auf die grüne runde Schaltfläche mit dem Symbol **„💬“**.
3. Das Chat-Fenster öffnet sich über der Website.
4. Die erste Nachricht lautet:  
   **„Hallo! Wie kann ich dir weiterhelfen?“**
5. Klicken Sie in das Eingabefeld **„Nachricht schreiben …“**.
6. Geben Sie Ihre Frage ein.
7. Klicken Sie auf die runde Senden-Schaltfläche **„➤“** oder drücken Sie die Eingabetaste.

Das Eingabefeld akzeptiert maximal 1800 Zeichen. Eine Eingabe ist erforderlich; ein leeres Nachrichtenfeld kann nicht versendet werden.

---

## 5.3 Chat schließen

Es gibt zwei Möglichkeiten:

1. Klicken Sie oben rechts im Chat-Fenster auf **„×“**.
2. Klicken Sie auf die grüne Schaltfläche **„💬“** am rechten unteren Rand, sofern dieser als Öffner fungiert.

Ob das erneute Klicken auf **„💬“** das Fenster tatsächlich schließt, ist im sichtbaren JavaScript-Auszug nicht eindeutig erkennbar. Das Schließen über **„×“** ist durch das vorhandene Schließungs-Element und die entsprechende Beschriftung vorgesehen.

---

## 5.4 Nachricht senden

1. Text in das Eingabefeld schreiben.
2. Auf **„➤“** klicken oder die Eingabetaste drücken.
3. Die Nachricht erscheint als grünes Feld auf der rechten Seite des Chat-Verlaufs.
4. Während der Verarbeitung wird eine animierte Statusanzeige mit drei Punkten eingeblendet.
5. Die Antwort des Kundenservice erscheint anschließend als heller Bot-Bereich.

Während eine Anfrage läuft, wird die Senden-Schaltfläche deaktiviert. Das verhindert parallele Anfragen aus derselben Unterhaltung.

---

## 5.5 Anzeige der Antworten

Antworten können im Chat in verschiedenen Formaten dargestellt werden:

- Überschriften,
- Absätze,
- nummerierte und unnummerierte Listen,
- fett, kursiv und durchgestrichen,
- Inline-Code,
- Codeblöcke,
- Tabellen,
- Links,
- Zitate,
- horizontale Trennlinien.

Tabellen können bei schmalen Bildschirmen horizontal gescrollt werden. Codeblöcke und Tabellen sind auf den Chatbereich begrenzt und verhindern, dass die gesamte Chatfensterbreite überdehnt wird.

### Sicherheitsmerkmale der Antwortdarstellung

Der Quellcode enthält mehrere Vorkehrungen:

- HTML in KI-Antworten wird vor der Darstellung maskiert.
- Links werden nur als HTTP- oder HTTPS-Link zugelassen.
- Externe Links öffnen in einem neuen Tab.
- Dabei werden `noopener` und `noreferrer` gesetzt.
- Benutzereingaben werden als Text dargestellt und nicht als HTML interpretiert.

Damit sollen Antworten beziehungsweise eingebettete Inhalte die Chatdarstellung nicht ungewollt verändern.

---

## 6. Verlauf und Sitzung

Im Quellcode ist ein Array mit dem Namen `history` vorhanden. Es wird für den Gesprächsverlauf beziehungsweise für die Weiterleitung des Kontexts an den Kundenservice verwendet.

Im vorliegenden Auszug ist jedoch nicht eindeutig erkennbar:

- wie viele Nachrichten gespeichert werden,
- ob der Verlauf beim Schließen des Fensters erhalten bleibt,
- ob er beim Neuladen der Seite wiederhergestellt wird,
- ob der Verlauf lokal gespeichert wird,
- ob der Verlauf an einen Server übertragen wird,
- ob es ein Benutzerkonto oder eine Sitzungs-ID gibt.

Ein Chatfenster-Neustart setzt den Verlauf im gezeigten Code jedenfalls nicht ausdrücklich zurück. Ob dies an anderer Stelle geschieht, kann anhand des gekürzten Auszugs nicht bestätigt werden.

---

## 7. Typische Probleme und Fehlerbehebung

## 7.1 Der Kundenservice öffnet sich nicht

### Mögliche Ursache

- JavaScript ist deaktiviert.
- Die Datei wurde nicht vollständig geladen.
- Ein Fehler beim Initialisieren des Chat-Codes verhindert die Öffnung.

### Abhilfe

1. JavaScript für die Website aktivieren.
2. Die Seite mit einer vollständigen Aktualisierung neu laden.
3. Einen aktuellen Browser verwenden.
4. Die Browser-Entwicklerwerkzeuge öffnen und den Konsolenbereich prüfen.
5. Prüfen, ob das Symbol **„💬“** vorhanden ist. Fehlt es, wurde der Kundenservice möglicherweise nicht vollständig in die Seite eingebunden.

---

## 7.2 Nachrichten werden nicht gesendet

### Mögliche Ursache

- Das Eingabefeld ist leer.
- Die maximale Länge von 1800 Zeichen wurde erreicht.
- Der externe Support-Dienst ist nicht erreichbar.
- Eine vorherige Anfrage wird noch verarbeitet.

### Abhilfe

1. Prüfen, ob Text im Feld **„Nachricht schreiben …“** steht.
2. Kürzen Sie die Nachricht bei Bedarf auf höchstens 1800 Zeichen.
3. Warten Sie, bis die animierte Antwortanzeige verschwunden ist.
4. Prüfen Sie die Internetverbindung.
5. Laden Sie die Seite neu und versuchen Sie es erneut.
6. Prüfen Sie die Konsole auf Netzwerk- oder CORS-Fehler.

Ob der Dienst Fehlertexte direkt im Chat anzeigt, ist im gekürzten Auszug nicht eindeutig erkennbar.

---

## 7.3 Es erscheint keine Antwort

### Mögliche Ursache

- Der externe Worker-Dienst ist nicht erreichbar.
- Die Netzwerkanfrage wird blockiert.
- Die verwendete Browser- oder Firewall-Konfiguration erlaubt die Verbindung nicht.
- Die Anfrage dauert länger als erwartet.

### Abhilfe

1. Andere Websites testen, um die Internetverbindung zu prüfen.
2. Die Seite neu laden.
3. Eine kürzere Testnachricht senden.
4. Die Browser-Konsole auf Fehler wie Netzwerk-, DNS- oder CORS-Probleme prüfen.
5. Bei einer verwalteten Arbeitsplatz-Umgebung die IT-Abteilung bitten, die Verbindung zum Kundenservice-Dienst zu prüfen.

Die konkrete Fehlermeldung und ein möglicher Wiederholungsmechanismus sind im Quellcode-Auszug **nicht eindeutig erkennbar**.

---

## 7.4 Das Chat-Fenster ist auf Mobilgeräten zu groß oder schneidet ab

Die CSS-Regeln berücksichtigen unterschiedliche Bildschirmgrößen. Bei sehr kleinen Fenstern wird das Chat-Fenster dennoch auf eine Mindesthöhe von 300 Pixeln gesetzt. Bei extrem kleinen verfügbaren Höhen kann es daher zu Platzproblemen kommen.

### Abhilfe

1. Die Browseransicht vergrößern oder in einen normalen Fenstermodus wechseln.
2. Das Chat-Fenster neu öffnen.
3. Bei Nutzung einer Split-
