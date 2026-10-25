<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: HTMLBuilder -->
<!-- source-files: ["HTMLBuilder/index.html"] -->

# HTMLBuilder – Support-Dokumentation

**Website:** HTMLBuilder  
**Vermuteter Zweck:** Browserbasierter HTML-Editor mit Eingabefeld, generiertem HTML-Code und Live-Vorschau. Zusätzlich ist ein KI-gestützter Kundenservice-Chat integriert.  
**Quellcode-Pfad:** `HTMLBuilder/index.html`  
**Datum der Erstellung:** 16. Juni 2025  

> **Hinweis zur Quellcode-Basis:** Die Dokumentation basiert auf einem gekürzten Auszug aus `HTMLBuilder/index.html`. Nicht vollständig sichtbare Funktionen werden als **„Im Quellcode nicht eindeutig erkennbar“** gekennzeichnet.

---

## 1. Überblick

HTMLBuilder ist eine einzelne HTML-Seite für die Erstellung und Vorschau von HTML-Code.

Die Seite enthält laut Quellcode:

- eine Navigationsleiste mit Logo, dem Namen „HTML Builder“ und themenabhängigen Schaltflächen,
- einen zentralen Bereich mit Überschrift und kurzer Beschreibung,
- ein zweispaltiges Layout aus Editor und Ausgabe/Vorschau,
- einen KI-Chat namens **„lamacHub Kundenservice“**,
- einen mobilen Layoutumbruch bei einer Fensterbreite von höchstens 1.000 Pixeln.

Die Seite unterstützt ein helles und ein dunkles Erscheinungsbild. Der Wechsel wird über das Attribut `data-theme` gesteuert.

---

## 2. Voraussetzungen

### 2.1 Technische Voraussetzungen

Für die Verwendung des HTML-Editors werden benötigt:

- ein aktueller Browser mit JavaScript-Unterstützung,
- eine Internetverbindung, sofern die Schriftart von Google Fonts geladen und der KI-Chat verwendet werden soll,
- für den Chat eine erreichbare Verbindung zum im Quellcode hinterlegten Support-Dienst.

### 2.2 Inhaltliche Voraussetzungen

Für den Editor sind keine Anmeldung und kein Konto erforderlich.

Die technische Bearbeitung setzt Grundkenntnisse in HTML voraus. Das gilt insbesondere beim manuellen Schreiben von HTML-Code.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Navigationsleiste

Oben befindet sich eine schmale Navigationsleiste mit:

- einem Logo,
- der Bezeichnung **„HTML Builder“**,
- themenabhängig beschrifteten Schaltflächen.

Die genaue Beschriftung sowie die genaue Zuordnung der Schaltflächen zu ihren Funktionen sind im gekürzten Quellcode nicht vollständig erkennbar. Sichtbar bestätigt ist jedoch, dass mindestens Schaltflächen mit den CSS-Klassen `theme-btn` und `action-btn` vorhanden sind.

### 3.2 Hero-Bereich

Unterhalb der Navigationsleiste steht ein zentraler Textbereich mit:

- einer großen orangefarbenen Überschrift,
- einem erklärenden Untertext.

Der genaue Wortlaut der Texte ist im vorliegenden Auszug nicht vollständig enthalten.

### 3.3 Editorbereich

Der Editorbereich befindet sich in einer Karte. Er enthält:

- eine Überschrift der Ebene 2,
- ein mehrzeiliges Textfeld,
- eine Höhe von mindestens 250 Pixeln,
- eine vertikal skalierbare Größe,
- eine Monospace-Schrift.

Der Inhalt des Textfelds wird mit `textarea` verarbeitet. Eine Beschriftung des Eingabefelds ist im Auszug nicht sichtbar.

### 3.4 Aktionsbereich

Unterhalb des Editors befindet sich ein Bereich mit der CSS-Klasse `actions`. Er ist für mehrere Schaltflächen vorgesehen und kann bei schmalen Bildschirmen umbrechen.

Welche Aktionen dort im vollständigen Code verfügbar sind, ist aus dem gekürzten Auszug **nicht eindeutig erkennbar**. Die Klasse `action-btn` bestätigt zumindest das Vorhandensein einer orangefarbenen Aktionsschaltfläche.

### 3.5 Ausgabebereich

Ein weiterer Bereich besitzt die Klasse `output`. Darin befindet sich ein Element mit der ID `output` und einer Mindesthöhe von 250 Pixeln.

Dieser Bereich dient wahrscheinlich der Darstellung des erzeugten HTML-Codes. Die genaue Funktionszuordnung ist im gekürzten Quellcode **nicht eindeutig erkennbar**.

### 3.6 Vorschau

Das Stylesheet enthält außerdem eine Klasse `preview`. Sie ist für einen eingebetteten Rahmen mit folgenden Eigenschaften vorgesehen:

- Breite: 100 %,
- Höhe: 500 Pixel,
- weißer Hintergrund,
- abgerundete Ecken.

Ob und wie die Vorschau im vollständigen Quellcode aktiviert wird, ist im gekürzten Auszug **nicht eindeutig erkennbar**.

### 3.7 Fußbereich

Am Ende der Seite befindet sich ein zentrierter Fußbereich mit grauer Textfarbe. Der konkrete Inhalt ist im Auszug nicht vollständig sichtbar.

---

## 4. HTML-Code bearbeiten

### 4.1 Code eingeben

1. Öffnen Sie die Website.
2. Klicken Sie in das große Eingabefeld im linken Kartenbereich.
3. Geben Sie Ihren HTML- oder CSS-Code ein.
4. Nutzen Sie die Größe des Eingabefelds bei Bedarf durch Ziehen des unteren Randes.

### 4.2 Code auswählen und kopieren

1. Setzen Sie den Cursor in das Eingabefeld.
2. Wählen Sie den gewünschten Text mit `Strg + A` beziehungsweise `Cmd + A` aus.
3. Kopieren Sie die Auswahl mit `Strg + C` beziehungsweise `Cmd + C`.

### 4.3 Code leeren

1. Klicken Sie in das Eingabefeld.
2. Markieren Sie den gesamten Inhalt.
3. Löschen Sie ihn oder drücken Sie die Entf-Taste.

### 4.4 Hinweise zur Bearbeitung

- Das Feld besitzt keine sichtbare automatische Syntaxhervorhebung.
- Der Quellcode enthält keine sichtbare Fehlermeldung für ungültiges HTML.
- Eine automatische Formatierung oder automatische Vervollständigung ist im Auszug nicht erkennbar.
- Der genaue Ablauf nach einer Änderung – etwa ob Code sofort erzeugt wird oder erst nach einem Klick – ist im gekürzten Auszug nicht vollständig erkennbar.

---

## 5. Ausgabe und Vorschau verwenden

Der Quellcode enthält separate Bereiche für Ausgabe und Vorschau. Die sichtbaren Bezeichnungen und die genauen Schaltflächen zum Auslösen dieser Funktionen sind im vorliegenden Auszug jedoch nicht enthalten.

Daher gelten folgende Aussagen nur als **begründete Vermutung**:

- Der Inhalt des Eingabefelds wird in HTML umgewandelt und im Ausgabebereich dargestellt.
- Eine Vorschau verwendet den erzeugten Code in einem eingebetteten Rahmen.

Für die tatsächliche Bedienung gilt: Verwenden Sie ausschließlich die in der vollständigen Seite sichtbaren Schaltflächen und Bezeichnungen. Im gekürzten Quellcode ist kein eindeutig benannter Vorschau- oder Generierungsbefehl erkennbar.

---

## 6. Darstellung zwischen hellem und dunklem Design wechseln

Bestätigt ist, dass die Website zwei Farbschemata definiert:

- **Helles Design** als Standard,
- **Dunkles Design** über `data-theme="dark"`.

### 6.1 Wechsel durchführen

1. Suchen Sie in der Navigationsleiste die Schaltfläche mit der Klasse `theme-btn`.
2. Klicken Sie darauf.
3. Prüfen Sie, ob Hintergrund, Textfarben und Karten Darstellung entsprechend wechseln.

### 6.2 Mögliche Ursache, wenn der Wechsel nicht funktioniert

Falls sich das Design nicht ändert:

1. Öffnen Sie die Browser-Entwicklerwerkzeuge.
2. Prüfen Sie, ob das Element `html` oder `body` das Attribut `data-theme="dark"` erhält.
3. Prüfen Sie, ob die zugehörige JavaScript-Funktion auf einen Klick reagiert.
4. Laden Sie die Seite neu und wiederholen Sie den Test.

Ob die gewählte Theme-Einstellung dauerhaft gespeichert wird, ist im Auszug **nicht eindeutig erkennbar**.

---

## 7. KI-Chat „lamacHub Kundenservice“

### 7.1 Zweck

Der Chat ist als **„KI-gestützter Support“** gekennzeichnet. Er soll Besuchern helfen, Fragen zur Nutzung von HTMLBuilder zu stellen.

Der Chat wird über eine feste Schaltfläche unten rechts geöffnet.

### 7.2 Chat öffnen

1. Klicken Sie auf die runde, grüne Schaltfläche unten rechts mit dem Smiley-Symbol.
2. Das Chatfenster mit der Überschrift **„lamacHub Kundenservice“** öffnet sich.
3. Die erste Nachricht lautet: **„Hallo! Wie kann ich dir weiterhelfen?“**

### 7.3 Nachricht senden

1. Klicken Sie in das Eingabefeld mit dem Platzhalter **„Nachricht schreiben …“**.
2. Geben Sie Ihre Frage ein.
3. Klicken Sie auf die runde Senden-Schaltfläche rechts neben dem Eingabefeld.
4. Ihre Nachricht erscheint im Chat als grüne Nachricht.
5. Während der Antwort wird eine animierte Tipp-Anzeige eingeblendet.
6. Die Antwort erscheint anschließend als helle Nachricht.

Alternativ kann die Nachricht mit der Eingabetaste gesendet werden, sofern das Formular dies standardmäßig behandelt.

### 7.4 Unterstützte Formatierungen in Antworten

Der Chat kann Markdown-ähnliche Formatierungen darstellen:

- Überschriften,
- Absätze,
- Listen,
- Links,
- fett, kursiv und durchgestrichen,
- Inline-Code,
- Codeblöcke,
- Tabellen,
- Zitatblöcke,
- horizontale Linien.

Links werden nur für HTTP- beziehungsweise HTTPS-Adressen erzeugt und öffnen sich in einem neuen Tab. Der Quellcode setzt dabei zusätzliche Sicherheitsattribute.

### 7.5 Chat schließen

1. Klicken Sie oben rechts im Chatfenster auf das **„×“**.
2. Das Fenster wird ausgeblendet.
3. Die grüne Smiley-Schaltfläche öffnet den Chat erneut.

### 7.6 Verhalten während einer laufenden Antwort

Der Quellcode sieht einen Status `busy` vor:

- Während eine Antwort verarbeitet wird, wird die Senden-Schaltfläche deaktiviert.
- Dadurch soll verhindert werden, dass mehrere Anfragen gleichzeitig gesendet werden.
- Nach Abschluss der Antwort wird der Status wieder freigegeben.

---

## 8. Datenschutz und Berechtigungen

### 8.1 Keine Anmeldung im gezeigten Quellcode

In `HTMLBuilder/index.html` ist kein Anmeldeformular erkennbar. Eine Anmeldung oder ein Benutzerkonto wird daher nicht vorausgesetzt.

### 8.2 Übertragung von Chatnachrichten

Der Chat sendet Nachrichten an einen externen Support-Dienst. Im Quellcode ist dafür eine feste Web-Worker-Adresse hinterlegt. Aus Sicherheitsgründen wird dieser Wert hier nicht wiedergegeben.

Daraus ergeben sich folgende praktische Hinweise:

- Chatnachrichten werden zur Verarbeitung an einen externen Dienst übertragen.
- Vermeiden Sie die Eingabe von Passwörtern, API-Schlüsseln, Tokens oder anderen vertraulichen Informationen.
- Personenbezogene Daten sollten nur übermittelt werden, wenn dies für die konkrete Supportfrage erforderlich ist.
- Der genaue Umfang der serverseitigen Verarbeitung, Speicherung und Löschung ist im vorliegenden Quellcode **nicht eindeutig erkennbar**.

### 8.3 Verarbeitung des HTML-Codes

Der sichtbare Quellcode enthält keine sichtbare Übermittlungsfunktion für den HTML-Editorinhalt an den Support-Dienst. Ob eine solche Funktion im gekürzten Teil existiert, ist **nicht eindeutig erkennbar**.

### 8.4 In der Vorschau ausgeführter Code

Eine HTML-Vorschau kann grundsätzlich HTML, CSS und JavaScript ausführen. Da der konkrete Mechanismus der Vorschau im gekürzten Quellcode nicht vollständig erkennbar ist, wird empfohlen:

- nur eigenen oder vertrauenswürdigen Code verwenden,
- keine unbekannten Skripte aus dem Internet einfügen,
- sensible Formulare oder Daten nicht in eine Vorschau übernehmen.

Ob die Website Vorschauinhalte in einer abgeschotteten Umgebung ausführt, ist im Quellcode **nicht eindeutig erkennbar**.

### 8.5 Drittanbieter-Ressourcen

Die Seite lädt die Schriftart „Inter“ von Google Fonts. Damit stellt die Seite eine Verbindung zu einem Drittanbieter her. Weitere Datenschutzbestimmungen, etwa ein Impressum oder eine Datenschutzerklärung, sind im gekürzten Auszug nicht erkennbar.

---

## 9. Barrierefreiheit und mobile Nutzung

### 9.1 Tastaturbedienung

- Das Chat-Eingabefeld ist erforderlich und auf 1.800 Zeichen begrenzt.
- Der Senden-Button besitzt eine sprechende Beschriftung.
- Der Schließen-Button besitzt die Beschriftung **„Chat schließen“**.
- Die öffnende Schaltfläche besitzt die Beschriftung **„Kundensupport öffnen“**.
- Der Chatbereich verwendet `aria-live="polite"`, damit neue Antworten assistiven Technischen Systemen gemeldet werden können.
- Die Reduzierung von Animationen wird bei entsprechender Browsereinstellung berücksichtigt.

### 9.2 Mobile Darstellung

Bis zu einer Breite von 1.000 Pixeln werden die beiden großen Karten untereinander angezeigt.

Für den Chat gilt:

- Bis 480 Pixel Breite nutzt er fast die gesamte Bildschirmbreite.
- Das Chatfenster bleibt auf kleinen Bildschirmen nach oben und rechts mit einem kleinen Abstand positioniert.
- Der Editor und die Ausgabe benötigen auf mobilen Geräten weiterhin horizontales Scrollen, falls Zeilen oder Codeblöcke zu breit sind.

---

## 10. Typische Probleme und Fehlerbehebung

### 10.1 Der Chat lässt sich nicht öffnen

1. Prüfen Sie, ob die grüne Smiley-Schaltfläche unten rechts sichtbar ist.
2. Klicken Sie direkt auf das Symbol.
3. Laden Sie die Seite neu, falls das Fenster nicht erscheint.
4. Prüfen Sie in den Entwicklerwerkzeugen, ob die Elemente `lamac-ai-open` und `lamac-ai-window` vorhanden sind.

### 10.2 Der Chat öffnet sich, antwortet aber nicht

Mögliche Ursache: Die Verbindung zum externen Support-Dienst ist nicht verfügbar oder wird blockiert.

1. Prüfen Sie Ihre Internetverbindung.
2. Öffnen Sie die Website in einem anderen aktuellen Browser.
3. Prüfen Sie, ob Inhalte von Drittanbietern oder Skripte blockiert werden.
4. Wiederholen
