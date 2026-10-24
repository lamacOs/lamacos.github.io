# lamacHub Support-Wissensdatenbank

Dieser Ordner wird automatisiert durch GitHub Actions und Cloudflare Workers AI erstellt.

- \`index.json\`: Verzeichnis aller erkannten Website-Dokumentationen.
- \`*.md\`: von KI erstellte Support-Anleitungen je Website.
- Änderungen an Website-Quellcode lösen die Aktualisierung automatisch aus.
- Zusätzlich gibt es einen wöchentlichen Aktualisierungslauf und einen manuellen Start unter **Actions → Update Support Knowledge → Run workflow**.

## Einmalige Einrichtung

Im GitHub-Repository unter **Settings → Secrets and variables → Actions** zwei Repository Secrets anlegen:

1. \`CLOUDFLARE_ACCOUNT_ID\`: Account ID aus dem Cloudflare-Dashboard.
2. \`CLOUDFLARE_API_TOKEN\`: Cloudflare API Token, der nur die Berechtigung **Workers AI – Read** bzw. den für Workers AI benötigten Zugriff besitzt.

Das Token niemals in eine Datei, einen Commit oder in den Browser-Code schreiben.

## Kosten

GitHub-hosted Standard Runner sind für öffentliche Repositories kostenlos. Cloudflare Workers AI hat ein begrenztes kostenloses tägliches Kontingent; die Erzeugung kann daher bei vielen Websites auf mehrere Läufe verteilt werden. Es wird kein kostenpflichtiges Modell absichtlich aktiviert. Prüfe die aktuellen Grenzen in der Cloudflare-Dokumentation.

## Sicherheit und Genauigkeit

Die Dokumentation ist öffentlich, genau wie dieses Repository. Das Skript überspringt typische Geheimnis-/Konfigurationsdateien und weist das Modell an, keine Geheimnisse auszugeben. Automatisch erzeugte Anleitungen müssen bei sicherheitskritischen Funktionen trotzdem geprüft werden.

Die Wissensdatenbank ist zunächst eine statische Dokumentation. Damit die Support-KI sie in Antworten verwendet, muss der Cloudflare-Worker die passende Markdown-Datei abrufen und als Kontext an das KI-Modell übergeben.
