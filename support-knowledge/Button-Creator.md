<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Button-Creator -->
<!-- source-files: ["Button-Creator/index.html"] -->

# Button Creator

**Vermuteter Zweck:** Der „Button Creator“ ist eine browserbasierte Website, mit der Besucherinnen und Besucher einen Button gestalten, eine Vorschau anzeigen und einen Button für eine Fullscreen-Präsentation mit einer zeitlich begrenzten Textanzeige verwenden können. Zusätzlich enthält die Seite einen Dark Mode, einen Kundensupport-Chat sowie ein Anmelde-/Registrierungsfenster.

**Quellcode-Pfad:** `Button-Creator/index.html`

**Datum der Erstellung:** 14. April 2026

---

## 1. Überblick

Die Website besteht aus mehreren sichtbaren Bereichen:

1. **Kopfbereich** mit Logo, dem Text „lamacOs“ und einem Umschalter für das Farbschema.
2. **Bereich „Button Einstellungen“** zum Festlegen von Typ, Text, Farbe, Textfarbe, Größe und Form.
3. **Bereich „Event Einstellungen“** zum Festlegen von Event-Text, Event-Farbe, Event-Größe und Anzeigedauer.
4. **Vorschau** mit dem Button „Preview“.
5. **Fullscreen-Ansicht** mit einem großen Button und einem Schließsymbol.
6. **Kundensupport-Chat** in der rechten unteren Ecke.
7. **Anmelde-/Registrierungsfenster** über die Schaltfläche „Anmelden“.
8. **Fußzeile** mit „© 2026 lamacHub“.

Die Seite benötigt für die Grundfunktionen keine registrierung. Die Anmeldefunktion und der Support-Chat sind jedoch im Quellcode enthalten.

---

## 2. Voraussetzungen

### 2.1 Technische Voraussetzungen

- Ein aktueller Browser mit JavaScript-Unterstützung.
- Für die vollständige Darstellung werden die im HTML eingebundenen Schriftarten und Bilder aus externen Quellen benötigt.
- Für die Chat-Funktion ist eine Internetverbindung erforderlich.
- Für die Anmeldung und Registrierung wird im Quellcode eine Firebase-Authentifizierung vorausgesetzt. Die vollständige Konfiguration ist im bereitgestellten Ausschnitt nicht vollständig enthalten.

### 2.2 Zugang und Berechtigungen

- **Ohne Anmeldung:** Die Button-Erstellung, Vorschau, Fullscreen-Ansicht, Dark Mode und der Kundensupport-Chat sind grundsätzlich erreichbar.
- **Mit Anmeldung:** Die Seite enthält ein Anmeldefenster mit den Reitern „Anmelden“ und „Registrieren“.
- Die detaillierten Speicherorte der Konten- und Seitendaten sind im Quellcode beschrieben, aber im vorliegenden Auszug nicht vollständig sichtbar. **Im Quellcode nicht eindeutig erkennbar** ist, welche Button-Einstellungen dauerhaft gespeichert oder wiederhergestellt werden.

---

## 3. Bedienung des Button Creators

## 3.1 Einen Button gestalten

1. Öffnen Sie die Website.
2. Wählen Sie im Bereich **„Button Einstellungen“** unter **„Typ“** einen der folgenden Werte:
   - **„Text“**
   - **„Bild“**
   - **„Video“**
3. Geben Sie bei Bedarf im Feld **„Text“** die Beschriftung ein.
   - Bleibt das Feld leer, verwendet die Vorschau standardmäßig die Beschriftung „Button“.
4. Wählen Sie bei Bedarf eine Datei im Feld **„Datei“** aus.
5. Wählen Sie mit **„Farbe“** die Hintergrundfarbe des Buttons.
6. Wählen Sie mit **„Textfarbe“** die Farbe der Beschriftung.
7. Geben Sie unter **„Größe“** die gewünschte Kantenlänge in Pixeln ein.
8. Wählen Sie unter **„Form“** eine Darstellungsform:
   - **„Eckig“**
   - **„Rounded“**
   - **„Kreis“**
9. Klicken Sie auf **„Übernehmen“**.
10. Der Button **„Preview“** wird entsprechend eingestellt.

### Wichtiger Hinweis zum Typ „Bild“ oder „Video“

Im sichtbaren JavaScript wird die Auswahl **„Bild“** oder **„Video“** zwar angeboten, die Vorschau übernimmt jedoch nur bei der Auswahl **„Text“** eine Beschriftung. Eine Implementierung zum Laden und Anzeigen der ausgewählten Datei ist im bereitgestellten Quellcode-Auszug **nicht eindeutig erkennbar**.

Daher gilt:

- **Bestätigt:** Die Typen „Bild“ und „Video“ sind auswählbar, und es gibt ein Dateiauswahlfeld.
- **Nicht eindeutig erkennbar:** Ob und wie die ausgewählte Bild- oder Videodatei tatsächlich im Button dargestellt wird.

---

## 3.2 Vorschau anzeigen

Im Bereich unter den Einstellungen befindet sich der mittig ausgerichtete Button **„Preview“**.

- Er übernimmt Breite, Höhe, Hintergrundfarbe, Eckenradius und Textfarbe.
- Bei einem leeren Textfeld wird „Button“ angezeigt.
- Der Quellcode enthält keine Funktion, die den Preview-Button als sichtbaren Auslöser für ein zusätzliches Ereignis behandelt.

---

## 3.3 Ein Event einrichten

1. Öffnen Sie den Bereich **„Event Einstellungen“**.
2. Geben Sie unter **„Event Text“** den Text ein, der nach einem Klick erscheinen soll.
3. Wählen Sie unter **„Farbe“** die Textfarbe des Events.
4. Geben Sie unter **„Größe“** die Schriftgröße in Pixeln ein.
5. Legen Sie unter **„Dauer (ms)“** die Anzeigedauer in Millisekunden fest.
   - Voreinstellung: **4000 ms**, also vier Sekunden.
6. Klicken Sie auf **„Fullscreen“**.

### Anzeige des Events

1. Klicken Sie in der Fullscreen-Ansicht auf den großen Button.
2. Der eingegebene Event-Text erscheint unterhalb des Buttons.
3. Nach Ablauf der eingestellten Dauer wird der Text automatisch entfernt.
4. Durch erneutes Klicken auf den Button kann der Text erneut angezeigt werden.

### Sichtbare Elemente der Fullscreen-Ansicht

- Ein großer Button in der Mitte.
- Das Schließsymbol **„✕“** oben rechts.
- Ein dunkler, fast schwarzer Hintergrund.
- Der Event-Text erscheint unterhalb des Buttons.

Die Fullscreen-Ansicht übernimmt von der Vorschau:

- Breite
- Höhe
- Hintergrundfarbe
- Eckenradius
- den HTML-Inhalt des Preview-Buttons

### Technischer Hinweis zur Farbe

Die Textfarbe des Preview-Buttons wird zwar gespeichert, beim Kopieren in den Fullscreen-Button wird sie im sichtbaren Code jedoch nicht ausdrücklich übertragen. Im Quellcode nicht eindeutig erkennbar ist daher, ob die Textfarbe in der Fullscreen-Ansicht in allen Browsern korrekt erscheint.

---

## 3.4 Fullscreen-Ansicht verlassen

Klicken Sie oben rechts auf **„✕“**.

Die Fullscreen-Ansicht wird ausgeblendet, und die reguläre Website bleibt sichtbar.

Die Website verwendet für diese Ansicht keine Browser-Vollbild-API. „Fullscreen“ bezeichnet hier eine seitenfüllende Overlay-Ansicht.

---

## 4. Dark Mode

In der Kopfzeile befindet sich rechts eine Schaltfläche mit dem Symbol **„🌗“**.

### Dark Mode einschalten

1. Klicken Sie auf **„🌗“**.
2. Der Hintergrund und die Kartenflächen wechseln in eine dunkle Darstellung.
3. Die Auswahl wird im lokalen Browserspeicher gespeichert.

### Dark Mode ausschalten

1. Klicken Sie erneut auf **„🌗“**.
2. Die Website wechselt zurück zur hellen Darstellung.

### Persistenz

Beim nächsten Besuch wird die zuletzt gewählte Darstellung automatisch wiederhergestellt, sofern der Browser den lokalen Speicher zulässt.

---

## 5. Kundensupport-Chat

## 5.1 Chat öffnen

1. Klicken Sie auf das runde Sprechblasen-Symbol **„💬“** in der rechten unteren Ecke.
2. Das Chat-Fenster öffnet sich.
3. Der Begrüßungstext lautet: „Hallo! Wie kann ich Ihnen weiterhelfen?“

## 5.2 Nachricht senden

1. Geben Sie Ihre Nachricht in das Feld **„Nachricht schreiben“** ein.
2. Klicken Sie auf das Senden-Symbol **„➤“**.
3. Ihre Nachricht erscheint als grünes Chat-Feld.
4. Die Antwort erscheint anschließend als weißes Feld.

Das Eingabefeld erlaubt maximal 1800 Zeichen. Eine leere Nachricht wird nicht gesendet.

## 5.3 Chat schließen

Klicken Sie oben rechts im Chat-Fenster auf **„×“**.

## 5.4 Gesprächsverlauf

- Die Anwendung führt den bisherigen Chat-Verlauf im Arbeitsspeicher des Browsers.
- Für die Verarbeitung werden die letzten Chat-Einträge an den Kundenservice übermittelt.
- Ab der 15. gesendeten Nachricht erscheint ein zusätzlicher Hinweis:
  > „Hinweis: Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.“

Ob der Chat-Verlauf beim Schließen des Fensters oder nach einem Neuladen der Seite erhalten bleibt, ist im Quellcode nicht eindeutig erkennbar.

## 5.5 Wenn der Kundenservice nicht erreichbar ist

Wenn keine Antwort geliefert werden kann, erscheint:

> „Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.“

### Problembehebung

1. Prüfen Sie, ob eine Internetverbindung besteht.
2. Laden Sie die Seite neu.
3. Öffnen Sie den Chat erneut über **„💬“**.
4. Senden Sie die Nachricht noch einmal in einem möglichst kurzen, konkreten Text.
5. Prüfen Sie zusätzlich, ob ein Inhaltsfilter, eine Firewall oder eine Browser-Erweiterung Netzwerkzugriffe blockiert.

Ein möglicher im Quellcode hinterlegter Endpunkt wird aus Sicherheitsgründen hier nicht wiedergegeben.

---

## 6. Anmeldung und Registrierung

## 6.1 Anmeldefenster öffnen

Klicken Sie oben rechts auf **„Anmelden“**.

Es öffnet sich ein Fenster mit den Reitern:

- **„Anmelden“**
- **„Registrieren“**

## 6.2 Konto erstellen

1. Wechseln Sie zum Reiter **„Registrieren“**.
2. Geben Sie einen **Anzeigenamen** ein.
   - Maximallänge: 40 Zeichen.
3. Geben Sie Ihre **E-Mail-Adresse** ein.
4. Geben Sie ein **Passwort mit mindestens 6 Zeichen** ein.
5. Klicken Sie auf **„Registrieren“**.

Das Formular verwendet die Browser-Autovervollständigung für:

- Namen
- E-Mail-Adresse
- neue Passwörter

## 6.3 Anmelden

1. Öffnen Sie das Anmeldefenster.
2. Lassen Sie den Reiter **„Anmelden“** ausgewählt.
3. Geben Sie Ihre **E-Mail-Adresse** ein.
4. Geben Sie Ihr **Passwort** ein.
5. Klicken Sie auf **„Einloggen“**.

Nach erfolgreicher Anmeldung zeigt das Fenster:

- **„Eingeloggt als“** mit dem Anzeigenamen
- einen Bereich mit weiteren Kontodaten beziehungsweise Statusinformationen
- die Schaltfläche **„Abmelden“**

Welche weiteren Metadaten im angemeldeten Zustand angezeigt werden, ist im gekürzten Quellcode nicht vollständig erkennbar.

## 6.4 Abmelden

1. Öffnen Sie das Anmeldefenster über **„Anmelden“**.
2. Klicken Sie im angemeldeten Zustand auf **„Abmelden“**.

## 6.5 Fenster schließen

Klicken Sie oben rechts im Fenster auf **„×“** beziehungsweise das Schließen-Symbol.

---

## 7. Sichtbare Bereiche im Überblick

| Bereich | Sichtbare Bezeichnung | Zweck |
|---|---|---|
| Kopfzeile | Logo, „lamacOs“, „🌗“ | Branding und Umschalten des Farbschemas |
| Einstellungen | „Button Einstellungen“ | Gestaltung des Preview-Buttons |
| Event-Konfiguration | „Event Einstellungen“ | Textdarstellung nach einem Klick |
| Vorschau | „Preview“ | Anzeige des gestalteten Buttons |
| Präsentationsansicht | „Fullscreen“, „✕“ | Große, seitenfüllende Darstellung |
| Support | „💬“ | Öffnen des Kundenservice-Chats |
| Konto | „Anmelden“, „Registrieren“, „Einloggen“, „Abmelden“ | Kontoverwaltung |
| Fußzeile | „© 2026 lamacHub“ | Copyright-Hinweis |

---

## 8. Typische Probleme und Fehlerbehebung

## 8.1 Änderungen erscheinen nicht in der Vorschau

**Mögliche Ursache:** Die Einstellungen wurden geändert, aber **„Übernehmen“** wurde nicht geklickt.

**Lösung:**

1. Nehmen Sie die gewünschten Änderungen vor.
2. Klicken Sie auf **„Übernehmen“**.
3. Prüfen Sie anschließend **„Preview“**.

## 8.2 Der Event-Text erscheint nicht

1. Prüfen Sie, ob **„Event Text“** ausgefüllt ist.
2. Klicken Sie auf **„Fullscreen“**.
3. Klicken Sie in der Fullscreen-Ansicht auf den großen Button.
4. Prüfen Sie, ob die Dauer nicht zu kurz eingestellt wurde.

Ein leeres Event-Text-Feld erzeugt im sichtbaren Code ein leeres Ausgabefeld; es wird kein automatischer Platzhaltertext eingesetzt.

## 8.3 Das Event verschwindet zu schnell

- Erhöhen Sie den Wert bei **„Dauer (ms)”**.
- Der Wert wird in Millisekunden interpretiert.
- Beispiel: `5000` entspricht fünf Sekunden.

## 8.4 Der Event-Text bleibt sichtbar

- Prüfen Sie, ob ein gültiger numerischer Wert für **„Dauer (ms)”** eingetragen ist.
- Bei ungültigen oder negativen Werten kann das automatische Entfernen problematisch sein.
- Im Quellcode nicht eindeutig erkennbar ist, ob negative Werte aktiv abgefangen werden.

## 8.5 Das Bild oder Video erscheint nicht

1. Prüfen Sie, ob eine Datei ausgewählt wurde.
2. Prüfen Sie, ob die Datei vom Browser unterstützt wird.
3. Prüfen Sie, ob **„Übernehmen“** geklickt wurde.

Da die Dateiverarbeitung im bereitgestellten Ausschnitt nicht vollständig erkennbar ist, lässt sich kein zuverlässiger weiterer Ablauf bestätigen.

## 8.6 Der Button ist zu groß oder zu klein

-
