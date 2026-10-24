<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: cw-builder -->
<!-- source-files: ["cw-builder/index.html"] -->

# cw-builder — Support-Dokumentation

**Website-Name:** cw-builder  
**Vermuteter Zweck:** Visueller Website-Builder zum Zusammenstellen einer Website aus vorgefertigten Inhaltsblöcken wie Navigation, Hero-Bereich, Text, Funktions-Grid, Testimonials, Preise, Statistiken, CTA, FAQ und Kontaktformular.  
**Quellcode-Pfad:** `cw-builder`  
**Datum der Erstellung:** 14. August 2025

> **Hinweis zur Quellcode-Grundlage:** Die vorliegenden Quellcode-Auszüge sind ausdrücklich unvollständig. Die Dokumentation beschreibt ausschließlich Funktionen, die im sichtbaren Code erkennbar sind. Verhalten, das erst in den nicht enthaltenen JavaScript- oder HTML-Teilen definiert wird, ist als **„Im Quellcode nicht eindeutig erkennbar“** gekennzeichnet.

---

## 1. Überblick

Bei **cw-builder** handelt es sich um eine einzelne HTML-Seite mit einem dreispaltigen Builder-Layout:

| Bereich | Funktion |
|---|---|
| Kopfbereich | Logo, Ansichtsauswahl, Design umschalten, Aktionsschaltfläche |
| Linke Seitenleiste | Blockkategorien und Auswahl eines Inhaltsbereichs |
| Mittlere Arbeitsfläche | Vorschau der zusammengestellten Website |
| Rechte Seitenleiste | Im Auszug nicht vollständig erkennbar; im Layout als Einstellbereich vorgesehen |

Die Seite verwendet ein oranges Markendesign und unterstützt einen hellen sowie einen dunklen Anzeigezustand.

---

## 2. Voraussetzungen

### 2.1 Technische Voraussetzungen

- Ein aktueller Webbrowser mit Unterstützung für moderne CSS-Funktionen, darunter:
  - CSS Grid
  - CSS Custom Properties
  - `backdrop-filter`
  - `clamp()`-ähnliche responsive Layouts
- Für die vollständige Darstellung der Schriften wird eine Internetverbindung benötigt, da Google Fonts über `fonts.googleapis.com` geladen werden.
- JavaScript-Ausführung im Browser, sofern die nicht mitgelieferten Skripte für die Builder-Funktionen erforderlich sind.

### 2.2 Aus dem Quellcode nicht eindeutig erkennbar

- Ob die Seite über einen lokalen Webserver, einen Hosting-Dienst oder direkt per Dateiöffnung betrieben wird.
- Ob ein Benutzerkonto, eine Anmeldung oder eine Authentifizierung erforderlich ist.
- Ob eine persistente Speicherung der Website-Einstellungen existiert.
- Welche Browser konkret unterstützt werden.

---

## 3. Aufbau der Seite

### 3.1 Kopfbereich

Der Kopfbereich bleibt beim Scrollen am oberen Rand sichtbar und enthält:

- **Logo „cw/“** mit dem Zusatz „Website-Builder Ultimate“
- **Ansichtsauswahl** mit den Schaltflächen:
  - „Desktop“
  - „Tablet“
  - „Mobile“
- **Design-Umschalter** als Symbolschaltfläche
- Eine weitere Schaltfläche rechts im Kopfbereich

Die sichtbaren CSS-Stile zeigen, dass eine der Ansichtsschaltflächen den Zustand `active` erhält. Welche Ansicht beim Laden aktiv ist, ist im Auszug nicht eindeutig erkennbar.

### 3.2 Linke Seitenleiste

Die linke Seitenleiste enthält:

1. Ein Suchfeld mit der Klasse `search-input`
2. Überschriften für Blockkategorien mit der Klasse `block-cat-title`
3. Schaltflächen zur Auswahl eines Bereichs mit der Klasse `slot-pick-btn`

Jede Auswahlschaltfläche enthält:

- ein Symbol
- einen kurzen Namen
- eine kurze Beschreibung

Die genaue Liste aller Kategorien und Bereiche ist im gekürzten Quellcode nicht vollständig sichtbar.

### 3.3 Mittlere Arbeitsfläche

Die Arbeitsfläche enthält eine zentrale Vorschau mit der Klasse `canvas`. Diese besitzt:

- eine maximale Standardbreite von **960 px**
- einen weißen bzw. im Dunkelmodus dunklen Hintergrund
- abgerundete Ecken und einen Schatten
- eine Mindesthöhe von **640 px**
- Innenabstände von **24 px**

Für die Ansichten sind folgende Breiten definiert:

| Ansicht | Maximale Breite | Innenabstand |
|---|---|---|
| Desktop | 960 px | 24 px |
| Tablet | 768 px | 24 px |
| Mobile | 390 px | 16 px |

Solange kein Block eingefügt wurde, zeigt die Arbeitsfläche einen leeren Zustand mit:

- einem Symbol
- der Überschrift **„Willkommen beim Website-Builder“** beziehungsweise einer ähnlich formulierten Begrüßung
- einem erklärenden Text

Der genaue Wortlaut des leeren Zustands ist im gekürzten Auszug nicht vollständig sichtbar.

### 3.4 Rechte Seitenleiste

Die rechte Seitenleiste ist im Layout als eigener Bereich mit eigenem Scrollbereich vorhanden. Ihr Inhalt ist im vorliegenden Auszug nicht enthalten.

**Im Quellcode nicht eindeutig erkennbar:**
- Welche Einstellungen dort angezeigt werden.
- Ob Einstellungen pro Block oder für die gesamte Seite gelten.
- Ob Formulare, Live-Bearbeitung oder Exportfunktionen dort enthalten sind.

---

## 4. Bedienung Schritt für Schritt

### 4.1 Design zwischen hell und dunkel umschalten

1. Öffnen Sie die Website.
2. Klicken Sie oben rechts auf die **Symbolschaltfläche neben der Ansichtsauswahl**.
3. Die Seite wechselt zwischen dem hellen und dem dunklen Farbschema.

**Bestätigt:** Der Umschalter setzt das Attribut `data-theme="dark"` und passt Hintergrund-, Text- und Rahmenfarben an.

**Nicht eindeutig erkennbar:** Ob die gewählte Einstellung dauerhaft gespeichert und bei einem späteren Besuch wiederhergestellt wird.

### 4.2 Vorschaugröße ändern

1. Wählen Sie im Kopfbereich die Ansicht **„Desktop“**, **„Tablet“** oder **„Mobile“**.
2. Die mittlere Vorschau wird unmittelbar auf die entsprechende Breite umgestellt.

Die Ansicht beeinflusst die Breite der Vorschau und bei „Mobile“ zusätzlich deren Innenabstände. Die eigentliche Website wird dabei nicht veröffentlicht.

### 4.3 Einen Inhaltsbereich auswählen

1. Suchen Sie links in der Seitenleiste nach der gewünschten Kategorie.
2. Klicken Sie auf die entsprechende Schaltfläche, zum Beispiel auf eine Option mit einem Symbol, einem Namen und einer Beschreibung.
3. Die Vorschau verwendet den ausgewählten Bereich.

**Im Quellcode nicht eindeutig erkennbar:** Ob die Schaltfläche einen vorhandenen Bereich öffnet, einen neuen Bereich anlegt oder beides tut.

### 4.4 Einen Block in der Vorschau auswählen

1. Fahren Sie mit der Maus über einen angezeigten Block.
2. Klicken Sie den Block an, um ihn auszuwählen.
3. Der ausgewählte Block erhält eine orangefarbene Umrandung.
4. Eine kleine Werkzeugleiste erscheint rechts oberhalb des Blocks.

Die Werkzeugleiste enthält mehrere Symbolschaltflächen. Aus dem HTML-Auszug sind eindeutig:

- eine Schaltfläche mit nach oben gerichtetem Pfeil
- eine Schaltfläche mit nach unten gerichtetem Pfeil
- eine Schaltfläche mit Papierkorb-Symbol

**Bestätigt:** Es existieren Funktionen zum Verschieben eines Blocks nach oben beziehungsweise nach unten sowie zum Löschen.

### 4.5 Einen Block löschen

1. Wählen Sie den gewünschten Block in der Vorschau aus.
2. Klicken Sie in der erscheinenden Werkzeugleiste auf das **Papierkorb-Symbol**.
3. Der Block wird aus der Vorschau entfernt.

Vor dem Löschen ist im Quellcode kein Bestätigungsdialog erkennbar.

### 4.6 Einen Block verschieben

1. Wählen Sie den gewünschten Block aus.
2. Klicken Sie auf das **Pfeil-nach-oben-Symbol**, um ihn nach oben zu verschieben.
3. Klicken Sie auf das **Pfeil-nach-unten-Symbol**, um ihn nach unten zu verschieben.

### 4.7 Textblöcke formatieren

Im Stilbereich des Textblocks sind folgende HTML-Elemente vorgesehen:

- Überschriften der Ebenen `h1`, `h2` und `h3`
- Absätze
- Links
- Inline-Code
- Codeblöcke
- Aufzählungen
- Nummerierungen
- Zitate

Diese Elemente werden innerhalb des Textblocks unterschiedlich formatiert. Links erhalten zum Beispiel eine orangefarbene Unterstreichung, Codeblöcke einen eigenen Hintergrund und Zitate eine orangefarbene Linie links.

**Im Quellcode nicht eindeutig erkennbar:** Ob diese Textformatierungen über einen Rich-Text-Editor bedienbar sind oder über den im Auszug nicht enthaltenen HTML-Code fest vorgegeben werden.

---

## 5. Sichtbare Inhaltsblöcke

### 5.1 Navigationsleiste

Gestaltet wird eine horizontale Navigationsleiste mit:

- einem Logo- oder Markenbereich links
- mehreren Navigationslinks
- einer hervorgehobenen Aktionsschaltfläche rechts

Die Links und die Schaltfläche können bei geringer Breite umbrechen.

### 5.2 Hero-Bereich

Der Hero-Bereich ist zentriert und enthält:

- eine optionale Badge-Zeile
- eine Hauptüberschrift
- einen Beschreibungstext
- mehrere Schaltflächen
- optional ein Bild

Die Schaltflächen werden horizontal angeordnet und brechen bei Platzmangel um.

### 5.3 Funktions-Grid

Dieser Block stellt mehrere Merkmalskarten dar. Jede Karte enthält:

- ein Symbol
- eine Überschrift
- einen kurzen Text

Voreingestellt sind drei Spaltenlayouts:

- `grid-col-2`
- `grid-col-3`
- `grid-col-4`

Durch `auto-fit` und Mindestbreiten reagiert das Layout automatisch auf die verfügbare Breite.

### 5.4 Testimonials

Testimonials werden als Karten mit folgenden Bestandteilen dargestellt:

- Sternebewertung
- Zitat
- Avatarbild
- Name
- Rollen- oder Funktionsangabe

### 5.5 Preise

Preise werden als Karten dargestellt. Jede Karte kann enthalten:

- einen Preis
- eine zusätzliche Preisangabe
- eine Liste mit Leistungen
- eine Hervorhebung als beliebter Tarif

Eine hervorgehobene Preiskarte erhält einen orangefarbenen Rand und einen zusätzlichen Schatten. Eine optionale Beschriftung „Beliebt“ wird über der Karte angezeigt.

**Hinweis:** Dies sind Darstellungsformen im Builder. Ob damit tatsächlich kostenpflichtige Angebote oder Abos verbunden sind, ist im Quellcode nicht eindeutig erkennbar.

### 5.6 Statistiken

Mehrere Kennzahlen werden als Karten angezeigt. Jede Karte enthält:

- eine große Zahl
- eine Bezeichnung

### 5.7 CTA-Banner

Ein orangefarbener Handlungsaufruf-Bereich enthält:

- eine Überschrift
- einen Beschreibungstext
- eine helle Schaltfläche

Der Hintergrund ist als Verlauf mit Schatten umgesetzt.

### 5.8 FAQ

FAQ-Einträge werden als einzelne Karten dargestellt. Jeder Eintrag enthält:

- eine Frage
- eine Antwort

Im Quellcode ist kein Mechanismus für Auf- und Zuklappen der Einträge erkennbar. Die Antworten erscheinen daher durchgehend.

### 5.9 Kontaktformular

Der Kontaktblock enthält:

- eine Formularüberschrift
- ein Formular mit Eingabefeldern
- mindestens Felder für Name, E-Mail und Nachricht

Die Feldbezeichnungen werden oberhalb der Eingabefelder angezeigt. Das Formular ist als Raster mit Abständen zwischen den Feldern aufgebaut.

**Im Quellcode nicht eindeutig erkennbar:**
- Ob das Formular tatsächlich versendet wird.
- Wohin die Daten übermittelt werden.
- Ob Pflichtfelder, Validierung oder Fehlermeldungen vorhanden sind.
- Ob eine Speicherung der eingegebenen Daten erfolgt.

---

## 6. Animationen

Für Blöcke sind vier Animationsklassen definiert:

| Klasse | Wirkung |
|---|---|
| `anim-fade-in` | Einblenden über 0,6 Sekunden |
| `anim-slide-up` | Einblenden mit Bewegung nach oben |
| `anim-zoom-in` | Einblenden mit leichter Vergrößerung |
| `anim-pulse` | Fortlaufendes, sanftes Pulsieren |

**Im Quellcode nicht eindeutig erkennbar:** Ob Nutzer die Animationsart eines Blocks auswählen und speichern können. Die Klassen sind im CSS vorhanden, die zugehörige Bedienoberfläche ist im Auszug nicht enthalten.

---

## 7. Eingaben und Ausgaben

### 7.1 Vom Besucher eingegebene Daten

- **Suchfeld in der linken Seitenleiste:** Dient voraussichtlich dazu, Blockoptionen oder Kategorien einzugrenzen.
- **Kontaktformular im Kontaktblock:** Nimmt offenbar Kontaktangaben entgegen.

### 7.2 Angezeigte Ergebnisse

- Die Vorschau zeigt die gewählten beziehungsweise eingefügten Blöcke in der aktuellen Reihenfolge.
- Blockinhalte werden direkt in der Arbeitsfläche dargestellt.
- Die aktive Bildschirmansicht beeinflusst die Vorschau.
- Der aktive Block wird optisch markiert.

### 7.3 Speicherung und Export

**Im Quellcode nicht eindeutig erkennbar:**
- Ob ein Entwurf gespeichert wird.
- Ob die Website als HTML, React, CSS oder einem anderen Format exportiert werden kann.
- Ob eine Vorschau- oder Veröffentlichungs-URL erzeugt wird.
- Ob der Builder Projekte speichert oder wieder laden kann.

---

## 8. Typische Probleme und Fehlerbehebung

### 8.1 Die Schrift wird anders dargestellt als erwartet

**Mögliche Ursache:** Die Google Fonts konnten nicht geladen werden, oder das Gerät ist offline.

**Lösung:**

1. Prüfen Sie die Internetverbindung.
2. Laden Sie die Seite neu.
3. Falls die Schrift weiterhin abweicht, prüfen Sie, ob im Browser Webfonts blockiert oder verändert werden.

Ein vollständiger Offline-Fallback ist im Quellcode nicht eindeutig erkennbar; es ist lediglich eine Liste klassischer Systemschriften hinterlegt.

### 8.2 Die Ansicht wechselt nicht

**Mögliche Ursache:** Die Ansichtsschaltflächen sind sichtbar, die zugehörige JavaScript-Logik liegt aber nicht in den vorliegenden Auszügen vor.

**Lösung:**

1. Klicken Sie direkt auf **„Desktop“**, **„Tablet“** oder **„Mobile“**.
2. Prüfen Sie, ob die aktive Schaltfläche farblich hervorgehoben ist.
3. Laden Sie die Seite neu, falls keine Reaktion erfolgt
