<!-- AUTOMATISCH ERZEUGT. Änderungen werden beim nächsten Lauf überschrieben. -->
<!-- source-path: lamacOs-Technolygies -->
<!-- source-files: ["lamacOs-Technolygies/index.html"] -->

# lamacOs-Technolygies – Support-Dokumentation

**Vermuteter Zweck:** Die Website „lamacOs Gaming“ dient als einfache Produkt- und Set-Präsentation für ein Gaming-Angebot. Besucher können Produkte und Sets ansehen. Über einen geschützten Verwaltungsbereich können berechtigte Nutzer das Coverbild ändern sowie Produkte und Sets anlegen oder bearbeiten.

**Quellcode-Pfad:** `lamacOs-Technolygies/index.html`

**Datum der Erstellung:** 26. März 2026

---

## 1. Überblick

Die Website besteht aus folgenden sichtbaren Bereichen:

1. Kopfbereich mit Titel, Navigation und farbigem Login-Symbol
2. Anmeldedialog
3. Coverbereich
4. Produktbereich
5. Setbereich
6. Fußbereich mit Social-Media-Verweisen

Die Produkte, Sets und das Coverbild werden in Firebase gespeichert. Bilder werden in Firebase Storage abgelegt.

> **Bestätigt:** Firebase Firestore und Firebase Storage sind im Quellcode eingebunden.  
> **Bestätigt:** Die Website besitzt einen Anmeldecode, über den Verwaltungsfunktionen freigeschaltet werden.  
> **Im Quellcode nicht eindeutig erkennbar:** Ein vollständiges Benutzerkonto-, Registrierungs- oder Rollenverwaltungssystem. Die Anmeldung erfolgt ausschließlich über einen im Quellcode hinterlegten Freigabecode.

---

## 2. Voraussetzungen

### Für Besucher

Für die reine Darstellung der Website benötigen Besucher:

- einen aktuellen Browser,
- eine Internetverbindung,
- Zugriff auf die bereitgestellten Firebase-Dienste,
- Zugriff auf die extern eingebundenen Google Fonts und den genutzten Platzhalterbilddienst.

### Für die Administration

Zusätzlich werden benötigt:

- der gültige Anmeldecode,
- Zugriff auf das Firestore-Dokument `home/cover`,
- Schreibrechte auf die Firestore-Sammlungen `products` und `sets`,
- Lese- und Schreibzugriff auf die verwendeten Firebase-Storage-Pfade.

> **Im Quellcode nicht eindeutig erkennbar:** Ob diese Firebase-Berechtigungen ausschließlich über den Anmeldecode geschützt werden oder zusätzlich durch Firebase-Regeln eingeschränkt sind. Das hängt von den serverseitigen Firebase-Regeln ab, die im bereitgestellten Quellcode nicht enthalten sind.

---

## 3. Sichtbare Bereiche der Website

## 3.1 Kopfbereich

Im Kopfbereich werden angezeigt:

- **„lamacOs Gaming“** als Seitenüberschrift,
- die Navigationspunkte **„Home“**, **„Produkte“**, **„Sets“** und **„Kontakt“**,
- ein kleines farbiges Quadrat rechts oben.

Die Navigation besitzt im vorliegenden Quellcode keine eindeutig festgelegten Zielbereiche: Alle Links verwenden den Platzhalter `#`. Ein tatsächlicher Wechsel zu einem Kontaktformular oder zu einem separaten Kontaktbereich ist daher nicht erkennbar.

### Farbiges Quadrat

Das Quadrat öffnet beziehungsweise schließt den Anmeldedialog.

**Bedienung:**

1. Klicken Sie auf das farbige Quadrat am rechten Rand des Kopfbereichs.
2. Der Dialog **„Anmeldung“** wird eingeblendet.
3. Erneutes Klicken auf das Quadrat schließt den Dialog wieder.

---

## 3.2 Anmeldedialog

Der Dialog enthält:

- die Überschrift **„Anmeldung“**,
- ein Passwortfeld mit dem Platzhalter **„Anmeldecode“**,
- die Schaltfläche **„Anmelden“**.

### Anmeldung durchführen

1. Klicken Sie auf das farbige Quadrat im Kopfbereich.
2. Geben Sie den gültigen Anmeldecode in das Feld **„Anmeldecode“** ein.
3. Klicken Sie auf **„Anmelden“**.
4. Nach erfolgreicher Prüfung:
   - wird der Dialog geschlossen,
   - erscheint eine Bestätigung **„Erfolgreich angemeldet!“**,
   - die Verwaltungsoptionen werden eingeblendet,
   - Cover, Produkte und Sets werden geladen.
5. Bei einem falschen Code erscheint die Meldung **„Falscher Code!“**.

> **Sicherheitshinweis:** Der Anmeldecode ist im Quellcode enthalten. Aus Sicherheitsgründen wird er in dieser Dokumentation nicht wiedergegeben. Ein im Browser ausgelagertes Geheimnis ist grundsätzlich kein zuverlässiger Schutz für Verwaltungsfunktionen. Für einen produktiven Einsatz sollte die Anmeldung auf Firebase Authentication mit serverseitigen Berechtigungen umgestellt werden.

> **Im Quellcode nicht eindeutig erkennbar:** Ob es eine Abmeldefunktion oder eine zeitlich begrenzte Anmeldesitzung gibt. Der Code setzt lediglich eine lokale Variable auf „angemeldet“ und kennt keinen Abmelde- oder Ablaufmechanismus.

---

## 3.3 Coverbereich

Im Coverbereich wird ein breites Bild mit der Beschriftung **„lamacOs Gaming“** angezeigt.

Bei einem neuen Datenbestand verwendet die Website zunächst einen Platzhalterbilddienst. Beim ersten erfolgreichen Anmelden wird dieser standardisierte Cover-Datensatz angelegt, sofern er noch nicht vorhanden ist.

### Coverbild ändern

Dieser Bereich ist nur nach erfolgreicher Anmeldung bearbeitbar.

1. Melden Sie sich mit dem gültigen Anmeldecode an.
2. Klicken Sie auf **„Cover ändern“** in der rechten unteren Ecke des Coverbereichs.
3. Wählen Sie eine Datei im Format `.png`, `.jpg` oder `.jpeg` aus.
4. Das Bild wird in Firebase Storage unter dem vorgesehenen Cover-Pfad gespeichert.
5. Die Bildadresse wird zusätzlich in Firestore gespeichert.
6. Das Coverbild wird unmittelbar aktualisiert.

### Anforderungen an das Coverbild

- Dateityp: PNG, JPG oder JPEG
- Maximale Dateigröße: **Im Quellcode nicht eindeutig erkennbar**
- Empfohlene Bildgröße: Die Darstellung ist auf etwa 1200 × 300 Pixel ausgelegt. Andere Seitenverhältnisse werden mittels `object-fit: cover` zugeschnitten.

---

## 3.4 Produktbereich

Unter der Überschrift **„Produkte“** werden Produktkarten angezeigt. Jede Produktkarte enthält:

- ein Produktbild,
- den Produktnamen,
- die Preisangabe,
- nach Anmeldung die Option **„Bearbeiten“**.

Die Produkte werden aus der Firestore-Sammlung `products` geladen.

### Produkt ansehen

1. Öffnen Sie die Website.
2. Wechseln Sie zum Bereich **„Produkte“**, sofern die Navigation beziehungsweise das Browser-Scrollen genutzt wird.
3. Die verfügbaren Produkte erscheen als Karten.
4. Klicken Sie auf ein Produktbild, um es in der verfügbaren Browser-Bildansicht zu öffnen.

> **Bestätigt:** Produktbilder besitzen einen anklickbaren Cursor.  
> **Im Quellcode nicht eindeutig erkennbar:** Ob beim Klick ein Lightbox, eine Detailseite oder lediglich die normale Bildansicht des Browsers geöffnet wird. Der Code enthält keine eigene Bilddetail-Ansicht.

### Produkt hinzufügen

Die Funktion ist nur nach erfolgreicher Anmeldung sichtbar.

1. Klicken Sie auf **„+ Produkt“** neben der Überschrift **„Produkte“**.
2. Wählen Sie ein Bild im Format `.png`, `.jpg` oder `.jpeg` aus.
3. Geben Sie im Dialog **„Produktname“** einen Namen ein.
4. Geben Sie im Dialog **„Preis“** einen Preis ein.
5. Das Produkt wird gespeichert und anschließend in der Galerie angezeigt.

Wird der Dateidialog ohne Auswahl geschlossen, wird kein Produkt angelegt.

Wird kein Produktname oder kein Preis eingegeben, erscheint eine entsprechende Fehlermeldung:

- **„Produktname darf nicht leer sein.“**
- **„Preis darf nicht leer sein.“**

> **Hinweis:** Das Bild wird im aktuellen Ablauf ausgewählt und hochgeladen, bevor Name und Preis abgefragt werden. Bricht der Besucher anschließend die Eingabe ab, kann das bereits hochgeladene Bild trotzdem im Speicher verblieben sein.

### Produkt bearbeiten

1. Melden Sie sich an.
2. Klicken Sie in der gewünschten Produktkarte auf **„Bearbeiten“**.
3. Geben Sie im Dialog **„Neuer Name“** den neuen Produktnamen ein.
4. Geben Sie im Dialog **„Neuer Preis“** den neuen Preis ein.
5. Wählen Sie im Dateidialog ein neues Bild aus oder brechen Sie die Auswahl ab.
6. Das Produkt wird gespeichert und neu dargestellt.

Wird kein Name eingegeben, erscheint **„Name darf nicht leer sein.“**.  
Wird kein Preis eingegeben, erscheint **„Preis darf nicht leer sein.“**

Bleibt das Bild unverändert, wird die bisherige Bildadresse beibehalten.

---

## 3.5 Setbereich

Unter der Überschrift **„Sets“** werden Sets angezeigt. Jede Set-Karte enthält:

- den Set-Namen,
- die Preisangabe,
- eine mehrfach auswählbare Liste der Produkte,
- nach Anmeldung die Option **„Bearbeiten“**.

Die ausgewählten Produktnamen eines Sets werden als deaktivierte Mehrfachauswahl angezeigt. Besucher können diese Liste nicht verändern.

Die Sets werden aus der Firestore-Sammlung `sets` geladen.

### Set ansehen

1. Öffnen Sie den Bereich **„Sets“**.
2. Wählen Sie die gewünschte Set-Karte.
3. Prüfen Sie den Set-Namen, den Preis und die darin enthaltenen Produkte.

### Set hinzufügen

Dieser Vorgang ist nur nach erfolgreicher Anmeldung möglich.

1. Klicken Sie auf **„+ Set“** neben der Überschrift **„Sets“**.
2. Geben Sie im Dialog **„Set Name“** einen Namen ein.
3. Geben Sie im Dialog **„Preis“** einen Preis ein.
4. Geben Sie im Dialog **„Produkte (Komma getrennt, exakt wie Namen)“** die enthaltenen Produkte an.
5. Trennen Sie die Produktnamen durch Kommas.
6. Das Set wird gespeichert und anschließend neu dargestellt.

Beispiel für die Eingabe:

```text
Produkt A, Produkt B, Produkt C
```

Die Namen müssen exakt den in der Produktverwaltung verwendeten Namen entsprechen. Groß- und Kleinschreibung sowie zusätzliche oder fehlende Zeichen können dazu führen, dass ein Produkt einem Set nicht zugeordnet wird.

Mögliche Meldungen:

- **„Name darf nicht leer sein.“**
- **„Preis darf nicht leer sein.“**
- **„Mindestens ein Produkt muss angegeben werden.“**

### Set bearbeiten

1. Melden Sie sich an.
2. Klicken Sie in der gewünschten Set-Karte auf **„Bearbeiten“**.
3. Geben Sie im Dialog **„Neuer Set Name“** einen Namen ein.
4. Geben Sie im Dialog **„Neuer Preis“** einen Preis ein.
5. Geben Sie im Dialog **„Produkte (Komma getrennt, exakt wie Namen)“** die Produktliste ein.
6. Das Set wird gespeichert und neu dargestellt.

---

## 3.6 Fußbereich

Im Fußbereich stehen:

- **„© 2026 lamacOs Gaming“**,
- **„Instagram“**,
- **„Twitter“**,
- **„YouTube“**.

Die drei Social-Media-Links verwenden im Quellcode lediglich `#` und öffnen daher keine nachweisbaren externen Profile.

> **Im Quellcode nicht eindeutig erkennbar:** Die tatsächlichen Zieladressen der Social-Media-Links.

---

# 4. Bedienung Schritt für Schritt

## 4.1 Produkte und Sets ohne Anmeldung ansehen

1. Website öffnen.
2. Zur Produktübersicht scrollen oder den Navigationspunkt **„Produkte“** verwenden.
3. Produkte in der Galerie prüfen.
4. Zur Setübersicht scrollen oder den Navigationspunkt **„Sets“** verwenden.
5. Set-Namen, Preise und enthaltene Produkte prüfen.

Die Verwaltungsoptionen **„Bearbeiten“**, **„+ Produkt“** und **„+ Set“** sind ohne Anmeldung nicht sichtbar.

## 4.2 Coverbild ersetzen

1. Auf das farbige Quadrat im Kopfbereich klicken.
2. Den gültigen Anmeldecode eingeben.
3. Auf **„Anmelden“** klicken.
4. Auf **„Cover ändern“** klicken.
5. Eine PNG-, JPG- oder JPEG-Datei auswählen.
6. Warten, bis das neue Coverbild erscheint.

## 4.3 Produkt anlegen

1. Anmelden.
2. Auf **„+ Produkt“** klicken.
3. Bilddatei auswählen.
4. **„Produktname“** eingeben.
5. **„Preis“** eingeben.
6. Warten, bis das Produkt in der Galerie erscheint.

## 4.4 Set anlegen

1. Anmelden.
2. Auf **„+ Set“** klicken.
3. **„Set Name“** eingeben.
4. **„Preis“** eingeben.
5. Produktnamen kommagetrennt und exakt eingeben.
6. Warten, bis das Set im Setbereich erscheint.

---

# 5. Eingaben und Ausgaben

## 5.1 Eingaben

Die Website verwendet folgende Eingabemöglichkeiten:

| Bereich | Sichtbare Eingabe | Erwartetes Format |
|---|---|---|
| Anmeldung | Anmeldecode | Geheimer Freigabecode |
| Cover | Datei | `.png`, `.jpg`, `.jpeg` |
| Produkt anlegen | Produktbild | `.png`, `.jpg`, `.jpeg` |
| Produkt anlegen | Produktname | Freitext, nicht leer |
| Produkt anlegen | Preis | Freitext, nicht leer |
| Produkt bearbeiten | Neuer Name | Freitext, nicht leer |
| Produkt bearbeiten | Neuer Preis | Freitext, nicht leer |
| Set anlegen/bearbeiten | Set-Name | Freitext, nicht leer |
| Set anlegen/bearbeiten | Preis | Freitext, nicht leer |
| Set anlegen/bearbeiten | Produktliste | Produktnamen, durch Kommas getrennt |

## 5.2 Ausgaben

Angezeigt werden:

- Produktbild,
- Produktname,
- Preis,
- Set-Name,
- Set-Preis,
- die einem Set zugeordneten Produkte,
- Statusmeldungen über Browser-Alert-Dialoge.

> **Im Quellcode nicht eindeutig erkennbar:** Eine Währung. Der Preis wird als freier Text gespeichert und angezeigt. Die Website ergänzt w
