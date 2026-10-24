<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Live-World -->
<!-- source-files: ["Live-World/index.html"] -->

# Live-World – Support-Dokumentation

**Website:** Live-World  
**Vermuteter Zweck:** Live-World ist eine einzelne Dashboard-Seite, die verschiedene Welt- und Technologiewerte in Form von Kennzahlen anzeigt. Einige Werte werden im Browser fortlaufend berechnet, andere stammen aus öffentlichen APIs. Zusätzlich ist ein KI-gestützter Kundensupport-Chat integriert.  
**Quellcode-Pfad:** `Live-World/index.html`  
**Datum der Erstellung:** 25. März 2026

---

## 1. Überblick

Die Website besteht aus drei sichtbaren Bereichen:

1. **Kopfbereich mit Logo und Design-Umschalter**
2. **Dashboard mit 20 Kennzahlenkarten**
3. **Fest positionierter Kundensupport-Chat**

Die Seite ist derzeit ohne Benutzerkonto, Anmeldung oder Registrierung nutzbar. Im Quellcode ist keine Sitzungsverwaltung erkennbar.

---

## 2. Voraussetzungen

### Für die Grunnutzung

- Ein aktueller Browser mit JavaScript-Aktivierung
- Internetverbindung für die extern abgerufenen Daten
- Für die korrekte Darstellung der Schrift „Inter“ eine Internetverbindung; andernfalls greift eine Ersatzschrift

### Für den Kundensupport-Chat

- Eine erreichbare Verbindung zum externen Support-Dienst
- Der Chat sendet Nachrichten und den bisherigen Gesprächsverlauf an einen externen Server

### Nicht erforderlich

- Kein Benutzerkonto
- Keine Anmeldung
- Keine Einwilligungsabfrage für das Laden der Dashboard-Daten

---

## 3. Sichtbare Bereiche der Website

## 3.1 Kopfbereich

Im Kopfbereich befindet sich links:

- Ein Logo
- Der Text **„Live Welt“**

Rechts befindet sich eine runde Schaltfläche mit dem Mond-Symbol **„🌗“**.

Mit dieser Schaltfläche wechselt die Website zwischen einem hellen und einem dunklen Farbschema. Der Text **„🌗“** bleibt dabei unverändert.

**Bestätigt:** Der Moduswechsel ist vollständig im Quellcode hinterlegt und benötigt keine Serververbindung.

## 3.2 Dashboard

Das Dashboard wird automatisch als Raster dargestellt. Auf breiten Bildschirmen stehen mehrere Kennzahlen nebeneinander; auf schmalen Bildschirmen werden sie untereinander angeordnet.

Die Kennzahlen lauten:

### Weltbevölkerung

- Anzeige: **„Weltbevölkerung“**
- Startwert im Browser: `8.100.000.000`
- Der Wert steigt im Browser jede Sekunde weiter.

### Geburten

- Anzeige: **„Geburten“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.

### Todesfälle

- Anzeige: **„Todesfälle“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.

### Hochzeiten

- Anzeige: **„Hochzeiten“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.

### Scheidungen

- Anzeige: **„Scheidungen“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.
- Da der Startwert nicht ganzzahlig ist, wird die Anzeige auf ganze Zahlen gerundet. Der sichtbare Wert kann deshalb kurz stagnieren, bevor er steigt.

### Internetnutzer

- Anzeige: **„Internetnutzer“**
- Der Wert wird aus der Weltbevölkerung und dem prozentualen Anteil der Internetnutzer der Weltbank berechnet.
- Die World-Bank-Schnittstelle wird beim Laden der Seite aufgerufen.

### E-Mails heute

- Anzeige: **„E-Mails heute“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.

### Google-Suchen

- Anzeige: **„Google-Suchen“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.

### Instagram-Posts

- Anzeige: **„Instagram-Posts“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.

### Spotify-Streams

- Anzeige: **„Spotify-Streams“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.

### Gefällte Bäume

- Anzeige: **„Gefällte Bäume“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.

### Geschmolzenes Eis

- Anzeige: **„Geschmolzenes Eis“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.

### Ölverbrauch

- Anzeige: **„Ölverbrauch“**
- Startwert: `0`
- Der Wert steigt jede Sekunde.

### Autos weltweit

- Anzeige: **„Autos weltweit“**
- Fester Wert: `1.450.000.000`

### Satelliten

- Anzeige: **„Satelliten“**
- Fester Wert: `8.500`

### Erde–Mond

- Anzeige: **„Erde–Mond“**
- Fester Wert: `384.400 km`

### Sonnenenergie

- Anzeige: **„Sonnenenergie“**
- Fester Wert: `173.000 TW`

### Bitcoin

- Anzeige: **„Bitcoin“**
- Der Preis in US-Dollar wird über eine öffentliche Krypto-Schnittstelle geladen.
- Aktualisierung beim Laden der Seite und danach jede Minute.

### Ethereum

- Anzeige: **„Ethereum“**
- Der Preis in US-Dollar wird über dieselbe Schnittstelle geladen.
- Aktualisierung beim Laden der Seite und danach jede Minute.

### UTC Zeit

- Anzeige: **„UTC Zeit“**
- Die Uhrzeit wird im Format `HH:MM:SS` angezeigt.
- Aktualisierung jede Sekunde.

---

## 4. Bedienung Schritt für Schritt

## 4.1 Dashboard aufrufen

1. Öffnen Sie die Adresse der veröffentlichten Live-World-Seite.
2. Die Kennzahlenkarten erscheinen automatisch.
3. Warten Sie kurz, während die Werte aus den externen Schnittstellen geladen werden.

**Hinweis:** Der Name der Datei `index.html` kann bei einer direkten lokalen Öffnung im Browser funktionieren. Das Laden der externen Daten kann lokal jedoch durch Sicherheitsmechanismen des Browsers oder fehlende Internetverbindung eingeschränkt sein.

## 4.2 Zwischen hellem und dunklem Design wechseln

1. Klicken Sie oben rechts auf die Schaltfläche mit dem Symbol **„🌗“**.
2. Das gesamte Dashboard wechselt in das dunkle Farbschema.
3. Ein erneuter Klick auf **„🌗“** stellt das helle Design wieder her.

## 4.3 Den Kundensupport-Chat öffnen

1. Klicken Sie rechts unten auf die runde grüne Schaltfläche mit dem Chat-Symbol **„💬“**.
2. Das Chat-Fenster mit der Überschrift **„lamachub Kundenservice“** öffnet sich.
3. Unter **„KI-gestützter Support“** erscheint die Begrüßung:
   > „Hallo! Wie kann ich Ihnen weiterhelfen?“
4. Klicken Sie in das Feld **„Nachricht schreiben“**.
5. Geben Sie Ihre Frage ein.
6. Klicken Sie auf die runde Senden-Schaltfläche **„➤“** oder drücken Sie die Eingabetaste.
7. Ihre Nachricht erscheint als grüner Chat-Bereich.
8. Die Antwort des Support-Dienstes erscheint anschließend als weißer Bereich.

**Bestätigt:** Leere Nachrichten werden nicht gesendet.

## 4.4 Den Kundensupport-Chat schließen

1. Klicken Sie oben rechts im Chat-Fenster auf **„×“**.
2. Das Chat-Fenster wird ausgeblendet.
3. Die gesendeten Nachrichten bleiben im Browser gespeichert, solange die Seite nicht neu geladen wird.

---

## 5. Eingaben und Ausgaben

## 5.1 Eingaben

Die Website besitzt nur eine sichtbare Texteingabe:

- **„Nachricht schreiben“**
- Maximale Länge: 1800 Zeichen
- Leerraum am Anfang und Ende wird entfernt.

## 5.2 Ausgaben

### Dashboard

Die Kennzahlen werden als formatierte Zahlen dargestellt. Tausendertrennungen werden automatisch verwendet.

Feste Einheiten werden direkt angezeigt:

- `km` bei **„Erde–Mond“**
- `TW` bei **„Sonnenenergie“**
- `$` bei **„Bitcoin“** und **„Ethereum“**

### Chat

- Nutzertexte werden als grüne, rechtsbündige Blöcke dargestellt.
- Antworten werden als weiße Blöcke dargestellt.
- Lange Wörter werden innerhalb der Blöcke umgebrochen.
- Der Chat-Bereich ist scrollbar.

---

## 6. Erklärungen zu den angezeigten Werten

## 6.1 Im Browser berechnete Live-Werte

Ein großer Teil der Werte wird direkt im Browser über einen sekündlichen Timer fortgeschrieben. Diese Werte sind keine live abgefragten Weltstatistiken.

**Bestätigt:** Sie entstehen aus festen Ausgangswerten und festen Erhöhungen pro Sekunde.

Die Erhöhungen werden im Browser so behandelt, als würden sie jede Sekunde eintreten. Eine großzügige Bereinigung oder Zeitkorrektur bei inaktiven Tabs ist im Quellcode nicht erkennbar. In diesem Zusammenhang ist außerdem nicht eindeutig erkennbar, ob die angezeigten „Live“-Werte fachlich oder wissenschaftlich belastbar sind.

## 6.2 Extern geladene Werte

### Internetnutzer

Die Seite verwendet den Weltbank-Welt-Datensatz für den prozentualen Anteil der Internetnutzer und multipliziert diesen mit dem im Browser hochgezählten Bevölkerungswert.

**Bestätigt:** Der Wert hängt daher sowohl von der API-Antwort als auch vom aktuellen Browser-Zählerstand ab.

### Bitcoin und Ethereum

Die Preise werden über eine öffentliche Preis-API in US-Dollar geladen. Sie werden minütlich aktualisiert.

**Bestätigt:** Die Karten „Bitcoin“ und „Ethereum“ bleiben bis zum erfolgreichen API-Aufruf zunächst auf dem im HTML hinterlegten Platzhalter.

## 6.3 Fest hinterlegte Werte

„Autos weltweit“, „Satelliten“, „Erde–Mond“ und „Sonnenenergie“ werden direkt aus dem Quellcode gesetzt. Diese Werte können sich nicht selbstständig aktualisieren.

---

## 7. Typische Probleme und Fehlerbehebung

## 7.1 Die Werte bleiben auf „...“ stehen

**Ursache:** Die externen Daten wurden noch nicht geladen oder der Abruf ist fehlgeschlagen.

**Mögliche Abhilfe:**

1. Prüfen Sie die Internetverbindung.
2. Laden Sie die Seite neu.
3. Beachten Sie, dass nur die folgenden Karten externe Daten benötigen:
   - **„Internetnutzer“**
   - **„Bitcoin“**
   - **„Ethereum“**
4. Andere Karten sollten unabhängig davon aktualisiert werden.

**Hinweis:** Im Quellcode ist für die World-Bank- und Krypto-API keine eigene Fehlermeldung hinterlegt. Ein Fehlschlag führt dort lediglich dazu, dass der jeweilige Platzhalter sichtbar bleibt.

## 7.2 Der Chat öffnet sich, antwortet aber nicht

**Anzeige im Chat:**

> „Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.“

**Mögliche Ursachen:**

- Keine oder instabile Internetverbindung
- Der externe Support-Dienst ist vorübergehend nicht erreichbar
- Die Antwort des Dienstes ist fehlerhaft oder enthält keine gültigen JSON-Daten

**Abhilfe:**

1. Prüfen Sie die Internetverbindung.
2. Senden Sie die Nachricht erneut.
3. Öffnen Sie bei Bedarf einen anderen Tab, um zu prüfen, ob allgemein Webseiten erreichbar sind.

**Bestätigt:** Der Chat bleibt auch nach einem Fehler bedienbar und kann erneut verwendet werden.

## 7.3 Die Nachricht wird nicht gesendet

**Mögliche Ursachen:**

- Das Eingabefeld enthält nur Leerzeichen.
- Die Eingabetaste wurde in einem anderen Eingabefeld ausgelöst.

**Abhilfe:**

1. Geben Sie einen sichtbaren Text in **„Nachricht schreiben“** ein.
2. Klicken Sie auf **„➤“**.

## 7.4 Das dunkle Design wird nicht angezeigt

**Abhilfe:**

1. Prüfen Sie, ob Sie auf **„🌗“** und nicht nur auf das Symbol innerhalb der Schaltfläche geklickt haben.
2. Laden Sie die Seite neu.
3. Beachten Sie, dass der Wechsel nicht dauerhaft gespeichert ist. Beim Neuladen der Seite beginnt die Website wieder im hellen Design.

## 7.5 Die Website erscheint falsch dargestellt

**Abhilfe:**

1. Stellen Sie die Browser-Zoomstufe auf 100 %.
2. Öffnen Sie die Seite in einem aktuellen Browser.
3. Falls Karten abgeschnitten oder überlagert erscheinen, laden Sie die Seite neu.
4. Prüfen Sie, ob eine Erweiterung für Werbeblocker, Datenschutz oder Elementschutz die externen Inhalte blockiert.

## 7.6 Eine externe Inhaltsquelle fehlt

Das Logo wird über eine externe Adresse geladen. Wird diese Adresse blockiert oder ist sie nicht erreichbar, kann der Bildbereich im Kopfbereich leer bleiben.

**Abhilfe:** Andere Browserfenster testen, Erweiterungen deaktivieren und Internetverbindung prüfen.

## 7.7 „Zurück“-Schaltfläche in fremden Einbettungen

In bestimmten Einbettungssituationen kann zusätzlich eine orange Schaltfläche **„Zurück“** erscheinen. Sie wird nur eingeblendet, wenn die verweisende Seite exakt als `www.lamachub.de` über HTTPS eingebettet ist.

**Bestätigt:** Die Schaltfläche führt in demselben Tab zur Startseite von lamachub.de zurück.

---

## 8. Datenschutz- und Berechtigungshinweise

## 8.1 Kontakt zum Support-Dienst

Wenn ein Besucher eine Chat-Nachricht sendet, werden die aktuelle Nachricht und der bisherige Gesprächsverlauf an einen externen Support-Dienst übertragen.

**Bestätigt aus dem Quellcode:**

- Die Übertragung erfolgt per HTTPS.
- Gesendet werden:
  - die aktuelle Nachricht
  - der bisherige Chat-Verlauf
- Der Verlauf umfasst nach erfolgreichen Antwortungen die letzten zwölf gespeicherten Verlaufseinträge.
- Bei jeder weiteren Nachricht wird die Historie erneut mitgesendet.

**Im Quellcode nicht eindeutig erkennbar:**

- welche Aufbewahrungsfristen beim Support-Dienst gelten
- ob der Support-Dienst personenbezogene Daten protokolliert
- welche Einwilligungen vor der Nutzung erforderlich sind
- welche Einstellungen ein Betreiber vornehmen kann

## 8.2 Externe Daten
