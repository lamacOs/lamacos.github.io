
# LaunchKit

**Zweck:** LaunchKit ist eine Plattform zur Präsentation und Verwaltung digitaler Produkte. Die Website enthält einen Produktkatalog, Dokumentationsbereiche, eine Kontooberfläche und ein Dashboard.

**Website:** https://lamachub.de/LaunchKit/  
**Quellcode:** `LaunchKit/index.html`

## Funktionen

### Produktkatalog

- Produkte durchsuchen.
- Nach Kategorien filtern.
- Nach Plattformen filtern.
- Nach Lizenzen filtern.
- Produkte sortieren, beispielsweise nach Neuheit oder Beliebtheit.
- Filter über **„Zurücksetzen“** entfernen.

### Produktseiten und Dokumentation

Der Quellcode enthält Bereiche für:

- Übersicht und Features
- Systemanforderungen
- Changelog und Versionen
- Dokumentation
- Screenshots und Medien
- Analytics
- Eigene Domains
- API und Webhooks

### Konto und Dashboard

- Konto erstellen und anmelden.
- Profilinformationen bearbeiten.
- Passwort ändern.
- Eigene Produkte verwalten.
- Veröffentlichungsinformationen bearbeiten.
- Analytics- und Aktivitätsbereiche aufrufen.
- Kontoaktionen verwalten.

### Weitere Funktionen

- Hell-/Dunkelmodus.
- Mobile Navigation.
- Integrierter Support-Chat.
- Upload-Funktionen für Produktmedien.

## Bedienung

### Produkte finden

1. Öffne LaunchKit.
2. Verwende die Suche oder die Filter für Kategorie, Plattform und Lizenz.
3. Wähle die gewünschte Sortierung.
4. Öffne ein Produkt, um die verfügbaren Informationen anzuzeigen.
5. Verwende **„Zurücksetzen“**, wenn du alle Filter entfernen möchtest.

### Konto erstellen

1. Öffne die Anmelde- oder Registrierungsansicht.
2. Fülle die angezeigten Felder aus.
3. Gib bei der Registrierung das Passwort zweimal ein.
4. Beachte die Rückmeldungen der Website, falls Eingaben fehlen oder nicht akzeptiert werden.

### Anmelden

1. Öffne **„Anmelden“**.
2. Gib deine E-Mail-Adresse und dein Passwort ein.
3. Sende das Formular ab.
4. Wenn die Anmeldung fehlschlägt, prüfe die angezeigte Fehlermeldung.

### Dashboard verwenden

Nach erfolgreicher Anmeldung kann das Dashboard aufgerufen werden. Dort sind Bereiche für Profilinformationen, Produkte, Analytics und weitere Einstellungen vorgesehen.

Bevor du ein Produkt oder ein Konto löschst, prüfe sorgfältig die angezeigte Bestätigung.

### Produktmedien hochladen

1. Öffne den entsprechenden Bereich der Produktverwaltung.
2. Wähle die gewünschte Datei aus.
3. Starte den Upload über die bereitgestellte Funktion.
4. Prüfe, ob die Datei anschließend korrekt angezeigt wird.

## Häufige Probleme

### Anmeldung schlägt fehl

- Prüfe die E-Mail-Adresse auf Tippfehler.
- Kontrolliere dein Passwort.
- Prüfe die Internetverbindung.
- Lies die angezeigte Fehlermeldung.
- Wenn ein Backend- oder Authentifizierungsfehler erscheint, kann der Dienst vorübergehend nicht verfügbar sein.

### Der Produktkatalog ist leer

- Entferne alle Filter.
- Lösche den Suchtext.
- Lade die Seite erneut.
- Prüfe deine Internetverbindung.

Der Quellcode enthält Produktladefunktionen sowie einen Demo-/Mock-Mechanismus. Deshalb können die angezeigten Daten von der verfügbaren Backend-Verbindung abhängen.

### Änderungen werden nicht gespeichert

- Prüfe, ob du angemeldet bist.
- Kontrolliere, ob alle erforderlichen Felder ausgefüllt sind.
- Warte auf eine Bestätigung.
- Lade die Seite erst neu, nachdem du geprüft hast, ob die Änderungen gespeichert wurden.

### Ein Medien-Upload schlägt fehl

- Prüfe Dateityp und Dateigröße.
- Versuche gegebenenfalls eine kleinere Datei.
- Wiederhole den Vorgang später, falls der externe Dienst nicht erreichbar ist.

Im Quellcode sind unter anderem Upload-Endpunkte von GoFile, tmpfiles.org und Catbox Litterbox hinterlegt. Externe Dienste können ausfallen oder ihre Bedingungen ändern.

### Dashboard-Funktionen sind nicht verfügbar

- Prüfe, ob du angemeldet bist.
- Aktualisiere die Seite.
- Versuche die betroffene Aktion erneut.
- Notiere die genaue Fehlermeldung, wenn das Problem bestehen bleibt.

## Technische Hinweise

- Firebase-Skripte für App, Authentifizierung und Realtime Database sind eingebunden.
- Im Quellcode ist folgende Realtime-Database-Adresse hinterlegt:

  `https://blockbreak-986c9-default-rtdb.europe-west1.firebasedatabase.app`

- Zusätzlich sind externe Produkt-API- und Datei-Upload-Endpunkte vorhanden.
- Der Quellcode enthält Demo-/Mock-Logik. Nicht jede angezeigte Aktion ist deshalb automatisch ein Beleg für eine erfolgreiche dauerhafte Speicherung.
- Der Support-Chat verwendet `https://lamacai.oslamu.workers.dev/chat`.

## Sicherheit und Datenschutz

Gib dein Passwort oder Authentifizierungstokens niemals im Support-Chat weiter. Lade keine vertraulichen Dateien bei externen Upload-Anbietern hoch, ohne deren Datenschutz- und Aufbewahrungsbedingungen zu prüfen.
