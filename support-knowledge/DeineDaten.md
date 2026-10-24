<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: DeineDaten -->
<!-- source-files: ["DeineDaten/index.html"] -->

# DeineDaten

**Vermuteter Zweck:** Die Website „DeineDaten“ zeigt, welche technischen Informationen eine Website vom verwendeten Gerät und Browser automatisch abfragen kann. Berechtigungsabhängige Funktionen wie Kamera, Mikrofon oder Standort können Besucher testen. Die Seite weist außerdem darauf hin, dass die angezeigten Daten nicht gespeichert werden.

**Quellcode-Pfad:** `DeineDaten/index.html`  
**Datum der Erstellung:** 26. März 2026

> Diese Dokumentation basiert auf dem bereitgestellten, unvollständigen Quellcode-Auszug. Funktionen, deren vollständiger Code nicht sichtbar ist, werden als **„Im Quellcode nicht eindeutig erkennbar“** gekennzeichnet.

---

## 1. Überblick

„DeineDaten“ ist eine einzelne, statisch wirkende Informationsseite. Sie besteht aus:

- einer Navigationsleiste mit Logo, dem Namen „DeineDaten“ und der Schaltfläche **„Dark Mode“**,
- einem Einführungsbereich mit Status und letzter Aktualisierung,
- der Liste **„Automatisch verfügbare Daten“**,
- der Liste **„Daten mit Erlaubnis“**,
- einem Hinweisfeld zu Browserunterschieden,
- einer Fußzeile mit Countdown und Copyright,
- einem KI-gestützten Kundensupport-Chat.

Die Seite ist responsiv gestaltet. Auf breiten Bildschirmen werden die beiden Hauptbereiche nebeneinander dargestellt, auf schmalen Bildschirmen untereinander.

---

## 2. Voraussetzungen

### Für die normale Nutzung

- Ein aktueller Browser
- JavaScript-Ausführung
- Internetzugang für optionale externe Ressourcen, darunter Schriftarten, das Logo und den KI-Support
- Für die angezeigten automatischen Daten muss die Seite zunächst vom Browser Zugriff auf entsprechende Browser-APIs erhalten. Welche APIs dafür verwendet werden, ist im gekürzten Quellcode nicht vollständig sichtbar.

### Für Berechtigungsfunktionen

Für die sichtbaren Testschaltflächen können zusätzlich Berechtigungen des Browsers erforderlich sein:

| Funktion | Sichtbare Bezeichnung | Mögliche Browser-Berechtigung |
|---|---|---|
| GPS-Position (Geolocation) | „Anfordern“ | Standort |
| Bewegungs-/Neigungssensoren | „Anfordern“ | Sensorzugriff |
| Kamera-Zugriff | „Anfordern“ | Kamera |
| Mikrofon-Zugriff | „Anfordern“ | Mikrofon |
| Kamera + Mikrofon | „Anfordern“ | Kamera und Mikrofon |
| Push-Benachrichtigungen | „Anfordern“ | Benachrichtigungen |
| Kontakte | „Anfordern“ | Kontakte |
| Zwischenablage lesen | „Anfordern“ | Zwischenablage |
| Dateien auswählen | „Anfordern“ | Dateiauswahl |

Die konkreten Browser-Mitteilungen und die Frage, ob eine Berechtigung dauerhaft gespeichert wird, sind im sichtbaren Quellcode nicht eindeutig erkennbar.

---

## 3. Sichtbare Bereiche

## 3.1 Navigationsleiste

Oben befindet sich eine Navigationsleiste mit:

- einem Logo,
- der Bezeichnung **„DeineDaten“**,
- der Schaltfläche **„Dark Mode“**.

### Dark Mode verwenden

1. Klicken Sie oben rechts auf **„Dark Mode“**.
2. Die Seite wechselt in das dunkle Farbschema.
3. Die Auswahl wird im Quellcode voraussichtlich über das Attribut `data-theme="dark"` gesteuert.

Ob die Theme-Auswahl dauerhaft gespeichert wird, ist im bereitgestellten Auszug **nicht eindeutig erkennbar**. Daher sollte davon ausgegangen werden, dass die Einstellung beim Neuladen zurückgesetzt sein kann.

---

## 3.2 Einführungsbereich

Die Hauptüberschrift lautet:

> **Welche Daten kann diese Website vom Gerät bekommen?**

Darunter wird erklärt, dass sich die Liste automatisch alle 10 Sekunden aktualisiert und Berechtigungsfunktionen direkt getestet werden können.

Zusätzlich werden zwei Statuswerte angezeigt:

- **Status:** Der Wert steht zunächst auf `...` und wird später durch JavaScript aktualisiert.
- **Letzte Aktualisierung:** Der Wert steht zunächst ebenfalls auf `...`.

Die genaue technische Definition des angezeigten „Status“ ist im gekürzten Quellcode nicht eindeutig erkennbar.

---

## 3.3 „Automatisch verfügbare Daten“

Dieser Bereich wird mit JavaScript in das Element `#autoList` eingefügt. Für jeden Eintrag werden mindestens folgende Elemente vorgesehen:

- Bezeichnung der Datenart
- zugehöriger Wert

Die konkreten Datenarten, der Abrufmechanismus und die vollständige Formatierung der Werte sind im bereitgestellten, gekürzten Quellcode nicht eindeutig erkennbar.

### Anzeige aktualisieren

1. Öffnen Sie die Seite in einem Browser mit aktiviertem JavaScript.
2. Warten Sie auf die erste automatische Aktualisierung.
3. Beobachten Sie den Bereich **„Automatisch verfügbare Daten“**.
4. Die Werte werden nach Angaben der Seite alle 10 Sekunden erneut aktualisiert.

> Ob die Aktualisierung auch dann erfolgt, wenn die Seite im Hintergrund liegt oder der Browser energiesparende Hintergrund-Tabs verwendet, ist im Quellcode nicht eindeutig erkennbar.

---

## 3.4 „Daten mit Erlaubnis“

Dieser Bereich enthält neun sichtbare Funktionen. Jede Funktion besitzt:

- einen Namen,
- eine Kategorie,
- eine orange Schaltfläche **„Anfordern“**,
- ein Ergebnisfeld, das zunächst einen Gedankenstrich (`—`) anzeigt.

### 3.4.1 GPS-Position (Geolocation)

**Kategorie:** Standort & Sensoren

1. Klicken Sie bei **„GPS-Position (Geolocation)“** auf **„Anfordern“**.
2. Beantworten Sie die Berechtigungsanfrage des Browsers nach den angezeigten Optionen.
3. Lesen Sie das Ergebnis im Feld unterhalb der Schaltfläche ab.

Je nach Browser kann die Berechtigung einmalig oder dauerhaft erteilt werden. Welche Optionen konkret erscheinen, ist im Quellcode nicht eindeutig erkennbar.

---

### 3.4.2 Bewegungs-/Neigungssensoren

**Kategorie:** Standort & Sensoren

1. Klicken Sie bei **„Bewegungs-/Neigungssensoren“** auf **„Anfordern“**.
2. Erlauben Sie den Sensorzugriff, falls der Browser dazu auffordert.
3. Lesen Sie das angezeigte Ergebnis ab.

Ob eine entsprechende Sensorfunktion auf dem verwendeten Gerät überhaupt vorhanden ist, ist im Quellcode nicht eindeutig erkennbar.

---

### 3.4.3 Kamera-Zugriff

**Kategorie:** Medien

1. Klicken Sie bei **„Kamera-Zugriff“** auf **„Anfordern“**.
2. Erlauben Sie den Kamerazugriff, falls eine Browser-Mitteilung erscheint.
3. Lesen Sie das Ergebnisfeld ab.

Die Ausgabe kann je nach Browser verschiedene technische Informationen enthalten. Das genaue Ausgabeformat ist im gekürzten Quellcode nicht eindeutig erkennbar.

---

### 3.4.4 Mikrofon-Zugriff

**Kategorie:** Medien

1. Klicken Sie bei **„Mikrofon-Zugriff“** auf **„Anfordern“**.
2. Erlauben Sie den Mikrofonzugriff, wenn der Browser danach fragt.
3. Prüfen Sie das Ergebnisfeld.

---

### 3.4.5 Kamera + Mikrofon

**Kategorie:** Medien

1. Klicken Sie bei **„Kamera + Mikrofon“** auf **„Anfordern“**.
2. Erlauben Sie die angeforderten Medienzugriffe.
3. Prüfen Sie das gemeinsame Ergebnisfeld.

Ob die Berechtigungen gemeinsam oder getrennt angefragt werden, ist im sichtbaren Quellcode nicht eindeutig erkennbar.

---

### 3.4.6 Push-Benachrichtigungen

**Kategorie:** Kommunikation

1. Klicken Sie bei **„Push-Benachrichtigungen“** auf **„Anfordern“**.
2. Bestätigen oder verweigern Sie die Benachrichtigungsanfrage des Browsers.
3. Lesen Sie das Ergebnis ab.

Ob die Website nach erfolgreicher Freigabe tatsächlich Push-Nachrichten versendet, ist im Quellcode nicht eindeutig erkennbar.

---

### 3.4.7 Kontakte

**Kategorie:** System / Experimente

1. Klicken Sie bei **„Kontakte“** auf **„Anfordern“**.
2. Reagieren Sie auf eine mögliche Kontaktberechtigungsanfrage des Browsers.
3. Prüfen Sie die Anzeige.

Ob die Kontaktliste tatsächlich ausgelesen oder nur die Berechtigung geprüft wird, ist im gekürzten Quellcode nicht eindeutig erkennbar. Lesen oder Anzeigen von Kontaktdaten sollte daher nicht vorausgesetzt werden.

---

### 3.4.8 Zwischenablage lesen

**Kategorie:** System / Experimente

1. Klicken Sie bei **„Zwischenablage lesen“** auf **„Anfordern“**.
2. Erlauben Sie den Lesezugriff, falls der Browser eine Berechtigungsanfrage zeigt.
3. Prüfen Sie das Ergebnisfeld.

Je nach Browser kann der Zugriff auch durch Benutzeraktion, einen secure Kontext oder zusätzliche Einschränkungen beeinflusst werden. Diese Details sind im Quellcode nicht eindeutig erkennbar.

---

### 3.4.9 Dateien auswählen

**Kategorie:** System / Experimente

1. Klicken Sie bei **„Dateien auswählen“** auf **„Anfordern“**.
2. Wählen Sie im angezeigten Dateidialog eine Datei aus oder brechen Sie den Vorgang ab.
3. Prüfen Sie das Ergebnisfeld.

Ob der vollständige Dateiname oder weitere Metadaten ausgegeben werden, ist im gekürzten Quellcode nicht eindeutig erkennbar.

---

## 3.5 Hinweisfeld

Im Bereich **„Hinweis“** steht, dass manche Browser nicht alle Funktionen unterstützen. Besonders iOS, Android, Chrome, Firefox und Safari können sich bei Berechtigungen und verfügbaren APIs unterscheiden.

Für die Praxis bedeutet das:

- Eine Schaltfläche kann trotz korrekter Bedienung nicht funktionieren.
- Eine Funktion kann ohne sichtbare Fehlermeldung nicht verfügbar sein.
- Das Ergebnis kann je nach Browser und Gerät unterschiedlich ausfallen.

---

## 3.6 Fußzeile

Die Fußzeile enthält zwei Angaben:

- **„Nächste Aktualisierung in … s“**
- **„© 2026 lamacHub“**

Der Countdown startet sichtbar mit `10` und soll bis zur nächsten Aktualisierung herunterzählen. Das sekundengenaue Verhalten ist im gekürzten JavaScript nicht vollständig sichtbar.

---

## 4. KI-gestützter Kundensupport

## 4.1 Chat öffnen

1. Klicken Sie unten rechts auf das grüne Sprechblasen-Symbol **„💬“**.
2. Der Chat mit der Bezeichnung **„lamachub Kundenservice“** und dem Untertitel **„KI-gestützter Support“** öffnet sich.
3. Das Eingabefeld **„Nachricht schreiben“** erhält automatisch den Fokus.

## 4.2 Nachricht senden

1. Geben Sie Ihre Frage in das Feld **„Nachricht schreiben“** ein.
2. Klicken Sie auf die Senden-Schaltfläche **„➤“** oder drücken Sie die Eingabetaste.
3. Ihre Nachricht erscheint im Chat.
4. Der Kundenservice verarbeitet die Anfrage und fügt die Antwort als Bot-Nachricht ein.

Das Eingabefeld erlaubt maximal 1.800 Zeichen. Leere Nachrichten werden nicht gesendet.

## 4.3 Chatverlauf

Die Website führt intern einen begrenzten Chatverlauf. Nach erfolgreicher Antwort werden die letzte Benutzer- und die letzte Assistentennachricht gespeichert; der Verlauf wird anschließend auf die letzten zwölf Einträge gekürzt.

Ab der 15. gesendeten Nachricht erscheint zusätzlich der Hinweis:

> Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.

## 4.4 Chat schließen

- Klicken Sie oben rechts im geöffneten Chat auf **„×“**.
- Der Supportbereich wird geschlossen.
- Über die grüne Sprechblase **„💬“** können Sie ihn erneut öffnen.

## 4.5 Verfügbarkeit des Supports

Der Chat sendet Anfragen an einen externen KI-Dienst. Bei einem Netzwerk- oder Serverfehler erscheint:

> Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.

Die Bereitstellung, Qualität und Datenschutzbehandlung des externen KI-Dienstes sind im bereitgestellten Quellcode nicht vollständig dokumentiert. Es sollte daher nicht angenommen werden, dass der Support ohne Einschränkungen erreichbar oder in jeder Situation antwortet.

---

## 5. Datenschutz- und Berechtigungshinweise

## 5.1 Angabe der Seite

Die Seitenbeschreibung enthält die Aussage:

> Daten werden nicht gespeichert.

Diese Angabe bezieht sich offenbar auf die in der Seite angezeigten Daten. Ob damit auch die Verarbeitung durch den externen KI-Support, Server-Logs oder externe Ressourcen vollständig ausgeschlossen sind, ist im Quellcode **nicht eindeutig erkennbar**.

## 5.2 Lokale Verarbeitung

Für die sichtbaren Berechtigungsfunktionen wird keine Übertragung an einen eigenen Auswertungsserver im bereitgestellten Code gezeigt. Ob die Browserdaten ausschließlich lokal verarbeitet werden, ist daher für die gezeigten Berechtigungsfunktionen wahrscheinlich; der vollständige JavaScript-Code müsste dazu abschließend geprüft werden.

## 5.3 Externer KI-Support

Für den Kundensupport werden Nachricht und Chatverlauf per HTTP-POST an einen externen Worker-Endpunkt gesendet. Dadurch können personenbezogene Inhalte Ihrer Nachricht an diesen externen Dienst übertragen werden.

**Empfehlung:** Senden Sie im Support-Chat keine unnötigen personenbezogenen Daten, geheimen Zugangsdaten, Passwörter oder sonstigen sensiblen Inhalte.

## 5.4 Externe Ressourcen

Die Seite lädt unter anderem:

- ein Logo von einem externen GitHub-Host,
- Schriftarten von Google Fonts,
- ein Vorschaubild für soziale Medien,
- bei Bedarf externe Support-Infrastruktur.

Ob und wie lange diese Anbieter Verbindungsdaten oder IP-Adressen verarbeiten, ist im Quellcode nicht eindeutig erkennbar.

## 5.5 Browsergenehmigungen

Berechtigungen werden
