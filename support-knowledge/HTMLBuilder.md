
# HTML Builder

**Zweck:** Ein browserbasierter Editor zum Erstellen, Testen und Exportieren von HTML-Code mit CSS und JavaScript.

**Website:** https://lamachub.de/HTMLBuilder/  
**Quellcode:** `HTMLBuilder/index.html`

## Funktionen

- Getrennte Eingabefelder für HTML, CSS und JavaScript.
- **HTML generieren:** Kombiniert die eingegebenen Bestandteile zu einer HTML-Datei.
- **Kopieren:** Kopiert den generierten Code in die Zwischenablage.
- **Herunterladen:** Exportiert den Code als HTML-Datei.
- **Vorschau aktualisieren:** Zeigt das Ergebnis in einer Vorschau an.
- **Vollbild:** Vergrößert die Vorschau.
- **Dark Mode:** Schaltet das Farbschema um.
- **Support-Chat:** Bietet einen integrierten Chat für Fragen und Probleme.

## Bedienung

1. Öffne den HTML Builder.
2. Gib den HTML-Code in das HTML-Feld ein.
3. Ergänze bei Bedarf CSS im CSS-Feld.
4. Füge optional JavaScript im entsprechenden Feld hinzu.
5. Klicke auf **„HTML generieren“**.
6. Wähle **„Vorschau aktualisieren“**, um das Ergebnis zu testen.
7. Nutze **„Kopieren“** oder **„Herunterladen“**, um den Code zu übernehmen.
8. Bei Bedarf kannst du die Vorschau im Vollbild öffnen.

## Häufige Probleme

### Die Vorschau ist leer

- Prüfe, ob dein HTML-Code vollständig ist.
- Klicke nach Änderungen erneut auf **„HTML generieren“**.
- Aktualisiere anschließend die Vorschau.
- Prüfe den Code auf Tippfehler und fehlerhafte HTML-Strukturen.

### CSS wird nicht angezeigt

- Kontrolliere, ob du den CSS-Code in das richtige Feld eingetragen hast.
- Generiere den HTML-Code nach Änderungen erneut.
- Prüfe, ob CSS-Regeln durch andere Regeln überschrieben werden.

### JavaScript funktioniert nicht

- Prüfe den JavaScript-Code auf Syntaxfehler.
- Achte darauf, dass benötigte HTML-Elemente vorhanden sind.
- Untersuche bei Bedarf die Browser-Konsole auf Fehlermeldungen.

### Kopieren funktioniert nicht

- Prüfe, ob der Browser den Zugriff auf die Zwischenablage erlaubt.
- Versuche, die Schaltfläche direkt anzuklicken.
- Verwende alternativ **„Herunterladen“**.

### Der Download funktioniert nicht

- Prüfe, ob dein Browser Downloads blockiert.
- Versuche es erneut.
- Öffne die heruntergeladene HTML-Datei in einem aktuellen Browser.

### Die Vorschau sieht anders aus als erwartet

- Prüfe, ob externe Schriftarten, Bilder oder Skripte eine Internetverbindung benötigen.
- Beachte, dass lokale Dateien und externe Ressourcen je nach Browser unterschiedlich behandelt werden können.

## Technische Hinweise

- Die Anwendung besteht aus HTML und JavaScript.
- Die Vorschau wird über ein eingebettetes `iframe` dargestellt.
- Der generierte HTML-Code kann als Datei heruntergeladen werden.
- Die Grundfunktionen zum Erstellen, Kopieren und Exportieren sind im Seitencode implementiert.
- Der Support-Chat verwendet `https://lamacai.oslamu.workers.dev/chat`.

## Sicherheit

JavaScript aus eingegebenem HTML kann im Browser ausgeführt werden. Füge nur Code ein, dem du vertraust. Teste unbekannten Code nicht mit privaten Konten oder sensiblen Daten.
