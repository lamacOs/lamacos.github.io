<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: InfoHub -->
<!-- source-files: ["InfoHub/index.html"] -->

# InfoHub – Support-Dokumentation

**Vermuteter Zweck:** InfoHub ist eine einzelne HTML-Seite mit einer Informationsübersicht. Sie zeigt die aktuelle Kalenderwoche, einen festen „Satz der Woche“, ein tägliches Wort sowie Nachrichten. Zusätzlich enthält sie einen KI-gestützten Kundensupport-Chat und eine mögliche Rücksprung-Schaltfläche zu lamachub.de.

**Quellcode-Pfad:** `InfoHub/index.html`

**Datum der Erstellung:** 18. März 2026

---

## 1. Überblick

InfoHub wird vollständig über die Datei `InfoHub/index.html` gesteuert. Die Seite verwendet keine sichtbare Anmeldung und besitzt im Quellcode keinen Benutzerkonto- oder Login-Bereich.

Die Seite besteht aus folgenden Bereichen:

1. Kopfbereich mit Logo, „InfoHub“ und einem Schalter für den Dunkelmodus
2. Bereich „Kalenderwoche“
3. Bereich „Satz der Woche“
4. Bereich „Wort des Tages“
5. Bereich „News“
6. Kundensupport-Chat über eine schwebende Schaltfläche
7. Optionale Schaltfläche „Zurück“ zu lamachub.de

### Technische Voraussetzungen

- Ein aktueller Browser mit JavaScript-Unterstützung
- Eine Internetverbindung für:
  - das Laden des Logos,
  - die verwendete Schrift „Inter“,
  - das Laden des Wortes des Tages,
  - das Laden der Tagesschau-Nachrichten,
  - den Kundensupport-Chat
- Für die dynamischen Inhalte wird ein öffentlicher RSS-Proxy verwendet. Ob dieser Proxy ohne Einschränkungen erreichbar ist, ist nicht garantiert.
- Der Quellcode enthält keine erkennbare serverseitige Verarbeitung. Die Seite kann daher grundsätzlich als statische HTML-Datei geöffnet werden. Für zuverlässige externe Datenabfragen ist eine Bereitstellung über HTTP(S) sinnvoll.

---

# 2. Kopfbereich und Navigation

## 2.1 Logo und Seitenname

Im oberen Kopfbereich werden ein Logo und der Name **„InfoHub“** angezeigt.

- Das Logo wird von einer externen Bildadresse geladen.
- Der Seitenname **„InfoHub“** steht unmittelbar neben dem Logo.
- Der Kopfbereich bleibt beim Scrollen an der Oberkante sichtbar.

### Problembehebung

**Das Logo wird nicht angezeigt:**

1. Prüfen Sie, ob eine Internetverbindung besteht.
2. Laden Sie die Seite neu.
3. Prüfen Sie, ob der Browser Zugriff auf die externe Bildquelle erlaubt.
4. Adblocker- oder Sicherheitssoftware kann externe Anfragen blockieren. Testen Sie dies gegebenenfalls in einem privaten Fenster oder mit deaktiviertem Blocker.

**Der Seitenname ist schwer lesbar:**  
Im Dunkelmodus bleibt der Text „InfoHub“ im Quellcode fest schwarz gesetzt. Auf dem dunklen Hintergrund kann er deshalb schwer erkennbar sein. Das ist eine bestätigte Darstellungsbesonderheit des vorliegenden Quellcodes.

---

## 2.2 Dunkelmodus

Im Kopfbereich befindet sich rechts eine Schaltfläche mit dem Symbol **„🌗“**.

### Schritt für Schritt

1. Öffnen Sie InfoHub.
2. Klicken Sie auf die Schaltfläche **„🌗“**.
3. Die Seite wechselt zwischen:
   - hellem Hintergrund,
   - dunklem Hintergrund.
4. Ein erneuter Klick wechselt zurück zum vorherigen Zustand.

### Verhalten und Grenzen

- Die Einstellung wird zunächst nur für die aktuell geöffnete Seite verwendet.
- Im Quellcode ist keine Speicherung in `localStorage`, Cookies oder einem Server erkennbar. Daher wird der Modus beim Neuladen voraussichtlich nicht beibehalten.
- Eine Umschaltung mit der Tastatur ist grundsätzlich möglich, weil es sich um ein natives `<button>`-Element handelt. Eine zusätzliche sichtbare Tastaturhilfe ist nicht vorhanden.

---

# 3. Informationsbereiche

## 3.1 „Kalenderwoche“

Der erste Inhaltsbereich trägt die Überschrift **„Kalenderwoche“**.

Beim Laden der Seite berechnet die Seite anhand des lokalen Systemdatums die Kalenderwoche. Angezeigt wird beispielsweise:

> Kalenderwoche: **24**

Die konkrete Zahl hängt vom Datum und der Zeitzone des verwendeten Geräts ab.

### Bedienung

Dieser Bereich enthält keine Schaltflächen und benötigt keine Eingabe. Die Anzeige aktualisiert sich beim Neuladen der Seite.

### Hinweis

Die Berechnung orientiert sich an der üblichen ISO-Kalenderwoche. Ob die Einstellungen des Geräts oder eine manuelle Zeitzonenkorrektur gewünscht sind, ist im Quellcode nicht eindeutig erkennbar.

---

## 3.2 „Satz der Woche“

Der zweite Bereich trägt die Überschrift **„Satz der Woche“**.

Darin steht derzeit der feste Text:

> Kleine Schritte führen zu großen Veränderungen

### Bedienung

- Keine Eingabe erforderlich.
- Der Satz ändert sich nicht automatisch.
- Eine Konfiguration für wechselnde Sätze ist im Quellcode nicht erkennbar.

---

## 3.3 „Wort des Tages“

Der dritte Bereich trägt die Überschrift **„Wort des Tages“**.

Beim ersten Laden steht dort zunächst **„Lade...“**. Anschließend versucht die Seite, den neuesten Eintrag eines Merriam-Webster-RSS-Feeds über einen RSS-Proxy abzurufen.

Erfolgreich angezeigt werden können:

- die Bezeichnung des Wortes,
- ein Veröffentlichungsdatum,
- eine Beschreibung beziehungsweise Definition.

### Schritt für Schritt

1. Öffnen Sie die Seite.
2. Warten Sie, bis der Bereich „Wort des Tages“ geladen wurde.
3. Lesen Sie die Wortbezeichnung, das Datum und die Beschreibung.
4. Falls weiterhin **„Lade...“** steht, aktualisieren Sie die Seite und prüfen Sie Ihre Internetverbindung.

### Mögliche Fehleranzeige

Kann der Feed nicht geladen oder nicht verarbeitet werden, ersetzt die Seite den Inhalt durch:

> Fehler beim Laden.

### Problembehebung

1. Prüfen Sie die Internetverbindung.
2. Laden Sie die Seite vollständig neu.
3. Prüfen Sie, ob externe Ressourcen oder der verwendete RSS-Proxy blockiert werden.
4. Testen Sie die Seite in einem anderen aktuellen Browser.
5. Prüfen Sie, ob der zugrunde liegende Feed erreichbar ist.

**Hinweis:** Der genaue Grund eines Fehlers wird in der Oberfläche nicht angezeigt. Daher lässt sich nicht unterscheiden, ob beispielsweise der Feed, der Proxy, die Antwortformatierung oder die Netzwerkverbindung betroffen ist.

---

## 3.4 „News“

Der vierte Bereich trägt die Überschrift **„News“**.

Beim Laden steht zunächst **„Lade...“**. Danach werden folgende Einträge angezeigt:

1. ein fest im Quellcode hinterlegter News-Eintrag,
2. bis zu 15 Einträge aus einem Tagesschau-RSS-Feed.

Der feste Eintrag lautet:

- **Titel:** „Hide and Seek entfällt“
- **Datum:** „29.05.2026 11:15“
- **Beschreibung:** „Das geplante Event fällt wahrscheinlich aus.“

### Schritt für Schritt

1. Öffnen Sie die Seite.
2. Warten Sie auf den News-Bereich.
3. Lesen Sie die Überschrift, das Datum und die Beschreibung der einzelnen Meldungen.
4. Klicken Sie gegebenenfalls auf eine Meldung, sofern der geladene Intext einen anklickbaren Link enthält.

### Mögliche Fehleranzeige

Wenn das Laden fehlschlägt, erscheint:

> Fehler beim Laden.

### Problembehebung

1. Prüfen Sie die Internetverbindung.
2. Aktualisieren Sie die Seite.
3. Prüfen Sie, ob externe Feeds oder der RSS-Proxy durch Browser, Netzwerk oder Sicherheitssoftware blockiert werden.
4. Testen Sie die Seite in einem anderen Browser.
5. Prüfen Sie, ob der Tagesschau-Feed weiterhin erreichbar ist.

**Bestätigt:** Die fest codierte Meldung wird nur zusammen mit den aus dem Feed geladenen Meldungen dargestellt. Schlägt der Feedabruf fehl, wird der gesamte Bereich durch die Fehlermeldung ersetzt; die feste Meldung ist dann im normalen Ablauf nicht sichtbar.

---

# 4. Kundensupport-Chat

## 4.1 Zweck

Am rechten unteren Bildschirmrand befindet sich eine runde grüne Schaltfläche mit einem Chat-Symbol **„💬“**.

Sie öffnet einen Kundenservice mit der Bezeichnung:

- **„lamachub Kundenservice“**
- **„KI-gestützter Support“**

Zu Beginn begrüßt der Dienst den Besucher mit:

> Hallo! Wie kann ich Ihnen weiterhelfen?

## 4.2 Chat öffnen

1. Klicken Sie auf die runde Schaltfläche mit **„💬“**.
2. Der Chat erscheint als separates Fenster über der Website.
3. Das Eingabefeld **„Nachricht schreiben“** wird automatisch fokussiert.

Das Chatfenster besitzt eine feste Höhe von 520 Pixeln und ist auf Mobilgeräten so breit wie der verfügbare Bildschirm, mit einem kleinen Abstand zum Rand.

---

## 4.3 Nachricht senden

1. Tippen Sie Ihre Nachricht in das Feld **„Nachricht schreiben“**.
2. Klicken Sie auf die runde Senden-Schaltfläche mit dem Pfeilsymbol **„➤“**.
3. Ihre Nachricht erscheint als grüner Chat-Bubbles auf der rechten Seite.
4. Das Eingabefeld wird geleert.
5. Die Antwort des Kundenservice erscheint als weißer Chat-Bubble auf der linken Seite.

Alternativ kann das Formular mit der Eingabetaste abgeschickt werden, sofern der Fokus im Eingabefeld liegt.

### Eingabegrenzen

- Leere Nachrichten werden nicht gesendet.
- Führende und nachfolgende Leerzeichen werden entfernt.
- Das Eingabefeld erlaubt maximal **1.800 Zeichen**.
- Die Nachricht wird mit JSON an einen externen Worker-Endpunkt übertragen.

---

## 4.4 Chatverlauf

Im aktuellen Browserfenster wird ein Chatverlauf für zusammenhängende Antworten verwendet:

- Nach erfolgreicher Antwort werden die letzte Nutzer- und die letzte Assistenten-Nachricht gespeichert.
- Für die nächste Anfrage werden maximal die letzten 12 Verlaufseinträge berücksichtigt.
- Dieser Verlauf liegt im Arbeitsspeicher des Browsers und wird beim vollständigen Neuladen der Seite nicht wiederhergestellt.
- Im Quellcode ist keine dauerhafte Speicherung des Verlaufs erkennbar.

### Hinweis ab der 15. gesendeten Nachricht

Beim 15. gesendeten Message erscheint zusätzlich der Hinweis:

> Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.

Die eigentliche Antwort des Services wird danach normal verarbeitet.

---

## 4.5 Chat schließen

Im Kopfbereich des Chatfensters befindet sich rechts das Zeichen **„×“**.

1. Klicken Sie auf **„×“**.
2. Das Chatfenster wird ausgeblendet.
3. Über die Chat-Schaltfläche **„💬“** können Sie es wieder öffnen.

Beim Schließen wird der laufende Chatverlauf im Arbeitsspeicher nicht ausdrücklich gelöscht. Ob eine noch laufende Anfrage abgeschlossen wird, ist im Quellcode nicht eindeutig erkennbar.

---

## 4.6 Wenn keine Chatantwort erscheint

Bei einem Netzwerk-, Server- oder Verarbeitungsfehler zeigt der Kundenservice:

> Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.

Die gesendete Nachricht bleibt als Nutzerbubble sichtbar.

### Schrittweise Fehlerbehebung

1. Prüfen Sie die Internetverbindung.
2. Versuchen Sie es nach kurzer Zeit erneut.
3. Formulieren Sie die Anfrage kürzer und präziser.
4. Prüfen Sie, ob Browser- oder Sicherheitssoftware Anfragen an externe Dienste blockiert.
5. Öffnen Sie die Seite in einem anderen aktuellen Browser.
6. Prüfen Sie, ob die Seite über HTTPS bereitgestellt wird.

**Im Quellcode nicht eindeutig erkennbar:** Die technische Ursache der Fehlermeldung. Sie kann mehrere Netzwerk- oder Serverprobleme abdecken.

---

# 5. Optionale Rücksprungschaltfläche „Zurück“

## 5.1 Wann sie erscheint

Ein zusätzlicher Codeabschnitt kann links oben einen orangefarbenen Button mit der Aufschrift **„Zurück“** einblenden.

Die Schaltfläche wird nur angezeigt, wenn:

- die Seite in einem Frame eingebettet ist,
- die verweisende Seite exakt `www.lamachub.de` ist,
- die verweisende Adresse das sichere Protokoll `https:` verwendet.

Direkt aufgerufen und ohne entsprechenden Referrer erscheint die Schaltfläche nicht.

## 5.2 Funktionsweise

1. Klicken Sie auf **„Zurück“**.
2. Es wird die Hauptseite von lamachub.de im selben Tab geöffnet.

Die Schaltfläche verwendet technisch ein Shadow DOM, um die Gestaltung der einbettenden Seite weitgehend zu isolieren.

### Problembehebung

**Die Schaltfläche „Zurück“ fehlt:**

1. Prüfen Sie, ob die Seite tatsächlich in einem Frame eingebettet ist.
2. Prüfen Sie, ob die übergeordnete Seite von `www.lamachub.de` stammt.
3. Prüfen Sie, ob die übergeordnete Seite HTTPS verwendet.
4. Beachten Sie, dass die Prüfung den exakten Hostnamen `www.lamachub.de` verlangt. Andere Schreibweisen oder Subdomains werden nicht automatisch berücksichtigt.

---

# 6. Mobile Bedienung und Darstellung

Die Seite verwendet eine responsive meta-Angabe und ein einspaltiges Kartenlayout. Auf schmalen Bildschirmen werden die Karten untereinander dargestellt.

## 6.1 Chat auf Mobilgeräten

- Die Breite des Chatfensters passt sich dem verfügbaren Bildschirm an.
- Der Chat kann über die Schaltfläche **„💬“** geöffnet und über **„×“** geschlossen werden.
- Das Eingabefeld passt sich der verbleibenden Breite an.
- Im Quellcode ist keine separate Touch-optimierte Bedienlogik erkennbar; die verwendeten CSS-Eigenschaften unterstützen jedoch eine grundlegende mobile Nutzung.

## 6.2 News-Darstellung

Die News-Einträge werden untereinander dargestellt. Bei längeren Wörtern oder Texten sorgt die globale CSS-Regel `overflow-wrap:anywhere` für einen sauberen Zeilenumbruch.

---

# 7. Datenschutz und Berechtigungen

## 7.1 Konten
