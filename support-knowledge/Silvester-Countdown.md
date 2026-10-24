<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Silvester-Countdown -->
<!-- source-files: ["Silvester-Countdown/index.html"] -->

# Silvester-Countdown

**Vermuteter Zweck:** Eine einzelne, visuell animierte Website zeigt einen Live-Countdown bis zum nächsten 1. Januar um 00:00 Uhr. In den letzten zehn Sekunden werden einzelne Sekunden sprachlich ausgegeben. Nach Ablauf des Countdowns erscheint eine Neujahrsanimation mit Konfetti, Trompeten, Feuerwerk und einer gesprochenen Begrüßung.

**Quellcode-Pfad:** `Silvester-Countdown/index.html`

**Datum der Erstellung:** 23. März 2026

---

## 1. Überblick

Die Website besteht aus einem vollständig animierten Hintergrund, dem Titel **„⏳ Countdown bis Silvester“**, einer Countdown-Anzeige und einer zunächst verborgenen Neujahrsnachricht.

Es sind keine Formulare, Kontoanlagen, Einstellungen oder expliziten Schaltflächen vorhanden. Die Nutzung erfolgt automatisch nach dem Laden der Seite.

### Bestätigte Hauptfunktionen

- Anzeige der verbleibenden Zeit bis zum nächsten 1. Januar.
- Fortlaufende Aktualisierung der Anzeige im Sekundentakt.
- Sprachausgabe der letzten zehn Sekunden.
- Einblendung von **„🎆 HAPPY NEW YEAR! 🎆“** nach Ablauf des Countdowns.
- Konfetti-, Trompeten- und Feuerwerksanimation.
- Optionale Vibration auf unterstützten Mobilgeräten.
- Responsive Darstellung für unterschiedliche Bildschirmgrößen.

### Im Quellcode nicht eindeutig erkennbar

- Eine serverseitige Zeitzoneneinstellung.
- Ein manueller Neustart oder Zurücksetzen des Countdowns.
- Ein Soundtrack oder eine dauerhafte Hintergrundmusik.
- Eine Möglichkeit, den Zielzeitpunkt oder das Jahr zu ändern.
- Ein eigener Benutzerzugang, eine Speicherung von Daten oder eine Kontaktfunktion.
- Eine Übersetzung oder Einstellung der Sprache.
- Eine sichtbare Fehlermeldung, falls die Sprachausgabe oder Vibration nicht verfügbar ist.

---

## 2. Voraussetzungen

### Technische Voraussetzungen

Für die Grundanzeige genügt ein aktueller Browser mit JavaScript-Unterstützung.

Zusätzliche Browserfunktionen sind nur für einzelne Effekte erforderlich:

- **Sprachausgabe:** Ein Browser mit Unterstützung für die Web Speech API.
- **Vibration:** Ein vibrationsfähiges Mobilgerät und ein Browser, der die Vibrations-API unterstützt.
- **Animationen:** Ein Browser, der CSS-Animationen unterstützt.

### Inhaltliche Voraussetzungen

- Die Website benötigt keine Anmeldung.
- Es werden keine Eingaben von Besuchern verarbeitet.
- Es ist keine Internetverbindung für die im Quellcode sichtbaren Funktionen erkennbar. Die Datei enthält jedoch keine externen Schriftarten, Skripte oder Bilder, die separat geladen werden müssten.

### Verhalten bei deaktiviertem JavaScript

Wenn JavaScript deaktiviert ist, bleibt sichtbar:

> **Lädt…**

Der Countdown wird in diesem Fall nicht berechnet und die Neujahrsanimation nicht gestartet.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Hintergrund

Die Website verwendet einen dunklen, radialen Farbverlauf. Im Zentrum und oben ist der Hintergrund violett, nach außen wird er fast schwarz. Der gesamte Inhalt ist mittig ausgerichtet.

### 3.2 Titel

Oben steht die feste Überschrift:

> **⏳ Countdown bis Silvester**

Die Schriftgröße passt sich automatisch an die verfügbare Bildschirmbreite an.

### 3.3 Countdown-Anzeige

Direkt unter dem Titel befindet sich der Bereich:

> **Lädt…**

Nach erfolgreichem Start der Berechnung wird dieser Text durch eine Zeitangabe ersetzt, beispielsweise:

> `30d 4h 15m 8s`

Die Anzeige enthält:

- `d` für Tage,
- `h` für Stunden,
- `m` für Minuten,
- `s` für Sekunden.

Der Bindestrich zwischen „Silvester“ und „Countdown“ ist im HTML nicht als normaler Textbindestrich, sondern als Bindestrichzeichen innerhalb der Überschrift enthalten.

### 3.4 Neujahrsnachricht

Im HTML ist der folgende Text vorhanden:

> **🎆 HAPPY NEW YEAR! 🎆**

Dieser Bereich ist beim Laden der Seite unsichtbar. Erst wenn der Countdown abgelaufen ist, wird er eingeblendet und mit einer Einblend- und Vergrößerungsanimation dargestellt.

### 3.5 Animationen nach Ablauf des Countdowns

Zum Zeitpunkt Null startet die Website mehrere Effekte gleichzeitig:

- 180 Konfettistücke fallen von oben nach unten.
- Vier Trompetensymbole erscheinen am unteren Rand.
- Zehn Feuerwerksausgangspunkte erzeugen jeweils 35 kleine Funken.
- Die Neujahrsnachricht wird sichtbar.
- Die gesprochene Begrüßung startet.
- Auf unterstützten Geräten wird ein Vibrationsmuster ausgelöst.

Die Effekte werden nach kurzer Zeit automatisch aus dem Dokument entfernt.

---

## 4. Countdown-Zielzeit

Die Website berechnet automatisch den nächsten 1. Januar:

1. Sie ermittelt die aktuelle lokale Systemzeit.
2. Sie verwendet das aktuelle Jahr zuzüglich eins.
3. Als Zielzeit wird der 1. Januar dieses Folgejahres um `00:00:00` festgelegt.

Daraus folgt:

- Im Laufe eines Kalenderjahres zählt die Website bis zum kommenden Silvester.
- Am 1. Januar um Mitternacht beginnt unmittelbar der Countdown zum nächsten 1. Januar.
- Der Zielzeitpunkt basiert auf der lokalen Zeit und Uhr des Geräts.

**Hinweis:** Ob die lokale Systemzeit korrekt eingestellt ist, kann die Website nicht prüfen. Eine falsch eingestellte Geräteuhr kann daher einen scheinbar falschen Countdown verursachen.

---

## 5. Bedienung Schritt für Schritt

### Schritt 1: Website öffnen

Öffnen Sie die Datei:

`Silvester-Countdown/index.html`

Die Website kann direkt in einem Browser geladen werden. Im Quellcode ist keine besondere Installations- oder Serverkonfiguration erkennbar.

### Schritt 2: Countdown abwarten

Beim Laden wird zunächst **„Lädt…“** angezeigt. Innerhalb kurzer Zeit wird daraus die verbleibende Zeit bis zum nächsten 1. Januar.

Es sind keine Klicks, Eingaben oder Menüauswahl erforderlich.

### Schritt 3: Letzte Sekunden mithören

Während der letzten zehn Sekunden wird jede angezeigte Sekunde einmal sprachlich ausgegeben. Beispiel: Die Zahl `5` wird als gesprochene Sekunde ausgegeben.

Die Stimme verwendet im Code die englische Sprachumgebung `en-US`, auch wenn die Countdown-Anzeige auf Deutsch erfolgt.

### Schritt 4: Neujahrsanimation ansehen

Sobald die Zielzeit erreicht ist:

- stoppt der Countdown,
- wird **„🎆 HAPPY NEW YEAR! 🎆“** eingeblendet,
- starten Konfetti, Trompeten und Feuerwerk,
- wird **„Happy New Year!“** gesprochen,
- wird die Vibration ausgelöst, sofern das Gerät sie unterstützt.

### Schritt 5: Seite anschließend neu laden

Der Countdown ist nach dem einmaligen Ereignis beendet. Im Quellcode ist keine Funktion zum Zurücksetzen vorhanden. Für einen neuen Durchlauf muss die Seite neu geladen werden. Beim erneuten Laden wird automatisch der nächste 1. Januar berechnet.

---

## 6. Eingaben und Ausgaben

## 6.1 Eingaben

Die Website enthält keine sichtbaren Eingabefelder. Besucher können daher keine Daten eingeben.

Es findet keine Verarbeitung von Formularen, Suchanfragen, Namen, Nachrichten oder anderen personenbezogenen Daten statt.

## 6.2 Countdown-Ausgabe

Die Countdown-Ausgabe wird einmal pro Sekunde aktualisiert. Sie zeigt die verbleibende Zeit in Tagen, Stunden, Minuten und Sekunden an.

Die Anzeige wird nicht negativ. Sobald die Differenz zum Zielzeitpunkt null oder kleiner ist, wird der Countdown beendet.

## 6.3 Sprachausgabe

### Vor dem Countdown-Ende

- In den Sekunden 1 bis 10 vor dem Zielzeitpunkt wird die jeweilige Zahl gesprochen.
- Sekunde `0` wird nicht mehr gesprochen, da die Bedingung in diesem Moment bereits zur Feier führt.

### Nach dem Countdown-Ende

Die folgende englische Begrüßung wird gesprochen:

> **Happy New Year!**

Die Sprachausgabe verwendet eine erhöhte Sprechgeschwindigkeit von `0.9`. Ob eine Stimme im englischen Format verfügbar ist und ob die Wiedergabe beginnt, hängt vom Browser und vom Betriebssystem ab.

## 6.4 Vibration

Auf unterstützten Geräten wird beim Countdown-Ende ein Vibrationsmuster aufgerufen. Die konkrete wahrgenommene Vibration ist geräte- und browserabhängig.

---

## 7. Datenschutz und Berechtigungen

### Datenschutz

Im vorliegenden Quellcode ist Folgendes erkennbar:

- keine Tracking-Skripte,
- keine Analyse- oder Marketingdienste,
- keine Cookies,
- keine lokalen Speichernutzung,
- keine Formulare,
- keine Übermittlung von eingegebenen Daten,
- keine externen Ressourcen,
- kein Benutzerkonto,
- keine Speicherung personenbezogener Daten.

Der Quellcode enthält außerdem keine sichtbaren Geheimniswerte, Tokens, Passwörter oder API-Schlüssel.

### Browserberechtigungen

Für die dokumentierten Funktionen ist im Code keine ausdrückliche Berechtigungsabfrage enthalten:

- Die Web Speech API wird direkt verwendet.
- Die Vibration wird nur aufgerufen, wenn eine entsprechende Browserfunktion vorhanden ist.
- Mikrofon-, Kamera-, Standort- oder Benachrichtigungsberechtigungen werden nicht angefordert.

Ob ein Browser für Sprachausgabe oder Vibration zusätzliche Einstellungen verlangt, ist im Quellcode nicht eindeutig erkennbar.

---

## 8. Typische Probleme und Fehlerbehebung

### 8.1 Die Anzeige bleibt auf „Lädt…“ stehen

**Mögliche Ursache:** JavaScript ist deaktiviert oder wird blockiert.

**Prüfung:**

1. Öffnen Sie die Browserkonsole mit den üblichen Entwicklerwerkzeugen des Browsers.
2. Prüfen Sie, ob JavaScript für diese Seite aktiviert ist.
3. Laden Sie die Seite vollständig neu.
4. Falls Erweiterungen aktiv sind, prüfen Sie, ob eine davon JavaScript blockiert.

Der Quellcode enthält keine eigene sichtbare Fehlermeldung für diesen Fall.

### 8.2 Der Countdown zeigt eine unerwartete Zeit

**Mögliche Ursache:** Die Systemzeit oder Zeitzone des verwendeten Geräts ist falsch eingestellt.

**Fehlerbehebung:**

1. Öffnen Sie die automatische Zeiteinstellung Ihres Betriebssystems.
2. Lassen Sie Uhrzeit und Zeitzone automatisch synchronisieren.
3. Laden Sie die Website anschließend neu.

Die Website verwendet die lokale Systemzeit des Browsers. Eine eigene Zeitzonenauswahl ist nicht vorhanden.

### 8.3 Es ist keine Sprachausgabe zu hören

**Mögliche Ursachen:**

- Der Browser unterstützt die Web Speech API nicht.
- Die Systemstimme oder die englische Stimme fehlt.
- Die Lautstärke ist sehr niedrig oder der Browser ist stummgeschaltet.
- Die Seite wurde über eine Umgebung geöffnet, in der Audio nicht erlaubt ist.

**Fehlerbehebung:**

1. Prüfen Sie die Lautstärke und den Stummschaltungsstatus des Geräts.
2. Testen Sie die Sprachausgabe in einem anderen aktuellen Browser.
3. Prüfen Sie, ob englische Stimmen im Betriebssystem installiert sind.
4. Öffnen Sie die Seite direkt als HTML-Datei und nicht in einer Vorschau mit eingeschränkten Audiofunktionen.

Im Quellcode ist keine eigene Fehlermeldung für fehlende Sprachunterstützung vorhanden.

### 8.4 Es ist keine Vibration wahrnehmbar

**Mögliche Ursachen:**

- Das Gerät unterstützt die Vibration nicht.
- Der Browser stellt die API nicht bereit.
- System- oder Browsereinstellungen deaktivieren Vibrationen.
- Das Gerät befindet sich im energiesparenden oder stillen Modus.

**Fehlerbehebung:**

1. Prüfen Sie, ob andere Apps auf demselben Gerät vibrieren können.
2. Deaktivieren Sie bei Bedarf energiesparende Modi.
3. Testen Sie die Website in einem anderen unterstützten Browser.

Auf Desktop-Computern ist normalerweise keine Vibration zu erwarten.

### 8.5 Animationen erscheinen nicht oder wirken abgeschnitten

**Mögliche Ursachen:**

- Der Browser unterstützt die verwendeten CSS-Animationen nicht vollständig.
- Die Leistung des Geräts ist vorübergehend zu gering.
- Die Systemeinstellungen reduzieren Bewegung oder Animationen.
- Der Effekt war nur kurz sichtbar, da er nach wenigen Sekunden automatisch entfernt wird.

**Fehlerbehebung:**

1. Laden Sie die Seite neu.
2. Verwenden Sie einen aktuellen Browser.
3. Prüfen Sie in den Betriebssystemeinstellungen, ob „Bewegung reduzieren“ oder ähnliche Optionen aktiviert sind.
4. Beachten Sie, dass Konfetti nach fünf Sekunden, Trompeten nach 1,5 Sekunden und Feuerwerksfunken nach 1,2 Sekunden automatisch entfernt werden.

### 8.6 Der Countdown läuft nach Ablauf nicht weiter

Das ist im Quellcode beabsichtigt: Nach dem Erreichen des Zielzeitpunkts wird der Timer gestoppt.

**Mögliche Abhilfe:**

- Laden Sie die Seite neu.
- Dadurch wird automatisch ein neuer Countdown bis zum nächsten 1. Januar berechnet.

Eine sichtbare Neustart-Schaltfläche ist nicht vorhanden.

### 8.7 Die Seite wirkt auf dem Smartphone zu groß

Die Website besitzt ein responsives Layout und passt die Schriftgrößen an die Bildschirmbreite an. Die vielen gleichzeitigen Partikel können auf schwächeren Geräten jedoch kurzzeitig viel Leistung benötigen.

**Fehlerbehebung:**

- Schließen Sie andere-intensive Tabs oder Anwendungen.
- Laden Sie die Seite neu, falls die Darstellungstockt.
- Deaktivieren Sie bei Bedarf reduzierte Bewegung im Betriebssystem, wobei dies nicht in jedem Browser vollständig dieselbe Wirkung hat.

---

## 9. Barrierefreiheit und Darstellungsmerkmale

Bestätigte Merkmale:

- Die Website ist semantisch als HTML-Dokument aufgebaut.
- Die Sprache des Dokuments ist auf Deutsch eingestellt: `lang="de"`.
- Für Smartphones ist ein responsives Viewport-Setup vorhanden.
- Countdown und Neujahrsnachricht sind sichtbare Textbereiche.
- Die Schriftgrößen werden mit CSS an die Bild
