<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: FlohmarktScanner -->
<!-- source-files: ["FlohmarktScanner/index.html"] -->

# FlohmarktScanner – Support-Dokumentation

**Website:** FlohmarktScanner  
**Vermuteter Zweck:** Im Quellcode erkennbar ist vor allem ein KI-gestützter Kundensupport für die Website „FlohmarktScanner“. Der eigentliche Zweck und die übrigen Inhalte der Website sind anhand des bereitgestellten, gekürzten Quellcodes nicht eindeutig erkennbar.  
**Quellcode-Pfad:** `FlohmarktScanner/index.html`  
**Datum der Erstellung:** 30. Januar 2026

> **Hinweis zur Quellcode-Basis:** Die Analyse basiert auf einem gekürzten Auszug aus `FlohmarktScanner/index.html`. Nicht geprüft werden konnten unter anderem das Ende der Markdown-Auswertung, die vollständige Netzwerkkommunikation, mögliche Fehlerbehandlungen sowie weitere Seiten oder Dateien des Projekts. Aussagen dazu sind jeweils entsprechend gekennzeichnet.

---

## 1. Was Besucher auf der Website sehen

Der geprüfte Quellcode enthält keine sichtbaren Inhalte der eigentlichen Flohmarktseite. Im Vordergrund steht ein fest positioniertes Support-Widget mit folgenden sichtbaren Elementen:

- eine runde Schaltfläche mit einem Kopf-Symbol unten rechts,
- ein zunächst geschlossenes Chat-Fenster,
- die Überschrift **„lamacHub Kundenservice“**,
- der Hinweis **„KI-gestützter Support“**,
- ein Begrüßungstext des Kundenservice,
- ein Nachrichtenbereich,
- ein Eingabefeld mit dem Platzhalter **„Nachricht schreiben …“**,
- eine runde Senden-Schaltfläche mit Pfeil-Symbol.

Im geprüften Code ist kein Logo, keine Navigation, keine Suchfunktion und keine Angebotsliste des Flohmarkts sichtbar. Diese Bereiche können in anderen, nicht eingeblendeten Dateien oder im nicht gezeigten Teil der HTML-Datei liegen.

---

## 2. Voraussetzungen

Für die sichtbaren Support-Funktionen genügt ein moderner Webbrowser mit aktiviertem JavaScript.

Bestätigt im Quellcode:

- JavaScript wird für das Öffnen des Chats, das Senden und die Darstellung der Antworten benötigt.
- Die Oberfläche ist für Desktop- und mobile Bildschirmgrößen gestaltet.
- Für Geräte mit reduzierter Bewegung wird die Animation abgeschaltet.
- Das Chat-Fenster passt sich an die verfügbare Bildschirmhöhe an.
- Die Website versucht, Support-Anfragen an einen externen KI-Dienst zu senden.

**Im Quellcode nicht eindeutig erkennbar:**

- Unterstützte Browser und Mindestversionen.
- Ob eine Anmeldung für die Nutzung des Chats erforderlich ist.
- Ob der Support auch ohne Netzwerkverbindung erreichbar ist.
- Ob ein Konto, ein Login oder eine Registrierung für FlohmarktScanner insgesamt notwendig ist.

---

## 3. Den Kundenservice öffnen

1. Öffnen Sie die Website FlohmarktScanner.
2. Warten Sie, bis die Seite vollständig geladen ist.
3. Klicken Sie unten rechts auf die runde grüne Schaltfläche mit dem Kopf-Symbol.
4. Das Fenster **„lamacHub Kundenservice“** öffnet sich.
5. Die erste sichtbare Nachricht lautet:  
   **„Hallo! Wie kann ich dir weiterhelfen?“**

Bei schmalen Bildschirmen befindet sich die Support-Schaltfläche weiterhin unten rechts, mit etwas geringerem Abstand zum Rand.

---

## 4. Eine Nachricht senden

1. Tippen Sie Ihre Frage in das Eingabefeld **„Nachricht schreiben …“**.
2. Das Eingabefeld erlaubt höchstens **1.800 Zeichen**.
3. Klicken Sie auf die runde Pfeil-Schaltfläche rechts neben dem Eingabefeld.
4. Ihre Nachricht erscheint im Chat als grün hinterlegte NutzerNachricht.
5. Während der Bearbeitung wird eine animierte Statusanzeige mit dem Hinweis **„Kundenservice antwortet“** eingeblendet.
6. Anschließend erscheint die Antwort des Kundenservice.

Das Eingabefeld ist als Pflichtfeld gekennzeichnet. Eine leere Nachricht kann daher nicht abgeschickt werden.

### Bearbeitung während einer laufenden Anfrage

Der Quellcode enthält einen Zustand namens `busy`. Es ist daher anzunehmen, dass während einer laufend verarbeiteten Anfrage weitere Sendevorgänge gesperrt oder zurückgewiesen werden.

**Im Quellcode nicht eindeutig erkennbar:**

- ob der Senden-Knopf deaktiviert wird,
- ob eine zweite Nachricht blockiert wird,
- ob eine Fehlermeldung erscheint,
- ob eine abgebrochene oder fehlgeschlagene Anfrage wiederholt werden kann.

---

## 5. Den Chat schließen

1. Klicken Sie im geöffneten Fenster oben rechts auf **„×“**.
2. Das Chat-Fenster wird geschlossen.
3. Die Support-Schaltfläche mit dem Kopf-Symbol bleibt unten rechts sichtbar.
4. Durch erneutes Klicken auf diese Schaltfläche öffnen Sie den Support erneut.

Im Quellcode ist kein sichtbarer Verlauf gespeichert, der außerhalb eines neu geöffneten Chats angezeigt wird. **Im Quellcode nicht eindeutig erkennbar** ist, ob der Chatverlauf beim Schließen oder erneuten Öffnen erhalten bleibt.

---

## 6. Antworten und Formatierungen

Der Kundenservice kann Antworten in Markdown-ähnlicher Formatierung darstellen. Bestätigt unterstützt sind:

- Absätze und Zeilenumbrüche,
- Überschriften der Ebenen 1 bis 4,
- fett und kursiv,
- durchgestrichener Text,
- nummerierte und unnummerierte Listen,
- Inline-Code,
- mehrzeilige Codeblöcke,
- Tabellen,
- Zitate,
- Links,
- horizontale Trennlinien.

Links werden in einem neuen Tab geöffnet. Vom Chatcode werden nur HTTP- und HTTPS-Adressen als klickbare Links zugelassen. Andere Linkformate werden nicht zu aktiven Links gemacht.

---

## 7. Typische Probleme und Fehlerbehebung

### 7.1 Der Kundenservice lässt sich nicht öffnen

**Mögliche Ursache im Quellcode:** Der eingebettete Quellcode beginnt ungewöhnlich mit Dokument- beziehungsweise RTF-artigen Zeichen. Dadurch könnte die Datei in manchen Umgebungen nicht korrekt als normales HTML interpretiert werden.

**Abhilfe:**

1. Öffnen Sie die Website direkt in einem aktuellen Browser.
2. Aktualisieren Sie die Seite vollständig.
3. Prüfen Sie, ob andere eingebettete Skripte oder Erweiterungen die Seite beeinträchtigen.
4. Testen Sie die Seite gegebenenfalls im privaten Fenster oder mit deaktivierten Erweiterungen.
5. Wenden Sie sich an die betreibende Stelle, wenn der Support weiterhin fehlt.

Ob der Code in der veröffentlichten Website tatsächlich unverändert verwendet wird, ist **im bereitgestellten Quellcode nicht eindeutig erkennbar**.

### 7.2 Die Nachricht wird nicht gesendet

**Mögliche Ursachen:**

- Das Eingabefeld ist leer.
- Es wird bereits eine Anfrage verarbeitet.
- Die Verbindung zum externen Supportdienst ist nicht verfügbar.
- Der Browser blockiert die Netzwerkanfrage.

**Abhilfe:**

1. Schreiben Sie einen vollständigen Text in das Eingabefeld.
2. Warten Sie, bis eine vorherige Antwort abgeschlossen ist.
3. Senden Sie die Nachricht erneut.
4. Prüfen Sie die Internetverbindung.
5. Laden Sie die Seite neu.
6. Falls möglich, testen Sie einen anderen Browser oder das private Fenster.

**Im Quellcode nicht eindeutig erkennbar:** Eine konkrete Fehlermeldung oder ein Wiederholen-Button ist im geprüften Auszug nicht sichtbar.

### 7.3 Es erscheint keine Antwort

**Mögliche Ursachen:**

- Der externe KI-Dienst antwortet nicht rechtzeitig.
- Die Anfrage konnte nicht übermittelt werden.
- Die Antwort benötigt länger als erwartet.

**Abhilfe:**

1. Warten Sie zunächst, bis die Statusanzeige verschwindet.
2. Prüfen Sie die Internetverbindung.
3. Versuchen Sie es mit einer kürzeren Nachricht.
4. Aktualisieren Sie die Seite und senden Sie die Frage erneut.
5. Verwenden Sie bei einer laufenden Statusanzeige nicht mehrere weitere Nachrichten.

### 7.4 Das Chat-Fenster ist auf dem Smartphone schwer zu bedienen

Der Code enthält ein responsives Layout. Bei sehr kleinen Bildschirmen kann das Fenster den verfügbaren Platz jedoch stark beanspruchen.

**Abhilfe:**

1. Drehen Sie das Gerät bei Bedarf in die Querlage.
2. Schließen Sie den Chat über **„×“**, wenn Sie zurück auf die Website wechseln möchten.
3. Scrollen Sie innerhalb des Nachrichtenbereichs, um ältere Nachrichten anzuzeigen.

### 7.5 Animationen sind unangenehm oder das Fenster flackert

Der Code berücksichtigt die Browsereinstellung „Bewegung reduzieren“. Falls Animationen trotzdem stören:

1. Öffnen Sie die Browser-Einstellungen.
2. Suchen Sie nach einer Option wie „Bewegung reduzieren“ oder „Animationen reduzieren“.
3. Aktivieren Sie diese Einstellung.
4. Laden Sie die Seite neu.

---

## 8. Datenschutz und Berechtigungen

### Bestätigte technische Merkmale

- Der Chat sendet Nachrichten an einen externen, über das Internet erreichbaren KI-Dienst.
- Eine lokale Chat-Historie ist im JavaScript vorgesehen.
- Der Browsercode maskiert Zeichen wie `<`, `>` und `&` in Antworten, bevor er sie in HTML einfügt.
- Unterstützt und als klickbar ausgegeben werden nur HTTP- und HTTPS-Links.
- Bei externen Links wird zusätzlich `rel="noopener noreferrer"` gesetzt.
- Der Quellcode enthält keine sichtbaren Hinweise auf eine Speicherung von Chatinhalten durch FlohmarktScanner selbst.

### Wichtige Hinweise

- Beim Absenden verlassen die eingegebenen Inhalte die Website und werden an den externen Supportdienst übertragen.
- Vermeiden Sie deshalb die Übermittlung von:
  - Passwörtern,
  - API-Schlüsseln oder Zugriffstoken,
  - Zahlungsdaten,
  - Ausweisdaten,
  - privaten Kontaktdaten,
  - vertraulichen Geschäftsinformationen.
- Eine konkrete Datenschutzerklärung, ein Hinweis auf die Speicherdauer, ein Standort des Dienstleisters oder Angaben zum Auftragsverarbeitungsvertrag sind **im bereitgestellten Quellcode nicht eindeutig erkennbar**.
- Ob die externe Antwort fachlich verbindlich ist, ist nicht dokumentiert. Entscheidungen zu Terminen, Zahlungen oder Verträgen sollten über die offiziellen Kontaktwege der verantwortlichen Stelle getroffen werden.

### Möglicher Geheimniswert

Im Quellcode ist eine mögliche Geheimniswert-Konfiguration vorhanden. Diese wird hier aus Sicherheitsgründen nicht wiedergegeben. Im geprüften Auszug ist keine zusätzliche explizite Platzierung von Geheimnissen in der HTML-Datei erkennbar. Dies kann jedoch nicht für den vollständigen, gekürzten Quellcode garantiert werden.

---

## 9. Barrierefreiheit

Im Quellcode sind mehrere Maßnahmen zur Barrierefreiheit erkennbar:

- die Support-Schaltfläche besitzt eine beschreibende `aria-label`-Angabe,
- die Schließen-Schaltfläche ist mit „Chat schließen“ beschriftet,
- der Senden-Knopf besitzt die Beschriftung „Nachricht senden“,
- der Nachrichtenbereich verwendet `aria-live="polite"`,
- die Statusanzeige hat die Rolle `status` und die Beschreibung „Kundenservice antwortet“,
- das Eingabefeld besitzt die Beschriftung „Deine Nachricht“,
- der Browser vervollständigt eingegebene Nachrichten nicht automatisch.

**Im Quellcode nicht eindeutig erkennbar:**

- vollständige Tastaturbedienung,
- Fokusmanagement beim Öffnen und Schließen,
- Unterstützung von Screenreader-Software,
- ausreichende Farbkontraste in allen Betriebssystem- und Browser-Einstellungen.

---

## 10. FAQ

### Gibt es eineRegistrierung?

Eine Anmeldung oder Registrierung ist im bereitgestellten Quellcode nicht erkennbar. Für den gezeigten Kundenservice wird kein Login verlangt.

### Kann ich den Kundenservice auch auf dem Smartphone nutzen?

Ja. Der Quellcode enthält ein eigenes Layout für Bildschirmbreiten bis 480 Pixel. Das Chat-Fenster passt sich dabei an die Bildschirmgröße an.

### Kann ich meine Frage länger als 1.800 Zeichen senden?

Nein. Das Eingabefeld ist auf 1.800 Zeichen begrenzt. Für ausführlichere Angaben können Sie eine Nachricht aufteilen.

### Bleibt der Chatverlauf erhalten?

**Im Quellcode nicht eindeutig erkennbar.** Es gibt zwar eine interne Chat-Historie, aber der gekürzte Auszug zeigt nicht, ob diese dauerhaft gespeichert oder beim Schließen zurückgesetzt wird.

### Kann der Kundenservice Links und Codebeispiele anzeigen?

Ja. Der Chatcode unterstützt Links, Inline-Code, Codeblöcke, Tabellen und weitere Markdown-ähnliche Formatierungen.

### Funktionieren alle Links?

Links werden nur als klickbare Links übernommen, wenn sie mit `http://` oder `https://` beginnen. Andere Formate bleiben normaler Text. Ob jeder externe Link erreichbar ist, kann der Websitecode nicht garantieren.

### Werden meine Nachrichten an Dritte weitergegeben?

Die Nachrichten werden zur Bearbeitung an einen externen KI-Supportdienst gesendet. Über Umfang, Speicherung, Löschung und Auftragsverarbeitung enthält der bereitgestellte Quellcode keine ausreichenden Angaben. Bitte senden Sie keine sensiblen Daten.

### Ist die Antwort des Supports verbindlich?

Das ist im Quellcode nicht dokumentiert. Für verbindliche Auskünfte zu Käufen, Terminen, Preisen, Rückgaben oder Verträgen sollte ein offizieller Kontaktweg der verantwortlichen Stelle genutzt werden.

### Kann ich den Support schließen?

Ja. Klicken Sie oben rechts im Chat-Fenster auf **„×“**. Die Support-Schaltfläche bleibt anschließend sichtbar.

### Was passiert bei einer sehr langen Antwort?

Der Nachrichtenbereich ist scrollbar. Die Ansicht wird nach Eingang einer Antwort automatisch nach unten bewegt. Ältere Nachrichten können durch manuelles Scrollen eingesehen werden.

### Warum wird eine Statusanzeige dauerhaft angezeigt?

Das kann auf eine verzögerte Netzwerkverbindung oder ein Problem beim externen Supportdienst hindeuten. Warten Sie kurz, prüfen Sie die Internetverbindung und laden Sie anschließend die Seite neu. Eine automatische Wiederholung oder eine konkrete Fehlermeldung ist im geprüften Auszug nicht erkennbar.

---

## 11
