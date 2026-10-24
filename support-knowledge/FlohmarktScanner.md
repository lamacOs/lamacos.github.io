<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: FlohmarktScanner -->
<!-- source-files: ["FlohmarktScanner/index.html"] -->

# FlohmarktScanner – Support-Dokumentation

**Vermuteter Zweck:** FlohmarktScanner ist eine webbasierte Anwendung, mit der Gegenstände fotografiert, Preise erfasst und später anhand eines Farbvergleichs wiedergefunden werden können.  
**Quellcode-Pfad:** `FlohmarktScanner/index.html`  
**Erstellungsdatum:** 14. April 2025

---

## 1. Überblick

FlohmarktScanner bietet zwei Hauptfunktionen:

1. **Neues Objekt hinzufügen:**  
   Ein Gegenstand wird fotografiert, anschließend wird ein Preis eingegeben und das Objekt lokal im Browser gespeichert.

2. **Objekt scannen:**  
   Ein Gegenstand wird fotografiert. Die Anwendung vergleicht die durchschnittliche Farbe des Fotos mit bereits gespeicherten Objekten und zeigt bei einem Treffer den gespeicherten Preis an.

Die Website enthält außerdem:

- einen hellen und einen dunklen Darstellungsmodus,
- einen fest positionierten Kundensupport-Chat,
- einen schwebenden Button **„Zurück“**, der nur unter bestimmten Einbettungsbedingungen erscheint.

> Die Quellcode-Auszüge können unvollständig sein. Nicht erkennbare Funktionen werden in dieser Dokumentation ausdrücklich als **„Im Quellcode nicht eindeutig erkennbar“** gekennzeichnet.

---

## 2. Voraussetzungen

### 2.1 Browser und Bildschirm

Für die基本 Nutzung wird ein aktueller Browser mit JavaScript-Unterstützung benötigt.

Die Oberfläche passt sich grundsätzlich an die verfügbare Breite an. Für die Nutzung der Kamera ist jedoch ein Gerät mit Kamera und geeigneter Browser- beziehungsweise Betriebssystem-Berechtigung erforderlich.

### 2.2 Kamera und Berechtigungen

Beim ersten Zugriff auf **„📦 Neues Objekt hinzufügen“** oder **„🔍 Objekt scannen“** fordert der Browser eine Kamerafreigabe an.

Die Kamera wird nach einem Klick auf **„✖ Abbrechen“** wieder beendet. Beim erneuten Start wird erneut eine Kamerafreigabe benötigt beziehungsweise der Browser prüft die bereits erteilte Berechtigung erneut.

### 2.3 Lokaler Speicher

Gespeicherte Objekte werden im `localStorage` des Browsers abgelegt. Das bedeutet:

- Die Daten sind an den verwendeten Browser und das jeweilige Gerät beziehungsweise Profil gebunden.
- Ein Wechsel von Browser, Gerät oder Browserprofil kann dazu führen, dass gespeicherte Objekte nicht sichtbar sind.
- Im Quellcode ist keine Anmeldung und keine Synchronisierung zwischen Geräten erkennbar.
- Eine Funktion zum Anzeigen oder Löschen der gespeicherten Objektliste ist im vorliegenden Quellcode nicht erkennbar.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Kopfbereich

Im oberen Bereich der Website befindet sich links das Logo mit der Bezeichnung **„FlohmarktScanner“**. Rechts ist eine Schaltfläche mit einem Mond- oder Sonnen-Symbol sichtbar.

Mit dieser Schaltfläche kann zwischen dem hellen und dem dunklen Farbschema gewechselt werden.

### 3.2 Begrüßungsbereich

Unterhalb des Kopfbereichs stehen:

- die Überschrift **„FlohmarktScanner“**,
- der Text **„Scanne Gegenstände und speichere Preise smarter 🔍“**.

### 3.3 Hauptkarte

Die Hauptkarte enthält zunächst zwei große Schaltflächen:

- **„📦 Neues Objekt hinzufügen“**
- **„🔍 Objekt scannen“**

Je nach ausgewählter Funktion werden anschließend weitere Bereiche eingeblendet.

### 3.4 Kamera- und Aufnahmebereich

Nach dem Start einer Funktion erscheinen:

- eine Live-Ansicht der Kamera,
- die Schaltfläche **„📸 Foto“**,
- die Schaltfläche **„🔄 Kamera“**,
- die Schaltfläche **„✖ Abbrechen“**,
- eine Fläche für das aufgenommene Foto.

Das Foto wird quadratisch mit einer Kantenlänge von 200 Pixeln dargestellt. Der Code erzeugt das Vorschaubild als JPEG mit einer Qualitätsstufe von 0,6.

### 3.5 Preiseingabe

Im Modus **„Neues Objekt hinzufügen“** erscheint nach der Aufnahme ein Eingabefeld mit dem Platzhalter:

> `z.B. 3.50`

Daneben befindet sich die Schaltfläche **„Speichern“**.

Der Code akzeptiert sowohl einen Punkt als auch ein Komma als Dezimaltrennzeichen. Beim Speichern wird der Preis intern mit zwei Nachkommastellen formatiert.

### 3.6 Kundensupport-Chat

Unten rechts befindet sich eine runde grüne Schaltfläche mit einem Sprechblasen-Symbol. Sie öffnet das Fenster **„lamachub Kundenservice“** mit dem Hinweis **„KI-gestützter Support“**.

Im Chat steht zunächst:

> „Hallo! Wie kann ich Ihnen weiterhelfen?“

Darunter befindet sich ein Eingabefeld mit der Beschriftung **„Nachricht schreiben“** und eine Senden-Schaltfläche mit Pfeilsymbol.

Der Chat kann über das **„×“** oben rechts wieder geschlossen werden.

### 3.7 Schwebender Button „Zurück“

Ein zusätzlicher Button mit der Aufschrift **„Zurück“** kann in der rechten unteren Bildschirmecke erscheinen. Er öffnet `https://www.lamachub.de/` im aktuellen Tab.

Der Button wird nur eingeblendet, wenn die Seite laut Quellcode aus der Domain `www.lamachub.de` über die HTTPS-Adresse aufgerufen wurde. Diese technische Einschränkung ist für Besucher normalerweise nicht sichtbar.

---

## 4. Bedienung: Neues Objekt hinzufügen

### Schritt 1: Funktion starten

1. Öffnen Sie FlohmarktScanner.
2. Klicken Sie auf **„📦 Neues Objekt hinzufügen“**.
3. Die beiden Startschaltflächen werden ausgeblendet.
4. Die Kamera wird gestartet, sofern der Browser die Berechtigung erteilt.

### Schritt 2: Kamera ausrichten

Richten Sie den Gegenstand in der Live-Ansicht aus. Für einen aussagekräftigeren Vergleich sollte der Gegenstand möglichst groß und gut beleuchtet im Kamerabild erscheinen.

### Schritt 3: Foto aufnehmen

1. Klicken Sie auf **„📸 Foto“**.
2. Die Live-Ansicht wird durch die aufgenommene Bildvorschau ersetzt.
3. Bei der Funktion „Neues Objekt hinzufügen“ wird nun das Preisfeld angezeigt.

### Schritt 4: Preis eingeben

1. Klicken Sie in das Feld mit dem Platzhalter **„z.B. 3.50“**.
2. Geben Sie den gewünschten Preis ein.
3. Beispielwerte sind `3.50`, `3,50`, `10` oder `12.90`.

Negative Werte werden vom Quellcode nicht ausdrücklich abgelehnt.

### Schritt 5: Objekt speichern

1. Klicken Sie auf **„Speichern“**.
2. Bei gültigem Bild und gültigem Preis erscheint der Hinweis **„Gespeichert!“**.
3. Die Kamera wird beendet und die Startschaltflächen werden wieder angezeigt.

### Schritt 6: Vorgang abbrechen

Sie können den Vorgang jederzeit mit **„✖ Abbrechen“** beenden. Es wird dann kein Preis gespeichert.

---

## 5. Bedienung: Objekt scannen

### Schritt 1: Scan starten

1. Klicken Sie auf **„🔍 Objekt scannen“**.
2. Die Kamera startet nach Erteilung der entsprechenden Browserberechtigung.

### Schritt 2: Foto aufnehmen

1. Richten Sie den gesuchten Gegenstand in der Kamera aus.
2. Klicken Sie auf **„📸 Foto“**.
3. Die Aufnahme wird unmittelbar mit den gespeicherten Objekten verglichen.

### Schritt 3: Ergebnis prüfen

Je nach Ergebnis erscheint eine Meldung:

- **„Preis: … €“** bei einem ausreichend ähnlichen Treffer,
- **„Kein Treffer“**, wenn kein passendes Objekt gefunden wurde.

Anschließend wird die Kamera beendet und die Startschaltflächen werden wieder angezeigt.

### Erläuterung des Vergleichs

Der Scan verwendet keine sichtbare Texterkennung und keine vollständige Bildsuche. Stattdessen wird für die aktuelle Aufnahme und jedes gespeicherte Bild die durchschnittliche Farbe berechnet.

Anschließend wird der Abstand zwischen den durchschnittlichen RGB-Farben ermittelt. Nur wenn dieser Abstand unter einem festgelegten Schwellenwert liegt, gilt das Objekt als Treffer und der gespeicherte Preis wird angezeigt.

Das bedeutet:

- Unterschiedliche Gegenstände mit ähnlicher Durchschnittsfarbe können als Treffer gewertet werden.
- Gleiche Gegenstände unter stark abweichenden Lichtverhältnissen können als „Kein Treffer“ erscheinen.
- Es wird im Quellcode nicht eindeutig erkennbar, ob das System einen Artikelnamen, eine Warenkategorie oder eine eindeutige Produktkennung speichert.

---

## 6. Helligen und dunklen Modus wechseln

1. Klicken Sie oben rechts auf die Schaltfläche mit dem Mond- oder Sonnen-Symbol.
2. Die Website wechselt zwischen einem hellen und einem dunklen Farbschema.
3. Ein erneuter Klick wechselt die Darstellung zurück.

Der gewählte Modus wird im Quellcode nicht dauerhaft gespeichert. Nach einem Neuladen der Seite ist daher standardmäßig wieder der helle Modus zu erwarten.

---

## 7. Kundensupport-Chat verwenden

### 7.1 Chat öffnen

1. Klicken Sie unten rechts auf die runde grüne Sprechblasen-Schaltfläche.
2. Das Chatfenster **„lamachub Kundenservice“** öffnet sich.
3. Der Cursor wird automatisch in das Eingabefeld gesetzt.

### 7.2 Nachricht senden

1. Geben Sie Ihre Frage in das Feld **„Nachricht schreiben“** ein.
2. Klicken Sie auf die Pfeil-Schaltfläche oder senden Sie das Formular mit der Eingabetaste.
3. Ihre Nachricht erscheint im Chat.
4. Die Antwort wird über einen externen Support-Dienst geladen.

Leere Nachrichten werden nicht gesendet.

### 7.3 Chat schließen

Klicken Sie oben rechts im Chatfenster auf **„×“**. Der Chat wird ausgeblendet; die vorherigen Chatnachrichten bleiben beim erneuten Öffnen innerhalb derselben Seiten Sitzung sichtbar.

### 7.4 Nachrichtenhistorie

Der Chat überträgt die bisherige Unterhaltung zusammen mit der neuen Nachricht an den Support-Dienst. Im Arbeitsspeicher werden für die KI-Antwort grundsätzlich die letzten zwölf Verlaufsnachrichten berücksichtigt.

Ab der 15. gesendeten Nachricht erscheint zusätzlich der Hinweis:

> „Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.“

Die Nachrichtenzählung wird beim Neuladen der Seite zurückgesetzt.

### 7.5 Wenn der Support nicht erreichbar ist

Bei einem Netzwerk-, Server- oder Verarbeitungsfehler erscheint:

> „Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.“

In diesem Fall kann die Nachricht erneut gesendet werden.

---

## 8. Typische Probleme und Fehlerbehebung

### 8.1 Die Kamera startet nicht

**Meldung:** Ein Browserdialog oder eine Fehlermeldung wie „Kamera Fehler: …“ erscheint.

**Mögliche Ursachen:**

- Die Kamera wurde nicht freigegeben.
- Die Kamera wird bereits von einer anderen Anwendung verwendet.
- Die Seite läuft nicht über eine sichere Umgebung.
- Die eingestellte Kamera ist nicht verfügbar.
- Die Geräte- oder Browserberechtigungen wurden blockiert.

**Fehlerbehebung:**

1. Prüfen Sie die Kamera- und Mikrofonberechtigungen des Browsers für diese Website.
2. Schließen Sie andere Anwendungen, die möglicherweise auf die Kamera zugreifen.
3. Laden Sie die Seite neu.
4. Falls die Fehlermeldung bestehen bleibt, versuchen Sie einen anderen aktuellen Browser oder ein anderes Gerät.
5. Prüfen Sie, ob die Website über `https://` oder lokal über `localhost` aufgerufen wird. Viele Browser erlauben Kamerazugriff nur in diesen Kontexten.

---

### 8.2 Es wird „Ungültig“ angezeigt

Diese Meldung erscheint, wenn beim Speichern entweder:

- kein aufgenommenes Bild vorhanden ist,
- der Preisfeldinhalt nicht als gültige Zahl interpretiert werden kann.

**Fehlerbehebung:**

1. Klicken Sie auf **„📸 Foto“**, um tatsächlich ein Bild aufzunehmen.
2. Geben Sie eine Zahl ein, beispielsweise `3.50` oder `3,50`.
3. Klicken Sie erneut auf **„Speichern“**.

Der Platzhaltertext `z.B. 3.50` ist nur ein Beispiel und muss nicht unbedingt eingegeben werden.

---

### 8.3 Das gespeicherte Objekt wird nicht gefunden

**Meldung:** **„Kein Treffer“**

**Mögliche Ursachen:**

- Es wurde noch kein Objekt gespeichert.
- Das gespeicherte Objekt befindet sich in einem anderen Browserprofil oder auf einem anderen Gerät.
- Das gespeicherte Bild und das neue Foto haben stark unterschiedliche Durchschnittsfarben.
- Die Kameraaufnahme war unscharf, zu dunkel oder stark überbelichtet.
- Das Kamerabild enthielt überwiegend den Hintergrund statt des Gegenstands.

**Fehlerbehebung:**

1. Speichern Sie das Objekt erneut mit möglichst ähnlicher Beleuchtung.
2. Nehmen Sie das Objekt großflächig und zentral im Bild auf.
3. Vermeiden Sie starke Farb- oder Lichtunterschiede.
4. Kontrollieren Sie, ob Sie dieselbe Website in demselben Browserprofil verwenden.
5. Bedenken Sie, dass der Vergleich ausschließlich auf Durchschnittsfarben basiert.

---

### 8.4 Falscher Preis wird angezeigt

Der Scan wählt den gespeicherten Eintrag mit der ähnlichsten durchschnittlichen Farbe. Bei mehreren ähnlich farbigen Objekten kann deshalb der falsche Artikel als Treffer erscheinen.

**Verbesserung:**

- Hintergrund möglichst wenig erfassen.
- Das Objekt vollständig und mittig aufnehmen.
- Gegenstände mit ähnlichen Durchschnittsfarben nicht in einem zu ähnlichen Beleuchtungszustand vergleichen.
- Für präzise Ergebnisse wäre eine detailliertere Bildanalyse nötig. Eine solche Funktion ist im
