<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Smooth-Animations -->
<!-- source-files: ["Smooth-Animations/index.html"] -->

# Smooth-Animations

**Vermuteter Zweck:** Sammlung und Vollbildwiedergabe von 50 browserbasierten Canvas-Animationen mit Auswahlfunktion, Zufallswiedergabe, Dauerloop, Favoriten, Hell-/Dunkelmodus und einem KI-gestützten Kundensupport-Chat.  
**Quellcode-Pfad:** `Smooth-Animations` beziehungsweise `Smooth-Animations/index.html`  
**Datum der Erstellung:** 16. März 2025

> **Hinweis zur Quellcode-Basis:** Der bereitgestellte Auszug ist gekürzt. Die Dokumentation beschreibt die daraus erkennbaren Funktionen. Bereiche oder Verhaltensweisen, die im Auszug nicht vollständig sichtbar sind, werden ausdrücklich als **„Im Quellcode nicht eindeutig erkennbar“** gekennzeichnet.

---

## 1. Überblick

„Smooth-Animations“ ist eine statisch aufgebaute Website, auf der Besucher eine von 50 nummerierten Animationen auswählen und anschließend in einem bildschirmfüllenden Overlay abspielen können.

Die Seite bietet:

- eine Galerie mit 50 Animationen,
- eine manuelle Animationsauswahl,
- eine zufällige Auswahl,
- Vollbilddarstellung auf einem Canvas,
- eine Option für endlose Wiederholung,
- Favoriten mit dauerhafter Speicherung im Browser,
- einen hellen und einen dunklen Darstellungsmodus,
- einen integrierten Kundenservice-Chat.

Die Animationen werden direkt mit JavaScript auf einem HTML-Canvas gezeichnet. Es ist im Auszug keine Videodatei und keine externe Animationsbibliothek zu erkennen.

---

## 2. Voraussetzungen

### Für Besucher

Für die Nutzung werden benötigt:

1. ein aktueller Browser mit JavaScript,
2. eine Internetverbindung zum Laden der externen Logo- und Theme-Bilder,
3. eine Bildschirmfläche, auf der Animationen großflächig dargestellt werden können,
4. für den Support-Chat zusätzlich eine erreichbare Verbindung zum hinterlegten Support-Dienst.

Die Animationslogik selbst wird im Auszug direkt im Browser ausgeführt. Ob alle Animationen ohne Internetverbindung funktionieren, ist nicht vollständend erkennbar, da mindestens Logos und Theme-Bilder extern geladen werden.

### Für das Hosting

Die Website benötigt:

- eine statische Auslieferung der HTML-, CSS- und JavaScript-Inhalte,
- für den Support-Chat eine erreichbare, HTTPS-basierte Worker-Schnittstelle,
- eine funktionierende Weiterleitung von Chat-Anfragen an den externen Support-Dienst.

Ob zusätzlich ein Build-Prozess, ein Server für Benutzerkonten oder eine Datenbank benötigt werden, ist im Quellcode nicht eindeutig erkennbar.

---

## 3. Sichtbare Bereiche der Website

## 3.1 Navigationsleiste

Ganz oben befindet sich eine sticky Navigationsleiste. Sie bleibt beim Scrollen im sichtbaren Bereich.

### Logo

Links ist das Logo „lamacOs“ zu sehen. Es besteht aus:

- einem extern geladenen Bild,
- dem Text „lamacOs“.

Das Logo ist als Link hinterlegt. Im Auszug führt dieser Link zu `#`; das bedeutet, dass keine eindeutige Zielseite erkennbar ist.

### Design-Umschalter

Rechts in der Navigationsleiste befindet sich eine runde Schaltfläche mit einem Bild. Sie schaltet zwischen dem hellen und dem dunklen Farbschema um.

- Im hellen Modus wird ein Sonnenbild angezeigt.
- Im dunklen Modus wird ein Mondbild angezeigt.

Die Auswahl wird im Browser unter dem Schlüssel `theme` gespeichert. Beim nächsten Besuch wird sie automatisch wiederhergestellt.

---

## 3.2 Startbereich

Unterhalb der Navigationsleiste steht zentriert:

- die Überschrift **„🎬 Animationen“**,
- der Text **„Wählen Sie eine Animation aus und spielen Sie sie in Vollbildmodus ab“**.

Anschließend folgt die Galerie mit den Animationen.

---

## 3.3 Galerie der Animationen

Die Galerie wird beim Laden der Seite automatisch aufgebaut. Sie enthält 50 Karten mit den Nummern **1** bis **50**.

Eine Karte zeigt:

- ihre Nummer,
- optional ein Herz-Symbol, wenn sie als Favorit gespeichert ist,
- einen orangefarbenen Rand und eine leichte Anhebung beim Darüberfahren.

Die Karten sind nicht als Links oder Schaltflächen, sondern als `<div>`-Elemente umgesetzt. Sie werden per Mausklick beziehungsweise Tastatur- beziehungsweise Screenreader-Bedienung nicht vollständig wie native Schaltflächen behandelt.

### Einfach auswählen

Ein einfacher Klick auf eine Karte:

1. hebt die bisherige Auswahl auf,
2. markiert die neue Karte,
3. aktualisiert die Anzeige **„Ausgewählt: Animation …“**,
4. aktiviert die Schaltfläche **„▶ Play“**.

### Favorit setzen oder entfernen

Ein Doppelklick auf eine Karte setzt sie als Favorit oder entfernt sie wieder aus den Favoriten.

Als Favorit gespeicherte Karten erhalten rechts oben ein Herz-Symbol. Die Favoritenliste wird im Browser unter dem Schlüssel `favAnims` gespeichert und bleibt daher beim nächsten Besuch erhalten.

> **Bedienhinweis:** Doppelklick ist auf Touch-Geräten und mit Trackpads nicht immer zuverlässig. Im Quellcode ist keine zusätzliche sichtbare Favoriten-Schaltfläche vorhanden.

---

## 3.4 Steuerbereich

Unter der Galerie befindet sich ein zentraler Steuerbereich mit:

- der Anzeige **„Keine Animation gewählt“** beziehungsweise **„Ausgewählt: Animation …“**,
- der Schaltfläche **„▶ Play“**,
- der Schaltfläche **„🎲 Zufällig“**,
- der Option **„Dauerloop“**.

### „▶ Play“

Vor einer Auswahl ist „▶ Play“ deaktiviert und grau dargestellt. Nach der Auswahl einer Animation wird die Schaltfläche aktiv.

Ein Klick startet die gewählte Animation in einem bildschirmfüllenden Overlay.

### „🎲 Zufällig“

„🎲 Zufällig“:

1. wählt eine zufällige Nummer von 1 bis 50,
2. markiert die entsprechende Karte,
3. aktualisiert die Auswahlanzeige,
4. startet die Animation sofort.

Die Zufallsauswahl kann auch dieselbe Animation wie die zuvor gewählte sein.

### „Dauerloop“

Die Checkbox **„Dauerloop“** ist standardmäßig nicht aktiviert.

Ist sie aktiviert, beginnt die gewählte Animation nach Ablauf ihrer Einzelwiederholung erneut. Die Schleife wird fortgesetzt, solange das Overlay geöffnet bleibt.

---

## 3.5 Animations-Overlay

Beim Start wird ein Overlay über die gesamte Seite gelegt. Es enthält:

- eine Canvas-Fläche in der Größe des Browserfensters,
- oben rechts die Schaltfläche **„✕ Schließen“**.

Die einzelnen Animationen laufen ungefähr acht Sekunden. Ohne aktivierten Dauerloop wird das Overlay am Ende automatisch geschlossen.

### „✕ Schließen“

Die Schaltfläche beendet die laufende Animation sofort und schließt das Overlay.

Der Quellcode enthält außerdem einen Listener für die Taste `Esc`, der nur den Overlay-Bereich ausblendet. Ob dabei auch die laufende Zeichenanimation zuverlässig gestoppt wird, ist im gekürzten Auszug nicht eindeutig erkennbar.

---

## 3.6 Kundensupport-Chat

Unten rechts ist ein runder, grüner Chat-Knopf mit einem Sprechblasen-Symbol sichtbar.

### Chat öffnen

Ein Klick auf den Chat-Knopf öffnet das Fenster **„lamachub Kundenservice“** mit der Unterzeile **„KI-gestützter Support“**.

Zunächst enthält der Chat die Begrüßung:

> „Hallo! Wie kann ich Ihnen weiterhelfen?“

### Nachricht senden

1. Text in das Feld **„Nachricht schreiben“** eingeben.
2. Auf das Senden-Symbol **„➤“** klicken oder die Eingabetaste verwenden.
3. Die Nachricht erscheint rechts in der Chat-Historie.
4. Das Eingabefeld wird geleert.
5. Der Kundenservice verarbeitet die Anfrage und antwortet, sofern der Support-Dienst erreichbar ist.

Das Eingabefeld akzeptiert maximal 1.800 Zeichen. Eine leere Nachricht wird nicht gesendet.

### Chatverlauf

Bis zu die zwölf zuletzt ausgetauschten Chatnachrichten werden für Folgeanfragen an den Support-Dienst mitgeschickt. Dabei werden sowohl benutzer- als auch dienstseitige Nachrichten berücksichtigt.

### Chat schließen

Das „×“ oben rechts im Chatfenster schließt den Chat. Der bisherige Chatverlauf bleibt beim erneuten Öffnen innerhalb derselben Seitenansicht sichtbar.

### Meldung nach 15 Anfragen

Nach 15 gesendeten Nachrichten wird ein zusätzlicher Hinweis angezeigt, der darum bittet, das Anliegen in wenigen, konkreten Nachrichten zusammenzufassen.

### Service nicht erreichbar

Wenn die Antwort nicht geladen werden kann oder der Dienst einen Fehler meldet, erscheint:

> „Der Kundenservice ist gerade nicht erreichbar. Bitte versuchen Sie es später erneut.“

---

# 4. Bedienung Schritt für Schritt

## 4.1 Eine Animation auswählen und abspielen

1. Website öffnen.
2. Im Bereich **„🎬 Animationen“** eine der 50 nummerierten Karten anklicken.
3. Prüfen, ob **„Ausgewählt: Animation …“** angezeigt wird.
4. Auf **„▶ Play“** klicken.
5. Die Animation im bildschirmfüllenden Overlay betrachten.
6. Die Wiedergabe mit **„✕ Schließen“** beenden oder das automatische Ende abwarten.

## 4.2 Eine zufällige Animation abspielen

1. Optional die Checkbox **„Dauerloop“** aktivieren.
2. Auf **„🎲 Zufällig“** klicken.
3. Die zufällig ausgewählte Animation beginnt sofort.
4. Mit **„✕ Schließen“** beenden, sofern sie nicht automatisch endet.

## 4.3 Eine Animation dauerhaft wiederholen

1. Die gewünschte Karte anklicken.
2. Die Checkbox **„Dauerloop“** aktivieren.
3. Auf **„▶ Play“** klicken.
4. Die Animation läuft nach jeweils etwa acht Sekunden erneut.
5. Zum Beenden **„✕ Schließen“** anklicken.

Die Checkbox wird bei jedem Start ausgelesen. Eine Änderung während einer laufenden Wiedergabe wird erst für den nächsten Start wirksam.

## 4.4 Eine Animation als Favorit speichern

1. Die gewünschte Animationsnummer doppelklicken.
2. Prüfen, ob rechts oben auf der Karte ein Herz erscheint.
3. Erneut doppelklicken, um den Favoritenstatus wieder zu entfernen.

Die Favoriten bleiben bei einem späteren Besuch derselben Website im selben Browser und Nutzerprofil erhalten, sofern der Browser localStorage nicht blockiert oder löscht.

## 4.5 Zwischen hellem und dunklem Design wechseln

1. Die runde Bildschaltfläche oben rechts anklicken.
2. Die Seite wechselt zwischen hellem und dunklem Farbschema.
3. Die Auswahl wird für den nächsten Besuch gespeichert.

## 4.6 Den Kundenservice verwenden

1. Auf den grünen Chat-Knopf unten rechts klicken.
2. Eine Frage in **„Nachricht schreiben“** eingeben.
3. Auf **„➤“** klicken.
4. Die Antwort im Chat abwarten.
5. Das Fenster über **„×“** schließen, wenn es nicht mehr benötigt wird.

---

# 5. Verhalten und technische Grenzen

## 5.1 Animationsdauer

Der Quellcode setzt eine Dauer von **8.000 Millisekunden** fest. Jede Animation läuft daher ungefähr acht Sekunden.

## 5.2 Anpassung an das Browserfenster

Beim Öffnen einer Animation und bei einer Änderung der Fenstergröße wird die Canvas-Fläche an die verfügbare Browsergröße angepasst. Dabei wird auch die Gerätepixelratio berücksichtigt, damit die Darstellung auf hochauflösenden Displays schärfer gezeichnet wird.

Die Animationen werden auf Basis der Bildschirmbreite und -höhe berechnet. Je nach Animation können deshalb unterschiedliche Formen oder Größen entstehen.

## 5.3 Farbdarstellung im Overlay

Mehrere Animationen verwenden weiße Farben oder helle Farbtöne. Der Hintergrund des Canvas wird bei jedem Frame zunächst transparent gelöscht und nicht ausdrücklich auf eine dunkle Vollbildfarbe gesetzt.

Je nach Browser, Grafiktreiber und Anzeige kann der Hintergrund daher:

- weiß erscheinen,
- die Standardfarbe des Canvas zeigen,
- durch eine vorhandene Seitenhintergrundfarbe sichtbar werden.

Im Quellcode ist nicht eindeutig erkennbar, ob für alle Animationen bewusst ein einheitlicher Hintergrund vorgesehen ist.

## 5.4 Keine Tonsignale

Der gezeigte Quellcode enthält keine Audioausgabe und keine sichtbare Lautstärke- oder Tonsteuerung. Eine Audioausgabe der Animationen ist daher nicht erkennbar.

## 5.5 Keine sichtbare Animationsvorschau in den Karten

Die Karten zeigen nur Nummern beziehungsweise Favoritenmarkierungen. Im Auszug ist keine Miniatur- oder Vorschauanimation in den Karten erkennbar.

---

# 6. Datenschutz und Berechtigungen

## 6.1 Lokal gespeicherte Daten

Im Browser werden folgende Einstellungen gespeichert:

- die gewählte Darstellung: hell oder dunkel,
- die Nummern der als Favorit markierten Animationen.

Diese Daten werden im localStorage des Browsers abgelegt. Im gezeigten Quellcode ist kein Benutzerkonto erforderlich, um Favoriten oder das Theme zu verwenden.

Da localStorage browser- und profilbezogen ist, können die Einstellungen:

- beim Wechsel von Browser oder Gerät nicht vorhanden sein,
- beim Löschen der Website-Daten verschwinden,
- bei Nutzung eines privaten Browsermodus nur temporär oder gar nicht erhalten bleiben.

## 6.2 Support-Chat und Datenübermittlung

Beim Senden einer Chatnachricht wird diese als JSON an eine extern gehostete Worker-Schnittstelle übertragen. Zusammen mit der aktuellen Nachricht werden bis zu zwölf vorherige Chatnachrichten übermittelt.

Daher gilt:

- Eingaben im Support-Chat können ein externes System erreichen.
- Es sollte keine informationelle Nachricht eingetragen werden, die nicht an den Support-Dienst weitergegeben werden darf.
- Ob der Dienst personenbezogene Daten speichert, anonymisiert oder löscht, ist im Quellcode nicht eindeutig erkennbar.
- Eine Datenschutzerklärung
