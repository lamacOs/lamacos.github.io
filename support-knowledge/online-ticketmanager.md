<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: online-ticketmanager -->
<!-- source-files: ["online-ticketmanager/index.html"] -->

# online-ticketmanager – Support-Dokumentation

**Website-Name:** TicketShows / online-ticketmanager  
**Vermuteter Zweck:** TicketShows ist eine browserbasierte Anwendung zur Verwaltung von Shows und den dazugehörigen Tickets. Besucher können Shows anlegen, Tickets verwalten, QR-Codes erzeugen beziehungsweise scannen und die Daten im Browser speichern.  
**Quellcode-Pfad:** `online-ticketmanager/index.html`  
**Erstellungsdatum:** 15. März 2025

> **Hinweis zur Quellcode-Basis:** Die Analyse basiert auf einem gekürzten Auszug aus `online-ticketmanager/index.html`. Funktionen, die im sichtbaren Teil nicht eindeutig belegt sind, werden entsprechend gekennzeichnet.

---

## 1. Überblick

TicketShows richtet sich laut sichtbarer Beschreibung an:

- Theater
- Zirkus
- weitere Veranstalter mit Shows und Tickets

Die Anwendung bietet im bestätigten Quellcode:

- eine Verwaltungsoberfläche für Shows und Tickets,
- eine mehrstufige Erfassung neuer Shows,
- eine Speichern-Funktion,
- einen QR-Code-Generator,
- einen Kamera-Scanner für QR-Codes,
- einen QR-Code-Pop-up mit der Option **„Öffnen (prüfen)“**,
- einen hellen und dunklen Darstellungsmodus,
- sowie einen eingebauten KI-gestützten Kundenservice-Chat.

Ob die Anwendung ihre Daten dauerhaft im Browser, auf einem Server oder ausschließlich temporär speichert, ist aus dem gekürzten Quellcode **nicht eindeutig erkennbar**. Die Schaltfläche **„Speichern“** und die Funktion `saveData()` bestätigen lediglich, dass eine Speicherfunktion existiert.

---

## 2. Voraussetzungen

### 2.1 Browser und Gerät

Für die sichtbaren Funktionen wird ein moderner Browser benötigt, der JavaScript, `localStorage`, Webcamzugriff und externe JavaScript-Bibliotheken unterstützt.

Empfohlen werden:

- aktuelle Versionen von Chrome, Edge, Firefox oder Safari,
- ein Gerät mit Kamera, wenn QR-Codes gescannt werden sollen,
- eine Internetverbindung, da einige Skripte, Bilder und der Support-Chat von externen Diensten geladen werden.

### 2.2 Kamerazugriff

Beim Starten des Scanners wird der Browser um Erlaubnis zum Zugriff auf die Kamera gebeten. Die Funktion **„Start“** kann ohne Kamerazugriff nicht genutzt werden.

Sofern die Seite über HTTPS ausgeliefert wird, ist der Kamerazugriff in der Regel auch in Produktionsumgebungen möglich. Die genaue Berechtigungslogik des Browsers hängt vom Hosting ab.

### 2.3 Externe Bibliotheken

Die Seite bindet zwei externe Bibliotheken ein:

- **jsQR** zum Erkennen von QR-Codes im Kamerabild,
- **qrcode** zum Erzeugen von QR-Codes.

Fehlt eine dieser Bibliotheken oder ist das CDN nicht erreichbar, können Scanner beziehungsweise QR-Generator eingeschränkt sein.

---

## 3. Sichtbare Bereiche der Website

## 3.1 Navigationsleiste

Ganz oben befindet sich eine feste Navigationsleiste mit:

- einem **lamacOs-Logo**,
- dem Text **„lamacOs“**,
- einer runden Schaltfläche zum Wechseln zwischen hellem und dunklem Design.

Das Logo verweist auf einen Platzhalter beziehungsweise den Seitenanfang. Weitere Navigationspunkte sind im sichtbaren Quellcode nicht vorhanden.

### Design wechseln

1. Klicken Sie oben rechts auf die runde Schaltfläche mit dem Sonnen- oder Mondsymbol.
2. Die Seite wechselt zwischen dem hellen und dem dunklen Farbschema.
3. Die Auswahl wird im Browser unter dem Schlüssel `theme` gespeichert und beim nächsten Laden wiederhergestellt.

Die Funktion zum Speichern des Designzustands ist im Quellcode bestätigt.

---

## 3.2 Seitenkopf

Unterhalb der Navigationsleiste zeigt die Website:

- die große Überschrift **„TicketShows“**,
- den Beschreibungstext **„Verwalten Sie Shows und Tickets einfach. Perfekt für Theater, Zirkus und mehr.“**

Es ist keine Anmeldung, keine Preisanzeige und keine Kontoverwaltung sichtbar.

---

## 3.3 Aktionsbereich

Oberhalb der Show-Liste befinden sich zwei Schaltflächen:

- **„＋“** mit dem Hinweis **„Neue Show“**,
- **„Speichern“**.

### Neue Show anlegen

1. Klicken Sie auf **„＋“**.
2. Ein Dialog mit der Überschrift **„Wann?“** öffnet sich.
3. Geben Sie die verlangten Informationen in das Eingabefeld ein.
4. Klicken Sie auf **„Weiter“**, um mit der Erfassung fortzufahren.
5. Fahren Sie mit den weiteren angezeigten Schritten fort.
6. Abschließend ist im gekürzten Quellcode nicht eindeutig erkennbar, ob die Show sofort angelegt oder zunächst nur in einer Vorschau angezeigt wird.

### Daten speichern

1. Klicken Sie auf **„Speichern“**.
2. Die Anwendung ruft die Funktion `saveData()` auf.

Wo genau die Daten gespeichert werden, ist im gekürzten Auszug nicht vollständig erkennbar. Eine lokale Speicherung ist aufgrund des verwendeten `localStorage` für das Theme grundsätzlich möglich, die konkrete Umsetzung von `saveData()` muss jedoch im vollständigen Quellcode geprüft werden.

---

## 3.4 Show- und Ticketliste

Im Hauptbereich werden Shows als Karten angezeigt. Jede Show-Karte enthält:

- einen orangefarbenen Show-Titel,
- weitere Show-Informationen,
- eine Liste zugehöriger Tickets,
- bei jedem Ticket Metadaten,
- Aktionsschaltflächen.

Der sichtbare Quellcode bestätigt außerdem, dass Show-Karten auf- und zugeklappt werden können. Dafür wird ein Zustand namens `expandedShow` verwendet.

### Show aufklappen

1. Klicken Sie auf den Kopfbereich einer Show-Karte.
2. Die zugehörige Ticket-Liste wird eingeblendet beziehungsweise ausgeblendet.

### Ticket bedienen

Die Ticket-Karten bieten rechts mehrere Aktionen. Die konkreten Beschriftungen und Funktionen sind im gekürzten Auszug nicht vollständig sichtbar. Eindeutig erkennbar ist jedoch, dass Tickets unter anderem:

- einen QR-Code anzeigen können,
- als eingelöst oder verbraucht markiert werden können,
- und dass ein durchgestrichener Darstellungszustand existiert.

Die genaue Reihenfolge und Bedeutung aller Ticket-Schaltflächen sollte anhand des vollständigen Quellcodes oder direkt in der laufenden Anwendung geprüft werden.

---

## 3.5 QR-Code-Pop-up

Wenn ein Ticket einen QR-Code besitzt, wird dieser in einem zentralen Pop-up dargestellt.

Der Pop-up enthält:

- eine dynamische Überschrift,
- das QR-Code-Bild,
- die Schaltfläche **„Öffnen (prüfen)“**,
- die Schaltfläche **„Schließen“**.

### QR-Code anzeigen

1. Öffnen Sie die gewünschte Show.
2. Klicken Sie bei einem Ticket auf die zuständige QR-Code-Aktion.
3. Der generierte QR-Code erscheint im Pop-up.

### QR-Inhalt prüfen

1. Klicken Sie auf **„Öffnen (prüfen)“**.
2. Der QR-Inhalt wird in einem separaten Browser-Dokument beziehungsweise einer neuen Ansicht geöffnet.
3. Prüfen Sie dort, ob der Inhalt zum erwarteten Ticket passt.

Welche URL oder welcher Text hinter dem QR-Code liegt, ist im gekürzten Quellcode nicht eindeutig erkennbar.

### Pop-up schließen

1. Klicken Sie auf **„Schließen“**.
2. Das QR-Fenster wird ausgeblendet.

---

## 3.6 Kamerabereich

Am unteren Bildschirmrand ist dauerhaft ein Kamerabereich sichtbar. Er enthält:

- ein Live-Video der Kamera,
- die Statusanzeige **„Kamera: aus“** beziehungsweise einen aktualisierten Status,
- die Schaltfläche **„Start“**,
- die Schaltfläche **„Stop“**.

Der Kamerabereich überlagert einen Teil des unteren Seiteninhalts. Die Seite reserviert dafür zusätzlichen Platz.

### Scanner starten

1. Klicken Sie auf **„Start“**.
2. Erlauben Sie den Kamerazugriff im Browser.
3. Halten Sie einen QR-Code in das Kamerabild.
4. Der Scanner versucht, den Code automatisch zu erkennen.
5. Das Kamerabild und die Statusanzeige informieren über den aktuellen Zustand.

### Scanner stoppen

1. Klicken Sie auf **„Stop“**.
2. Die Kamera wird nicht weiter verwendet und die Statusanzeige wird zurückgesetzt.

---

## 3.7 QR-Fehleranzeige

Wenn ein gescannter Code nicht als gültiger Ticketcode erkannt wird, erscheint oben eine rote Meldung:

**„Falscher QR Code“**

Die Meldung blinkt und wird nach erfolgreicher oder fehlgeschlagener Verarbeitung automatisch ausgeblendet.

---

## 3.8 lamachub Kundenservice

Unten rechts befindet sich eine runde grüne Chat-Schaltfläche mit einem Sprechblasen-Symbol. Sie öffnet das Fenster **„lamachub Kundenservice“** mit der Untertitelzeile **„KI-gestützter Support“**.

### Support-Chat verwenden

1. Klicken Sie unten rechts auf das Sprechblasen-Symbol.
2. Schreiben Sie Ihre Frage in das Feld **„Nachricht schreiben“**.
3. Klicken Sie auf die Senden-Schaltfläche **„➤“**.
4. Ihre Nachricht erscheint im Chat.
5. Die Antwort des Kundenservice wird anschließend angezeigt.

Leere Nachrichten werden nicht versendet. Die maximale Länge des Eingabefeldes beträgt 1800 Zeichen.

Der Chat sendet die aktuelle Nachricht sowie einen begrenzten Gesprächsverlauf an einen externen Support-Dienst. Der zuletzt übertragenene Verlauf ist auf die letzten zwölf gespeicherten Chat-Einträge begrenzt.

Nach dem 15. gesendeten Chat-Eintrag erscheint der Hinweis:

> „Hinweis: Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.“

### Chat schließen

1. Klicken Sie oben rechts im Chat-Fenster auf **„×“**.
2. Das Fenster wird geschlossen.
3. Der zuvor geführte Chat-Verlauf bleibt für die laufende Seitensitzung im JavaScript-Speicher erhalten, sofern die Seite nicht neu geladen wird.

Ist der externe Support-Dienst nicht erreichbar, erscheint die Meldung:

> „Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.“

---

# 4. Schritt-für-Schritt-Abläufe

## 4.1 Show anlegen

1. Öffnen Sie TicketShows.
2. Klicken Sie auf die runde Schaltfläche **„＋“**.
3. Beantworten Sie die im Dialog gestellte Frage, beginnend mit **„Wann?“**.
4. Klicken Sie auf **„Weiter“**.
5. Wiederholen Sie die Eingabe, bis die Show vollständig erfasst wurde.
6. Prüfen Sie die neue Show in der Show-Liste.
7. Klicken Sie bei Bedarf auf **„Speichern“**.

Die vollständige Folge der Eingabefragen, Pflichtfelder und möglichen Übersprünge ist im gekürzten Quellcode nicht eindeutig erkennbar.

## 4.2 Ticket mit QR-Code anzeigen

1. Öffnen Sie die betreffende Show durch Klick auf ihren Kopfbereich.
2. Wählen Sie das gewünschte Ticket.
3. Klicken Sie auf dessen QR-Code-Aktion.
4. Vergleichen Sie den angezeigten Code und dessen Inhalt mit dem Ticket.
5. Schließen Sie das Pop-up über **„Schließen“**.

## 4.3 Ticket am Einlass scannen

1. Starten Sie über **„Start“** den Kamera-Scanner.
2. Erlauben Sie den Kamera- oder Gerätezugriff.
3. Richten Sie die Kamera auf den QR-Code.
4. Warten Sie auf die automatische Erkennung.
5. Prüfen Sie das Ergebnis im Browser.
6. Beenden Sie die Kamera nach der Nutzung über **„Stop“**.

## 4.4 Falschen QR-Code scannen

1. Richten Sie die Kamera auf einen nicht unterstützten oder beschädigten Code.
2. Erkennt die Anwendung den Code nicht korrekt, erscheint **„Falscher QR Code“**.
3. Entfernen Sie den Code aus dem Kamerabild.
4. Verbessern Sie Beleuchtung, Abstand oder Ausrichtung.
5. Scannen Sie erneut.

---

# 5. Eingaben und Ausgaben

## 5.1 Eingaben

| Eingabe | Zweck | Bestätigt im Quellcode |
|---|---|---|
| Eingabefeld im Show-Dialog | Erfassung einer Show in mehreren Schritten | Ja |
| Kamera | Erfassung eines QR-Codes | Ja |
| Chat-Eingabefeld | Anfrage an den KI-gestützten Support | Ja |
| Suchfeld | Ticket- oder Show-Suche | Nein |
| Datumsfeld | Direkte Datumsauswahl | Nein; die erste Frage lautet jedoch **„Wann?“** |
| Anmeldefeld | Benutzeranmeldung | Nein |

## 5.2 Ausgaben und Anzeigen

Die Anwendung kann folgende Ausgaben anzeigen:

- Show-Karten mit Titel und weiteren Angaben,
- Ticketkarten mit Metadaten,
- generierte QR-Codes,
- Scannerergebnisse,
- die Fehlermeldung **„Falscher QR Code“**,
- gespeicherte oder exportierte Daten,
- Antworten des Kundenservice-Chats.

Ein Download-, Druck- oder Exportformat ist im gekürzten Auszug nicht eindeutig erkennbar.

---

# 6. Typische Probleme und Fehlerbehebung

## 6.1 Der Scanner startet nicht

### Mögliche Ursachen

- Kamerazugriff wurde abgelehnt,
- die Kamera wird bereits von einer anderen Anwendung verwendet,
- der Browser blockiert den Zugriff,
- die Seite wird nicht in einem unterstützten Kontext geladen,
- jsQR wurde nicht geladen.

### Abhilfe

1. Prüfen Sie die Kameraberechtigung in den Browser-Einstellungen.
2. Setzen Sie die Berechtigung für diese Website auf **„Erlauben“**.
3. Schließen Sie andere Anwendungen, die die Kamera verwenden.
4. Laden Sie die Seite neu.
5. Klicken Sie erneut auf **„Start“**.
6. Prüfen Sie, ob externe Skripte geladen werden können.

## 6.2 Der QR-Code wird nicht erkannt

### Abhilfe
