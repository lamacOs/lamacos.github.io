<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: GeoDash -->
<!-- source-files: ["GeoDash/index.html"] -->

# GeoDash – Support-Dokumentation

**Vermuteter Zweck:** GeoDash ist ein browserbasiertes Rhythmus-Platformer-Spiel mit mehreren Spielmodi, einem Level-Editor und lokalen Spielständen. Die sichtbare Spieloberfläche verwendet intern die Bezeichnung **„LAMA DASH“**.

**Quellcode-Pfad:** `GeoDash`  
**Datum der Erstellung:** 14. Februar 2026

> **Hinweis zum Quellcode:** Die Analyse basiert auf den bereitgestellten, teilweise gekürzten Auszügen. Im Quellcode nicht eindeutig erkennbare Funktionen werden ausdrücklich als solche gekennzeichnet.

---

## 1. Überblick

GeoDash ist ein seitwärts laufendes Platformer-Spiel, das direkt im Browser über ein HTML5-Canvas dargestellt wird. Der Spieler bewegt sich automatisch nach rechts und muss Hindernissen ausweichen.

Je nach Spielmodus wird der Spieler durch unterschiedliche Objekte und Portale gesteuert:

- **Cube:** Klassischer Sprungmodus
- **Ship:** Auf- und absteigender Flugmodus
- **Ball:** Springt bei jeder Eingabe in die entgegengesetzte Richtung
- **UFO:** Flugmodus mit eigener Schwerkraft
- **Wave:** Wechselt zwischen einer Auf- und Abwärtsbewegung
- **Robot:** Springt mit größerer Kraft
- **Spider:** Verwendet eine umkehrbare Schwerkraft

Die Anwendung enthält:

- ein Hauptmenü,
- drei vordefinierte Level,
- einen Übungsmodus,
- einen Level-Editor,
- eine Pause,
- eine Wiederholungsansicht nach einem Fehlschlag,
- eine Abschlussansicht nach einem erfolgreichen Level,
- lokale Speicherung von Fortschritt, Versuchen, Münzen und einem benutzerdefinierten Level.

---

## 2. Voraussetzungen

### 2.1 Unterstützte Umgebung

Voraussetzungen sind:

- ein moderner Browser mit JavaScript-Unterstützung,
- HTML5-Canvas-Unterstützung,
- `localStorage` im Browser,
- eine Internetverbindung ist **im Quellcode nicht eindeutig erkennbar**, da keine externen Ressourcen oder Netzwerkaufrufe im bereitgestellten Code-Auszug sichtbar sind.

### 2.2 Bildschirmgröße und Darstellung

Die Oberfläche passt sich an die verfügbare Browserfläche an. Das Canvas wird in Abhängigkeit von `innerWidth` und `innerHeight` neu gezeichnet. Eine Änderung der Fenstergröße löst automatisch eine Anpassung aus.

Das Spiel ist grundsätzlich für Desktop- und Touchbedienung ausgelegt:

- **Desktop:** Tastatur, Mausklick oder Touchpad
- **Mobil:** sichtbare Touch-Schaltflächen **„JUMP“** und **„Ⅱ“**

### 2.3 Lokale Speicherung

Spielstände werden im `localStorage` des Browsers unter einem internen Schlüssel abgelegt. Gespeichert werden:

- abgeschlossene Level,
- insgesamt gesammelte Münzen,
- Versuche je Level,
- der Status des Übungsmodus,
- ein eventuell gespeichertes benutzerdefiniertes Level.

Der konkrete lokale Speicherzugriff kann in folgenden Fällen eingeschränkt sein:

- privater oder inkognito Browsermodus,
- blockierte Website-Daten,
- vollständiger Browser-Speicher,
- Wechsel von Browser, Gerät oder Benutzerprofil.

In diesen Fällen kann der Fortschritt verloren gehen oder nicht gespeichert werden.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Hauptmenü

Beim Öffnen der Website wird standardmäßig das Menü mit der Überschrift **„LAMA DASH“** und dem Untertitel **„Ein eigenes Rhythmus-Platformer-Spiel“** angezeigt.

Sichtbare Elemente:

- Liste der verfügbaren Level
- **„PRACTICE MODE“**
- **„LEVEL EDITOR“**

Die Level werden in einem Raster mit zwei Spalten dargestellt. Die konkreten Schaltflächenbezeichnungen der vordefinierten Level werden im bereitgestellten Auszug nicht vollständig gezeigt; im Quellcode sind jedoch die Levelnamen **„First Flight“**, **„Neon Rush“** und **„Gravity Lab“** enthalten.

### 3.2 Spielbildschirm

Das Spiel wird auf einem Canvas gezeichnet. Über dem Canvas befindet sich die Statusanzeige mit:

- aktueller Spielerform, standardmäßig **„CUBE“**
- aktuellem Versuch, standardmäßig **„Attempt 1“**
- aktueller Münzzahl, standardmäßig **„🪙 0“**
- Spielstatus, standardmäßig **„NORMAL“**

Darunter befindet sich ein Fortschrittsbalken. Er zeigt an, wie weit der Spieler im aktuellen Level gekommen ist.

### 3.3 Touch-Steuerung

Auf Touch-Geräten werden zwei halbtransparente Schaltflächen eingeblendet:

- **„JUMP“** rechts unten
- **„Ⅱ“** links unten

**„JUMP“** wird im Schiffs- und Wellenmodus als Steuerung nach oben beziehungsweise nach unten verwendet. **„Ⅱ“** öffnet beziehungsweise schließt die Pause.

### 3.4 Pausenbereich

Die Pause wird mit der Überschrift **„PAUSE“** angezeigt. Verfügbare Schaltflächen:

- **„FORTSETZEN“**
- **„NEUSTART“**
- **„MENÜ“**

### 3.5 Fehlschlagansicht

Nach einem Zusammenstoß mit einem Hindernis erscheint:

- **„💥 VERSUCH FEHLGESCHLAGEN“**
- einen Text im Element **„deathText“**
- **„ERNEUT VERSUCHEN“**
- **„MENÜ“**

Der genaue Inhalt des zusätzlichen Textes ist im gekürzten Quellcode nicht eindeutig erkennbar.

### 3.6 Abschlussansicht

Nach Erreichen des Zielobjekts eines Levels erscheint:

- **„🏆 LEVEL GESCHAFFT!“**
- einen Text im Element **„completeText“**
- **„NÄCHSTES LEVEL“**
- **„MENÜ“**

Der genaue zusätzliche Textinhalt sowie das Verhalten von **„NÄCHSTES LEVEL“** nach dem letzten Level sind im bereitgestellten Auszug nicht vollständig erkennbar.

### 3.7 Level-Editor

Der Editor wird über **„LEVEL EDITOR“** geöffnet. Er enthält die Überschrift **„LEVEL EDITOR“**, eine Werkzeugleiste und drei Schaltflächen:

- **„LEVEL SPEICHERN“**
- **„LEVEL TESTEN“**
- **„SCHLIESSEN“**

Verfügbare Werkzeuge:

| Sichtbare Bezeichnung | Interner Objekttyp | Funktion |
|---|---|---|
| **Block** | `block` | Plattform |
| **Spike** | `spike` | Stachelspitze |
| **Saw** | `saw` | Sägeförderer |
| **Coin** | `coin` | Sammelbare Münze |
| **Orb** | `orb` | Orb |
| **Pad** | `pad` | Sprung-/Trampolinobjekt |
| **Cube** | `portalCube` | Wechsel in den Cube-Modus |
| **Ship** | `portalShip` | Wechsel in den Ship-Modus |
| **Ball** | `portalBall` | Wechsel in den Ball-Modus |
| **UFO** | `portalUfo` | Wechsel in den UFO-Modus |
| **Wave** | `portalWave` | Wechsel in den Wave-Modus |
| **Robot** | `portalRobot` | Wechsel in den Robot-Modus |
| **Spider** | `portalSpider` | Wechsel in den Spider-Modus |
| **Gravity** | `gravity` | Schwerkraftänderung |
| **Speed** | `speed` | Geschwindigkeitsänderung |
| **Löschen** | `erase` | Entfernen von Objekten |

Der Bereich **„Werkzeug: Block“** zeigt das aktuell ausgewählte Werkzeug an.

---

## 4. Steuerung

### 4.1 Sprung und Flugsteuerung

Die folgenden Eingaben lösen einen Sprung aus beziehungsweise steuern die vertikale Bewegung:

- Leertaste
- Pfeil nach oben
- **W**
- Klick oder Tippen auf das Spiel-Canvas
- Touch-Schaltfläche **„JUMP“**

### 4.2 Pause

- **Escape** auf der Tastatur
- Touch-Schaltfläche **„Ⅱ“**

### 4.3 Verhalten nach Spielform

#### Cube

Ein Sprung ist möglich, wenn der Spieler:

- auf dem Boden steht oder
- sich innerhalb der im Code vorgesehenen „Coyote Time“ befindet.

#### Robot

Der Roboter springt, wenn er auf dem Boden steht. Der Sprung fällt im Quellcode stärker aus als beim Cube.

#### UFO

Jede Eingabe setzt die vertikale Geschwindigkeit nach oben. Es gibt keine begrenzte Sprungvoraussetzung wie beim Cube.

#### Ball

Jede gültige Eingabe kehrt die Schwerkraft um. Der Ball fällt daraufhin in die jeweils andere Richtung.

#### Ship

Die Eingabe hält den Spieler nach oben; ohne Eingabe fällt er nach unten. Die vertikale Geschwindigkeit ist begrenzt.

#### Wave

Die Eingabe steuert die Bewegung nach oben. Ohne Eingabe bewegt sich der Spieler nach unten.

#### Spider

Bei gehaltener oder ausgelöster Eingabe wird die Schwerkraft umgekehrt. Der Spieler bewegt sich dann in die entgegengesetzte Richtung.

### 4.4 Warum wird ein Spring nicht ausgeführt?

Im Cube-Modus wird ein Sprung nur ausgeführt, wenn der Spieler auf dem Boden steht oder die kurzfristige Boden-Toleranz noch aktiv ist. In anderen Modi gelten eigene Regeln.

Außerdem wird die Eingabe in folgenden Situationen ignoriert:

- Das Spiel läuft nicht.
- Das Spiel ist pausiert.
- Der Spieler ist bereits gescheitert.

---

## 5. Spielablauf

### 5.1 Ein vordefiniertes Level starten

1. Website öffnen.
2. Im Hauptmenü das gewünschte Level auswählen.
3. Das Level startet automatisch.
4. Die Statusanzeige zeigt den aktuellen Spielmodus, den Versuch und die Münzzahl.
5. Mit den beschriebenen Eingaben Hindernissen ausweichen.
6. Das Zielobjekt des Levels erreichen.
7. Die Abschlussansicht **„🏆 LEVEL GESCHAFFT!“** erscheint.

### 5.2 Ein Level neu starten

Während des Spiels:

1. **„Ⅱ“** antippen oder **Escape** drücken.
2. Im Pausenbereich **„NEUSTART“** auswählen.

Alternativ nach einem Fehlschlag:

1. **„ERNEUT VERSUCHEN“** auswählen.

### 5.3 Zum Hauptmenü zurückkehren

1. Das Spiel pausieren.
2. **„MENÜ“** im Pausenbereich auswählen.

Oder nach einem Fehlschlag beziehungsweise Levelabschluss:

1. **„MENÜ“** in der entsprechenden Ansicht auswählen.

### 5.4 Fortschritt verfolgen

Während des Spiels zeigt die obere Leiste:

- den aktiven Spielmodus,
- den aktuellen Versuch,
- die Münzzahl,
- **„NORMAL“** oder den Übungsstatus.

Der cyanfarbene Balken unter der Statusleiste zeigt den Fortschritt im Level.

---

## 6. Übungsmodus

### 6.1 Übungsmodus starten

1. Im Hauptmenü **„PRACTICE MODE“** auswählen.
2. Der Übungsstatus wird in der Statusanzeige dargestellt.

Die genaue Auswahl des zu übenden Levels und der vollständige Ablauf nach Betätigen von **„PRACTICE MODE“** sind im gekürzten Quellcode nicht eindeutig erkennbar.

### 6.2 Zweck

Der Modus ist aus der Bezeichnung **„PRACTICE MODE“** und dem Statusfeld **„NORMAL“** beziehungsweise dem separaten Übungsstatus als Trainingsmodus erkennbar. Ob und wie Fehlschläge, Münzen oder Levelabschlüsse im Übungsmodus verändert gespeichert werden, ist im bereitgestellten Auszug nicht vollständig erkennbar.

---

## 7. Level-Editor

### 7.1 Editor öffnen

1. Im Hauptmenü **„LEVEL EDITOR“** auswählen.
2. Der Editor wird als Overlay über dem Spiel angezeigt.
3. Das anfangs ausgewählte Werkzeug ist **„Block“**.

### 7.2 Werkzeug auswählen

1. In der Werkzeugleiste die gewünschte sichtbare Beschriftung auswählen.
2. Die Anzeige **„Werkzeug: …“** aktualisiert sich entsprechend.
3. Das gewählte Werkzeug auf dem Canvas verwenden.

### 7.3 Objekte setzen

Die genaue Zeigerinteraktion zum Platzieren von Objekten ist im gekürzten Quellcode nicht vollständig sichtbar. Sicher bestätigt ist, dass der Editor Blocktypen und besondere Objekte wie Portale, Münzen, Orbs, Pads sowie Schwerkraft- und Geschwindigkeitsobjekte anbietet.

### 7.4 Objekt löschen

1. **„Löschen“** in der Werkzeugleiste auswählen.
2. Das zu entfernende Objekt auf dem Canvas auswählen.

### 7.5 Level testen

1. **„LEVEL TESTEN“** auswählen.
2. Das bearbeitete Level wird spielbar getestet.

### 7.6 Level speichern

1. **„LEVEL SPEICHERN“** auswählen.
2. Das Level wird im lokalen Browser-Speicher abgelegt.

Der genaue Ablauf bei der Rückkehr in den Editor sowie die Frage, ob gespeicherte Inhalte die Levelauswahl im Hauptmenü beeinflussen, sind im Auszug nicht vollständig erkennbar.

### 7.7 Editor schließen

- **„SCHLIESSEN“** auswählen.

---

## 8. Levelübersicht

### 8.1 First Flight

- **Länge:** 5.000
- **Geschwindigkeit:** 6
- **Themenfarbe:** Cyan
- Enthält:
  - Stachel,
  - Sägen,
  - Münzen,
  - ein Orb,
  - Wechsel zwischen Cube, Ship und Ball,
  - einen Boden über die gesamte Länge

### 8.2 Neon Rush

- **Länge:** 6.500
- **Geschwindigkeit:** 7
- **Themenfarbe:** Orange
- Enthält:
  - Stachel,
  - Sägen,
  - ein Pad,
  - Schwerkraftwechsel,
  - Wechsel zwischen Cube, UFO und Wave

### 8.3 Gravity Lab

- **Länge:** 7.200
- **Geschwindigkeit:** 7
- **Themenfarbe:** Violett
- Enthält:
