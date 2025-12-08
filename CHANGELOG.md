# Changelog - Obersaxer Titsch Website

Übersicht aller Änderungen von der alten zur neuen Website.

---

## 🎨 Design & UI

### Navigation
- Memory als neuer erster Menüpunkt hinzugefügt
- Dropdown-Menü für Hintergrundwissen (Zur Gschicht, Üssprach & Schribwiis)
- Konsistente Navigation über alle Seiten
- Mobile-optimiertes Hamburger-Menü

### Styling
- Einheitliches Design mit Brand-Farben (#2F88C1, #86669F)
- Animierte Hintergrund-Dots auf allen Seiten
- Responsive Design für Mobile, Tablet, Desktop
- Moderne Typografie (Roslindale Variable, Nunito Sans)

### Footer
- Vollständiger Footer mit Navigation, Hintergrundwissen, Instagram-Link
- Copyright mit dynamischem Jahr
- Links zu Impressum & Datenschutz

---

## 📚 Content & Features

### Neue Seiten
- **memory.html** - Interaktives Memory-Spiel
- **404.html** - Custom Error-Seite
- **under-construction.html** - Temporäre Landing-Page

### Homepage (index.html)
- "Wort vom Tàg" als Hero-Section
- Memory-Teaser über Grundwissen-Bereich
- Hintergrundwissen-Section mit Links
- Scroll-Hints für bessere Navigation
- Externe Links (Pro Supersaxa, Walserverein, Gemeinde)

### Wörter-Seite (weerter.html)
- 120+ Wörter mit deutschen Übersetzungen
- Such- und Filterfunktion
- Sortierung: Dialekt A-Z, Deutsch A-Z, Neueste
- Kategorie-Filter (Nomen, Verben, Adjektive, Ausdrücke)
- Tag-Filter (Familie, Tiere, Essen, etc.)

### Redewendungen (redewendiga.html)
- 15 Redewendungen mit deutschen Übersetzungen
- Gleiche Filter- und Sortieroptionen wie Wörter

### Memory-Spiel
- 9 zufällige Wortpaare (Obersaxer Titsch ↔ Hochdeutsch)
- 3D-Flip-Animationen
- Shake-Animation bei falschen Paaren
- Fade-Out-Animation bei Matches
- Konfetti-Effekt bei Spielende
- Responsive Grid (6 Karten Desktop, 3 Tablet, 2 Mobile)
- Visuelle Unterscheidung (Grauer Hintergrund für deutsche Wörter)
- Erfolgs-Overlay mit Neustart-Button

### Hintergrundwissen
- **geschichte.html** - Geschichte des Dialekts mit Bildern
- **aussprache.html** - Aussprache & Schreibweise

---

## 🔧 Technische Verbesserungen

### Datenstruktur
- **data-words.js** - Strukturierte Wortdatenbank mit:
  - Alle 120+ Wörter mit deutschen Übersetzungen
  - Kategorisierung (noun, verb, adjective, other, expression)
  - Tags für thematische Filterung
  - Metadaten (Ordner, Bilder, Datum)
  - Korrigierte IDs für korrekte Obersaxer Schreibweise

- **data-phrases.js** - Redewendungen mit Übersetzungen

### JavaScript-Module
- **main.js** - Navigation, Background-Dots, Jahr-Update
- **word-of-the-day.js** - Tägliches Wort-System
- **card-renderer.js** - Dynamische Kartendarstellung
- **filter-sort.js** - Filter- und Sortierlogik
- **memory.js** - Memory-Spiel Logik
- **word-detail-modal.js** - Detail-Ansicht für Wörter

### CSS-Architektur
Modularisierte Stylesheets:
- `main.css` - Basis-Styles & Variablen
- `navigation.css` - Header & Navigation
- `hero.css` - Hero-Sections
- `cards.css` - Wortkarten-Styling
- `memory.css` - Memory-Spiel
- `animations.css` - Alle Animationen
- `responsive.css` - Breakpoints
- `background.css` - Hintergrund-Dots
- `footer.css` - Footer-Styling
- `legal.css` - Impressum & Datenschutz

### SEO-Optimierung
- Meta-Tags auf allen Hauptseiten
- Open Graph Tags für Social Media
- Twitter Cards
- Semantisches HTML
- Alt-Texte für Bilder
- noindex/nofollow für rechtliche Seiten

### Server-Konfiguration
- **.htaccess** - Apache-Konfiguration
  - Custom 404 Error-Page
  - UTF-8 Encoding
  - Gzip-Komprimierung
  - Browser-Caching

---

## 📊 Daten-Updates

### Wortdatenbank
- **Alle germanWord-Werte** ausgefüllt (von ~45 auf 120+ Wörter)
- **Kategorien korrigiert** basierend auf germanWord:
  - Expressions für Multi-Wort-Phrasen
  - Other für Adverben/Präpositionen/Direktionalwörter
  - Verben für zusammengesetzte Verben
- **IDs angepasst** für korrekte Obersaxer Schreibweise

### Redewendungen
- Alle 15 Redewendungen mit deutschen Übersetzungen
- Manuell verifiziert und korrigiert

---

## 🌐 Domain & Deployment

### URL-Änderungen
- Alte Domain: `adrianjanka.ch/obersaxer-titsch/`
- Neue Domain: `obersaxer-titsch.ch`
- Alle Meta-Tags aktualisiert

### Performance
- Optimierte Bildgrößen
- Lazy Loading für Karten
- Minimierte CSS/JS (optional)

---

## 📱 Mobile Optimierung

- Touch-optimierte Wortkarten
- Responsive Navigation mit Hamburger-Menü
- Optimierte Memory-Grid-Layouts
- Mobile-freundliche Textgrößen
- Touch-Gesten für Kartendrehung

---

## 🎯 Features für die Zukunft

### Geplant (nicht implementiert)
- Statistiken/Bestenliste für Memory
- Sound-Effekte
- Timer für Memory
- Audio-Aussprache der Wörter
- Favoritenfunktion
- Weitere Quiz-Modi
- Sitemap.xml
- robots.txt

---

## 📄 Rechtliches

- Impressum mit Kontaktdaten
- Datenschutzerklärung
- Cookie-Hinweis (falls benötigt)

---

**Version:** 2.0  
**Launch:** Dezember 2025  
**Entwickelt von:** Adrian Janka
