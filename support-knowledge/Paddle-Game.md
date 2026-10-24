<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Paddle-Game -->
<!-- source-files: ["Paddle-Game/index.html"] -->

# Paddle-Game – Support-Dokumentation

**Vermuteter Zweck:** Browserbasiertes Paddle-Spiel, bei dem ein unteres Brett den Ball zurückschlägt.  
**Quellcode-Pfad:** `Paddle-Game/index.html`  
**Erstellungsdatum:** 18. April 2026  

> Die Dokumentation basiert auf dem bereitgestellten Quellcode-Auszug. Einzelne Dateien können unvollständig sein. Funktionen, die sich daraus nicht eindeutig ergeben, sind entsprechend gekennzeichnet.

## 1. Überblick

Paddle-Game ist ein einfaches, klassisches Arcade-Spiel für den Browser. Auf der Startseite stehen:

- der Titel **„Paddle Game“**,
- die Schaltfläche **„Spielen“**,
- die Anzeige des lokal gespeicherten oder laufenden **Highscores**,
- eine Schaltfläche zum Umschalten zwischen hellen und dunklen Farben.

Nach dem Start wird das Menü ausgeblendet und ein Spielfeld angezeigt. Der Ball bewegt sich automatisch. Das Brett am unteren Rand kann über die Pfeiltasten oder per Touchbewegung gesteuert werden.

Im Quellcode nicht eindeutig erkennbar sind:

- eine Spielpausenfunktion,
- ein Neustart ohne erneuten Klick auf **„Spielen“**,
- ein sichtbarer Hinweis auf die verwendete Steuerung,
- Geräusche, Musik oder Animationen,
- eine serverseitige Speicherung,
- ein Mehrspieler-Modus,
- ein sichtbarer Pause-, Gewinn- oder Schwierigkeitsgrad-Bereich.

---

## 2. Voraussetzungen

### Erforderlich

- Ein aktueller Browser mit JavaScript-Unterstützung.
- Internetzugang zum Laden der Schriftart „Inter“ von Google Fonts. Das Spiel sollte auch ohne diese Schriftart funktionieren; das exakte Erscheinnis kann dann abweichen.
- Für die Touchsteuerung ein Gerät mit Touchscreen und einem Browser, der Touch-Ereignisse unterstützt.

### Empfohlen

- Für die Pfeiltastensteuerung eine Tastatur.
- Für mobile Geräte eine Bildschirmgröße, auf der das Spielfeld sichtbar bleibt.

### Lokale Ausführung

Die Seite kann grundsätzlich als HTML-Datei geöffnet werden, sofern der Browser lokale Dateien und verwendete Browser-APIs unterstützt. Ob dies in allen Browsern ohne weitere Werkzeuge funktioniert, ist nicht eindeutig feststellbar.

Alternativ kann die Datei über einen lokalen Webserver bereitgestellt werden. Der Quellcode enthält dafür jedoch keine eigene Startanweisung oder Konfigurationsdatei.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Startmenü

Beim Aufruf der Seite wird zunächst das Menü mit folgenden Elementen angezeigt:

- **„Paddle Game“** als großer Überschrift,
- **„Spielen“** als orangefarbene Schaltfläche,
- **„Highscore: 0“** als Highscore-Anzeige.

Der genaue Highscore-Wert hängt davon ab, ob zuvor ein Spiel beendet wurde. Der Quellcode zeigt keine dauerhafte Highscore-Datei; siehe Abschnitt „Highscore und Speicherung“.

### 3.2 Spielfeld

Nach einem Klick auf **„Spielen“** erscheint ein Canvas mit einer internen Größe von 600 × 400 Pixeln.

Dargestellt werden:

- ein orangefarbenes Brett am unteren Rand,
- ein orangefarbener Ball,
- der Text **„Punkte: …“** im Spielfeld,
- die Punkteanzeige oben links.

Auf schmalen Bildschirmen wird das Canvas mit einer Breite von 95 % der verfügbaren Fläche dargestellt. Die Höhe wird proportional angepasst.

### 3.3 Designschaltfläche

Oben rechts befindet sich eine runde Schaltfläche mit einem Sonnen-/Mond-Symbol. Mit ihr kann zwischen dem hellen und dem dunklen Erscheinungsbild gewechselt werden.

### 3.4 Fußzeile

Unten mittig steht:

**© 2026 lamacHub**

Die Fußzeile bleibt auch während des Spiels sichtbar.

---

## 4. Spiel starten

1. Öffnen Sie die Website.
2. Warten Sie, bis das Startmenü mit der Schaltfläche **„Spielen“** erscheint.
3. Klicken Sie auf **„Spielen“**.
4. Das Menü wird ausgeblendet und das Spielfeld erscheint.
5. Steuern Sie das Brett mit den Pfeiltasten oder per Touchbewegung.

Mit dem Start werden der Ball und das Brett auf ihre Ausgangspositionen gesetzt und die Punktzahl beginnt bei 0.

---

## 5. Steuerung

### 5.1 Tastatur

Bestätigte Tasten:

- **ArrowRight** beziehungsweise **Pfeil rechts:** Brett nach rechts bewegen.
- **ArrowLeft** beziehungsweise **Pfeil links:** Brett nach links bewegen.

Während einer Taste wird das Brett kontinuierlich bewegt. Beim Loslassen der Pfeiltaste stoppt die Bewegung.

Das Spiel registriert Tastatureingaben auf der gesamten Seite, nicht ausschließlich auf dem Spielfeld.

### 5.2 Touchsteuerung

1. Das Spielfeld mit dem Finger berühren.
2. Den Finger seitlich über das Spielfeld bewegen.
3. Das Brett folgt der horizontalen Bewegung.

Der Code verhindert bei `touchstart` und `touchmove` das normale Scrollverhalten auf dem Canvas. Die Touchsteuerung ist während eines laufenden Spiels aktiv.

Im Quellcode nicht eindeutig erkennbar ist, ob die Touchsteuerung auch dann funktioniert, wenn der Ball bereits das Spielfeld verlassen hat. In diesem Zustand setzt der Code das Spiel nämlich automatisch zurück auf das Menü.

### 5.3 Nicht bestätigte Eingaben

Folgende Eingaben sind im bereitgestellten Quellcode nicht erkennbar:

- Maussteuerung,
- Bildschirmtasten,
- Paddle-Game-typische Steuernummern,
- Mausklick zum Starten oder Fortsetzen,
- Pause per Leertaste oder Escape.

---

## 6. Spielregeln und Punkte

### 6.1 Ballbewegung

- Der Ball startet ungefähr in der Mitte des Spielfelds.
- Er bewegt sich beim Start diagonal nach oben.
- An der linken, rechten und oberen Spielfeldkante wird die jeweilige Bewegungsrichtung umgekehrt.
- Die Geschwindigkeit des Balls bleibt im gezeigten Code grundsätzlich gleich. Es gibt keine sichtbare Beschleunigung im Laufe des Spiels.

### 6.2 Brett

- Das Brett ist 100 Pixel breit und 15 Pixel hoch.
- Es bewegt sich am unteren Rand des Spielfelds.
- Es kann nicht vollständig über den linken oder rechten Rand hinausbewegt werden.

### 6.3 Punktevergabe

Ein Punkt wird hinzugefügt, wenn der Ball das Brett berührt. Im Code wird die Berührung anhand der Ballposition und der horizontalen Brettposition geprüft.

Der Highscore wird während des laufenden Spiels aktualisiert, sobald die Punktzahl größer als der bisherige Highscore ist. Die aktualisierte Zahl wird jedoch erst beim Zurückkehren zum Menü sichtbar.

### 6.4 Spielende

Das Spiel endet, wenn der Ball vollständig unterhalb des Spielfelds liegt.

Danach geschieht Folgendes:

1. Der Spielstatus wird beendet.
2. Das Spielfeld wird ausgeblendet.
3. Das Startmenü erscheint wieder.
4. Die Highscore-Anzeige wird mit dem aktuellen Highscore aktualisiert.

Es gibt keine sichtbare Game-over-Meldung und keinen separaten Neustart-Button. Erneut gestartet wird über **„Spielen“**.

---

## 7. Highscore und Speicherung

Der Highscore wird im Arbeitsspeicher des Browsers als Variable geführt. Er wird nach dem Spielende in der Menüanzeige dargestellt.

Im bereitgestellten Quellcode ist **keine dauerhafte Speicherung des Highscores in `localStorage` oder auf einem Server** erkennbar. Daher gilt:

- Innerhalb einer laufenden Seite wird der Highscore nach dem Beenden eines Spiels angezeigt.
- Ob der Wert beim Neuladen der Seite erhalten bleibt, ist im Quellcode nicht eindeutig erkennbar.
- Es ist keine Rangliste und keine Synchronisierung zwischen Geräten erkennbar.

Die Theme-Auswahl wird dagegen ausdrücklich unter dem Schlüssel `theme` im `localStorage` gespeichert.

---

## 8. Hell- und Dunkelmodus

### Umschalten

1. Klicken Sie oben rechts auf die runde Schaltfläche mit dem Sonnen-/Mond-Symbol.
2. Das Erscheinungsbild wechselt zwischen hell und dunkel.
3. Die Auswahl wird lokal im Browser gespeichert.

### Startmodus

Beim ersten Besuch ohne gespeicherte Auswahl übernimmt die Website die bevorzugte Betriebssystemeinstellung:

- Ist im Betriebssystem der dunkle Modus aktiviert, startet die Website im dunklen Design.
- Andernfalls startet sie im hellen Design.

Eine spätere manuelle Auswahl hat Vorrang und wird gespeichert.

### Berechtigungen und Datenschutz

Für das Spiel wird kein Benutzerkonto benötigt. Es sind keine Login-, Registrierungs- oder Zahlungsfunktionen erkennbar.

Lokal im Browser gespeichert wird ausschließlich die Designauswahl. Der Highscore wird im vorliegenden Quellcode nicht dauerhaft gespeichert. Beim Aufruf werden außerdem die Google-Schrift „Inter“ und gegebenenfalls weitere Ressourcen der Schriftartenbibliothek angefordert. Dabei kann die IP-Adresse und weitere technische Information des Browsers an den Anbieter übertragen werden.

---

## 9. Typische Probleme und Fehlerbehebung

### 9.1 Das Spielfeld reagiert nicht auf die Pfeiltasten

**Mögliche Ursache:** Eine Eingabe wird in einem anderen Fenster oder Textfeld verarbeitet, oder das Spiel ist nicht gestartet.

**Lösung:**

1. Prüfen Sie, ob die Seite den Fokus hat.
2. Klicken Sie gegebenenfalls einmal auf einen freien Bereich der Seite.
3. Vergewissern Sie sich, dass das Spielfeld sichtbar ist.
4. Verwenden Sie die ausdrücklich unterstützten Tasten **„Pfeil rechts“** und **„Pfeil links“**.

### 9.2 Das Brett bewegt sich auf Mobilgeräten nicht

**Prüfungen:**

1. Verwenden Sie einen Browser mit Touch-Unterstützung.
2. Tippen Sie direkt auf das sichtbare Spielfeld.
3. Ziehen Sie den Finger horizontal und nicht ausschließlich vertikal.
4. Stellen Sie sicher, dass das Spiel aktiv ist und der Ball sich noch im Spielfeld befindet.

Der Quellcode enthält keine sichtbare Anzeige, die die Touchsteuerung erklärt.

### 9.3 Der Ball springt unerwartet an den Rand

Das Spiel prüft Randkollisionen in jedem Animationsschritt. Bei sehr schneller Bewegung oder kleineren Bewegungsintervallen kann eine Randkollision im gezeigten Code weniger stabil wirken.

**Mögliche Abhilfen:**

- Die Seite in einem aktuellen Browser öffnen.
- Andere Skripte oder Erweiterungen, die die Seite verändern, deaktivieren.
- Prüfen, ob die CPU-Auslastung sehr hoch ist.

Eine gezielte technische Korrektur der Kollisionsberechnung ist aus dem bereitgestellten Quellcode nicht ableitbar.

### 9.4 Der Highscore ist nach dem Neuladen wieder 0

**Bestätigte Ursache:** Im vorliegenden Quellcode ist keine dauerhafte Speicherung des Highscores implementiert.

**Mögliche Abhilfe:** Den laufenden Highscore vor dem Neuladen der Seite notieren. Eine dauerhafte Speicherung müsste im Code ergänzt werden; die Website bietet dafür im aktuellen Stand keine Einstellung.

### 9.5 Der dunkle Modus bleibt nicht erhalten

**Prüfungen:**

1. Prüfen Sie, ob im Browser ein privater Modus oder eine restriktive Speicherfunktion aktiv ist.
2. Öffnen Sie dieselbe Website anschließend erneut.
3. Beachten Sie, dass die Einstellung website- und browserbezogen gespeichert wird.

### 9.6 Die Seite erscheint zu groß oder das Spielfeld ist abgeschnitten

Auf kleinen Bildschirmen verkleinert CSS das Canvas auf 95 % der verfügbaren Breite. Die feste Fußzeile kann jedoch weiterhin Platz beanspruchen.

**Abhilfen:**

- Das Browserfenster vergrößern.
- Die Seite zoomen oder auf dem Mobilgerät in einen Querformatodus wechseln.
- Prüfen, ob eine Browser-Erweiterung Zoom oder Seitenlayout verändert.

### 9.7 Die Spielfläche bleibt leer

**Prüfungen:**

1. Klicken Sie auf **„Spielen“**.
2. Öffnen Sie die Browser-Entwicklerkonsole.
3. Prüfen Sie, ob JavaScript aktiviert ist.
4. Laden Sie die Seite neu.
5. Falls die Konsole einen JavaScript-Fehler anzeigt, prüfen Sie insbesondere, ob `index.html` vollständig vorhanden ist.

Im bereitgestellten Auszug ist kein sichtbarer Fallback für deaktiviertes JavaScript implementiert.

### 9.8 Ungewöhnliche Schriftart oder fehlendes Inter

Die Seite lädt „Inter“ über Google Fonts. Ohne Internetverbindung kann die Schriftart ausfallen. Das Spiel sollte weiterhin funktionieren, verwendet dann aber eine Standardschrift.

**Abhilfe:** Internetverbindung prüfen oder die Seite offline mit lokal verfügbaren Ressourcen bereitstellen.

---

## 10. Mobile Bedienung und Darstellungsgrenzen

Bestätigt ist:

- Das Canvas wird auf Bildschirmen mit maximal 768 Pixeln Breite auf 95 % der verfügbaren Breite reduziert.
- Die Touchbewegung steuert das Brett direkt.
- Der Ball kann durch die obere Spielfeldkante zurückkehren.

Nicht eindeutig erkennbar ist:

- ob das Spiel auf sehr kleinen Bildschirmen vollständig ohne Überlagerungen sichtbar ist,
- ob eine Hoch- oder Querformatumschaltung empfohlen wird,
- ob zusätzliche Touchflächen außerhalb des Canvas vorgesehen sind,
- ob eine Unterbrechung beim Wechsel in den Hintergrund automatisch behandelt wird.

---

## 11. Datenschutz und Berechtigungen

### Bestätigte Angaben

- Es ist kein Benutzerkonto erforderlich.
- Es sind keine sichtbaren Formulare für personenbezogene Daten vorhanden.
- Es ist keine Zahlungsfunktion erkennbar.
- Es werden keine API-Schlüssel, Tokens oder Passwörter im bereitgestellten Quellcode benötigt.
- Die Designauswahl wird lokal im Browser gespeichert.
- Externe Schriftarten werden von Google Fonts geladen.

### Nicht erkennbar

Im Quellcode nicht eindeutig erkenn
