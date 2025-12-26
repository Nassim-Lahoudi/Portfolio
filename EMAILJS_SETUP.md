# EmailJS Setup Anleitung

## Schritt 1: EmailJS Account erstellen
1. Gehe zu https://www.emailjs.com/
2. Klicke auf "Sign Up" und erstelle einen kostenlosen Account
3. Bestätige deine E-Mail-Adresse

## Schritt 2: Email Service verbinden
1. Im Dashboard: Klicke auf "Email Services" → "Add New Service"
2. Wähle deinen E-Mail-Provider (z.B. Gmail, Outlook, Hotmail)
3. Für **Hotmail/Outlook**:
   - Service: "Outlook"
   - Gib deine E-Mail ein: test@test.test
   - Folge den Anweisungen zur Autorisierung
4. Notiere die **Service ID** (z.B. "service_abc123")

## Schritt 3: Email Template erstellen
1. Im Dashboard: Klicke auf "Email Templates" → "Create New Template"
2. Template Name: "Portfolio Contact Form"
3. Template-Inhalt:
   ```
   Subject: Neue Kontaktanfrage von {{firstname}} {{lastname}}

   From: {{firstname}} {{lastname}}
   Email: {{email}}

   Nachricht:
   {{message}}
   ```
4. In den Template Settings:
   - "To Email": absender@email.de
   - "From Name": {{firstname}} {{lastname}}
   - "Reply To": {{email}}
5. Speichern und notiere die **Template ID** (z.B. "template_xyz789")

## Schritt 4: Public Key finden
1. Im Dashboard: Klicke auf "Account" → "General"
2. Finde deinen **Public Key** (z.B. "AbC123dEf456")

## Schritt 5: Umgebungsvariablen konfigurieren

### Variante A: Lokale Entwicklung
1. Öffne die `.env` Datei im Projektroot
2. Ersetze die Platzhalter mit deinen echten Werten:
   ```env
   VITE_EMAILJS_SERVICE_ID=deine_service_id
   VITE_EMAILJS_TEMPLATE_ID=deine_template_id
   VITE_EMAILJS_PUBLIC_KEY=dein_public_key
   ```
3. Speichere die Datei
4. Starte den Dev-Server neu: `npm run dev`

### Variante B: Production/GitHub Pages
Wenn du auf GitHub Pages oder einem anderen Hosting-Service deployst:
1. Füge die Umgebungsvariablen in deinen GitHub Secrets hinzu
2. Oder konfiguriere sie in den Einstellungen deines Hosting-Providers
3. Stelle sicher, dass die Variablen mit `VITE_` beginnen

**Wichtig:** Die `.env` Datei ist in `.gitignore` und wird NICHT zu GitHub gepusht. Das schützt deine API-Schlüssel!
const serviceID = 'service_abc123';
const templateID = 'template_xyz789';
const publicKey = 'AbC123dEf456';
```

## Fertig!
Nach dem Eintragen der Werte funktioniert das Kontaktformular sofort - keine Bestätigungs-E-Mail nötig!

### Vorteile von EmailJS:
- ✓ Funktioniert sofort (keine Bestätigung nötig)
- ✓ 200 kostenlose E-Mails pro Monat
- ✓ Zuverlässiger als FormSubmit
- ✓ Bessere Kontrolle über E-Mail-Format
- ✓ Status-Feedback im Formular
