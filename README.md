# 🚀 Meine Neon Bio Seite (guns.lol Alternative)

Dies ist eine komplett anpassbare, neon-blaue Profilseite. Sie bietet einen "Click to Enter"-Screen, einen animierten Grid-Hintergrund, Social-Media-Links und optional Hintergrundmusik.

## 🛠️ 1. Seite konfigurieren (Ohne Programmieren!)

Du musst **keinen** HTML oder CSS Code anfassen! Öffne einfach die Datei `config.js` in einem Texteditor (z.B. VS Code oder Editor).
Dort kannst du ganz einfach Folgendes anpassen:
- Deinen Namen (`username`)
- Dein Profilbild (`avatar` - füge einfach einen Link zu einem Bild ein)
- Deine Beschreibung (`bio`)
- Hintergrundmusik (`audioUrl` - Link zu einer MP3)
- Deine Social Media Links (`socials`)
- Die Neon-Farbe (`theme.neonColor`)

## 🌐 2. Auf GitHub hochladen

Um die Seite online zu stellen, laden wir sie zuerst auf GitHub hoch:

1. Erstelle einen kostenlosen Account auf [GitHub](https://github.com/).
2. Klicke oben rechts auf das **+** Icon und wähle **New repository**.
3. Gib dem Repository einen Namen (z.B. `my-bio`).
4. Wähle **Public** (Öffentlich) und klicke auf **Create repository**.
5. Klicke auf der nächsten Seite auf **"uploading an existing file"**.
6. Ziehe alle 5 Dateien (`index.html`, `style.css`, `script.js`, `config.js`, `README.md`) in das Feld.
7. Klicke unten auf den grünen Button **Commit changes**.

## ☁️ 3. Über Cloudflare Pages hosten (Kostenlos & Extrem schnell)

Jetzt bringen wir die Seite live ins Internet:

1. Erstelle einen kostenlosen Account bei [Cloudflare](https://dash.cloudflare.com/sign-up).
2. Gehe links im Menü auf **Workers & Pages**.
3. Klicke auf den blauen Button **Create application** und wähle oben den Tab **Pages**.
4. Klicke auf **Connect to Git**.
5. Verbinde deinen GitHub Account und wähle das Repository aus, das du gerade erstellt hast (z.B. `my-bio`).
6. Klicke auf **Begin setup**.
7. Du musst **keine** Build-Einstellungen ändern (lass alles leer/auf Standard).
8. Klicke auf **Save and Deploy**.

🎉 **Fertig!** Cloudflare baut nun deine Seite. Nach wenigen Sekunden erhältst du einen Link (z.B. `my-bio.pages.dev`), unter dem deine krasse Neon-Seite ab sofort für jeden erreichbar ist!

---
*Tipp: Wenn du später etwas in der `config.js` änderst und auf GitHub hochlädst, aktualisiert Cloudflare deine Seite automatisch!*
