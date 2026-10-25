<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: FlohmarktScanner -->
<!-- source-files: ["FlohmarktScanner/index.html"] -->

# FlohmarktScanner – Support-Dokumentation

**Vermuteter Zweck:** Der FlohmarktScanner ist eine browserbasierte Anwendung, mit der Gegenstände mithilfe der Kamera erfasst, Preise lokal gespeichert und später über einen vereinfachten Farbvergleich wiedergefunden werden können.  
**Quellcode-Pfad:** `FlohmarktScanner`  
**Datum der Erstellung:** 25. Mai 2026

> Der Quellcode enthält nur die Datei `FlohmarktScanner/index.html`. Aussagen zu nicht vorhandenen Dateien, Serverfunktionen oder einer persistenten Synchronisierung sind daher **im Quellcode nicht eindeutig erkennbar**.

---

## 1. Überblick

Der FlohmarktScanner bietet zwei Hauptfunktionen:

1. **Neues Objekt hinzufügen**
   - Gegenstand fotografieren
   - Preisfeld eingeben
   - Objekt lokal im Browser speichern

2. **Objekt scannen**
   - Gegenstand fotografieren
   - Farbe des Fotos mit gespeicherten Objekten vergleichen
   - Bei einem Treffer den gespeicherten Preis anzeigen

Zusätzlich enthält die Seite:

- einen Licht-/Dunkelmodus,
- einen eingebetteten KI-gestützten Kundenservice,
- eine Rückkehr-Schaltfläche zu lamachub.de unter bestimmten Einbettungsbedingungen.

---

## 2. Voraussetzungen

### Für die Hauptfunktionen

Für Kameraaufnahmen benötigt der FlohmarktScanner:

- einen aktuellen Browser mit Unterstützung für `navigator.mediaDevices.getUserMedia`,
- eine Kamera,
- die Erlaubnis des Browsers, auf die Kamera zuzugreifen,
- eine sichere Umgebung oder eine entsprechend vom Browser zugelassene lokale Seite.

Die Kamera muss in den meisten aktuellen Browsern über **HTTPS** oder über `localhost` verfügbar sein.

### Für den Kundenservice

Der Kundenservice sendet Nachrichten an einen externen KI-Dienst. Dafür müssen:

- eine Internetverbindung bestehen,
- der eingebettete Dienst erreichbar sein,
- die Seite über eine erreichbare Browser-Implementierung von `fetch` verfügen.

### Für die lokale Speicherung

Die gespeicherten Objekte werden im `localStorage` des Browsers abgelegt. Voraussetzung ist, dass der Browser die lokale Speicherung nicht vollständig deaktiviert hat.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Kopfzeile

Oben links befindet sich das Logo mit der Bezeichnung:

**„FlohmarktScanner“**

Rechts befindet sich eine Mond-/Sonn-Schaltfläche mit dem Symbol:

**„🌗“**

Mit dieser Schaltfläche wechselt die Seite zwischen dem hellen und dem dunklen Farbschema.

### 3.2 Begrüßungsbereich

Unter der Kopfzeile stehen:

- **„FlohmarktScanner“**
- **„Scanne Gegenstände und speichere Preise smarter 🔍“**

### 3.3 Hauptkarte

Die Hauptkarte enthält zunächst zwei Schaltflächen:

- **„📦 Neues Objekt hinzufügen“**
- **„🔍 Objekt scannen“**

Je nach gewählter Funktion werden darunter der Kamerabereich, die Aufnahmesteuerung und gegebenenfalls das Preisfeld eingeblendet.

### 3.4 Kamerabereich

Nach dem Start einer Kamerafunktion erscheinen:

- eine Live-Vorschau,
- die Schaltfläche **„📸 Foto“**,
- die Schaltfläche **„🔄 Kamera“**,
- die Schaltfläche **„✖ Abbrechen“**.

Nach einer Aufnahme wird die Live-Vorschau durch eine Aufnahme in einem quadratischen Canvas-Bereich ersetzt.

### 3.5 Preiseingabe

Im Modus **„Neues Objekt hinzufügen“** erscheint nach der Aufnahme ein Textfeld mit dem Platzhalter:

**„z.B. 3.50“**

Darunter befindet sich die Schaltfläche:

**„Speichern“**

### 3.6 Kundenservice

Unten rechts befindet sich eine runde Chat-Schaltfläche mit einem Sprechblasen-Symbol.

Nach dem Öffnen erscheint ein Fenster mit der Überschrift:

- **„lamachub Kundenservice“**
- **„KI-gestützter Support“**

Im Chat-Verlauf wird zu Beginn die Nachricht angezeigt:

**„Hallo! Wie kann ich Ihnen weiterhelfen?“**

Unten befindet sich ein Eingabefeld mit dem Platzhalter:

**„Nachricht schreiben“**

Rechts daneben befindet sich eine Senden-Schaltfläche mit einem Pfeilsymbol.

---

## 4. Bedienung: Neues Objekt hinzufügen

### Schritt 1: Funktion starten

1. Öffnen Sie die Website.
2. Wählen Sie **„📦 Neues Objekt hinzufügen“**.

Die beiden Hauptschaltflächen werden ausgeblendet und die Kamera wird gestartet.

### Schritt 2: Kamera freigeben

Beim ersten Zugriff kann der Browser eine Berechtigungsabfrage anzeigen.

- Erlauben Sie den Kamerazugriff, um die Funktion nutzen zu können.
- Wenn Sie den Zugriff ablehnen, wird eine Fehlermeldung angezeigt.

### Schritt 3: Kamera auswählen

Bei Geräten mit mehreren Kameras können Sie mit **„🔄 Kamera“** zwischen der nach vorn gerichteten und der nach hinten gerichteten Kamera wechseln.

Der Kamerazugriff wird dabei neu aufgebaut. Die jeweils aktive Kamera wird in der Live-Vorschau angezeigt.

### Schritt 4: Foto aufnehmen

1. Richten Sie die Kamera auf den gewünschten Gegenstand.
2. Wählen Sie **„📸 Foto“**.

Das Bild wird auf 200 × 200 Pixel verkleinert und als JPEG mit reduzierter Qualität gespeichert. Die Live-Vorschau wird anschließend durch die Aufnahme ersetzt.

### Schritt 5: Preis eingeben

Geben Sie in das Preisfeld einen Betrag ein, beispielsweise:

- `3.50`
- `3,50`

Der Code wandelt ein Komma vor der Verarbeitung in einen Punkt um. Andere Eingaben werden mit `parseFloat` verarbeitet; ein möglicherweise unvollständig interpretierbarer Betrag kann dabei zu einer anderen Zahl führen.

### Schritt 6: Objekt speichern

1. Wählen Sie **„Speichern“**.
2. Nach erfolgreicher Speicherung erscheint die Meldung **„Gespeichert!“**.
3. Der Kamerabereich und das Preisfeld werden ausgeblendet.
4. Die beiden Hauptschaltflächen werden wieder angezeigt.

Das gespeicherte Objekt enthält:

- ein Bild,
- den Preis als Zeichenkette mit zwei Nachkommastellen.

---

## 5. Bedienung: Objekt scannen

### Schritt 1: Scanfunktion starten

1. Öffnen Sie die Website.
2. Wählen Sie **„🔍 Objekt scannen“**.

Die Kamera wird gestartet und die Live-Vorschau erscheint.

### Schritt 2: Kamera einstellen

- Mit **„🔄 Kamera“** können Sie die Kamera wechseln.
- Mit **„✖ Abbrechen“** können Sie die Kamerasession beenden und zur Auswahl zurückkehren.

### Schritt 3: Foto aufnehmen

1. Richten Sie die Kamera auf das gespeicherte Objekt.
2. Wählen Sie **„📸 Foto“**.

Anschließend wird automatisch der Scan gestartet. Im Modus **„Objekt scannen“** wird kein Preisfeld angezeigt.

### Schritt 4: Ergebnis prüfen

Der Scanner berechnet die durchschnittliche Farbe des aufgenommenen Bildes und vergleicht sie mit den durchschnittlichen Farben der gespeicherten Objekte.

Mögliche Ergebnisse:

- **„Preis: … €“**  
  Ein gespeichertes Objekt wurde als passendster Treffer erkannt.

- **„Kein Treffer“**  
  Es wurde kein ausreichend ähnlicher Treffer gefunden.

Danach wird der Kamerabereich geschlossen und die Auswahl der Hauptfunktionen wieder angezeigt.

### Erkennungsgrenzen

Der Abgleich basiert ausschließlich auf der durchschnittlichen Farbe des Fotos. Daher gilt:

- Unterschiedliche Objekte mit ähnlicher Durchschnittsfarbe können als Treffer erscheinen.
- Andere Farben können zu **„Kein Treffer“** führen.
- Form, Textur, Größe, Logos und Details werden nicht ausgewertet.
- Unterschiedliche Lichtverhältnisse können das Ergebnis beeinflussen.

---

## 6. Kameraschaltfläche verstehen

Mit **„🔄 Kamera“** wird die Variable `useFront` umgeschaltet:

- beim ersten Start wird standardmäßig die rückseitige beziehungsweise Umgebungskamera angefordert,
- nach dem Wechsel wird die nach vorn gerichtete Kamera angefordert,
- bei einem weiteren Wechsel wird wieder die Umgebungskamera verwendet.

Ob ein Gerät tatsächlich beide Kameras besitzt, hängt vom Gerät und Browser ab. Im Quellcode ist keine detaillierte Fehlerbehandlung für Geräte ohne Wechselmöglichkeit erkennbar.

---

## 7. Abbrechen und zurück zur Startansicht

Mit **„✖ Abbrechen“** werden folgende Schritte ausgeführt:

1. Alle aktiven Kameraspuren werden gestoppt.
2. Der Kamerabereich wird ausgeblendet.
3. Das Preisfeld wird ausgeblendet.
4. Die Startschaltflächen werden wieder angezeigt.
5. Die Live-Vorschau wird wieder vorbereitet.
6. Das zuletzt aufgenommene Canvas-Bild wird ausgeblendet.

Die Aufnahme bleibt bis zum nächsten Foto im Arbeitsspeicher des Browsers bestehen. Beim Neustart einer Kamerasession wird sie bei der nächsten Aufnahme ersetzt.

---

## 8. Licht- und Dunkelmodus

Die Mond-/Sonn-Schaltfläche **„🌗“** schaltet die Klassen `light` und `dark` am Dokument um.

Bestätigte Auswirkungen:

- Hintergrund- und Kartenfarben ändern sich,
- Textfarben ändern sich,
- Rahmen und einige Bedienelemente passen sich an,
- eine Seitenübergangsanimation von 0,3 Sekunden wird verwendet.

Der gewählte Modus wird im Quellcode nicht dauerhaft gespeichert. Nach einem vollständigen Neuladen der Seite ist deshalb wieder der im HTML festgelegte helle Ausgangszustand zu erwarten.

---

## 9. Kundenservice

### 9.1 Chat öffnen

1. Klicken Sie unten rechts auf die Sprechblasen-Schaltfläche.
2. Das Chat-Fenster wird geöffnet.
3. Das Eingabefeld erhält automatisch den Fokus.

### 9.2 Nachricht senden

1. Schreiben Sie Ihre Nachricht in das Feld **„Nachricht schreiben“**.
2. Klicken Sie auf die Pfeil-Schaltfläche oder senden Sie das Formular ab.
3. Ihre Nachricht erscheint im Chat als grüne Benutzernachricht.
4. Das Eingabefeld wird geleert.
5. Die Antwort wird nach erfolgreicher Verarbeitung als Bot-Nachricht angezeigt.

Das Eingabefeld erlaubt maximal 1.800 Zeichen. Eine Nachricht, die nur aus Leerzeichen besteht, wird nicht versendet.

### 9.3 Chatverlauf

Für die Verarbeitung werden die letzten zwölf Chat-Einträge berücksichtigt. Der Verlauf wird erst nach einer erfolgreichen Antwort erweitert.

Ab der 15. gesendeten Nachricht erscheint zusätzlich der Hinweis:

**„Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.“**

### 9.4 Chat schließen

Klicken Sie im Chat-Fenster auf **„×“**. Der Chat wird geschlossen; der bis dahin sichtbare Verlauf bleibt im aktuellen Seitenaufruf im Arbeitsspeicher.

### 9.5 Fehlermeldung

Wenn die Kommunikation mit dem KI-Dienst fehlschlägt, erscheint:

**„Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.“**

Die konkrete technische Ursache wird dem Besucher nicht angezeigt.

---

## 10. Rückkehr zu lamachub.de

Die Website enthält eine zusätzliche Schaltfläche:

**„← Zurück“**

Sie wird nur unter folgenden Bedingungen eingeblendet:

1. Die Website wurde in einem Kontext mit Referrer `https://www.lamachub.de` geöffnet.
2. Der Referrer wird als URL mit dem Protokoll `https` und dem Hostnamen `www.lamachub.de` erkannt.

Die Schaltfläche befindet sich in einem separaten Shadow-DOM-Bereich und leitet anschließend zur lamachub-Hauptseite weiter.

Ob die Seite in einem iframe eingebettet ist, spielt für die angezeigte Schaltfläche keine erkennbare Rolle. Ob die Navigation aus jedem eingebetteten Kontext heraus tatsächlich möglich ist, ist **im Quellcode nicht eindeutig erkennbar**.

---

## 11. Lokale Speicherung und Datenhaltung

### Bestätigt

Gespeicherte Objekte werden im Browser unter dem Schlüssel `objects` im `localStorage` abgelegt. Jeder Eintrag enthält ein Bild und einen Preis.

Die Daten werden:

- lokal im verwendeten Browser gespeichert,
- nicht an eine im Quellcode erkennbare FlohmarktScanner-eigene Serverdatenbank übertragen,
- beim nächsten Scan wieder aus dem `localStorage` gelesen.

### Nicht im Quellcode erkennbar

- Ein Export- oder Import-Funktion.
- Eine Synchronisierung zwischen Geräten.
- Ein Konto oder eine Anmeldung.
- Eine serverseitige Sicherung.
- Eine automatische Löschung nach einer bestimmten Zeit.
- Ein sichtbares Menü zur Verwaltung oder Löschung bereits gespeicherter Objekte.

### Praktische Hinweise

- Beim Löschen der Browserdaten kann auch der lokale Speicher gelöscht werden.
- Unterschiedliche Browser, Geräte oder Browserprofile verwenden üblicherweise getrennten lokalen Speicher.
- Im privaten Modus kann der Speicher beim Schließen des Browserfensters verschwinden.
- Das lokale Speichern von Bildern kann den verfügbaren Browser-Speicher schnell belegen, da jedes Objekt ein Bild als Data-URL enthält.
- Eine explizite Löschfunktion einzelner Objekte ist im Quellcode nicht vorhanden.

---

## 12. Datenschutz- und Berechtigungshinweise

### Kamera

Die Website fordert ausdrücklich Zugriff auf die Kamera an. Die Kamera wird erst nach Auswahl einer Kamerafunktion gestartet.

### Mikrofon

Im Quellcode ist keine Anforderung für Mikrofonzugriff erkennbar.

### Standort

Im Quellcode ist keine Geolokalisierung erkennbar.

### Kundenservice und externe Ressourcen

Bestätigt sind folgende externe Verbindungen:

1. **KI-gestützter Kundenservice:**  
   Nachrichten und ein begrenzter Chatverlauf werden per HTTP-Anfrage an einen externen Worker-Dienst übermittelt.

2. **Schriftart:**  
   Die Seite
