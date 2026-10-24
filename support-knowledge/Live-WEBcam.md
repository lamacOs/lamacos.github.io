
# Live-WEBcam

**Zweck:** Eine browserbasierte Anwendung, mit der eine Kamera- und gegebenenfalls Audioverbindung zwischen zwei Geräten aufgebaut werden kann.

**Website:** https://lamachub.de/Live-WEBcam/  
**Quellcode:** `Live-WEBcam/index.html`

## Funktionen

- **Hosten (Kamera teilen):** Startet den Senderablauf.
- **Code kopieren:** Kopiert den erzeugten Verbindungscode.
- **Empfangen (Code eingeben):** Öffnet den Empfängerablauf.
- **Start:** Beginnt den Verbindungsaufbau.
- **Statusmeldungen:** Zeigen den aktuellen Verbindungsstatus.
- **Remote-Video:** Zeigt den empfangenen Videostream an, sobald eine Verbindung besteht.
- **Darstellungsmodus:** Ermöglicht den Wechsel des Farbschemas.
- **Support-Chat:** Stellt einen integrierten Chat bereit.

## Bedienung

### Kamera teilen – Sender

1. Öffne Live-WEBcam auf dem Gerät, dessen Kamera du teilen möchtest.
2. Wähle **„Hosten (Kamera teilen)“**.
3. Erlaube den Zugriff auf die Kamera und gegebenenfalls das Mikrofon.
4. Warte, bis ein Verbindungscode angezeigt wird.
5. Kopiere den Code und übermittle ihn nur an die gewünschte empfangende Person.

### Kamera empfangen – Empfänger

1. Öffne Live-WEBcam auf dem zweiten Gerät.
2. Wähle **„Empfangen (Code eingeben)“**.
3. Gib den Verbindungscode des Senders ein.
4. Wähle **„Start“**.
5. Warte, bis die Verbindung aufgebaut wurde und das Video angezeigt wird.

## Häufige Probleme

### Kamera oder Mikrofon funktionieren nicht

- Prüfe die Website-Berechtigungen im Browser.
- Prüfe die Berechtigungen in den Betriebssystemeinstellungen.
- Schließe andere Anwendungen, die Kamera oder Mikrofon verwenden.
- Öffne die Website über HTTPS.

### Die Verbindung wird nicht aufgebaut

- Stelle sicher, dass beide Geräte eine Internetverbindung haben.
- Prüfe, ob der Verbindungscode korrekt eingegeben wurde.
- Verwende einen aktuellen Code aus einer aktiven Sitzung.
- Starte den Verbindungsaufbau bei Bedarf auf beiden Geräten erneut.

Schul-, Unternehmens- oder öffentliche WLANs können bestimmte WebRTC-Verbindungen blockieren.

### Das Video bleibt schwarz

- Prüfe, ob der Sender die Kameraberechtigung erteilt hat.
- Kontrolliere, ob die richtige Kamera verwendet wird.
- Schließe andere Tabs oder Apps, die die Kamera verwenden.
- Lade die Seite neu und baue eine neue Verbindung auf.

### Der Code lässt sich nicht kopieren

- Prüfe, ob der Browser den Zwischenablagezugriff erlaubt.
- Markiere den Code und kopiere ihn manuell, falls die Schaltfläche nicht funktioniert.

## Technische Hinweise

- Die Seite verwendet WebRTC über `RTCPeerConnection`.
- Firebase App und Firestore sind eingebunden, um Verbindungsinformationen und ICE-Kandidaten auszutauschen.
- Im Quellcode wird die Firebase-SDK-Version 10.7.1 verwendet.
- Der Support-Chat verwendet `https://lamacai.oslamu.workers.dev/chat`.

## Datenschutz

Kamera- und Mikrofonzugriff setzen eine entsprechende Browserfreigabe voraus. Teile den Verbindungscode nur mit Personen, denen du den Zugriff erlauben möchtest. Achte darauf, dass keine vertraulichen Inhalte oder unbeteiligten Personen unbeabsichtigt übertragen werden.
