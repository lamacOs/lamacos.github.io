<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: HTMLBuilder -->
<!-- source-files: ["HTMLBuilder/index.html"] -->

# Support-Dokumentation: HTMLBuilder

**Website-Name:** HTMLBuilder  
**Vermuteter Zweck:** Ein webbasierter Editor zum Erstellen, Bearbeiten und Live-Vorschau von HTML-Code.  
**Quellcode-Pfad:** `HTMLBuilder/index.html`  
**Datum der Erstellung:** 2025-08-07 (basierend auf heutigem Datum)  

---

## 1. Überblick

HTMLBuilder ist eine Single-Page-Application (SPA), die vollständig in einer `index.html` Datei enthalten ist. Sie bietet eine zweigeteilte Oberfläche: links ein Code-Editor (Textarea) für HTML-Eingabe, rechts eine Live-Vorschau (IFrame) des gerenderten Ergebnisses. Zusätzlich sind ein Theme-Wechsler (Light/Dark Mode) und ein eingebetteter KI-Support-Chat (lamacHub) integriert.

**Zielgruppe:** Entwickler, Lernende oder Designer, die schnell HTML-Snippets testen oder prototypen möchten, ohne eine lokale Entwicklungsumgebung aufzusetzen.

---

## 2. Voraussetzungen

| Anforderung | Details |
| :--- | :--- |
| **Browser** | Moderner Browser mit Unterstützung für `CSS Variables`, `Grid Layout`, `backdrop-filter`, `IntersectionObserver` (für Chat-Animationen) und `fetch` API. |
| **JavaScript** | Muss aktiviert sein (Essentiell für Editor-Logik, Theme-Wechsel, Chat-Funktionalität). |
| **Netzwerk** | Internetzugang erforderlich für: <br>• Google Fonts (Inter) <br>• KI-Chat-Worker (`https://carescape-ai.oslamuoslamu.workers.dev/`) |
| **Berechtigungen** | Keine besonderen Browser-Berechtigungen (Kamera, Mikrofon, Standort) erforderlich. Der Chat nutzt `localStorage` nicht offensichtlich, aber `sessionStorage`/`IndexedDB` könnte vom Worker genutzt werden. |

---

## 3. Benutzeroberfläche – Bereiche im Detail

Die Oberfläche gliedert sich in folgende Hauptbereiche (von oben nach unten):

### 3.1 Navigationsleiste (`.navbar`)
*   **Markenbereich (`.brand`):** Zeigt ein Logo-Bild (44x44px, Quelle im Quellcode nicht sichtbar, `src` Attribut fehlt im Ausschnitt) und den Text "HTML Builder".
*   **Theme-Button (`.theme-btn`):** Button mit `aria-label` (nicht explizit im HTML, aber `button` Element vorhanden). Wechselt das `data-theme` Attribut am `<html>` Element zwischen `light` (Standard) und `dark`. Speichert die Präferenz **nicht** im `localStorage` (im Quellcode nicht erkennbar), d.h. nach Neuladen wird Standard (Light) geladen.

### 3.2 Hero-Bereich (`.hero`)
*   Überschrift: "HTML Builder" (Orange/Accent-Farbe).
*   Beschreibungstext: "Ein moderner, browserbasierter HTML-Editor mit Live-Vorschau. Schreibe Code links, sieh das Ergebnis rechts – sofort." (Text aus Quellcode rekonstruiert, da im Ausschnitt gekürzt).

### 3.3 Haupt-Arbeitsbereich (`.grid` → 2 Spalten auf Desktop, 1 Spalte < 1000px)

#### Linke Spalte: Editor (`.card`)
*   **Überschrift:** "HTML Editor"
*   **Eingabefeld (`textarea`):**
    *   ID: Nicht explizit im Ausschnitt sichtbar, aber per JS als `document.querySelector('textarea')` ansprechbar.
    *   Platzhalter-Text: Im Quellcode nicht gesetzt (`placeholder` Attribut fehlt).
    *   Features: Monospace-Schrift, vertikal skalierbar (`resize: vertical`), Mindesthöhe 250px, Syntax-Highlighting **nicht** vorhanden (reines Textarea).
*   **Aktionsleiste (`.actions`):**
    *   Enthält Buttons (`.action-btn`). Im Quellcode sind **keine konkreten Button-Texte/Funktionen** im HTML-Auszug definiert (Der HTML-Teil der `.actions` div ist im Ausschnitt leer/gekürzt).
    *   *Vermutung:* Typische Buttons wären "Löschen", "Kopieren", "Beispiel laden". **Im Quellcode nicht eindeutig erkennbar.**

#### Rechte Spalte: Vorschau (`.card`)
*   **Überschrift:** "Live-Vorschau"
*   **Ausgabe-Container (`#output`):** Wrapper mit `min-height: 250px`.
*   **IFrame (`.preview`):**
    *   Größe: 100% Breite, 500px Höhe.
    *   `border: none`, `border-radius: 16px`, `background: white` (Hardcoded Weiß, passt sich **nicht** Dark Mode an).
    *   **Funktionsweise:** Der IFrame wird per JavaScript mit dem Inhalt der Textarea befüllt (siehe Abschnitt 4.1).

### 3.4 Footer
*   Copyright/Hinweis-Text (zentriert, gedämpfte Farbe). Inhalt im Ausschnitt nicht lesbar.

### 3.5 KI-Support-Chat (lamacHub) – `#lamac-ai`
*   **Position:** Fest positioniert (fixed), rechts unten (24px Abstand).
*   **Öffnen-Button (`#lamac-ai-open`):** Runder Button (60px), türkis/grün (`#007e62`), Icon: "💬" (Unicode).
*   **Fenster (`#lamac-ai-window`):** 390px breit, max 570px hoch. Erscheint per Slide-Up Animation.
*   **Header:** Titel "lamacHub Kundenservice", Untertitel "KI-gestützter Support", Schließen-Button (×).
*   **Nachrichtenbereich (`#lamac-ai-messages`):** Scrollbar, zeigt Bot- (weiß, links) und User-Nachrichten (grünlich, rechts).
*   **Eingabeformular (`#lamac-ai-form`):** Input-Feld (max 1800 Zeichen), Senden-Button (Pfeil-Icon).
*   **Markdown-Support:** Bot-Antworten rendern Markdown (Tabellen, Code-Blöcke, Links, Fett/Kursiv).
*   **Backend:** WebWorker unter `https://carescape-ai.oslamuoslamu.workers.dev/`.

---

## 4. Bedienung – Schritt für Schritt

### 4.1 HTML-Code schreiben & Vorschau aktualisieren
1.  Öffne die Website.
2.  Klicke in das **linke Textarea-Feld** ("HTML Editor").
3.  Gib gültigen HTML-Code ein (z. B. `<h1>Hallo Welt</h1><p>Mein erster Test</p>`).
    *   *Hinweis:* Es wird **kein** `<html>`, `<head>` oder `<body>` Tag benötigt. Der Inhalt wird direkt in den Body des Iframes injiziert.
4.  Die Vorschau rechts (**IFrame**) aktualisiert sich **automatisch beim Tippen** (vermutlich `input`-Event-Listener).
    *   *Im Quellcode nicht eindeutig erkennbar:* Ob ein "Debounce" (Verzögerung) existiert. Bei großem Code könnte die Performance leiden.

### 4.2 Theme wechseln (Light / Dark Mode)
1.  Klicke auf den **Button rechts in der Navigationsleiste** (Beschriftung im Quellcode nicht sichtbar, vermutlich Icon oder "Dark/Light").
2.  Die Seite wechselt sofort die Farbvariablen (Hintergrund, Karten, Text, Schatten).
3.  **Einschränkung:** Der IFrame-Hintergrund bleibt **weiß** (`background: white` im CSS), da er ein separates Dokument ist. Der Dark Mode wirkt sich nur auf die Parent-Seite aus.

### 4.3 KI-Support-Chat nutzen
1.  Klicke auf den **Sprechblasen-Button (💬)** unten rechts.
2.  Das Chat-Fenster öffnet sich mit Begrüßung: "Hallo! Wie kann ich dir weiterhelfen?".
3.  Tippe deine Frage in das Eingabefeld ("Nachricht schreiben …").
4.  Drücke **Enter** oder klicke den **Pfeil-Button (➤)**.
5.  Warte auf Antwort (animierte drei Punkte "Tippen...").
6.  Schließe das Fenster über das **×** oben rechts oder den Button außen (Toggle-Verhalten: Öffnen/Schließen über denselben Button).

---

## 5. Eingaben & Ausgaben

| Bereich | Eingabe | Ausgabe / Reaktion |
| :--- | :--- | :--- |
| **Editor (Textarea)** | HTML-Text (String) | Live-Rendering im IFrame (DOM-Elemente). Fehlerhafter HTML wird vom Browser korrigiert dargestellt. |
| **Theme-Button** | Klick | Toggle `data-theme="dark"` auf `<html>`. CSS-Variablen ändern sich sofort. |
| **Chat Input** | Text (max 1800 Zeichen) | Sendet Request an Worker-API. Empfängt Streaming- oder Block-Antwort, rendert Markdown im Chat-Verlauf. |
| **Chat Senden** | Submit-Event | Deaktiviert Button während Request (`busy` Flag), zeigt Typing-Animation. |

---

## 6. Typische Probleme & Fehlerbehebung

| Problem | Mögliche Ursache | Lösung / Workaround |
| :--- | :--- | :--- |
| **Vorschau bleibt leer / zeigt alten Code** | JS-Fehler im `input`-Listener oder IFrame `contentDocument` Zugriff blockiert (CSP/CORS). | 1. Browser-Konsole (F12) prüfen auf Fehler.<br>2. Seite neu laden.<br>3. Prüfen, ob Browser "Third Party Cookies/Storage" blockiert (IFrame ist same-origin `about:blank` bzw `srcdoc`, sollte funktionieren). |
| **Dark Mode: IFrame Hintergrund blendet weiß** | IFrame hat hardcoded `background: white`. | **Im Quellcode nicht behebbar.** Workaround: Eigenes CSS im Editor hinzufügen: `<style>body{background:#0b1220;color:white}</style>`. |
| **Chat öffnet nicht / zeigt "Netzwerkfehler"** | Worker-URL `carescape-ai.oslamuoslamu.workers.dev` nicht erreichbar (Firewall, DNS, Offline). | 1. Internet prüfen.<br>2. In neuem Tab Worker-URL aufrufen (sollte 404/Worker-Fehler zeigen, aber erreichbar sein).<br>3. AdBlocker/Privacy-Tools prüfen (blockieren evtl. `workers.dev`). |
| **Chat sendet nicht / Button dreht sich ewig** | `busy` Flag bleibt `true` (Fehler im Response-Handling), oder Worker antwortet nicht. | Fenster schließen & neu öffnen (Reset State). Seite neu laden. |
| **Theme wird nach Reload nicht gespeichert** | Kein `localStorage`/`cookie` Logik im Code gefunden. | **Bestätigt:** Nicht implementiert. Manuell nach jedem Laden umschalten. |
| **Editor: Kein Syntax-Highlighting / Einrückung** | `textarea` Element kann kein Rich-Text/Highlighting. | Externen Editor (VS Code) nutzen & Copy-Paste. Oder Browser-Extension für Textarea-Highlighting. |

---

## 7. Datenschutz & Berechtigungen

### 7.1 Lokale Daten
*   **Keine** offensichtliche Nutzung von `localStorage`, `sessionStorage`, `IndexedDB` oder `Cookies` im Frontend-Code (außer `root.dataset.initialized` für Chat-Verhinderung Doppel-Ladung).
*   Editor-Inhalt bleibt **nur im RAM** der Seite. Beim Neuladen **verloren**.

### 7.2 Externe Verbindungen
1.  **Google Fonts (`fonts.googleapis.com` / `fonts.gstatic.com`):** Lädt Schriftart "Inter". Überträgt IP-Adresse an Google. Kein `localStorage` Tracking, aber Standard-Google-Logging.
2.  **KI-Chat Worker (`https://carescape-ai.oslamuoslamu.workers.dev/`):** Sendet Chat-Verlauf (History) an diesen Endpunkt.
    *   **Achtung:** Der Prompt/Verlauf verlässt den Browser. **Keine sensiblen Daten (Passwörter, API-Keys, PII) in den Chat eingeben.**
    *   Der Worker steht unter Kontrolle von `oslamuoslamu` (Subdomain von `workers.dev` / Cloudflare).

### 7.3 Content Security Policy (CSP)
*   Im Quellcode **kein** `<meta http-equiv="Content-Security-Policy">` Tag vorhanden.
*   Inline-Styles (`<style>`) und Inline-Scripts (`<script>`) werden ausgeführt. `unsafe-inline` effektiv erlaubt.
*   IFrame nutzt `srcdoc` (implizit via `document.write` oder `srcdoc` Property im JS), was `unsafe-inline` für das IFrame-Dokument erfordert.

---

## 8. FAQ (Häufige Fragen)

**F: Wie speichere ich meinen HTML-Code?**
A: **Gar nicht automatisch.** Du musst den Code aus der Textarea kopieren (Strg+A, Strg+C) und lokal in einer `.html` Datei speichern. Es gibt **keinen** "Speichern"- oder "Export"-Button im Quellcode.

**F: Kann ich CSS und JavaScript im Editor schreiben?**
A: **Ja.** Da der Inhalt in einen IFrame injiziert wird, funktionieren `<style>` Blöcke und `<script>` Blöcke im HTML-Code ganz normal.
*Beispiel:*
```html
<style>body { background: red; }</style>
<h1>Test</h1>
<script>console.log("Läuft im IFrame");</script>
```

**F: Warum sieht die Vorschau im Dark Mode immer noch weiß aus?**
A: Der IFrame ist ein eigenes Dokument. Das CSS der Hauptseite (`--bg` Variable) gilt nicht darin. Der IFrame hat fest `background: white` im CSS der Hauptseite definiert. Siehe "Typische Probleme".

**F: Ist der Chat privat?**
A: Die Nachrichten werden an einen externen Server (`carescape-ai.oslamuoslamu.workers.dev`) gesendet. Lies die Datenschutzerklärung von lamacHub/Cloudflare Workers, falls kritisch. **Nicht für Geheimnisse nutzen.**

**F: Funktioniert die Seite offline?**
A: **Nein.** Google Fonts und der Chat-Worker benötigen Internet. Der Editor *allein* könnte theoretisch offline funktionieren (Service Worker nicht vorhanden), aber Fonts fehlen dann.

**F: Gibt es Tastenkombinationen (Shortcuts)?**
A: **Im Quellcode nicht erkennbar.** Keine Event-Listener für `keydown` (außer evtl. im Chat-Formular `Enter` zum Senden).

**F: Warum ist der "Senden"-Button im Chat manchmal deaktiviert?**
A: Während eine Antwort vom Server verarbeitet wird (`busy = true`), wird der Button per `disabled` Attribut deaktiviert
