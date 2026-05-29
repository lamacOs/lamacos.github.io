#!/bin/bash

# Alle Repositories von lamacOs
REPOS=(
  "FlohmarktScanner"
  "Hide-and-Seek"
  "InfoHub"
  "lamacOs-Kurzbefehle"
  "lamacOs-Technolygies"
  "Live-World"
  "NeoTerra"
  "Nutzlose-Website-LOL"
  "online-ticketmanager"
  "Pack-O-Mat"
  "Paddle-Game"
  "PlayHub"
  "RouteNote-Converter"
  "scratch-ki-server"
  "Script2Movie"
  "Silvester-Countdown"
  "Smooth-Animations"
  "SongCreator"
  "Sprach-Berater"
  "trustgamer"
  "FlohmarktScanner"
)

# Für jedes Repo: git subtree add
for repo in "${REPOS[@]}"; do
  echo "📦 Adding $repo..."
  git subtree add --prefix=projects/$repo https://github.com/lamacOs/$repo main 2>/dev/null || \
  git subtree add --prefix=projects/$repo https://github.com/lamacOs/$repo master 2>/dev/null || \
  echo "⚠️ Fehler bei $repo - Branch nicht gefunden"
done

echo "✅ Migration abgeschlossen!"
git log --oneline | head -20