# Snake Battle -- Support-Wissensdatenbank

**Produkt:** Snake Battle\
**Dokument:** `SNAKEBattle.md`\
**Zweck:** Wissensgrundlage für die lamacHub-Support-KI\
**Sprache:** Deutsch

------------------------------------------------------------------------

## 1. Kurzbeschreibung

Snake Battle ist ein browserbasiertes Snake-Spiel mit einer
Canvas-Spieloberfläche. Spieler steuern eine Schlange durch eine
begrenzte Arena, sammeln Futter, vergrößern dadurch ihre Schlange und
versuchen, Kollisionen zu vermeiden.

Das Spiel enthält zwei Spielarten:

-   **Solo:** Einzelspieler-Modus mit computergesteuerten Schlangen.
-   **Online:** Gemeinsame Arena, in der angemeldete Spieler und
    serverseitig koordinierte Bots spielen.

Zusätzlich gibt es Konten, Spielerprofile, Freundschaftsanfragen, eine
Rangliste, einen Boost und grundlegende Spielsteuerungen.

## 2. Technische Grundlagen

-   **Frontend:** HTML, CSS und JavaScript
-   **Rendering:** HTML5-Canvas
-   **Backend:** Firebase
-   **Firebase SDK:** 10.14.1, Compat-Version
-   **Authentifizierung:** Firebase Authentication
-   **Datenbank:** Firebase Realtime Database
-   **Datenbankregion:** `europe-west1`
-   **Projekt-ID:** `snakebattle-33440`
-   **Datenbank-URL:**
    `https://snakebattle-33440-default-rtdb.europe-west1.firebasedatabase.app`

Die Firebase-Konfiguration ist im Spielcode hinterlegt. Der öffentliche
Firebase-API-Key ist kein Ersatz für Datenbankregeln. Der Zugriff muss
durch korrekte Firebase Security Rules geschützt werden.

## 3. Spielmodi

### 3.1 Solo-Modus

Der Solo-Modus kann ohne Anmeldung gestartet werden.

Ablauf:

1.  Im Hauptmenü **SOLO** auswählen.
2.  Die eigene Schlange startet ungefähr in der Mitte der Arena.
3.  Sechs computergesteuerte Schlangen werden ebenfalls erzeugt.
4.  Futter wird zufällig in der Arena verteilt.
5.  Durch das Einsammeln von Futter steigen Punktzahl und
    Schlangenlänge.
6.  Bei einer tödlichen Kollision endet die Runde.

Die Solo-Arena hat standardmäßig eine Größe von `3600 × 3600`
Spieleinheiten. Zu Beginn werden 180 Futterobjekte erzeugt.

### 3.2 Online-Modus

Für den Online-Modus ist ein angemeldetes Konto erforderlich. Außerdem
muss im Profil ein gültiger Spielername gespeichert sein.

Ablauf:

1.  Konto erstellen oder anmelden.
2.  Im Profil einen Spielernamen festlegen.
3.  Im Hauptmenü **ONLINE** öffnen.
4.  **ARENA BETRETEN** auswählen.
5.  Das Spiel verbindet sich mit der öffentlichen Arena.

Die Online-Arena wird über Firebase Realtime Database synchronisiert.
Spielerpositionen, Blickrichtung, Punktzahl, Länge und ein komprimierter
Körperpfad werden übertragen.

**Wichtig:** Online-Spieler sehen nicht zwingend jeden Netzwerkzustand
sofort. Die Übertragung erfolgt in regelmäßigen Intervallen; entfernte
Schlangen werden zwischen den Updates lokal vorausberechnet und
geglättet.

### 3.3 Öffentliche Arena und Bots

Die öffentliche Arena enthält menschliche Spieler und Bots.

-   Die Arena-Größe startet bei 3600.
-   Ein aktiver Leader verwaltet die Bots.
-   Die gewünschte Bot-Anzahl richtet sich nach der Zahl menschlicher
    Spieler.
-   Bots werden mit zufälligen Namen und Farben erzeugt.
-   Bots können nach einer begrenzten Lebensdauer oder bei Überschreiten
    einer Längengrenze entfernt werden.
-   Der Leader veröffentlicht Bot-Zustände regelmäßig in Firebase.

Die Leader-Rolle wird über einen zeitlich begrenzten Eintrag in
`rooms/public/leader` koordiniert. Der Heartbeat läuft ungefähr alle 1,5
Sekunden; ein Leader gilt nach fünf Sekunden ohne Heartbeat als
abgelaufen.

## 4. Steuerung

### Mobilgeräte und Touchscreens

-   Mit dem Finger auf die Spielfläche tippen und in die gewünschte
    Richtung wischen.
-   Die Richtung wird relativ zur Bildschirmmitte bestimmt.
-   Der Hinweistext verschwindet nach der ersten Berührung der
    Spielfläche.

### Computer

-   **Maus:** Mit der Maus auf der Spielfläche die gewünschte Richtung
    vorgeben.
-   **A / Pfeil links:** Schlange nach links drehen.
-   **D / Pfeil rechts:** Schlange nach rechts drehen.
-   **Leertaste:** Spiel pausieren oder fortsetzen.
-   **Umschalttaste (Shift):** Boost aktivieren.

Die Drehsteuerung über A/D beziehungsweise die Pfeiltasten ist eine
Links-/Rechts-Drehung und keine direkte Bewegung zu einer
Bildschirmposition.

### Schaltflächen

-   **Ⅱ / ▶:** Pause beziehungsweise Fortsetzen.
-   **⛶:** Vollbildmodus anfordern beziehungsweise verlassen.
-   **BOOST:** Zeitlich begrenzte Geschwindigkeitssteigerung.

## 5. Boost

Der Boost verdoppelt für kurze Zeit die Bewegungsgeschwindigkeit der
eigenen Schlange.

-   Dauer: 5 Sekunden
-   Abklingzeit: 10 Sekunden nach Ende des Boosts
-   Aktivierung: Boost-Schaltfläche oder Umschalttaste
-   Aktivierung ist nur möglich, wenn eine lebende, laufende und nicht
    pausierte Spielrunde besteht.

Der Boost ist während der Abklingzeit nicht verfügbar. Die Schaltfläche
zeigt an, ob der Boost bereit, aktiv oder am Aufladen ist.

## 6. Punkte, Futter und Kollisionen

### Futter

-   Normales Futter liegt in der Arena verteilt.
-   Ein Futterobjekt hat standardmäßig einen Wert von 10 Punkten.
-   Beim Einsammeln erhält die Schlange die Punkte und wächst um ein
    Längenelement.
-   Die Darstellung verwendet unter anderem Cyan- und Goldtöne.
-   Beim Ausscheiden einer Schlange können Futterobjekte an ihrer
    bisherigen Körperposition entstehen.

### Kollisionen

Eine Schlange kann durch folgende Ereignisse ausscheiden:

-   Berührung der Arena-Grenze
-   Kollision mit dem eigenen Körper
-   Kollision mit dem Kopf einer anderen Schlange
-   Kollision mit dem Körper einer anderen Schlange

Nach dem Ausscheiden wird im Spielende-Menü die erreichte Punktzahl
angezeigt.

Im Online-Modus besitzt ein neu beigetretener Spieler für kurze Zeit
einen Kollisionsschutz. Dieser Schutz dauert im Code 2,5 Sekunden.

## 7. Rangliste und HUD

Die Spieloberfläche zeigt:

-   **SCORE:** aktuelle Punktzahl
-   **RANG:** aktuelle Position unter den lebenden Schlangen
-   **SPIELER:** Zahl der anderen lebenden Schlangen beziehungsweise im
    Online-Modus der erkannten menschlichen Spieler
-   **RANGLISTE:** bis zu zehn lebende Schlangen, nach Punktzahl
    sortiert

Im Solo-Modus zählt die Anzeige „SPIELER" die anderen lebenden Schlangen
einschließlich der Bots. Im Online-Modus zählt sie den eigenen lebenden
Spieler und erkannte entfernte menschliche Spieler; Bots werden dabei
nicht als menschliche Spieler gezählt.

## 8. Konto und Anmeldung

Das Spiel bietet folgende Authentifizierungswege:

-   Registrierung mit E-Mail-Adresse und Passwort
-   Anmeldung mit E-Mail-Adresse und Passwort
-   Anmeldung mit Google
-   Zurücksetzen des Passworts per E-Mail
-   Abmelden

Für die E-Mail-Registrierung muss das Passwort mindestens sechs Zeichen
lang sein.

### Google-Anmeldung

Die Google-Anmeldung versucht zunächst ein Popup. Wenn die Umgebung
Popups nicht unterstützt oder blockiert, kann auf eine Weiterleitung
umgeschaltet werden.

Wenn die Anmeldung fehlschlägt, sollten folgende Punkte geprüft werden:

1.  Ist Google als Anmeldemethode in Firebase Authentication aktiviert?
2.  Ist die verwendete Website-Domain unter den autorisierten Domains
    eingetragen?
3.  Blockiert der Browser Popups oder Weiterleitungen?
4.  Wird die Seite über eine geeignete HTTPS-Adresse geöffnet?

Der konkrete Fehlertext wird im Anmeldebereich angezeigt.

## 9. Spielerprofil

Ein angemeldeter Spieler kann im Menü **PROFIL** einen Spielernamen
speichern.

Regeln für den Spielernamen:

-   Mindestens 3 Zeichen
-   Höchstens 16 Zeichen
-   Erlaubt sind Buchstaben, Zahlen, Leerzeichen, Unterstrich und
    Bindestrich
-   Der Name darf nicht bereits von einem anderen öffentlichen Profil
    verwendet werden

Der Profilname wird sowohl unter `players/{uid}` als auch unter
`publicProfiles/{uid}` gespeichert.

Die Prüfung auf doppelte Namen erfolgt im Client durch das Auslesen der
öffentlichen Profile. Für eine zuverlässige, manipulationssichere
Eindeutigkeit sollte diese Prüfung zusätzlich serverseitig
beziehungsweise durch eine geeignete Datenbankstruktur abgesichert
werden.

## 10. Freunde und Freundschaftsanfragen

Im Menü **FREUNDE** können Spieler nach öffentlichen Spielernamen
suchen.

Funktionen:

-   Suche nach einem Spielernamen oder Namensbestandteil
-   Freundschaftsanfrage senden
-   Eingehende Anfragen anzeigen
-   Anfrage annehmen
-   Anfrage ablehnen
-   Freundesliste anzeigen
-   Online-/Offline-Status anzeigen

Die Suche verlangt mindestens zwei Zeichen. Es werden höchstens 20
passende Suchergebnisse angezeigt.

### Datenbankpfade

-   Öffentliche Profile: `publicProfiles/{uid}`
-   Freundesliste: `friends/{uid}/{friendUid}`
-   Eingehende Anfragen: `friendRequests/{receiverUid}/{senderUid}`

Beim Annehmen einer Anfrage werden beide Freundeseinträge geschrieben
und die eingehende Anfrage entfernt.

**Hinweis für den Support:** Die Freundesliste zeigt den im
Freundeseintrag gespeicherten Status. Der gezeigte Code aktualisiert
diese gespeicherten Freundesstatuswerte nicht fortlaufend automatisch.
Ein angezeigter Online-/Offline-Status kann daher veraltet sein, wenn
keine zusätzliche Status-Synchronisierung implementiert ist.

## 11. Wichtige Firebase-Datenpfade

  --------------------------------------------------------------------------------
  Pfad                                         Zweck
  -------------------------------------------- -----------------------------------
  `players/{uid}`                              Kontobezogene Spielerdaten und
                                               Online-Spielstatus

  `publicProfiles/{uid}`                       Öffentlich auffindbare
                                               Profilinformationen

  `friends/{uid}/{friendUid}`                  Freundesbeziehungen

  `friendRequests/{receiverUid}/{senderUid}`   Eingehende Freundschaftsanfragen

  `rooms/public/foods`                         Futterobjekte der Online-Arena

  `rooms/public/bots`                          Veröffentlichte Bot-Zustände

  `rooms/public/leader`                        Aktueller Arena-Leader und
                                               Heartbeat

  `rooms/public/size`                          Gemeinsame Arena-Größe
  --------------------------------------------------------------------------------

### Spielerstatus

Ein Online-Spieler überträgt unter anderem:

-   UID
-   Spielername
-   Farbe
-   X- und Y-Position
-   Blickrichtung
-   Punktzahl
-   Schlangenlänge
-   Lebens- und Online-Status
-   Bewegungsgeschwindigkeit
-   komprimierte Körperpositionen
-   Zeitstempel

## 12. Typische Supportfälle und Lösungshinweise

### „Ich kann den Online-Modus nicht betreten."

Mögliche Ursachen:

-   Der Spieler ist nicht angemeldet.
-   Im Profil wurde noch kein Spielername gespeichert.
-   Firebase Authentication oder Realtime Database ist nicht erreichbar.
-   Die Datenbankregeln verweigern einen benötigten Zugriff.

Lösung:

1.  Anmeldung im Profil prüfen.
2.  Einen gültigen Spielernamen speichern.
3.  Seite neu laden und erneut anmelden.
4.  Bei einem Berechtigungsfehler die Firebase-Regeln und den
    betroffenen Datenbankpfad prüfen.

### „Bitte zuerst anmelden!"

Diese Meldung erscheint, wenn ein Spieler den Online-Modus ohne
angemeldetes Firebase-Konto betreten möchte.

Lösung: Über **ANMELDEN / REGISTRIEREN** ein Konto erstellen oder
anmelden.

### „Bitte zuerst einen Spielernamen im Profil festlegen!"

Für die Online-Arena wird ein gespeicherter Spielername benötigt.

Lösung: **PROFIL** öffnen, einen Namen mit 3 bis 16 erlaubten Zeichen
eingeben und speichern.

### „Dieser Spielername ist bereits vergeben."

Der Name stimmt ohne Beachtung der Groß-/Kleinschreibung mit einem
anderen öffentlichen Profil überein.

Lösung: Einen anderen Namen wählen.

### „Permission denied" oder „Client doesn't have permission"

Firebase hat einen Lese- oder Schreibzugriff verweigert.

Das ist in der Regel ein Problem mit den
Realtime-Database-Security-Rules oder mit dem angemeldeten Nutzer, nicht
mit der Canvas-Grafik.

Für die Fehlersuche benötigt der Support:

-   den vollständigen Fehlertext
-   den betroffenen Datenbankpfad
-   die ausgeführte Aktion (z. B. Anfrage senden, Profil speichern,
    Arena betreten)
-   ob der Spieler angemeldet ist

**Wichtig:** Nicht pauschal alle Firebase-Regeln auf öffentliches Lesen
und Schreiben setzen. Regeln müssen den Zugriff auf die jeweilige UID
und die jeweilige Datenstruktur beschränken.

### „Meine Freundschaftsanfrage wird nicht gesendet."

Prüfen:

1.  Ist der Spieler angemeldet?
2.  Wurde ein anderer Spieler gefunden?
3.  Besteht die Freundschaft bereits?
4.  Wurde bereits eine Anfrage an diesen Spieler gesendet?
5.  Verweigern die Regeln den Schreibzugriff auf
    `friendRequests/{uid}/{senderUid}`?

### „Ich sehe keine Freunde oder Anfragen."

Prüfen:

-   Ist der richtige Account angemeldet?
-   Werden die Pfade `friends/{uid}` und `friendRequests/{uid}` gelesen?
-   Erlauben die Firebase-Regeln den Zugriff auf die Daten des
    angemeldeten Nutzers?
-   Gibt es tatsächlich gespeicherte Einträge?

### „Google-Anmeldung funktioniert nicht."

Prüfen:

-   Google-Provider in Firebase Authentication aktiviert?
-   Website-Domain in Firebase autorisiert?
-   Popup blockiert?
-   HTTPS-Verbindung vorhanden?
-   Exakte Fehlermeldung im Anmeldebereich?

### „Das Spiel reagiert nicht auf Touch."

Prüfen:

-   Wird die Spielfläche berührt und nicht ein Menüelement?
-   Läuft die Runde und ist sie nicht pausiert?
-   Ist der Browser aktuell?
-   Wird die Seite in einem Browser mit Canvas- und
    Pointer-Event-Unterstützung geöffnet?

### „Der Boost funktioniert nicht."

Der Boost kann nur während einer laufenden, nicht pausierten Runde mit
lebender eigener Schlange aktiviert werden. Außerdem muss die
Abklingzeit abgelaufen sein.

### „Die Rangliste zeigt nicht alle Spieler."

Die Rangliste zeigt maximal zehn lebende Schlangen. Im Online-Modus
hängt die Anzeige außerdem von den empfangenen und noch gültigen
Netzwerkdaten ab.

### „Ein anderer Spieler bewegt sich ruckelig oder verzögert."

Die Online-Positionen werden in Intervallen übertragen und zwischen den
Snapshots interpoliert beziehungsweise vorausberechnet.
Netzwerkverzögerungen, schwankende Verbindung oder veraltete Snapshots
können sichtbare Verzögerungen verursachen.

### „Ich wurde aus der Online-Arena entfernt."

Mögliche Ursachen sind eine verlorene Verbindung, ein nicht mehr
gültiger Spielstatus, ein Seitenwechsel oder ein tatsächliches
Ausscheiden. Bei einem Verbindungsabbruch können die gespeicherten
Online-Daten kurzzeitig noch sichtbar sein, bis sie als veraltet erkannt
werden.

## 13. Bekannte technische Grenzen und Hinweise

Diese Punkte sind aus dem bereitgestellten Spielcode ersichtlich und
sollten bei Supportantworten berücksichtigt werden:

1.  **Keine Garantie für serverautoritative Spielphysik:** Bewegung,
    Kollisionen und ein Teil der Spielzustände werden im Browser
    berechnet. Die Realtime Database speichert und verteilt Zustände,
    ist aber keine eigene vertrauenswürdige Spiel-Engine.
2.  **Clientseitige Namensprüfung:** Die Prüfung auf doppelte
    Spielernamen findet im Browser statt und kann bei gleichzeitigen
    Registrierungen oder manipulierten Clients umgangen werden.
3.  **Freundesstatus:** Die im Freundeseintrag gespeicherte
    Online-Eigenschaft wird im gezeigten Code nicht als fortlaufender
    Live-Status synchronisiert.
4.  **Online-Futter:** Das Einsammeln wird über eine
    Datenbank-Transaktion abgesichert. Bei einem fehlgeschlagenen oder
    konkurrierenden Vorgang kann das Futter lokal bereits verschwunden
    sein, obwohl der Datenbankvorgang nicht erfolgreich war.
5.  **Leader-Koordination:** Die Bot-Verwaltung hängt von einem aktiven
    Browser-Client als Leader ab. Bei Verbindungsproblemen oder
    Hintergrundbetrieb kann die Bot-Simulation verzögert werden.
6.  **Spieler-Heartbeat:** Der eigene Status wird regelmäßig
    veröffentlicht. Bei Hintergrund-Tabs, Verbindungsabbrüchen oder
    Browser-Einschränkungen können Statuswerte veralten.
7.  **Online-Anzeige:** Die Zahl der Online-Spieler basiert auf
    Datenbankstatus und Zeitstempeln und kann kurzzeitig von der
    tatsächlichen Zahl aktiver Personen abweichen.
8.  **Firebase-Regeln sind entscheidend:** Die im HTML enthaltene
    Firebase-Konfiguration schützt keine Daten. Sichere
    Realtime-Database-Regeln sind zwingend erforderlich.

## 14. Support-Sicherheitsregeln

Die Support-KI soll:

-   niemals nach Passwörtern, Anmelde-Codes oder privaten Zugangsdaten
    fragen
-   Nutzer nicht auffordern, ihren Firebase-API-Key oder private
    Kontodaten öffentlich zu posten
-   keine pauschal offenen Firebase-Regeln empfehlen
-   bei `permission_denied` zuerst den konkreten Datenbankpfad und die
    passende Regel prüfen
-   zwischen einem Frontend-Fehler, einem Authentifizierungsfehler und
    einem Datenbank-Berechtigungsfehler unterscheiden
-   keine Funktionen versprechen, die im beschriebenen Code nicht
    vorhanden sind
-   bei unklarer Ursache gezielt nach der exakten Fehlermeldung und der
    ausgeführten Aktion fragen

## 15. Antwortstil der Support-KI

Antworten sollen:

-   auf Deutsch und verständlich formuliert sein
-   zuerst die wahrscheinlichste Ursache nennen
-   anschließend konkrete, nummerierte Schritte anbieten
-   bei technischen Problemen den betroffenen Firebase-Pfad nennen,
    sofern bekannt
-   klar sagen, wenn etwas aus dem vorliegenden Code nicht sicher
    feststellbar ist
-   keine Änderungen am Code behaupten, die nicht tatsächlich
    durchgeführt wurden

## 16. Kurz-FAQ

**Kann ich Snake Battle ohne Konto spielen?**\
Ja. Der Solo-Modus kann ohne Anmeldung gestartet werden. Für die
Online-Arena ist eine Anmeldung erforderlich.

**Wie bekomme ich einen Spielernamen?**\
Im Menü **PROFIL** einen Namen mit 3 bis 16 erlaubten Zeichen speichern.

**Wie spiele ich mit Freunden?**\
Im Menü **FREUNDE** nach dem Spielernamen suchen und eine
Freundschaftsanfrage senden. Die andere Person muss die Anfrage
annehmen.

**Wie funktioniert der Boost?**\
Er verdoppelt die Geschwindigkeit für 5 Sekunden und lädt danach 10
Sekunden wieder auf.

**Wie steuere ich die Schlange am Handy?**\
Auf der Spielfläche in die gewünschte Richtung wischen.

**Wie pausiere ich am Computer?**\
Leertaste oder Pause-Schaltfläche verwenden.

**Warum sehe ich nur zehn Einträge in der Rangliste?**\
Die Rangliste ist auf die zehn bestplatzierten lebenden Schlangen
begrenzt.

**Warum funktioniert Online trotz Anmeldung nicht?**\
Zusätzlich muss ein Spielername gespeichert sein. Außerdem müssen
Firebase Authentication, Realtime Database und deren Sicherheitsregeln
korrekt eingerichtet sein.

------------------------------------------------------------------------

*Ende der Wissensdatenbank. Dieses Dokument beschreibt den
bereitgestellten HTML-/JavaScript-Code. Änderungen am Spiel können dazu
führen, dass einzelne Angaben aktualisiert werden müssen.*
