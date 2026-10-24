<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: endlessrunner -->
<!-- source-files: ["endlessrunner/index.html"] -->

# LoopScreen

**Vermuteter Zweck:** LoopScreen ist eine browserbasierte Website, mit der Besucher Videos oder Präsentationen randlos und automatisch auf einem Display abspielen können.  
**Quellcode-Pfad:** `endlessrunner/index.html`  
**Datum der Erstellung:** 18. März 2025  

> Die Dokumentation basiert auf den bereitgestellten Quellcode-Auszügen. Der Quellcode ist ausdrücklich als gekürzt angegeben. Funktionen, die im sichtbaren Ausschnitt nicht vollständig belegt sind, werden entsprechend gekennzeichnet.

---

## 1. Überblick

LoopScreen bietet zwei sichtbare Betriebsarten:

1. **Video Loop**
   - Eine Videodatei wird lokal ausgewählt.
   - Das Video wird automatisch und wiederholt über den gesamten Bildschirm abgespielt.

2. **Präsentation**
   - Eine Präsentation oder ein Bild wird lokal ausgewählt.
   - Präsentationen wechseln automatisch im Abstand von acht Sekunden zur nächsten Folie.

Die Dateien werden im Browser verarbeitet. Im gezeigten Quellcode ist kein Upload an einen Server erkennbar. Dadurch ist die lokale Verarbeitung im Browser die naheliegende und durch den Code gestützte Arbeitsweise.

Die Seite ist dunkel gestaltet und für Desktop- sowie Mobilgeräte optimiert. Auf kleinen Bildschirmen werden die beiden Auswahlkarten untereinander angezeigt.

---

# 2. Voraussetzungen

## 2.1 Unterstützte Browser-Grundfunktionen

Für die dargestellten Funktionen werden moderne Browser benötigt. Der Code verwendet unter anderem:

- JavaScript-Module
- `HTMLVideoElement`
- `HTMLCanvasElement`
- `FileReader`
- `URL.createObjectURL`
- Drag-and-Drop-Ereignisse
- Fullscreen-API
- `PDF.js`
- `JSZip`

Ob ein bestimmter Browser jede verwendete Funktion vollständig unterstützt, ist im Quellcode nicht eindeutig erkennbar.

## 2.2 Benötigte Dateien

### Für **Video Loop**

Im Dateiauswahlfeld sind folgende Formate beabsichtigt:

- MP4
- WebM
- OGG
- OGV
- MOV
- M4V
- AVI
- MKV
- WMV
- FLV
- 3GP
- MPEG
- MPG

Zusätzlich werden Dateien mit einem vom Browser gemeldeten MIME-Typ `video/*` akzeptiert.

**Wichtig:** Die Dateierweiterung allein garantiert nicht, dass der Browser das Video tatsächlich decodieren kann. Das hängt vom Browser und von den enthaltenen Video- und Audio-Codecs ab.

### Für **Präsentation**

Im Dateiauswahlfeld sind folgende Formate vorgesehen:

- PDF
- PPT
- PPTX
- ODP
- Bilder

Die vollständige Verarbeitung der Präsentationsformate ist im gekürzten Quellcode nicht vollständig sichtbar. PDF.js und JSZip werden ausdrücklich eingebunden, was die Unterstützung für PDF- sowie PPT-/PPTX-Dateien nahelegt.

---

# 3. Startbildschirm

## 3.1 Sichtbarer Aufbau

Beim Öffnen der Website wird zunächst der Startbildschirm angezeigt.

Darin enthalten sind:

- die Bezeichnung **„LoopScreen“**
- der Untertitel **„Videos & Präsentationen im randlosen Display-Modus“**
- die Karte **„Video Loop“**
- die Karte **„Präsentation“**
- der Bereich **„Datei hierher ziehen oder auswählen“**

Die Seite besitzt keinen separaten sichtbaren Navigationsbereich, keine Benutzerkonten und keine sichtbare Anmeldung.

---

## 3.2 „Video Loop“

Die Karte **„Video Loop“** erklärt:

> „Lade ein Video hoch und spiele es automatisch und endlos über den gesamten Bildschirm ab.“

Als Format-Hinweis werden unter anderem MP4, WebM, OGG und MOV angezeigt.

### Bedienung

1. Klicken Sie auf **„Video Loop“**.
2. Es öffnet sich die Dateiauswahl des Betriebssystems.
3. Wählen Sie eine Videodatei aus.
4. Die Website beginnt mit der Vorbereitung und wechselt anschließend in den Player.

Alternativ können Sie eine Videodatei in den Bereich **„Datei hierher ziehen oder auswählen“** ziehen.

---

## 3.3 „Präsentation“

Die Karte **„Präsentation“** erklärt:

> „Präsentationen werden automatisch angezeigt und wechseln alle 8 Sekunden zur nächsten Folie.“

Als Format-Hinweis werden PDF, PPT, PPTX und Bilder angezeigt.

### Bedienung

1. Klicken Sie auf **„Präsentation“**.
2. Es öffnet sich die Dateiauswahl des Betriebssystems.
3. Wählen Sie eine Präsentation oder ein Bild aus.
4. Die Website beginnt mit der Vorbereitung und wechselt anschließend in den Präsentationsplayer.

Alternativ kann eine geeignete Datei in den Bereich **„Datei hierher ziehen oder auswählen“** gezogen werden.

---

## 3.4 Datei per Drag-and-Drop auswählen

Der Bereich mit der Aufschrift **„Datei hierher ziehen oder auswählen“** akzeptiert Dateien, die in diesen Bereich gezogen werden.

### Bedienung

1. Öffnen Sie die Dateien in Ihrem Betriebssystem.
2. Ziehen Sie die gewünschte Datei in den ausgewiesenen Bereich.
3. Lassen Sie die Datei dort los.
4. LoopScreen erkennt anhand des Dateinamens beziehungsweise des gemeldeten Dateityps, ob die Datei als Video oder Präsentation behandelt werden soll.

### Erkennungslogik

Eine Datei wird in folgender Reihenfolge behandelt:

1. **Video**, wenn der Dateityp mit `video/` beginnt oder der Dateiname eine unterstützte Videoerweiterung besitzt.
2. **Präsentation**, wenn es sich um PDF, PPT, PPTX oder ODP handelt.
3. **Präsentation**, wenn der Dateityp mit `image/` beginnt.

Passt die Datei zu keiner dieser Kategorien, erscheint die Meldung:

> „Dieses Dateiformat kann von deinem Browser nicht direkt angezeigt werden.“

---

# 4. Ladeanzeige

Während eine Datei vorbereitet wird, wird eine overlayartige Ladeanzeige eingeblendet.

Sie enthält:

- einen animierten Kreis
- den Text **„Wird vorbereitet …“**

Die Anzeige liegt über dem gesamten Bildschirm. Eine sichtbare Abbruchmöglichkeit ist im bereitgestellten Quellcode nicht vorhanden.

---

# 5. Videomodus

## 5.1 Anzeige

Das Video wird in einem randlosen Player dargestellt. Es füllt die verfügbare Fläche bildschirmfüllend aus. Die Eigenschaft `object-fit: cover` sorgt dafür, dass der Inhalt die Fläche ausfüllt und bei abweichenden Seitenverhältnissen möglicherweise an den Rändern beschnitten wird.

Bestätigte Eigenschaften:

- automatische Wiedergabe ist vorgesehen
- das Video ist auf Endloswiederholung gesetzt
- das Video wird mittig und randlos dargestellt
- ein Ton ist im Videoelement grundsätzlich vorhanden
- eine Bildschirmwiedergabe wird durch das Attribut `playsinline` unterstützt

Ob die automatische Wiedergabe in allen Browsern ohne Benutzerinteraktion beginnt, ist nicht eindeutig erkennbar. Browser können die Wiedergabe von Medien mit Ton blockieren.

## 5.2 Steuerung

Bei Maus- oder Trackpad-Bedienung werden die Steuerelemente nach einer kurzen Zeit ausgeblendet. Eine erneute Mausbewegung über den Player blendet sie wieder ein.

Sichtbare Bedienelemente:

| Bezeichnung | Funktion |
|---|---|
| **⏯** | Video pausieren beziehungsweise fortsetzen |
| **◀** | Im Präsentationsmodus zur vorherigen Folie wechseln |
| **▶** | Im Präsentationsmodus zur nächsten Folie wechseln |
| **⛶** | Fullscreen-Modus aktivieren beziehungsweise verlassen |

### Video pausieren oder fortsetzen

1. Bewegen Sie den Mauszeiger über den Player, damit die Steuerelemente erscheinen.
2. Klicken Sie auf **„⏯“**.
3. Das Video pausiert.
4. Erneut auf **„⏯“** klicken, um die Wiedergabe fortzusetzen.

### Fullscreen

1. Bewegen Sie den Mauszeiger über den Player.
2. Klicken Sie auf **„⛶“**.
3. Der Browser wechselt in den Fullscreen-Modus.
4. Erneutes Klicken auf **„⛶“** beendet den Fullscreen-Modus, sofern der Browser diese Aktion in diesem Zustand anbietet.

Ein sichtbarer Ton-Schalter ist nicht vorhanden. Die Lautstärke kann gegebenenfalls über die Betriebssystem- oder Browsersteuerung verändert werden.

---

# 6. Präsentationsmodus

## 6.1 Anzeige

Präsentationen werden auf einem `<canvas>` dargestellt. Das Canvas füllt den Playerbereich und verwendet `object-fit: contain`. Das bedeutet:

- Seitenverhältnisse der Folien werden beibehalten.
- Die Folie wird so groß wie möglich dargestellt.
- Falls die Folie andere Proportionen als der Bildschirm hat, entstehen freie schwarze Bereiche.
- Im Gegensatz zum Video werden Präsentationen nicht mit `cover` beschnitten.

## 6.2 Automatischer Folienwechsel

Die Präsentation wechselt nach der Angabe auf der Startseite **alle acht Sekunden** zur nächsten Folie.

Die automatische Wiedergabe verwendet intern einen Timer. Ein sichtbarer Countdown ist nicht vorhanden.

## 6.3 Folienzähler

Oben rechts wird der aktuelle Folienstand angezeigt, zum Beispiel:

> **1 / 1**

Der Zähler wird zusammen mit den übrigen Player-Steuerelementen eingeblendet.

### Bedeutung

- Die linke Zahl ist die aktuell angezeigte Folie.
- Die rechte Zahl ist die Gesamtzahl der verfügbaren Folien.

## 6.4 Zwischen Folien wechseln

1. Bewegen Sie den Mauszeiger über den Player.
2. Klicken Sie auf **„◀“**, um zur vorherigen Folie zu wechseln.
3. Klicken Sie auf **„▶“**, um zur nächsten Folie zu wechseln.

Ob der manuelle Wechsel den automatischen Acht-Sekunden-Timer neu startet, ist im gekürzten Quellcode nicht eindeutig erkennbar.

## 6.5 Präsentation pausieren oder fortsetzen

1. Bewegen Sie den Mauszeiger über den Player.
2. Klicken Sie auf **„⏯“**.
3. Der Zustand der Präsentation wird umgeschaltet.
4. Erneut auf **„⏯“** klicken, um den vorherigen Zustand wiederherzustellen.

Der genaue sichtbare Zustand – beispielsweise, ob das Symbol zwischen Pause und Play wechselt – ist im gezeigten Ausschnitt nicht eindeutig erkennbar.

## 6.6 Fortschrittsanzeige

Am unteren Rand befindet sich eine dünne Fortschrittsleiste.

- Die Leiste ist unter normalen Bedingungen zunächst nicht sichtbar.
- Sie wird zusammen mit den Steuerelementen eingeblendet.
- Der weiße Anteil zeigt den erreichten Fortschritt an.

Die genaue Berechnung des Fortschritts ist im gekürzten Quellcode nicht vollständig erkennbar.

---

# 7. Beenden

Im Player befindet sich oben links die Schaltfläche:

> **✕ Beenden**

### Bedienung

1. Bewegen Sie den Mauszeiger über den Player, damit die Schaltfläche sichtbar wird.
2. Klicken Sie auf **„✕ Beenden“**.
3. Der Player wird geschlossen und der Startbildschirm sollte wieder erscheinen.

Der vollständige Ablauf der Beenden-Funktion ist im gekürzten Quellcode nicht enthalten. Die sichtbare Beschriftung und Position belegen jedoch die vorgesehene Rückkehr zum Startbildschirm.

---

# 8. Bedienung auf Touch-Geräten

Für Geräte ohne Hover-Funktion blendet das CSS die folgenden Elemente grundsätzlich aus:

- Steuerleiste
- **„✕ Beenden“**
- Folienzähler
- Fortschrittsleiste

Zusätzlich gilt für den Player `touch-action: none`.

Im bereitgestellten Quellcode ist nicht eindeutig erkennbar, ob Touch-Gesten oder alternative Touch-Schaltflächen den Player steuern. Daher lässt sich bestätigen:

- Touch-Gesten sind im Player nicht per CSS vorgesehen.
- Die sichtbaren Desktop-Steuerelemente werden auf Touch-Geräten ausgeblendet.
- Eine vollständige mobile Bedienlogik ist im gekürzten Quellcode nicht belegt.

Wenn Sie LoopScreen ausschließlich auf einem Smartphone oder Tablet verwenden möchten, sollten Sie die tatsächliche Bedienbarkeit mit der verwendeten Geräteversion testen.

---

# 9. Eingaben und Ausgaben

## 9.1 Eingaben

LoopScreen akzeptiert:

- eine Videodatei über die Karte **„Video Loop“**
- eine Präsentation oder ein Bild über die Karte **„Präsentation“**
- eine Datei per Drag-and-Drop
- Mausbewegungen zum Einblenden der Steuerelemente
- Klicks auf Pause, vorherige/nächste Folie, Fullscreen und Beenden
- gegebenenfalls die native Fullscreen-Aktion des Browsers

## 9.2 Ausgaben

Die Website gibt Folgendes aus:

- eine randlose Video- oder Präsentationsansicht
- eine Ladeanzeige mit **„Wird vorbereitet …“**
- einen Folienzähler
- eine Fortschrittsanzeige
- Browserdialoge zur Dateiauswahl
- bei nicht unterstützten Dateien eine Fehlermeldung per `alert`

---

# 10. Datenschutz und Berechtigungen

## 10.1 Lokale Dateiverarbeitung

Im gezeigten Quellcode gibt es keine sichtbare Funktion, die eine Datei über `fetch`, `XMLHttpRequest` oder einen Formular-Upload an einen Server sendet.

Die Auswahl einer Datei kann jedoch durch das Betriebssystem und den Browser bestätigt werden. Der Browser benötigt für lokale Dateien die entsprechende Dateiauswahlberechtigung.

## 10.2 Externe Bibliotheken

Die Seite lädt zwei Bibliotheken von einem CDN:

- PDF.js
- JSZip

Dadurch wird beim Seitenaufbau eine Verbindung zu einem externen CDN-Server hergestellt. Dabei werden normalerweise übliche technische Verbindungsdaten wie IP-Adresse, Browserinformationen und Zeitpunkt an den CDN-Anbieter übermittelt. Es werden im gezeigten Code jedoch keine Inhalte der von Ihnen ausgewählten Dateien an das CDN übertragen.

Falls ein datenschutzkonformer Betrieb ohne externe Netzwerkverbindungen erforderlich ist, müssten die Bibliotheken lokal eingebunden werden. Eine solche Option ist im vor
