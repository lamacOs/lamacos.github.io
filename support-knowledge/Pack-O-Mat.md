<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Pack-O-Mat -->
<!-- source-files: ["Pack-O-Mat/index.html"] -->

# Pack-O-Mat – Support-Dokumentation

- **Website-Name:** Pack-O-Mat
- **Vermuteter Zweck:** Pack-O-Mat ist eine browserbasierte Webanwendung zum Erstellen, Anpassen, Speichern und Teilen von Packlisten für Reisen oder Ausflüge.
- **Quellcode-Pfad:** `Pack-O-Mat`
- **Datum der Erstellung:** 22. März 2026
- **Geprüfte Quelldatei:** `Pack-O-Mat/index.html`  
  Der Quellcode-Auszug wurde gekürzt. Aussagen zum Teilen der Packliste sind daher nur für die im Auszug sichtbaren Teile bestätigt.

> **Hinweis zur Quellcode-Basis:** Die Dokumentation beschreibt ausschließlich Funktionen, die im bereitgestellten Quellcode erkennbar sind. Nicht eindeutig belegte Punkte sind ausdrücklich gekennzeichnet.

---

## 1. Überblick

Pack-O-Mat erzeugt aus Reisedatum, Reisedauer, Unterkunft, Klima und Gelände eine Packliste. Die Liste kann anschließend:

- durch eigene Einträge ergänzt werden,
- per Kontrollkästchen als erledigt markiert werden,
- unter einem Namen im Browser gespeichert,
- erneut geladen oder gelöscht,
- als URL-kodierter Freigabelink geteilt,
- zusätzlich als QR-Code dargestellt werden.

Die Website enthält außerdem einen KI-gestützten Kundensupport-Chat. Für dessen Serververbindung wird im Quellcode eine externe Worker-Adresse verwendet. Ein möglicher Geheimniswert wurde, sofern vorhanden, aus Sicherheitsgründen nicht wiedergegeben.

---

## 2. Voraussetzungen

### Technische Voraussetzungen

Für die bestätigten Grundfunktionen benötigt der Besucher:

- einen aktuellen Browser mit JavaScript,
- Zugriff auf die Website,
- für das Laden der Schriftart „Inter“ eine Internetverbindung,
- für die QR-Code-Darstellung eine Internetverbindung, da eine externe JavaScript-Bibliothek eingebunden wird.

Die QR-Code-Bibliothek wird von einem externen CDN geladen. Fällt diese Ressource aus, kann die QR-Code-Erzeugung beeinträchtigt sein. Das Erstellen, Bearbeiten und lokale Speichern der Packliste ist davon nach dem Quellcode nicht grundsätzlich abhängig.

### Empfohlene Vorbereitung

Vor der Nutzung sollten folgende Angaben bekannt sein:

- Reisedatum,
- Reisedauer in Tagen,
- Art der Unterkunft,
- erwartetes Klima,
- Art des Geländes.

---

## 3. Aufbau der Website

### 3.1 Kopfbereich

Ganz oben befindet sich eine feste Navigationsleiste mit:

- dem Pack-O-Mat-Logo,
- der Bezeichnung **„Pack-O-Mat“**,
- der Schaltfläche **„🌙 / ☀️“** zum Wechsel zwischen hellem und dunklem Erscheinungsbild.

Die Navigationsleiste bleibt beim Scrollen sichtbar. Auf Mobilgeräten werden Abstände und Schriftgrößen automatisch angepasst.

### 3.2 „Packliste Generator“

Der erste große Bereich heißt **„Packliste Generator“**. Er enthält die Eingaben:

| Bezeichnung | Eingabefeld | Auswahlmöglichkeiten bzw. Standardwert |
|---|---|---|
| Reisedatum | Datumsfeld | frei wählbar |
| Reisedauer (Tage) | Zahlenfeld | Standardwert `1`, Mindestwert `1` |
| Unterkunft | Auswahlfeld | „Hotel / Ferienwohnung“, „Zelt / Camping“ |
| Klima | Auswahlfeld | „Heiß“, „Warm“, „Mittel“, „Kalt“ |
| Gelände | Auswahlfeld | „Flach“, „Hügelig“, „Bergig“, „Stadt“, „Wald“ |

Darunter befindet sich die orange Schaltfläche **„Packliste erstellen“**.

### 3.3 „Deine Packliste“

Dieser Bereich zeigt entweder:

- den Hinweis **„Noch keine Packliste erstellt.“**, oder
- eine Liste mit Kontrollkästchen für jeden Packlisteneintrag.

Unter der Liste wird die Gesamtzahl der Einträge angezeigt.

### 3.4 „Eigenes Item hinzufügen“

Hier kann ein zusätzlicher Gegenstand eingegeben werden:

1. Eingabefeld mit dem Platzhalter **„z. B. Kopfhörer“**
2. Schaltfläche **„Hinzufügen“**

Die Eingabe kann auch mit der Eingabetaste bestätigt werden. Leere Eingaben werden nicht übernommen.

### 3.5 „Packliste speichern“

In diesem Bereich befinden sich:

- ein Eingabefeld mit dem Platzhalter **„Name der Liste“**,
- die Schaltfläche **„Speichern“**.

Gespeicherte Listen erscheinen anschließend im Bereich **„Gespeicherte Listen“**.

### 3.6 „Packliste teilen“

Der Bereich enthält:

- den Hinweis, dass die Packliste als Link kodiert wird und über einen QR-Code geöffnet werden kann,
- die Schaltfläche **„Link erstellen“**,
- nach erfolgreicher Erstellung einen Bereich **„Freigabelink“** mit einem schreibgeschützten Eingabefeld,
- die Schaltfläche **„Link kopieren“**,
- eine QR-Code-Anzeige.

Der Link und der QR-Code werden erst sichtbar, nachdem **„Link erstellen“** betätigt wurde.

### 3.7 „Gespeicherte Listen“

Gespeicherte Einträge werden als Schaltflächen mit dem jeweiligen Listennamen angezeigt. Neben jeder Liste befindet sich eine Löschen-Schaltfläche mit dem Symbol **„🗑“**.

### 3.8 Fußbereich

Der Footer enthält den Hinweis **„© 2026 lamacHub“**.

---

## 4. Bedienung: Packliste erstellen

### Schritt 1: Reisedatum auswählen

1. Öffnen Sie den Bereich **„Packliste Generator“**.
2. Klicken Sie in das Feld **„Reisedatum“**.
3. Wählen Sie das Datum über die Datumsauswahl des Browsers aus.

Das Datum ist erforderlich.

### Schritt 2: Reisedauer festlegen

1. Klicken Sie in das Feld **„Reisedauer (Tage)“**.
2. Geben Sie die Anzahl der Reisetage ein.
3. Der Wert muss mindestens `1` betragen.

Die Reisedauer beeinflusst sowohl die Jahreszeitenermittlung als auch die Basis-Einträge für Unterwäsche und Socken. Diese werden in der Liste als „je Tag 1x“ ausgewiesen; im Quellcode wird jedoch kein konkreter Multiplikator berechnet.

### Schritt 3: Unterkunft auswählen

Wählen Sie eine der folgenden Optionen:

- **„Hotel / Ferienwohnung“**
- **„Zelt / Camping“**

Bei der Auswahl „Zelt / Camping“ werden zusätzliche Campingausrüstung und ein Zeckenzangen-Hinweis aufgenommen. Bei der Auswahl „Hotel / Ferienwohnung“ werden Hausschuhe und Ohrstöpsel vorgeschlagen.

### Schritt 4: Klima auswählen

Wählen Sie:

- **„Heiß“**
- **„Warm“**
- **„Mittel“**
- **„Kalt“**

Die Klimawahl beeinflusst zusätzliche Empfehlungen. Bei „Heiß“ werden beispielsweise Sonnenhut sowie Elektrolyte beziehungsweise Wasserflaschen ergänzt. Bei „Kalt“ kommen unter anderem eine dicke Jacke und eine alternative Wärmflasche hinzu.

### Schritt 5: Gelände auswählen

Verfügbar sind:

- **„Flach“**
- **„Hügelig“**
- **„Bergig“**
- **„Stadt“**
- **„Wald“**

Für „Bergig“, „Stadt“ und „Wald“ werden zusätzliche Empfehlungen angezeigt. Für „Flach“ und „Hügelig“ ist im Quellcode keine zusätzliche geländespezifische Ergänzung hinterlegt.

### Schritt 6: Packliste erzeugen

Klicken Sie auf **„Packliste erstellen“**.

Anschließend werden die Empfehlungen im Bereich **„Deine Packliste“** angezeigt.

---

## 5. Welche Einträge werden erzeugt?

Die folgenden Basis-Einträge werden bei jeder gültigen Erstellung hinzugefügt:

- Unterwäsche (je Tag 1x)
- Socken (je Tag 1x)
- Zahnbürste & Zahnpasta
- Ladekabel
- Reisepass / Personalausweis
- Geldbörse / Kreditkarte

### Jahreszeitabhängige Einträge

Die Jahreszeit wird aus dem Reisedatum und der Dauer berechnet. Eine Reise, die mehrere Monate oder Jahreszeiten umfasst, kann entsprechend mehrere Jahreszeiten berücksichtigen.

| Jahreszeit | Zusätzliche Einträge |
|---|---|
| Frühling | T-Shirts, Shorts, Sonnencreme, Sonnenbrille |
| Sommer | T-Shirts, Shorts, Sonnencreme, Sonnenbrille |
| Herbst | Zwischenjacke, Lange Hosen |
| Winter | Warme Jacke, Schal & Mütze, Handschuhe, Thermounterwäsche |

Bei Frühling oder Sommer werden die gleichen Kleidungs- und Sonnenschutz-Einträge ergänzt.

### Klimabedingte Einträge

| Auswahl | Zusätzliche Einträge |
|---|---|
| Heiß | Sonnenhut, Elektrolyte / Wasserflaschen |
| Kalt | Dicke Jacke, Wärmflaschen-Alternative |

Für „Warm“ und „Mittel“ sind keine zusätzlichen klimaabhängigen Einträge im Quellcode hinterlegt.

### Unterkunftsabhängige Einträge

| Auswahl | Zusätzliche Einträge |
|---|---|
| Hotel / Ferienwohnung | Hausschuhe, Ohrstöpsel |
| Zelt / Camping | Zelt, Schlafsack, Isomatte / Luftmatratze, Campingkocher + Gas, Besteck, Taschenlampe / Stirnlampe, Zeckenzange |

### Geländeabhängige Einträge

| Auswahl | Zusätzliche Einträge |
|---|---|
| Bergig | Wanderschuhe, Wanderstöcke, Erste-Hilfe-Set, Karte / GPS |
| Wald | Insektenschutz, Erste-Hilfe-Set, Kompass |
| Stadt | Komfortschuhe, Stadtführer / Maps-App |
| Flach | keine zusätzlichen geländespezifischen Einträge |
| Hügelig | keine zusätzlichen geländespezifischen Einträge |

---

## 6. Packliste bearbeiten

### 6.1 Einträge als erledigt markieren

1. Erstellen Sie zunächst eine Packliste.
2. Klicken Sie in der Liste auf das Kontrollkästchen neben dem betreffenden Eintrag.

Der Text des Eintrags wird dann durchgestrichen und abgedunkelt. Ein erneuter Klick auf das Kontrollkästchen hebt die Markierung wieder auf.

**Bestätigt:** Der Häkchenstatus wird sichtbar dargestellt.

**Im Quellcode nicht eindeutig erkennbar:** Ob der Erledigt-Status beim Speichern dauerhaft gespeichert wird. Im sichtbaren JavaScript wird die Liste beim Speichern als Textarray übernommen; der Checkbox-Status ist darin nicht separat erkennbar.

### 6.2 Eigenes Item hinzufügen

1. Geben Sie im Bereich **„Eigenes Item hinzufügen“** einen Gegenstand ein, zum Beispiel „Kopfhörer“.
2. Klicken Sie auf **„Hinzufügen“**.

Alternativ können Sie die Eingabetaste drücken.

Das eigene Item wird am Ende der aktuellen Packliste eingefügt. Der Eintrag erscheint zunächst als offen.

---

## 7. Packlisten speichern und verwalten

### 7.1 Packliste speichern

1. Erstellen Sie eine Packliste oder ergänzen Sie sie um eigene Einträge.
2. Geben Sie im Bereich **„Packliste speichern“** einen Namen in das Feld **„Name der Listen“** ein.
3. Klicken Sie auf **„Speichern“**.

Nach dem Speichern:

- wird der Listenname im Bereich **„Gespeicherte Listen“** angezeigt,
- das Eingabefeld für den Namen wird geleert,
- eine Bestätigungsmeldung erscheint.

### 7.2 Gespeicherte Liste laden

1. Öffnen Sie den Bereich **„Gespeicherte Listen“**.
2. Klicken Sie auf die Schaltfläche mit dem gewünschten Listennamen.

Die gespeicherten Einträge werden danach im Bereich **„Deine Packliste“** angezeigt.

### 7.3 Gespeicherte Liste löschen

1. Klicken Sie neben der entsprechenden Liste auf **„🗑“**.
2. Bestätigen Sie die Sicherheitsabfrage.
3. Wird die Bestätigung nicht vorgenommen, bleibt die Liste unverändert bestehen.

Nach dem Löschen wird die Liste aus dem lokalen Speicher entfernt.

### 7.4 Überschreiben einer Liste mit gleichem Namen

Im Quellcode wird eine neue Liste unter dem eingegebenen Namen gespeichert. Existiert bereits eine Liste mit demselben Namen, wird deren Inhalt durch die neue Liste ersetzt.

Vor dem Speichern erfolgt keine sichtbare Rückfrage zur Überschreibung.

---

## 8. Packliste teilen

### 8.1 Freigabelink erstellen

1. Erstellen Sie eine Packliste.
2. Klicken Sie auf **„Link erstellen“**.
3. Der Bereich **„Freigabelink“** wird sichtbar.
4. Das Feld **„Freigabelink“** enthält einen URL-kodierten Link.
5. Der QR-Code wird unter **„QR-Code“** dargestellt.

Die Beschreibung der Website weist darauf hin, dass die Packliste als Link kodiert wird. Im gekürzten Quellcode-Auszug ist nicht vollständig erkennbar, welche konkrete Serialisierungs- und URL-Form verwendet wird.

### 8.2 Link kopieren

1. Klicken Sie auf **„Link kopieren“**.
2. Der Link soll dadurch in die Zwischenablage kopiert werden.

**Im Quellcode nicht eindeutig erkennbar:** Die genaue Erfolgs- oder Fehlermeldung nach dem Kopiervorgang.

### 8.3 QR-Code verwenden

Der QR-Code stellt offenbar denselben Freigabelink dar. Ein Smartphone kann den Code in der Regel mit einer Kamera scannen und öffnen.

Voraussetzung ist, dass die eingebundene externe QR-Code-Bibliothek erfolgreich geladen wurde.

### Datenschutz beim Teilen

Der Freigabelink enthält die Packlistendaten offenbar direkt in der URL. Dadurch können die Daten in folgenden Situationen sichtbar oder weitergegeben werden:

- beim Kopieren in andere Anwendungen,
- in der Browser-Historie,
- in Chat- oder E-Mail-Anwendungen,
- beim Weitergeben des Links,
- beim Scannen beziehungsweise Weiterleiten des QR-Codes.

Es ist daher ratsam, den Link
