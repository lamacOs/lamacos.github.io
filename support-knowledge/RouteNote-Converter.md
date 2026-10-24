<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: RouteNote-Converter -->
<!-- source-files: ["RouteNote-Converter/index.html"] -->

# RouteNote-Converter

**Vermuteter Zweck:** Browserbasierte Konvertierung von Bildern zu quadratischen JPG-Coverbildern sowie von Audiodateien in MP3-Dateien.  
**Quellcode-Pfad:** `RouteNote-Converter/index.html`  
**Datum der Erstellung:** 24. Juni 2026

> Diese Dokumentation beschreibt ausschließlich die im bereitgestellten Quellcode erkennbaren Funktionen. Da nur ein Auszug vorliegt, können einzelne Abläufe oder technische Details in einer vollständigen Anwendung abweichen.

## Inhaltsverzeichnis

1. [Überblick](#überblick)
2. [Voraussetzungen](#voraussetzungen)
3. [Sichtbare Bereiche](#sichtbare-bereiche)
4. [Cover konvertieren](#cover-konvertieren)
5. [Audio in MP3 konvertieren](#audio-in-mp3-konvertieren)
6. [Kundensupport-Chat](#kundensupport-chat)
7. [Zurück-Schaltfläche auf lamachub.de](#zurück-schaltfläche-auf-lamachubde)
8. [Dateiformate und technische Angaben](#dateiformate-und-technische-angaben)
9. [Datenschutz und Berechtigungen](#datenschutz-und-berechtigungen)
10. [Typische Probleme und Fehlerbehebung](#typische-probleme-und-fehlerbehebung)
11. [FAQ](#faq)

---

## Überblick

RouteNote-Converter ist eine einzelne, clientseitig aufgebaute Weboberfläche. Besucherinnen und Besucher können zwischen zwei Aufgaben wählen:

- **Bild:** Ein hochgeladenes Bild wird mittig auf eine quadratische Fläche zugeschnitten und in ein 3000 × 3000 Pixel großes JPG umgewandelt.
- **Audio:** Eine unterstützte Audiodatei wird mit 44.100 Hz, Stereo und 320 kbps in eine MP3-Datei umgewandelt.

Die Ergebnisse werden über die Schaltflächen **„Download JPG“** beziehungsweise **„Download MP3“** lokal im Browser heruntergeladen.

**Bestätigt im Quellcode:** Die Bild- und Audiokonvertierung finden im Browser statt. Für die Audioausgabe wird die externe Bibliothek `lamejs` von einem CDN geladen.

**Im Quellcode nicht eindeutig erkennbar:** Ob die Website vollständig ohne Internetverbindung funktioniert, ist nicht garantiert, da Schriftarten und `lamejs` über externe URLs geladen werden.

---

## Voraussetzungen

Für die Nutzung werden ein moderner Browser und eine Datei auf dem lokalen Gerät benötigt.

### Für Bilddateien

- Eine lokale Bilddatei.
- Die Dateiauswahl akzeptiert laut HTML alle gängigen Browser-Bildtypen (`image/*`), beispielsweise JPG, PNG oder WebP.
- Das Browser-Dateidialog kann zusätzlich nur Dateitypen anzeigen, die das Betriebssystem unterstützt.

### Für Audiodateien

Eine lokale Audiodatei in einem der folgenden vom Dateidialog genannten Formate:

- `.wav`
- `.mp3`
- `.m4a`
- `.aac`
- `.flac`

**Hinweis:** Die Einschränkung auf `accept` beeinflusst hauptsächlich die Anzeige im Dateidialog. Ob eine tatsächlich in einem anderen Format gespeicherte Datei verarbeitet werden kann, hängt zusätzlich von der Dekodierfähigkeit des Browsers ab.

### Weitere technische Voraussetzungen

- JavaScript muss aktiviert sein.
- Für die MP3-Konvertierung muss die externe Bibliothek `lamejs` erfolgreich geladen werden.
- Die AudioContext-API des Browsers muss verfügbar sein.
- Beim Laden der externen Schrift und der Audiobibliothek ist eine Internetverbindung erforderlich oder ein vorhandener Browser-Cache muss genutzt werden.

---

## Sichtbare Bereiche

### Kopfzeile

Die Kopfzeile enthält:

- ein Logo,
- den Namen **„RouteNote Converter“**,
- den Copyright-Hinweis **„© 2026 lamacHub“**.

Das Logo wird von einer externen GitHub-URL geladen. Sollte dieses Bild nicht verfügbar sein, bleibt mindestens der Text **„RouteNote Converter“** sichtbar.

### Startbereich

Die Startseite enthält die Frage:

> **„Was möchtest du konvertieren?“**

Darunter stehen zwei Schaltflächen:

- **„Bild“** öffnet den Cover Converter.
- **„Audio“** öffnet den MP3 Converter.

### Cover Converter

Dieser Bereich enthält:

- die Schaltfläche **„⬅ Zurück“**,
- die Überschrift **„Cover Converter“**,
- eine Dateiauswahl für Bilder,
- die Schaltfläche **„Convert“**,
- die Schaltfläche **„Download JPG“**,
- eine große Canvas-Fläche zur Vorschau des Ergebnisses.

**„Convert“** und **„Download JPG“** sind zunächst deaktiviert.

### MP3 Converter

Dieser Bereich enthält:

- die Schaltfläche **„⬅ Zurück“**,
- die Überschrift **„MP3 Converter“**,
- den Hinweis **„MP3 • 44.1 kHz • Stereo • 320 kbps“**,
- eine Dateiauswahl für Audiodateien,
- die Schaltfläche **„Convert“**,
- die Schaltfläche **„Download MP3“**.

**„Convert“** und **„Download MP3“** sind zunächst deaktiviert.

### Kundensupport

Rechts unten befindet sich eine runde Chat-Schaltfläche mit dem Symbol **„💬“**. Sie öffnet ein separates Support-Fenster mit:

- **„lamachub Kundenservice“**,
- **„KI-gestützter Support“**,
- einem anfänglichen Gruß,
- einem Nachrichteneingabefeld mit dem Platzhalter **„Nachricht schreiben“**,
- einer Senden-Schaltfläche **„➤“**,
- einer Schließen-Schaltfläche **„×“**.

### Zurück zu lamachub.de

Unter bestimmten Aufrufbedingungen wird links oben eine zusätzliche Schaltfläche **„Zurück“** angezeigt. Sie führt zur Website `https://www.lamachub.de/`.

Diese Funktion wird nur geladen, wenn die Seite über einen exakt passenden Referrer aufgerufen wurde. Für normale Direktaufrufe oder bei Aufrufen über andere Domains erscheint diese Schaltfläche nicht.

---

## Cover konvertieren

## Bedienung

1. Öffnen Sie RouteNote-Converter.
2. Klicken Sie auf **„Bild“**.
3. Wählen Sie im Dateidialog eine lokale Bilddatei aus.
4. Warten Sie, bis die Schaltfläche **„Convert“** aktiviert wird.
5. Klicken Sie auf **„Convert“**.
6. Prüfen Sie das quadratische Ergebnis in der Canvas-Vorschau.
7. Klicken Sie auf **„Download JPG“**.
8. Der Browser speichert das Ergebnis unter dem Dateinamen `cover.jpg`.

## Verarbeitung des Bildes

Der Browser liest die ausgewählte Datei als Data-URL ein und zeichnet sie auf eine Canvas mit folgenden Eigenschaften:

- Breite: 3000 Pixel,
- Höhe: 3000 Pixel,
- Format: JPG,
- Qualitätsparameter: 0,95.

Das Bild wird mittig beschnitten:

1. Die kürzere Bildkante bestimmt die Größe des quadratischen Ausschnitts.
2. Links und rechts beziehungsweise oben und unten wird der Bildinhalt mittig ausgerichtet.
3. Der Ausschnitt wird auf 3000 × 3000 Pixel vergrößert oder verkleinert.
4. Das Ergebnis wird auf der Canvas angezeigt.

### Beispiel

Bei einem Bild mit 4000 × 2000 Pixeln verwendet der Konverter den mittigen quadratischen Ausschnitt von 2000 × 2000 Pixeln. Links und rechts werden jeweils 1000 Pixel des Originalbilds weggeschnitten.

## Ausgabe

- **Ausgabedatei:** `cover.jpg`
- **Auflösung:** 3000 × 3000 Pixel
- **Qualität:** JPG mit Qualitätsparameter 0,95

**Im Quellcode nicht eindeutig erkennbar:** Der Quellcode enthält keine sichtbare Einstellung für Seitenverhältnis, Zuschneideposition, JPG-Qualität oder Dateinamen. Die beschriebenen Werte sind daher feste aktuelle Vorgaben und nicht vom Besucher veränderbar.

---

## Audio in MP3 konvertieren

## Bedienung

1. Öffnen Sie RouteNote-Converter.
2. Klicken Sie auf **„Audio“**.
3. Wählen Sie im Dateidialog eine unterstützte Audiodatei aus.
4. Warten Sie, bis die Schaltfläche **„Convert“** aktiviert wird.
5. Klicken Sie auf **„Convert“**.
6. Klicken Sie auf **„Download MP3“**.
7. Der Browser speichert das Ergebnis unter dem Dateinamen `audio.mp3`.

## Verarbeitung des Audios

Die Audiodatei wird vollständig in den Browser geladen und mit der AudioContext-API dekodiert. Anschließend wird sie in Blöcken von 1152 Samples verarbeitet.

Für die MP3-Kodierung gilt:

- Abtastrate: 44.100 Hz,
- Kanäle: Stereo,
- Bitrate: 320 kbps,
- Blockgröße: 1152 Samples.

### Mono-Dateien

Bei einer Audiodatei mit nur einem Kanal verwendet der Konverter denselben Kanal für links und rechts. Das Ergebnis wird dadurch als Stereo kodiert, ohne einen zweiten echten Kanal zu erzeugen.

### Mehrkanalige Dateien

Bei einer Datei mit mehr als einem Kanal verwendet der Konverter:

- Kanal 1 für die linke Seite,
- Kanal 2 für die rechte Seite.

Weitere Kanäle werden in diesem Auszug nicht separat berücksichtigt.

## Ausgabe

- **Ausgabedatei:** `audio.mp3`
- **Abtastrate:** 44.100 Hz
- **Kanäle:** Stereo
- **Bitrate:** 320 kbps

**Im Quellcode nicht eindeutig erkennbar:** Eine Qualitätsauswahl, Anpassung der Abtastrate,個別ige Kanalwahl oder Umschaltung zwischen Mono und Stereo ist nicht vorhanden.

---

## Kundensupport-Chat

Der Support-Chat ist ein sichtbarer Bestandteil der Website und kann unabhängig vom gewählten Konvertierungsbereich verwendet werden.

## Chat öffnen

1. Klicken Sie rechts unten auf die Schaltfläche **„💬“**.
2. Das Fenster **„lamachub Kundenservice“** öffnet sich.
3. Der Eingabecursor wird automatisch in das Feld **„Nachricht schreiben“** gesetzt.

## Nachricht senden

1. Geben Sie Ihre Frage in das Eingabefeld ein.
2. Klicken Sie auf **„➤“** oder drenden Sie die Eingabetaste.
3. Ihre Nachricht erscheint im Chat.
4. Das Eingabefeld wird geleert.
5. Der Dienst versucht, eine Antwort einzublenden.

Die maximale Länge einer einzelnen Nachricht beträgt 1800 Zeichen.

## Chat schließen

Klicken Sie oben rechts im Support-Fenster auf **„×“**. Der Chat wird ausgeblendet. Beim erneuten Öffnen bleibt die bisherige Nachrichtenanzeige im Browser erhalten, sofern die Seite nicht neu geladen wurde.

## Verlauf und Nachrichtenhinweis

- Nach erfolgreichen Antworten werden die letzten bis zu zwölf Chat-Einträge für den Dienst mitgeschickt.
- Nach der fünfzehnten gesendeten Nachricht erscheint der Hinweis:

  > **„Hinweis: Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.“**

- Bei einem Netzwerk- oder Dienstfehler erscheint:

  > **„Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.“**

### Datenschutz beim Chat

Die eingegebene Nachricht und ein begrenzter Chat-Verlauf werden per HTTP-POST an einen externen Support-Endpunkt gesendet. Dabei werden die Nachricht und der Verlauf als JSON-Daten übertragen.

**Im Quellcode nicht eindeutig erkennbar:**

- welche personenbezogenen Daten der externe Dienst serverseitig speichert,
- wie lange Nachrichten dort aufbewahrt werden,
- ob der Dienst zur Identifizierung weitere technische Daten verarbeitet,
- welche Einwilligungen oder Datenschutzrichtlinien dort gelten.

Daher sollten im Chat keine unnötigen sensiblen oder personenbezogenen Informationen eingegeben werden.

---

## Zurück-Schaltfläche auf lamachub.de

Unter bestimmten Aufrufbedingungen wird links oben eine orange Schaltfläche **„Zurück“** angezeigt.

### Bedingungen

Der Quellcode prüft, ob die Seite von `https://www.lamachub.de` aufgerufen wurde. Dabei müssen sowohl:

- das Schema `https`, und
- der Hostname `www.lamachub.de`

exakt zum Referrer passen.

### Bedienung

1. Klicken Sie auf **„Zurück“**.
2. Die aktuelle Seite navigiert in demselben Tab zu `https://www.lamachub.de/`.

**Bestätigt:** Die Navigation erfolgt über `window.top.location.href` und ist daher für das Verlassen eines eingebetteten Frames gedacht.

**Im Quellcode nicht eindeutig erkennbar:** In Browsern oder Umgebungen, die die Navigation über `window.top` blockieren, kann die Weiterleitung ausbleiben.

---

## Dateiformate und technische Angaben

| Bereich | Eingabe | Verarbeitung im Browser | Ausgabe |
|---|---|---|---|
| Cover | Über den Dateidialog ausgewählte Bilddatei | Mittig quadratisch zuschneiden, auf 3000 × 3000 Pixel skalieren | JPG, Dateiname `cover.jpg` |
| Audio | WAV, MP3, M4A, AAC oder FLAC laut Dateiauswahl | Dekodieren und MP3-kodieren | MP3, 44,1 kHz, Stereo, 320 kbps, Dateiname `audio.mp3` |

### Nicht sichtbare technische Einstellungen

Die folgenden Angaben werden im Quellcode fest vorgegeben:

- Canvas-Größe: 3000 × 3000 Pixel,
- JPG-Qualitätsparameter: 0,95,
- MP3-Abtastrate: 44.100 Hz,
- MP3-Kanäle: 2,
- MP3-Bitrate: 320 kbps,
- MP3-Blockgröße: 1152 Samples.

Besucherinnen und Besucher können diese Werte in der dargestellten Oberfläche nicht verändern.

---

## Datenschutz und Berechtigungen

### Lokale Dateiverarbeitung

**Bestätigt:** Die Bilddatei und die Audiodatei werden nach der Auswahl im Browser verarbeitet. Für die Konvertierung ist kein expliziter Datei-Upload in einen Konvertierungsdienst im Quellcode erkennbar.

Der Browser fordert beim Auswählen einer Datei jedoch die übliche lokale Dateiberechtigung an. Der Nutzer kann die Auswahl jederzeit abbrechen.

### Externe Ressourcen

Die Seite lädt Ressourcen von externen Servern:

- Schriftarten von Google Fonts,
- die MP3-B
