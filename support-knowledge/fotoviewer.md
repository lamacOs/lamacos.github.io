<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: fotoviewer -->
<!-- source-files: ["fotoviewer/index.html"] -->

# fotoviewer – Image Viewer

**Vermuteter Zweck:** Der Image Viewer ist eine einfache Single-Page-Website, mit der Besucherinnen und Besucher ein Bild über einen direkten Bild-Link in einer Vorschau anzeigen, die Bildgröße abfragen, den Link kopieren oder das Bild in einem neuen Browser-Tab öffnen können. Zusätzlich kann zwischen einem hellen und einem dunklen Erscheinungsbild gewechselt werden.

**Quellcode-Pfad:** `fotoviewer/index.html`

**Datum der Erstellung:** 7. März 2026

---

## 1. Überblick

Die Website besteht aus einer einzigen HTML-Datei mit eingebettetem CSS und JavaScript. Sie benötigt keine Anmeldung und enthält im Quellcode kein sichtbares Formular für Konto-, Benutzer- oder Zahlungsdaten.

Der zentrale Ablauf lautet:

1. Direkten Bild-Link in das Eingabefeld eingeben.
2. Auf **„Anzeigen“** klicken oder die Eingabetaste drücken.
3. Nach erfolgreichem Laden Bildgröße und Bildvorschau prüfen.
4. Optional den Link kopieren oder das Bild in einem neuen Tab öffnen.

---

## 2. Voraussetzungen

### 2.1 Technische Voraussetzungen

Für die Nutzung werden ein moderner Webbrowser und eine Internetverbindung benötigt, sofern das Bild nicht bereits lokal als HTML-Datei verfügbar ist.

Bestätigt unterstützt der Quellcode:

- aktuelle gängige Browser-Funktionen wie `URL`, `localStorage` und die Clipboard-API,
- eine responsive Darstellung für Desktop- und Mobilgeräte,
- die Eingabetaste als alternative Bedienung zur Schaltfläche **„Anzeigen“**.

Im Quellcode ist **nicht eindeutig erkennbar**, welche Browserversionen konkret unterstützt werden.

### 2.2 Anforderungen an den Bild-Link

Der eingegebene Wert muss zunächst als URL parsebar sein. Der Link muss außerdem direkt auf ein ladbares Bild verweisen, beispielsweise auf eine Bilddatei mit einer Bild-Endung oder auf eine andere URL, deren Antwort vom Browser als Bild verarbeitet werden kann.

Die Seite akzeptiert Eingaben wie:

```text
https://example.com/bild.jpg
```

Nicht geeignet sind in der Regel:

- reine Website-Seiten,
- Download-Seiten ohne direkten Bildinhalt,
- Links, die auf eine nicht erreichbare Ressource zeigen,
- Links, deren Server den Zugriff blockiert,
- Links, die erst nach einer Anmeldung oder nach umfangreichen Benutzeraktionen eine Bildansicht ermöglichen.

Ob die Website URLs mit anderen Protokollen als `http` und `https` technisch abweichend behandelt, ist im Quellcode nicht eindeutig erkennbar. Für die zuverlässige Nutzung wird ein normaler HTTPS-Direktlink empfohlen.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Kopfzeile

In der Kopfzeile befindet sich links die Bezeichnung:

**„Image Viewer“**

Rechts befindet sich eine runde Schaltfläche mit einem Mondsymbol **🌙**. Sie dient zum Umschalten zwischen hellem und dunklem Erscheinungsbild.

Im dunklen Modus wechselt das Symbol zu einer Sonne **☀️**.

### 3.2 Titelbereich

Der zentrale Titel lautet:

**„Bild anzeigen“**

Darunter steht der Hinweis:

**„Füge einen direkten Bild-Link ein und sehe das Bild sofort.“**

### 3.3 Eingabebereich

Der Eingabebereich befindet sich in einer Karte und enthält:

- ein Text-Eingabefeld mit dem Platzhalter `https://example.com/bild.jpg`,
- die orange Schaltfläche **„Anzeigen“**.

Das Eingabefeld hat keine sichtbare Beschriftung. Der Platzhalter verdeutlicht jedoch den erwarteten Eingabetyp.

Bei schmalen Bildschirmen werden Eingabefeld und Schaltfläche untereinander angeordnet. Die Schaltfläche **„Anzeigen“** nimmt dann die gesamte verfügbare Breite ein.

### 3.4 Meldungsbereich

Unterhalb der Eingabezeile kann eine farbige Meldung erscheinen:

- **Fehlermeldung** mit rotem Hintergrund,
- **Erfolgsmeldung** mit grünem Hintergrund.

Der Meldungsbereich ist zunächst unsichtbar.

### 3.5 Bildvorschau

Nach erfolgreichem Laden erscheint der Vorschaubereich. Er enthält:

- die Bildvorschau selbst,
- die Angabe **„Bildgröße: … × … Pixel“**,
- die Schaltfläche **„🔗 Link kopieren“**,
- die Schaltfläche **„↗ Bild öffnen“**.

Der Hintergrund hinter dem Bild besteht aus einem hellen beziehungsweise dunklen Schachbrettmuster. Er dient der besseren Abgrenzung transparenter oder sehr heller Bilder.

Die Bildanzeige ist auf eine maximale Höhe von 65 Prozent der Browserfensterhöhe begrenzt. Der umgebende Bereich kann bei größeren Bildern vertikal gescrollt werden. Das Bild selbst wird proportional auf die verfügbare Breite und Höhe verkleinert.

### 3.6 Fußzeile

Am Ende steht:

**„© 2026 lamacHub“**

---

## 4. Bedienung Schritt für Schritt

### 4.1 Bild anzeigen

1. Den direkten Link zur Bilddatei in das Eingabefeld einfügen.
2. Sicherstellen, dass die Eingabe mit einer vollständigen URL beginnt, beispielsweise `https://example.com/bild.jpg`.
3. Auf **„Anzeigen“** klicken.

Alternativ kann nach der Eingabe die **Enter-Taste** gedrückt werden.

### 4.2 Erfolgreiches Laden erkennen

Bei erfolgreichem Laden erscheinen:

1. die Bildvorschau,
2. die tatsächliche Bildgröße in Pixeln,
3. die grüne Meldung **„Bild erfolgreich geladen.“**,
4. die Schaltflächen **„🔗 Link kopieren“** und **„↗ Bild öffnen“**.

Die angezeigte Bildgröße basiert auf der tatsächlichen Abmessung der geladenen Bildressource. Sie kann daher von den sichtbaren Abmessungen der Vorschau abweichen, wenn das Bild verkleinert dargestellt wird.

### 4.3 Link kopieren

1. Ein erfolgreich geladenes Bild auswählen.
2. Auf **„🔗 Link kopieren“** klicken.
3. Der eingegebene Link wird in die Zwischenablage kopiert.
4. Die grüne Meldung **„Link wurde kopiert.“** erscheint.

Wird das Kopieren nicht erlaubt oder von der Browser-API nicht unterstützt, erscheint die rote Meldung:

**„Der Link konnte nicht kopiert werden.“**

Die Berechtigung zum Zugriff auf die Zwischenablage kann im Browser verweigert sein. Alternativ kann der Link manuell aus dem Eingabefeld kopiert werden.

### 4.4 Bild in einem neuen Tab öffnen

1. Ein erfolgreich geladenes Bild auswählen.
2. Auf **„↗ Bild öffnen“** klicken.
3. Der Bild-Link wird mit `window.open` in einem neuen Browser-Tab beziehungsweise einem neuen Browser-Fenster geöffnet.

Ob der Browser dafür ein neues Fenster oder einen neuen Tab verwendet, kann die Seite nicht vollständig bestimmen.

### 4.5 Helles oder dunkles Erscheinungsbild aktivieren

1. Die runde Schaltfläche mit dem Mondsymbol rechts oben anklicken.
2. Die Website wechselt in den dunklen Modus und das Symbol wird zu einer Sonne.
3. Ein erneuter Klick wechselt zurück in den hellen Modus.

Die gewählte Einstellung wird im lokalen Browserspeicher des verwendeten Geräts gespeichert. Beim nächsten Aufruf der Website wird sie automatisch wiederhergestellt.

---

## 5. Eingaben und Ausgaben

### 5.1 Eingabe

Akzeptiert wird eine einzelne Textzeile mit einer Bild-URL.

Der Code entfernt Leerzeichen am Anfang und Ende der Eingabe mit `trim()`. Dadurch werden versehentliche Leerzeichen um die URL toleriert.

### 5.2 Valide Ausgaben

Nach erfolgreichem Laden werden ausgegeben:

- die Bildvorschau,
- die Breite und Höhe des Bildes in Pixeln,
- eine Erfolgsmeldung,
- Schaltflächen zum Kopieren und Öffnen des Links.

### 5.3 Fehlermeldungen

Die Website kann folgende Meldungen anzeigen:

| Meldung | Bedeutung |
|---|---|
| **„Bitte gib einen Bild-Link ein.“** | Das Eingabefeld ist leer. |
| **„Das ist kein gültiger Link.“** | Die Eingabe konnte nicht als URL verarbeitet werden. |
| **„Das Bild konnte nicht geladen werden. Der Link muss direkt auf ein Bild zeigen.“** | Die URL ist formal gültig, aber das Bild konnte nicht geladen werden. |
| **„Der Link konnte nicht kopiert werden.“** | Die Zwischenablage konnte nicht beschrieben werden. |

### 5.4 Verhalten bei einer neuen Eingabe

Zu Beginn jedes Anzeigeversuchs werden:

- eine vorherige Meldung entfernt,
- die bisherige Vorschau ausgeblendet,
- der aktuell verwendete Link intern zurückgesetzt und anschließend durch die neue Eingabe ersetzt, sofern die URL gültig ist.

Die Bildinformation und der zuletzt erfolgreich geladene Link werden nicht dauerhaft gespeichert.

---

## 6. Typische Probleme und Fehlerbehebung

### 6.1 Es erscheint „Das ist kein gültiger Link.“

**Mögliche Ursache:** Die Eingabe ist unvollständig oder enthält eine Adresse, die der Browser nicht als URL akzeptiert.

**Vorgehen:**

1. Prüfen, ob die Eingabe mit `http://` oder `https://` beginnt.
2. Prüfen, ob zwischen Protokoll und Domain ein `//` steht.
3. Auf Tippfehler in Domain, Pfad und Dateiendung achten.
4. Den Link zunächst in einem neuen Tab öffnen und prüfen, ob dort direkt das Bild erscheint.
5. Den Link erneut über **„Anzeigen“** laden.

Beispiel:

```text
https://example.com/bilder/foto.jpg
```

### 6.2 Es erscheint „Das Bild konnte nicht geladen werden“

**Mögliche Ursachen:**

- Der Link führt zu einer HTML-Seite statt direkt zu einem Bild.
- Die Datei existiert nicht mehr.
- Der Server ist nicht erreichbar.
- Der Zugriff wird durch den Server oder ein Netzwerk blockiert.
- Der Bildtyp wird vom Browser nicht unterstützt.
- Der Link verweist auf eine geschützte oder nur temporär freigegebene Ressource.

**Vorgehen:**

1. Den Link in einem neuen Tab öffnen.
2. Prüfen, ob direkt das Bild angezeigt wird.
3. Falls eine Webseite erscheint, den direkten Link zur Bilddatei verwenden.
4. HTTP-Fehler wie 404 oder 403 beheben beziehungsweise den Link durch eine erreichbare Bild-URL ersetzen.
5. Prüfen, ob der Bildserver das Einbinden externer Bilder erlaubt.
6. Den Link erneut über **„Anzeigen“** laden.

Ein 404-Fehler bedeutet in der Regel, dass die Datei am angegebenen Ort nicht gefunden wurde. Bei einem 403-Fehler verweigert der Server den Zugriff. Beide Zustände können unterschiedliche Ursachen haben; der genaue Serverstatus ist in der Website nicht sichtbar.

### 6.3 Das Bild ist sehr klein oder passt nicht vollständig auf den Bildschirm

**Vorgehen:**

1. Das Bild mit der vollen Bildgröße über **„↗ Bild öffnen“** ansehen.
2. Bei sehr großen Bildern den scrollbaren Bereich der Vorschau verwenden.
3. Bei sehr kleinen Bildern die Bild-URL in einem neuen Tab öffnen und dort zoomen.

Die Vorschau verkleinert Bilder automatisch auf die verfügbare Breite beziehungsweise Höhe. Sie bietet im Quellcode keine Zoom- oder Vollbildsteuerung.

### 6.4 Der Link kann nicht kopiert werden

**Vorgehen:**

1. Prüfen, ob die Website in einem normalen Browser-Tab und nicht in einer eingeschränkten Umgebung geöffnet ist.
2. Berechtigungen für die Zwischenablage zulassen, sofern der Browser dazu auffordert.
3. Die URL alternativ direkt aus dem Eingabefeld kopieren.
4. Erneut auf **„🔗 Link kopieren“** klicken.

### 6.5 Beim Öffnen erscheint kein neuer Tab

**Mögliche Ursache:** Der Browser kann ein Pop-up blockieren oder das Öffnen eines neuen Fensters unterbinden.

**Vorgehen:**

1. Pop-ups für die Website im Browser zulassen.
2. Den Link alternativ manuell aus dem Eingabefeld in einen neuen Tab kopieren.
3. Prüfen, ob die Website in einem eingebetteten Browser-Fenster läuft.

### 6.6 Das dunkle Erscheinungsbild wird nach dem Neuladen nicht beibehalten

**Mögliche Ursache:** Der lokale Browserspeicher ist deaktiviert, wurde zwischenzeitlich gelöscht oder die Website wird in einem anderen Browser oder privaten Sitzung geöffnet.

**Vorgehen:**

1. Cookies beziehungsweise Website-Daten für diese Seite nicht dauerhaft blockieren.
2. Prüfen, ob der Browser lokale Speicherung für die Website zulässt.
3. Den Dunkelmodus erneut über die Mond-/Sonnenschaltfläche aktivieren.

---

## 7. Datenschutz und Berechtigungen

### 7.1 Verarbeitung der Bild-URL

Die eingegebene URL wird im JavaScript der Website verarbeitet und als Bildquelle gesetzt. Der Browser lädt die Bildressource entsprechend der eingegebenen Adresse.

Der Quellcode enthält keine sichtbare Übertragung der eingegebenen URL an einen eigenen Server. Ob beim Aufruf der fremden Bild-URL Informationen an deren Betreiber übermittelt werden, hängt vom externen Bildserver ab.

### 7.2 Lokaler Browserspeicher

Für das Erscheinungsbild wird ein lokaler Speicherschlüssel verwendet. Der Code enthält außerdem keine Anmeldung, keine Cookies und keine sichtbare Übertragung von Benutzerdaten an einen eigenen Dienst.

Der Inhalt des Speichers wird im Quellcode nicht verschlüsselt. Er dient ausschließlich der Speicherung der hellen oder dunklen Darstellung.

### 7.3 Zwischenablage

Beim Klick auf **„🔗 Link kopieren“** wird die eingegebene Bild-URL in die Zwischenablage des Browsers geschrieben. Der Nutzer kann diese Information anschließend in anderen Anwendungen verwenden.

### 7.4 Externe Bildquellen

Beim Laden einer Vorschau stellt der Browser eine Verbindung zum eingebetteten Bildserver her. Dabei können üblicherweise technische Verbindungsdaten wie IP-Adresse, Zeitpunkt, User-Agent und HTTP-Header an den externen Anbieter weitergegeben werden.

Ob ein externer Bildanbieter die Bildans
