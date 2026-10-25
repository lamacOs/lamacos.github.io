<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: FlohmarktScanner -->
<!-- source-files: ["FlohmarktScanner/index.html"] -->

# FlohmarktScanner – Support-Dokumentation

## Übersicht

| Angabe | Information |
|---|---|
| **Website-Name** | FlohmarktScanner |
| **Vermuteter Zweck** | Die bereitgestellten Quellcode-Auszüge enthalten ausschließlich einen KI-gestützten Kundensupport-Chat für die Website. Der eigentliche Zweck von „FlohmarktScanner“ – etwa das Scannen oder Auffinden von Flohmarktangeboten – ist **im Quellcode nicht eindeutig erkennbar**. |
| **Quellcode-Pfad** | `FlohmarktScanner/index.html` |
| **Datum der Erstellung** | 27. März 2026 |
| **Dokumentationsgrundlage** | Ausschließlich die bereitgestellten, teilweise gekürzten Quellcode-Auszüge |

> **Wichtiger Hinweis:** Der Quellcode-Auszug ist gekürzt. Die Dokumentation beschreibt daher nur Funktionen, die im sichtbaren Ausschnitt eindeutig erkennbar sind. Weitere Bereiche der Website, insbesondere der eigentliche Flohmarkt-Scanner, werden im Ausschnitt nicht gezeigt.

---

## 1. Zweck der Website

### 1.1 Bestätigter Zweck

Die Website enthält einen fest positionierten **„lamacHub Kundenservice“** mit der Untertitelung **„KI-gestützter Support“**. Nutzer können dort Fragen eingeben und Antworten von einem KI-gestützten Supportdienst erhalten.

Der Support-Chat wird als technische Erweiterung in die bestehende Website eingebettet. Er soll Besucher bei allgemeinen Fragen zur Website unterstützen.

### 1.2 Zweck der eigentlichen FlohmarktScanner-Funktion

**Im Quellcode nicht eindeutig erkennbar.**

Der Name „FlohmarktScanner“ legt nahe, dass die Website Angebote auf Flohmärkten oder in Online-Flohmarkt-Angeboten findet, automatisch erfasst oder auswertet. Im bereitgestellten Ausschnitt ist jedoch keine Scanner-, Such-, Angebots- oder Filternfunktion sichtbar. Aussagen zu Abläufen, Ergebnissen oder Preisen wären daher spekulativ.

---

## 2. Voraussetzungen

### Technische Voraussetzungen

Für die Nutzung des eingebetteten Support-Chats gelten im Quellcode erkennbare Anforderungen:

1. **Aktueller Webbrowser mit JavaScript-Unterstützung**  
   Der Chat öffnet, schließt und verarbeitet Nachrichten vollständig über JavaScript. Ohne JavaScript bleibt der Support-Chat geschlossen.

2. **Verbindung zum externen Support-Dienst**  
   Der Chat sendet Anfragen an einen externen Worker-Endpunkt. Für Antworten ist daher eine funktionierende Internetverbindung erforderlich.

3. **Ungestörte Ausführung des eingebetteten Skripts**  
   Browser-Erweiterungen, Content-Blocker, Strict-Content-Security-Policies oder Netzwerkregeln können die Verbindung zum Support-Dienst blockieren.

4. **Unterstützte Bildschirmgröße**  
   Der Chat passt sich dem Viewport an. Auf schmalen Bildschirmen nutzt er fast die gesamte Breite und berücksichtigt die verfügbare Bildschirmhöhe.

### Nicht erforderlich

- Im Quellcode ist **keine Anmeldung**, **kein Benutzerkonto**, **keine Zahlung** und **keine Installation** für den Support-Chat erkennbar.
- Ob die übrige Website FlohmarktScanner eine Anmeldung oder Registrierung voraussetzt, ist **im Quellcode nicht eindeutig erkennbar**.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Support-Schaltfläche

Unten rechts auf der Seite befindet sich eine runde, grüne Schaltfläche mit einem sichtbaren Chat-Symbol. Sie trägt die Barrierefreiheitsbezeichnung **„Kundensupport öffnen“**.

Positionierung:

- Desktop: 24 Pixel vom rechten und unteren Bildschirmrand
- Mobil: 16 Pixel vom rechten und unteren Bildschirmrand
- Die Schaltfläche bleibt beim Scrollen am Bildschirm fixiert.

### 3.2 Support-Fenster

Nach dem Öffnen erscheint rechts unten ein Dialogfenster mit folgenden Bereichen:

#### Kopfbereich

- Titel: **„lamacHub Kundenservice“**
- Untertitel: **„KI-gestützter Support“**
- Rechts befindet sich eine Schaltfläche mit dem Zeichen **„×“** und der Bezeichnung **„Chat schließen“**.

#### Nachrichtenbereich

Der Bereich trägt die technische Bezeichnung **„lamac-ai-messages“** und ist für Screenreader als Live-Bereich konfiguriert.

Er enthält:

- eine Begrüßung des Kundenservice mit **„Hallo! Wie kann ich dir weiterhelfen?“**
- eingehende Nachrichten des Besuchers
- Antworten des Kundenservice
- während einer laufenden Antwort eine animierte Statusanzeige mit drei Punkten und der Bezeichnung **„Kundenservice antwortet“**

Der Nachrichtenbereich ist scrollbar. Neue Nachrichten werden automatisch nach unten scrolliert.

#### Eingabebereich

- Eingabefeld mit dem Platzhalter **„Nachricht schreiben …“**
- Barrierefreiheitsbezeichnung **„Deine Nachricht“**
- maximale Länge: **1.800 Zeichen**
- automatische Vervollständigung ist deaktiviert
- Das Feld ist erforderlich; eine leere Nachricht kann nicht gesendet werden.
- rechts daneben befindet sich eine runde grüne Schaltfläche mit einem Papierflügel-Symbol und der Bezeichnung **„Nachricht senden“**

### 3.3 Darstellung auf Mobilgeräten

Auf schmalen Bildschirmen:

- Das Chat-Fenster nimmt fast die gesamte Breite ein.
- Der Rand zum Bildschirmrand beträgt jeweils 8 Pixel.
- Die Höhe wird an die verfügbare Bildschirmhöhe angepasst.
- Die Nachrichten erhalten etwas geringere Innenabstände.

Bei aktivierten Einstellungen zur reduzierten Bewegung werden Einblend- und Sprunganimationen abgeschaltet. Die statische Funktionalität bleibt erhalten.

---

## 4. Bedienung Schritt für Schritt

### 4.1 Support-Chat öffnen

1. Besuchen Sie die Website **FlohmarktScanner**.
2. Scrollen Sie bei Bedarf zur rechten unteren Bildschirmecke.
3. Klicken Sie auf die grüne Schaltfläche mit dem Chat-Symbol.
4. Das Fenster **„lamacHub Kundenservice“** wird eingeblendet.
5. Die Begrüßung **„Hallo! Wie kann ich dir weiterhelfen?“** erscheint im Nachrichtenbereich.

### 4.2 Eine Frage stellen

1. Klicken Sie in das Eingabefeld **„Nachricht schreiben …“**.
2. Tippen oder schreiben Sie Ihre Frage.
3. Senden Sie die Nachricht über eine der folgenden Möglichkeiten:
   - Drücken Sie die Eingabetaste.
   - Klicken Sie auf die Schaltfläche **„Nachricht senden“**.
4. Ihre Nachricht erscheint rechts im grünlichen Nachrichtenstil.
5. Während die Verarbeitung läuft, erscheint die animierte Statusanzeige.
6. Die Antwort erscheint anschließend links im weißen Nachrichtenstil.
7. Der Nachrichtenbereich scrollt automatisch zur neuesten Nachricht.

### 4.3 Den Chat schließen

1. Klicken Sie oben rechts im Chat-Fenster auf **„×“**.
2. Das Fenster wird ausgeblendet.
3. Die Support-Schaltfläche unten rechts bleibt sichtbar.
4. Sie können den Chat erneut über dieselbe Schaltfläche öffnen.

### 4.4 Unterstützte Formatierungen in Antworten

Der Kundenservice kann Antworten in Markdown-ähnlicher Formatierung darstellen. Im Quellcode sind folgende Formate bestätigt:

- Überschriften der Ebenen 1 bis 4
- Absätze und erzwungene Zeilenumbrüche
- fett, kursiv, fett-kursiv und durchgestrichen
- ungeordnete und geordnete Listen
- Zitate
- Tabellen
- Inline-Code
- mehrzeilige Codeblöcke
- Trennlinien
- Links und automatisch erkannte HTTP- beziehungsweise HTTPS-Adressen

Links öffnen sich in einem neuen Tab. Der Quellcode setzt dabei `rel="noopener noreferrer"`, um den neuen Tab sicher vom Ausgangsfenster zu isolieren.

---

## 5. Eingaben und Ausgaben

### 5.1 Eingaben

| Element | Bestätigte Eigenschaften |
|---|---|
| Nachrichteneingabefeld | Einzeiliges Textfeld, Pflichtfeld, maximal 1.800 Zeichen, keine automatische Vervollständigung |
| Schaltfläche „Nachricht senden“ | Sendet das Eingabefeld; wird während der laufenden Verarbeitung deaktiviert |
| Schaltfläche „Chat schließen“ | Blendet das Support-Fenster aus |

### 5.2 Ausgaben

- Die eigene Nachricht wird unverändert als Text angezeigt.
- Antworten werden in ein eigenes Nachrichtenelement eingefügt.
- Während der Verarbeitung wird ein Status mit drei animierten Punkten angezeigt.
- Das Fenster verfügt über eine kurze Einblendanimation.
- Die Scrollposition wird nach neuen Nachrichten automatisch angepasst.

### 5.3 Sicherheitsverarbeitung von Antworten

Der Quellcode enthält mehrere Maßnahmen zur sicheren Darstellung von Antworten:

1. **HTML-Escaping:** Antwortinhalte werden grundsätzlich maskiert, bevor Formatierungen eingefügt werden.
2. **URL-Prüfung:** Als Link zugelassen werden ausschließlich `http:`- und `https:`-Adressen.
3. **Link-Isolierung:** Öffnungslinks erhalten `noopener noreferrer`.
4. **Codeblock-Escaping:** Codeblöcke werden ebenfalls maskiert dargestellt.

Eigene HTML-Tags in einer Antwort werden somit nicht als ausführbarer HTML-Code übernommen.

---

## 6. Technische Einordnung

### 6.1 Kommunikation mit dem Support-Dienst

Der Chat sendet Nachrichten und den bisherigen Gesprächsverlauf an einen externen Worker-Dienst. Die Adresse ist im Quellcode hinterlegt; sie wird in dieser Dokumentation aus Sicherheitsgründen nicht wiedergegeben.

Im Quellcode ist erkennbar:

- Die Adresse wird für alle Websites einheitlich verwendet.
- Der Gesprächsverlauf wird im Browser gespeichert und zusammen mit neuen Anfragen an den Dienst übertragen.
- Der Dienst liefert die Antwort, die im Chat dargestellt wird.

**Im Quellcode nicht eindeutig erkennbar:**

- ob Nachrichten dauerhaft auf dem Server gespeichert werden,
- welche Server-Standort- und Aufbewahrungsregeln gelten,
- ob eine Weitergabe an Dritte stattfindet,
- welche Inhalte der Support-Dienst fachlich abdeckt,
- ob es eine Fehlerbehandlung für einen nicht erreichbaren Dienst gibt.

### 6.2 Initialisierung

Der Einbettungscode prüft, ob das Chat-Element bereits vorhanden ist und ob es bereits initialisiert wurde. Dadurch verhindert der Code eine doppelte Initialisierung, falls derselbe Code versehentlich zweimal eingebunden wird.

---

## 7. Datenschutz- und Berechtigungshinweise

### 7.1 Übermittlung von Nachrichten

Wenn Sie im Support-Chat eine Nachricht senden, wird diese zur Verarbeitung an einen externen Support-Dienst übertragen. Es handelt sich um einen externen Dienst; der Betreiber der Website und der Betreiber dieses Dienstes müssen nicht identisch sein.

### 7.2 Empfehlung für sensible Inhalte

- Geben Sie keine Passwörter, Zugangsdaten, API-Schlüssel, Tokens oder personenbezogenen Daten in den Chat ein.
- Vermeiden Sie sensible Informationen über Dritte.
- Beschreiben Sie technische Probleme möglichst allgemein.
- Wenn der Support eine konkrete Datei oder Konfiguration benötigt, ist im Quellcode nicht erkennbar, wie eine sichere Übertragung erfolgen soll.

### 7.3 Browserinterne Speicherung

Der Quellcode zeigt keine persistierte Speicherung des Chatverlaufs im Browser, beispielsweise in `localStorage` oder `sessionStorage`. Der Verlauf existiert während der geladenen Seite im Arbeitsspeicher des Skripts.

**Im Quellcode nicht eindeutig erkennbar:**

- eine Datenschutzerklärung,
- ein Hinweis auf die Rechtsgrundlage der Verarbeitung,
- eine Aufbewahrungsfrist auf dem Server,
- Betroffenenrechte,
- eine Kontaktmöglichkeit für Datenschutzanfragen.

### 7.4 Berechtigungen

Für den Support-Chat ist keine Anmeldung erkennbar. Damit verbunden sind im Quellcode **keine bestätigten Rollen, Rechte oder Zugangsbeschränkungen** dokumentiert.

Ob andere Bereiche von FlohmarktScanner Anmeldungen oder besondere Berechtigungen vorsehen, ist **im Quellcode nicht eindeutig erkennbar**.

### 7.5 Externe Links

Antworten können Links enthalten. Diese verlassen die Website und unterliegen den Datenschutzbestimmungen des jeweiligen Zielanbieters. Prüfen Sie die Zieladresse, bevor Sie personenbezogene Daten übermitteln.

---

## 8. Typische Probleme und Fehlerbehebung

### 8.1 Der Support-Chat öffnet sich nicht

**Mögliche Ursachen und Prüfungen:**

1. **JavaScript ist deaktiviert.**  
   Aktivieren Sie JavaScript für die Website und laden Sie die Seite neu.

2. **Ein Inhaltsblocker blockiert Skripte oder Netzwerkzugriffe.**  
   Prüfen Sie, ob eine Browser-Erweiterung, ein privater Browsermodus oder eine Firewall die Website blockiert.

3. **Die Seite wurde nicht vollständig geladen.**  
   Laden Sie die Seite vollständig neu.

4. **Ein Skriptkonflikt verhindert die Initialisierung.**  
   Im Quellcode ist eine Schutzprüfung gegen doppelte Initialisierung vorhanden. Falls andere Seitenbestandteile dieselben Element-IDs verwenden oder den Chatbereich verändern, kann die Initialisierung ausbleiben.

### 8.2 Die Senden-Schaltfläche reagiert nicht

1. Prüfen Sie, ob das Eingabefeld leer ist. Leere Nachrichten werden nicht gesendet.
2. Prüfen Sie, ob die maximale Länge von 1.800 Zeichen erreicht ist.
3. Klicken Sie während einer laufenden Antwort nicht erneut. Die Schaltfläche ist während der Verarbeitung deaktiviert.
4. Warten Sie, bis die Statusanzeige verschwindet, und versuchen Sie es erneut.

### 8.3 Es erscheint keine Antwort

1. Prüfen Sie die Internetverbindung.
2. Warten Sie einige Sekunden: Der Dienst benötigt möglicherweise Zeit für die Verarbeitung.
3. Fragen Sie in einer neuen, kürzeren Nachricht erneut.
4. Öffnen Sie die Entwicklerwerkzeuge des Browsers und prüfen Sie das Netzwerk-Protokoll auf fehlgeschlagene Anfragen.
5. Prüfen Sie, ob Inhaltsblocker oder Firewall-Regeln den externen Support-Dienst auss
