// Home.jsx
// Diese Komponente bildet die Startseite des Portfolios ab.
// Sie enthält Navigation, Auswahlmöglichkeiten, ein Intro und einen Footer mit Social Links.

import { Link } from "react-router-dom"; // Ermöglicht das Routing zwischen Seiten
import { useState } from "react"; // Für Zustandsverwaltung
import emailjs from '@emailjs/browser'; // EmailJS für E-Mail-Versand
import './Contact.css'; // Bindet die zugehörigen CSS-Styles ein

function Contact() {
    const [status, setStatus] = useState(''); // Status: '', 'sending', 'success', 'error'

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // EmailJS konfigurieren - Diese Werte musst du durch deine eigenen ersetzen
        const serviceID = 'SMTP_Service_ID'; // Von EmailJS Dashboard
        const templateID = 'Email_Template_ID'; // Von EmailJS Dashboard
        const publicKey = 'XhyzJ5vx7FMCvOLWs'; // Von EmailJS Dashboard

        emailjs.sendForm(serviceID, templateID, e.target, publicKey)
            .then(() => {
                setStatus('success');
                e.target.reset(); // Formular zurücksetzen
                setTimeout(() => setStatus(''), 5000); // Status nach 5 Sek. zurücksetzen
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    const openEmail = () => {
        const email = "info@nassim-lahoudi.de";
        const subject = "Hello from my portfolio";
        const body = "Hi, I would like to get in touch.";

        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="home-page">
            {/* ---------- Header mit Navigation ---------- */}
            <header className="home-header">
                <nav className="navbar">
                    <ul className="navbar-list">
                        {/* Navigation: Jede Seite als Icon-Link */}
                        {[
                            { to: "/", img: "src/assets/home-symbol.png", alt: "Home" },
                            { to: "/Project", img: "src/assets/code-termial-symbol.png", alt: "Code Terminal" },
                            { to: "/About", img: "src/assets/aboutme-symbol.png", alt: "About Me" },
                            { to: "/Contact", img: "src/assets/email-symbol.png", alt: "Email" }
                        ].map((item, idx) => (
                            <li className="navbar-item" key={idx}>
                                {/* Link zu jeweiliger Route mit Icon */}
                                <Link to={item.to}>
                                    <img src={item.img} alt={item.alt} className="navbar-icon" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* ---------- Hauptinhalt ---------- */}
            <main className="home-main contact-main">
                {/* Auswahl-Sektion: Zeigt verschiedene Schwerpunkte als Buttons */}
                <section className="contact-main-selection-section">
                    <div className="headline-container">
                        <h1 className="intro-title serif-font">Contact me</h1>
                        <p className="intro-subtitle" id="intro-subtitle-white" >Want to work together? Let’s connect.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="input-container">
                        <div className="input-name-container">
                            <div className="input-group">
                                <label htmlFor="firstname" className="label-style">First name</label>
                                <input type="text" name="firstname" id="firstname-input" className="input-normale-style" placeholder="First name" required onInvalid={(e) => e.target.setCustomValidity("Please fill out this field.")} onInput={(e) => e.target.setCustomValidity("")}/>
                            </div>

                            <div className="input-group">
                                <label htmlFor="lastname" className="label-style">Last name</label>
                                <input type="text" name="lastname" id="lastname-input" className="input-normale-style" placeholder="Last name" required onInvalid={(e) => e.target.setCustomValidity("Please fill out this field.")} onInput={(e) => e.target.setCustomValidity("")}/>
                            </div>
                        </div>
                        <div className="input-email-container">
                            <div className="input-group">
                                <label htmlFor="email" className="label-style">E-Mail</label>
                                <input type="email" name="email" id="email-input" className="input-normale-style" placeholder="you@company.com" required onInvalid={(e) => e.target.setCustomValidity("Please fill out this field.")} onInput={(e) => e.target.setCustomValidity("")}/>
                            </div>
                        </div>
                        <div className="input-msg-container">
                            <div className="input-group">
                                <label htmlFor="message" className="label-style">Message</label>
                                <textarea name="message" id="msg-input" className="input-big-style" placeholder="Leave me a message..." required onInvalid={(e) => e.target.setCustomValidity("Please fill out this field.")} onInput={(e) => e.target.setCustomValidity("")}/>
                            </div>
                        </div>
                        <div className="button-container">
                            <button type="submit" className="btn-submit-style" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send message'}
                            </button>
                            <button onClick={openEmail} className="btn-submit-style">Send via mail program</button>
                        </div>
                        {status === 'success' && (
                            <p style={{color: '#b6e3a8', textAlign: 'center', marginTop: '1rem'}}>
                                ✓ Message sent successfully!
                            </p>
                        )}
                        {status === 'error' && (
                            <p style={{color: '#ff6b6b', textAlign: 'center', marginTop: '1rem'}}>
                                ✗ Failed to send. Please try again.
                            </p>
                        )}
                    </form>
                </section>
            </main>

            {/* ---------- Footer mit Social Media Links ---------- */}
            <footer className="home-footer">
                <section className="footer-selection-section">
                    <ul className="footer-selection-list">
                        {/* Social Media Links als Icons */}
                        {[
                            { href: "https://github.com/Nassim-Lahoudi", img: "src/assets/github-symbol.png", alt: "GitHub" },
                            { href: "https://www.linkedin.com/in/nassim-lahoudi/", img: "src/assets/linkedin-symbol.png", alt: "LinkedIn" },
                            { href: "https://dev.to/nassim-lahoudi", img: "src/assets/dev-symbol.png", alt: "Dev.to" }
                        ].map((item, idx) => (
                            <li key={idx}>
                                {/* Externer Link mit Sicherheitsattributen */}
                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                    {/* Icon mit Hover-Effekt (siehe CSS) */}
                                    <img src={item.img} alt={item.alt} className="footer-navbar-icon"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </footer>
        </div>
    );
}

export default Contact; // Exportiert die Komponente für die Verwendung in anderen Komponenten
