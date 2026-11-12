<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: Live-World -->
<!-- source-files: ["Live-World/index.html"] -->

# Support-Dokumentation: Live Welt

**Website-Name:** Live Welt  
**Vermuteter Zweck:** Dashboard-ähnliche Startseite mit KI-gestütztem Kundensupport-Widget (lamacHub)  
**Quellcode-Pfad:** `Live-World/index.html`  
**Datum der Erstellung:** 2025-08-17  

---

## 1. Überblick

**Live Welt** ist eine einzelne HTML-Seite, die ein responsives Dashboard-Layout mit Karten (Kacheln) darstellt. In der Seite ist fest das **lamacHub KI-Kundenservice-Widget** eingebettet, das als schwebender Chat-Button (rechts unten) permanent verfügbar ist. Die Seite nutzt CSS-Variablen für Light/Dark-Mode (`.dark`-Klasse), bietet aber im vorliegenden Code **keinen sichtbaren Umschalter** für den Besucher.

---

## 2. Voraussetzungen für Besucher

| Anforderung | Details |
|-------------|---------|
| **Browser** | Moderner Browser mit Unterstützung für CSS Grid, CSS Custom Properties, `fetch` API, `URL` Constructor, `IntersectionObserver` (nicht direkt genutzt, aber Standard) |
| **JavaScript** | Muss aktiviert sein (Dashboard ist statisch nutzbar, aber Chat-Widget funktioniert nur mit JS) |
| **Netzwerk** | Zugriff auf `https://fonts.googleapis.com` (Schriftart Inter) und `https://carescape-ai.oslamuoslamu.workers.dev` (KI-Worker-Endpunkt) |
| **Gerät** | Desktop & Mobile (responsive bis < 480 px) |
| **Berechtigungen** | Keine Kamera, Mikrofon, Standort oder Benachrichtigungen erforderlich |

---

## 3. Sichtbare Bereiche & Elemente

### 3.1 Navigationsleiste (`.navbar`)
- **Position:** Oben, `position: sticky; top: 0`
- **Inhalt:**
  - **Logo** (`.logo`): 32×32 px Bild (`<img>` ohne `src` im Code → **Im Quellcode nicht eindeutig erkennbar**, ob ein Logo geladen wird) + Text „Live Welt“ (fett, schwarz per Inline-Style `color:black`).
  - **Toggle-Button** (`.toggle`): Beschriftung im Code nicht vorhanden (nur `<button class="toggle"></button>`). **Vermutung:** Dark-Mode-Umschalter, aber **keine JS-Logik dafür im Code vorhanden**.

### 3.2 Dashboard-Gitter (`.dashboard`)
- **Layout:** CSS Grid, `repeat(auto-fit, minmax(220px, 1fr))`, Gap 22 px, max. 1100 px Breite, zentriert.
- **Karten (`.card`):** Mehrere Kacheln mit:
  - Beschriftung (`.label`, grau, 14 px)
  - Zahlwert (`.number`, 1.6 rem, fett, Akzentfarbe `#ff7a00`)
- **Inhalt der Karten:** **Im Quellcode nicht eindeutig erkennbar** (HTML für Karten fehlt im Ausschnitt / wurde gekürzt). Die CSS-Regeln zeigen nur das Styling.

### 3.3 lamacHub KI-Kundenservice (`#lamac-ai`)
- **Öffnen-Button** (`#lamac-ai-open`): Fest positioniert (rechts unten, 24 px Abstand), 60×60 px, grün (`#007e62`), Emoji „💬“, `aria-label="Kundensupport öffnen"`.
- **Chat-Fenster** (`#lamac-ai-window`): Initial `display: none`, bei Klasse `.open` → `display: flex`, feste Größe (max. 390×570 px), Animation `lamac-ai-appear`.
  - **Header:** Titel „lamacHub Kundenservice“, Untertitel „KI-gestützter Support“, Schließen-Button (×).
  - **Nachrichtenbereich** (`#lamac-ai-messages`): Scrollbar, `aria-live="polite"`, zeigt Bot- und User-Nachrichten.
  - **Eingabeformular** (`#lamac-ai-form`): Textfeld (max. 1800 Zeichen, `required`), Senden-Button (➤).

---

## 4. Bedienung Schritt für Schritt

### 4.1 Dashboard betrachten
1. Seite laden → Navigationsleiste oben, Karten-Gitter darunter.
2. Bei schmalem Viewport (< 220 px pro Karte) stapeln sich Karten vertikal.
3. Hover-Effekt: Karte hebt sich leicht an (`transform: translateY(-3px)`).

### 4.2 KI-Kundensupport nutzen
1. **Chat öffnen:** Klick auf den grünen 💬-Button rechts unten.
2. **Erste Nachricht:** Im Nachrichtenbereich erscheint automatisch: „Hallo! Wie kann ich dir weiterhelfen?“ (Bot).
3. **Eigene Nachricht senden:**
   - Text in das Feld „Nachricht schreiben …“ eingeben (max. 1800 Zeichen).
   - Enter drücken oder ➤-Button klicken.
   - Nachricht erscheint rechtsbündig grünlich (`lamac-user`).
   - Während der Antwort zeigt der Bot drei animierte Punkte („Kundenservice antwortet“).
4. **Antwort lesen:** Bot-Nachrichten linksbündig weiß mit Rand, unterstützen **Markdown** (Überschriften, Listen, Tabellen, Codeblöcke, Links, Fett/Kursiv/Strikethrough).
5. **Chat schließen:** Klick auf × im Header oder erneut auf 💬-Button (Toggle-Verhalten per JS).
6. **Verlauf:** Der Chat-Verlauf bleibt im `history`-Array erhalten, solange die Seite nicht neu geladen wird.

---

## 5. Eingaben & Ausgaben

| Komponente | Eingabe | Ausgabe / Wirkung |
|------------|---------|-------------------|
| **Toggle-Button (Navbar)** | Klick | **Keine Funktion im Code** (kein Event-Listener) |
| **Chat-Öffnen-Button** | Klick | Toggle `display: none/flex` auf `#lamac-ai-window`, Klasse `.open` für Animation |
| **Chat-Schließen-Button** | Klick | Schließt Fenster |
| **Eingabefeld** | Text (≤ 1800 Zeichen) | Validierung `required`, Enter/Submit sendet |
| **Senden-Button** | Klick / Form-Submit | Sendet Nachricht an Worker, deaktiviert Button während `busy=true` |
| **Worker-Antwort** | JSON-Stream (vermutet) | Rendert Markdown in HTML, zeigt in `#lamac-ai-messages` |

> **Hinweis:** Die tatsächliche Worker-Kommunikation (`fetch` an `WORKER_URL`) ist im gekürzten Script-Teil **nicht vollständig sichtbar**, aber die Funktionen `addUserMessage`, `addBotMessage`, `showTyping`, `renderMarkdown` und `safeLink` sind vollständig implementiert.

---

## 6. Typische Probleme & Fehlerbehebung

| Symptom | Mögliche Ursache | Prüfung / Lösung |
|---------|------------------|------------------|
| **Chat-Button fehlt / Chat öffnet nicht** | JS-Fehler, `#lamac-ai` nicht initialisiert | Console prüfen: `root.dataset.initialized` verhindert Doppel-Init. AdBlocker? `carescape-ai.oslamuoslamu.workers.dev` geblockt? |
| **Nachricht wird nicht gesendet** | `busy === true` (vorherige Anfrage läuft noch) | Warten bis Antwort da ist; Button ist währenddessen `disabled` (`opacity: .5`). |
| **Worker antwortet nicht / Netzwerkfehler** | CORS, Worker down, falsche URL | Network-Tab: POST an `WORKER_URL` prüfen. Im Code: `const WORKER_URL = "https://carescape-ai.oslamuoslamu.workers.dev/";` |
| **Markdown wird nicht gerendert** | Bot sendet rohen Text ohne Markdown | `renderMarkdown()` escapet HTML zuerst, dann wandelt es MD → HTML. Prüfen, ob Worker Markdown liefert. |
| **Links nicht klickbar** | `safeLink()` blockiert Nicht-HTTP(S) | Nur `http:` / `https:` erlaubt. `mailto:`, `tel:` etc. werden als Text belassen. |
| **Dark Mode funktioniert nicht** | `.dark`-Klasse nie auf `<body>` gesetzt | **Im Code keine Logik dafür.** Manuell in DevTools `<body class="dark">` testen. |
| **Logo nicht sichtbar** | `<img>` ohne `src`-Attribut | HTML ergänzen: `<img src="pfad/zum/logo.svg" alt="">` |
| **Toggle-Button ohne Beschriftung** | `<button class="toggle"></button>` leer | Barrierefreiheit: `aria-label="Dark Mode umschalten"` + JS für Theme-Wechsel ergänzen. |

---

## 7. Datenschutz & Berechtigungen

| Aspekt | Status |
|--------|--------|
| **Cookies / LocalStorage** | Nicht im Code verwendet (Chat-Verlauf nur im RAM `history`-Array). |
| **Externe Requests** | 1. Google Fonts (`fonts.googleapis.com`) beim Laden.<br>2. KI-Worker (`carescape-ai.oslamuoslamu.workers.dev`) bei jeder Chat-Nachricht. |
| **IP / Metadaten** | Werden an Worker-Endpunkt gesendet (Standard-HTTP). Keine zusätzlichen Tracker im Code. |
| **Eingabedaten** | Chat-Nachrichten verlassen den Browser Richtung Worker. **Keine clientseitige Verschlüsselung.** |
| **Berechtigungs-APIs** | Keine (kein `navigator.permissions`, `getUserMedia`, `Notification` etc.). |
| **CSP-Hinweis** | Inline-`<style>` und `<script>` sowie `unsafe-eval` (nicht genutzt) wären für strikte CSP problematisch. |

---

## 8. FAQ

**F: Wie schalte ich den Dark Mode ein?**  
A: **Im Quellcode nicht eindeutig erkennbar.** Die CSS-Variablen für `.dark` existieren, aber es gibt keinen Button/Listener, der die Klasse auf `<body>` setzt. Der `.toggle`-Button in der Navbar ist funktionslos.

**F: Warum steht im Logo „Live Welt“, aber der Tab-Titel ist „Live Welt“?**  
A: `<title>Live Welt</title>` und Logo-Text stimmen überein. Konsistent.

**F: Kann ich den Chat-Verlauf exportieren?**  
A: Nicht im Code vorgesehen. `history`-Array ist privat im IIFE. Kein Export-Button.

**F: Funktioniert der Chat offline?**  
A: Nein. Der `fetch` an den Worker schlägt fehl. Kein Service Worker / Offline-Cache im Code.

**F: Sind meine Nachrichten verschlüsselt?**  
A: Nur per HTTPS (TLS) auf Transportweg. Inhaltlich liegt der Text im Worker-Request im Klartext vor.

**F: Warum ist der Senden-Button manchmal grau/deaktiviert?**  
A: Während `busy = true` (Warten auf Worker-Antwort) wird `button.disabled = true` gesetzt (CSS: `opacity: .5; cursor: not-allowed`).

**F: Kann ich Code-Blöcke im Chat senden?**  
A: Ja, der Bot rendert Markdown-Codeblöcke (``` ... ```) als `<pre><code>`. Eigene Eingabe wird als Plaintext gesendet (kein MD-Parsing clientseitig für User-Nachrichten).

**F: Woher kommt die Akzentfarbe `#ff7a00` (Orange) im Dashboard, aber `#007e62` (Grün) im Chat?**  
A: Zwei getrennte Design-Systeme: Dashboard nutzt CSS-Variablen (`--accent`), Chat-Widget hat **eigene, fest codierte Farben** (keine CSS-Variablen), um Isolation zu garantieren.

---

## 9. Bekannte Limitationen (aus Code ersichtlich)

1. **Keine Dark-Mode-Umschaltung** trotz vorbereiteter Variablen.
2. **Logo-Bild fehlt** (`<img>` ohne `src`).
3. **Toggle-Button unbeschriftet & funktionslos** (Barrierefreiheits-Mangel).
4. **Karten-Inhalt fehlt** im HTML-Ausschnitt (nur CSS vorhanden).
5. **Worker-URL hardcoded** → bei Änderung muss HTML angepasst werden.
6. **Keine Persistenz** des Chat-Verlaufs (Seite neu laden = Verlauf weg).
7. **Keine Fehlermeldung im UI** bei Worker-Fehler (nur Console/Network).
8. **Maximale Nachrichtenlänge 1800 Zeichen** (HTML `maxlength`), längere Texte werden abgeschnitten.

---

## 10. Empfehlungen für Weiterentwicklung

- Dark-Mode-Toggle implementieren (LocalStorage + `body.classList.toggle('dark')`).
- `src` für Logo-Bild setzen, `alt`-Text prüfen.
- `.toggle` mit `aria-label` und Click-Handler versehen.
- Karten-HTML im `.dashboard` ergänzen (Datenquelle klären).
- Worker-URL per `data-Attribut` oder Config-Variable auslagern.
- Fehlerbehandlung im Chat-UI (Toast/Banner bei Network-Error).
- Chat-Verlauf optional in `localStorage` speichern/wiederherstellen.
- CSP-kompatibel machen: Inline-Styles/Script nonces oder externe Dateien.

---

*Ende der Dokumentation. Basierend ausschließlich auf dem bereitgestellten Quellcode-Ausschnitt.*
