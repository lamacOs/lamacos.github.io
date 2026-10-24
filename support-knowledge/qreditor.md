<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: qreditor -->
<!-- source-files: ["qreditor/index.html"] -->

# qreditor – Support-Dokumentation

**Website-Name:** qreditor  
**Seitentitel:** „QR Studio – Custom QR Code Creator“  
**Vermuteter Zweck:** qreditor ist ein browserbasierter Generator für individualisierte QR-Codes. Er bietet eine Live-Vorschau, verschiedene QR-Code-Designs, Farbanpassungen, eine optionale Logo-/Bildfunktion, den Download als PNG sowie einen separaten QR-Code-Tester für Kamera- oder Bilddateien.  
**Quellcode-Pfad:** `qreditor`  
**Erstellungsdatum:** 23. März 2025  

> Der Quellcode-Auszug ist gekürzt. Die Dokumentation beschägt die daraus erkennbaren Funktionen. Nicht eindeutig belegbare Abläufe werden ausdrücklich als solche gekennzeichnet.

---

## 1. Überblick

qreditor ist eine einzelne Webseite mit drei großen Bereichen:

1. **Einstellungen für die QR-Code-Erstellung**
2. **Live-Vorschau des erzeugten QR-Codes**
3. **QR-Code-Tester**

Die Seite benötigt einen aktuellen Browser mit JavaScript. Für die QR-Erzeugung und das Scannen werden externe JavaScript-Bibliotheken von einem CDN geladen. Eine Internetverbindung ist daher zumindest beim Laden der Seite beziehungsweise bei fehlendem Browser-Cache erforderlich.

### Bestätigte Voraussetzungen

- Ein Webbrowser mit JavaScript
- Internetverbindung zum Laden der externen Bibliotheken
- Für den Kamera-Tester eine geeignete Kamera
- Für den Kamera-Tester eine sichere Umgebung, in der der Browser den Kamerazugriff erlauben darf
- Für den Bild-Upload eine lokale Bilddatei

Im Quellcode ist **nicht eindeutig erkennbar**, ob und unter welchen Bedingungen qreditor vollständig offline funktioniert.

---

# 2. Erste Schritte

## 2.1 Seite öffnen

1. Öffnen Sie `qreditor/index.html` im Browser.
2. Prüfen Sie, ob der Browser JavaScript zulässt.
3. Warten Sie, bis die QR-Code-Vorschau erscheint.

Die Seite lädt zwei externe Bibliotheken:

- `qrcode-generator` zur Erstellung des QR-Codes
- `html5-qrcode` für Kamera- und Bildtests

Falls die Vorschau oder der Scanner nicht funktionieren, sollten Sie zuerst prüfen, ob die Bibliotheken erfolgreich geladen wurden.

## 2.2 Standardzustand

Beim Öffnen sind folgende Werte voreingestellt:

- **Inhalt / URL:** `https://example.com`
- **QR-Code Style:** „Klassisch“
- **QR-Farbe:** dunkelgrau
- **Hintergrund:** weiß
- **Fehlerkorrektur:** „M – Standard“
- **Rand:** mittlerer Wert
- **Logo-Größe:** 22 Prozent
- Kein Logo ausgewählt

Diese Werte werden direkt in der Vorschau berücksichtigt.

---

# 3. Bereich „Einstellungen“

## 3.1 Inhalt oder URL eingeben

Das Feld **„🔗 Inhalt / URL“** ist ein mehrzeiliges Textfeld.

### Bedienung

1. Klicken Sie in das Textfeld.
2. Geben Sie den gewünschten Inhalt ein, beispielsweise:
   - eine Internetadresse,
   - eine Kontaktinformation,
   - einen kurzen Text,
   - andere Daten, die in einen QR-Code passen.
3. Die Vorschau wird automatisch aktualisiert.

### Verhalten

- Änderungen werden unmittelbar in der Vorschau umgesetzt.
 - Leerer Inhalt wird intern durch ein einzelnes Leerzeichen ersetzt. Der QR-Code bleibt dadurch technisch erzeugbar.
- Eine Eingabevaliderung für URLs ist nicht erkennbar. Die Beschriftung erlaubt sowohl URLs als auch allgemeinen Inhalt.

### Hinweis

Verwenden Sie in der Praxis eine vollständige Adresse, beispielsweise mit `https://`, wenn der QR-Code direkt zu einer Webseite führen soll.

---

## 3.2 QR-Code-Stil auswählen

Im Bereich **„🎨 QR-Code Style“** werden zehn Schaltflächen angezeigt:

1. Klassisch
2. Rund
3. Dots
4. Soft
5. Bold
6. Diamond
7. Squares
8. Minimal
9. Pixel
10. Neon

Die Schaltflächen werden aus dem Quellcode automatisch erzeugt. Beim Start ist „Klassisch“ ausgewählt.

### Bedienung

1. Klicken Sie auf die gewünschte Stil-Schaltfläche.
2. Die ausgewählte Schaltfläche wird optisch hervorgehoben.
3. Der QR-Code in der Vorschau wird sofort neu gezeichnet.

### Unterschiede der Styles

- **Klassisch:** quadratische Module und eckige Erkennungszeichen.
- **Rund:** abgerundete Module und abgerundete Erkennungszeichen.
- **Dots:** kreisförmige Module.
- **Soft:** stark abgerundete Module.
- **Bold:** vergrößerte, leicht abgerundete Module.
- **Diamond:** rotierte, rautenförmige Module.
- **Squares:** kleinere quadratische Module.
- **Minimal:** deutlich kleinere quadratische Module.
- **Pixel:** Module mit geringem Abstand.
- **Neon:** quadratische Module mit Leuchteffekt.

### Lesbarkeit

Stile wie „Minimal“, „Diamond“, „Dots“ oder „Bold“ verändern die Darstellung der Module deutlich. Ob ein solcher QR-Code mit jedem Scanner funktioniert, hängt auch vom verwendeten Scanner und von der Druck- oder Bildqualität ab. Im Quellcode ist keine automatische Prüfung der Scanbarkeit für die erstellten QR-Codes erkennbar.

---

## 3.3 QR-Farbe festlegen

Das Feld **„🟧 QR-Farbe“** ist eine Farbauswahl.

1. Klicken Sie auf das Farbfeld.
2. Wählen Sie im Browser-Farbauswahl eine Farbe.
3. Die Vorschau wird automatisch aktualisiert.

Für gut lesbare Codes empfiehlt sich ein deutlicher Kontrast zwischen QR-Farbe und Hintergrund. Im Quellcode wird kein Kontrast-Check durchgeführt.

---

## 3.4 Hintergrundfarbe festlegen

Das Feld **„⬜ Hintergrund“** funktioniert auf dieselbe Weise.

1. Klicken Sie auf das Farbfeld.
2. Wählen Sie die gewünschte Hintergrundfarbe.
3. Die Vorschau wird sofort neu gezeichnet.

Achten Sie darauf, dass Hintergrund und QR-Farbe deutlich voneinander abweichen. Besonders bei „Neon“ und transparent wirkenden Bildbereichen kann die Lesbarkeit beeinträchtigt sein.

---

# 4. Logo- und Bildfunktion

## 4.1 Bild oder Logo auswählen

Im Feld **„🖼️ Bild / Logo“** kann eine Bilddatei ausgewählt werden.

1. Klicken Sie auf das Dateiauswahlfeld.
2. Wählen Sie eine lokale Bilddatei aus.
3. Die Datei wird lokal durch den Browser eingelesen.
4. Das Bild erscheint mittig in der QR-Code-Vorschau.

Die Auswahl beschränkt sich über den Feldtyp grundsätzlich auf Bilddateien. Das genaue Einschränken auf PNG, JPEG, SVG oder andere Formate ist im Quellcode nicht eindeutig erkennbar.

### Unterstützte Nutzung

- Eigene Logos oder Grafiken
- Produkt- oder Markenbilder
- Symbole und Illustrationen

### Empfehlung

Verwenden Sie möglichst ein quadratisches Bild mit transparentem oder zum QR-Hintergrund passendem Hintergrund. So überdeckt das Logo die kritischen QR-Module möglichst wenig.

---

## 4.2 Logo-Größe einstellen

Der Schieberegler **„📐 Logo-Größe“** reicht von 10 bis 32 Prozent.

1. Verschieben Sie den Regler.
2. Beobachten Sie die sofortige Änderung in der Vorschau.
3. Wählen Sie eine Größe, bei der das Logo noch deutlich erkennbar bleibt und möglichst wenige QR-Module verdeckt.

Ein größeres Logo kann die Scanbarkeit beeinträchtigen. Die Seite empfiehlt deshalb bei Logo-Verwendung die Fehlerkorrekturstufe **„H – Maximal“**.

---

## 4.3 Bild entfernen

1. Klicken Sie auf **„🗑️ Bild entfernen“**.
2. Das Logo wird aus der Vorschau entfernt.
3. Die Dateiauswahl wird zurückgesetzt.
4. Der QR-Code wird ohne Logo neu gezeichnet.

Der Vorgang kann durch erneutes Auswählen eines Bildes rückgängig gemacht werden.

---

# 5. Fehlerkorrektur und Rand

## 5.1 Fehlerkorrektur auswählen

Unter **„🛡️ Fehlerkorrektur“** stehen vier Optionen zur Verfügung:

| Option | Bezeichnung | Zweck |
|---|---|---|
| L | Niedrig | Geringste Redundanz |
| M | Standard | Ausgewählter Standardwert |
| Q | Hoch | Mehr Redundanz |
| H | Maximal | Höchste Redundanz |

### Bedienung

1. Öffnen Sie die Auswahlliste.
2. Wählen Sie die gewünschte Stufe.
3. Der QR-Code wird automatisch neu erzeugt.

### Empfehlung

- Für kurze, sauber gedruckte Codes ist **M** der Standard.
- Bei Logo, komplexem Stil oder teilweise verdeckten Modulen ist **Q** oder **H** geeigneter.
- Mit **H** kann der QR-Code in der Regel mehr Inhalt aufnehmen oder mehr beschädigte Bereiche tolerieren. Die tatsächliche Kapazität hängt jedoch auch vom Inhalt ab.

---

## 5.2 Rand einstellen

Der Schieberegler **„↔️ Rand“** reicht von 0 bis 8 Modulen.

1. Verschieben Sie den Regler.
2. Der freie Rand um den QR-Code wird unmittelbar angepasst.
3. Prüfen Sie, ob genug Ruhefläche um den Code erhalten bleibt.

### Empfehlung

Ein zu kleiner oder fehlender Rand kann die Erkennung durch Scanner erschweren. Für den Druck und die Erkennung mit Kameras ist normalerweise ein sichtbarer freier Rand sinnvoll.

---

# 6. Live-Vorschau

## 6.1 Zweck

Im rechten Bereich von qreditor wird der aktuelle QR-Code in einem Canvas-Element dargestellt. Das Vorschaubereichsfeld ist abgerundet und besitzt einen gestrichelten Rand.

Die Vorschau aktualisiert sich bei Änderungen an:

- Inhalt oder URL,
- Farbe,
- Hintergrund,
- Logo-Größe,
- Fehlerkorrektur,
- Rand,
- ausgewähltem Stil.

## 6.2 Bildgenerierung

Für die interne Erstellung verwendet qreditor eine Canvas-Größe von 1000 × 1000 Pixeln. Diese Angabe ist im Quellcode erkennbar, beschreibt aber nicht zwingend die Downloadauflösung, da der Download-Teil des gekürzten Quellcodes nicht vollständig vorliegt.

## 6.3 Statusanzeige

Unter den Einstellungen wird eine Statusanzeige mit dem Text **„✓ Bereit“** angezeigt.

Weitere Statusmeldungen und genaue Bedeutung der Statusanzeige sind im gekürzten Quellcode nicht vollständig erkennbar.

---

# 7. QR-Code als PNG herunterladen

## 7.1 Bedienung

1. Nehmen Sie die gewünschten Einstellungen vor.
2. Prüfen Sie das Ergebnis in der Live-Vorschau.
3. Klicken Sie auf **„⬇️ PNG herunterladen“**.
4. Der Browser startet den Download eines PNG-Bildes.

### Was bestätigt erkennbar ist

- Es wird ein PNG-Download angeboten.
- Der Download erfolgt über den Browser.
- Der QR-Code wird auf einer internen Zeichenfläche erzeugt.

### Im Quellcode nicht eindeutig erkennbar

- Der exakte Dateiname des Downloads
- Die endgültige Auflösung der exportierten Datei
- Ob statt der internen 1000 × 1000 Pixel ein anderes Exportformat verwendet wird
- Ob mehrere Dateien oder Formate angeboten werden

---

# 8. QR-Code-Tester

Der untere Bereich **„📷 QR-Code Tester“** dient dazu, einen vorhandenen QR-Code zu prüfen. Er kann einen QR-Code mit der Kamera scannen oder ein Bild per Datei-Upload testen.

## 8.1 Kamera-Tester starten

1. Klicken Sie auf **„📷 Kamera starten“**.
2. Erlauben Sie den Kamerazugriff, wenn der Browser eine Berechtigungsabfrage anzeigt.
3. Halten Sie den QR-Code in den angezeigten Kamera- und Erkennungsbereich.
4. Das Ergebnis erscheint nach erfolgreicher Erkennung im Ergebnisfeld.

### Bestätigtes Verhalten

- Der Scanner wird erst nach einem Klick gestartet.
- Das Kameraelement wird bei Bedarf eingeblendet.
- Bei einer erfolgreichen Erkennung wird der gelesene Inhalt angezeigt.
- Bei einem Fehler erscheint eine Fehlermeldung.
- Erkannte Inhalte, die als Link behandelt werden, werden als anklickbarer Link dargestellt.

### Mögliche Probleme

#### Kamera startet nicht

Prüfen Sie:

1. Ist die Seite in einem Browser geöffnet, der Kamerazugriff unterstützt?
2. Erlauben Sie den Kamerazugriff in den Browser-Einstellungen?
3. Wird die Seite über `https://` oder über `localhost` geladen?
4. Ist eine andere Anwendung bereits auf die Kamera zugreifend?

Browser blockieren Kamerazugriff häufig in unsicheren Umgebungen oder bei nicht erlaubten Berechtigungen.

#### Der QR-Code wird nicht erkannt

- Halten Sie das Bild ruhig und gut beleuchtet.
- Vermeiden Sie Reflexionen und starke Perspektivverzerrungen.
- Zeigen Sie möglichst den vollständigen Code einschließlich Rand.
- Verwenden Sie ein scharfes, ausreichend großes Bild.
- Testen Sie bei einem gedruckten Code zunächst ein Foto mit möglichst wenig Unschärfe.

#### Es werden mehrere Codes angezeigt

Der genaue Umgang mit mehreren Codes im Kamera- oder Bildmodus ist im gekürzten Quellcode nicht vollständig erkennbar.

---

## 8.2 Scanner stoppen

1. Klicken Sie auf **„⏹️ Scanner stoppen“**.
2. Die aktive Kamera-/Scanansicht wird beendet oder ausgeblendet.

Diese Schaltfläche sollte verwendet werden, wenn der Kamerazugriff nicht mehr benötigt wird.

---

## 8.3 QR-Bild hochladen

1. Klicken Sie auf **„🖼️ QR-Bild hochladen“**.
2. Wählen Sie eine lokale Bilddatei aus.
3. Die Website versucht, den QR-Code im Bild zu erkennen.
4. Das
