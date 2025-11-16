# 📋 Projekt-Informationen

## 🎯 Projektziel

Elegante Hochzeitswebsite für Melis & Karim's Hochzeit am **08.08.2026** mit:
- Apple-inspiriertem Design
- Dreisprachigkeit (DE/TR/AR)
- Passwortschutz
- Responsivem Layout

---

## 📁 Projektstruktur

```
melis-karim-wedding/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions Deployment
│
├── components/
│   ├── ui/                     # Shadcn UI Komponenten
│   ├── ElegantHero.tsx         # Hero-Sektion
│   ├── SaveTheDateWithCountdown.tsx  # Countdown
│   ├── Services.tsx            # Programm
│   ├── ElegantLocation.tsx     # Location & Karte
│   ├── HotelCarousel.tsx       # Hotels
│   ├── Dresscode.tsx           # Dresscode
│   ├── ElegantWeddingParty.tsx # Hochzeitsgesellschaft
│   ├── GiftRegistry.tsx        # Geschenke
│   └── LanguageSwitcher.tsx    # Sprachumschalter
│
├── contexts/
│   └── LanguageContext.tsx     # Mehrsprachigkeit + IP-Erkennung
│
├── imports/                    # Figma-Assets (SVGs, Bilder)
│
├── styles/
│   └── globals.css             # Globale Styles
│
├── .env.example                # Environment Variables Template
├── .gitignore                  # Git Ignore Regeln
├── App.tsx                     # Haupt-App-Komponente
├── DEPLOYMENT.md               # Deployment Anleitung
├── GITHUB_SETUP.md             # Quick Start Guide
├── LICENSE                     # MIT License
├── PROJECT_INFO.md             # Diese Datei
└── README.md                   # Projekt-Dokumentation
```

---

## 🎨 Design-System

### Farbschema
- **Hauptfarbe**: #8e9899 (Custom Teal)
- **Hintergrund**: Weiß/Grau-Verläufe
- **Text**: Grau-Abstufungen
- **Akzente**: Custom Color für Buttons

### Typografie
- **Font**: System Font Stack (San Francisco, Segoe UI, etc.)
- **Heading**: Semibold, präzises Tracking
- **Body**: Regular, optimales Line-Height
- **Stil**: Apple Design Language

### Effekte
- **Glasmorphismus**: backdrop-blur mit rgba-Transparenz
- **Schatten**: Weiche Apple-Schatten
- **Animationen**: Smooth Transitions, Parallax-Scroll
- **Hover**: Scale-Effekte (1.02)

---

## 🌍 Mehrsprachigkeit

### Unterstützte Sprachen
1. **Deutsch (DE)** - Standard für Deutschland, Österreich, Schweiz
2. **Türkisch (TR)** - Für türkische Gäste
3. **Arabisch (AR)** - Für arabische Gäste

### Sprachauswahl-Logik
1. **IP-Geolocation** (ipapi.co API) - Automatische Erkennung
2. **Browser-Sprache** - Fallback wenn IP-API fehlschlägt
3. **Manuelle Auswahl** - Language Switcher in der Navbar
4. **Persistent** - Speicherung in localStorage

### Höflichkeitsform
Alle Anreden werden großgeschrieben:
- **Ihr** statt ihr
- **Eure** statt eure  
- **Euch** statt euch

---

## 🔐 Sicherheit

### Passwortschutz
- **Passwort**: `Meka`
- **Speicherung**: localStorage (clientseitig)
- **Hinweis**: Nur Basic-Schutz, für sensible Daten Backend empfohlen

### Ändern des Passworts
In `/App.tsx` Zeile 16:
```typescript
if (password === 'NeuesPasswort') {
```

---

## 📅 Wichtige Daten

### Hochzeitsdatum
**08.08.2026**

Ändern in `/contexts/LanguageContext.tsx`:
```typescript
date: '08.08.2026'
```

### Countdown
- Berechnet automatisch Tage/Stunden/Minuten/Sekunden
- Echtzeit-Update jede Sekunde
- Responsive Design

---

## 📍 Location & Hotels

### Venue
**Siegelsbacher Mühle**
- Adresse: Grundmühle 1, 74936 Siegelsbach
- Telefon: +49 7264 921384
- E-Mail: info@siegelsbacher-muehle.de

### Hotels (4 Empfehlungen)
1. Pension Spatzennest - ca. 75€
2. Best Western Hotel - ca. 90€
3. Adler Gaststube Hotel - ca. 90€
4. Motel am Fürfelder Schloss - 102€

**Ändern in:**
- `/components/HotelCarousel.tsx`

---

## 👥 Hochzeitsgesellschaft

### Brautjungfern (4)
- Geraldine
- Marie
- Mandy
- Ines

### Trauzeugen (2)
- Jounes
- Henner

**Mit WhatsApp-Direktlinks für Kontakt**

**Ändern in:**
- `/components/ElegantWeddingParty.tsx`
- `/contexts/LanguageContext.tsx` (Namen-Übersetzungen)

---

## 🎭 Programm-Ablauf

1. **14:30 Uhr** - Sektempfang
2. **15:00 Uhr** - Trauung
3. **Ab 16:00 Uhr** - Dinner & Party

**Ändern in:**
- `/components/Services.tsx`
- `/contexts/LanguageContext.tsx` (Übersetzungen)

---

## 👔 Dresscode

**Schick** mit Farbpalette:
- Beige/Cream
- Sage Green
- Dusty Blue
- Terracotta

**Ändern in:**
- `/components/Dresscode.tsx`

---

## 🎁 Geschenke

Informationssektion für Geschenk-Wünsche

**Ändern in:**
- `/components/GiftRegistry.tsx`

---

## 🔧 Technologie

### Framework & Build
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS v4** - Styling

### Libraries
- **Lucide React** - Icons
- **React Slick** - Carousel
- **ipapi.co** - IP Geolocation

### Deployment
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

---

## 📱 Responsive Breakpoints

```css
Mobile:  < 640px   (sm)
Tablet:  640-1024px (md/lg)  
Desktop: > 1024px   (xl/2xl)
```

Alle Komponenten sind responsive!

---

## 🚀 Development

### Setup
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm run preview
```

### Deployment
```bash
git add .
git commit -m "Update"
git push
```

Automatisches Deployment via GitHub Actions!

---

## 📝 Anpassungen

### Häufige Änderungen

| Was                  | Datei                          | Zeile  |
|----------------------|--------------------------------|--------|
| Passwort             | `/App.tsx`                     | 16     |
| Hochzeitsdatum       | `/contexts/LanguageContext.tsx`| ~120   |
| Telefonnummern       | Jeweilige Komponente           | Variiert|
| Hotel-Infos          | `/components/HotelCarousel.tsx`| 14-47  |
| Programm-Zeiten      | `/components/Services.tsx`     | Variiert|
| Texte (DE/TR/AR)     | `/contexts/LanguageContext.tsx`| ~45-800|

---

## ✅ Pre-Launch Checkliste

### Inhalt
- [ ] Passwort gesetzt
- [ ] Hochzeitsdatum korrekt
- [ ] Alle Telefonnummern aktuell
- [ ] Hotel-Informationen aktuell
- [ ] Programm-Zeiten final
- [ ] Alle Übersetzungen korrekt (DE/TR/AR)

### Technik
- [ ] Lokaler Build erfolgreich (`npm run build`)
- [ ] Keine Console Errors
- [ ] Alle Links funktionieren
- [ ] Google Maps lädt korrekt

### Design
- [ ] Mobile Ansicht getestet
- [ ] Desktop Ansicht getestet
- [ ] Alle Bilder laden
- [ ] Animationen smooth

### Deployment
- [ ] GitHub Repository erstellt
- [ ] Code gepusht
- [ ] GitHub Actions erfolgreich
- [ ] Website live und erreichbar

---

## 🎯 Performance

- ✅ Lazy Loading für Bilder
- ✅ Code Splitting
- ✅ Minified CSS/JS
- ✅ Optimierte Assets
- ✅ GPU-beschleunigte Animationen
- ✅ Passive Event Listeners

---

## 🌐 Browser Support

- ✅ Chrome/Edge (empfohlen)
- ✅ Firefox
- ✅ Safari (Desktop & iOS)
- ✅ Mobile Browser

---

## 📞 Support

Bei technischen Fragen:
1. README.md lesen
2. DEPLOYMENT.md konsultieren
3. GitHub Issues erstellen

---

## 📄 Lizenz

MIT License - Siehe LICENSE Datei

---

**Zuletzt aktualisiert:** 2024-11-16

**Projekt-Status:** ✅ Production Ready

**Version:** 1.0.0
