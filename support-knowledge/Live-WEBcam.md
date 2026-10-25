<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Live-WEBcam -->
<!-- source-files: ["Live-WEBcam/index.html"] -->

# Live-WEBcam

**Vermuteter Zweck:** Live-Übertragung einer Kamera beziehungsweise eines Webcam-Streams über eine temporäre Verbindung zwischen zwei Browsern.

**Quellcode-Pfad:** `Live-WEBcam/index.html`

**Erstellt am:** 10. März 2026

---

## 1. Überblick

Bei „Live-WEBcam“ handelt es sich um eine browserbasierte Webcam-Anwendung von lamacHub beziehungsweise lamacOs. Die Oberfläche bietet zwei Hauptfunktionen:

- **Hosten (Kamera teilen):** Der sendende Browser fordert Zugriff auf Kamera und Mikrofon an, erzeugt einen temporären Code und stellt eine lokale Vorschau bereit.
- **Empfangen (Code eingeben):** Der empfangende Browser gibt einen sechsstelligen Code ein und versucht, die Live-Verbindung herzustellen.

Die Verbindung wird im Quellcode über **WebRTC** aufgebaut. Für die Vermittlung der Verbindungsinformationen wird **Firebase Firestore** verwendet.

> **Hinweis zum Quellcode:** Die bereitgestellte Datei ist gekürzt. Daher werden nur Funktionen beschrieben, die im sichtbaren Auszug eindeutig erkennbar sind. Insbesondere ist der vollständige Verbindungsablauf sowie die Implementierung der vollständigen Fehlerbehandlung nur teilweise einsehbar.

---

## 2. Voraussetzungen

### 2.1 Browser und Gerät

Für die Kamerafunktion wird ein aktueller Browser mit Unterstützung für die MediaDevices-API benötigt. Der Quellcode empfiehlt ausdrücklich, die Seite direkt in Safari oder Chrome und nicht in einem eingebetteten Browser zu öffnen.

Bestätigte Anforderungen:

- Kamera und Mikrofon beziehungsweise ein entsprechendes Erlaubnisdialog des Browsers
- WebRTC-Unterstützung
- Zugriff auf `getUserMedia()`
- JavaScript-Aktivierung
- Internetverbindung für Firebase Firestore und die WebRTC-Verbindung

### 2.2 Sichere Umgebung

Die Anwendung prüft vor der Nutzung, ob die Seite in einem sicheren Kontext geladen wurde.

Kamera und Mikrofon funktionieren laut Quellcode nur:

- über **HTTPS**, oder
- über **localhost**.

Die Meldung hierzu lautet:

> „Diese Seite läuft nicht über HTTPS. Kamera und Mikrofon funktionieren nur über HTTPS oder localhost.“

### 2.3 Firebase

Die Anwendung verwendet Firebase Firestore, um:

- eine Sitzung beziehungsweise einen Live-Aufruf unter dem eingegebenen Code abzulegen,
- WebRTC-Verbindungsinformationen auszutauschen,
- Änderungen dieser Informationen in Echtzeit zu empfangen,
- die zugehörigen Daten wieder zu löschen.

Im Quellcode ist keine Anmeldung, Registrierung oder Eingabe von Benutzerkonto-Daten erkennbar.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Navigationsleiste

Ganz oben befindet sich eine feste Navigationsleiste mit:

- dem **lamacOs-Logo**
- der Bezeichnung **„lamacOs Live“**
- einer Schaltfläche **„🌗“** zum Wechseln zwischen hellem und dunklem Erscheinungsbild

Die Schaltfläche ist mit dem Titel „Theme umschalten“ versehen.

#### Farbschema wechseln

1. Klicken Sie oben rechts auf **„🌗“**.
2. Die Website wechselt zwischen dem hellen und dem dunklen Farbschema.
3. Die Auswahl wird im Browserspeicher unter dem Schlüssel `livecam-theme` gespeichert.
4. Beim nächsten Besuch wird das zuletzt gewählte Schema verwendet.

Fehlt der gespeicherte Wert, startet die Anwendung im dunklen Farbschema.

---

### 3.2 Hauptmenü

Im Hauptbereich stehen die Bezeichnung **„Live Kamera System“** und der Text **„Teile deine Kamera in Echtzeit“**.

Darunter befinden sich zwei Schaltflächen:

- **„📤 Hosten (Kamera teilen)“**
- **„📥 Empfangen (Code eingeben)“**

---

### 3.3 Hosten-Bereich

Nach Auswahl von **„📤 Hosten (Kamera teilen)“** erscheint der Bereich **„📤 Sender aktiv“**.

Er enthält:

- eine lokale Live-Vorschau der Kamera,
- einen sechsstelligen Verbindungscode,
- den Hinweis **„Teile diesen Code mit dem Empfänger“**,
- den Hinweis **„Dieser Code ist 30 Minuten lang gültig.“**,
- eine Statusanzeige,
- die Schaltfläche **„📋 Code kopieren“**,
- die Schaltfläche **„← Zurück zum Menü“**.

---

### 3.4 Empfänger-Bereich

Nach Auswahl von **„📥 Empfangen (Code eingeben)“** erscheint der Bereich **„📥 Empfänger“**.

Er enthält:

- das Eingabefeld **„CODE EINGEBEN“**,
- die Schaltfläche **„Start“**,
- eine Statusanzeige,
- einen zunächst ausgeblendeten Bereich für die Videowiedergabe,
- die Schaltfläche **„← Zurück zum Menü“**.

Das Eingabefeld akzeptiert maximal sechs Zeichen. Die Eingabe wird visuell in Großbuchstaben dargestellt.

---

### 3.5 Support-Chat

Unten rechts befindet sich eine runde grüne Schaltfläche mit einem Sprechblasen-Symbol.

Sie öffnet den Bereich **„lamachub Kundenservice“** mit der Untertitelzeile **„KI-gestützter Support“**.

Der Chat enthält:

- ein Eingabefeld mit dem Platzhalter **„Nachricht schreiben“**,
- eine Sendeschaltfläche mit dem Symbol **„➤“**,
- eine Schließen-Schaltfläche **„×“**,
- eine initially sichtbare Begrüßung: **„Hallo! Wie kann ich Ihnen weiterhelfen?“**

Die maximale Länge einer Chatnachricht beträgt 1.800 Zeichen.

> Die vollständige Implementierung der Chatlogik ist im gekürzten Quellcode nicht vollständig erkennbar. Insbesondere lässt sich aus dem sichtbaren Ausschnitt nicht zuverlässig feststellen, ob Nachrichten an einen externen KI-Dienst gesendet, gespeichert oder in einer automatisierten Antwort verarbeitet werden.

---

### 3.6 Fußbereich

Am Seitenende steht:

> „© 2026 lamacHub — Live Kamera System“

---

## 4. Kamera teilen – Schritt für Schritt

### 4.1 Hosten starten

1. Öffnen Sie die Website in einem aktuellen Browser.
2. Prüfen Sie, ob die Adresse mit `https://` beginnt oder ob die Seite lokal über `localhost` ausgeliefert wird.
3. Klicken Sie auf **„📤 Hosten (Kamera teilen)“**.
4. Der Browser zeigt eine Berechtigungsanfrage für Kamera und Mikrofon an.
5. Erlauben Sie den Zugriff, wenn Sie die Kamera teilen möchten.
6. Nach erfolgreicher Freigabe erscheint Ihre Kamera in der lokalen Vorschau.
7. Die Anwendung erzeugt einen sechsstelligen Code, der im Bereich **„Sender aktiv“** angezeigt wird.

### 4.2 Kamera oder Mikrofon nicht freigeben

Wenn Sie die Berechtigung ablehnen oder widerrufen, kann die Website die Live-Vorschau nicht starten. Im gekürzten Quellcode ist eine entsprechende Fehlermeldung nur teilweise sichtbar.

Gehen Sie wie folgt vor:

1. Öffnen Sie die Browser-Einstellungen für Website-Berechtigungen.
2. Setzen Sie Kamera beziehungsweise Mikrofon auf „Erlauben“.
3. Laden Sie die Seite neu.
4. Starten Sie **„📤 Hosten (Kamera teilen)“** erneut.

### 4.3 Code weitergeben

1. Kopieren Sie den angezeigten Code über **„📋 Code kopieren“** in die Zwischenablage.
2. Senden Sie den Code über einen geeigneten Kommunikationsweg an den Empfänger.
3. Der Empfänger trägt ihn im Eingabefeld **„CODE EINGEBEN“** ein.
4. Der Empfänger klickt auf **„Start“**.

Der Quellcode weist darauf hin, dass der Code 30 Minuten gültig ist. Ob die technische Umsetzung die Gültigkeit serverseitig, clientseitig oder durch das Löschen des Firestore-Dokuments sicherstellt, ist im gekürzten Auszug nicht eindeutig erkennbar.

### 4.4 Hosten beenden

1. Klicken Sie auf **„← Zurück zum Menü“**.
2. Der Empfänger-Bereich und die Sender-Oberfläche werden ausgeblendet.

> Ob dabei der Kamerastream vollständig gestoppt und die zugehörige Firebase-Sitzung zuverlässig gelöscht wird, ist im gekürzten Quellcode nicht eindeutig erkennbar. Starten Sie das Hosten anschließend testweise erneut, um die Kamerafreigabe zu bestätigen.

---

## 5. Live-Bild empfangen – Schritt für Schritt

1. Öffnen Sie die Website in einem aktuellen Browser.
2. Klicken Sie auf **„📥 Empfangen (Code eingeben)“**.
3. Geben Sie den sechsstelligen Code in das Feld **„CODE EINGEBEN“** ein.
4. Klicken Sie auf **„Start“**.
5. Die Statusanzeige meldet den Verbindungsaufbau.
6. Nach erfolgreicher Verbindung wird der Videobereich mit der Bild- und Tonwiedergabe eingeblendet.
7. Klicken Sie auf **„← Zurück zum Menü“**, um den Empfänger-Bereich zu verlassen.

Die Soundwiedergabe des Empfängers ist im Quellcode nicht ausdrücklich vorgegeben. Im Browser kann die automatische Tonwiedergabe durch die Autoplay-Richtlinien blockiert werden.

---

## 6. Bedienung des Support-Chats

1. Klicken Sie rechts unten auf das Sprechblasen-Symbol.
2. Der Bereich **„lamachub Kundenservice“** öffnet sich.
3. Schreiben Sie Ihre Nachricht in das Feld **„Nachricht schreiben“**.
4. Klicken Sie auf **„➤“**, um die Nachricht abzusenden.
5. Scrollen Sie bei längeren Verläufen im Nachrichtenbereich.
6. Klicken Sie oben rechts auf **„×“**, um den Chat zu schließen.

Ob der Support-Chat offline, lokal, über Firebase oder über einen externen KI-Dienst arbeitet, ist im gekürzten Quellcode nicht eindeutig erkennbar.

---

## 7. Statusanzeigen verstehen

Die Anwendung besitzt eine zentrale Statusanzeige mit verschiedenen Zuständen:

- **connecting:** Verbindung oder Kamera wird aufgebaut
- **connected:** Verbindung erfolgreich hergestellt
- **error:** Fehler aufgetreten

Für den Sender wird zu Beginn der Text

> „🔄 Kamera wird gestartet...“

angezeigt.

Der sichtbare Quellcode enthält außerdem eine Funktion zur Erklärung von Medienfehlern. Im gekürzten Ausschnitt ist insbesondere die Behandlung von `NotAllowedError` erkennbar. Sie weist darauf hin, die Website-Berechtigungen für Kamera und Mikrofon zu prüfen.

---

## 8. Typische Probleme und Fehlerbehebung

### 8.1 Die Website meldet, dass sie nicht über HTTPS läuft

**Ursache:** Der Browser blockiert den Zugriff auf Kamera und Mikrofon in einem unsicheren Kontext.

**Behebung:**

1. Öffnen Sie die Website über eine HTTPS-Adresse.
2. Verwenden Sie alternativ eine lokale `localhost`-Adresse.
3. Starten Sie den Zugriff auf **„📤 Hosten (Kamera teilen)“** danach erneut.

---

### 8.2 Die Meldung „Dein Browser stellt keine MediaDevices-API bereit“ erscheint

**Ursache:** Der verwendete Browser oder die eingebettete Browseransicht stellt die MediaDevices-API nicht bereit.

**Behebung:**

1. Öffnen Sie die Seite direkt in Safari oder Chrome.
2. Verwenden Sie keinen eingebetteten Browser, beispielsweise nicht in einer App-Ansicht.
3. Aktualisieren Sie den Browser.
4. Laden Sie die Seite neu und versuchen Sie es erneut.

---

### 8.3 Die Meldung „Dein Browser unterstützt getUserMedia() nicht“ erscheint

**Ursache:** Die benötigte Browserfunktion steht nicht zur Verfügung.

**Behebung:**

1. Verwenden Sie eine aktuelle Version von Safari oder Chrome.
2. Deaktivieren Sie gegebenenfalls strenge Browser-Erweiterungen oder Browserrichtlinien, die Webcamzugriff einschränken.
3. Laden Sie die Website neu.

Ob die Anwendung selbst eine Erweiterung, private Browsermodi oder Unternehmensrichtlinien unterstützt, ist nicht eindeutig erkennbar.

---

### 8.4 Kamera oder Mikrofon bleiben schwarz oder die Freigabe wird verweigert

**Ursache:** Die Berechtigung wurde abgelehnt, gesperrt oder der Browser kann kein Gerät nutzen.

**Behebung:**

1. Öffnen Sie die Browser-Einstellungen für Website-Berechtigungen.
2. Erlauben Sie Kamera und Mikrofon für diese Website.
3. Prüfen Sie, ob Kamera und Mikrofon unter Windows, macOS oder Linux ordnungsgemäß angeschlossen und nicht durch eine andere Anwendung belegt sind.
4. Laden Sie die Seite vollständig neu.
5. Starten Sie das Hosten erneut.

---

### 8.5 Der Empfänger sieht kein Bild

Mögliche Ursachen und Prüfungen:

1. **Falscher oder abgelaufener Code:** Lassen Sie den Sender den Code neu erzeugen und geben Sie ihn erneut ein.
2. **Noch laufender Verbindungsaufbau:** Warten Sie, bis die Statusanzeige den verbundenen Zustand meldet.
3. **Blockierte Medienwiedergabe:** Aktivieren Sie gegebenenfalls die automatische Tonwiedergabe für die Website.
4. **Browserzustand:** Laden Sie die Empfängerseite neu und starten Sie **„Start“** erneut.
5. **Verbindung durch Netzwerk oder Firewall blockiert:** Prüfen Sie die Netzwerkverbindung und zugelassenen Browserfunktionen.

Ob die Anwendung TURN-Server, Firewall-Hinweise oder eine konkrete Retry-Schaltfläche bereitstellt, ist im gekürzten Quellcode nicht eindeutig erkennbar.

### 8.6 Der Code funktioniert nicht

1. Prüfen Sie, ob genau sechs Zeichen eingegeben wurden.
2. Kontrollieren Sie, ob versehentlich ähnliche Zeichen wie `0/O` oder `1/I` verwendet wurden.
3. Kopieren Sie den Code möglichst über **„📋 Code kopieren“** statt durch manuelle Eingabe.
4. Lassen Sie den Sender den Code bei Bedarf neu erzeugen.
5. Prüfen Sie, ob der angegebene Zeitraum von 30 Minuten noch nicht abgelaufen ist.

---

## 9. Datenschutz und Berechtigungen

### 9.1 Kamera und Mikrofon

Die Kamera- beziehungsweise Mikrofonbere
