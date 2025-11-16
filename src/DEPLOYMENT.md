# 🚀 Deployment Guide - GitHub Pages

Schritt-für-Schritt Anleitung zum Hosting der Hochzeitswebsite auf GitHub Pages.

## Voraussetzungen

- GitHub Account ([kostenlos erstellen](https://github.com/signup))
- Git installiert ([Download](https://git-scm.com/downloads))
- Node.js installiert ([Download](https://nodejs.org/))

## Schritt 1: Repository auf GitHub erstellen

1. Gehe zu [github.com](https://github.com) und melde dich an
2. Klicke auf **"New Repository"** (grüner Button oben rechts)
3. Gib einen Repository-Namen ein, z.B. `melis-karim-wedding`
4. Wähle **Public** (für kostenloses GitHub Pages)
5. **NICHT** "Initialize with README" anklicken
6. Klicke auf **"Create repository"**

## Schritt 2: Lokales Projekt vorbereiten

Öffne ein Terminal/Command Prompt im Projektordner:

```bash
# Prüfe ob alle Dependencies installiert sind
npm install

# Teste den lokalen Build
npm run build
```

## Schritt 3: Git Repository initialisieren

```bash
# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit - Wedding website"

# Remote Repository verbinden (ersetze USERNAME und REPOSITORY)
git remote add origin https://github.com/USERNAME/REPOSITORY.git

# Branch umbenennen zu main
git branch -M main

# Code hochladen
git push -u origin main
```

**Beispiel:**
```bash
git remote add origin https://github.com/johndoe/melis-karim-wedding.git
```

## Schritt 4: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **"Settings"** (oben rechts)
3. Klicke im linken Menü auf **"Pages"**
4. Unter "Source" wähle: **"GitHub Actions"**
5. Die Workflow-Datei wird automatisch erkannt

## Schritt 5: Deployment überwachen

1. Gehe zum **"Actions"** Tab in deinem Repository
2. Du siehst den Workflow **"Deploy to GitHub Pages"** laufen
3. Warte bis der grüne Haken erscheint (dauert 1-2 Minuten)
4. Bei Fehlern: Klicke auf den Workflow für Details

## Schritt 6: Website aufrufen

Nach erfolgreichem Deployment ist deine Website erreichbar unter:

```
https://USERNAME.github.io/REPOSITORY/
```

**Beispiel:**
```
https://johndoe.github.io/melis-karim-wedding/
```

## 🔧 Konfiguration für Subdirectory

Wenn deine Website unter einem Unterverzeichnis läuft, musst du die Base URL konfigurieren.

Erstelle eine Datei `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Ersetze mit deinem Repository-Namen
});
```

**Beispiel:**
```typescript
base: '/melis-karim-wedding/',
```

Dann neu committen und pushen:
```bash
git add vite.config.ts
git commit -m "Add base URL for GitHub Pages"
git push
```

## 📝 Updates durchführen

Nach Änderungen am Code:

```bash
# Änderungen hinzufügen
git add .

# Commit mit Beschreibung
git commit -m "Beschreibung der Änderung"

# Hochladen
git push
```

Das Deployment startet **automatisch** nach jedem Push!

## 🐛 Troubleshooting

### Problem: Deployment schlägt fehl

**Lösung:**
1. Prüfe den Actions Tab für Fehlermeldungen
2. Stelle sicher, dass `npm run build` lokal funktioniert
3. Prüfe ob `package.json` alle Dependencies enthält

### Problem: Website zeigt 404

**Lösungen:**
1. Warte 1-2 Minuten nach dem Deployment
2. Prüfe Settings → Pages: Source muss "GitHub Actions" sein
3. Prüfe ob `base` in `vite.config.ts` korrekt ist
4. Hard-Refresh im Browser: `Ctrl+Shift+R` (Windows) oder `Cmd+Shift+R` (Mac)

### Problem: CSS/Bilder laden nicht

**Lösung:**
- Setze die korrekte `base` URL in `vite.config.ts`
- Alle Pfade müssen relativ sein

### Problem: "Permission denied"

**Lösung:**
```bash
# Repository Settings → Actions → General
# Scrolle zu "Workflow permissions"
# Wähle "Read and write permissions"
# Speichern
```

## 🌍 Custom Domain (Optional)

### Domain kaufen und verbinden:

1. Kaufe eine Domain bei einem Anbieter (z.B. Namecheap, GoDaddy)
2. GitHub Settings → Pages → Custom domain
3. Gib deine Domain ein, z.B. `www.melis-karim-wedding.de`
4. Warte auf DNS-Check

### DNS-Einstellungen beim Domain-Anbieter:

**A Records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record:**
```
www -> USERNAME.github.io
```

### HTTPS aktivieren:
- GitHub Pages aktiviert HTTPS automatisch
- Kann 24 Stunden dauern nach Domain-Konfiguration

## 📊 Performance

### Build-Optimierung bereits aktiv:
- ✅ Tree-shaking
- ✅ Code-splitting
- ✅ Minification
- ✅ Asset optimization

### Empfehlungen:
- Bilder sind bereits optimiert
- Lazy loading ist aktiv
- GPU-beschleunigte Animationen

## 🔒 Sicherheit

- ✅ HTTPS automatisch aktiviert
- ✅ Passwortschutz clientseitig (localStorage)
- ⚠️ Für sensible Daten: Backend-Authentifizierung empfohlen

## 💡 Tipps

1. **Vor jedem Push lokal testen:**
   ```bash
   npm run dev
   ```

2. **Build testen:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Branch-Strategie:**
   - `main` für Production
   - Feature-Branches für Entwicklung

4. **Git-Tags für Versionen:**
   ```bash
   git tag -a v1.0.0 -m "Initial release"
   git push origin v1.0.0
   ```

## 📱 Mobile Testing

Teste auf verschiedenen Geräten:
- iOS Safari
- Android Chrome
- Desktop Browser

## 🎉 Fertig!

Deine Hochzeitswebsite ist jetzt live! 🎊

**Teile den Link:**
```
https://USERNAME.github.io/REPOSITORY/
```

Bei Fragen oder Problemen: GitHub Issues nutzen oder Dokumentation prüfen.

---

**Viel Erfolg! 💍**
