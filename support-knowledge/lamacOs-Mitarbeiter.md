<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: lamacOs-Mitarbeiter -->
<!-- source-files: ["lamacOs-Mitarbeiter/index.html"] -->

# lamacOs-Mitarbeiter – Support-Dokumentation

**Website:** lamacOs-Mitarbeiter  
**Vermuteter Zweck:** Interne Anwendung zur Mitarbeiter-Suche anhand eines Codes sowie zur Pflege von Mitarbeiterdatensätzen in einem geschützten Admin-Bereich. Zusätzlich enthält die Seite einen KI-gestützten Kundensupport-Chat.  
**Quellcode-Pfad:** `lamacOs-Mitarbeiter/index.html`  
**Erstellungsdatum:** 18. Mai 2026

---

## 1. Überblick

Die Website „lamacOs-Mitarbeiter“ besteht aus drei sichtbaren Bereichen:

1. **Mitarbeiter-Suche**
   - Eingabe eines Codes
   - Anzeige von Name, Job, Gehalt und E-Mail

2. **Admin Bereich**
   - Sichtbar, wenn der eingegebene Code dem gespeicherten Admin-Code entspricht
   - Anlegen, Ändern und Löschen von Mitarbeiterdatensätzen

3. **lamachub Kundenservice**
   - Chat-Fenster mit KI-gestütztem Support
   - Wird über eine schwebende Schaltfläche geöffnet

Die Oberfläche besitzt außerdem eine Umschaltfunktion zwischen einem hellen und einem dunklen Farbschema.

---

## 2. Voraussetzungen und technische Grundlagen

### 2.1 Internetverbindung

Für die vollständige Nutzung ist eine Internetverbindung erforderlich, da die Website Daten aus einer Firebase-Echtzeitdatenbank lädt und die Chat-Antworten über einen externen Dienst abruft.

### 2.2 Unterstützter Browser

Der Quellcode verwendet moderne JavaScript-Funktionen wie Module, `fetch`, `async/await` und CSS-Eigenschaften wie `backdrop-filter`. Ein aktueller Browser wie eine aktuelle Version von Chrome, Edge, Firefox oder Safari wird vorausgesetzt.

**Im Quellcode nicht eindeutig erkennbar:**

- Eine ausdrücklich genannte Mindestbrowser- oder Mindestbetriebssystemversion.
- Eine Offline-Funktion.
- Ein Hinweis darauf, ob die Website in einem certain App-Frame oder als PWA installiert werden kann.

### 2.3 Zugriff auf die Datenbank

Die Website verwendet eine Firebase-Echtzeitdatenbank. Die Mitarbeiterdaten werden automatisch in einen lokalen Zwischenspeicher geladen und bei Änderungen der Datenbank aktualisiert.

Die im Quellcode sichtbaren Firebase-Konfigurationswerte sind sensible Projektkonfigurationen. Sie werden in dieser Dokumentation bewusst nicht vollständig wiedergegeben.

---

## 3. Aufbau und sichtbare Bereiche

## 3.1 Kopfbereich

Im Kopfbereich befindet sich links:

- ein Logo,
- der Schriftzug **„lamacOs Mitarbeiter“**.

Rechts befindet sich eine Schaltfläche mit dem Symbol:

**🌙 / ☀️**

Mit dieser Schaltfläche kann zwischen hellem und dunklem Erscheinungsbild gewechselt werden. Die Auswahl wird beim erneuten Laden der Seite nicht dauerhaft gespeichert.

### Bedienung

1. Klicken Sie auf **🌙 / ☀️**.
2. Das Farbschema wechselt unmittelbar.
3. Erneutes Klicken stellt das vorherige Schema wieder her.

---

## 3.2 Mitarbeiter-Suche

Im ersten Inhaltsbereich befindet sich ein Eingabefeld mit dem Platzhalter:

**„Code eingeben“**

Darunter steht die Schaltfläche:

**„Suchen“**

### Schrittweise Bedienung

1. Öffnen Sie die Website.
2. Klicken Sie in das Feld **„Code eingeben“**.
3. Geben Sie den gesuchten Mitarbeiter-Code ein.
4. Klicken Sie auf **„Suchen“**.
5. Im anschließend eingeblendeten Ergebnisbereich werden gegebenenfalls folgende Angaben angezeigt:
   - **Name**
   - **Job**
   - **Gehalt**
   - **Email**
6. Wenn kein passender Datensatz gefunden wird, erscheint die Meldung **„Nicht gefunden.“**.

### treatment of Leer- und Großschreibung

- Der eingegebene Code wird getrimmt, das bedeutet: Leerzeichen am Anfang und Ende werden entfernt.
- Für die Suche wird der Code in Kleinbuchstaben umgewandelt.
- Beim Speichern und Löschen wird der Code ebenfalls in Kleinbuchstaben umgewandelt.

**Im Quellcode nicht eindeutig erkennbar:**

- Ob der Code bei der Vergabe nur aus Ziffern, Buchstaben oder aus einer Kombination bestehen darf.
- Ob Groß- und Kleinschreibung bei der Datenbank selbst durchgängig relevant sind.
- Welche Rolle ein Code genau hat und ob er ausgehändigt oder weitergegeben werden soll.

---

## 3.3 Ergebnisbereich

Der Ergebnisbereich ist zunächst verborgen. Nach einem Klick auf **„Suchen“** wird er eingeblendet.

Bei einem Treffer werden die vier gespeicherten Felder des Mitarbeiterdatensatzes angezeigt:

- Name
- Job
- Gehalt
- E-Mail-Adresse

Der Inhalt wird direkt aus der Firebase-Datenbank in den Browser geladen.

### Sichtbarkeit und Berechtigungen

**Wichtiger Hinweis:** Im sichtbaren Quellcode ist keine Anmeldung und keine Prüfung einer Benutzerberechtigung für die normale Suche erkennbar. Jede Person, die die Website öffnet und einen bekannten oder erratenen Code eingibt, kann grundsätzlich die angezeigten Angaben abrufen.

Die Anwendung sollte daher nur in einer vertrauenswürdigen Umgebung oder mit zusätzlichen technischen Schutzmechanismen bereitgestellt werden. Ob solche Schutzmechanismen außerhalb des gezeigten Quellcodes vorhanden sind, ist **im Quellcode nicht eindeutig erkennbar**.

---

## 3.4 Admin Bereich

Der Admin-Bereich ist zunächst verborgen. Er wird eingeblendet, wenn der in **„Code eingeben“** eingegebene Wert nach dem Trimmen und Umwandeln in Kleinbuchstaben dem in der Datenbank hinterlegten Admin-Code entspricht.

Bei erfolgreicher Prüfung erscheint der Abschnitt:

**„Admin Bereich“**

Darin befinden sich fünf Eingabefelder:

- **„Code“**
- **„Name“**
- **„Job“**
- **„Gehalt“**
- **„Email“**

Außerdem gibt es zwei Schaltflächen:

- **„Speichern“**
- **„Löschen“**

### 3.4.1 Speichern oder Ändern eines Mitarbeiterdatensatzes

1. Öffnen Sie den Admin-Bereich mit dem Admin-Code.
2. Geben Sie bei **„Code“** den gewünschten Mitarbeiter-Code ein.
3. Geben Sie **„Name“**, **„Job“**, **„Gehalt“** und **„Email“** ein.
4. Klicken Sie auf **„Speichern“**.
5. Nach erfolgreichem Schreiben wird die Meldung **„Gespeichert!“** angezeigt.

#### Verhalten der Schaltfläche „Speichern“

Die Funktion wird nur ausgeführt, wenn alle fünf Felder nach dem Entfernen von Leerzeichen einen nichtleeren Wert enthalten. Andernfalls geschieht sichtbar nichts; es wird weder eine Fehlermeldung angezeigt noch eine Datenänderung vorgenommen.

Bei einem bereits vorhandenen Code werden die Daten unter demselben Pfad gespeichert und damit durch die neuen Werte ersetzt.

**Im Quellcode nicht eindeutig erkennbar:**

- Ob beim Speichern eine zusätzliche Bestätigung angezeigt wird.
- Ob Firebase-Fehler beim Speichern sichtbar behandelt werden.
- Ob das Gehalt numerisch validiert wird.
- Ob die E-Mail-Adresse formal geprüft wird.
- Ob Audit-Protokolle oder Änderungshistorien erstellt werden.

---

### 3.4.2 Löschen eines Mitarbeiterdatensatzes

1. Öffnen Sie den Admin-Bereich mit dem Admin-Code.
2. Geben Sie bei **„Code“** den Code des zu löschenden Datensatzes ein.
3. Klicken Sie auf **„Löschen“**.
4. Nach dem Löschvorgang wird die Meldung **„Gelöscht!“** angezeigt.

Ist das Feld **„Code“** leer, wird keine Aktion ausgeführt und keine Meldung angezeigt.

### Wichtige Hinweise zum Löschen

- Der Code wird vor dem Löschen getrimmt und in Kleinbuchstaben umgewandelt.
- Der Datensatz wird unmittelbar aus der Datenbank entfernt.
- Vor dem Klick auf **„Löschen“** gibt es keine sichtbare Rückfrage.
- Das Löschen kann deshalb durch einen versehentlichen oder falschen Code versehentlich den falschen Datensatz betreffen. Prüfen Sie den Code daher vor dem Klick sorgfältig.

---

## 3.5 lamachub Kundenservice

Rechts unten befindet sich eine runde grüne Schaltfläche mit einem Chat-Symbol:

**💬**

Die Schaltfläche besitzt die Barrierefreiheitsbezeichnung **„Kundensupport öffnen“**.

### Chat öffnen

1. Klicken Sie auf **💬**.
2. Das Chat-Fenster **„lamachub Kundenservice“** mit dem Untertitel **„KI-gestützter Support“** öffnet sich.
3. Das Eingabefeld **„Nachricht schreiben“** wird automatisch fokussiert.
4. Eine Begrüßung erscheint:  
   **„Hallo! Wie kann ich Ihnen weiterhelfen?“**

### Nachricht senden

1. Tippen Sie Ihre Nachricht in das Feld **„Nachricht schreiben“**.
2. Klicken Sie auf die Senden-Schaltfläche **➤**, oder senden Sie das Formular mit der Eingabetaste.
3. Ihre Nachricht erscheint im Chat als grüne Nachricht.
4. Das Eingabefeld wird geleert.
5. Nach erfolgreicher Antwort erscheint die Antwort des Kundenservice als weiße Chat-Nachricht.

### Chat schließen

- Klicken Sie oben rechts im Chat-Fenster auf **×**.
- Die Schaltfläche besitzt die Barrierefreiheitsbezeichnung **„Chat schließen“**.

### Eingabelänge

Das Eingabefeld besitzt eine maximale Länge von 1800 Zeichen. Eine Eingabe jenseits dieser Grenze ist im normalen Eingabefeld nicht möglich.

### Chatverlauf

- Der Browser sendet beim Anfragen die aktuelle Nachricht zusammen mit dem bisherigen Verlauf an den Support-Dienst.
- Nach erfolgreicher Antwort werden die letzte Nutzer- und Antwortnachricht zum Verlauf hinzugefügt.
- Der an den Dienst übertragene Verlauf wird anschließend auf die letzten zwölf Verlaufseinträge begrenzt.
- Die Begrüßung sowie Fehler- und Hinweistexte werden nicht ausdrücklich als Verlaufseinträge gespeichert.

**Im Quellcode nicht eindeutig erkennbar:**

- Welche Daten der Konversation serverseitig dauerhaft gespeichert oder protokolliert werden.
- Wie lange solche Daten aufbewahrt werden.
- Welches Modell oder welcher Wissensbestand hinter dem Support-Dienst steht.
- Ob der Dienst Zugriff auf andere Daten des Mitarbeitersystems erhält.
- Ob Antworten verbindlich sind.
- Ob personenbezogene oder vertrauliche Informationen in den Chat geschrieben werden sollen.

### Hinweis nach 15 Nachrichten

Nach dem 15. gesendeten Text wird im Chat automatisch der Hinweis angezeigt:

> „Hinweis: Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.“

Der Chat bleibt weiterhin nutzbar.

---

## 4. Typische Aufgaben

## 4.1 Mitarbeiterinformationen abrufen

**Voraussetzung:** Sie kennen den gesuchten Code.

1. Geben Sie den Code in das Feld **„Code eingeben“** ein.
2. Klicken Sie auf **„Suchen“**.
3. Lesen Sie die angezeigten Angaben im Ergebnisbereich.

---

## 4.2 Einen Mitarbeiterdatensatz anlegen

**Voraussetzung:** Sie kennen den Admin-Code.

1. Öffnen Sie den Admin-Bereich.
2. Geben Sie einen neuen Code ein.
3. Füllen Sie alle weiteren Felder aus.
4. Klicken Sie auf **„Speichern“**.
5. Warten Sie auf **„Gespeichert!“**.

---

## 4.3 Einen Mitarbeiterdatensatz ändern

1. Öffnen Sie den Admin-Bereich.
2. Geben Sie den vorhandenen Code ein.
3. Tragen Sie die neuen Werte für **„Name“**, **„Job“**, **„Gehalt“** und **„Email“** ein.
4. Klicken Sie auf **„Speichern“**.
5. Warten Sie auf **„Gespeichert!“**.

---

## 4.4 Einen Mitarbeiterdatensatz löschen

1. Öffnen Sie den Admin-Bereich.
2. Geben Sie den exakten Code ein.
3. Prüfen Sie den Code besonders sorgfältig.
4. Klicken Sie auf **„Löschen“**.
5. Warten Sie auf **„Gelöscht!“**.

---

## 4.5 Das Erscheinungsbild wechseln

1. Klicken Sie oben rechts auf **🌙 / ☀️**.
2. Die Seite wechselt zwischen hellem und dunklem Farbschema.

---

## 5. Typische Probleme und Fehlerbehebung

## 5.1 Es erscheint „Nicht gefunden.“

### Mögliche Ursachen

- Der Code wurde falsch eingegeben.
- Der Code enthält zusätzliche Leerzeichen oder andere unsichtbare Zeichen.
- Es existiert kein Datensatz mit diesem Code.
- Der Code wurde in Großbuchstaben eingegeben, obwohl der gespeicherte Code in Großbuchstaben abweichend erfasst wurde.
- Die Datenbankverbindung oder der Datenabruf ist noch nicht abgeschlossen.
- Der Datensatz wurde zwischenzeitlich gelöscht.

### Abhilfe

1. Entfernen Sie Leerzeichen vor und nach dem Code.
2. Prüfen Sie die Schreibweise des Codes.
3. Versuchen Sie die Suche erneut.
4. Falls der Datensatz existieren sollte, öffnen Sie den Admin-Bereich und speichern Sie die vollständigen Angaben erneut.

**Hinweis:** Der Code wird für die Suche in Kleinbuchstaben umgewandelt. Das bedeutet: Eine andere ursprüngliche Groß-/Kleinschreibung kann beim direkten Datenbankpfad trotzdem zu einem abweichenden Ergebnis führen, sofern dort unterschiedliche Schreibweisen gespeichert wurden.

---

## 5.2 Der Admin-Bereich erscheint nicht

### Mögliche Ursachen

- Der eingegebene Code ist nicht der Admin-Code.
- Der Admin-Code wurde noch nicht in der Datenbank hinterlegt.
- Der eingegebene Wert enthält zusätzliche Leerzeichen.
- Die Datenbankverbindung ist gestört.
- Der Admin-Code wurde zwischenzeitlich geändert.

### Abhilfe

1. Entfernen Sie Leerzeichen am Anfang und Ende.
2. Prüfen Sie die Schreibweise.
3. Versuchen Sie es erneut.
4. Wenden Sie sich an die zuständige Administrationsperson.

**Im Quellcode nicht eindeutig erkennbar:**

- Wie der Admin-Code ursprünglich gesetzt oder zurückgesetzt wird.
-
