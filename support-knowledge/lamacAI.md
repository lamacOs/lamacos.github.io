<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: lamacAI -->
<!-- source-files: ["lamacAI/index.html"] -->

# lamacAI – Support-Dokumentation

**Vermuteter Zweck:** lamacAI ist ein browserbasierter KI-Chat für Kurznachrichten und allgemeinen Support. Die Anwendung übergibt Nachrichten an einen serverseitigen Worker und zeigt dessen Antwort im Chat an.

**Quellcode-Pfad:** `lamacAI/index.html`

**Datum der Erstellung:** 15. März 2026

> **Hinweis zur Quellcode-Basis:** Diese Dokumentation basiert ausschließlich auf dem bereitgestellten Auszug aus `lamacAI/index.html`. Einige Aussagen, insbesondere zum Worker, zu gespeicherten Daten und zu möglichen Einbindungsorten, sind im Quellcode nicht eindeutig erkennbar.

---

## 1. Überblick

lamacAI bietet eine einzelne Chat-Oberfläche mit folgenden Bestandteilen:

- Kopfbereich mit dem Namen **„lamacAI“**
- Untertitel **„Kurznachrichten KI“**
- Datenschutz- und Sicherheitshinweis
- Chatverlauf mit Tagesanzeige **„HEUTE“**
- Eingabefeld mit dem Platzhalter **„Nachricht schreiben“**
- Senden-Schaltfläche mit dem Pfeilsymbol **„➤“**
- Hinweis, dass Antworten KI-generiert sind
- Optionaler Button **„Zurück“** zu `www.lamachub.de`, wenn die Seite von dieser Domain geöffnet wurde

Die Oberfläche ist responsiv gestaltet und kann daher auch auf kleinen Bildschirmen verwendet werden.

---

## 2. Voraussetzungen

Für die Nutzung werden ein moderner Browser, eine Internetverbindung und grundsätzlich JavaScript vorausgesetzt.

Bestätigte technische Voraussetzungen:

- Die Seite verwendet HTML5 und JavaScript.
- Chat-Anfragen werden per `fetch` mit `POST` gesendet.
- Der Browser muss `fetch`, Web Storage? Nein – Web Storage wird nicht verwendet – sowie moderne DOM-Funktionen unterstützen.
- Die Seite ist unter einer Adresse erreichbar, über die der Worker-Endpunkt erreichbar ist.
- Für die zusätzliche Navigationsschaltfläche **„Zurück“** muss die Seite über `https://www.lamachub.de` aufgerufen worden sein.

Im Quellcode nicht eindeutig erkennbar:

- Unterstützte Browser und Mindestversionen
- Ob die Seite ausschließlich eingebettet verwendet wird
- Ob eine Anmeldung erforderlich ist
- Ob der Worker eine Authentifizierung, ein Authentifizierungsschlüssel, ein Rate-Limit oder eine Zugriffskontrolle verwendet

---

## 3. Sichtbare Bereiche

### 3.1 Kopfbereich

Im Kopfbereich befinden sich:

- Ein rundes Avatar-Feld mit den Buchstaben **„LC“**
- Die Überschrift **„lamacAI“**
- Der Status **„Kurznachrichten KI“**
- Rechts den Hinweis:
  - **„Keine Notfallhilfe“**
  - **„Bitte keine sensiblen Daten senden“**

Auf schmalen Bildschirmen wird der rechte Datenschutzhinweis ausgeblendet. Der grundlegende Warnhinweis bleibt dennoch inhaltlich relevant.

### 3.2 Chatverlauf

Der Chatbereich besitzt die technische Bezeichnung `aria-live="polite"`. Dadurch können neue Inhalte von assistiven Techniken wahrgenommen werden.

Zu Beginn zeigt die Seite:

- Die Tagesmarkierung **„HEUTE“**
- Eine Begrüßung des virtuellen Supports:
  > **„Hallo! Wie kann ich Ihnen helfen?“**

Die erste Begrüßung wird links und die eigene Nachricht rechts dargestellt. Antworten des virtuellen Supports erscheinen ebenfalls links.

Jede Nachricht erhält automatisch eine lokale Uhrzeit im Format mit Stunde und Minute. Die konkrete Zeitzone richtet sich nach der Browsereinstellung.

### 3.3 Eingabebereich

Im Eingabebereich findet sich:

- Ein Eingabefeld mit der Beschriftung **„Nachricht schreiben“**
- Eine runde Schaltfläche **„➤“** mit der Barrierefreiheitsbezeichnung **„Senden“**

Das Eingabefeld akzeptiert maximal **1.800 Zeichen**. Nach dem Absenden wird der Inhalt des Feldes geleert.

### 3.4 Fußbereich

Im Fußbereich steht:

> **„Antworten werden KI-generiert und können Fehler enthalten.“**

Damit wird ausdrücklich darauf hingewiesen, dass die Antworten nicht in jedem Fall korrekt oder verbindlich sind.

### 3.5 Schaltfläche „Zurück“

Unter bestimmten Bedingungen wird zusätzlich eine orange Schaltfläche **„Zurück“** angezeigt.

Sie erscheint nur, wenn:

1. Die Seite in einem Browser ausgeführt wird.
2. Die Referrer-URL vorhanden ist und ausgewertet werden kann.
3. Das Referrer-Protokoll `https:` ist.
4. Der Hostname exakt `www.lamachub.de` lautet.

Ein Klick navigiert im selben Tab zu:

`https://www.lamachub.de/`

Die Schaltfläche liegt technisch in einem separaten Shadow DOM, um die Formatierung der einbettenden Seite nicht zu beeinflussen.

---

## 4. Chat bedienen

### 4.1 Eine Nachricht senden

1. Öffnen Sie die lamacAI-Seite in einem aktuellen Browser.
2. Klicken Sie in das Feld **„Nachricht schreiben“**.
3. Geben Sie Ihre Nachricht ein.
4. Klicken Sie auf **„➤“** oder drücken Sie die Eingabetaste.
5. Ihre Nachricht wird rechts im Chatverlauf angezeigt.
6. Während der Verarbeitung erscheint der Status:
   > **„Support antwortet …“**
7. Die Antwort des virtuellen Supports wird anschließend links angezeigt.
8. Das Eingabefeld wird wieder aktiviert und für die nächste Nachricht fokussiert.

### 4.2 Mehrere Nachrichten senden

Sie können weitere Nachrichten direkt im selben Chatverlauf senden. Vor dem Absenden muss gewartet werden, bis die vorherige Anfrage beantwortet wurde.

Während des laufenden Vorgangs ist die Senden-Schaltfläche deaktiviert und erscheint optisch abgedunkelt.

### 4.3 Kontext für aufeinanderfolgende Nachrichten

Bestätigt ist, dass die Anwendung einen begrenzten Verlauf der bisherigen Unterhaltung an den Worker übergibt. Nach einer erfolgreichen Antwort werden die aktuelle Nutzernachricht und die Antwort des Supports zum Verlauf hinzugefügt.

Der Verlauf wird auf die letzten **12 Einträge** gekürzt. Damit können mehrere zusammenhängende Einträge berücksichtigt werden; wie viele vollständige Fragen-Antwort-Paare damit erhalten bleiben, hängt von der Anzahl der Einträge ab.

Im Quellcode nicht eindeutig erkennbar:

- Ob der Worker den übergebenen Verlauf fachlich auswertet
- Ob zusätzliche serverseitige Gesprächsdaten existieren
- Ob der Verlauf dauerhaft gespeichert wird
- Welche fachlichen Themen oder Systemanweisungen der Worker verwendet

### 4.4 Nachrichtenhinweis nach 15 Sendungen

Nach dem 15. gesendeten Text wird einmalig ein zusätzlicher Hinweis eingeblendet:

> **„Hinweis: Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen. So kann unser Support schneller helfen.“**

Dieser Hinweis:

- erscheint automatisch,
- wird in einem farblich hervorgehobenen Bereich dargestellt,
- wird nur einmal pro geladenem Seitenaufruf angezeigt,
- ist kein Fehler.

---

## 5. Eingaben, Ausgaben und Verarbeitung

### 5.1 Eingabe

Die Website erwartet genau ein sichtbares Eingabefeld für Chatnachrichten.

Regeln:

- Leere Nachrichten oder reine Leerzeichen werden nicht gesendet.
- Die maximale Länge beträgt 1.800 Zeichen.
- Das Feld verwendet `autocomplete="off"`.
- Der zu sendende Text wird getrimmt, bevor er verarbeitet wird.

### 5.2 Datenübergabe an den Server

Der Quellcode sendet die Nachricht und den bisherigen Chatverlauf per JSON an einen festgelegten Worker-Endpunkt. Der sichtbare Ablauf ist:

1. Nutzertext wird übernommen.
2. Eigene Nachricht wird sofort angezeigt.
3. Senden-Schaltfläche wird deaktiviert.
4. Ladeanzeige **„Support antwortet …“** wird eingeblendet.
5. Der Worker wird angefragt.
6. Die Antwort wird angezeigt.
7. Erfolgreiche Nachricht und Antwort werden dem lokalen Verlauf hinzugefügt.
8. Die Ladeanzeige wird entfernt.
9. Die Senden-Schaltfläche wird wieder aktiviert.

### 5.3 Ausgabe

Erwartet wird eine JSON-Antwort mit einem Antworttext im Feld `reply`. Wird eine andere oder fehlerhafte Antwort geliefert, ist nicht eindeutig erkennbar, wie sie verarbeitet wird.

Die Rückmeldung an Besucherinnen und Besucher kann folgende Formen haben:

- Eine reguläre Antwort des virtuellen Supports
- Eine Fehlermeldung mit gelbem Hinweisstil
- Die Begrüßung, wenn die Einrichtung noch nicht abgeschlossen ist

---

## 6. Datenschutz und sensible Informationen

Die Oberfläche weist ausdrücklich darauf hin:

> **„Bitte keine sensiblen Daten senden“**

Zusätzlich gilt:

> **„Keine Notfallhilfe“**

Daher sollten in lamacAI keine personenbezogenen, vertraulichen, medizinischen, rechtlichen, finanziellen oder sicherheitskritischen Informationen eingegeben werden.

Aus dem bereitgestellten Quellcode lässt sich bestätigen:

- Die Nachricht wird an einen externen Worker-Endpunkt übertragen.
- Bis zu 12 Verlaufseinträge werden bei der nächsten Anfrage mitgesendet.
- Der Browser sendet dabei unter anderem den Inhalt des Nachrichtenfelds als JSON.
- Der Quellcode enthält keine sichtbare Speicherung im `localStorage` oder `sessionStorage`.
- Nach einem Neuladen der Seite wird der im Browser aufgebaute Chatverlauf nicht aus dieser Datei wiederhergestellt.

Im Quellcode nicht eindeutig erkennbar:

- Ob der Worker Nachrichten dauerhaft speichert
- Ob protokolliert oder zur Verbesserung des Supports weiterverarbeitet werden
- Welche Auftragsverarbeitungs- und Löschfristen gelten
- Ob eine Datenschutzerklärung oder ein Link zu Privacy-Einstellungen vorhanden ist
- Ob eine Datenübertragung in Drittländer stattfindet
- Welche Löschfunktionen für Support-Verläufe bestehen
- Ob der Kontakt per E-Mail, Telefon oder über eine Host-Plattform möglich ist

**Empfehlung:** Geben Sie nur Informationen ein, die für die konkrete Supportfrage erforderlich sind. Verwenden Sie keine echten Geheimnisse, Zugangsdaten oder personenbezogenen Daten.

---

## 7. Berechtigungen und Zugriff

Im bereitgestellten Quellcode ist keine Benutzeranmeldung sichtbar. Auch eine Rollen- oder Rechteverwaltung ist nicht erkennbar.

Die Seite kann daher zunächst von jedem erreichbaren Nutzer ohne erkennbare Anmeldung geöffnet und verwendet werden.

Ob der serverseitige Worker zusätzliche Zugriffsprüfungen durchführt, ist **im Quellcode nicht eindeutig erkennbar**. Die technische Erreichbarkeit der Chat-Oberfläche bedeutet deshalb nicht automatisch, dass alle Nutzer denselben Funktionsumfang erhalten.

---

## 8. Typische Probleme und Fehlerbehebung

### 8.1 Es wird keine Antwort angezeigt

**Mögliche bestätigte Ursache:** Die Anfrage an den Worker ist fehlgeschlagen oder der Server hat einen Fehlerstatus zurückgegeben.

**Lösung:**

1. Warten Sie, bis die Ladeanzeige **„Support antwortet …“** verschwindet.
2. Prüfen Sie Ihre Internetverbindung.
3. Laden Sie die Seite neu.
4. Senden Sie die Nachricht erneut.
5. Falls der Fehler bleibt, wenden Sie sich über einen auf `www.lamachub.de` verfügbaren Supportweg an den Betreiber.

Ob eine Wiederholung automatisch erfolgt, ist nicht erkennbar. Im Quellcode erfolgt kein automatischer Wiederholungsversuch.

### 8.2 Die Fehlermeldung nennt, dass der Kundenservice nicht erreichbar ist

Diese Meldung erscheint, wenn die Serverantwort nicht erfolgreich war und kein verständlicher Fehlertext übermittelt wurde.

**Lösung:**

- Internetverbindung prüfen
- Seite neu laden
- später erneut versuchen
- Worker beziehungsweise Serverbetrieb prüfen lassen

### 8.3 Es erscheint: „Der Kundenservice wird noch eingerichtet.“

Diese Meldung wird angezeigt, wenn die konfigurierte Worker-Adresse noch den in der Implementierung vorgesehenen Platzhalter für einen nicht veröffentlichten Worker enthält.

Die Meldung ist im aktuellen Auszug zwar durch den festgelegten Live-Endpunkt nicht unmittelbar erwartbar, die Prüfung ist aber weiterhin im Code vorhanden.

**Lösung:** Der Seitenbetreiber muss den Worker-Endpunkt korrekt konfigurieren und veröffentlichen. Endgültige Konfigurationswerte werden in dieser Dokumentation bewusst nicht wiedergegeben.

### 8.4 Die Senden-Schaltfläche reagiert nicht

**Mögliche Ursache:** Es wird bereits eine Anfrage verarbeitet.

**Lösung:**

1. Warten Sie, bis die Ladeanzeige verschwindet.
2. Falls sie dauerhaft sichtbar bleibt, laden Sie die Seite neu.
3. Senden Sie die Nachricht anschließend erneut.

### 8.5 Eine Eingabe wird nicht gesendet

**Mögliche Ursache:** Das Eingabefeld enthält nur Leerzeichen.

**Lösung:** Geben Sie mindestens ein sichtbares Zeichen ein und senden Sie die Nachricht erneut.

### 8.6 Eine sehr lange Nachricht lässt sich nicht vollständig eingeben

Das Eingabefeld ist auf **1.800 Zeichen** begrenzt.

**Lösung:** Kürzen Sie die Nachricht. Verwenden Sie möglichst konkrete Angaben in wenigen Nachrichten, wie auch der automatische Hinweis nach 15 Sendungen empfiehlt.

### 8.7 Die Antwort ist fachlich falsch oder unvollständig

Die KI-generierten Antworten können laut Fußbereich Fehler enthalten.

**Lösung:**

1. Prüfen Sie, ob die Frage eindeutig formuliert war.
2. Nennen Sie den relevanten Kontext knapp.
3. Formulieren Sie die Frage präziser.
4. Verlassen Sie sich bei wichtigen Entscheidungen nicht ausschließlich auf die Antwort.

### 8.8 Die Schaltfläche „Zurück“ fehlt

Die Schaltfläche wird nur bei einer Herkunft von exakt `https://www.lamachub.de` angezeigt.

**Mögliche Ursachen:**

- Die Seite wurde direkt geöffnet.
- Die Seite wurde über eine andere Domain oder einen Link ohne passende Referrer-Information aufgerufen.
- Die Herkunfts-URL konnte nicht ausgewertet
