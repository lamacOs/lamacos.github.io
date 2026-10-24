<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Sprach-Berater -->
<!-- source-files: ["Sprach-Berater/index.html"] -->

# Sprach-Berater

**Vermuteter Zweck:** Der „Sprach-Berater“ ist eine browserbasierte Seite zur Aufzeichnung und Analyse der gesprochenen Sprache. Sie misst die Lautstärke, erkennt gesprochene Sprache, erstellt ein deutsches Transkript und zeigt Sprechzeit sowie allgemeines Feedback an.

**Quellcode-Pfad:** `Sprach-Berater/index.html`  
**Datum der Erstellung:** 19. März 2025  
**Quellcode-Stand:** Der bereitgestellte Quellcode ist offenbar ein Auszug; einzelne Funktionen oder Dateien können daher unvollständig sein.

> **Hinweis zur Bezeichnung:** Der Browser-Titel und die sichtbare Navigation lauten „SprachTracker“, während das Repository „Sprach-Berater“ heißt. Der vollständige HTML-Titel lautet `SprachTracker`.

---

## 1. Überblick

Die Website besteht aus den folgenden sichtbaren Bereichen:

1. **Navigation**
   - Logo mit Bild
   - Bezeichnung „SprachTracker“
   - Umschalter für das dunkle oder helle Farbschema

2. **Hauptbereich „Sprach- und Lautstärketracker“**
   - Schaltfläche **„Start Aufzeichnung“**
   - Lautstärkeanzeige
   - Statusanzeige zur Sprachaktivität
   - Feedback-Anzeige
   - Anzeige der Gesamtsprechzeit
   - Deutsches Sprachtranskript

3. **Kundensupport-Chat**
   - Chat-Fenster „lamachub Kundenservice“
   - Nachrichteneingabe
   - Übergabe der Chat-Historie an einen externen Support-Dienst

4. **Optionaler Zurück-Link zu lamachub.de**
   - Wird nur unter bestimmten technischen Bedingungen eingeblendet
   - Weitere Einzelheiten stehen in Abschnitt [Zurück zu lamachub.de](#9-zurück-zu-lamachubde).

---

## 2. Voraussetzungen und Berechtigungen

### Browser

Die Seite verwendet moderne Browser-APIs, insbesondere:

- Mikrofonzugriff
- Web Audio API
- Speech Recognition beziehungsweise Web Speech API
- `localStorage` für das gewählte Farbschema

Ob alle Browser diese Funktionen unterstützen, ist im Quellcode nicht vollständig festgelegt. Im Quellcode wird nur die verbreitete Schreibweise:

```text
window.SpeechRecognition || window.webkitSpeechRecognition
```

unterstützt.

**Wenn kein entsprechender Speech-Recognition-Eintrag vorhanden ist, kann bereits das Laden der Seite fehlschlagen.** Dies ist eine technische Beobachtung aus dem Quellcode und keine von der Seite angezeigte Fehlermeldung.

### Mikrofon

Für die Aufzeichnung ist Folgendes erforderlich:

1. Die Seite muss auf einem sicheren Kontext laufen, also in der Regel über `https://` oder über `localhost`.
2. Der Browser muss dem Zugriff auf das Mikrofon zustimmen.
3. Das Mikrofon muss verfügbar sein und nicht durch eine andere Anwendung blockiert werden.

### Sprache

Die Spracherkennung ist im Quellcode auf Deutsch eingestellt:

```text
de-DE
```

Das Transkript wird daher auf Deutsch erwartet. Ob zusätzlich andere Sprachen ausgewählt werden können, ist im Quellcode nicht eindeutig erkennbar.

---

## 3. Bedienung Schritt für Schritt

### 3.1 Farbschema wechseln

1. Öffnen Sie die Website.
2. Klicken Sie in der Navigation oben rechts auf das Mondsymbol **🌙**.
3. Die Seite wechselt in den dunklen Modus. Das Symbol wechselt zu **☀️**.
4. Klicken Sie erneut auf **☀️**, um zum hellen Modus zurückzukehren.

Die Auswahl wird im lokalen Browserspeicher gespeichert. Beim nächsten Besuch der Seite wird das zuletzt gewählte Schema automatisch verwendet.

**Bestätigt im Quellcode:** Die Theme-Auswahl wird über `localStorage` mit dem Schlüssel `theme` gespeichert.

---

### 3.2 Aufzeichnung starten

1. Klicken Sie im Hauptbereich auf **„Start Aufzeichnung“**.
2. Der Browser zeigt gegebenenfalls eine Berechtigungsabfrage für das Mikrofon an.
3. Erlauben Sie den Mikrofonzugriff.
4. Nach der Zustimmung:
   - wechselt die Schaltfläche zu **„Stop Aufzeichnung“**,
   - beginnt die Lautstärkeanzeige sich zu bewegen,
   - wird die Spracherkennung gestartet,
   - werden erkannte Sprache und Transkript angezeigt.

Die Spracherkennung ist als fortlaufende Erkennung konfiguriert. Endet sie unerwartet, versucht der Quellcode automatisch, sie nach kurzer Zeit erneut zu starten.

---

### 3.3 Lautstärke und Sprachaktivität beobachten

Während der Aufzeichnung analysiert die Seite die Lautstärke des Mikrofons:

- Der farbige Balken in der **Lautstärkeanzeige** reagiert auf die erkannte Schallstärke.
- Überschreitet der berechnete Durchschnittswert eine interne Schwelle, erscheint **„Du sprichst...“**.
- Fällt der Wert wieder unter die Schwelle, erscheint **„Du hast aufgehört zu sprechen.“**
- Anschließend werden Feedback und Gesamtsprechzeit aktualisiert.

Die Schwelle ist im Quellcode festgelegt. Eine Erklärung oder Einstellmöglichkeit für diesen Wert ist für Besucherinnen und Besucher nicht sichtbar.

---

### 3.4 Transkript lesen

Erkannte finale Sprache wird im Bereich **„Sprach-Transkript: (Wird hier angezeigt)“** angezeigt.

- Neue Textzeilen werden untereinander eingefügt.
- Vorübergehende, noch nicht finale Erkennungen werden für die Anzeige nicht verwendet.
- Das Transkript ist scrollbar.
- Beim Start einer neuen Aufzeichnung wird der bisherige Inhalt durch den Anfangszustand ersetzt.

**Bestätigt im Quellcode:** Die Spracheinstellung ist `de-DE`, und die Erkennung läuft mit `continuous = true` sowie `interimResults = true`.

**Im Quellcode nicht eindeutig erkennbar:** Ob eine Bearbeitung, ein Kopieren, ein Exportieren oder ein Löschen einzelner Transkriptstellen vorgesehen ist.

---

### 3.5 Aufzeichnung beenden

1. Klicken Sie auf **„Stop Aufzeichnung“**.
2. Die Spracherkennung wird beendet.
3. Die Schaltfläche wechselt zurück zu **„Start Aufzeichnung“**.
4. Die Lautstärkeverarbeitung wird angehalten.
5. Wenn Sie zum Zeitpunkt des Stopps noch als sprechend eingestuft waren:
   - wird die laufende Sprechzeit noch hinzugefügt,
   - erscheint **„Du hast aufgehört zu sprechen.““,
   - werden Feedback und Gesamtsprechzeit aktualisiert.

---

## 4. Anzeigen und Ausgaben

### Lautstärkeanzeige

Ein horizontaler Balken zeigt die aktuelle erkannte Lautstärke. Die Breite wird fortlaufend anhand der Audioanalyse aktualisiert.

**Im Quellcode nicht eindeutig erkennbar:** Eine numerische Lautstärke, ein Pegel in Dezibel oder eine Einstellung des Messbereichs.

### Sprachstatus

Mögliche sichtbare Texte sind:

- **„Warte auf Sprachaktivität...“**
- **„Du sprichst...“**
- **„Du hast aufgehört zu sprechen.““

Der Status wird anhand eines internen Schwellenwerts der Lautstärkemessung gesteuert.

### Feedback

Die Seite zeigt zu Beginn:

**„Feedback: Kein Feedback noch“**

Nach einer als Sprechphase erkannten Periode wird das Feedback aktualisiert. Derzeit sind zwei Meldungen erkennbar:

- **„Feedback: Deine Sprechzeit ist gut.“**
- **„Tipp: Versuche, Pausen zu machen und anderen Raum zum Sprechen zu geben.“**

Die zweite Meldung erscheint, wenn in der aktuellen Auswertung mehr als zehn Sekunden Sprechzeit zusammengekommen sind.

### Gesamtsprechzeit

Die Anzeige lautet:

**„Gesamtsprechzeit: 0 Sekunden“**

Nach der Auswertung wird die aufgerundete Sprechzeit in Sekunden angezeigt. Die Summe wird nach jeder Feedback-Auswertung zurückgesetzt und damit für den jeweils aktuellen Auswertungsabschnitt verwendet.

**Bestätigt im Quellcode:** Es handelt sich um eine zusammengeführte Sprechzeit der in dieser Auswertung erkannten Sprechphasen.

**Im Quellcode nicht eindeutig erkennbar:** Eine dauerhafte Gesamtsumme über mehrere Aufzeichnungen hinweg oder eine Speicherung der Sprechzeit nach einem Neuladen der Seite.

---

## 5. Kundensupport-Chat

### Chat öffnen

1. Klicken Sie auf die runde grüne Schaltfläche **„💬“** in der rechten unteren Bildschirmecke.
2. Das Fenster **„lamachub Kundenservice“** öffnet sich.
3. Der Eingabefeld „Nachricht schreiben“ wird automatisch fokussiert.

### Nachricht senden

1. Geben Sie Ihre Nachricht in das Feld **„Nachricht schreiben“** ein.
2. Klicken Sie auf die Senden-Schaltfläche **„➤“** oder drücken Sie die Eingabetaste.
3. Ihre Nachricht erscheint im Chat.
4. Der Supportdienst versucht, eine Antwort anzuzeigen.

Leere Nachrichten werden nicht gesendet. Die maximale Länge des Eingabefelds beträgt 1.800 Zeichen.

### Chat schließen

Klicken Sie im Chat-Fenster oben rechts auf **„×“**. Das Fenster wird geschlossen und kann über **„💬“** erneut geöffnet werden.

### Gesprächsverlauf

Der zuletzt verwendete Verlauf wird für die Kommunikation mit dem Supportdienst berücksichtigt. Im Quellcode werden davon die letzten zwölf Einträge beibehalten.

- Eigene Nachrichten werden unmittelbar angezeigt.
- Eine Antwort wird erst nach erfolgreicher Antwort des externen Supportdienstes angezeigt.
- Bei einem Fehler erscheint:

**„Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.“**

Ab der 15. gesendeten Nachricht erscheint zusätzlich der Hinweis:

**„Hinweis: Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.“**

**Im Quellcode nicht eindeutig erkennbar:** Ob der Chatverlauf dauerhaft gespeichert, wiederhergestellt oder serverseitig protokolliert wird.

---

## 6. Datenschutz- und Berechtigungshinweise

### Mikrofon

Beim Start der Aufzeichnung wird der Browser um Mikrofonzugriff gebeten. Der Code verwendet:

```text
navigator.mediaDevices.getUserMedia({ audio: true })
```

Damit werden Audiostreams angefordert und lokal für die Lautstärkemessung verwendet.

**Bestätigt im Quellcode:** Es wird ein Mikrofonzugriff angefordert.

**Im Quellcode nicht eindeutig erkennbar:**

- ob die aufgenommenen Audiodaten gespeichert werden,
- ob Audiodaten an einen Server übertragen werden,
- ob das Transkript dauerhaft gespeichert wird,
- welche Aufbewahrungs- oder Löschfristen gelten.

Der sichtbare Oberflächentext enthält hierzu keine Datenschutzerklärung.

### Spracherkennung

Die Browser-Speech-Recognition wird mit `de-DE` gestartet. Wie der konkrete Browser die Erkennung umsetzt und ob dabei Audio an einen Browserhersteller-Dienst übertragen wird, ist anhand dieses Seitenquellcodes nicht feststellbar.

### Kundensupport-Chat

Der Chat sendet die eingegebene Nachricht sowie den zuletzt geführten Chatverlauf an einen externen Worker-Endpunkt. Der Zielhost ist im Quellcode enthalten; eine mögliche Konfiguration oder ein möglicher Geheimniswert wurde hier aus Sicherheitsgründen nicht wiedergegeben.

**Bestätigt im Quellcode:** Nachricht und Verlauf werden per HTTP-POST als JSON an den Supportdienst übertragen.

### Lokale Speicherung

Der Dark-Mode-Status wird im lokalen Browserspeicher gespeichert. Im bereitgestellten Quellcode ist keine Speicherung von Transkript, Sprechzeit oder Chatverlauf im Browser ersichtlich.

### Zurück-Link

Der zusätzliche **„Zurück“**-Button kann den Besucher zu `www.lamachub.de` navigieren. Er wird nur eingeblendet, wenn der Referrer exakt dem Host `www.lamachub.de` und dem Protokoll `https:` entspricht.

### Lokale Speicherung

Der Dark-Mode-Status wird im lokalen Browserspeicher gespeichert. Im bereitgestellten Quellcode ist keine Speicherung von Transkript, Sprechzeit oder Chatverlauf im Browser ersichtlich.

---

## 7. Typische Probleme und Fehlerbehebung

### 7.1 Es erscheint „Mikrofon-Zugriff verweigert“

**Mögliche Ursache:** Der Browserzugriff auf das Mikrofon wurde abgelehnt, blockiert oder die Berechtigung wurde für die Seite zurückgesetzt.

**Abhilfe:**

1. Öffnen Sie die Browser-Einstellungen für die Website.
2. Prüfen Sie, ob Mikrofonzugriff erlaubt ist.
3. Erlauben Sie den Zugriff, falls er blockiert wurde.
4. Laden Sie die Seite neu.
5. Klicken Sie erneut auf **„Start Aufzeichnung“**.
6. Prüfen Sie außerdem, ob das Mikrofon unter Windows, macOS oder Linux vom Betriebssystem freigegeben ist.

---

### 7.2 Die Lautstärkeanzeige bewegt sich nicht

**Mögliche Ursache:** Das Mikrofon liefert keine Audiodaten oder es wird von einer anderen Anwendung genutzt.

**Abhilfe:**

1. Prüfen Sie, ob in den Systemeinstellungen ein Eingabegerät ausgewählt ist.
2. Schließen Sie möglicherweise blockierende Anwendungen.
3. Erlauben Sie den Mikrofonzugriff für die Website.
4. Starten Sie die Aufzeichnung erneut.
5. Sprechen Sie während der laufenden Aufzeichnung deutlich in das Mikrofon.

Wenn die Anzeige reagiert, aber kein Text erscheint, liegt das Problem eher bei der Spracherkennung.

---

### 7.3 Es wird kein Transkript angezeigt

**Mögliche Ursachen:**

- Der Browser oder die verwendete Web-Speech-API erkennt die Sprache nicht.
- Die Mikrofonaufnahme ist zu leise.
- Es wird trotz sichtbarer Lautstärke keine verwertbare Sprache erkannt.
- Die Erkennung wird vom Browser nicht unterstützt.
- Die Seite wird nicht in einem unterstützten sicheren Kontext ausgeführt.

**Abhilfe:**

1. Prüfen Sie die Lautstärkeanzeige.
2. Sprechen Sie lauter und näher am Mikrofon.
3. Starten Sie die Aufzeichnung neu.
4. Verwenden Sie einen aktuellen Browser, der die Web Speech API unterstützt.
5. Prüfen Sie, ob dieselbe Seite über `https://`
