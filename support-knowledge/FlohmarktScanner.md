<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: FlohmarktScanner -->
<!-- source-files: ["FlohmarktScanner/index.html"] -->

# FlohmarktScanner – Support-Dokumentation

**Vermuteter Zweck:** Der Quellcode-Auszug zeigt für „FlohmarktScanner“ bislang nur einen fest positionierten KI-gestützten Kundensupport-Chat („lamacHub Kundenservice“). Die eigentlichen Funktionen der Website, etwa Suche, Filter, Angebotslisten oder Benutzerkonten, sind im bereitgestellten Ausschnitt **nicht erkennbar**.

**Quellcode-Pfad:** `FlohmarktScanner/index.html`  
**Datum der Erstellung:** 14. Februar 2025

> **Hinweis zur Quellcodegrundlage:** Die Datei `FlohmarktScanner/index.html` wurde nur teilweise bereitgestellt. Die vorliegende Dokumentation beschreibt deshalb ausschließlich die daraus eindeutig hervorgehenden Funktionen. Weitere Seitenbestandteile und Serverabläufe sind **im Quellcode nicht eindeutig erkennbar**.

---

## 1. Überblick

Aus dem Quellcode ist folgender sichtbarer Bereich bestätigt:

- eine feste Support-Schaltfläche unten rechts,
- ein aufklappbares Chat-Fenster,
- ein Nachrichtenverlauf,
- ein Eingabefeld für Supportanfragen,
- eine Schaltfläche zum Absenden,
- eine kurze Statusanzeige während die Antwort erstellt wird,
- Unterstützung von formatierten Antworten mit Überschriften, Listen, Tabellen, Links und Codeblöcken,
- eine mobile Anpassung der Chat-Oberfläche.

Es ist **nicht bestätigt**, dass der Chat ausschließlich Fragen zu FlohmarktScanner beantwortet. Die sichtbare Bezeichnung lautet lediglich **„lamacHub Kundenservice“**.

---

## 2. Voraussetzungen

### 2.1 Technische Voraussetzungen

Bestätigt sind:

- ein aktueller Browser mit JavaScript-Unterstützung,
- eine funktionierende Netzwerkverbindung für den Abruf der Chatantwort,
- eine erreichbare externe Worker-Adresse, die im Quellcode hinterlegt ist.

Im Quellcode ist keine Anmeldung oder Registrierung für die Nutzung des Chats vorgesehen. Das Eingabefeld verlangt lediglich eine nicht leere Eingabe.

### 2.2 Inhaltliche Voraussetzungen

Für eine hilfreiche Anfrage empfiehlt es sich:

- die verwendete Seite oder Funktion zu benennen,
- das beobachtete Verhalten beschreiben,
- die bereits unternommenen Schritte nennen,
- bei technischen Problemen die verwendete Browser- und Betriebssystemversion angeben,
- Fehlermeldungen ohne sensible Daten wiedergeben.

Fehlermeldungen oder Screenshots sollten keine Passwörter, Zugangsdaten, Tokens, Zahlungsdaten oder personenbezogenen Informationen enthalten.

---

## 3. Sichtbare Bereiche der Website

### 3.1 Support-Schaltfläche

Unten rechts befindet sich eine runde grüne Schaltfläche mit einem geöffneten Arm-Zeichen.

Die Schaltfläche dient zum Öffnen des Kundenservice-Chats. Sie bleibt auf kleineren Bildschirmen ebenfalls rechts unten positioniert.

### 3.2 Chat-Fenster

Nach dem Öffnen erscheint rechts unten ein Fenster mit der Überschrift:

- **„lamacHub Kundenservice“**
- **„KI-gestützter Support“**

Oben rechts befindet sich die Schaltfläche **„×“** mit der Barrierefreiheitsbezeichnung „Chat schließen“.

Der Chat besteht aus drei Bereichen:

1. **Kopfbereich** mit Titel, Untertitel und Schließen-Schaltfläche,
2. **Nachrichtenbereich** mit der Begrüßung und späteren Antworten,
3. **Eingabebereich** mit Textfeld und Senden-Schaltfläche.

### 3.3 Nachrichtenbereich

Beim Öffnen ist folgende Begrüßung sichtbar:

> Hallo! Wie kann ich dir weiterhelfen?

Eigene Nachrichten erscheinen rechts in einem hellgrünen Feld. Antworten des Kundenservice erscheinen links in einem weißen Feld.

Während eine Antwort vorbereitet wird, zeigt der Chat eine animierte Statusanzeige mit drei Punkten. Sie ist als „Kundenservice antwortet“ gekennzeichnet.

Der Verlauf lässt sich vertikal scrollen. Neue Nachrichten werden automatisch nach unten g scrollt.

### 3.4 Eingabebereich

Das Eingabefeld trägt die Beschriftung:

- Platzhalter: **„Nachricht schreiben …“**
- Barrierefreiheitsbezeichnung: **„Deine Nachricht“**

Es gelten folgende bestätigte Einschränkungen:

- maximal **1.800 Zeichen**,
- das Feld darf nicht leer sein,
- die automatische Vervollständigung ist deaktiviert,
- während eine Anfrage verarbeitet wird, ist die Senden-Schaltfläche deaktiviert.

Rechts neben dem Eingabefeld befindet sich eine runde grüne Schaltfläche mit einem Papierflieger-Symbol.

---

## 4. Bedienung Schritt für Schritt

### 4.1 Kundenservice öffnen

1. Öffnen Sie die Website „FlohmarktScanner“.
2. Klicken Sie unten rechts auf die grüne Schaltfläche mit dem geöffneten Arm-Zeichen.
3. Das Chat-Fenster **„lamacHub Kundenservice“** öffnet sich.
4. Lesen Sie die Begrüßung und geben Sie Ihre Frage in das Feld **„Nachricht schreiben …“** ein.
5. Klicken Sie auf die runde Schaltfläche mit dem Papierflieger-Symbol.
6. Ihre Nachricht wird im Verlauf angezeigt.
7. Während die Antwort geladen wird, erscheint die Statusanzeige „Kundenservice antwortet“.
8. Die fertige Antwort erscheint links im Chat.
9. Für eine weitere Frage können Sie direkt eine neue Nachricht senden.

### 4.2 Chat schließen

1. Klicken Sie oben rechts im Chat-Fenster auf **„×“**.
2. Der Chat wird ausgeblendet.
3. Sie können ihn über die Support-Schaltfläche unten rechts erneut öffnen.

### 4.3 Nachricht mit Enter senden

Der Formularcode legt ein Formular mit einer Senden-Schaltfläche nahe. Ob die Eingabetaste allein eine Nachricht absendet, ist im gekürzten Ausschnitt **nicht eindeutig erkennbar**. Verwenden Sie daher für maximale Kompatibilität die sichtbare Senden-Schaltfläche.

---

## 5. Eingaben und Ausgaben

### 5.1 Eingabe

Der Besucher kann eine freitextförmliche Supportanfrage eingeben.

Zulässig sind grundsätzlich:

- normale Fließtexte,
- Fragen,
- Fehlerbeschreibungen,
- längere Schritte zur Fehlersuche,
- bis zu 1.800 Zeichen.

Ob einzelne Eingaben, Dateien, Bilder oder strukturierte Formulare besonders unterstützt werden, ist **im Quellcode nicht eindeutig erkennbar**.

### 5.2 Ausgabe

Der Kundenservice kann Antworten in verschiedenen Formaten darstellen:

- Absätze,
- Überschriften der Ebenen 1 bis 4,
- fette und kursive Schrift,
- durchgestrichenen Text,
- ungeordnete und geordnete Listen,
- Zitate,
- Tabellen,
- Inline-Code,
- mehrzeilige Codeblöcke,
- horizontale Trennlinien,
- HTTP- und HTTPS-Links.

Antworten können Links enthalten. Diese werden in einem neuen Tab geöffnet. Der Quellcode setzt dabei `rel="noopener noreferrer"`, um den neuen Tab vor einem Zugriff auf das Ausgangsfenster zu schützen.

### 5.3 Markdown-Unterstützung

Ein Codeblock beginnt mit drei Backticks:

````text
```text
Beispiel
```
````

Der Codeblock wird mit dunklem Hintergrund und hellem Text dargestellt.

Eine einfache Tabelle kann beispielsweise so aufgebaut sein:

```markdown
| Problem | Mögliche Lösung |
|---|---|
| Chat öffnet nicht | Seite neu laden |
```

Im Chat wird daraus eine scrollbare Tabelle mit Kopfzeile.

---

## 6. Datenschutz, Berechtigungen und Sicherheit

### 6.1 Übertragung von Nachrichten

Die Eingabe wird nicht nur lokal dargestellt, sondern zur Erzeugung einer Antwort an eine externe, im Quellcode festgelegte Web-Worker-Adresse übermittelt. Es ist daher zu erwarten, dass Nachrichteninhalte diese externe Dienststelle erreichen.

Ob dabei:

- eine Sitzungs-ID,
- eine Benutzer-ID,
- IP-Adressen,
- technische Browserinformationen,
- Inhalte zur Qualitätssicherung,
- eine Speicherung im Chatverlauf

übertragen oder verarbeitet werden, ist **im Quellcode nicht eindeutig erkennbar**.

### 6.2 Lokaler Chatverlauf

Der Quellcode verwaltet die Chat-Historie für die laufende Sitzung im Browser. Ob und wie lange Nachrichten dauerhaft gespeichert werden, ist **im Quellcode nicht eindeutig erkennbar**.

### 6.3 Keine Anmeldung im sichtbaren Code

Im gezeigten Chat-Bereich gibt es:

- keine Anmeldefunktion,
- keine Registrierung,
- keine sichtbare Rollenprüfung,
- keine sichtbare Freigabe von Nutzerprofilen.

Ob die gesamte Website FlohmarktScanner andere Anmelde- oder Berechtigungsbereiche enthält, ist **im Quellcode nicht eindeutig erkennbar**.

### 6.4 Behandlung sensibler Inhalte

Der Kundenservice ist KI-gestützt. Antworten können daher fehlerhaft, unvollständig oder unzutreffend sein. Besonders bei folgenden Themen sollten keine vertraulichen Daten eingegeben werden:

- Passwörter und Zugangsdaten,
- API-Schlüssel oder Tokens,
- Zahlungs- und Bankdaten,
- private Kontaktdaten,
- Gesundheitsdaten,
- vertrauliche Geschäftsinformationen.

Es wird empfohlen, solche Angaben vor dem Absenden zu entfernen.

### 6.5 Ausgabe von HTML und Links

Der Quellcode escapt den Antwortinhalt, bevor dieser in HTML eingesetzt wird. Das reduziert das Risiko, dass beliebiges HTML aus einer Antwort direkt ausgeführt wird.

Links werden nur erzeugt, wenn die Adresse ein gültiges HTTP- oder HTTPS-Schema verwendet. Andere Link-Schemata werden nicht als klickbare Hyperlinks übernommen.

---

## 7. Typische Probleme und Fehlerbehebung

### 7.1 Der Chat öffnet sich nicht

**Mögliche Ursache:** JavaScript ist deaktiviert, die Seite wurde nur teilweise geladen oder die Initialisierung ist fehlgeschlagen.

**Abhilfe:**

1. Prüfen Sie, ob JavaScript im Browser aktiviert ist.
2. Laden Sie die Seite vollständig neu.
3. Öffnen Sie die Website anschließend in einem aktuellen Browser.
4. Falls möglich, entfernen Sie zwischengespeicherte Dateien dieser Seite und laden Sie sie neu.

Ob eine gezielte Cache-Leerung offiziell unterstützt wird, ist **im Quellcode nicht eindeutig erkennbar**.

### 7.2 Die Nachricht wird nicht gesendet

**Mögliche Ursache:** Das Eingabefeld ist leer oder die maximale Länge wurde überschritten.

**Abhilfe:**

1. Geben Sie mindestens ein Zeichen ein.
2. Kürzen Sie die Nachricht auf höchstens 1.800 Zeichen.
3. Klicken Sie auf die Senden-Schaltfläche mit dem Papierflieger-Symbol.
4. Warten Sie, bis die vorherige Anfrage beantwortet wurde, da die Schaltfläche während der Verarbeitung deaktiviert ist.

### 7.3 Es erscheint keine Antwort

**Mögliche Ursache:** Die externe Antwortdienststelle ist nicht erreichbar, die Netzwerkverbindung ist unterbrochen oder die Anfrage wird noch verarbeitet.

**Abhilfe:**

1. Warten Sie kurz und prüfen Sie, ob die Statusanzeige noch aktiv ist.
2. Prüfen Sie die Netzwerkverbindung.
3. Laden Sie die Seite neu.
4. Formulieren Sie die Frage erneut in einem kürzeren, klaren Satz.
5. Falls das Problem dauerhaft besteht, wenden Sie sich über einen auf der Website vorhandenen weiteren Supportkanal an die Betreiber. Ob ein solcher Kanal existiert, ist **im Quellcode nicht eindeutig erkennbar**.

### 7.4 Die Antwort erscheint unvollständig oder falsch formatiert

**Mögliche Ursache:** Die Antwort enthält Markdown, das nicht vollständig vom lokalen Darstellungscode unterstützt wird.

**Abhilfe:**

1. Bitten Sie um eine kürzere, klarer gegliederte Antwort.
2. Bitten Sie um Aufzählungspunkte statt eines langen Fließtexts.
3. Bitten Sie bei Code um einen eigenen Codeblock.
4. Verwenden Sie bei Tabellen eine einfache Struktur mit Kopfzeile und Trennzeile.

### 7.5 Ein Link funktioniert nicht

**Mögliche Ursache:** Der Link ist ungültig, verweist nicht auf HTTP beziehungsweise HTTPS oder die Zielseite ist nicht erreichbar.

**Abhilfe:**

1. Prüfen Sie, ob die Zielseite in einem neuen Tab geöffnet wurde.
2. Kopieren Sie die Adresse in einen neuen Tab, falls nötig.
3. Prüfen Sie die Netzwerkverbindung.
4. Bitten Sie den Kundenservice um einen aktuellen Link.

### 7.6 Der Chat ist auf dem Smartphone zu klein

Der Code enthält eine mobile Layoutanpassung. Das Chat-Fenster nutzt auf kleinen Bildschirmen nahezu die gesamte verfügbare Breite und wird auf die Bildschirmhöhe abgestimmt.

**Abhilfe:**

1. Drehen Sie das Gerät bei Bedarf in die Querlage.
2. Schließen Sie offene Browser- oder Bedienleisten.
3. Verkleinern Sie die Browservorinstallation, damit weniger Fläche vom Chat eingenommen wird.
4. Aktualisieren Sie Browser und Betriebssystem.

### 7.7 Die Seite sieht ungewöhnlich aus

Im bereitgestellten `index.html` stehen die Inhalte in einem eingebetteten RTF-artigen Block. Diese Darstellung kann je nach HTML-Parser zu unerwarteten Ergebnissen führen.

**Abhilfe:**

1. Nutzen Sie einen aktuellen Standardbrowser.
2. Laden Sie die Seite neu.
3. Falls die gesamte Seite fehlerhaft dargestellt wird, melden Sie dies mit Browser, Gerät und Fehlerbeschreibung.

Ob die Datei im Repository durch ein anderes Build-System erzeugt oder anschließend umgewandelt wird, ist **im Quellcode nicht eindeutig erkennbar**.

---

## 8. Barrierefreiheit

Im sichtbaren Code sind folgende Maßnahmen bestätigt:

- der Open-Button besitzt die Bezeichnung „Kundensupport öffnen“,
- der Close-Button besitzt die Bezeichnung „Chat schließen“,
- der Senden-Button besitzt die Bezeichnung „Nachricht senden“,
- das Eingabefeld besitzt die Bezeichnung „Deine Nachricht“,
- der Nachrichtenbereich ist als Live-Bereich für neue Inhalte gekennzeichnet,
- während der Antwortberechnung wird ein Status für „Kundenservice antwortet“ ausgegeben,
- bei reduzierter Bewegungseinstellung werden Animationen
