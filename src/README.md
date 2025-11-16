# 💍 Melis & Karim Hochzeitswebsite

Eine elegante Hochzeitswebsite im Apple-Design für die Hochzeit am 08.08.2026.

## ✨ Features

- 🔒 **Passwortschutz** - Zugriff mit dem Passwort "Meka"
- 🌍 **Dreisprachig** - Deutsch, Türkisch & Arabisch mit automatischer Browser-Spracherkennung
- 🌎 **IP-basierte Spracherkennung** - Automatische Sprachauswahl basierend auf dem Standort
- 🎨 **Apple Design Language** - Saubere Verläufe, Glasmorphismus & verfeinerte Typografie
- ⏱️ **Live Countdown** - Bis zum großen Tag
- 📍 **Interaktive Karte** - Location mit Google Maps Integration
- 🏨 **Hotel-Empfehlungen** - Carousel mit nahegelegenen Hotels
- 👔 **Dresscode** - Schick mit Farbpalette
- 💝 **Geschenk-Registry** - Informationen zu Geschenken
- 📱 **Responsive Design** - Optimiert für alle Geräte

## 🏗️ Technologie-Stack

- **React** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **React Slick** - Carousel
- **Vite** - Build Tool

## 📦 Installation

```bash
# Abhängigkeiten installieren
npm install

# Development Server starten
npm run dev

# Für Production bauen
npm run build
```

## 🚀 GitHub Pages Deployment

### Schnellstart

1. **Repository erstellen** auf GitHub
2. **GitHub Pages aktivieren**:
   - Settings → Pages → Source: GitHub Actions wählen
3. **Code hochladen**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git branch -M main
   git push -u origin main
   ```
4. **Automatisches Deployment** läuft nach dem Push
5. **Website aufrufen** unter: `https://USERNAME.github.io/REPOSITORY/`

Detaillierte Anleitung siehe [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 Projektstruktur

```
/
├── components/           # React Komponenten
│   ├── ui/              # Shadcn UI Komponenten
│   ├── ElegantHero.tsx
│   ├── SaveTheDateWithCountdown.tsx
│   ├── Services.tsx     # Programm-Abschnitt
│   ├── ElegantLocation.tsx
│   ├── HotelCarousel.tsx
│   ├── Dresscode.tsx
│   ├── ElegantWeddingParty.tsx
│   └── GiftRegistry.tsx
├── contexts/            # React Context
│   └── LanguageContext.tsx  # Mehrsprachigkeit & IP-Erkennung
├── imports/             # Figma-generierte Assets
├── styles/              # Global Styles
│   └── globals.css
└── App.tsx             # Hauptkomponente
```

## 🔧 Konfiguration

### Passwort ändern
In `/App.tsx` Zeile 16:
```typescript
if (password === 'NeuesPasswort') {
```

### Hochzeitsdatum ändern
In `/contexts/LanguageContext.tsx`:
```typescript
date: '08.08.2026'
```

### Telefonnummern & Kontakte ändern
Alle Kontaktdaten befinden sich direkt in den jeweiligen Komponenten:
- **Location**: `/components/ElegantLocation.tsx`
- **Hotels**: `/components/HotelCarousel.tsx`
- **Hochzeitsgesellschaft**: `/components/ElegantWeddingParty.tsx`

## 🌍 Mehrsprachigkeit

Die Website unterstützt drei Sprachen:
- **Deutsch** (DE) - Für Deutschland, Österreich, Schweiz
- **Türkisch** (TR) - Für Türkei
- **Arabisch** (AR) - Für arabische Länder

Sprachauswahl erfolgt automatisch basierend auf:
1. IP-Geolocation (ipapi.co API)
2. Browser-Spracheinstellung (Fallback)
3. Manuelle Auswahl über Language Switcher

## 🎨 Design-Prinzipien

- **Apple-inspiriert**: Weiche Schatten, subtile Verläufe, Glasmorphismus
- **Typografie**: System-Schriften mit präzisem Tracking und Leading
- **Farben**: Custom-Akzentfarbe #8e9899 für Buttons
- **Animationen**: Smooth Parallax-Effekte beim Scrollen
- **Höflichkeitsform**: Alle Anreden großgeschrieben (Ihr/Eure/Euch)

## 📱 Browser-Support

- Chrome (empfohlen)
- Firefox
- Safari
- Edge
- Mobile Browser (iOS Safari, Android Chrome)

## 📄 Lizenz

Private Hochzeitswebsite - Alle Rechte vorbehalten

---

💑 Mit Liebe erstellt für Melis & Karim
