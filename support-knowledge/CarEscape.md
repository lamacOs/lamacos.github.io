<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: CarEscape -->
<!-- source-files: ["CarEscape/index.html"] -->

# CarEscape – Support-Dokumentation

**Vermuteter Zweck:** CarEscape ist ein browserbasiertes Fahrzeug-Logikspiel. Nutzerinnen und Nutzer können vorgefertigte Level spielen, Level durchsuchen, eigene Level im Editor erstellen, Level mit einem KI-Generator erzeugen, Levels speichern und teilen sowie das Spielfeld als Bild exportieren.  
**Quellcode-Pfad:** `CarEscape`  
**Datum der Erstellung:** 2. März 2026

> **Hinweis zum Quellcode:** Der bereitgestellte Auszug ist gekürzt. Die folgenden Angaben beschreiben die tatsächlich sichtbaren und im Auszug erkennbaren Funktionen. Abläufe, die nicht eindeutig belegt sind, sind entsprechend gekennzeichnet.

---

## 1. Was ist CarEscape?

CarEscape zeigt ein rechteckiges Spielfeld mit einem Raster. Fahrzeuge sollen durch Verschieben freie Wege öffnen. Im Beispiel „CarEscape – Einsteiger“ lautet die Aufgabe:

> „Bewege das Polizeiauto zum Ausgang.“

Die Website ist auf Deutsch gestaltet und unterstützt sowohl Desktop- als auch mobile Browser. Neben dem Spiel enthält sie Bereiche zum Entdecken, Erstellen und Verwalten von Leveln sowie einen Hilfe- und Support-Bereich.

---

## 2. Voraussetzungen und technische Hinweise

### Bestätigte Voraussetzungen

- Ein moderner Browser mit JavaScript-Unterstützung.
- Eine Internetverbindung für Funktionen, die Inhalte oder Schriftarten von externen Servern laden. Die Website bindet Schriftarten über Google Fonts ein.
- Für die Darstellung der Fahrzeugbilder müssen die zugehörigen Dateien im Verzeichnis `assets` vorhanden sein.
- Für die KI-Levelgenerierung ist im Quellcode eine erreichbare KI-Schnittstelle beziehungsweise ein serverseitiger Generator erforderlich. Die konkrete Implementierung ist im gekürzten Auszug nicht eindeutig erkennbar.

### Responsive Darstellung

Die Oberfläche passt sich an die verfügbare Breite an:

- Ab 901 Pixeln werden die Hauptbereiche nebeneinander angezeigt.
- Auf kleineren Bildschirmen werden die Panels untereinander dargestellt.
- Unter 521 Pixeln werden die Levelkarten einspaltig und die Schaltflächen im Kopfbereich breiter angezeigt.
- Unter 361 Pixeln wird das Fahrzeuginventar zweispaltig dargestellt.

### Tastaturbedienung

Im Spielfeld funktionieren laut sichtbarem Hinweis außerdem die Pfeiltasten.

Zusätzlich wird im Editor die Taste **R** zum Drehen eines ausgewählten Fahrzeugs genannt.

Weitere Tastenkürzel sind im Auszug nicht eindeutig erkennbar.

---

# 3. Aufbau der Website

## 3.1 Kopfbereich

Oben links werden das Logo und der Name **CarEscape** angezeigt. Darunter steht der Untertitel:

> „Escape the grid. Build your own challenge.“

Oben rechts befinden sich drei Schaltflächen:

- **☾ Design** – wechselt zwischen heller und dunkler Darstellung.
- **Anmelden** – öffnet den im gekürzten Quellcode nicht vollständig sichtbaren Kontenbereich.
- **＋ Eigenes Level** – führt in den Bereich **Level erstellen**.

Die genaue Anmelde- und Registrierungslogik ist im gekürzten Auszug nicht eindeutig erkennbar.

## 3.2 Hauptnavigation

Die Hauptnavigation enthält die Reiter:

1. **Spielen**
2. **Level entdecken**
3. **Level erstellen**
4. **Meine Level**
5. **Hilfe & Support**
6. **Admin** – dieser Reiter ist standardmäßig ausgeblendet.

Ob **Admin** nur für bestimmte Benutzerkonten sichtbar wird, ist im gekürzten Auszug nicht eindeutig erkennbar. Es ist jedoch das Vorhandensein eines separaten Admin-Bereichs bestätigt.

---

# 4. Spielen

## 4.1 Spielbereich öffnen

1. Wählen Sie oben den Reiter **Spielen**.
2. Das aktuelle Level wird mit Titel, Untertitel und Schwierigkeitsgrad angezeigt.
3. Das Spielfeld befindet sich links. Rechts daneben steht der **KI-Levelgenerator**.

## 4.2 Fahrzeug auswählen

1. Tippen Sie im Spielfeld auf ein Fahrzeug.
2. Das ausgewählte Fahrzeug erhält eine cyanfarbene Umrandung.
3. Verwenden Sie anschließend die sichtbaren Steuerflächen:
   - **←** für „Zurück bewegen“
   - **→** für „Vorwärts bewegen“

Alternativ können Sie die Pfeiltasten Ihrer Tastatur verwenden.

Die genaue Logik, ob jedes Fahrzeug nur in seiner jeweiligen Fahrtrichtung bewegt werden kann und wie die Rückwärtsrichtung bestimmt wird, ist im gekürzten Auszug nicht vollständig eindeutig erkennbar. Der sichtbare Hinweis bestätigt jedoch, dass Fahrzeuge mit „Zurück“ und „Vorwärts“ bewegt werden können.

## 4.3 Züge und Neustart

Im unteren Bereich des Panels werden die aktuelle Anzahl der Züge und der Ausgangszustand angezeigt:

- **Züge: 0** wird nach einem Neustart zurückgesetzt.
- Mit **Neu starten** wird das aktuelle Level erneut in den Ausgangszustand versetzt.
- Der Statusbereich **gameStatus** meldet Meldungen zum Spielverlauf.

Ob und wie ein Highscore, eine Bestzeit oder eine Erfolgsmeldung gespeichert wird, ist im gekürzten Auszug nicht eindeutig erkennbar.

## 4.4 Gewinnen

Der Ausgang ist am rechten Rand des Spielfelds durch einen grünen Bereich markiert. Um das Level zu lösen, muss das Polizeiauto den Ausgang erreichen.

Die technische Definition der vollständigen Lösungsbedingung ist im gekürzten Auszug nicht eindeutig erkennbar. Die Aufgabenbeschreibung nennt jedoch ausdrücklich das Polizeiauto und den Ausgang.

## 4.5 Level teilen

1. Klicken Sie auf **Teilen**.
2. Die Website öffnet den im gekürzten Auszug nicht vollständig sichtbaren Teilungsbereich.
3. Der genaue Inhalt – Link, Freigabecode oder Einbettung – ist im Auszug nicht eindeutig erkennbar.

## 4.6 Bild speichern

1. Klicken Sie auf **Bild speichern**.
2. Das aktuelle Spielfeld soll als Bild exportiert beziehungsweise heruntergeladen werden.

Das konkrete Dateiformat und der Dateiname sind im gekürzten Auszug nicht eindeutig erkennbar.

## 4.7 Level speichern

1. Klicken Sie auf **Level speichern**.
2. Das aktuelle Level wird für die spätere Nutzung gespeichert.

Ob das Speichern ohne Anmeldung möglich ist und wo gespeicherte Level erscheinen, ist im gekürzten Auszug nicht eindeutig erkennbar. Der Navigationsbereich **Meine Level** deutet darauf hin, dass gespeicherte Level dort verwaltet werden können.

---

# 5. KI-Levelgenerator

## 5.1 Levelidee eingeben

1. Öffnen Sie den Reiter **Spielen**.
2. Lesen Sie im rechten Panel die Überschrift **KI-Levelgenerator**.
3. Geben Sie im Feld **Deine Level-Idee** eine Beschreibung ein, beispielsweise:
   - „Ein schwieriges Level mit vielen kleinen Autos, aber nur einem freien Weg zum Ausgang.“
4. Wählen Sie unter **Schwierigkeit** eine der folgenden Optionen:
   - Leicht
   - Mittel
   - Schwer
   - Extrem
5. Wählen Sie unter **Fahrzeuge** einen ungefähren Bereich:
   - **6–8**
   - **9–12**
   - **13–16**
6. Klicken Sie auf **✦ Level mit KI erstellen**.

## 5.2 Ausgabe und Validierung

- Die KI erhält laut sichtbarem Hinweis die CarEscape-Regeln automatisch.
- Die Ausgabe muss ein gültiges CarEscape-Level enthalten.
- Unvollständige oder ungültige Ergebnisse werden abgelehnt.
- Statusmeldungen erscheinen im Bereich **aiStatus**.

Ob ein erzeugtes Level direkt spielbar gespeichert, geteilt oder nur als Entwurf übernommen wird, ist im gekürzten Auszug nicht eindeutig erkennbar.

### Datenschutzhinweis

Wenn Sie eine Levelidee eingeben, wird diese zur Generierung an die verwendete KI-Verarbeitung übermittelt. Die konkrete Empfängeradresse, Speicherdauer und Löschregeln sind im Quellcode-Auszug nicht eindeutig erkennbar. Verwenden Sie daher keine vertraulichen oder personenbezogenen Informationen in der Levelbeschreibung.

---

# 6. Level entdecken

## 6.1 Übersicht

Wählen Sie den Reiter **Level entdecken**. Der Bereich enthält:

- die Überschrift **Level entdecken**
- die Schaltfläche **Aktualisieren**
- ein Suchfeld mit dem Platzhalter „Level, Serie oder Ersteller suchen…“
- einen Filter **Alle Schwierigkeiten** mit den Optionen:
  - Leicht
  - Mittel
  - Schwer
  - Extrem
- einen Kartenbereich für gefundene Level
- einen Statusbereich für Lade- und Fehlermeldungen

## 6.2 Level suchen und filtern

1. Geben Sie einen Suchbegriff in das Suchfeld ein.
2. Wählen Sie bei Bedarf im Dropdown eine Schwierigkeit.
3. Die Ergebniskarten werden entsprechend gefiltert.

Welche Datenfelder genau durchsucht werden, ist im gekürzten Auszug nicht vollständig erkennbar. Der Platzhalter nennt Level, Serie und Ersteller.

## 6.3 Ergebnisse aktualisieren

Klicken Sie auf **Aktualisieren**, um die Liste neu zu laden.

## 6.4 Levelkarten

Die Karten enthalten laut Layout mindestens:

- einen Levelnamen
- eine Beschreibung
- eine Schwierigkeitsangabe
- weitere Chips oder Metadaten
- Schaltflächen zum Öffnen beziehungsweise Spielen und eventuell weiteren Aktionen

Die vollständige Aktionsliste einer Karte ist im gekürzten Auszug nicht eindeutig erkennbar.

---

# 7. Level erstellen

## 7.1 Grundlayout

Wählen Sie den Reiter **Level erstellen**. Der Editor besitzt zwei Hauptbereiche:

- links **Level-Editor**
- rechts **Speichern & veröffentlichen**

Das Spielfeld besitzt ein **6 × 6-Raster**. Fahrzeuge dürfen sich nicht überlappen.

## 7.2 Leveldaten eingeben

### Schritt 1: Name und Eigenschaften festlegen

1. Geben Sie in **Levelname** einen Namen ein.
   - Maximallänge: 70 Zeichen.
   - Beispielplatzhalter: „Mein CarEscape-Level“.
2. Wählen Sie unter **Schwierigkeit**:
   - Leicht
   - Mittel
   - Schwer
   - Extrem
3. Geben Sie optional in **Serie** einen Seriennamen ein.
   - Maximallänge: 50 Zeichen.
   - Beispielplatzhalter: „Eigene Serie“.

## 7.3 Fahrzeuge auswählen und platzieren

1. Wählen Sie im **Fahrzeug-Inventar** ein Fahrzeug aus.
2. Tippen Sie auf ein Feld im Editorspielfeld.
3. Das Fahrzeug wird auf diesem Feld platziert.

### Bestätigte Inventarregeln

- Jedes kleine Auto ist **einmal** vorhanden.
- Jedes große Auto ist **zweimal** vorhanden.
- Ein Fahrzeug darf die Größe eines oder zweier Felder einnehmen.
- Fahrzeuge dürfen sich nicht überlappen.
- Die Fahrzeugbilder werden passend zur Ausrichtung dargestellt.

### Bereits platziertes Fahrzeug bearbeiten

1. Tippen Sie auf ein bereits platziertes Fahrzeug, um es auszuwählen.
2. Tippen Sie auf ein freies Feld, um es dorthin zu verschieben.
3. Verwenden Sie **↻ Drehen** oder die Taste **R**, um zwischen waagerechter und senkrechter Ausrichtung zu wechseln.
4. Verwenden Sie **Ausgewähltes entfernen**, um das ausgewählte Fahrzeug vom Spielfeld zu entfernen.

## 7.4 Editor leeren

Mit **Editor leeren** werden die platzierten Fahrzeuge aus dem Editor entfernt.

Ob dabei auch Name, Beschreibung, Serie und Schwierigkeit zurückgesetzt werden, ist im gekürzten Auszug nicht eindeutig erkennbar.

## 7.5 Lösbarkeit testen

1. Klicken Sie auf **Lösbarkeit testen**.
2. Die Website prüft, ob das Level gelöst werden kann.
3. Das Ergebnis wird im Bereich **editorStatus** angezeigt.

Die verwendete Prüfmethode und die genaue Formulierung der Erfolgs- oder Fehlermeldung sind im gekürzten Auszug nicht eindeutig erkennbar.

## 7.6 Sichtbarkeit auswählen

Im Bereich **Speichern & veröffentlichen** stehen folgende Optionen zur Verfügung:

- **Privat – nur ich**
- **Mit Link erreichbar**
- **Öffentlich in der Levelsuche**

### Bedeutung der Sichtbarkeiten

- **Privat:** Das Level ist für andere nicht sichtbar.
- **Mit Link erreichbar:** Personen mit dem entsprechenden Link können das Level erreichen.
- **Öffentlich:** Das Level kann in der Levelsuche gefunden werden.

Ob die öffentliche Veröffentlichung ein Benutzerkonto voraussetzt und ob ein Moderationsprozess stattfindet, ist im gekürzten Auszug nicht eindeutig erkennbar.

## 7.7 Beschreibung eingeben

Geben Sie in **Beschreibung** ein, was das Level besonders macht. Das Feld ist ein mehrzeiliges Textfeld.

## 7.8 Speichern und veröffentlichen

Die weitere Schaltfläche des Veröffentlichungsbereichs ist im gekürzten Quellcode nicht vollständig sichtbar. Vermutlich dient sie dem Speichern oder Veröffentlichen; die genaue Bezeichnung und der vollständige Ablauf sind im vorliegenden Auszug nicht eindeutig erkennbar.

---

# 8. Meine Level

Der Navigationsreiter **Meine Level** ist im Quellcode vorhanden. Im gekürzten Auszug ist jedoch nicht zu erkennen, welche Funktionen dort konkret angezeigt werden.

Bestätigt ist lediglich, dass CarEscape diese Ansicht anbietet. Ob dort gespeicherte, veröffentlichte, private oder archivierte Level erscheinen, ist im Quellcode-Auszug nicht eindeutig erkennbar.

---

# 9. Hilfe & Support

Die Website besitzt einen eigenen Reiter **Hilfe & Support**. Der vollständige Inhalt dieser Ansicht ist im gekürzten Auszug nicht sichtbar.

Die Navigation bestätigt, dass CarEscape Hilfen bereitstellt. Welche einzelnen Artikel, Kontaktmöglichkeiten oder Bedienungsanleitungen dort enthalten sind, ist im Quellcode-A
