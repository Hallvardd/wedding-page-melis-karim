# 🎯 GitHub Setup - Quick Start

Schnellanleitung für das Hochladen auf GitHub und automatisches Deployment.

## ⚡ 5-Minuten Setup

### 1. Repository erstellen auf GitHub
- Gehe zu [github.com/new](https://github.com/new)
- Name: `melis-karim-wedding` (oder beliebig)
- Visibility: **Public**
- ❌ KEIN README, .gitignore oder License anhaken
- Klicke **"Create repository"**

### 2. Terminal öffnen im Projektordner

**Windows:** 
- Rechtsklick im Projektordner → "Git Bash Here" oder "Terminal öffnen"

**Mac/Linux:**
- Terminal öffnen und zum Projektordner navigieren

### 3. Diese Befehle ausführen

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git branch -M main
git push -u origin main
```

**⚠️ Wichtig:** Ersetze `USERNAME` und `REPOSITORY` mit deinen Werten!

**Beispiel:**
```bash
git remote add origin https://github.com/melis-karim/wedding.git
```

### 4. GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. **Settings** → **Pages** (linkes Menü)
3. Source: **GitHub Actions** wählen
4. ✅ Fertig!

### 5. Website aufrufen

Nach 1-2 Minuten ist deine Website live unter:
```
https://USERNAME.github.io/REPOSITORY/
```

---

## 🔧 Falls die Website nicht lädt...

### Base URL konfigurieren

Erstelle eine Datei `vite.config.ts` im Hauptverzeichnis:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/REPOSITORY_NAME/', // Dein Repository-Name!
});
```

**Beispiel:** Wenn Repository = `melis-karim-wedding`:
```typescript
base: '/melis-karim-wedding/',
```

Dann pushen:
```bash
git add vite.config.ts
git commit -m "Add base URL"
git push
```

---

## 📝 Updates pushen

Nach Änderungen:

```bash
git add .
git commit -m "Deine Änderung beschreiben"
git push
```

Deployment startet automatisch! ✨

---

## ✅ Checkliste

- [ ] GitHub Account erstellt
- [ ] Repository erstellt (Public)
- [ ] Git Befehle ausgeführt
- [ ] Code auf GitHub sichtbar
- [ ] Settings → Pages → GitHub Actions aktiviert
- [ ] Workflow im Actions Tab grün ✅
- [ ] Website unter URL erreichbar
- [ ] Passwort "Meka" funktioniert
- [ ] Mobile Ansicht getestet

---

## 🆘 Probleme?

### "fatal: repository not found"
→ Repository URL prüfen. Muss genau so sein: `https://github.com/USERNAME/REPOSITORY.git`

### "Permission denied"
→ GitHub Anmeldung prüfen oder SSH Key einrichten

### "Build failed" im Actions Tab
→ Lokal testen: `npm run build`

### Website zeigt 404
→ `vite.config.ts` mit korrekter Base URL erstellen (siehe oben)

---

## 📞 Hilfe

- [GitHub Docs](https://docs.github.com/pages)
- [Vite Docs](https://vitejs.dev/guide/static-deploy.html#github-pages)

---

**🎉 That's it! Viel Erfolg!**
