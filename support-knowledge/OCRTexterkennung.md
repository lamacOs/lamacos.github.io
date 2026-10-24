<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: OCRTexterkennung -->
<!-- source-files: ["OCRTexterkennung/index.html"] -->

# OCRTexterkennung

## Dokumentinformationen

| Angabe | Information |
|---|---|
| **Website-Name** | OCRTexterkennung |
| **Angezeigter Produktname** | lamacOCR |
| **Vermuteter Zweck** | Hochgeladene Bilder sollen per optischer Texterkennung in Text überführt und anschließend als PDF heruntergeladen werden können. |
| **Quellcode-Pfad** | `OCRTexterkennung` |
| **Erstellungsdatum** | 23. April 2026 |
| **Technische Grundlage** | Eine einzelne HTML-Datei namens `OCRTexterkennung/index.html` |
| **Dokumentationsstand** | Basierend auf dem bereitgestellten Quellcode-Auszug. Der Code wird ausdrücklich als möglicherweise unvollständig beschrieben. |

---

# 1. Überblick

„OCRTexterkennung“ ist eine browserbasierte Website mit einer zentralen Aufgabe:

1. Ein Bild auswählen
2. Den enthaltenen Text erkennen lassen
3. Das Erkennungsergebnis prüfen
4. Den erkannten Text als PDF herunterladen

Die Oberfläche ist als „Bild → Text → PDF“ bezeichnet. Die Website wird bei der Navigation von `www.lamachub.de` außerdem um einen sichtbaren Button **„Zurück“** ergänzt. Dieser Button führt zur Startseite von lamachub.de zurück.

Zusätzlich ist ein KI-gestützter Kundensupport-Chat integriert. Er wird über ein schwebendes Chat-Symbol in der rechten unteren Bildschirmecke geöffnet.

---

# 2. Voraussetzungen

## 2.1 Technische Voraussetzungen

Die Website benötigt:

- einen aktuellen Browser mit JavaScript-Unterstützung,
- Internetzugang, da Tesseract.js, jsPDF und die Schriftart über externe CDNs geladen werden,
- Zugriff auf die von der Website aufgerufenen externen Dienste,
- eine Bilddatei, die vom Browser verarbeitet werden kann.

Die Dateiauswahl akzeptiert aufgrund der Einstellung `accept="image/*"` grundsätzlich Bilddateien. Welche konkreten Formate, Größen oder Auflösungen zuverlässig unterstützt werden, ist im Quellcode nicht eindeutig erkennbar.

## 2.2 Inhaltliche Voraussetzungen

Für eine gute Texterkennung sind im Quellcode keine besonderen Qualitätsanforderungen definiert. Die tatsächliche Erkennungsqualität hängt jedoch vom verwendeten Bild, seiner Lesbarkeit und der Erkennungsleistung der zugrunde liegenden Bibliothek ab.

## 2.3 Berechtigungen und Konten

Im Quellcode ist kein Benutzerkonto, keine Anmeldung und kein Upload-Formular mit persönlichen Daten erkennbar. Auch eine serverseitige Authentifizierung ist nicht erkennbar.

> **Im Quellcode nicht eindeutig erkennbar:** Die vollständige Datenverarbeitung beim externen OCR-Dienst, dessen Speicherregeln und die Frage, ob Bilder dauerhaft gespeichert werden. Die im Browser verwendete OCR-Bibliothek kann zusätzliche Ressourcen von externen Servern laden. Details hierzu sind im bereitgestellten Quellcode nicht enthalten.

---

# 3. Sichtbare Bereiche der Website

## 3.1 Kopfzeile

Ganz oben befindet sich eine weiße Navigationsleiste mit:

- **„🟠 lamacOCR“** auf der linken Seite,
- **„© 2026 lamacHub“** auf der rechten Seite.

Die Kopfzeile enthält im Quellcode keine anklickbaren Menüpunkte.

## 3.2 Hauptbereich

Im mittleren Bereich liegt eine weiße Karte mit der Überschrift:

> **Bild → Text → PDF**

Darunter befindet sich der Hinweis:

> Lade ein Bild hoch, erkenne den Text und exportiere ihn als PDF.

## 3.3 Dateiauswahl

Ein Auswahlfeld für Dateien ist vorhanden. Es beschränkt die Auswahl auf Bilddateien. Der genaue Text des Browsers im Auswahldialog hängt vom verwendeten Betriebssystem und Browser ab.

## 3.4 Schaltflächen

Es sind zwei orange Schaltflächen vorhanden:

1. **„Text erkennen“**
2. **„PDF herunterladen“**

## 3.5 Statusanzeige

Unterhalb der Schaltflächen befindet sich die Statusanzeige. Sie ist anfangs leer und zeigt während beziehungsweise nach der Verarbeitung unter anderem:

- **„Erkenne Text... ⏳“**
- den Status der laufenden Texterkennung mit Prozentangabe
- **„Fertig ✅“** nach erfolgreicher Verarbeitung

## 3.6 Textausgabe

Unterhalb der Statusanzeige befindet sich eingraues Ausgabefeld, in dem der erkannte Text angezeigt wird. Der Inhalt lässt sich markieren und kopieren.

## 3.7 Kundensupport-Chat

In der rechten unteren Bildschirmecke befindet sich ein rundes, grünes Chat-Symbol mit einem Sprechblasen-Emoji.

Beim Öffnen erscheint ein Fenster mit:

- der Überschrift **„lamachub Kundenservice“**
- dem Zusatz **„KI-gestützter Support“**
- einem schließenden **„×“**
- einem Nachrichtenverlauf
- einem Eingabefeld mit dem Platzhalter **„Nachricht schreiben“**
- einer runden Senden-Schaltfläche mit einem Pfeilsymbol

## 3.8 Zurück-Button

Unter bestimmten Bedingungen wird oben links eine zusätzliche orange Schaltfläche **„Zurück“** angezeigt. Sie führt zur Startseite von lamachub.de zurück.

---

# 4. Bedienung: Text aus einem Bild erstellen

## Schritt 1: Bild auswählen

1. Öffnen Sie die Website.
2. Klicken Sie auf das Dateiauswahlfeld.
3. Wählen Sie eine Bilddatei von Ihrem Gerät aus.
4. Der Name der ausgewählten Datei wird in der Dateiauswahl angezeigt.

**Bestätigt:** Die Website verwendet das native Dateiauswahlfeld des Browsers. Es werden nur Dateien angeboten, die dem Filter `image/*` entsprechen.

## Schritt 2: Erkennung starten

1. Klicken Sie auf **„Text erkennen“**.
2. Die Statusanzeige wechselt zu **„Erkne Text... ⏳“** beziehungsweise zeigt anschließend den Status und Fortschritt der OCR-Bibliothek in Prozent an.
3. Warten Sie, bis **„Fertig ✅“** angezeigt wird.

**Bestätigt:** Die Erkennung wird unmittelbar nach dem Klick gestartet; ein gesonderter Bestätigungsschritt ist nicht vorhanden.

**Bestätigt:** Erkannt wird mit den Sprachen **„deu+eng“**. Die Verarbeitung erfolgt im Browser mithilfe der eingebundenen Tesseract.js-Bibliothek.

## Schritt 3: Ergebnis prüfen

Der erkannte Text erscheint im Ausgabefeld unterhalb der Statusanzeige.

Prüfen Sie insbesondere:

- Überschriften und Zwischenüberschriften
- Namen, Zahlen und Daten
- Sonderzeichen
- Zeilenumbrüche
- mehrspaltige Layouts
- schwach kontrastierte oder verzerrte Textbereiche

Bei unvollständigen Ergebnissen empfiehlt sich:

1. das Originalbild in einem Bildbearbeitungsprogramm heller und kontrastreicher machen,
2. das Bild möglichst gerade ausrichten,
3. die Datei erneut auswählen,
4. erneut auf **„Text erkennen“** klicken.

**Bestätigt:** Ein Bild kann durch erneutes Auswählen derselben oder einer anderen Datei erneut verarbeitet werden.

## Schritt 4: PDF herunterladen

1. Klicken Sie auf **„PDF herunterladen“**.
2. Der Browser lädt eine Datei mit dem Namen **`ocr-text.pdf`** herunter.
3. Öffnen Sie die heruntergeladene Datei in einem PDF-Programm oder Reader.

**Bestätigt:** Das PDF wird lokal im Browser erzeugt und über die übliche Download-Funktion des Browsers gespeichert. Im Quellcode ist kein serverseitiger PDF-Versand erkennbar.

**Bestätigt:** Wenn noch kein Text vorhanden ist, erscheint der Hinweis **„Kein Text vorhanden“**.

---

# 5. Bedienung: Kundensupport-Chat

## 5.1 Chat öffnen

1. Klicken Sie unten rechts auf das grüne Chat-Symbol.
2. Das Fenster **„lamachub Kundenservice“** öffnet sich.
3. Das Eingabefeld **„Nachricht schreiben“** wird automatisch fokussiert.

## 5.2 Nachricht senden

1. Tippen Sie Ihre Frage in das Eingabefeld.
2. Klicken Sie auf die runde Senden-Schaltfläche oder drücken Sie die Eingabetaste.
3. Ihre Nachricht erscheint rechts in grüner Farbe.
4. Die Antwort des Kundenservice erscheint als weiße Antwortbox.

**Bestätigt:** Leere Nachrichten werden nicht gesendet.

**Bestätigt:** Für zusammenhängende Antworten wird ein begrenzter Gesprächsverlauf mitgesendet. Die Website behält dafür die letzten zwölf Verlaufsnachrichten.

**Bestätigt:** Ab der 15. gesendeten Nachricht erscheint der zusätzliche Hinweis:

> Hinweis: Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.

## 5.3 Chat schließen

Klicken Sie oben rechts im Chat-Fenster auf **„×“**.

Der bisherige Gesprächsverlauf bleibt im aktuellen Browserfenster bestehen, wird beim erneuten Öffnen jedoch nicht aus einer Datenbank geladen.

**Im Quellcode nicht eindeutig erkennbar:** Ob und unter welchen Bedingungen der Chat-Verlauf serverseitig gespeichert wird.

---

# 6. Bedienung: Zurück zu lamachub.de

Der Button **„Zurück“** wird nur eingeblendet, wenn die Seite über die Website `www.lamachub.de` aufgerufen wurde.

1. Klicken Sie oben links auf **„Zurück“**.
2. Die aktuelle Seite verlassen und zu `https://www.lamachub.de/` navigiert wird.

**Bestätigt:** Die Navigation erfolgt im selben Tab.

**Im Quellcode nicht eindeutig erkennbar:** Auf welcher Unterseite von lamachub.de sich der Besucher befindet, wenn der Button erscheint. Das görbare Rücksprungziel ist immer die Startseite.

---

# 7. Eingaben und Ausgaben

## 7.1 Eingaben

| Eingabe | Zweck | Sichtbare Auswahl bzw. Bezeichnung |
|---|---|---|
| Bilddatei | Eingabematerial für die Texterkennung | Dateiauswahlfeld für Bilddateien |
| Chatnachricht | Frage oder Anliegen an den Kundenservice | Eingabefeld **„Nachricht schreiben“** |

## 7.2 Ausgaben

| Ausgabe | Wo sichtbar |
|---|---|
| Verarbeitungsstatus | Statusanzeige unter den Schaltflächen |
| Erkannter Text | Ausgabefeld unterhalb der Statusanzeige |
| PDF-Datei | Download mit dem Namen `ocr-text.pdf` |
| Chatantwort | Nachrichtenbereich im Kundenservice-Fenster |
| Fehlermeldung bei fehlender Datei | Browser-Meldung **„Bitte erst ein Bild auswählen“** |
| Fehlermeldung bei fehlendem Text | Browser-Meldung **„Kein Text vorhanden“** |
| Meldung bei nicht erreichbarem Support | Chatantwort **„Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.“** |

---

# 8. Typische Probleme und Fehlerbehebung

## 8.1 Es erscheint „Bitte erst ein Bild auswählen“

**Ursache:** Es wurde noch keine Datei ausgewählt.

**Lösung:**

1. Klicken Sie auf das Dateiauswahlfeld.
2. Wählen Sie eine Bilddatei aus.
3. Klicken Sie danach auf **„Text erkennen“**.

---

## 8.2 Der Text ist unvollständig oder enthält Fehler

**Mögliche Ursachen:**

- unleserliche oder zu kleine Schrift,
- geringer Kontrast zwischen Text und Hintergrund,
- schräg fotografierte Vorlage,
- mehrspaltiges Layout,
- ungewöhnliche Schriftarten,
- unscharfes oder komprimiertes Bild.

**Lösung:**

1. Verwenden Sie eine höhere Auflösung oder eine Scanauflösung mit besserer Lesbarkeit.
2. Richten Sie das Bild gerade aus.
3. Erhöhen Sie den Kontrast und entfernen Sie unnötige Schatten.
4. Beschränken Sie die Erkennung möglichst auf einen klaren Textbereich.
5. Starten Sie **„Text erkennen“** erneut.
6. Korrigieren Sie erkennbare Fehler direkt in der Textausgabe, bevor Sie das PDF herunterladen.

**Bestätigt:** Die Textausgabe ist technisch ein normales Browserview. Im Quellcode ist jedoch kein expliziter Bearbeitungsmodus mit speicherbarer Eingabe erkennbar.

**Im Quellcode nicht eindeutig erkennbar:** Ob der Text direkt im Ausgabefeld verändert werden kann und ob eine solche Änderung beim PDF-Download übernommen wird.

---

## 8.3 Es erscheint „Kein Text vorhanden“

**Ursache:** Es wurde noch keine erfolgreiche Texterkennung abgeschlossen, oder das Ergebnis war leer.

**Lösung:**

1. Wählen Sie ein Bild aus.
2. Klicken Sie auf **„Text erkennen“**.
3. Warten Sie, bis **„Fertig ✅“** angezeigt wird.
4. Prüfen Sie, ob Text im Ausgabefeld steht.
5. Klicken Sie erst danach auf **„PDF herunterladen“**.

---

## 8.4 Die Statusanzeige bleibt bei „Erkenne Text... ⏳“

**Mögliche Ursachen:**

- die OCR-Bibliothek oder ihre benötigten Ressourcen werden nicht geladen,
- die Internetverbindung ist unterbrochen,
- die Verarbeitung dauert länger,
- das Browser-Tab wurde während der Verarbeitung blockiert.

**Lösung:**

1. Prüfen Sie die Internetverbindung.
2. Laden Sie die Seite neu.
3. Wiederholen Sie die Auswahl und die Erkennung.
4. Verwenden Sie bei einem großen Bild eine kleinere Datei.
5. Öffnen Sie die Seite in einem aktuellen Browser.

**Im Quellcode nicht eindeutig erkennbar:** Eine konkrete Fehlermeldung für fehlgeschlagene OCR-Ladevorgänge oder ein Wiederholungsbutton innerhalb der Verarbeitung.

---

## 8.5 Die Dateiauswahl bietet keine geeignete Datei an

**Ursache:** Die Auswahl ist auf Bilddateien beschränkt.

**Lösung:**

1. Prüfen Sie, ob es sich tatsächlich um eine Bilddatei handelt.
2. Verwenden Sie gegebenenfalls ein gängiges Bildformat.
3
