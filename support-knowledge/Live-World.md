
# Live-World

**Zweck:** Eine visuelle Statistikseite, die verschiedene Kennzahlen zur Weltbevölkerung, Internetnutzung, Natur, Technik und Kryptowährungen darstellt.

**Website:** https://lamachub.de/Live-World/  
**Quellcode:** `Live-World/index.html`

## Angezeigte Kennzahlen

Die Seite enthält Anzeigefelder für unter anderem:

- Weltbevölkerung
- Geburten und Todesfälle
- Eheschließungen und Scheidungen
- Internetnutzung, E-Mails und Suchanfragen
- Instagram- und Spotify-bezogene Zähler
- Bäume, Eis und Öl
- Autos und Satelliten
- Mond- und Sonnenwerte
- Bitcoin und Ethereum
- Zeitinformationen

Nicht alle Werte müssen direkt gemessene Echtzeitdaten sein. Einige Kennzahlen können Schätzungen oder hochgerechnete Werte darstellen.

## Bedienung

1. Öffne Live-World.
2. Beobachte die angezeigten Kennzahlen.
3. Warte, bis externe Daten geladen wurden.
4. Verwende bei Bedarf den Zurück-Button, um zur vorherigen Ansicht zurückzukehren.
5. Öffne den Support-Chat über das Chat-Symbol, wenn du Hilfe benötigst.

## Datenquellen

### World Bank

Im Quellcode ist die World-Bank-API für den Indikator zur Internetnutzung eingebunden:

`https://api.worldbank.org/v2/country/WLD/indicator/IT.NET.USER.ZS?format=json`

### Kryptowährungen

Für Bitcoin und Ethereum wird folgende CoinGecko-Schnittstelle verwendet:

`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd`

Diese Schnittstelle fragt Kurse in US-Dollar ab.

### Weitere Kennzahlen

Für andere Werte ist im Quellcode nicht bei jeder Kennzahl eine eindeutige externe Datenquelle dokumentiert. Manche Werte können clientseitig berechnet oder hochgerechnet werden.

Daher sollten die Zahlen nicht ohne Prüfung als amtliche oder exakt gemessene Echtzeitdaten verwendet werden.

## Häufige Probleme

### Werte werden nicht geladen

- Prüfe deine Internetverbindung.
- Lade die Seite erneut.
- Warte kurz, falls externe Datenquellen nicht erreichbar sind.
- Prüfe, ob ein Netzwerkfilter oder Inhaltsblocker Anfragen verhindert.

### Kryptowährungskurse fehlen

- Die Seite ist von einem externen Kursdienst abhängig.
- Externe APIs können vorübergehend ausfallen oder Anfragelimits erreichen.
- Versuche es später erneut.

### Zahlen wirken unplausibel

- Prüfe, ob es sich um einen geschätzten oder hochgerechneten Wert handelt.
- Beachte den Aktualisierungszeitpunkt der zugrunde liegenden Quelle.
- Verwende für Berichte oder Präsentationen möglichst die Originalquelle.

### Die Seite zeigt veraltete Werte

- Lade die Seite neu.
- Prüfe, ob die externe Quelle erreichbar ist.
- Nicht jede Kennzahl wird zwangsläufig im selben Zeitintervall aktualisiert.

## Technische Hinweise

- Die Seite wird mit HTML und JavaScript im Browser ausgeführt.
- Externe Daten werden unter anderem von der World Bank und CoinGecko abgerufen.
- Der Support-Chat verwendet `https://lamacai.oslamu.workers.dev/chat`.
- **Nicht eindeutig erkennbar:** Für sämtliche dargestellten Kennzahlen sind weder Quelle noch Aktualisierungsintervall vollständig dokumentiert.

## Hinweis zur Genauigkeit

Live-World dient der visuellen Darstellung von Kennzahlen. Behandle Werte ohne eindeutig ausgewiesene Quelle und Messmethode als Schätzungen und nicht als garantierte Echtzeitmessungen.
