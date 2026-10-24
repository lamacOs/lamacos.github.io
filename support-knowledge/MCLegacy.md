<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: MCLegacy -->
<!-- source-files: ["MCLegacy/index.html"] -->

# MCLegacy – Support-Dokumentation

**Vermuteter Zweck:** Offizielle Informations- und Bewerbungsseite für das Minecraft-Projekt „Minecraft Legacy“ bzw. „MCLegacy“. Die Seite stellt das Projekt vor, zeigt Informationen zu Legacy, Chronik, Spielern, Welt, News und Regeln und ermöglicht Interessenten die Teilnahme über ein Online-Formular. Eine zusätzliche Administrationsansicht dient offenbar der Pflege der Inhalte.

**Quellcode-Pfad:** `MCLegacy`  
**Quellcode-Datei:** `MCLegacy/index.html`  
**Datum der Erstellung:** 25. März 2026

> **Hinweis zur Quellcode-Basis:** Die vorliegenden Auszüge sind unvollständig. Die Dokumentation beschreibt nur Funktionen, die im sichtbaren HTML, CSS und den erkennbaren Element-IDs erkennbar sind. JavaScript-Logik, vollständige Inhalte und Backend-Funktionen liegen nicht vollständig vor. Entsprechend gekennzeichnete Punkte sind im Quellcode nicht eindeutig erkennbar.

---

## 1. Überblick

MCLegacy ist eine inhaltlich gegliederte One-Page-Website. Besucher können:

- die Seite über eine feste Kopfzeile快速 zu den einzelnen Bereichen navigieren,
- zwischen einem hellen und einem dunklen Erscheinungsbild wechseln,
- Projektinformationen in verschiedenen Themenbereichen lesen,
- eine Teilnahmeanfrage über ein Formular senden,
- sich gegebenenfalls anmelden,
- auf kleinen Bildschirmen ein mobiles Menü öffnen.

Die Website verwendet responsive Layouts. Auf breiten Bildschirmen werden mehrere Karten nebeneinander dargestellt; auf Mobilgeräten werden die Inhalte überwiegend einspaltig angezeigt.

---

## 2. Voraussetzungen

### 2.1 Technische Voraussetzungen

Für die normale Nutzung benötigt der Besucher:

- einen aktuellen Browser mit JavaScript-Unterstützung,
- eine Internetverbindung, da Schriftarten, das Favicon und möglicherweise Formulardaten extern geladen beziehungsweise übermittelt werden,
- für die Teilnahme eine erreichbare E-Mail-Adresse.

Im Quellcode nicht eindeutig erkennbar ist, welche Browser konkret unterstützt werden.

### 2.2 Inhaltliche Voraussetzungen für eine Bewerbung

Das Formular verlangt:

- einen Minecraft-Namen,
- eine E-Mail-Adresse,
- ein Alter zwischen 1 und 99,
- eine Minecraft-Version,
- eine Begründung der Teilnahme,
- die Bestätigung, die Einverständniserklärung und Teilnahmebedingungen gelesen zu haben.

Zusätzlich weist das Formular darauf hin, dass:

- Personen unter 18 die Zustimmung ihrer Erziehungsberechtigten benötigen,
- Teilnehmer mindestens ein Minecraft-Legacy-Video pro Monat veröffentlichen,
- Server-IP-Schutz und Aufnahmen Bestandteil der Bedingungen sind.

Ob ein YouTube-Kanal verpflichtend ist, geht aus dem Quellcode nicht eindeutig hervor. Das Eingabefeld ist nicht als Pflichtfeld markiert; der Hinweistext bezieht sich jedoch auf monatliche YouTube-Videos.

---

## 3. Sichtbare Bereiche

### 3.1 Kopfzeile

Die Kopfzeile bleibt beim Scrollen am oberen Bildschirmrand sichtbar.

Sie enthält:

- **„Minecraft Legacy“** mit einem orangefarbenen „M“-Symbol; ein Klick führt zum Startbereich,
- die Navigationseinträge:
  - **„Legacy“**
  - **„Chronik“**
  - **„Spieler“**
  - **„Welt“**
  - **„News“**
  - **„Regeln“**
  - **„Teilnehmen“**
- die Schaltfläche **„☾“** zum Wechseln des Designs,
- die Schaltfläche **„Anmelden“**,
- auf kleinen Bildschirmen die Schaltfläche **„☰“** für das mobile Menü.

**Bestätigt:** Die Gestaltung ist responsiv und verwendet eine halbtransparente, fixierte Kopfzeile.

### 3.2 Startbereich

Der Startbereich enthält:

- eine kleine Vorbemerkung,
- eine große zweizeilige Überschrift mit orangefarben hervorgehobenem Text,
- einen Einführungstext,
- die Schaltfläche **„Legacy entdecken“**,
- die Schaltfläche **„Teilnehmen“**.

**„Legacy entdecken“** führt zum Bereich „Legacy“.  
**„Teilnehmen“** führt zum Bewerbungsformular.

### 3.3 „Legacy“

Der Bereich „Legacy“ stellt das zentrale Projekt vor. Er besitzt eine Überschrift, einen Einleitungstext und mehrere dynamisch erzeugte Karten.

Die Karten werden im Quellcode in ein Element mit der ID `legacyGrid` eingefügt. In der Administrationsansicht kann dort ein weiterer Eintrag hinzugefügt werden.

Die konkreten Inhalte und Kartenkategorien sind in den vorliegenden Auszügen nicht vollständig sichtbar.

### 3.4 „Chronik“

Der Bereich „Chronik“ zeigt eine vertikale Zeitleiste. Jeder Eintrag enthält:

- eine hervorgehobene Überschrift,
- ein Datum,
- einen Beschreibungstext.

Die Zeitleiste wird in das Element `timeline` eingefügt. In der Administrationsansicht ist das Hinzufügen eines Ereignisses vorgesehen.

### 3.5 „Spieler“

Der Bereich „Spieler“ stellt Spielerdarstellungen in einem Raster dar. Jeder Spieler besteht sichtbar aus:

- einem quadratischen Avatar mit einem Anfangsbuchstaben,
- einem Namen,
- einer Zusatzzeile mit Metadaten.

Die Spieler werden in `playerGrid` eingefügt. In der Administrationsansicht kann ein Spieler hinzugefügt werden.

### 3.6 „Welt“

Der Bereich „Welt“ enthält eine Überschrift, einen Einleitungstext und mehrere Karten. Die Karten werden in `worldGrid` dargestellt.

Die genauen Inhalte der Karten sowie die Kategorien der Welt sind im gekürzten Quellcode nicht eindeutig erkennbar.

### 3.7 „News“

Der Bereich „News“ zeigt mehrere Nachrichten in einem zweispaltigen Raster. Jede Nachricht besitzt mindestens:

- ein Datum,
- eine Überschrift,
- einen Beschreibungstext.

Die Nachrichten werden in `newsGrid` eingefügt. In der Administrationsansicht kann eine weitere Nachricht hinzugefügt werden.

### 3.8 „Regeln“

Der Bereich „Regeln“ listet Regeln nummeriert auf. Jede Regel besteht aus:

- einer orangefarbenen Nummer,
- einem Regeltext.

Die Regeln werden in `rulesGrid` eingefügt. In der Administrationsansicht kann eine Regel hinzugefügt werden.

### 3.9 „Teilnehmen“

Dieser Bereich enthält das Bewerbungsformular.

### 3.10 Fußbereich

Der Fußbereich enthält:

- einen editierbaren Seitentitel,
- einen editierbaren Text,
- den Hinweis **„Offizielle Seite: lamachub.de/MCLegacy“**,
- einen editierbaren Copyright-Hinweis,
- einen zusätzlichen editierbaren Hinweis.

Der Link **„lamachub.de/MCLegacy“** führt zur offiziellen Adresse im Footer.

---

## 4. Bedienung für Besucher

## 4.1 Navigation auf dem Desktop

1. Öffnen Sie die Website.
2. Wählen Sie in der festen Kopfzeile einen Bereich, beispielsweise **„Chronik“**.
3. Die Seite springt zum entsprechenden Abschnitt.
4. Wiederholen Sie dies für weitere Bereiche wie **„Regeln“** oder **„Teilnehmen“**.

Das Scrollverhalten zwischen den Abschnitten ist als weich bzw. „smooth“ implementiert.

## 4.2 Navigation auf Mobilgeräten

1. Öffnen Sie die Website auf einem schmalen Bildschirm.
2. Tippen Sie in der Kopfzeile auf **„☰“**.
3. Wählen Sie den gewünschten Bereich im eingeblendeten Menü.
4. Tippen Sie außerhalb des Menüs oder erneut auf **„☰“**, um es zu schließen.

**Bestätigt:** Die Schaltfläche „☰“ wird auf Bildschirmbreiten bis 1.000 Pixeln eingeblendet, während die reguläre Navigation ausgeblendet wird.

## 4.3 Design wechseln

1. Klicken oder tippen Sie in der Kopfzeile auf **„☾“**.
2. Die Website wechselt zwischen dem hellen und dem dunklen Farbschema.
3. Klicken Sie erneut auf die Schaltfläche, um zurückzuwechseln.

**Bestätigt:** Die Farbvariablen für hell und dunkel sind im CSS vorhanden. Ob die Auswahl dauerhaft gespeichert wird, ist im vorliegenden Quellcode nicht eindeutig erkennbar.

## 4.4 Projektinformationen lesen

1. Nutzen Sie die Kopfzeile oder die Schaltfläche **„Legacy entdecken“**.
2. Scrollen Sie durch die Abschnitte „Legacy“, „Chronik“, „Spieler“, „Welt“, „News“ und „Regeln“.
3. Auf Desktop-Geräten werden Karten und Spieler in mehreren Spalten dargestellt; auf Mobilgeräten werden sie untereinander angezeigt.

## 4.5 Teilnahmeanfrage senden

1. Klicken oder tippen Sie auf **„Teilnehmen“**.
2. Füllen Sie das Formular vollständig aus.
3. Tragen Sie Ihren Namen im Feld **„Minecraft-Name“** ein.
4. Geben Sie eine gültige Adresse im Feld **„E-Mail“** ein.
5. Geben Sie Ihr Alter im Feld **„Alter“** ein.
6. Geben Sie Ihre Minecraft-Version im Feld **„Minecraft-Version“** an, beispielsweise **„Java Edition“**.
7. Geben Sie optional Ihren YouTube-Kanal im Feld **„YouTube-Kanal“** ein.
8. Erklären Sie im Feld **„Warum möchtest du teilnehmen?“**, warum Sie teilnehmen möchten.
9. Aktivieren Sie das Kontrollkästchen, um die Kenntnisnahme der Einverständniserklärung und Teilnahmebedingungen zu bestätigen.
10. Klicken Sie auf **„Anfrage absenden“**.
11. Warten Sie auf die Bestätigungsmeldung unterhalb der Schaltfläche.

### Formularprüfungen

Bestätigte Browser- beziehungsweise Formularprüfungen:

- **„Minecraft-Name“** ist erforderlich und auf 32 Zeichen begrenzt.
- **„E-Mail“** ist erforderlich und muss dem E-Mail-Format entsprechen.
- **„Alter“** ist erforderlich und muss zwischen 1 und 99 liegen.
- **„Minecraft-Version“** ist erforderlich.
- **„Warum möchtest du teilnehmen?“** ist erforderlich und auf 3.000 Zeichen begrenzt.
- Die Bestätigung der gelesenen Erklärung und Teilnahmebedingungen ist erforderlich.
- **„YouTube-Kanal“** ist im HTML nicht als Pflichtfeld markiert.

Ein Fehlerhinweis mit `.success` oder `.error` ist im CSS vorgesehen. Der genaue Ablauf der serverseitigen Verarbeitung und die konkreten Fehlermeldungen sind im gekürzten Quellcode nicht eindeutig erkennbar.

---

## 5. Anmeldung und Kontofunktionen

In der Kopfzeile befindet sich die Schaltfläche **„Anmelden“**. Zusätzlich existiert im Quellcode ein Dialog mit der ID `a…`, dessen vollständiger Inhalt im Auszug abgeschnitten ist.

Aus dem vorliegenden Material lässt sich daher nur Folgendes sicher feststellen:

- Es gibt einen Anmeldevorgang.
- Die Kopfzeile besitzt eine sichtbare Zustandsbezeichnung **„Anmelden“**.
- Es gibt eine Administrationsansicht mit den Schaltflächen:
  - **„Speichern“**
  - **„Verwerfen“**
  - **„Abmelden“**
- Die Administrationsansicht wird über die Klasse `admin-active` gesteuert.
- Bearbeitbare Texte erhalten in der Administrationsansicht eine orange-gestrichelte Kontur.
- In der Kopfzeile existiert außerdem eine Administrator-Schaltfläche mit der Klasse `admin`.

Nicht eindeutig erkennbar sind:

- ob die Anmeldung über Benutzername, E-Mail-Adresse oder ein anderes Verfahren erfolgt,
- ob ein Passwort erforderlich ist,
- welche Rollen oder Berechtigungen existieren,
- ob Inhalte dauerhaft gespeichert werden,
- wo die Daten gespeichert werden,
- ob eine serverseitige Authentifizierung eingesetzt wird.

---

## 6. Administrationsansicht

Die Administrationsansicht ist im Quellcode vorhanden, richtet sich aber nicht ausdrücklich an gewöhnliche Besucher.

## 6.1 Erkennbare Funktionen

Wenn der administrative Modus aktiv ist:

- werden bearbeitbare Texte hervorgehoben,
- können Einträge hinzugefügt werden,
- können bestehende Einträge über kleine Steuerschaltflächen bearbeitet oder gelöscht werden,
- erscheint eine feste Werkzeugleiste unten rechts,
- zeigt **„dirtyLabel“** an, ob seit dem letzten Speichern Änderungen bestehen,
- können Änderungen über **„Speichern“** übernommen werden,
- können Änderungen über **„Verwerfen“** verworfen werden,
- kann die Sitzung über **„Abmelden“** beendet werden.

## 6.2 Hinzufügbare Inhalte

Je nach Bereich stehen folgende Schaltflächen zur Verfügung:

- **„+ Eintrag hinzufügen“** bei „Legacy“,
- **„+ Ereignis hinzufügen“** bei „Chronik“,
- **„+ Spieler hinzufügen“** bei „Spieler“,
- **„+ Eintrag hinzufügen“** bei „Welt“,
- **„+ News hinzufügen“** bei „News“,
- **„+ Regel hinzufügen“** bei „Regeln“.

## 6.3 Speichern und Verwerfen

### Speichern

1. Nehmen Sie die gewünschten Änderungen an den hervorgehobenen Texten oder Einträgen vor.
2. Klicken Sie auf **„Speichern“**.
3. Beobachten Sie das Statuslabel in der Werkzeugleiste.

Ob die Daten dauerhaft auf einem Server gespeichert werden, ist im vorliegenden, gekürzten Quellcode nicht eindeutig erkennbar.

### Verwerfen

1. Klicken Sie auf **„Verwerfen“**.
2. Prüfen Sie, ob die Änderungen zurückgesetzt wurden und das Statuslabel wieder **„Gespeichert“** anzeigt.

Der genaue Umgang mit ungespeicherten Änderungen beim Verlassen oder Neuladen der Seite ist nicht eindeutig erkennbar.

---

## 7. Typische Probleme und Fehlerbehebung

## 7.1 Das mobile Menü öffnet nicht

1. Prüfen Sie, ob Sie die Seite aktuell geladen haben.
2. Laden Sie die Seite neu.
3. Falls JavaScript im Browser deaktiviert ist, aktiv
