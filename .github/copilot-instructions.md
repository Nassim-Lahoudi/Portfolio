## Kurzbeschreibung

Dieses Repository ist ein kleines, modulares React‑Portfolio, gebaut mit Vite. Wichtige Bestandteile sind die Seiten in `src/components/*`, das Routing in `src/components/App/App.jsx` und der Einstiegspunkt `src/main.jsx`.

## Schnellstart (für Agenten)
- Abhängigkeiten installieren: `npm install`
- Dev‑Server: `npm run dev` (Vite; Standardport ist in der Regel 5173)
- Build: `npm run build`
- Lint: `npm run lint`

Hinweis: README.md enthält eine ältere Referenz zu `npm start` und Port 3000 — tatsächlich steuert `package.json` die Skripte (`dev`, `build`, `preview`). Verwende die Skripte aus `package.json`.

## Architektur & wichtige Orte
- Einstieg: `src/main.jsx` — bootstrapt React + `BrowserRouter`.
- Routing: `src/components/App/App.jsx` — hier werden Seiten (Home, Project, About, Contact) registriert. Neue Seiten müssen hier als Route ergänzt werden.
- Seiten/Komponenten: `src/components/<Page>/<Page>.jsx` paired mit `<Page>.css` (Konvention: Komponenten mit zugehörigem CSS im selben Ordner).
- Particles / Hintergrund: `src/components/Particles/Particles.jsx` — verwendet `@tsparticles/react` und lädt `slim` via `loadSlim(engine)`. Particle‑Optionen sind in dieser Datei konfiguriert.
- Assets: `src/assets/` — Icons und Bilder. Beachte, dass in JSX teilweise Pfade als Strings verwendet werden (z. B. `src/assets/nassim-lahoudi.png`) statt `import` — prüfe Pfadauflösung bei Änderungen.

## Projekt‑Spezifika / Muster
- Styling: einfache `.css` Dateien pro Komponente, keine CSS-Module. Klassen folgen kleinen BEM-ähnlichen Namen (z. B. `home-main`, `profile-img`).
- Images: Komponenten wie `About.jsx` nutzen `<img src="src/assets/..." />` literale Pfade. Wenn du Bilder verschiebst oder bundling‑spezifische Probleme siehst, verwende `import img from '../../assets/foo.png'` oder lege statische Dateien in `public/`.
- Routing: React Router v7 — `Routes`/`Route` Komponenten in `App.jsx` definieren Pfade; Komponenten werden direkt als `element` übergeben.
- Third‑party: Particles mit `tsparticles` und React‑Wrapper; Versionen siehe `package.json`.

## Typische Aufgaben & wo ändern
- Neue Seite anlegen: Erstelle `src/components/NewPage/NewPage.jsx` + `NewPage.css`, dann importiere und registriere Route in `src/components/App/App.jsx`.
- Particles anpassen: Editiere `options` in `src/components/Particles/Particles.jsx` (Zahl, Größe, Links, Interaktion).
- Avatar/Profilbild: Stil in `src/components/About/About.css` anpassen (Klasse `.profile-img`).

## Build/Dev Fallen & Hinweise
- Verwende `npm run dev` statt `npm start`. Vite benutzt standardmäßig Port 5173; README.md ist veraltet in dieser Hinsicht.
- Es gibt aktuell keine Tests/CI konfiguration im Repo — füge bei Bedarf ein Test‑Setup hinzu und dokumentiere die Befehle hier.
- Linting: `npm run lint` verwendet ESLint; Fehler beheben bevor du Änderungen commitest.

## Beispiele (konkrete Dateiiverweise)
- Routing: `src/components/App/App.jsx` — zeige neue Route wie `<Route path="/example" element={<Example/>} />`.
- Particles: `src/components/Particles/Particles.jsx` — ändere `particles.number.value` oder `links.distance` direkt in `options`.
- Avatar: `src/components/About/About.jsx` verwendet `<img className="profile-img" src="src/assets/nassim-lahoudi.png" />` — style in `src/components/About/About.css`.

## Wenn etwas unklar ist
- Öffne `package.json` und `vite.config.js` um Skripte und Build‑Root zu prüfen.
- Suche nach `src/components` wenn du Komponenten‑Kontext brauchst.

Wenn du präzisere Anweisungen wünschst (z. B. Test- oder CI‑Setup), sag mir welche Bereiche priorisiert werden sollen.
