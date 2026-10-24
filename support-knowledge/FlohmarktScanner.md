
# FlohmarktScanner

**Zweck:** Eine browserbasierte Anwendung zum Erfassen von Gegenständen und zur Unterstützung bei der Einschätzung von Flohmarktpreisen.

**Website:** https://lamachub.de/FlohmarktScanner/  
**Quellcode:** `FlohmarktScanner/index.html`

## Funktionen

- **Neues Objekt hinzufügen:** Startet die manuelle Erfassung eines Gegenstands.
- **Objekt scannen:** Öffnet den Scan- und Kameraablauf.
- **Foto:** Nimmt ein Bild mit der aktiven Kamera auf.
- **Kamera wechseln:** Wechselt zwischen verfügbaren Kameras.
- **Preisfeld:** Ermöglicht die Eingabe eines Preises.
- **Speichern, Abbrechen und Zurück:** Steuern den Erfassungsablauf.
- **Support-Chat:** Die Seite enthält einen integrierten KI-Chat.
- **Darstellungsmodus:** Ein Umschalter verändert die Darstellung der Website.

## Bedienung

### Gegenstand manuell hinzufügen

1. Öffne den FlohmarktScanner.
2. Wähle **„Neues Objekt hinzufügen“**.
3. Trage die angezeigten Informationen ein.
4. Ergänze den Preis, sofern das Eingabefeld angezeigt wird.
5. Wähle **„Speichern“**, um den Vorgang abzuschließen.

### Gegenstand scannen

1. Wähle **„Objekt scannen“**.
2. Erlaube den Kamerazugriff, wenn der Browser danach fragt.
3. Richte die Kamera auf den Gegenstand.
4. Nimm über **„Foto“** ein Bild auf.
5. Prüfe die angezeigten Informationen und schließe den Vorgang ab.

## Häufige Probleme

### Die Kamera startet nicht

- Prüfe die Kameraberechtigung in den Website-Einstellungen des Browsers.
- Stelle sicher, dass die Website über HTTPS geöffnet ist.
- Schließe andere Apps, die möglicherweise die Kamera verwenden.
- Prüfe die Kamera-Berechtigungen in den Betriebssystemeinstellungen.

### Es wird keine Kamera angezeigt

- Manche Geräte besitzen nur eine verfügbare Kamera.
- Prüfe, ob der Browser den Zugriff auf die Kamera erlaubt.
- Lade die Website neu und starte den Kameraablauf erneut.

### Der Scan liefert kein passendes Ergebnis

- Sorge für ausreichend Licht.
- Fotografiere möglichst nur einen Gegenstand gleichzeitig.
- Achte darauf, dass der Gegenstand gut erkennbar ist.
- Vergleiche eine vorgeschlagene Preiseinschätzung selbst mit ähnlichen Artikeln. Automatische Einschätzungen sind keine garantierten Marktpreise.

### Das Speichern funktioniert nicht

- Prüfe, ob alle erforderlichen Felder ausgefüllt sind.
- Versuche den Vorgang erneut.
- Falls weiterhin ein Fehler auftritt, notiere den betroffenen Schritt und die angezeigte Fehlermeldung.

### Der Support-Chat antwortet nicht

- Prüfe deine Internetverbindung.
- Versuche es nach kurzer Zeit erneut.
- Der Chat verwendet einen externen Dienst, der vorübergehend ausfallen kann.

## Technische Hinweise

- Die Anwendung ist mit HTML und JavaScript umgesetzt.
- Die Kamera benötigt eine Browserberechtigung.
- Im Quellcode sind Funktionen zur Kameraaufnahme, zum Kamerawechsel und zur Verarbeitung von Bildern vorhanden.
- Der Support-Chat verwendet `https://lamacai.oslamu.workers.dev/chat`.
- **Nicht eindeutig erkennbar:** Ob alle erfassten Gegenstände dauerhaft serverseitig gespeichert werden. Eine dauerhafte Speicherung sollte daher nicht zugesichert werden.

## Datenschutz

Erteile Kamera-Berechtigungen nur, wenn du sie verwenden möchtest. Achte darauf, keine unbeteiligten Personen oder vertraulichen Inhalte aufzunehmen. Teile private Fotos nur, wenn es notwendig und angemessen ist.
