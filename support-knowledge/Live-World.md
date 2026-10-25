<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Live-World -->
<!-- source-files: ["Live-World/index.html"] -->

# Live Welt – Support-Dokumentation

**Website:** Live Welt  
**Vermuteter Zweck:** Darstellung eines Live-Dashboards mit weltweiten Bevölkerungs-, Kommunikations-, Umwelt-, Verkehrs-, Weltraum- und Finanzkennzahlen sowie einem integrierten KI-gestützten Kundenservice.  
**Quellcode-Pfad:** `Live-World/index.html`  
**Datum der Erstellung:** 24. März 2026

> **Hinweis zur Quellcode-Grundlage:** Die Dokumentation basiert auf dem bereitgestellten Auszug aus `Live-World/index.html`. Der Auszug kann unvollständig sein. Funktionen, Datenherkünfte und Zielgruppen werden deshalb nur dort beschrieben, wo sie im Code erkennbar sind.

---

## 1. Überblick

Live Welt ist eine einzelne HTML-Seite mit zwei zentralen Bereichen:

1. **Dashboard mit Kennzahlen**
   - zeigt eine Übersicht über 20 sichtbare Messgrößen;
   - aktualisiert einen Teil davon sekündlich;
   - lädt Weltbank-, Kryptowährungs- und Zeitdaten automatisch.

2. **Kundenservice-Chat**
   - wird über eine schwebende Schaltfläche geöffnet;
   - übergibt Nachrichten an einen externen KI-Dienst;
   - zeigt Antworten direkt im Browser an.

Die Seite verwendet eine responsive Kartenansicht. Eine Umschaltfläche in der Kopfzeile wechselt zwischen einem hellen und einem dunklen Erscheinungsbild.

### Bestätigte Hauptmerkmale

- Responsives Layout mit automatisch angepassten Karten.
- Helle und dunkle Darstellung.
- Live-Anzeige der UTC-Zeit.
- Abruf von Internetnutzungsdaten aus der World Bank API.
- Abruf von Bitcoin- und Ethereum-Preisen aus der CoinGecko API.
- Integrierter Kundenservice-Chat.
- Optionale „Zurück“-Schaltfläche, wenn die Seite über eine bestimmte fremde Domain aufgerufen wurde.

---

## 2. Voraussetzungen

### Für die normale Nutzung

- Ein aktueller Browser mit JavaScript-Unterstützung.
- Eine Internetverbindung, damit Karten, Schriftarten, Logos und externe Daten geladen werden können.
- Für vollständige Kryptowährungswerte und die Weltbankzahl ist ein erreichbarer Zugriff auf die verwendeten externen API-Dienste erforderlich.

### Für den Kundenservice

- Eine erreichbare Verbindung zum im Quellcode hinterlegten Chat-Endpunkt.
- Ein Browser, der `fetch`, `async/await` und moderne JavaScript-Funktionen unterstützt.

### Nicht erforderlich

- Im Quellcode ist **keine Anmeldung** vorhanden.
- Es ist **kein Benutzerkonto** erkennbar.
- Es werden **keine Zahlungsdaten** abgefragt.
- Eine Registrierung oder Freigabe von Benutzerrechten ist im bereitgestellten Code nicht erkennbar.

---

## 3. Aufbau der Seite

### 3.1 Kopfzeile

Oben befindet sich eine feste Kopfzeile mit:

- einem Logo,
- der Beschriftung **„Live Welt“**,
- einer Umschaltfläche mit einem Mondsymbol.

Die Kopfzeile bleibt beim Scrollen sichtbar.

### 3.2 Dashboard

Darunter folgen Karten mit den sichtbaren Beschriftungen:

#### Bevölkerung und soziale Kennzahlen

- **Weltbevölkerung**
- **Geburten**
- **Todesfälle**
- **Hochzeiten**
- **Scheidungen**

#### Internet und Kommunikation

- **Internetnutzer**
- **E-Mails heute**
- **Google-Suchen**
- **Instagram-Posts**
- **Spotify-Streams**

#### Umwelt und Ressourcen

- **Gefällte Bäume**
- **Geschmolzenes Eis**
- **Ölverbrauch**

#### Verkehr und Weltraum

- **Autos weltweit**
- **Satelliten**
- **Erde–Mond**
- **Sonnenenergie**

#### Finanzmärkte und Zeit

- **Bitcoin**
- **Ethereum**
- **UTC Zeit**

Die Karten werden abhängig von der verfügbaren Breite in Spalten angeordnet. Auf schmalen Bildschirmen werden sie automatisch untereinander dargestellt.

---

## 4. Bedienung Schritt für Schritt

### 4.1 Helle oder dunkle Darstellung wählen

1. Öffnen Sie die Website.
2. Klicken Sie oben rechts auf die Schaltfläche mit dem Symbol **🌗**.
3. Die Website wechselt in die dunkle Darstellung.
4. Ein erneuter Klick auf dieselbe Schaltfläche stellt die helle Darstellung wieder her.

Die Auswahl wird im bereitgestellten Quellcode **nicht dauerhaft gespeichert**. Nach einem Neuladen beginnt die Seite wieder im hellen Modus.

### 4.2 Live-Dashboard beobachten

1. Öffnen Sie die Website.
2. Warten Sie, bis die Werte in den Karten erscheinen.
3. Beobachten Sie die Karten mit dem sekündlichen Update.
4. Verwenden Sie bei Bedarf die Anzeige **„UTC Zeit“**, um die Weltzeit unabhängig von der lokalen Zeitzone des Geräts zu prüfen.

Die Anzeige **„UTC Zeit“** wird im Quellcode als Abschnitt der UTC-Datumsdarstellung erzeugt. Eine zusätzliche sekundengenaue Anzeige ist dort nicht erkennbar.

### 4.3 Bitcoin- und Ethereum-Kurse ansehen

1. Öffnen Sie die Website.
2. Warten Sie auf die Werte in den Karten **„Bitcoin“** und **„Ethereum“**.
3. Lassen Sie die Seite geöffnet, wenn Sie regelmäßige Aktualisierungen wünschen.

Der Quellcode lädt die Kurse beim Öffnen der Seite und anschließend einmal pro Minute neu. Die Werte werden mit einem US-Dollar-Zeichen dargestellt.

### 4.4 Internetnutzerzahl ansehen

1. Öffnen Sie die Website.
2. Warten Sie, bis die externe Weltbank-Anfrage abgeschlossen ist.
3. Die Karte **„Internetnutzer“** zeigt anschließend einen berechneten absoluten Wert.

Die Berechnung basiert auf der im Browser verwendeten Bevölkerungszahl und einem Weltbank-Anteil für Internetnutzer. Die genaue Bezugszeit des Weltbank-Anteils ist im Quellcode nicht angegeben.

### 4.5 Kundenservice-Chat öffnen

1. Klicken Sie rechts unten auf die runde grüne Schaltfläche mit einem Chat-Symbol.
2. Das Chat-Fenster öffnet sich.
3. Das Eingabefeld ist automatisch fokussiert.
4. Geben Sie Ihre Frage in das Feld **„Nachricht schreiben“** ein.
5. Klicken Sie auf die runde Senden-Schaltfläche rechts neben dem Eingabefeld.
6. Ihre Nachricht erscheint als grüne Sprechblase.
7. Die Antwort erscheint als weiße Sprechblase.

### 4.6 Kundenservice-Chat schließen

1. Klicken Sie oben rechts im geöffneten Chat-Fenster auf **„×“**.
2. Das Fenster wird geschlossen.
3. Der Kundenservice kann über die runde Schaltfläche rechts unten erneut geöffnet werden.

### 4.7 Optionale „Zurück“-Schaltfläche verwenden

Unter bestimmten Bedingungen wird links oben eine zusätzliche orange Schaltfläche mit der Aufschrift **„Zurück“** eingeblendet.

1. Klicken Sie auf **„Zurück“**.
2. Die Seite navigiert im selben Tab zu `www.lamachub.de`.

Die Schaltfläche wird nur eingeblendet, wenn die Herkunftsseite der eingebetteten Website exakt der im Quellcode genannten HTTPS-Domain entspricht. Wird Live Welt direkt aufgerufen, ist diese Schaltfläche normalerweise nicht sichtbar.

---

## 5. Eingaben und Ausgaben

### 5.1 Manuelle Eingaben

| Eingabe | Ort | Verhalten |
|---|---|---|
| Chatnachricht | Feld „Nachricht schreiben“ | Wird gekürzt, ohne Leerzeichen gesendet und dem Kundenservice übermittelt. |
| Modusauswahl | Schaltfläche „🌗“ | Wechselt zwischen hell und dunkel. |
| Navigation | Schaltfläche „Zurück“ | Öffnet die im Quellcode konfigurierte externe Domain. |

Das Chat-Eingabefeld erlaubt maximal **1.800 Zeichen**. Eine leere oder ausschließlich aus Leerzeichen bestehende Eingabe wird nicht gesendet.

### 5.2 Automatisch bezogene Daten

| Anzeige | Datenquelle laut Quellcode | Aktualisierung |
|---|---|---|
| Internetnutzer | World Bank API | Einmal beim Laden |
| Bitcoin | CoinGecko API | Beim Laden und alle 60 Sekunden |
| Ethereum | CoinGecko API | Beim Laden und alle 60 Sekunden |
| UTC Zeit | Lokale Browserzeit, in UTC umgerechnet | Jede Sekunde |
| Diverse Zähler | Im Browser fortgeschriebene Startwerte | Jede Sekunde |
| Autos, Satelliten, Erde–Mond, Sonnenenergie | Fest im Quellcode hinterlegt | Nur beim Laden |

### 5.3 Chat-Ausgaben

- Eine Begrüßung: **„Hallo! Wie kann ich Ihnen weiterhelfen?“**
- Die gesendete Nachricht.
- Eine KI-Antwort, sofern der externe Dienst erfolgreich antwortet.
- Bei einem Verbindungs- oder Verarbeitungsfehler:

> „Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.“

Nach der **15. gesendeten Nachricht** wird zusätzlich folgender Hinweis angezeigt:

> „Hinweis: Bitte fassen Sie Ihr Anliegen möglichst in wenigen, konkreten Nachrichten zusammen.“

Der Kundenservice übergibt dem Dienst den bisherigen Gesprächsverlauf und behält dazu im Browser höchstens die letzten **zwölf Verlaufseinträge** bei. Damit sind zusammenhängende Antworten möglich; eine dauerhafte Speicherung über die Browser-Sitzung hinaus ist im Quellcode nicht erkennbar.

---

## 6. Bedeutung der angezeigten Kennzahlen

### 6.1 Voraussichtlich simulierte oder fortgeschriebene Werte

Die folgenden Werte werden im Browser aus vorgegebenen Startwerten fortgeschrieben:

- Weltbevölkerung
- Geburten
- Todesfälle
- Hochzeiten
- Scheidungen
- E-Mails heute
- Google-Suchen
- Instagram-Posts
- Spotify-Streams
- Gefällte Bäume
- Geschmolzenes Eis
- Ölverbrauch

Diese Werte werden einmal pro Sekunde erhöht und anschließend ganzzahlig dargestellt. Ob sie konkrete globale Messwerte oder rein illustrative Zähler darstellen, ist im Quellcode nicht eindeutig erkennbar. Insbesondere ist keine Angabe enthalten, ob die Werte auf einen bestimmten Stichtag bezogen sind.

### 6.2 Fest hinterlegte Werte

- **Autos weltweit:** `1.450.000.000`
- **Satelliten:** `8.500`
- **Erde–Mond:** `384.400 km`
- **Sonnenenergie:** `173.000 TW`

Diese Angaben werden nicht dynamisch aktualisiert.

### 6.3 Extern bezogene Werte

- **Internetnutzer:** rechnerischer Wert aus Weltbevölkerung und Weltbank-Anteil.
- **Bitcoin** und **Ethereum:** aktuelle von CoinGecko gelieferte USD-Preise.

### 6.4 Wichtige Einordnung

Die Werte werden überwiegend **ohne Einheit**, Zeitstempel oder Datenquelle in den Karten angezeigt. Aus dem Quellcode geht nicht eindeutig hervor:

- welche Annahmen hinter den sekündlichen Zuwächsen stehen,
- ob die angezeigten Größen aktuelle, historische oder modellhafte Werte darstellen,
- welchen Stichtag die festen Werte haben,
- ob alle Werte dieselbe Zeitperiode betreffen.

Für eine belastbare Interpretation sollten daher die jeweiligen Datenherkunft und Bezugszeitpunkt berücksichtigt werden.

---

## 7. Gestaltung und Barrierefreiheit

### Bestätigte Merkmale

- Semantische Überschriften für die Navigation und den Kundenservice.
- Beschriftete Schaltflächen über `aria-label`.
- Feste Größe des Chat-Fensters mit begrenzter Breite.
- Chatverlauf kann gescrollt werden.
- Lange Chattexte werden umgebrochen.
- Responsive Darstellung für kleinere Bildschirme.
- Fokusdarstellung für die optionale „Zurück“-Schaltfläche.
- Der Chat wird beim Öffnen automatisch in das Eingabefeld gesetzt.

### Mögliche Einschränkungen

Im bereitgestellten Quellcode ist keine vollständige Unterstützung für Tastaturbedienung, Screenreader-Ankündigungen oder reduzierte Bewegung erkennbar. Die faktische Barrierefreiheit hängt daher auch von der tatsächlichen Browser- und Betriebssystemunterstützung ab.

---

## 8. Datenschutz und Berechtigungen

### 8.1 Kontakt mit externen Diensten

Beim Laden der Seite können Verbindungen zu folgenden Diensten entstehen:

- einem externen Google Fonts-Dienst,
- einer Bildquelle für das Logo,
- der World Bank API,
- der CoinGecko API,
- dem externen Chat-Endpunkt des Kundenservice.

Dabei können technisch erforderliche Verbindungsdaten wie IP-Adresse, Zeitpunkt, User-Agent und angefragte Ressourcen verarbeitet werden. Die konkrete Verarbeitung dieser Verbindungsdaten durch die externen Anbieter ist anhand des vorliegenden Quellcodes nicht eindeutig feststellbar.

### 8.2 Übermittlung von Chatnachrichten

Wenn eine Nachricht gesendet wird, werden der Nachrichtentext und ein begrenzter Gesprächsverlauf an den im Quellcode hinterlegten externen Chat-Endpunkt übertragen. Es ist daher zu beachten:

- Formulieren Sie keine unnötigen persönlichen Daten.
- Vermeiden Sie Zugangsdaten, Passwörter, Tokens oder vertrauliche Geschäftsinformationen.
- Eine Speicherung des Verlaufs beim externen Dienst ist im Quellcode nicht eindeutig erkennbar.

### 8.3 Lokale Daten

Der Chatverlauf und der Nachrichtenzähler werden in JavaScript-Variablen des Browsers gehalten. Im Quellcode ist keine dauerhafte lokale Speicherung dieser Werte erkennbar.

### 8.4 Anmeldung und Zugriffsrechte

- Eine Anmeldung ist nicht vorhanden.
- Eine Rollen- oder Rechteverwaltung ist nicht erkennbar.
- Es werden keine Benutzerprofile oder personenbezogenen Kontoinformationen abgefragt.
- Die optionale „Zurück“-Schaltfläche ist keine Benutzerrechtefunktion, sondern eine Navigationshilfe.

---

## 9. Typische Probleme und Fehlerbehebung

### 9.1 Kennzahlen bleiben bei „...“

**Mögliche Ursache:** Die Website benötigt JavaScript, und eine automatische Initialisierung wurde nicht vollständig abgeschlossen. Die API-gestützten Werte benötigen außerdem eine Internetverbindung.

**Vorgehen:**

1. Laden Sie die Seite neu
