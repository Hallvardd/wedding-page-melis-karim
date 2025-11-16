# ⚡ Quick Reference - Hochzeitswebsite

Schnellzugriff auf die wichtigsten Befehle und Informationen.

---

## 🚀 Deployment (First Time)

```bash
# 1. Repository auf github.com erstellen (Public)

# 2. Terminal öffnen und ausführen:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main

# 3. GitHub: Settings → Pages → Source: "GitHub Actions"

# 4. Warte 2 Minuten → Website live!
# URL: https://USERNAME.github.io/REPO/
```

---

## 🔄 Updates pushen

```bash
git add .
git commit -m "Beschreibung"
git push
```

Deployment automatisch! ✨

---

## 💻 Lokal testen

```bash
# Development
npm install
npm run dev
# → http://localhost:5173

# Build testen
npm run build
npm run preview
```

---

## 🔧 Wichtige Dateien

| Was ändern?           | Datei                            |
|-----------------------|----------------------------------|
| **Passwort**          | `/App.tsx` (Zeile 16)           |
| **Hochzeitsdatum**    | `/contexts/LanguageContext.tsx` |
| **Hotels**            | `/components/HotelCarousel.tsx` |
| **Hochzeitsgesellschaft** | `/components/ElegantWeddingParty.tsx` |
| **Location-Telefon**  | `/components/ElegantLocation.tsx` |
| **Programm-Zeiten**   | `/components/Services.tsx` |
| **Texte (alle Sprachen)** | `/contexts/LanguageContext.tsx` |

---

## 🌍 Sprachen

- **DE** (Deutsch) - Standard
- **TR** (Türkisch)
- **AR** (Arabisch)

Alle Übersetzungen in `/contexts/LanguageContext.tsx`

---

## 🔐 Login

**Passwort:** `Example`

Ändern in `/App.tsx`:
```typescript
if (password === 'Example') {
```

---

## 📅 Datum

**Hochzeit:** 08.08.2026

Ändern in `/contexts/LanguageContext.tsx`:
```typescript
date: '08.08.2026'
```

---

## 📍 Sektionen (Reihenfolge)

1. Hero
2. Countdown
3. Programm (Services)
4. Location
5. Hotels
6. Dresscode
7. Hochzeitsgesellschaft (Contact)
8. Geschenke (Gift Registry)

---

## 🎨 Custom Color

**Akzentfarbe:** `#8e9899`

Verwendet für:
- Buttons
- Links
- Highlights

---

## 📱 Testen

### Browser
- Chrome ✅
- Firefox ✅
- Safari ✅
- Mobile ✅

### Breakpoints
- Mobile: < 640px
- Tablet: 640-1024px
- Desktop: > 1024px

---

## 🐛 Probleme lösen

### Build schlägt fehl
```bash
npm install
npm run build
# Fehler im Terminal lesen
```

### Website zeigt 404
Erstelle `vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/REPO-NAME/',
});
```

### Deployment fehlgeschlagen
- GitHub Actions Tab prüfen
- Logs lesen
- Settings → Pages → Source prüfen

---

## 📂 Wichtige Ordner

```
components/     → React Komponenten
contexts/       → Language Context
imports/        → Figma Assets
styles/         → CSS
.github/        → GitHub Actions
```

---

## 🔗 Website URLs

**Development:**
```
http://localhost:5173
```

**Production:**
```
https://USERNAME.github.io/REPOSITORY/
```

---

## ✅ Pre-Launch Check

- [ ] `npm run build` funktioniert
- [ ] Alle 3 Sprachen (DE/TR/AR) funktionieren
- [ ] Mobile Ansicht OK
- [ ] Alle Links funktionieren
- [ ] Google Maps lädt
- [ ] Countdown läuft
- [ ] Hotels anzeigen OK
- [ ] WhatsApp-Links funktionieren

---

## 📞 Hotlines

| Problem              | Wo nachschauen              |
|----------------------|-----------------------------|
| Erste Schritte       | `README.md`                 |
| Deployment           | `DEPLOYMENT.md`             |
| Quick Setup          | `GITHUB_SETUP.md`           |
| Projekt-Infos        | `PROJECT_INFO.md`           |
| Diese Übersicht      | `QUICK_REFERENCE.md` ⭐      |

---

## 🎯 Support-Cheat-Sheet

```bash
# Projekt neu klonen
git clone https://github.com/USERNAME/REPO.git
cd REPO
npm install

# Status prüfen
git status
git log --oneline

# Änderungen rückgängig
git reset --hard HEAD

# Zu vorherigem Commit
git reset --hard COMMIT_HASH

# Neuer Branch
git checkout -b feature-name

# Branch mergen
git checkout main
git merge feature-name
```

---

## 🎉 Nach Go-Live

1. **Teilen:**
   - Link an Gäste senden
   - QR-Code generieren (optional)

2. **Monitoring:**
   - GitHub Actions Tab regelmäßig checken
   - Browser-Konsole für Fehler prüfen

3. **Updates:**
   - Änderungen lokal testen
   - Dann pushen
   - Nach 2 Min live

---

**🚀 Bereit für den Launch!**

Viel Erfolg! 💍✨
